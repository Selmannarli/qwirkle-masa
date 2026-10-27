import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {startTableGame,respondTableGame,pickTableGame,dismissTableGame,cancelTableGame,expireTableGame,tableGameView,tableSeatId} from '../table-games.mjs';
const room=(n=4)=>({code:'TEST12',seats:Array.from({length:n},(_,i)=>({name:'P'+i,token:'secret-seat-'+i})),game:null});
const acceptAll=(r,now)=>{const id=r.tableGame.id;for(let i=1;i<r.seats.length;i++)respondTableGame(r,i,id,true,now);return id};

test('RPS secrets stay private through reconnect until every accepted seat picks',()=>{
 const r=room(),g=startTableGame(r,0,undefined,10000);assert.equal(g.participants.length,4);assert.equal(g.status,'inviting');
 assert.throws(()=>pickTableGame(r,0,g.id,'rock',10001));acceptAll(r,10001);assert.equal(g.status,'choosing');
 pickTableGame(r,0,g.id,'rock',10002);pickTableGame(r,1,g.id,'scissors',10003);const before=tableGameView(structuredClone(r),2,10004);assert.equal(before.ownChoice,undefined);assert.equal(before.participants[0].picked,true);assert.equal(before.participants[0].choice,undefined);assert.equal(before.participants[0].result,undefined);assert.ok(!JSON.stringify(before).includes('secret-seat'));
 assert.equal(tableGameView(r,0,10004).ownChoice,'rock');assert.throws(()=>pickTableGame(r,0,g.id,'paper',10004));pickTableGame(r,2,g.id,'rock',10005);pickTableGame(r,3,g.id,'scissors',10006);
 const after=tableGameView(r,1,10007);assert.equal(after.status,'finished');assert.equal(after.reason,'played');assert.deepEqual(after.participants.map(p=>p.result),['win','lose','win','lose']);assert.deepEqual(after.participants.map(p=>p.choice),['rock','scissors','rock','scissors']);dismissTableGame(r,1,g.id,10008);assert.equal(tableGameView(r,1,10009),null);assert.ok(tableGameView(r,0,10009));
});

test('targeted RPS rejects spectators, stale seats, concurrent challenges and invalid choices',()=>{
 const r=room(),target=tableSeatId(r.seats[2]);assert.throws(()=>startTableGame(r,0,['missing'],10000));assert.throws(()=>startTableGame(r,-1,[target],10000));assert.throws(()=>startTableGame(r,0,[target,target],10000));const g=startTableGame(r,0,[target],10000);assert.equal(g.participants.length,2);assert.throws(()=>startTableGame(r,1,undefined,10001));assert.throws(()=>respondTableGame(r,1,g.id,true,10001));assert.throws(()=>respondTableGame(r,2,'wrong',true,10001));respondTableGame(r,2,g.id,true,10002);assert.throws(()=>pickTableGame(r,1,g.id,'paper',10003));assert.throws(()=>pickTableGame(r,2,g.id,'laser',10003));pickTableGame(r,0,g.id,'paper',10004);pickTableGame(r,2,g.id,'paper',10005);assert.deepEqual(tableGameView(r,0,10006).participants.map(p=>p.result),['draw','draw']);assert.throws(()=>startTableGame(r,0,[target],10007));
});

test('three different RPS choices draw and declined seats never block accepted players',()=>{
 const r=room(),g=startTableGame(r,0,undefined,10000);respondTableGame(r,1,g.id,true,10001);respondTableGame(r,2,g.id,true,10002);respondTableGame(r,3,g.id,false,10003);assert.equal(g.status,'choosing');for(const [i,choice]of ['rock','paper','scissors'].entries())pickTableGame(r,i,g.id,choice,10004+i);assert.deepEqual(g.participants.slice(0,3).map(p=>p.result),['draw','draw','draw']);assert.equal(g.participants[3].choice,undefined);
});

