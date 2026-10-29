import * as T from 'three';
import {acceleratedRaycast,computeBoundsTree} from 'three-mesh-bvh';
import {writeFile,readFile,unlink} from 'node:fs/promises';
T.Mesh.prototype.raycast=function(raycaster,hits){if(!this.geometry.boundsTree)computeBoundsTree.call(this.geometry,{indirect:true});return acceleratedRaycast.call(this,raycaster,hits)};
const output=new URL('../client/accessory-surfaces.mjs',import.meta.url);
await writeFile(output,'export const BAKED_ACCESSORY_FITS={};\n');
const {createCharacter,disposePerson}=await import('../client/characters.mjs');
const full={};
for(let face=0;face<6;face++)for(const id of ['bow','glasses','cap','crown']){
 const root=createCharacter(face,0,'standing',[id]),m=root.getObjectByName('Accessory-'+id);
 full[face+':'+id]={at:m.position.toArray(),positions:Array.from(m.children[0].geometry.attributes.position.array)};disposePerson(root);
}
const baseline=new URL('../client/.accessory-baseline.mjs',import.meta.url);
let code=await readFile(new URL('../client/characters.mjs',import.meta.url),'utf8');code=code.replace("import {BAKED_ACCESSORY_FITS} from './accessory-surfaces.mjs';",'const BAKED_ACCESSORY_FITS={};').replace('clearAccessorySurface(root,mount,id);','/* offline uncorrected baseline */');
await writeFile(baseline,code);
try{
 const {createCharacter:raw,disposePerson:dispose}=await import(baseline.href),data={};
 for(let face=0;face<6;face++)for(const id of ['bow','glasses','cap','crown']){const root=raw(face,0,'standing',[id]),m=root.getObjectByName('Accessory-'+id),p=m.children[0].geometry.attributes.position.array,b=full[face+':'+id],patch=[];for(let i=0;i<p.length;i+=3)if(Math.max(...[0,1,2].map(j=>Math.abs(p[i+j]-b.positions[i+j])))>1e-5)patch.push(i/3,...b.positions.slice(i,i+3).map(v=>+v.toFixed(6)));data[face+':'+id]={at:b.at,patch};dispose(root)}
 await writeFile(output,'// Offline anatomical fits. No runtime collision work.\nexport const BAKED_ACCESSORY_FITS='+JSON.stringify(data)+';\n');console.log('Baked 24 sculpt accessory fits');
}finally{await unlink(baseline)}
