import http from 'node:http';
import {readFile,mkdir,writeFile,rename} from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createGame,play,exchange,pass,expireTurn} from './public/engine.mjs';
import {TIME_OPTIONS} from './public/session.mjs';
const chatTimes=new Map();
const root=path.dirname(fileURLToPath(import.meta.url)),dataDir=process.env.QWIRKLE_DATA||path.join(root,'data');
await mkdir(dataDir,{recursive:true});
const rooms=new Map();try{for(const r of JSON.parse(await readFile(path.join(dataDir,'rooms.json'),'utf8')))if(Date.now()-r.updated<7*86400000)rooms.set(r.code,r)}catch{}
let saving=Promise.resolve();function persist(){const snapshot=JSON.stringify([...rooms.values()]);saving=saving.then(async()=>{await writeFile(path.join(dataDir,'rooms.tmp'),snapshot);await rename(path.join(dataDir,'rooms.tmp'),path.join(dataDir,'rooms.json'))}).catch(e=>console.error('Kayıt hatası:',e.message));return saving}
const streams=new Map();const clients=new Map();
function view(r,token){const me=r.seats.findIndex(s=>s.token===token);return {code:r.code,serverNow:Date.now(),turnSeconds:r.turnSeconds||0,messages:r.messages||[],me,host:me===0,seats:r.seats.map((s,i)=>({name:s.name,connected:!!streams.get(s.token)?.size,host:i===0})),game:r.game?{...r.game,bag:undefined,bagCount:r.game.bag.length,players:r.game.players.map((p,i)=>({name:p.name,score:p.score,count:p.hand.length,hand:i===me?p.hand:undefined}))}:null}}
function broadcast(r){for(const s of r.seats)for(const res of streams.get(s.token)||[])res.write(`data: ${JSON.stringify(view(r,s.token))}\n\n`)}
async function changed(r){r.updated=Date.now();await persist();broadcast(r)}
function reply(res,status,obj){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(obj))}
async function body(req){let b='';for await(const c of req){b+=c;if(b.length>16384)throw Error('İstek çok büyük.')}return JSON.parse(b||'{}')}
function name(v){return String(v||'Oyuncu').trim().slice(0,24)||'Oyuncu'}
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Cache-Control','no-store');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'none'; form-action 'self'");
 try{const u=new URL(req.url,'http://localhost');
 if(u.pathname==='/api/health')return reply(res,200,{ok:true,rooms:rooms.size});
 if(u.pathname==='/api/events'){
 const token=u.searchParams.get('token'),r=rooms.get(u.searchParams.get('room'));if(!r||!r.seats.some(s=>s.token===token))return reply(res,403,{error:'Oda oturumu bulunamadı.'});
 res.writeHead(200,{'Content-Type':'text/event-stream','Connection':'keep-alive','X-Accel-Buffering':'no'});if(!streams.has(token))streams.set(token,new Set());streams.get(token).add(res);broadcast(r);const ping=setInterval(()=>res.write(': ping\n\n'),15000);req.on('close',()=>{clearInterval(ping);streams.get(token)?.delete(res);broadcast(r)});return;
 }
 if(u.pathname.startsWith('/api/')&&req.method==='POST'){
 if(req.headers.origin&&new URL(req.headers.origin).host!==req.headers.host)return reply(res,403,{error:'İstek kaynağı geçerli değil.'});
 const ip=req.socket.remoteAddress,now=Date.now(),rate=clients.get(ip)||{time:now,n:0};if(now-rate.time>60000){rate.time=now;rate.n=0}if(++rate.n>300)return reply(res,429,{error:'Çok fazla istek. Biraz bekle.'});clients.set(ip,rate);
 const b=await body(req);
 if(u.pathname==='/api/create'){
 if(rooms.size>=500)return reply(res,503,{error:'Sunucu dolu.'});let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(code));const token=randomBytes(24).toString('hex');const r={code,seats:[{name:name(b.name),token}],game:null,turnSeconds:TIME_OPTIONS.includes(b.turnSeconds)?b.turnSeconds:0,messages:[],updated:Date.now()};rooms.set(code,r);await persist();return reply(res,200,{token,...view(r,token)});
 }
 const r=rooms.get(String(b.room||'').toUpperCase());if(!r)throw Error('Bu kodla bir oda bulunamadı.');
 if(u.pathname==='/api/join'){if(r.game)throw Error('Bu odada oyun başladı. Yeni bir oda kurabilirsin.');if(r.seats.length>=4)throw Error('Oda dolu; en fazla 4 kişi oynayabilir.');const token=randomBytes(24).toString('hex');r.seats.push({name:name(b.name),token});await changed(r);return reply(res,200,{token,...view(r,token)})}
 const me=r.seats.findIndex(s=>s.token===b.token);if(me<0)return reply(res,403,{error:'Oturum geçerli değil.'});
 if(r.game&&expireTurn(r.game)){await changed(r)}
 if(u.pathname==='/api/chat'){
 const text=String(b.text||'').trim();if(!text||[...text].length>160||/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(text))throw Error('Mesaj 1–160 karakter olmalı.');
 if(Date.now()-(chatTimes.get(b.token)||0)<1200)return reply(res,429,{error:'Mesajlar arasında biraz bekle.'});chatTimes.set(b.token,Date.now());r.messages??=[];r.messages.push({id:randomBytes(6).toString('hex'),name:r.seats[me].name,seat:me,text,at:Date.now()});r.messages=r.messages.slice(-40);await changed(r);return reply(res,200,view(r,b.token));
 }
 if(u.pathname==='/api/report'){
 const message=(r.messages||[]).find(m=>m.id===b.messageId);if(!message||message.seat===me)throw Error('Bildirilecek mesaj bulunamadı.');
 if(!['content','harassment','other'].includes(b.reason))throw Error('Bildirim nedeni geçerli değil.');
 r.reports??=[];if(!r.reports.some(v=>v.by===me&&v.messageId===message.id)){if(r.reports.filter(v=>v.by===me).length>=20)throw Error('Bildirim sınırına ulaşıldı.');const report={id:randomBytes(8).toString('hex'),messageId:message.id,by:me,seat:message.seat,name:message.name,text:message.text,reason:b.reason,at:Date.now()};r.reports.push(report);await persist();console.warn('MODERATION_REPORT',JSON.stringify({room:r.code,...report}));}return reply(res,200,{ok:true});
 }
 if(u.pathname==='/api/settings'){if(me!==0||r.game)throw Error('Süreyi oyun başlamadan masa sahibi seçebilir.');if(!TIME_OPTIONS.includes(b.turnSeconds))throw Error('Süre seçimi geçerli değil.');r.turnSeconds=b.turnSeconds;await changed(r);return reply(res,200,view(r,b.token))}
 if(u.pathname==='/api/state')return reply(res,200,view(r,b.token));
 if(u.pathname==='/api/start'){if(me!==0)throw Error('Oyunu oda sahibi başlatabilir.');if(r.game&&!r.game.over)throw Error('Oyun zaten devam ediyor.');if(r.seats.length<2)throw Error('Başlamak için en az iki oyuncu gerekli.');r.game=createGame(r.seats.map(s=>s.name),{turnSeconds:r.turnSeconds||0})}
 else if(u.pathname==='/api/leave'){if(r.game)throw Error('Devam eden oyundaki yerin korunur; bağlantıyı kapatıp sonra dönebilirsin.');const seat=r.seats[me];for(const s of streams.get(seat.token)||[])s.end();streams.delete(seat.token);r.seats.splice(me,1);if(!r.seats.length)rooms.delete(r.code);else await changed(r);await persist();return reply(res,200,{ok:true});}
 else if(u.pathname==='/api/action'){if(!r.game)throw Error('Oyun henüz başlamadı.');if(b.revision!==r.game.revision)throw Error('Masa güncellendi. Hamleni yeniden kontrol et.');if(b.action==='play')play(r.game,me,b.placements);else if(b.action==='exchange')exchange(r.game,me,b.ids);else if(b.action==='pass')pass(r.game,me);else throw Error('Bilinmeyen hamle.');}
 else throw Error('İşlem bulunamadı.');await changed(r);return reply(res,200,view(r,b.token));
 }
 if(req.method!=='GET'&&req.method!=='HEAD')return reply(res,405,{error:'Yöntem desteklenmiyor.'});
 const files={'/':'index.html','/index.html':'index.html','/app.mjs':'app.mjs','/engine.mjs':'engine.mjs','/board.mjs':'board.mjs','/bot-worker.mjs':'bot-worker.mjs','/ui.mjs':'ui.mjs','/session.mjs':'session.mjs','/style.css':'style.css','/refine.css':'refine.css','/privacy.html':'privacy.html','/favicon.svg':'favicon.svg'};let f=files[u.pathname];if(!f&&/^\/assets\/[A-Za-z0-9_-]+\.(webp|png|woff2|txt)$/.test(u.pathname))f=u.pathname.slice(1);if(!f)return reply(res,404,{error:'Bulunamadı.'});let content;try{content=await readFile(path.join(root,'public',f))}catch(e){if(e.code==='ENOENT')return reply(res,404,{error:'Bulunamadı.'});throw e}const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.mjs':'text/javascript; charset=utf-8','.woff2':'font/woff2','.webp':'image/webp','.png':'image/png','.txt':'text/plain; charset=utf-8'};res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:content);
 }catch(e){reply(res,400,{error:e.message||'İşlem tamamlanamadı.'})}
});
server.listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log(`Renkio hazır: http://localhost:${server.address().port}`));
let closing=false;async function shutdown(){if(closing)return;closing=true;await persist();for(const group of streams.values())for(const response of group)response.end();server.close(()=>process.exit(0));setTimeout(()=>process.exit(0),5000).unref()}process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
setInterval(()=>{for(const [k,r] of rooms)if(Date.now()-r.updated>7*86400000)rooms.delete(k);const now=Date.now();for(const [k,v] of clients)if(now-v.time>120000)clients.delete(k)},60000).unref();

setInterval(()=>{for(const r of rooms.values())if(r.game&&expireTurn(r.game))changed(r).catch(e=>console.error('Süre güncellenemedi',e.message))},500).unref();
