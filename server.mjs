import {durableStore} from './durable-state.mjs';
import {ensurePlayerTag,resolvePlayerId} from './player-tags.mjs';
import {Friends} from './friends.mjs';
import {normalizeAvatar,defaultAvatar} from './public/profile-art.mjs';
import {matchRecord} from './public/match-records.mjs';
import {claimReward,rewardView,prepareJoker} from './rewards.mjs';
const EXPERIMENTAL=process.env.RENKIO_EXPERIMENTAL==='1';
import {clientBundle} from './client-bundle.mjs';
import http from 'node:http';
import {readFile,mkdir,writeFile,rename} from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createGame,play,exchange,pass,expireTurn,resignGame,resolveTimeout} from './public/engine.mjs';
import {TIME_OPTIONS,QUICK_MESSAGES} from './public/session.mjs';
import {verifyAccount,publicProfile,verifyGoogleCredential} from './account.mjs';
import {firebaseConfig} from './public/firebase-config.mjs';
import {Matchmaker} from './matchmaking.mjs';
import {BotRunner} from './server-bots.mjs';
const chatTimes=new Map();
const root=path.dirname(fileURLToPath(import.meta.url)),dataDir=process.env.QWIRKLE_DATA||path.join(root,'data');
await mkdir(dataDir,{recursive:true});
const rooms=new Map();try{for(const r of JSON.parse(await readFile(path.join(dataDir,'rooms.json'),'utf8')))if(r.game&&!r.game.over||Date.now()-r.updated<7*86400000)rooms.set(r.code,r)}catch{}
let social={profiles:{},matches:[]};try{social=JSON.parse(await readFile(path.join(dataDir,'social.json'),'utf8'))}catch{}
const cloudStore=await durableStore();if(cloudStore){const saved=await cloudStore.load();if(saved){rooms.clear();for(const r of saved.rooms)rooms.set(r.code,r);social=saved.social}else await cloudStore.save({rooms:[...rooms.values()],social})}for(const [id,p]of Object.entries(social.profiles))if(/^\d{12}$/.test(id))ensurePlayerTag(social.profiles,id);
const friends=new Friends(social);
for(const r of rooms.values()){const record=matchRecord(r);if(record&&!social.matches.some(m=>m.id===record.id))social.matches.push(record)}
let saving=Promise.resolve();function persist(){const state=structuredClone({rooms:[...rooms.values()],social});saving=saving.catch(()=>{}).then(async()=>{if(cloudStore)await cloudStore.save(state);await writeFile(path.join(dataDir,'rooms.tmp'),JSON.stringify(state.rooms));await rename(path.join(dataDir,'rooms.tmp'),path.join(dataDir,'rooms.json'));await writeFile(path.join(dataDir,'social.tmp'),JSON.stringify(state.social));await rename(path.join(dataDir,'social.tmp'),path.join(dataDir,'social.json'))});return saving}

