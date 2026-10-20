import http from 'node:http';
import {readFile,mkdir,writeFile,rename} from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createGame,play,exchange,pass,expireTurn} from './public/engine.mjs';
import {TIME_OPTIONS} from './public/session.mjs';
import {verifyAccount,publicProfile,verifyGoogleCredential} from './account.mjs';
import {firebaseConfig} from './public/firebase-config.mjs';
import {Matchmaker} from './matchmaking.mjs';
import {BotRunner} from './server-bots.mjs';
const chatTimes=new Map();
const root=path.dirname(fileURLToPath(import.meta.url)),dataDir=process.env.QWIRKLE_DATA||path.join(root,'data');
await mkdir(dataDir,{recursive:true});
const rooms=new Map();try{for(const r of JSON.parse(await readFile(path.join(dataDir,'rooms.json'),'utf8')))if(Date.now()-r.updated<7*86400000)rooms.set(r.code,r)}catch{}
let saving=Promise.resolve();function persist(){const snapshot=JSON.stringify([...rooms.values()]);saving=saving.then(async()=>{await writeFile(path.join(dataDir,'rooms.tmp'),snapshot);await rename(path.join(dataDir,'rooms.tmp'),path.join(dataDir,'rooms.json'))}).catch(e=>console.error('Kayıt hatası:',e.message));return saving}
const streams=new Map();const clients=new Map();
function view(r,token){const me=r.seats.findIndex(s=>s.token===token);return {code:r.code,serverNow:Date.now(),turnSeconds:r.turnSeconds||0,matchmaking:!!r.matchmaking,messages:r.messages||[],me,host:me===0,seats:r.seats.map((s,i)=>({name:s.name,playerId:s.playerId,bot:!!s.bot,connected:!!s.bot||!!streams.get(s.token)?.size,host:i===0})),game:r.game?{...r.game,bag:undefined,bagCount:r.game.bag.length,players:r.game.players.map((p,i)=>({name:p.name,score:p.score,count:p.hand.length,hand:i===me?p.hand:undefined}))}:null}}
function broadcast(r){for(const s of r.seats)for(const res of streams.get(s.token)||[])res.write(`data: ${JSON.stringify(view(r,s.token))}\n\n`)}
async function changed(r){r.updated=Date.now();await persist();broadcast(r);scheduleServerBot(r)}
function reply(res,status,obj){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(obj))}
async function body(req){let b='';for await(const c of req){b+=c;if(b.length>16384)throw Error('İstek çok büyük.')}return JSON.parse(b||'{}')}
function name(v){return String(v||'Oyuncu').trim().slice(0,24)||'Oyuncu'}
const botRunner=new BotRunner(),botPending=new Set(),authFlows=new Map();
function findMatch(uid){return [...rooms.values()].find(r=>r.matchmaking&&!r.game?.over&&r.seats.some(s=>s.uid===uid))}
function newCode(){let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(code));return code}
function makeMatch(a,b){if(rooms.size>=500)return null;const code=newCode(),seats=[a,b].map(p=>({uid:p.uid,playerId:p.id,name:p.name,bot:!!p.bot,token:randomBytes(24).toString('hex')}));const r={code,seats,matchmaking:true,game:createGame(seats.map(s=>s.name),{turnSeconds:60}),turnSeconds:60,messages:[],misses:[0,0],updated:Date.now()};rooms.set(code,r);changed(r).catch(console.error);return r}
const matchmaker=new Matchmaker({createMatch:makeMatch,findMatch});
function matchView(result,uid){if(result.status!=='matched')return result;const r=result.match,token=r.seats.find(s=>s.uid===uid&&!s.bot)?.token;if(!token)throw Error('Eşleşme oturumu bulunamadı.');return {status:'matched',match:{token,...view(r,token)}}}
async function account(b,lookup=false){const user=await verifyAccount(b.accountToken);if(lookup){const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key='+firebaseConfig.apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:b.accountToken}),signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Hesabına yeniden giriş yap.')}return {...user,...publicProfile(user)}}
function scheduleServerBot(r){if(!r.matchmaking||!r.game||r.game.over||!r.seats[r.game.turn]?.bot||botPending.has(r.code)||closing)return;botPending.add(r.code);const revision=r.game.revision,actor=r.game.turn;
 setTimeout(async()=>{try{if(r.game.over||r.game.revision!==revision)return;const move=await botRunner.solve(r.game.board,r.game.players[actor].hand,Object.keys(r.game.board).length?0:r.game.opening);if(r.game.over||r.game.revision!==revision||!rooms.has(r.code))return;if(move)play(r.game,actor,move.placements);else if(r.game.bag.length)exchange(r.game,actor,r.game.players[actor].hand.slice(0,Math.min(6,r.game.bag.length)).map(t=>t.id));else pass(r.game,actor);await changed(r)}catch(e){console.error('Bot hamlesi tamamlanamadı:',e.message)}finally{botPending.delete(r.code)}},900).unref()
}
function resign(r,actor,text='Maçtan ayrıldı'){if(r.game.over)return;r.game.over=true;r.game.turnDeadline=null;r.game.revision++;r.game.winner=1-actor;r.game.history.unshift({name:r.seats[actor].name,score:0,text});}
function applyExpiry(r){if(!r.game)return false;const actor=r.game.turn;if(!expireTurn(r.game))return false;if(r.matchmaking&&!r.seats[actor].bot){r.misses??=[0,0];if(++r.misses[actor]>=2)resign(r,actor,'Bağlantı kesildi · maç sona erdi')}return true}
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Cache-Control','no-store');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://qwirkle-v-selman.firebaseapp.com; frame-src https://qwirkle-v-selman.firebaseapp.com; frame-ancestors 'self'; base-uri 'none'; form-action 'self'");
 if(req.url.split('?')[0]==='/login.html'){res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('Cross-Origin-Opener-Policy','same-origin-allow-popups');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' https://accounts.google.com/gsi/client; style-src 'self' 'unsafe-inline' https://accounts.google.com/gsi/style; img-src 'self' data: https://*.googleusercontent.com; connect-src 'self' https://accounts.google.com/gsi/; frame-src https://accounts.google.com/gsi/; frame-ancestors 'self'; base-uri 'none'; form-action 'self'")}
 try{const u=new URL(req.url,'http://localhost');
 if(u.pathname==='/api/health')return reply(res,200,{ok:true,rooms:rooms.size});
 if(u.pathname==='/api/events'){
 const token=u.searchParams.get('token'),r=rooms.get(u.searchParams.get('room'));if(!r||!r.seats.some(s=>s.token===token))return reply(res,403,{error:'Oda oturumu bulunamadı.'});
 res.writeHead(200,{'Content-Type':'text/event-stream','Connection':'keep-alive','X-Accel-Buffering':'no'});if(!streams.has(token))streams.set(token,new Set());streams.get(token).add(res);broadcast(r);const ping=setInterval(()=>res.write(': ping\n\n'),15000);req.on('close',()=>{clearInterval(ping);streams.get(token)?.delete(res);broadcast(r)});return;
 }
 if(u.pathname.startsWith('/api/')&&req.method==='POST'){
 if(req.headers.origin&&new URL(req.headers.origin).host!==req.headers.host)return reply(res,403,{error:'İstek kaynağı geçerli değil.'});
 const ip=req.socket.remoteAddress,now=Date.now(),rate=clients.get(ip)||{time:now,n:0};if(now-rate.time>60000){rate.time=now;rate.n=0}if(++rate.n>1200)return reply(res,429,{error:'Çok fazla istek. Biraz bekle.'});clients.set(ip,rate);
 const b=await body(req);
 if(u.pathname==='/api/auth/begin'){if(authFlows.size>=1000)throw Error('Biraz sonra yeniden dene.');const flow=randomBytes(32).toString('hex'),poll=randomBytes(32).toString('hex');authFlows.set(flow,{poll,at:Date.now()});return reply(res,200,{flow,poll})}
 if(u.pathname==='/api/auth/complete'){const f=authFlows.get(b.flow);if(!f||Date.now()-f.at>180000||f.credential)throw Error('Giriş isteğinin süresi doldu.');if(typeof b.credential!=='string'||b.credential.length>8192)throw Error('Giriş doğrulanamadı.');await verifyGoogleCredential(b.credential,b.flow);f.credential=b.credential;return reply(res,200,{ok:true})}
 if(u.pathname==='/api/auth/poll'){const f=authFlows.get(b.flow);if(!f||f.poll!==b.poll||Date.now()-f.at>180000)throw Error('Giriş isteğinin süresi doldu.');if(!f.credential)return reply(res,200,{ready:false});authFlows.delete(b.flow);return reply(res,200,{ready:true,credential:f.credential})}
 if(u.pathname==='/api/profile'){const p=await account(b,true);return reply(res,200,{id:p.id,name:p.name,guest:p.guest})}
 if(u.pathname==='/api/account/delete'){const p=await account(b,true);if(Date.now()/1000-p.authTime>300)throw Error('Hesabını silmek için önce yeniden giriş yap.');const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:delete?key='+firebaseConfig.apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:b.accountToken}),signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Hesap silinemedi. Yeniden giriş yapıp tekrar dene.');matchmaker.queue.delete(p.uid);for(const [code,r] of rooms)if(r.seats.some(s=>s.uid===p.uid)){for(const seat of r.seats)for(const stream of streams.get(seat.token)||[])stream.end();rooms.delete(code)}await persist();return reply(res,200,{ok:true})}
 if(u.pathname.startsWith('/api/match/')){const p=await account(b,u.pathname==='/api/match/start');let result;if(u.pathname==='/api/match/start')result=matchmaker.enter(p);else if(u.pathname==='/api/match/poll')result=matchmaker.poll(p);else if(u.pathname==='/api/match/cancel')result=matchmaker.cancel(p.uid);else throw Error('İşlem bulunamadı.');return reply(res,200,matchView(result,p.uid))}
 if(u.pathname==='/api/create'){
 if(rooms.size>=500)return reply(res,503,{error:'Sunucu dolu.'});let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(code));const token=randomBytes(24).toString('hex');const owner=b.accountToken?await account(b,true):null;const r={code,seats:[{name:owner?.name||name(b.name),uid:owner?.uid,playerId:owner?.id,token}],game:null,turnSeconds:TIME_OPTIONS.includes(b.turnSeconds)?b.turnSeconds:0,messages:[],updated:Date.now()};rooms.set(code,r);await persist();return reply(res,200,{token,...view(r,token)});
 }
 const r=rooms.get(String(b.room||'').toUpperCase());if(!r)throw Error('Bu kodla bir oda bulunamadı.');
 if(u.pathname==='/api/join'){if(r.game)throw Error('Bu odada oyun başladı. Yeni bir oda kurabilirsin.');if(r.seats.length>=4)throw Error('Oda dolu; en fazla 4 kişi oynayabilir.');const token=randomBytes(24).toString('hex');const player=b.accountToken?await account(b,true):null;r.seats.push({name:player?.name||name(b.name),uid:player?.uid,playerId:player?.id,token});await changed(r);return reply(res,200,{token,...view(r,token)})}
 const me=r.seats.findIndex(s=>s.token===b.token);if(me<0)return reply(res,403,{error:'Oturum geçerli değil.'});
 if(applyExpiry(r)){await changed(r)}
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
 if(u.pathname==='/api/resign'){if(!r.matchmaking)throw Error('Bu işlem yalnızca eşleşmeli maçlarda kullanılabilir.');resign(r,me);}
 else if(u.pathname==='/api/start'){if(r.matchmaking)throw Error('Yeni maç için Maç bul seçeneğini kullan.');if(me!==0)throw Error('Oyunu oda sahibi başlatabilir.');if(r.game&&!r.game.over)throw Error('Oyun zaten devam ediyor.');if(r.seats.length<2)throw Error('Başlamak için en az iki oyuncu gerekli.');r.game=createGame(r.seats.map(s=>s.name),{turnSeconds:r.turnSeconds||0})}
 else if(u.pathname==='/api/leave'){if(r.game)throw Error('Devam eden oyundaki yerin korunur; bağlantıyı kapatıp sonra dönebilirsin.');const seat=r.seats[me];for(const s of streams.get(seat.token)||[])s.end();streams.delete(seat.token);r.seats.splice(me,1);if(!r.seats.length)rooms.delete(r.code);else await changed(r);await persist();return reply(res,200,{ok:true});}
 else if(u.pathname==='/api/action'){if(!r.game)throw Error('Oyun henüz başlamadı.');if(b.revision!==r.game.revision)throw Error('Masa güncellendi. Hamleni yeniden kontrol et.');if(b.action==='play')play(r.game,me,b.placements);else if(b.action==='exchange')exchange(r.game,me,b.ids);else if(b.action==='pass')pass(r.game,me);else throw Error('Bilinmeyen hamle.');if(r.misses)r.misses[me]=0;}
 else throw Error('İşlem bulunamadı.');await changed(r);return reply(res,200,view(r,b.token));
 }
 if(req.method!=='GET'&&req.method!=='HEAD')return reply(res,405,{error:'Yöntem desteklenmiyor.'});
 const files={'/':'index.html','/index.html':'index.html','/app.mjs':'app.mjs','/engine.mjs':'engine.mjs','/board.mjs':'board.mjs','/bot-worker.mjs':'bot-worker.mjs','/ui.mjs':'ui.mjs','/session.mjs':'session.mjs','/style.css':'style.css','/refine.css':'refine.css','/privacy.html':'privacy.html','/favicon.svg':'favicon.svg','/account.mjs':'account.mjs','/firebase-config.mjs':'firebase-config.mjs','/firebase.mjs':'firebase.mjs','/login.html':'login.html','/login.mjs':'login.mjs','/delete-account.html':'delete-account.html'};let f=files[u.pathname];if(!f&&/^\/assets\/[A-Za-z0-9_-]+\.(webp|png|woff2|txt)$/.test(u.pathname))f=u.pathname.slice(1);if(!f)return reply(res,404,{error:'Bulunamadı.'});let content;try{content=await readFile(path.join(root,'public',f))}catch(e){if(e.code==='ENOENT')return reply(res,404,{error:'Bulunamadı.'});throw e}const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.mjs':'text/javascript; charset=utf-8','.woff2':'font/woff2','.webp':'image/webp','.png':'image/png','.txt':'text/plain; charset=utf-8'};res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:content);
 }catch(e){reply(res,400,{error:e.message||'İşlem tamamlanamadı.'})}
});
server.listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log(`Renkio hazır: http://localhost:${server.address().port}`));
let closing=false;async function shutdown(){if(closing)return;closing=true;botRunner.close();await persist();for(const group of streams.values())for(const response of group)response.end();server.close(()=>process.exit(0));setTimeout(()=>process.exit(0),5000).unref()}process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
setInterval(()=>{for(const [k,r] of rooms)if(Date.now()-r.updated>7*86400000)rooms.delete(k);const now=Date.now();for(const [k,v] of clients)if(now-v.time>120000)clients.delete(k)},60000).unref();
setInterval(()=>{matchmaker.tick();for(const [key,f] of authFlows)if(Date.now()-f.at>180000)authFlows.delete(key);for(const r of rooms.values()){if(applyExpiry(r))changed(r).catch(e=>console.error('Süre güncellenemedi',e.message));else scheduleServerBot(r)}},500).unref();
