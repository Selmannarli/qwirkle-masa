import assert from 'node:assert/strict';import {mkdtemp,rm}from'node:fs/promises';import {tmpdir}from'node:os';import path from'node:path';import {spawn}from'node:child_process';import {firebaseConfig}from'../public/firebase-config.mjs';
const accounts=[],data=await mkdtemp(path.join(tmpdir(),'renkio-experiment-'));let child,url;
async function firebase(method,body){const r=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:'+method+'?key='+firebaseConfig.apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}),v=await r.json();if(!r.ok)throw Error(v.error?.message);return v}
async function boot(){child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',RENKIO_EXPERIMENTAL:'1',QWIRKLE_DATA:data,FIREBASE_ADMIN_JSON:''}});url=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)resolve(m[0])});child.once('error',reject);child.once('exit',code=>reject(Error('Server exited '+code)))})}
async function stop(){if(!child)return;const p=new Promise(r=>child.once('exit',r));child.kill();await p;child=null}
async function call(route,who,b={},status=200){const r=await fetch(url+'/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({accountToken:accounts[who]?.idToken,...b})}),v=await r.json();assert.equal(r.status,status,route+': '+JSON.stringify(v));return v}
try{
 for(let i=0;i<2;i++)accounts.push(await firebase('signUp',{returnSecureToken:true}));await boot();
 assert.equal((await call('rewards/claim',0)).balance,1);await call('rewards/claim',0,{},400);
 const room=await call('create',0),joined=await call('join',1,{room:room.code}),started=await call('start',0,{room:room.code,token:room.token});assert.equal(started.game.experimental,true);const bonuses=started.game.bonusCells;
 const who=started.game.turn,token=who?joined.token:room.token;if(who)await call('rewards/claim',1);
 const prep=await call('joker/prepare',who,{room:room.code,token});const joker=prep.game.players[who].hand.find(t=>t.joker);assert.ok(joker);assert.equal(prep.game.players[who].count,6);
 await call('action',who,{room:room.code,token,revision:prep.game.revision,action:'play',placements:[{id:joker.id,x:1,y:0,c:0,s:0}]},400);assert.equal((await call('rewards',who)).balance,1);
 const played=await call('action',who,{room:room.code,token,revision:prep.game.revision,action:'play',placements:[{id:joker.id,x:0,y:0,c:4,s:2}]});assert.equal(played.game.players[who].jokerUsed,true);assert.equal(played.game.board['0,0'].c,4);assert.equal(played.game.players[who].score,0);assert.equal((await call('rewards',who)).balance,0);
 await call('joker/prepare',who,{room:room.code,token},400);
 await stop();await boot();const restored=await call('state',who,{room:room.code,token});assert.equal(restored.game.players[who].jokerUsed,true);assert.deepEqual(restored.game.bonusCells,bonuses);assert.equal(restored.game.board['0,0'].joker,true);assert.equal((await call('rewards',who)).balance,0);await call('rewards/claim',who,{},400);
 console.log('PASS: real authenticated daily claim, repeat rejection, six normal rack slots, failed move retains reward, joker commit spends once, per-player limit and server restart preserve bonus map, joker identity and balance.');
}finally{await stop();for(const a of accounts)await firebase('delete',{idToken:a.idToken}).catch(()=>{});await rm(data,{recursive:true,force:true})}
