import test from 'node:test';
import assert from 'node:assert/strict';
import {gameOutcomes,characterEvents,CharacterReactions} from '../public/motion.mjs';
import {createGame,resignGame,resolveTimeout} from '../public/engine.mjs';

const base=()=>({matchId:'outcome',revision:1,over:false,players:[{name:'Ada',score:20},{name:'Bora',score:35}],history:[],timeoutCounts:[0,0]});

test('final moods belong to the displayed players and override whoever played the last tile',()=>{
 const before=base(),finished={...before,over:true,revision:2,history:[{actor:0,name:'Ada',score:12,renkios:1}]};
 assert.deepEqual(gameOutcomes(finished),['lose','win']);
 assert.deepEqual(characterEvents(before,finished),[{seat:0,mood:'lose'},{seat:1,mood:'win'}]);
 assert.deepEqual(gameOutcomes(before),[]);
});

test('a resigned high-score player loses to the explicit surviving winner',()=>{
 const game=createGame(['Ada','Bora']);game.matchId='resign';game.players[0].score=200;game.players[1].score=3;
 const before=structuredClone(game);resignGame(game,0);
 assert.deepEqual(gameOutcomes(game),['lose','win']);
 assert.deepEqual(characterEvents(before,game),[{seat:0,mood:'lose'},{seat:1,mood:'win'}]);
});

test('timeout forfeits and eliminated players never celebrate a score-based victory',()=>{
 const game=createGame(['Ada','Bora']);game.matchId='timeout';game.players[0].score=80;game.players[1].score=5;game.timeoutCounts=[3,0];game.timeoutDecision={actor:0,decider:1};
 const before=structuredClone(game);resolveTimeout(game,1,true);
 assert.deepEqual(gameOutcomes(game),['lose','win']);
 assert.deepEqual(characterEvents(before,game),[{seat:0,mood:'lose'},{seat:1,mood:'win'}]);
});

test('only tied active leaders draw; eliminated and lower-scoring players lose',()=>{
 const game={over:true,players:[{score:10},{score:10},{score:3},{score:90,eliminated:true}]};
 assert.deepEqual(gameOutcomes(game),['draw','draw','lose','lose']);
 assert.deepEqual(gameOutcomes({...game,winner:2}),['lose','lose','win','lose']);
 assert.deepEqual(gameOutcomes({...game,winner:3}),['draw','draw','lose','lose']);
});

test('legacy duplicate nicknames do not attribute a score to the first matching player',()=>{
 const before={...base(),players:[{name:'Player',score:0},{name:'Player',score:0}]},next={...before,revision:2,history:[{name:'Player',score:6}]};
 assert.deepEqual(characterEvents(before,next),[]);
 assert.deepEqual(characterEvents(before,{...next,history:[{actor:1,name:'Player',score:6}]}),[{seat:1,mood:'celebrate'}]);
 assert.deepEqual(characterEvents(before,{...next,history:[{actor:9,name:'Player',score:6}]}),[]);
});

test('finish reactions survive redraws with the same remaining lifetime and never replay on a later revision',()=>{
 const reactions=new CharacterReactions(),game=base();reactions.update(game,0);
 const finished={...game,over:true,revision:2};
 const initial=reactions.update(finished,100);
 assert.deepEqual(initial.map(e=>[e.seat,e.mood,e.remaining]),[[0,'lose',2400],[1,'win',2800]]);
 assert.deepEqual(reactions.update({...finished,revision:3},500).map(e=>[e.seat,e.mood,e.remaining]),[[0,'lose',2000],[1,'win',2400]]);
 assert.deepEqual(reactions.update({...finished,revision:4},3200),[]);
 assert.deepEqual(characterEvents(null,finished),[]);
});

test('an elimination during a multiplayer match is a loss reaction without falsely ending the match',()=>{
 const game=createGame(['Ada','Bora','Cem']);game.matchId='multi';const before=structuredClone(game);resignGame(game,1);
 assert.equal(game.over,false);assert.deepEqual(gameOutcomes(game),[]);
 assert.deepEqual(characterEvents(before,game),[{seat:1,mood:'lose'}]);
});
