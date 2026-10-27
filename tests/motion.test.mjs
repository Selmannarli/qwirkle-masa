import test from 'node:test';
import assert from 'node:assert/strict';
import {MotionDirector,CHARACTER_CLIPS,spriteFrames,IdleMotionDirector,CHARACTER_IDLE,idleBlinkFrames,idleBodyFrames} from '../public/motion.mjs';
function element(){return {isConnected:true,calls:[],animate(frames,options){let finish;const a={frames,options,cancelled:false,finished:new Promise(resolve=>{finish=resolve}),cancel(){this.cancelled=true;finish()},finish(){finish()}};this.calls.push(a);return a}}}
test('each character has one bounded gesture with expressive poses and smooth transforms',()=>{
 assert.equal(CHARACTER_CLIPS.length,6);assert.equal(new Set(CHARACTER_CLIPS.map(c=>c.name)).size,6);
 for(let face=0;face<6;face++){const clip=CHARACTER_CLIPS[face],frames=spriteFrames(face);assert.ok(clip.duration>=800&&clip.duration<=1400);assert.equal(frames[0].backgroundPosition,'100% 100%');assert.equal(frames.at(-1).backgroundPosition,'100% 100%');assert.equal(frames[0].offset,0);assert.equal(frames.at(-1).offset,1);assert.ok(frames.every(f=>/^([0-9.]+)% ([0-9.]+)%$/.test(f.backgroundPosition)&&f.easing==='cubic-bezier(.25,.7,.2,1)'))}
});
test('rapid replays cancel the previous gesture; an old completion never removes the new timeline',async()=>{
 const d=new MotionDirector(),e=element(),first=d.play(e,[]),second=d.play(e,[]);assert.equal(first.cancelled,true);assert.equal(d.active.size,1);await Promise.resolve();assert.equal(d.active.get(e),second);second.finish();await Promise.resolve();assert.equal(d.active.size,0);
});
test('timelines are bounded, one-shot, cancellable and removed when portraits leave the page',()=>{
 const d=new MotionDirector({limit:2}),a=element(),b=element(),c=element();const first=d.play(a,[]);d.play(b,[]);const third=d.play(c,[],{iterations:Infinity});assert.equal(first.cancelled,true);assert.equal(third.options.iterations,1);assert.equal(d.active.size,2);b.isConnected=false;d.prune();assert.equal(d.active.size,1);d.cancelAll();assert.equal(third.cancelled,true);assert.equal(d.active.size,0);
});
test('reduced-motion preference and disconnected elements never start a timeline',()=>{
 const e=element(),d=new MotionDirector({reduced:()=>true});assert.equal(d.play(e,[]),null);assert.equal(e.calls.length,0);e.isConnected=false;assert.equal(new MotionDirector().play(e,[]),null);
});


test('six idle identities use registered localized blinks without swapping the expression atlas',()=>{
 assert.equal(CHARACTER_IDLE.length,6);assert.equal(new Set(CHARACTER_IDLE.map(p=>p.name)).size,6);assert.equal(CHARACTER_IDLE[3].eyes.length,1);
 for(let face=0;face<6;face++){const profile=CHARACTER_IDLE[face];assert.ok(profile.duration>=6000&&profile.duration<=11000);for(const [x,y,w,h]of profile.eyes){assert.ok(x-w/2>0&&x+w/2<100&&y-h/2>0&&y+h/2<100)}const blink=idleBlinkFrames(face);assert.equal(blink[0].offset,0);assert.equal(blink.at(-1).offset,1);assert.ok(blink.some(f=>f.clipPath==='inset(0 0 0 0 round 48%)'));assert.ok(blink.every(f=>!('backgroundPosition'in f)));assert.deepEqual(idleBodyFrames(face)[0].transform,idleBodyFrames(face).at(-1).transform)}
});

test('living portraits pause offscreen, on reactions and reduced motion; disconnected portraits release every timeline',()=>{
 let reduced=false;const director=new IdleMotionDirector({reduced:()=>reduced}),art={isConnected:true,dataset:{}},layer={style:{},removed:false,remove(){this.removed=true}};
 const timelines=Array.from({length:3},()=>({playState:'paused',cancelled:false,play(){this.playState='running'},pause(){this.playState='paused'},cancel(){this.cancelled=true}}));director.add(art,timelines,layer);assert.ok(timelines.every(t=>t.playState==='paused'));director.visibility(art,true);assert.ok(timelines.every(t=>t.playState==='running'));assert.equal(layer.style.visibility,'visible');art.dataset.emotion='celebrate';director.sync();assert.ok(timelines.every(t=>t.playState==='paused'));assert.equal(layer.style.visibility,'hidden');delete art.dataset.emotion;director.sync();assert.ok(timelines.every(t=>t.playState==='running'));reduced=true;director.sync();assert.ok(timelines.every(t=>t.playState==='paused'));reduced=false;director.visibility(art,false);assert.ok(timelines.every(t=>t.playState==='paused'));art.isConnected=false;director.sync();assert.ok(timelines.every(t=>t.cancelled));assert.equal(layer.removed,true);assert.equal(director.active.size,0);
});
