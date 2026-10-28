import test from 'node:test';
import assert from 'node:assert/strict';
import {TurnWarning} from '../public/alerts.mjs';
import {Sound} from '../public/ui.mjs';
const game=()=>({matchId:'a',turn:0,history:[],players:[{},{}],turnSeconds:30,turnDeadline:30000});
test('own timed turn knocks precisely three times, once per turn despite revision and deadline changes',()=>{
 const g=game(),w=new TurnWarning();assert.equal(w.update(g,0,19999),null);assert.equal(w.update(g,0,20000).knock,false);
 assert.equal(w.update(g,0,20419).knock,false);
 for(const at of [20420,20760,21100]){assert.equal(w.update(g,0,at).knock,true);assert.equal(w.update(g,0,at+1).knock,false)}
 assert.equal(w.update(g,0,21800),null);g.revision=8;g.turnDeadline+=30000;assert.equal(w.update(g,0,50000),null);
 g.history.push({});g.turnDeadline=80000;assert.equal(w.update(g,0,70000).elapsed,0);
});
test('no warning for opponents, untimed, ended, eliminated, hidden or celebration-blocked games',()=>{
 for(const patch of [{turn:1},{turnSeconds:0},{over:true},{timeoutDecision:{}},{players:[{eliminated:true},{}]},{turnDeadline:20000}])assert.equal(new TurnWarning().update(Object.assign(game(),patch),0,20000),null);
 for(const options of [{visible:false},{blocked:true}])assert.equal(new TurnWarning().update(game(),0,20000,options),null);
 const w=new TurnWarning(),g=game();w.update(g,0,20000);assert.equal(w.update(g,0,20420,{visible:false}),null);assert.equal(w.update(g,0,20500),null);
});
test('extension before the threshold delays the warning and a new match has its own warning',()=>{
 const w=new TurnWarning(),g=game();g.turnDeadline+=30000;assert.equal(w.update(g,0,20000),null);assert.equal(w.update(g,0,50000).elapsed,0);
 g.matchId='b';assert.equal(w.update(g,0,50000).elapsed,0);
});
test('glass tap is brief, restrained and silent when muted',()=>{
 const sound=new Sound(true),notes=[];sound.tone=(...v)=>notes.push(v);sound.glassKnock();assert.equal(notes.length,3);assert.ok(notes.every(([,delay,duration,,gain])=>delay+duration<.07&&gain<=.045));sound.enabled=false;sound.glassKnock();assert.equal(notes.length,3);
});
