import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createGame} from '../public/engine.mjs';
import {canKick,kickSeat,openRoomEntry} from '../room-lifecycle.mjs';
import {mergeOpenGames} from '../public/room-cache.mjs';

test('waiting tables remain discoverable with their original seat token and sort before matches',()=>{
 const room={code:'ABC123',updated:100,seats:[{uid:'host',token:'one',name:'A'},{uid:'guest',token:'two',name:'B'}],game:null};
 const entry=openRoomEntry(room,'host');assert.equal(entry.waiting,true);assert.equal(entry.host,true);assert.equal(entry.token,'one');assert.equal(entry.count,2);assert.equal(openRoomEntry(room,'other'),null);
 const restored=JSON.parse(JSON.stringify(room));assert.deepEqual(openRoomEntry(restored,'host'),entry);assert.equal(openRoomEntry(restored,'guest').host,false);
 const merged=mergeOpenGames([],[{...entry,updated:100},{room:'FFF123',token:'match',updated:999,waiting:false}],'id');assert.equal(merged[0].room,'ABC123');
});
test('only a host can remove others; in-game removal preserves seat indexes, turn and private records',()=>{
 const room={seats:['A','B','C','D'].map((name,i)=>({name,uid:String(i),token:String(i)})),game:createGame(['A','B','C','D'],{turnSeconds:60})};room.game.turn=2;
 assert.equal(canKick(room,1,2),false);assert.equal(canKick(room,0,0),false);assert.throws(()=>kickSeat(room,2,1));
 const removed=kickSeat(room,0,2);assert.equal(removed.uid,'2');assert.equal(room.seats.length,4);assert.equal(room.game.players[2].eliminated,true);assert.equal(room.game.turn,3);assert.equal(room.game.over,false);assert.equal(room.seats[2].kicked,true);assert.equal(openRoomEntry(room,'2'),null);assert.equal(openRoomEntry(room,'3').token,'3');assert.equal(canKick(room,0,2),false);
 const pair={seats:room.seats.slice(0,2),game:createGame(['A','B'])};assert.equal(canKick(pair,0,1),false);
});
test('multiplayer API revokes removed sessions, informs the removed client and persists tables across restart',async()=>{
 const data=await mkdtemp(path.join(tmpdir(),'renkio-lobbies-'));let child,url;
 const boot=async()=>{child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',RENKIO_DATA:data}});url=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)resolve(m[0])});child.once('error',reject)});};
 const stop=async()=>{const ended=new Promise(r=>child.once('exit',r));child.kill();await ended};
 const call=async(route,body)=>{const r=await fetch(url+'/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return{status:r.status,v:await r.json()}};
 try{
  await boot();const a=(await call('create',{name:'Host'})).v,aa={room:a.code,token:a.token};assert.equal((await call('leave',aa)).v.preserved,true);assert.equal((await call('state',aa)).v.host,true);
  const b=(await call('join',{room:a.code,name:'B'})).v,bb={room:a.code,token:b.token};
  const c=(await call('join',{room:a.code,name:'C'})).v,cc={room:a.code,token:c.token};
  assert.equal((await call('kick',{...bb,seat:2})).status,400);assert.equal((await call('kick',{...aa,seat:0})).status,400);
  const controller=new AbortController(),response=await fetch(`${url}/api/events?room=${a.code}&token=${b.token}`,{signal:controller.signal});const reader=response.body.getReader();await reader.read();
  const kicked=await call('kick',{...aa,seat:1,seatId:c.seats[1].seatId});assert.equal(kicked.status,200);assert.deepEqual(kicked.v.seats.map(s=>s.name),['Host','C']);
  let text='';for(let i=0;i<5&&!text.includes('"removed":true');i++){const chunk=await reader.read();if(chunk.done)break;text+=new TextDecoder().decode(chunk.value)}assert.ok(text.includes('"removed":true'));controller.abort();
  assert.equal((await call('state',bb)).status,403);assert.equal((await call('state',cc)).v.me,1);
  assert.equal((await call('kick',{...aa,seat:1,seatId:c.seats[1].seatId})).status,400);assert.equal((await call('state',cc)).status,200);
  await stop();await boot();const resumed=(await call('state',aa)).v;assert.equal(resumed.game,null);assert.equal(resumed.host,true);assert.equal(resumed.seats.length,2);
  const d=(await call('join',{room:a.code,name:'D'})).v;const started=(await call('start',aa)).v;const target=started.game.turn===0?2:started.game.turn;
  const result=await call('kick',{...aa,seat:target,seatId:started.seats[target].seatId});assert.equal(result.status,200);assert.equal(result.v.game.players[target].eliminated,true);assert.equal(result.v.game.over,false);assert.equal(result.v.seats.length,3);
  const old=target===1?cc:{room:a.code,token:d.token};assert.equal((await call('state',old)).status,403);assert.equal((await call('chat',{...old,text:'hello'})).status,403);
  const survivor=target===1?{room:a.code,token:d.token}:cc;await call('resign',survivor);const rematch=await call('start',aa);assert.equal(rematch.status,200);assert.equal(rematch.v.game.matchId,started.game.matchId);assert.equal(rematch.v.seats.length,3);assert.equal(rematch.v.game.players.length,3);assert.equal(rematch.v.game.over,true);
 }finally{if(child?.exitCode===null)await stop();await rm(data,{recursive:true,force:true})}
});
