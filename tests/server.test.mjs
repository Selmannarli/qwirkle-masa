import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {bestMove} from '../public/engine.mjs';
test('multiplayer API: privacy, host access, wrong turn, SSE and resume',async()=>{
 const data=await mkdtemp(path.join(tmpdir(),'qwirkle-test-'));const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',QWIRKLE_DATA:data}});
 try{const url=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)resolve(m[0])});child.on('error',reject);child.on('exit',c=>reject(Error('Server exit '+c)))});
 const homepage=await fetch(url+'/');assert.equal(homepage.status,200);const html=await homepage.text();assert.ok(html.includes('/refine.css'));for(const asset of ['/style.css','/refine.css']){const stylesheet=await fetch(url+asset);assert.equal(stylesheet.status,200);assert.ok(stylesheet.headers.get('content-type').includes('text/css'));assert.ok((await stylesheet.text()).length>100)}
 const call=async(route,b)=>{const res=await fetch(url+'/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});return {status:res.status,v:await res.json()}};
 const a=(await call('create',{name:'A'})).v,sa={room:a.code,token:a.token};const b=(await call('join',{room:a.code,name:'B'})).v,sb={room:a.code,token:b.token};
 assert.equal((await call('start',sb)).status,400);assert.equal((await call('state',{room:a.code,token:'wrong'})).status,403);
 const start=(await call('start',sa)).v;assert.equal(start.game.players[0].hand.length,6);assert.equal(start.game.players[1].hand,undefined);assert.equal(start.game.bag,undefined);assert.equal(start.seats[1].token,undefined);
 const bv=(await call('state',sb)).v;assert.equal(bv.game.players[0].hand,undefined);assert.equal(bv.game.players[1].hand.length,6);
 const ac=new AbortController();const stream=await fetch(`${url}/api/events?room=${a.code}&token=${a.token}`,{signal:ac.signal});assert.equal(stream.headers.get('content-type'),'text/event-stream');const reader=stream.body.getReader();assert.ok(new TextDecoder().decode((await reader.read()).value).includes('data: '));
 const actor=start.game.turn,own=actor===0?start:bv,auth=actor===0?sa:sb,other=actor===0?sb:sa;const move=bestMove({},own.game.players[actor].hand,start.game.opening);
 assert.equal((await call('action',{...other,action:'play',revision:1,placements:move.placements})).status,400);
 const result=await call('action',{...auth,action:'play',revision:1,placements:move.placements});assert.equal(result.status,200);assert.equal(result.v.game.revision,2);
 const update=new TextDecoder().decode((await reader.read()).value);assert.ok(update.includes('"revision":2'));ac.abort();
 assert.equal((await call('action',{...other,action:'play',revision:1,placements:[]})).status,400);
 const resumed=(await call('state',sb)).v;assert.equal(resumed.game.revision,2);assert.equal(Object.keys(resumed.game.board).length,move.placements.length);
 assert.equal((await call('join',{room:a.code,name:'C'})).status,400);
 }finally{child.kill();await new Promise(r=>child.once('exit',r));await rm(data,{recursive:true,force:true})}
});