test('fake-time expiry, departures, refusal and main game start never strand a challenge',()=>{
 let r=room(2),g=startTableGame(r,0,undefined,10000);assert.equal(expireTableGame(r,129999),false);assert.equal(expireTableGame(r,130000),true);assert.equal(g.reason,'expired');assert.equal(expireTableGame(r,175000),true);assert.equal(r.tableGame,undefined);
 r=room(2);g=startTableGame(r,0,undefined,10000);respondTableGame(r,1,g.id,true,10001);assert.equal(expireTableGame(r,70000),false);assert.equal(expireTableGame(r,70001),true);assert.equal(g.reason,'expired');
 r=room(2);g=startTableGame(r,0,undefined,10000);r.seats.splice(1,1);assert.equal(expireTableGame(r,10001),true);assert.equal(g.reason,'left');
 r=room(2);g=startTableGame(r,0,undefined,10000);respondTableGame(r,1,g.id,false,10001);assert.equal(g.reason,'declined');
 r=room(2);startTableGame(r,0,undefined,10000);r.game={};assert.equal(expireTableGame(r,10001),true);assert.equal(tableGameView(r,0,10002),null);assert.throws(()=>startTableGame(r,0,undefined,20000));
});

test('live multiplayer RPS API authenticates, broadcasts private state and allows main match start',async()=>{
 const data=await mkdtemp(path.join(tmpdir(),'renkio-rps-')),child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',QWIRKLE_DATA:data}});let ac;
 try{const url=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)resolve(m[0])});child.on('error',reject);child.on('exit',c=>reject(Error('Server exit '+c)))}),call=async(route,b)=>{const res=await fetch(url+'/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});return {status:res.status,v:await res.json()}};
  const a=(await call('create',{name:'Ada'})).v,aa={room:a.code,token:a.token},b=(await call('join',{room:a.code,name:'Bora'})).v,bb={room:a.code,token:b.token},c=(await call('join',{room:a.code,name:'Cem'})).v,cc={room:a.code,token:c.token};assert.equal((await call('table-game-start',{room:a.code,token:'fake'})).status,403);
  const start=await call('table-game-start',{...aa,targets:[b.seats[1].seatId]});assert.equal(start.status,200);const id=start.v.tableGame.id;assert.equal((await call('table-game-respond',{...cc,id,accept:true})).status,400);await call('table-game-respond',{...bb,id,accept:true});
  ac=new AbortController();const stream=await fetch(`${url}/api/events?room=${a.code}&token=${b.token}`,{signal:ac.signal}),reader=stream.body.getReader();await reader.read();await call('table-game-pick',{...aa,id,choice:'rock'});const update=new TextDecoder().decode((await reader.read()).value);assert.ok(update.includes('"picked":true'));assert.ok(!update.includes('"rock"'));assert.equal((await call('state',bb)).v.tableGame.ownChoice,undefined);
  const done=(await call('table-game-pick',{...bb,id,choice:'scissors'})).v;assert.equal(done.tableGame.status,'finished');assert.deepEqual(done.tableGame.participants.map(p=>p.result),['win','lose']);await call('start',aa);assert.equal((await call('state',aa)).v.tableGame,null);assert.equal((await call('table-game-start',aa)).status,400);ac.abort();
 }finally{ac?.abort();child.kill();await new Promise(resolve=>child.once('exit',resolve));await rm(data,{recursive:true,force:true})}
});


test('only the creator can cancel an active RPS challenge, including after acceptance',()=>{
 for(const accepted of [false,true]){const r=room(2),g=startTableGame(r,0,undefined,10000);if(accepted)respondTableGame(r,1,g.id,true,10001);assert.throws(()=>cancelTableGame(r,1,g.id,10002));assert.notEqual(g.status,'finished');cancelTableGame(r,0,g.id,10003);assert.equal(g.status,'finished');assert.equal(g.reason,'cancelled');assert.equal(tableGameView(r,1,10004).reason,'cancelled');assert.throws(()=>cancelTableGame(r,0,g.id,10004));}
 const r=room(2),g=startTableGame(r,0,undefined,10000);respondTableGame(r,1,g.id,true,10001);pickTableGame(r,0,g.id,'rock',10002);pickTableGame(r,1,g.id,'paper',10003);assert.throws(()=>cancelTableGame(r,0,g.id,10004));assert.equal(g.reason,'played');
});
