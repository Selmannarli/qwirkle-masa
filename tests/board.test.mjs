import test from 'node:test';
import assert from 'node:assert/strict';
import {projectPoint,unprojectPoint} from '../public/board.mjs';
for(const tilted of [false,true]){
 test(`board perspective mapping round-trips at desktop and phone sizes (tilted=${tilted})`,()=>{
  for(const [width,height]of[[1440,700],[1000,500],[390,420],[320,220]])for(const x of[-450,-180,0,80,420])for(const y of[-300,-90,0,130,340]){
   const screen=projectPoint(x,y,width,height,tilted),world=unprojectPoint(screen.x,screen.y,width,height,tilted);
   assert.ok(Math.abs(world.x-x)<1e-8);assert.ok(Math.abs(world.y-y)<1e-8);
  }
 });
 test(`raised tile center maps to correct cell (tilted=${tilted})`,()=>{
  for(const size of[25,50,82,112])for(const[x,y]of[[-4,-3],[0,0],[4,3],[1,-2]]){
   const camera={x:33,y:-25},p=projectPoint(x*size+camera.x,y*size+camera.y,900,500,tilted),q=unprojectPoint(p.x,p.y-6,900,500,tilted);
   assert.ok(Math.round((q.x-camera.x)/size)===x);assert.ok(Math.round((q.y-camera.y)/size)===y);
  }
 });
}
