import test from 'node:test';
import assert from 'node:assert/strict';
import {claimReward,dailyRewardAmount} from '../rewards.mjs';
import {sendDirect,directMessages,conversationList,migrateRoomMessages,conversationAllowed} from '../conversations.mjs';
import {stateDocuments} from '../durable-state.mjs';
import {makeBonusBoard} from '../public/bonus-rules.mjs';
test('daily reward cycles 10 through 50 without allowing double claims',()=>{
 const p={};let total=0;for(let i=0;i<11;i++){const at=Date.UTC(2026,10,1+i,12);const value=dailyRewardAmount(i);total+=value;const v=claimReward(p,at);assert.equal(v.diamonds,total);assert.equal(v.nextAmount,dailyRewardAmount(i+1));assert.throws(()=>claimReward(p,at))}
});
const state=()=>({profiles:{a:{name:'A'},b:{name:'B'},c:{name:'C'}},friends:[{from:'a',to:'b',status:'accepted'}],matches:[]});
test('direct conversation is private, receipt-idempotent and survives removal of friendship',()=>{
 const s=state(),receipt='message-receipt-001';const m=sendDirect(s,'a','b','Hello',receipt,10000);assert.equal(sendDirect(s,'a','b','Hello',receipt,10000),m);assert.throws(()=>sendDirect(s,'a','c','Hello','message-receipt-002',12000));assert.throws(()=>sendDirect(s,'a','b','Changed',receipt,12000));s.friends=[];sendDirect(s,'b','a','Hi','message-receipt-003',12000);assert.equal(directMessages(s,'b','a').length,2);assert.equal(directMessages(s,'a','c').length,0);assert.equal(conversationList(s,'a')[0].name,'B');assert.equal(stateDocuments({rooms:[],social:s}).size,5);
});
test('old two-person room messages migrate once; group and bot chats stay in their rooms',()=>{
 const s=state(),rooms=[{code:'ABCDEF',seats:[{playerId:'a'},{playerId:'b'}],messages:[{id:'m1',seat:0,text:'Hello',at:1000}]},{code:'123456',seats:[{playerId:'a'},{playerId:'b',bot:true}],messages:[{id:'m2',seat:0,text:'Bot',at:2000}]}];assert.equal(migrateRoomMessages(s,rooms),1);assert.equal(migrateRoomMessages(s,rooms),0);assert.equal(directMessages(s,'a','b').length,1);
});
test('same-timestamp pagination does not skip a message, deleted accounts lose access and blocking stops sends',()=>{
 const s=state();sendDirect(s,'a','b','First','message-receipt-001',10000);sendDirect(s,'b','a','Second','message-receipt-002',10000);
 const page=directMessages(s,'a','b',{limit:1});const older=directMessages(s,'a','b',{before:page[0].at,beforeId:page[0].id});assert.equal(older.length,1);assert.notEqual(older[0].id,page[0].id);
 s.profiles.b.blockedPlayers=['a'];assert.throws(()=>sendDirect(s,'a','b','Blocked','message-receipt-003',12000));delete s.profiles.b;assert.equal(conversationAllowed(s,'a','b'),false);
});
test('bonus field starts at four cells and stays inside 36',()=>{
 let seed=123;const rand=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/2**32);const cells=Object.keys(makeBonusBoard(rand)).map(k=>k.split(',').map(Number));assert(cells.some(([x,y])=>Math.max(Math.abs(x),Math.abs(y))<6));for(const [x,y]of cells){const d=Math.max(Math.abs(x),Math.abs(y));assert(d>=4&&d<=36)}
});
