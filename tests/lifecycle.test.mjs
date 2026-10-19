import test from 'node:test';import assert from 'node:assert/strict';import{spawn}from'node:child_process';import{mkdtemp,rm}from'node:fs/promises';import{tmpdir}from'node:os';import path from'node:path';
test('lobby supports four seats, rejects fifth, and transfers host after leave',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'renkio-lobby-'));const proc=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',QWIRKLE_DATA:dir}});
 try{const url=await new Promise((ok,fail)=>{proc.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)ok(m[0])});proc.on('error',fail)});const call=async(r,b)=>{const q=await fetch(url+'/api/'+r,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});return{status:q.status,data:await q.json()}};
  const a=(await call('create',{name:'A'})).data;const seats=[a];for(const name of['B','C','D'])seats.push((await call('join',{room:a.code,name})).data);
  assert.equal((await call('join',{room:a.code,name:'E'})).status,400);
  assert.equal((await call('leave',{room:a.code,token:'bad'})).status,403);
  assert.equal((await call('leave',{room:a.code,token:a.token})).status,200);
  const state=(await call('state',{room:a.code,token:seats[1].token})).data;assert.equal(state.seats.length,3);assert.equal(state.host,true);assert.equal(state.me,0);assert.equal(state.seats[0].name,'B');
  assert.equal((await call('start',{room:a.code,token:seats[1].token})).status,200);
  assert.equal((await call('leave',{room:a.code,token:seats[2].token})).status,400);
  const sheet=await fetch(url+'/style.css');assert.equal(sheet.status,200);assert.ok(sheet.headers.get('content-type').startsWith('text/css'));
  const font=await fetch(url+'/assets/nunito-latin-ext.woff2');assert.equal(font.status,200);assert.equal(font.headers.get('content-type'),'font/woff2');
  assert.equal((await fetch(url+'/assets/not-found.webp')).status,404);assert.equal((await fetch(url+'/data/rooms.json')).status,404);
 }finally{proc.kill();await new Promise(ok=>proc.once('exit',ok));await rm(dir,{recursive:true,force:true})}
});
test('room and hidden hands survive a graceful server restart with persistent directory',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'renkio-restart-'));let proc;
 const start=async()=>{proc=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',QWIRKLE_DATA:dir}});return await new Promise((ok,fail)=>{proc.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)ok(m[0])});proc.on('error',fail)})};
 const call=async(url,r,b)=>{const q=await fetch(url+'/api/'+r,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});assert.equal(q.status,200);return await q.json()};
 try{let url=await start();const a=await call(url,'create',{name:'A'});await call(url,'join',{room:a.code,name:'B'});const state=await call(url,'start',{room:a.code,token:a.token});proc.kill();await new Promise(ok=>proc.once('exit',ok));url=await start();const resumed=await call(url,'state',{room:a.code,token:a.token});assert.deepEqual(resumed.game.players[0].hand,state.game.players[0].hand);assert.equal(resumed.game.players[1].hand,undefined);assert.equal(resumed.game.revision,state.game.revision)}finally{if(proc&&!proc.killed){proc.kill();await new Promise(ok=>proc.once('exit',ok))}await rm(dir,{recursive:true,force:true})}
});