await persist();
const streams=new Map();const clients=new Map();
function view(r,token){const me=r.seats.findIndex(s=>s.token===token);return {code:r.code,serverNow:Date.now(),turnSeconds:r.turnSeconds||0,matchmaking:!!r.matchmaking,messages:r.messages||[],me,host:me===0,seats:r.seats.map((s,i)=>({name:social.profiles[s.playerId]?.name||s.name,playerId:s.playerId,playerTag:s.playerTag||social.profiles[s.playerId]?.tag,avatar:social.profiles[s.playerId]?.avatar||defaultAvatar(s.playerId||s.name),bot:!!s.bot,connected:!!s.bot||!!streams.get(s.token)?.size,host:i===0})),game:r.game?{...r.game,bag:undefined,bagCount:r.game.bag.length,players:r.game.players.map((p,i)=>({name:social.profiles[r.seats[i]?.playerId]?.name||p.name,score:p.score,eliminated:!!p.eliminated,count:p.hand.filter(t=>!t.joker).length,jokerUsed:!!p.jokerUsed,hand:i===me?p.hand:undefined}))}:null}}
function broadcast(r){for(const s of r.seats)for(const res of streams.get(s.token)||[])res.write(`data: ${JSON.stringify(view(r,s.token))}\n\n`)}
async function changed(r){r.updated=Date.now();const record=matchRecord(r);if(record&&!social.matches.some(m=>m.id===record.id))social.matches.push(record);await persist();broadcast(r);scheduleServerBot(r)}
function reply(res,status,obj){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(obj))}
async function body(req){let b='';for await(const c of req){b+=c;if(b.length>16384)throw Error('İstek çok büyük.')}return JSON.parse(b||'{}')}
function name(v){return String(v||'Oyuncu').trim().slice(0,24)||'Oyuncu'}
const botRunner=new BotRunner(),botPending=new Set(),authFlows=new Map();
function findMatch(uid){return [...rooms.values()].find(r=>r.matchmaking&&!r.game?.over&&r.seats.some(s=>s.uid===uid))}
function newCode(){let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(code));return code}
function makeMatch(a,b){if(rooms.size>=500)return null;const code=newCode(),seats=[a,b].map(p=>({uid:p.uid,playerId:p.id,name:p.name,playerTag:p.tag,bot:!!p.bot,token:randomBytes(24).toString('hex')}));const r={code,seats,matchmaking:true,game:{...createGame(seats.map(s=>s.name),{turnSeconds:60,experimental:EXPERIMENTAL}),matchId:randomBytes(12).toString('hex')},turnSeconds:60,messages:[],misses:[0,0],updated:Date.now()};rooms.set(code,r);changed(r).catch(console.error);return r}
const matchmaker=new Matchmaker({createMatch:makeMatch,findMatch});
function matchView(result,uid){if(result.status!=='matched')return result;const r=result.match,token=r.seats.find(s=>s.uid===uid&&!s.bot)?.token;if(!token)throw Error('Eşleşme oturumu bulunamadı.');return {status:'matched',match:{token,...view(r,token)}}}
async function account(b,lookup=false){const user=await verifyAccount(b.accountToken);if(lookup){const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key='+firebaseConfig.apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:b.accountToken}),signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Hesabına yeniden giriş yap.')}const p={...user,...publicProfile(user)};social.profiles[p.id]??={};const oldTag=social.profiles[p.id].tag;p.tag=ensurePlayerTag(social.profiles,p.id);if(!user.name||/^Player \d{12}$/.test(user.name))p.name='Player '+p.tag;if(oldTag!==p.tag)await persist();if(social.profiles[p.id].name!==p.name){social.profiles[p.id].name=p.name;await persist();}return p}
function scheduleServerBot(r){if(r.game?.timeoutDecision&&r.seats[r.game.timeoutDecision.decider]?.bot){resolveTimeout(r.game,r.game.timeoutDecision.decider,false);changed(r).catch(console.error);return;}if(!r.matchmaking||!r.game||r.game.over||!r.seats[r.game.turn]?.bot||botPending.has(r.code)||closing)return;botPending.add(r.code);const revision=r.game.revision,actor=r.game.turn;
 setTimeout(async()=>{try{if(r.game.over||r.game.revision!==revision)return;const move=await botRunner.solve(r.game.board,r.game.players[actor].hand,Object.keys(r.game.board).length?0:r.game.opening);if(r.game.over||r.game.revision!==revision||!rooms.has(r.code))return;if(move)play(r.game,actor,move.placements);else if(r.game.bag.length)exchange(r.game,actor,r.game.players[actor].hand.slice(0,Math.min(6,r.game.bag.length)).map(t=>t.id));else pass(r.game,actor);await changed(r)}catch(e){console.error('Bot hamlesi tamamlanamadı:',e.message)}finally{botPending.delete(r.code)}},900).unref()
}
function applyExpiry(r){return r.game?expireTurn(r.game):false}
let bundlePromise;
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Cache-Control','no-store');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.googleusercontent.com; connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://qwirkle-v-selman.firebaseapp.com; frame-src https://qwirkle-v-selman.firebaseapp.com; frame-ancestors 'self'; base-uri 'none'; form-action 'self'");
 if(req.url.split('?')[0]==='/login.html'){res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('Cross-Origin-Opener-Policy','same-origin-allow-popups');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' https://accounts.google.com/gsi/client; style-src 'self' 'unsafe-inline' https://accounts.google.com/gsi/style; img-src 'self' data: https://*.googleusercontent.com; connect-src 'self' https://accounts.google.com/gsi/; frame-src https://accounts.google.com/gsi/; frame-ancestors 'self'; base-uri 'none'; form-action 'self'")}
 try{const u=new URL(req.url,'http://localhost');
 if(u.pathname==='/api/client-bundle'&&(req.method==='GET'||req.method==='HEAD')){try{bundlePromise??=clientBundle(root).then(bundle=>({revision:bundle.revision,json:JSON.stringify(bundle)}));const bundle=await bundlePromise;res.setHeader('ETag','"'+bundle.revision+'"');if(req.headers['if-none-match']==='"'+bundle.revision+'"'){res.writeHead(304);res.end();return}if(req.method==='HEAD'){res.writeHead(200);res.end();return}res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});res.end(bundle.json);return}catch(error){bundlePromise=null;throw error}}
 if(u.pathname==='/api/config')return reply(res,200,{experimental:EXPERIMENTAL});
 if(u.pathname==='/api/health')return reply(res,200,{ok:true,rooms:rooms.size,durable:!!cloudStore});
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
 if(u.pathname==='/api/rewards'||u.pathname==='/api/rewards/claim'){if(!EXPERIMENTAL)throw Error('Deneysel ödüller bu sunucuda kapalı.');const p=await account(b),profile=social.profiles[p.id];const result=u.pathname.endsWith('/claim')?claimReward(profile):rewardView(profile);await persist();return reply(res,200,result)}
 if(u.pathname==='/api/leaderboard'){await account(b);const totals=new Map();for(const m of social.matches)for(const p of m.players){const v=totals.get(p.id)||{id:p.id,name:social.profiles[p.id]?.name||p.name,score:0,wins:0,games:0,avatar:social.profiles[p.id]?.avatar};v.score+=p.score;v.wins+=Number(p.won&&m.players.filter(t=>t.won).length===1);v.games++;totals.set(p.id,v)}return reply(res,200,{players:[...totals.values()].sort((a,b)=>b.wins-a.wins||b.score-a.score).slice(0,50)})}
 if(u.pathname==='/api/profile'){const p=await account(b,true);return reply(res,200,{id:p.id,tag:p.tag,name:p.name,guest:p.guest,avatar:social.profiles[p.id]?.avatar||null})}
 if(u.pathname==='/api/avatar'){const p=await account(b);social.profiles[p.id]={...social.profiles[p.id],avatar:normalizeAvatar(b.avatar,p.id)};await persist();for(const r of rooms.values())if(r.seats.some(s=>s.playerId===p.id))broadcast(r);return reply(res,200,{avatar:social.profiles[p.id].avatar})}
 if(u.pathname==='/api/history'){const p=await account(b);return reply(res,200,{matches:social.matches.filter(m=>m.players.some(s=>s.id===p.id)).map(m=>({...m,players:m.players.map(v=>({...v,tag:v.tag||social.profiles[v.id]?.tag,name:social.profiles[v.id]?.name||v.name}))})).sort((a,b)=>b.at-a.at)})}

 if(u.pathname==='/api/games'){const p=await account(b);const games=[];for(const r of rooms.values()){const me=r.seats.findIndex(s=>s.uid===p.uid&&!s.bot);if(me<0||!r.game||r.game.over||r.game.players[me]?.eliminated)continue;if(applyExpiry(r))await changed(r);if(r.game.over||r.game.players[me]?.eliminated)continue;games.push({room:r.code,matchId:r.game.matchId,token:r.seats[me].token,updated:r.updated,names:r.seats.filter((_,i)=>i!==me).map(s=>s.name),turn:r.game.turn===me,score:r.game.players[me].score,timeouts:r.game.timeoutCounts?.[me]||0});}return reply(res,200,{games:games.sort((a,b)=>b.updated-a.updated)})}
 if(u.pathname.startsWith('/api/friends')){const p=await account(b);const route=u.pathname;
 if(route==='/api/friends/request')friends.request(p.id,resolvePlayerId(social.profiles,b.playerId));
 else if(route==='/api/friends/respond'){if(typeof b.accept!=='boolean')throw Error('Bir seçenek seç.');friends.respond(p.id,resolvePlayerId(social.profiles,b.playerId),b.accept);}
 else if(route==='/api/friends/remove')friends.remove(p.id,resolvePlayerId(social.profiles,b.playerId));
 else if(route==='/api/friends/invite'){const r=rooms.get(String(b.room||''));if(!r||r.game||r.seats.length>=4||!r.seats.some(s=>s.uid===p.uid))throw Error('Davet için boş yeri olan bir bekleme masası gerekli.');friends.invite(p.id,resolvePlayerId(social.profiles,b.playerId),r.code);}
 else if(route==='/api/friends/dismiss')friends.dismiss(p.id,String(b.inviteId));
 else if(route!=='/api/friends')throw Error('İşlem bulunamadı.');
 await persist();return reply(res,200,friends.view(p.id,rooms));}
 if(u.pathname==='/api/account/delete'){const p=await account(b,true);if(Date.now()/1000-p.authTime>300)throw Error('Hesabını silmek için önce yeniden giriş yap.');const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:delete?key='+firebaseConfig.apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:b.accountToken}),signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('Hesap silinemedi. Yeniden giriş yapıp tekrar dene.');social.matches=social.matches.filter(m=>!m.players.some(s=>s.id===p.id));delete social.profiles[p.id];friends.removeAccount(p.id);matchmaker.queue.delete(p.uid);for(const [code,r] of rooms)if(r.seats.some(s=>s.uid===p.uid)){for(const seat of r.seats)for(const stream of streams.get(seat.token)||[])stream.end();rooms.delete(code)}await persist();return reply(res,200,{ok:true})}
 if(u.pathname.startsWith('/api/match/')){const p=await account(b,u.pathname==='/api/match/start');let result;if(u.pathname==='/api/match/start')result=matchmaker.enter(p);else if(u.pathname==='/api/match/poll')result=matchmaker.poll(p);else if(u.pathname==='/api/match/cancel')result=matchmaker.cancel(p.uid);else throw Error('İşlem bulunamadı.');return reply(res,200,matchView(result,p.uid))}
 if(u.pathname==='/api/create'){
 if(rooms.size>=500)return reply(res,503,{error:'Sunucu dolu.'});let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase()}while(rooms.has(code));const token=randomBytes(24).toString('hex');const owner=b.accountToken?await account(b,true):null;const r={code,seats:[{name:owner?.name||name(b.name),uid:owner?.uid,playerId:owner?.id,playerTag:owner?.tag,token}],game:null,turnSeconds:TIME_OPTIONS.includes(b.turnSeconds)?b.turnSeconds:0,messages:[],updated:Date.now()};rooms.set(code,r);await persist();return reply(res,200,{token,...view(r,token)});
 }
 const r=rooms.get(String(b.room||'').toUpperCase());if(!r)throw Error('Bu kodla bir oda bulunamadı.');
 if(u.pathname==='/api/join'){if(r.game)throw Error('Bu odada oyun başladı. Yeni bir oda kurabilirsin.');if(r.seats.length>=4)throw Error('Oda dolu; en fazla 4 kişi oynayabilir.');const token=randomBytes(24).toString('hex');const player=b.accountToken?await account(b,true):null;r.seats.push({name:player?.name||name(b.name),uid:player?.uid,playerId:player?.id,playerTag:player?.tag,token});await changed(r);return reply(res,200,{token,...view(r,token)})}
 const me=r.seats.findIndex(s=>s.token===b.token);if(me<0)return reply(res,403,{error:'Oturum geçerli değil.'});
 if(applyExpiry(r)){await changed(r)}
 if(u.pathname==='/api/chat'){
 const text=String(b.text||'').trim();if(!text||[...text].length>160||/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(text))throw Error('Mesaj 1–160 karakter olmalı.');
 if(Date.now()-(chatTimes.get(b.token)||0)<1200){if(QUICK_MESSAGES.includes(text))return reply(res,200,view(r,b.token));return reply(res,429,{error:'Mesajlar arasında biraz bekle.'});}chatTimes.set(b.token,Date.now());r.messages??=[];r.messages.push({id:randomBytes(6).toString('hex'),name:r.seats[me].name,seat:me,text,at:Date.now()});r.messages=r.messages.slice(-40);await changed(r);return reply(res,200,view(r,b.token));
 }
 if(u.pathname==='/api/report'){
 const message=(r.messages||[]).find(m=>m.id===b.messageId);if(!message||message.seat===me)throw Error('Bildirilecek mesaj bulunamadı.');
 if(!['content','harassment','other'].includes(b.reason))throw Error('Bildirim nedeni geçerli değil.');
 r.reports??=[];if(!r.reports.some(v=>v.by===me&&v.messageId===message.id)){if(r.reports.filter(v=>v.by===me).length>=20)throw Error('Bildirim sınırına ulaşıldı.');const report={id:randomBytes(8).toString('hex'),messageId:message.id,by:me,seat:message.seat,name:message.name,text:message.text,reason:b.reason,at:Date.now()};r.reports.push(report);await persist();console.warn('MODERATION_REPORT',JSON.stringify({room:r.code,...report}));}return reply(res,200,{ok:true});
 }
 if(u.pathname==='/api/settings'){if(me!==0||r.game)throw Error('Süreyi oyun başlamadan masa sahibi seçebilir.');if(!TIME_OPTIONS.includes(b.turnSeconds))throw Error('Süre seçimi geçerli değil.');r.turnSeconds=b.turnSeconds;await changed(r);return reply(res,200,view(r,b.token))}
 if(u.pathname==='/api/joker/prepare'){const p=await account(b);if(!r.game||r.seats[me].uid!==p.uid)throw Error('Joker sana ait maçta kullanılabilir.');if(!rewardView(social.profiles[p.id]).balance)throw Error('Önce günlük jokerini topla.');prepareJoker(r.game,me,'joker-'+randomBytes(12).toString('hex'));await changed(r);return reply(res,200,view(r,b.token))}
 if(u.pathname==='/api/state')return reply(res,200,view(r,b.token));
 if(u.pathname==='/api/timeout/resolve'){if(!r.game)throw Error('Oyun başlamadı.');if(b.revision!==r.game.revision)throw Error('Masa güncellendi.');resolveTimeout(r.game,me,b.forfeit);}
 else if(u.pathname==='/api/resign'){if(!r.game)throw Error('Oyun henüz başlamadı.');resignGame(r.game,me);}
 else if(u.pathname==='/api/start'){if(r.matchmaking)throw Error('Yeni maç için Maç bul seçeneğini kullan.');if(me!==0)throw Error('Oyunu oda sahibi başlatabilir.');if(r.game&&!r.game.over)throw Error('Oyun zaten devam ediyor.');if(r.seats.length<2)throw Error('Başlamak için en az iki oyuncu gerekli.');r.game={...createGame(r.seats.map(s=>s.name),{turnSeconds:r.turnSeconds||0,experimental:EXPERIMENTAL}),matchId:randomBytes(12).toString('hex')}}
 else if(u.pathname==='/api/leave'){if(r.game)throw Error('Devam eden oyundaki yerin korunur; bağlantıyı kapatıp sonra dönebilirsin.');const seat=r.seats[me];for(const s of streams.get(seat.token)||[])s.end();streams.delete(seat.token);r.seats.splice(me,1);if(!r.seats.length)rooms.delete(r.code);else await changed(r);await persist();return reply(res,200,{ok:true});}
 else if(u.pathname==='/api/action'){if(!r.game)throw Error('Oyun henüz başlamadı.');if(b.revision!==r.game.revision)throw Error('Masa güncellendi. Hamleni yeniden kontrol et.');if(b.action==='play'){const count=(b.placements||[]).filter(a=>r.game.players[me].hand.find(t=>t.id===a.id)?.joker).length,profile=social.profiles[r.seats[me].playerId];if(count&&(!profile||rewardView(profile).balance<count))throw Error('Yeterli jokerin yok.');play(r.game,me,b.placements);if(count)profile.reward.balance-=count;}else if(b.action==='exchange')exchange(r.game,me,b.ids);else if(b.action==='pass')pass(r.game,me);else throw Error('Bilinmeyen hamle.');}
 else throw Error('İşlem bulunamadı.');await changed(r);return reply(res,200,view(r,b.token));
 }
 if(req.method!=='GET'&&req.method!=='HEAD')return reply(res,405,{error:'Yöntem desteklenmiyor.'});
 const files={'/':'index.html','/index.html':'index.html','/app.mjs':'app.mjs','/alerts.mjs':'alerts.mjs','/engine.mjs':'engine.mjs','/board.mjs':'board.mjs','/bot-worker.mjs':'bot-worker.mjs','/ui.mjs':'ui.mjs','/session.mjs':'session.mjs','/bonus-rules.mjs':'bonus-rules.mjs','/experiment.css':'experiment.css','/style.css':'style.css','/refine.css':'refine.css','/game-v2.css':'game-v2.css','/tile-motion.mjs':'tile-motion.mjs','/tile-inventory.mjs':'tile-inventory.mjs','/match-snapshot.mjs':'match-snapshot.mjs','/room-cache.mjs':'room-cache.mjs','/profile-art.mjs':'profile-art.mjs','/match-records.mjs':'match-records.mjs','/privacy.html':'privacy.html','/favicon.svg':'favicon.svg','/account.mjs':'account.mjs','/firebase-config.mjs':'firebase-config.mjs','/firebase.mjs':'firebase.mjs','/login.html':'login.html','/login.mjs':'login.mjs','/delete-account.html':'delete-account.html'};let f=files[u.pathname];if(!f&&/^\/assets\/[A-Za-z0-9_-]+\.(webp|png|woff2|txt)$/.test(u.pathname))f=u.pathname.slice(1);if(!f)return reply(res,404,{error:'Bulunamadı.'});let content;try{content=await readFile(path.join(root,'public',f))}catch(e){if(e.code==='ENOENT')return reply(res,404,{error:'Bulunamadı.'});throw e}const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.mjs':'text/javascript; charset=utf-8','.woff2':'font/woff2','.webp':'image/webp','.png':'image/png','.txt':'text/plain; charset=utf-8'};res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:content);
 }catch(e){reply(res,400,{error:e.message||'İşlem tamamlanamadı.'})}
});
server.listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log(`Renkio hazır: http://localhost:${server.address().port}`));
let closing=false;async function shutdown(){if(closing)return;closing=true;botRunner.close();await persist();for(const group of streams.values())for(const response of group)response.end();server.close(()=>process.exit(0));setTimeout(()=>process.exit(0),5000).unref()}process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
setInterval(()=>{for(const [k,r] of rooms)if((!r.game||r.game.over)&&Date.now()-r.updated>7*86400000)rooms.delete(k);const now=Date.now();for(const [k,v] of clients)if(now-v.time>120000)clients.delete(k)},60000).unref();
setInterval(()=>{matchmaker.tick();for(const [key,f] of authFlows)if(Date.now()-f.at>180000)authFlows.delete(key);for(const r of rooms.values()){if(applyExpiry(r))changed(r).catch(e=>console.error('Süre güncellenemedi',e.message));else scheduleServerBot(r)}},500).unref();
