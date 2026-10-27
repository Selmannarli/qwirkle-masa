import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {pickTableGame,expireTableGame,tableGameView} from '../table-games.mjs';
import {leaveLobby,waitingRoomFor,openRoomEntry} from '../room-lifecycle.mjs';
import {buyAccessory,ownsAccessory,rewardView} from '../rewards.mjs';
const room=(n=4)=>({code:'TEST12',seats:Array.from({length:n},(_,i)=>({name:'P'+i,uid:'uid'+i,token:'secret-seat-'+i})),game:null});

test('quick RPS first pick starts three seconds; secrets survive reconnect until all picks',()=>{
 const r=room(),g=pickTableGame(r,0,null,'rock',10000,'receipt-a');assert.equal(g.expiresAt,13000);assert.equal(g.status,'choosing');pickTableGame(r,1,g.id,'scissors',10001);
 const before=tableGameView(structuredClone(r),2,10002);assert.equal(before.ownChoice,undefined);assert.equal(before.participants[0].picked,true);assert.equal(before.participants[0].choice,undefined);assert.ok(!JSON.stringify(before).includes('secret-seat'));assert.equal(tableGameView(r,0,10002).ownChoice,'rock');
 assert.throws(()=>pickTableGame(r,0,g.id,'paper',10003));pickTableGame(r,2,g.id,'rock',10004);pickTableGame(r,3,g.id,'scissors',10005);assert.equal(g.status,'finished');assert.deepEqual(tableGameView(r,1,10006).participants.map(p=>p.result),['win','lose','win','lose']);
 pickTableGame(r,0,null,'rock',10007,'receipt-a');assert.equal(r.tableGame.id,g.id);
});
test('RPS deadline skips unselected players; one choice is a draw, never a free win',()=>{
 const r=room();pickTableGame(r,0,null,'rock',10000);pickTableGame(r,1,r.tableGame.id,'paper',10001);assert.equal(expireTableGame(r,12999),false);assert.equal(expireTableGame(r,13000),true);assert.deepEqual(r.tableGame.participants.map(p=>p.result),['lose','win',undefined,undefined]);assert.equal(r.tableGame.participants[2].state,'skipped');assert.equal(expireTableGame(r,21000),true);assert.equal(r.tableGame,undefined);
 const single=room(2);pickTableGame(single,0,null,'rock',10000);expireTableGame(single,13000);assert.equal(single.tableGame.reason,'alone');assert.equal(single.tableGame.participants[0].result,'draw');
});
test('simultaneous requests share one round and reject stale IDs, bad choices and spectators',()=>{
 const r=room(3);const a=pickTableGame(r,0,null,'rock',10000);const b=pickTableGame(r,1,null,'paper',10000);assert.equal(a.id,b.id);assert.throws(()=>pickTableGame(r,2,'stale','rock',10001));assert.throws(()=>pickTableGame(r,-1,a.id,'paper',10001));assert.throws(()=>pickTableGame(r,2,a.id,'laser',10001));pickTableGame(r,2,a.id,'scissors',10001);assert.deepEqual(a.participants.map(p=>p.result),['draw','draw','draw']);r.game={};assert.equal(expireTableGame(r,10002),true);assert.equal(tableGameView(r,0),null);assert.throws(()=>pickTableGame(r,0,null,'rock'));
});
test('lobby leave transfers host, removes chat references, cancels round; disband is host-only',()=>{
 const r=room(3);r.messages=[{seat:0,text:'a'},{seat:2,text:'c'}];pickTableGame(r,0,null,'rock');assert.throws(()=>leaveLobby(r,1,{disband:true}));assert.equal(leaveLobby(r,0)[0].uid,'uid0');assert.equal(r.seats[0].uid,'uid1');assert.equal(r.messages[0].seat,1);assert.equal(r.tableGame,undefined);const rooms=new Map([[r.code,r]]);assert.equal(waitingRoomFor(rooms,'uid1'),r);assert.equal(leaveLobby(r,0,{disband:true}).length,2);assert.ok(r.closedAt);assert.equal(openRoomEntry(r,'uid1'),null);assert.equal(waitingRoomFor(rooms,'uid1'),null);assert.throws(()=>leaveLobby(r,0));const match=room();match.game={};assert.throws(()=>leaveLobby(match,0));
});
test('accessories validate ownership, charge once, survive save and leave free choices available',()=>{
 const p={};assert.equal(ownsAccessory(p,'glasses'),true);assert.equal(ownsAccessory(p,'crown'),false);assert.throws(()=>buyAccessory(p,'crown','receipt-0000000001'));p.economy.diamonds=50;const bought=buyAccessory(p,'crown','receipt-0000000001');assert.equal(bought.diamonds,20);buyAccessory(p,'crown','receipt-0000000001');assert.equal(p.economy.diamonds,20);assert.equal(ownsAccessory(JSON.parse(JSON.stringify(p)),'crown'),true);assert.throws(()=>buyAccessory(p,'fake','receipt-0000000002'));assert.ok(rewardView(p).accessories.includes('bow'));
});
test('live lobby API chats, handles quick RPS, leaves/transfers and disbands independently of matches',async()=>{
 const data=await mkdtemp(path.join(tmpdir(),'renkio-lobby-v2-')),child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',QWIRKLE_DATA:data}});
 try{const url=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/localhost:\d+/);if(m)resolve(m[0])});child.on('error',reject);child.on('exit',c=>reject(Error('exit '+c)))}),call=async(route,b)=>{const res=await fetch(url+'/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});return {status:res.status,v:await res.json()}};
 const a=(await call('create',{name:'A'})).v,b=(await call('join',{room:a.code,name:'B'})).v,aa={room:a.code,token:a.token},bb={room:a.code,token:b.token};assert.equal((await call('chat',{...aa,text:'Merhaba!'})).status,200);assert.equal((await call('state',bb)).v.messages[0].text,'Merhaba!');
 const g=(await call('table-game-pick',{...aa,choice:'paper',receipt:'first'})).v.tableGame;assert.equal((await call('state',bb)).v.tableGame.participants[0].choice,undefined);const result=await call('table-game-pick',{...bb,id:g.id,choice:'rock'});assert.equal(result.v.tableGame.status,'finished');assert.equal(result.v.tableGame.participants[0].result,'win');assert.equal((await call('lobby-disband',bb)).status,400);
 assert.equal((await call('lobby-leave',aa)).status,200);const newHost=(await call('state',bb)).v;assert.equal(newHost.host,true);assert.equal(newHost.me,0);assert.equal((await call('state',aa)).status,403);assert.equal(newHost.tableGame,null);await call('lobby-disband',bb);assert.equal((await call('join',{room:a.code,name:'C'})).status,410);
 const fresh=(await call('create',{name:'A'})).v,guest=(await call('join',{room:fresh.code,name:'B'})).v,session={room:fresh.code,token:fresh.token};const started=(await call('start',session)).v;assert.equal((await call('start',session)).v.game.matchId,started.game.matchId);assert.equal((await call('lobby-disband',session)).status,400);const independent=(await call('create',{name:'A'})).v;assert.notEqual(independent.code,fresh.code);assert.equal((await call('state',{room:fresh.code,token:guest.token})).v.game.matchId,started.game.matchId);
 }finally{child.kill();await new Promise(resolve=>child.exitCode===null?child.once('exit',resolve):resolve());await rm(data,{recursive:true,force:true})}
});

test('a choice arriving at the deadline returns the resolved round without counting the late hand',()=>{const r=room(3),g=pickTableGame(r,0,null,'rock',10000);pickTableGame(r,1,g.id,'paper',10001);assert.equal(pickTableGame(r,2,g.id,'scissors',13000).status,'finished');assert.equal(g.participants[2].choice,undefined);assert.equal(g.participants[2].state,'skipped');assert.deepEqual(g.participants.slice(0,2).map(p=>p.result),['lose','win'])});
