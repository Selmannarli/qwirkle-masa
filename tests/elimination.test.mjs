import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,expireTurn,exchange,resignGame} from '../public/engine.mjs';

test('third cumulative timeout loses, successful turns do not reset a player count',()=>{
 const g=createGame(['A','B'],{turnSeconds:30});g.turn=0;
 g.board={'0,0':g.bag.pop()};
 expireTurn(g,g.turnDeadline);assert.deepEqual(g.timeoutCounts,[1,0]);
 exchange(g,1,[g.players[1].hand[0].id]);
 exchange(g,0,[g.players[0].hand[0].id]);
 exchange(g,1,[g.players[1].hand[0].id]);
 expireTurn(g,g.turnDeadline);assert.deepEqual(g.timeoutCounts,[2,0]);assert.equal(g.over,false);
 exchange(g,1,[g.players[1].hand[0].id]);expireTurn(g,g.turnDeadline);
 assert.equal(g.over,true);assert.equal(g.winner,1);assert.equal(g.players[0].eliminated,true);assert.equal(g.turnDeadline,null);
 assert.equal(g.bag.length+Object.keys(g.board).length+g.players.reduce((n,p)=>n+p.hand.length,0),108);
});

test('four-player game skips eliminated seats and off-turn surrender preserves current deadline',()=>{
 const g=createGame(['A','B','C','D'],{turnSeconds:30});g.turn=0;const deadline=g.turnDeadline;
 assert.equal(resignGame(g,2),true);assert.equal(g.over,false);assert.equal(g.turn,0);assert.equal(g.turnDeadline,deadline);
 g.timeoutCounts[0]=2;expireTurn(g,deadline);assert.equal(g.turn,1);assert.equal(g.over,false);
 expireTurn(g,g.turnDeadline);assert.equal(g.turn,3);
 assert.throws(()=>exchange(g,2,[g.players[2].hand[0].id]));
 resignGame(g,3);assert.equal(g.over,true);assert.equal(g.winner,1);
 assert.equal(resignGame(g,1),false);
});
