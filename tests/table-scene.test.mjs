import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {createSeatedCharacter,TableScene} from '../client/table-scene.mjs';
import {TABLE_SEATS,SEAT_HEIGHT,TABLE_TOP,seatPoint} from '../public/table-layout.mjs';
import {clientBundle} from '../client-bundle.mjs';
import {fileURLToPath} from 'node:url';

test('all four chair axes face the table and seated hips share the cushion height',()=>{
 assert.equal(TABLE_SEATS.length,4);assert.equal(new Set(TABLE_SEATS.map(s=>s.x+','+s.z)).size,4);
 for(let i=0;i<4;i++){const chair=TABLE_SEATS[i],hip=seatPoint(i),front=seatPoint(i,0,0,.4);assert.equal(hip.y,SEAT_HEIGHT);assert.ok(Math.hypot(front.x,front.z)<Math.hypot(chair.x,chair.z));assert.ok(TABLE_TOP>hip.y&&TABLE_TOP<hip.y+.8)}
});
test('six seated characters are genuine volumetric geometry with finite normals, no image planes or sprite impostors',()=>{
 for(let face=0;face<6;face++){const model=createSeatedCharacter(face,0),bounds=new THREE.Box3().setFromObject(model);assert.ok(bounds.min.y>-.7);assert.ok(bounds.max.y<1.85);assert.ok(bounds.max.z-bounds.min.z>.5);let triangles=0;
  model.traverse(n=>{assert.ok(!n.isSprite);if(!n.isMesh)return;assert.ok(!n.geometry.isPlaneGeometry);assert.ok(!n.material.map);for(const key of ['position','normal'])for(const value of n.geometry.attributes[key].array)assert.ok(Number.isFinite(value));triangles+=n.geometry.attributes.position.count/3});assert.ok(triangles>1000);assert.ok(model.userData.rig.head);assert.ok(model.userData.rig.arms.length>=2);
 }
});
test('replacing or removing a seated player preserves other joints and disposes only owned buffers',()=>{
 const stage={scene:new THREE.Scene(),people:Array(4).fill(null),poses:new Map()};const seats=[{face:0,colour:0},{face:1,colour:0},{face:2,colour:0},{face:3,colour:0}];TableScene.prototype.setSeats.call(stage,seats);
 stage.people.forEach((person,i)=>{assert.deepEqual(person.root.position.toArray(),[TABLE_SEATS[i].x,SEAT_HEIGHT,TABLE_SEATS[i].z]);assert.equal(person.root.rotation.y,TABLE_SEATS[i].yaw)});
 const old=stage.people[0].root,other=stage.people[1].root;old.userData.rig.head.rotation.z=.2;assert.equal(other.userData.rig.head.rotation.z,0);let disposed=0;old.traverse(n=>{if(n.isMesh&&n.geometry.userData.owned)n.geometry.addEventListener('dispose',()=>disposed++)});TableScene.prototype.setSeats.call(stage,[null,...seats.slice(1)]);assert.equal(old.parent,null);assert.equal(stage.people[1].root,other);assert.ok(disposed>0);
});
test('the updater ships a self-contained 3D engine, not the rejected flat table or seated cutouts',async()=>{
 const bundle=await clientBundle(fileURLToPath(new URL('..',import.meta.url)));assert.ok(bundle.files.some(f=>f.path==='table-engine.mjs'));for(const name of ['table-v2.webp','seated-a.webp','seated-b.webp'])assert.ok(!bundle.files.some(f=>f.path==='assets/'+name));assert.ok(bundle.files.reduce((n,f)=>n+Buffer.from(f.data,'base64').length,0)<12*1024*1024);
 const source=await readFile(new URL('../public/table.mjs',import.meta.url),'utf8');assert.ok(!source.includes("createElement('img')")&&!source.includes('avatarArt'));const engine=await readFile(new URL('../public/table-engine.mjs',import.meta.url),'utf8');assert.ok(engine.includes('Permission is hereby granted'));assert.ok(!/from[ ]*["']three/.test(engine));
});
