import test from 'node:test';import assert from 'node:assert/strict';import {scoreStripKey} from '../public/motion.mjs';
const make=()=>({matchId:'test',turn:0,over:false,timeoutCounts:[0,0],players:[{name:'A',score:0,hand:[{id:'1'}]},{name:'B',score:0,count:6}]});
test('draft placements, tile selection, hand reordering and camera movement never change portrait identity',()=>{
 const g=make(),before=scoreStripKey(g,0,null,{face:4});g.pending=[{id:'1',x:0,y:0}];g.selected='1';g.camera={x:6,y:5};g.players[0].hand=[{id:'2'}];assert.equal(scoreStripKey(g,0,null,{face:4}),before);
});
test('real player changes refresh scores, identity, avatar, turn and timeout indicators',()=>{
 const avatar={face:4},g=make(),key=scoreStripKey(g,0,null,avatar);
 for(const mutate of [g=>g.turn=1,g=>g.players[0].score=6,g=>g.players[0].name='New',g=>g.timeoutCounts[0]=1,g=>g.players[1].eliminated=true,g=>g.matchId='new']){const next=make();mutate(next);assert.notEqual(scoreStripKey(next,0,null,avatar),key)}
 assert.notEqual(scoreStripKey(g,0,null,{face:1}),key);
});
