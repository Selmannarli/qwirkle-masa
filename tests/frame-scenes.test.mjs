import test from 'node:test';import assert from 'node:assert/strict';import {Vector3} from 'three';
import {createCharacter,disposePerson} from '../client/characters.mjs';
import {animateCharacter,captureRest,resetCharacter} from '../client/character-motion.mjs';
import {FRAME_SCENES,FRAME_SILL,frameLedge,sampleFrameScene,frameMask,frameReveal} from '../public/frame-scenes.mjs';
test('all six actors keep their palms physically locked to the sill during the vault and push-up',()=>{
 for(let face=0;face<6;face++)for(const mood of ['frameVault','frameSit']){
  const root=createCharacter(face,0,'standing');captureRest(root);const rig=root.userData.rig,indexes=[0,face===5?5:1];
  for(const t of [1,1.4,1.6,7.5,8]){const pose=sampleFrameScene(mood,t);if(pose.grip<.999)continue;
   resetCharacter(root);const anchors=indexes.map(i=>{const arm=rig.arms[i];return new Vector3(arm.position.x+arm.userData.grip[0],frameLedge(face),.24)});
   animateCharacter(root,{mood,elapsed:t});root.updateMatrixWorld(true);
   indexes.forEach((i,j)=>{const palm=rig.arms[i].localToWorld(new Vector3(...rig.arms[i].userData.grip));assert.ok(palm.distanceTo(anchors[j])<1e-5,face+' '+mood+' t='+t+' distance='+palm.distanceTo(anchors[j]))});
  }disposePerson(root);
 }
});
test('each authored scene has anticipation, finite values, a natural return and a clipped starting position',()=>{
 for(const [name,duration]of Object.entries(FRAME_SCENES)){
  const start=sampleFrameScene(name,0),end=sampleFrameScene(name,duration);assert.equal(start.clip,FRAME_SILL);assert.equal(end.clip,FRAME_SILL);
  for(const s of [start,end])for(const key of ['lift','sit','grip','slide','wipe','sleep','peek','out'])assert.ok(s[key]===0,name+' '+key);
  for(let t=0;t<=duration;t+=.05){const p=sampleFrameScene(name,t);assert.ok(Object.values(p).every(Number.isFinite));assert.ok(p.clip>=0&&p.clip<=FRAME_SILL)}
 }
});
test('vault has planted hands before departure, a landing pause, then grips again to climb back',()=>{
 assert.ok(sampleFrameScene('frameVault',1).grip>.99);assert.ok(sampleFrameScene('frameVault',2.9).lift<-.3);
 assert.equal(sampleFrameScene('frameVault',4).lift,sampleFrameScene('frameVault',5).lift);
 assert.ok(sampleFrameScene('frameVault',7.5).grip>.99);assert.ok(sampleFrameScene('frameSit',4).sit>.99);
});

test('sitting and leaving the frame reveal the feet; the portrait framing returns smoothly',()=>{
 assert.ok(frameMask(sampleFrameScene('frameSit',0))>30);assert.equal(frameMask(sampleFrameScene('frameSit',4)),0);assert.equal(frameMask(sampleFrameScene('frameVault',4)),0);
 for(const name of Object.keys(FRAME_SCENES)){assert.equal(frameReveal(name,0),0);assert.equal(frameReveal(name,1),1);assert.equal(frameReveal(name,FRAME_SCENES[name]),0)}
});
