import test from 'node:test';
import assert from 'node:assert/strict';
import {Board,projectPoint,unprojectPoint} from '../public/board.mjs';
test('flat board coordinates round-trip on desktop and phone',()=>{
 for(const [w,h] of [[1440,700],[390,420],[320,220]])for(const x of [-450,0,420])for(const y of [-300,0,340]){const p=projectPoint(x,y,w,h);assert.deepEqual(unprojectPoint(p.x,p.y,w,h),{x,y});assert.equal(projectPoint(x+80,y,w,h).x-p.x,80)}
});
test('selecting different tiles does not reveal legal placement locations',()=>{
 const operations=[];const ctx=new Proxy({},{get:(_,k)=>(...args)=>operations.push([k,...args]),set:(_,k,v)=>{operations.push([k,v]);return true}});
 globalThis.getComputedStyle=()=>({getPropertyValue:()=> '#aaa'});globalThis.cancelAnimationFrame=()=>{};
 const board=Object.create(Board.prototype);Object.assign(board,{ctx,canvas:{},w:800,h:500,camera:{x:0,y:0,size:60},seen:new Map(),state:{board:{'0,0':{c:0,s:0}},hand:[{id:'a',c:0,s:1},{id:'b',c:1,s:2}],pending:[],selected:null,canPlay:true,last:[],reduced:true}});
 board.draw();const before=JSON.stringify(operations);operations.length=0;board.state.selected='a';board.draw();assert.equal(JSON.stringify(operations),before);operations.length=0;board.state.selected='b';board.draw();assert.equal(JSON.stringify(operations),before);
});
test('pointer redraws are coalesced to one per animation frame',()=>{
 let callbacks=[],draws=0;globalThis.requestAnimationFrame=fn=>{callbacks.push(fn);return callbacks.length};const board=Object.create(Board.prototype);board.draw=()=>draws++;for(let i=0;i<200;i++)board.requestDraw();assert.equal(callbacks.length,1);callbacks[0]();assert.equal(draws,1);board.requestDraw();assert.equal(callbacks.length,2);
});
