import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createCharacter,disposePerson} from '../client/characters.mjs';
import {BAKED_ACCESSORY_FITS} from '../client/accessory-surfaces.mjs';
const belongs=n=>{for(let p=n;p;p=p.parent)if(p.userData.attachment)return true;return false};
test('all 24 fitted accessories keep their visible surface outside the character skin',()=>{
 assert.equal(Object.keys(BAKED_ACCESSORY_FITS).length,24);
 for(let face=0;face<6;face++)for(const id of ['bow','glasses','cap','crown']){
  const root=createCharacter(face,0,'standing',[id]),rig=root.userData.rig,mount=root.getObjectByName('Accessory-'+id),skin=[];
  for(const p of [rig.head,rig.body])p.traverse(n=>{if(n.isMesh&&!n.userData.surfaceFace&&!belongs(n))skin.push(n)});
  root.updateMatrixWorld(true);const mesh=mount.children[0],pos=mesh.geometry.attributes.position,up=id==='cap'||id==='crown',ray=new T.Raycaster(),point=new T.Vector3();
  for(let i=0;i<pos.count;i+=Math.max(1,Math.floor(pos.count/45))){point.fromBufferAttribute(pos,i).applyMatrix4(mesh.matrixWorld);if(!up&&id==='glasses'&&Math.abs(point.x)>.36&&point.z<.35)continue;
   ray.set(up?new T.Vector3(point.x,3,point.z):new T.Vector3(point.x,point.y,3),new T.Vector3(0,up?-1:0,up?0:-1));const hit=ray.intersectObjects(skin,false)[0];if(hit)assert.ok((up?point.y-hit.point.y:point.z-hit.point.z)>-.002,`${face}/${id}: penetrated skin`);
  }
  disposePerson(root);
 }
});
