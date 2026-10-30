import test from 'node:test';import assert from 'node:assert/strict';
import {applePull,appleRebound} from '../public/apple-feel.mjs';
test('slingshot feedback follows the finger with bounded elastic travel and unchanged legal forces',()=>{
 assert.deepEqual(applePull(0,0),{power:0,x:0,y:0,vx:0,vy:0});
 for(const dx of [-1000,-30,30,1000])for(const dy of [-1000,-20,20,1000]){const p=applePull(dx,dy);assert.ok(p.power>0&&p.power<=1);assert.ok(Math.abs(p.x)<=24&&Math.abs(p.y)<=24);assert.ok(Math.abs(p.vx)<=4.5&&Math.abs(p.vy)<=3.6);assert.equal(Math.sign(p.x),-Math.sign(dx));assert.equal(Math.sign(p.y),Math.sign(dy))}
});
test('a hit apple rebounds from the actual impact and drops below a tall phone without vanishing mid-board',()=>{
 const origin={x:220,y:100};assert.deepEqual(appleRebound(origin,2,0),origin);
 assert.ok(appleRebound(origin,2,.08).y<origin.y);
 assert.ok(appleRebound(origin,2,1.6).y>1100);
 assert.ok(appleRebound(origin,2,.5).x<origin.x);assert.ok(appleRebound(origin,-2,.5).x>origin.x);
});
