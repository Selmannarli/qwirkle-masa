import {BAKED_ACCESSORY_FITS} from './accessory-surfaces.mjs';
import {accessoryFit,REAR_PROFILES} from './character-fit.mjs';
import {createFacialRig} from './facial-rig.mjs';
import {characterBodyColour,accessoryList,accessoryColour} from '../public/character-style.mjs';
import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries,mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';

// A single model library is used by the table, portraits and expression previews.
const geometries=new Map(),materials=new Map(),contactPoints=new Map();
function geometry(key,make){if(!geometries.has(key))geometries.set(key,make());return geometries.get(key)}
function mat(colour,roughness=.4,metalness=0,options={}){const key=JSON.stringify([colour,roughness,metalness,options]);if(!materials.has(key))materials.set(key,new T.MeshPhysicalMaterial({color:colour,roughness,metalness,clearcoat:.24,clearcoatRoughness:.24,...options}));return materials.get(key)}
function group(parent,name,at=[0,0,0]){const n=new T.Group();n.name=name;n.position.set(...at);parent.add(n);return n}
function mesh(parent,g,m,at=[0,0,0],scale=[1,1,1]){const n=new T.Mesh(g,m);n.position.set(...at);n.scale.set(...scale);n.castShadow=true;n.receiveShadow=true;parent.add(n);return n}
function orb(parent,m,at,scale){const size=Math.max(...scale),segments=size<.05?[12,8]:size<.18?[20,14]:[32,22];return mesh(parent,geometry('sphere:'+segments,()=>new T.SphereGeometry(1,...segments)),m,at,scale)}
function box(parent,m,at,size,r=.07){return mesh(parent,geometry('rounded:'+size+':'+r,()=>new RoundedBoxGeometry(...size,5,r)),m,at)}
function tube(parent,m,points,r=.022){return mesh(parent,geometry('tube:'+points.flat()+':'+r,()=>new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),32,r,10,false)),m)}
function torus(parent,m,at,r,t=.018){return mesh(parent,geometry('torus:'+r+':'+t,()=>new T.TorusGeometry(r,t,12,48)),m,at)}
function tapered(parent,m,points,radii){
 const key='tapered:'+points.flat()+':'+radii;
 const g=geometry(key,()=>{const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),segments=40,radial=14,frames=curve.computeFrenetFrames(segments,false),positions=[],indices=[];
  for(let i=0;i<=segments;i++){const t=i/segments,p=curve.getPoint(t),u=t*(radii.length-1),j=Math.min(radii.length-2,Math.floor(u)),r=T.MathUtils.lerp(radii[j],radii[j+1],u-j);for(let k=0;k<=radial;k++){const a=k/radial*Math.PI*2,offset=frames.normals[i].clone().multiplyScalar(Math.cos(a)*r).addScaledVector(frames.binormals[i],Math.sin(a)*r);positions.push(p.x+offset.x,p.y+offset.y,p.z+offset.z)}}
  for(let i=0;i<segments;i++)for(let k=0;k<radial;k++){const a=i*(radial+1)+k,b=a+radial+1;indices.push(a,b,a+1,b,b+1,a+1)}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return g;
 });return mesh(parent,g,m);
}
function remember(n){n.userData.rest={position:n.position.toArray(),rotation:[n.rotation.x,n.rotation.y,n.rotation.z],scale:n.scale.toArray()};return n}
function skin(face,colour){return mat(characterBodyColour(face,colour),face===1?.38:face===5?.30:.52,face===1?.06:0,{sheen:face===0||face===2?.35:0,sheenColor:new T.Color('#ffffff'),sheenRoughness:.65})}
const INK=()=>mat('#21172f',.28),CREAM=()=>mat('#fff0dc',.57),PINK=()=>mat('#ed9bac',.5),BROW=()=>mat('#714270',.5);
function cloudHull(){return geometry('smooth-cloud',()=>{
 const puffs=[[0,.68,0,.58,.49,.34],[-.38,.90,-.035,.31,.31,.31],[-.45,.57,-.015,.27,.27,.31],[0,1.12,-.035,.35,.35,.31],[.40,.82,-.025,.32,.32,.31]],k=.11;
 const field=(x,y,z)=>{let distance=10;for(const [cx,cy,cz,rx,ry,rz]of puffs){const d=(Math.hypot((x-cx)/rx,(y-cy)/ry,(z-cz)/rz)-1)*Math.min(rx,ry,rz),h=Math.max(0,Math.min(1,.5+.5*(d-distance)/k));distance=d*(1-h)+distance*h-k*h*(1-h)}return distance};
 const nx=37,ny=35,nz=25,min=[-.80,.12,-.43],step=[1.60/nx,1.42/ny,.86/nz],values=new Float32Array((nx+1)*(ny+1)*(nz+1)),at=(x,y,z)=>x+(nx+1)*(y+(ny+1)*z);
 for(let z=0;z<=nz;z++)for(let y=0;y<=ny;y++)for(let x=0;x<=nx;x++)values[at(x,y,z)]=field(min[0]+x*step[0],min[1]+y*step[1],min[2]+z*step[2]);
 const corners=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],positions=[],normals=[];
 const gradient=p=>{const e=.001;return new T.Vector3(field(p.x+e,p.y,p.z)-field(p.x-e,p.y,p.z),field(p.x,p.y+e,p.z)-field(p.x,p.y-e,p.z),field(p.x,p.y,p.z+e)-field(p.x,p.y,p.z-e)).normalize()};
 for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){
  const v=corners.map(c=>values[at(x+c[0],y+c[1],z+c[2])]);if(v.every(n=>n>=0)||v.every(n=>n<0))continue;
  const points=corners.map(c=>new T.Vector3(min[0]+(x+c[0])*step[0],min[1]+(y+c[1])*step[1],min[2]+(z+c[2])*step[2]));
  for(const t of tetra){const polygon=[];for(const [a,b]of edges){const i=t[a],j=t[b];if((v[i]<0)===(v[j]<0))continue;polygon.push(points[i].clone().lerp(points[j],v[i]/(v[i]-v[j])))}if(polygon.length<3)continue;
   const centre=polygon.reduce((c,p)=>c.add(p),new T.Vector3()).multiplyScalar(1/polygon.length),normal=gradient(centre),axis=polygon[0].clone().sub(centre).normalize(),across=new T.Vector3().crossVectors(normal,axis);polygon.sort((a,b)=>Math.atan2(a.clone().sub(centre).dot(across),a.clone().sub(centre).dot(axis))-Math.atan2(b.clone().sub(centre).dot(across),b.clone().sub(centre).dot(axis)));
   for(let j=1;j<polygon.length-1;j++)for(const p of [polygon[0],polygon[j],polygon[j+1]]){positions.push(p.x,p.y,p.z);const n=gradient(p);normals.push(n.x,n.y,n.z)}
  }
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));return g;
})}
function puffyStar(){return geometry('star',()=>{const points=Array.from({length:10},(_,i)=>{const a=Math.PI/2+i*Math.PI/5,r=i%2?.43:.61;return new T.Vector3(Math.cos(a)*r,Math.sin(a)*r,0)}),curve=new T.CatmullRomCurve3(points,true,'catmullrom',.5),outline=curve.getPoints(100).slice(0,-1),positions=[],indices=[],rings=16,count=outline.length;
 for(const side of [1,-1])for(let ring=0;ring<=rings;ring++){const a=ring/rings*Math.PI/2;for(const p of outline)positions.push(p.x*Math.sin(a),p.y*Math.sin(a),side*.28*Math.cos(a))}for(let side=0;side<2;side++)for(let ring=0;ring<rings;ring++)for(let j=0;j<count;j++){const start=side*(rings+1)*count,a=start+ring*count+j,b=start+(ring+1)*count+j,c=start+(ring+1)*count+(j+1)%count,d=start+ring*count+(j+1)%count;if(side)indices.push(a,c,b,a,d,c);else indices.push(a,b,c,a,c,d)}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return g});}
// Batched vertex colours preserve the small face/hand details with one draw per joint.
function batchColours(parent,options={}){if(parent.userData.surfaceFace)return;const parts=parent.children.filter(n=>n.isMesh);if(parts.length<2)return;const bits=parts.map(n=>{n.updateMatrix();const g=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrix);g.deleteAttribute('uv');const c=n.material.color,values=[];for(let i=0;i<g.attributes.position.count;i++)values.push(c.r,c.g,c.b);g.setAttribute('color',new T.Float32BufferAttribute(values,3));return g}),merged=mergeGeometries(bits);bits.forEach(n=>n.dispose());merged.userData.owned=true;parts.forEach(n=>parent.remove(n));mesh(parent,merged,mat('#ffffff',.32,.02,{vertexColors:true,...options}));}
function bakeRigid(parent){for(const child of [...parent.children])if(!child.isMesh)bakeRigid(child);const buckets=new Map();for(const child of [...parent.children])if(child.isMesh&&!child.userData.surfaceFace){child.updateMatrix();const list=buckets.get(child.material)||[];list.push(child);buckets.set(child.material,list)}for(const [m,parts]of buckets){if(parts.length<2)continue;const bits=parts.map(n=>{const g=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrix);g.deleteAttribute('uv');return g}),merged=mergeGeometries(bits);bits.forEach(n=>n.dispose());merged.userData.owned=true;parts.forEach(n=>parent.remove(n));mesh(parent,merged,m)}}
export function disposePerson(root){const buffers=new Set(),ownedMats=new Set();root.traverse(n=>{if(n.isMesh&&n.geometry.userData.owned)buffers.add(n.geometry);if(n.isMesh&&n.material.userData.instanceOwned)ownedMats.add(n.material)});buffers.forEach(g=>g.dispose());ownedMats.forEach(m=>m.dispose())}

// Studio toys v2: real shoulder/elbow/wrist and hip/knee joints. Silhouettes,
// expressions and attachment mounts belong to this shared model, never to the UI.
export const CHARACTER_MODEL_VERSION='wardrobe-v7';
function limb(parent,body,side,at,{robot=false,paw=false,short=false}={}){
 const shoulder=group(parent,side<0?'ArmL':'ArmR',at),length=short?.125:.175;
 const joint=robot?mat('#655478',.32,.35):body;
 orb(shoulder,joint,[0,-.018,0],[.095,.096,.095]);
 orb(shoulder,body,[0,-length*.48,.012],[.087,length*.67,.087]);
 const elbow=group(shoulder,'Elbow',[0,-length,0]);
 orb(elbow,joint,[0,0,0],[.078,.079,.078]);
 orb(elbow,body,[0,-length*.43,.02],[.078,length*.65,.081]);
 const wrist=group(elbow,'Wrist',[0,-length*.85,.025]),mitten=paw?CREAM():body;
 orb(wrist,mitten,[0,-.024,.02],[.112,.106,.095]);
 orb(wrist,mitten,[side*.086,.012,.035],[.043,.059,.049]);
 for(let k=0;k<2;k++)tube(wrist,mat(robot?'#584369':paw?'#c8ad9e':'#795572',.65),[[(k-.5)*.052,-.055,.104],[(k-.5)*.05,-.072,.097]],.003);
 shoulder.userData.grip=[0,-length*1.85-.024,.045];
 shoulder.userData.elbow=elbow;shoulder.userData.wrist=wrist;
 return shoulder;
}
function legsV2(root,body,pose,{robot=false,short=false,paw=false}={}){
 return [-1,1].map(side=>{
  const hip=group(root,side<0?'LegL':'LegR',[side*.195,.09,0]),length=short?.11:.19;
  orb(hip,body,[0,-length*.44,0],[.12,length*.75,.13]);
  const knee=group(hip,'Knee',[0,-length,0]);
  orb(knee,body,[0,-length*.48,.01],[.103,length*.77,.112]);
  orb(knee,paw?CREAM():body,[0,-length*.94,.075],[.151,.108,.192]);
  if(robot){box(knee,mat('#4e3e63',.36,.18),[0,-length*1.22,.08],[.29,.07,.34],.03);orb(knee,mat('#b8a1d8',.3,.35),[side*.10,0,0],[.025,.047,.05])}
  if(pose==='seated'){hip.rotation.x=-Math.PI/2;knee.rotation.x=Math.PI/2}
  return hip;
 });
}
function eyesV2(head,at,size,iris,robot=false){
 const n=group(head,'Eye',at);n.scale.setScalar(size);n.userData.eyeScale=size;
 if(robot){
  const light=mat('#a0ffee',.27,0,{emissive:'#41dfc3',emissiveIntensity:.55});
  box(n,light,[0,0,.022],[.18,.225,.045],.07);
  orb(n,mat('#effffb',.28),[-.035,.05,.05],[.023,.033,.01]);
 }else{
  orb(n,mat('#fff9ef',.32),[0,0,0],[.155,.183,.08]);
  const pupil=group(n,'Pupil',[0,0,.075]);
  orb(pupil,mat(iris,.34),[0,-.005,0],[.101,.125,.034]);
  orb(pupil,mat('#201b35',.3),[.006,-.008,.025],[.061,.085,.021]);
  orb(pupil,mat('#ffffff',.22),[-.027,.043,.047],[.03,.034,.009]);
  orb(pupil,mat('#fff6fa',.24),[.041,-.046,.044],[.011,.013,.005]);
  batchColours(pupil,{roughness:.32});
 }
 const lid=group(head,'ClosedEye',at);lid.scale.setScalar(size);
 tube(lid,robot?mat('#9dffe6',.28,0,{emissive:'#3ee0be',emissiveIntensity:.4}):INK(),[[-.13,.012,.10],[0,-.025,.13],[.13,.012,.10]],.018);lid.visible=false;
 return {eye:n,lid};
}
function pivotHead(head,y){for(const n of head.children)n.position.y-=y;head.position.y=y}

export function createCharacter(face=0,colour=0,pose='seated',accessory='none',accessoryColours={}){
 face=Number.isInteger(face)&&face>=0&&face<6?face:0;colour=Number.isInteger(colour)&&colour>=0&&colour<8?colour:0;
 const root=new T.Group();root.name=['Pof','Robot','Cat','Cyclops','Star','Jelly'][face];root.userData.face=face;root.userData.modelVersion=CHARACTER_MODEL_VERSION;
 const body=skin(face,colour),head=group(root,'Head'),torso=group(root,'Torso'),eyes=[],lids=[],arms=[],eyebrows=[];
 let feet=[],mouth,tail=null,accent=null,ears=[];
 const addEye=(at,size=1,iris='#8054bb',robot=false)=>{const e=eyesV2(head,at,size,iris,robot);eyes.push(e.eye);lids.push(e.lid)};
 const cheek=(x,y,z,r=.06)=>orb(head,mat('#f1a1ad',.65),[x,y,z],[r,r*.48,.015]);
 const armPair=(x,y,z,options={})=>{for(const side of [-1,1])arms.push(limb(root,body,side,[side*x,y,z],options))};
 let headPivot=.84;
 if(face===0){
  // A continuous soft cloud, not intersecting cropped puff pictures.
  mesh(head,cloudHull(),body,[0,0,0],[.94,.91,1.06]);
  addEye([-.195,.75,.354],1.01,'#7c4eb5');addEye([.195,.75,.354],1.01,'#7c4eb5');

  cheek(-.34,.57,.325);cheek(.34,.57,.325);
  accent=group(head,'CloudCurl',[.19,1.15,-.01]);orb(accent,body,[0,0,0],[.24,.20,.24]);
  armPair(.45,.49,.025,{short:true});feet=legsV2(root,body,pose,{short:true,paw:true});
  headPivot=.70;
 }else if(face===1){
  const ceramic=mat('#eee6ff',.32,.03),dark=mat('#212039',.3,.15),trim=mat('#bb9cdf',.31,.24);
  box(torso,body,[0,.29,0],[.61,.64,.48],.17);box(torso,ceramic,[0,.32,.24],[.43,.36,.058],.11);
  // Three quiet battery pips are body detail, not pre-equipped accessories.
  const heart=new T.Shape();heart.moveTo(0,-.06);heart.bezierCurveTo(-.12,.01,-.06,.12,0,.055);heart.bezierCurveTo(.06,.12,.12,.01,0,-.06);mesh(torso,geometry('robot-heart',()=>new T.ExtrudeGeometry(heart,{depth:.009,bevelEnabled:true,bevelSize:.006,bevelThickness:.004,bevelSegments:3,steps:1})),mat('#a585d4',.4,0,{emissive:'#8d67ba',emissiveIntensity:.10}),[0,.32,.28]);
  orb(torso,trim,[0,.65,0],[.13,.08,.13]);
  box(head,body,[0,1.02,0],[1.08,.80,.67],.23);
  box(head,ceramic,[0,1.025,.25],[1.015,.70,.25],.20);
  box(head,dark,[0,1.025,.39],[.86,.48,.13],.16);
  for(const side of [-1,1]){box(head,trim,[side*.555,1.025,-.025],[.085,.32,.30],.04);box(head,body,[side*.60,1.025,-.025],[.045,.21,.23],.02)}
  addEye([-.185,1.06,.465],.89,'#a0ffee',true);addEye([.185,1.06,.465],.89,'#a0ffee',true);
  const light=mat('#9dffe6',.25,0,{emissive:'#45dfc3',emissiveIntensity:.4});

  accent=group(head,'Antenna',[0,1.42,-.05]);tube(accent,trim,[[0,0,0],[0,.07,0],[.035,.13,0]],.025);orb(accent,light,[.035,.14,0],[.055,.055,.055]);
  armPair(.34,.52,.015,{robot:true});feet=legsV2(root,body,pose,{robot:true});
  headPivot=1.0;
 }else if(face===2){
  orb(torso,body,[0,.32,0],[.35,.43,.275]);orb(torso,CREAM(),[0,.275,.24],[.20,.27,.055]);
  orb(head,body,[0,1.01,0],[.535,.43,.355]);
  for(const side of [-1,1]){
   const ear=group(head,side<0?'EarL':'EarR',[side*.33,1.29,-.02]);
   const shape=new T.Shape();shape.moveTo(-.17,0);shape.quadraticCurveTo(-.18,.20,-.035,.36);shape.quadraticCurveTo(.05,.4,.18,0);shape.closePath();
   const g=geometry('studio-cat-ear',()=>new T.ExtrudeGeometry(shape,{depth:.10,bevelEnabled:true,bevelSize:.035,bevelThickness:.03,bevelSegments:4,curveSegments:16}));
   mesh(ear,g,body,[0,0,-.06]);mesh(ear,g,mat('#f1b4b1',.63),[0,.045,.071],[.60,.72,.12]);ear.rotation.z=-side*.13;ears.push(ear);
   orb(head,CREAM(),[side*.135,.837,.30],[.17,.11,.07]);
   for(let i=0;i<2;i++)tube(head,mat('#a36762',.65),[[side*.32,.85-i*.05,.30],[side*.54,.87-i*.07,.25]],.004);
  }
  addEye([-.19,1.055,.317],.94,'#4c8c87');addEye([.19,1.055,.317],.94,'#4c8c87');

  orb(head,mat('#b66c76',.5),[0,.89,.389],[.044,.032,.024]);
  for(const x of [-.12,0,.12]){const s=orb(head,mat('#b9704b',.6),[x,1.34,.20],[.026,.075,.02]);s.rotation.z=x*-.8}
  tail=group(root,'Tail',[0,.08,-.18]);tapered(tail,body,[[0,0,0],[.36,-.07,-.10],[.50,.13,-.12],[.46,.37,-.09],[.32,.39,-.02]],[.085,.095,.09,.10,.055]);orb(tail,CREAM(),[.32,.39,-.02],[.10,.10,.085]);
  armPair(.33,.52,.015,{paw:true});feet=legsV2(root,body,pose,{paw:true});
  headPivot=.96;
 }else if(face===3){
  orb(torso,body,[0,.35,0],[.43,.47,.32]);orb(torso,mat('#b9e8cd',.6),[0,.265,.285],[.26,.30,.055]);
  orb(head,body,[0,.89,0],[.49,.51,.36]);
  for(const side of [-1,1]){
   tapered(head,CREAM(),[[side*.34,1.20,-.02],[side*.44,1.31,-.03],[side*.42,1.48,-.05],[side*.33,1.54,-.04]],[.10,.095,.06,.005]);
   for(let i=0;i<3;i++)orb(head,mat('#3caa92',.65),[side*(.36+i*.028),.73+i*.08,.25],[.022,.025,.014]);
  }
  addEye([0,.98,.327],1.54,'#b58a38');

  accent=group(head,'Sprout',[0,1.36,-.07]);for(const side of [-1,1]){const leaf=orb(accent,mat('#268b75',.55),[side*.045,.055,0],[.042,.10,.043]);leaf.rotation.z=-side*.4}
  armPair(.40,.56,0);feet=legsV2(root,body,pose);
  headPivot=.87;
 }else if(face===4){
  mesh(head,puffyStar(),body,[0,.75,0],[.94,.94,1.13]);
  addEye([-.175,.835,.269],.87,'#a35b38');addEye([.175,.835,.269],.87,'#a35b38');

  cheek(-.30,.66,.258,.057);cheek(.30,.66,.258,.057);
  armPair(.34,.58,.005,{short:true});feet=legsV2(root,body,pose,{short:true});
  headPivot=.74;
 }else{
  const jelly=body.clone();jelly.userData.instanceOwned=true;jelly.roughness=.27;jelly.clearcoat=.7;jelly.clearcoatRoughness=.27;
  orb(head,jelly,[0,.89,-.015],[.55,.47,.365]);
  for(let i=0;i<7;i++){const a=i*Math.PI*2/7;orb(head,jelly,[Math.cos(a)*.43,.56,Math.sin(a)*.22],[.14,.115,.15])}
  addEye([-.185,.925,.314],.91,'#5266a9');addEye([.185,.925,.314],.91,'#5266a9');

  cheek(-.30,.74,.29,.055);cheek(.30,.74,.29,.055);
  const spread=[[-.33,.02],[-.22,.18],[-.08,.25],[.08,.25],[.22,.18],[.33,.02]];
  spread.forEach(([x,z],i)=>{const side=i<3?-1:1,n=group(root,'Tentacle'+i,[x,.53,z-.10]);
   tapered(n,jelly,[[0,0,0],[side*.02,-.17,.015],[side*.06,-.34,.035],[side*.17,-.40,.085]],[.062,.073,.074,.055]);
   const elbow=group(n,'Elbow',[side*.17,-.40,.085]);orb(elbow,jelly,[side*.035,.012,.01],[.09,.07,.08]);
   n.userData.grip=[side*.205,-.388,.095];n.userData.elbow=elbow;arms.push(n);
  });
  accent=group(head,'BellGlint',[.17,1.19,.22]);orb(accent,mat('#d5f3ff',.4),[0,0,0],[.037,.08,.012]);accent.rotation.z=-.5;
  headPivot=.87;
 }
 if(face===0||face===4){const rise=face===0?.12:.24;for(const leg of feet)leg.position.y+=rise;root.userData.seatOffset=-rise}
 const rear=REAR_PROFILES[face],hips=group(rear.parent==='head'?head:torso,'Hips',rear.at);hips.userData.anatomy=rear.name;
 // Broad overlapping lobes stay embedded in the torso; no hanging spheres.
 for(const side of [-1,1]){const [w,h,d]=rear.size;if(face===1)box(hips,body,[side*w*.245,0,0],[w*.48,h,d],.045);else orb(hips,body,[side*w*.28,0,0],[w*.72,h*.78,d])}
 hips.userData.lobes=2;
 const facial=createFacialRig(head,face);mouth=facial.mouth;eyebrows.push(...facial.brows);
 pivotHead(head,headPivot);
 const forearms=arms.map(a=>a.userData.elbow).filter(Boolean),hands=arms.map(a=>a.userData.wrist).filter(Boolean),knees=feet.map(a=>a.getObjectByName('Knee')).filter(Boolean);
 root.userData.rig={face,pose,facial,rear,head,body:torso,eyes,pupils:eyes.flatMap(e=>e.children.filter(n=>n.name==='Pupil')),lids,arms,forearms,hands,legs:feet,knees,brows:eyebrows,mouth,tail,accent,ears,hips};
 root.userData.pose=pose;
 for(const eye of eyes)for(const pupil of eye.children.filter(n=>n.name==='Pupil'))pupil.scale.setScalar(1.08);
 for(const id of accessoryList(accessory))addAccessory(root,id,accessoryColours);
 // Preserve articulation; merge colour details only within each rigid joint.
 for(const parent of [torso,hips,...arms,...forearms,...hands,...feet,...knees,...eyes,...eyebrows])batchColours(parent,{roughness:face===1?.34:.48,metalness:face===1?.08:0});
 bakeRigid(root);root.updateMatrixWorld(true);return root;
}
export const createSeatedCharacter=(face,colour,accessory='none',colours={})=>createCharacter(face,colour,'seated',accessory,colours);

export function characterContactPoint(root,camera){
 const rig=root.userData.rig,node=rig.hands?.[1]||rig.forearms?.[1]||rig.arms[1];
 return node.getWorldPosition(new T.Vector3()).project(camera);
}

function addAccessory(root,requested,colours={}){
 const id=({shades:'glasses',stargaze:'glasses',silkBow:'bow',royalBow:'bow',beanie:'cap',astralCrown:'crown'})[requested]||requested;
 const rig=root.userData.rig,head=rig.head,fit=accessoryFit(rig.face,id);
 const parent=fit.parent==='body'?rig.body:head;
 const mount=group(parent,'Accessory-'+requested),gold=mat(accessoryColour(colours,'head','#eac168'),.3,.42),violet=mat(accessoryColour(colours,id==='bow'?'neck':'head','#7651c2'),.48);
 mount.userData.attachment=requested;mount.userData.fit=fit;mount.userData.slot=id==='bow'?'neck':id==='glasses'?'face':'head';
 if(id==='glasses'){
  const ink=mat(accessoryColour(colours,'face','#302b48'),.34),points=rig.eyes.map(e=>e.position.clone());
  for(let i=0;i<points.length;i++){
   const p=points[i],scale=rig.eyes[i].userData.eyeScale||1,r=.173*scale,z=p.z+fit.depth*scale;
   const ring=torus(mount,ink,[p.x,p.y,z],r,.017);ring.scale.y=1.12;
   for(const side of points.length===1?[-1,1]:[i===0?-1:1]){
    const wrap=[[.22,0],[.055,-.006],[fit.back,-.025]].map(([depth,dy])=>sideContact(root,side,p.y+head.position.y+dy,depth,fit.side));
    tube(mount,ink,[[p.x+side*r,p.y,z],...wrap],.012);
   }
  }
  if(points.length===2){const [l,r]=points,contact=frontContact(root,0,l.y+head.position.y+fit.bridge);const z=contact.z+.014;
   tube(mount,ink,[[l.x+.16,l.y,l.z+fit.depth],[0,l.y+fit.bridge,z],[r.x-.16,r.y,r.z+fit.depth]],.014);
   orb(mount,ink,[0,l.y+fit.bridge,z-.006],[.022,.012,.018]);
  }
 }else if(id==='bow'){
  root.updateMatrixWorld(true);const skin=[rig.head,rig.body],ray=new T.Raycaster(new T.Vector3(fit.at[0],fit.at[1],3),new T.Vector3(0,0,-1));
  const hit=ray.intersectObjects(skin,true).find(h=>!h.object.userData.surfaceFace&&!hasAccessoryParent(h.object));if(!hit)throw Error('Neck contact missing for '+rig.face);
  const at=parent.worldToLocal(new T.Vector3(fit.at[0],fit.at[1],hit.point.z+.005));mount.position.copy(at);mount.scale.set(...fit.size);mount.rotation.set(...fit.rotation);const neckY=0;const bowZ=0;
  for(const side of [-1,1]){const shape=new T.Shape();shape.moveTo(side*.023,-.029);shape.lineTo(side*.145,-.078);shape.lineTo(side*.145,.078);shape.lineTo(side*.023,.029);shape.closePath();const g=geometry('angular-bow-'+side,()=>new T.ExtrudeGeometry(shape,{depth:.032,bevelEnabled:true,bevelSize:.006,bevelThickness:.005,bevelSegments:2}));mesh(mount,g,violet,[0,neckY,bowZ]);tube(mount,mat(accessoryColour(colours,'neck','#a58ae1'),.65),[[side*.035,neckY,bowZ+.038],[side*.105,neckY+.027,bowZ+.038]],.003)}
  box(mount,violet,[0,neckY,bowZ+.025],[.060,.080,.057],.01);
 }else if(id==='cap'||id==='crown'){
  if(rig.face===1)rig.accent.visible=false;
  mount.position.set(fit.at[0],fit.at[1]-head.position.y,fit.at[2]);mount.rotation.set(...fit.rotation);
  const [rx,height,rz]=fit.size;
  if(id==='cap'){
   mesh(mount,geometry('cap-open-dome',()=>new T.SphereGeometry(1,32,18,0,Math.PI*2,0,Math.PI/2)),violet,[0,0,0],[rx,height,rz]);
   const rim=torus(mount,violet,[0,0,0],1,.018);rim.rotation.x=Math.PI/2;rim.scale.set(rx,rz,1);
   const brim=orb(mount,mat(accessoryColour(colours,'head','#a58ae1'),.45),[0,-.008,rz*.97],[rx*1.06,.022,rz*.70]);brim.rotation.x=.06;
   orb(mount,gold,[0,height,0],[.022,.013,.022]);
  }else{
   const band=mesh(mount,geometry('crown-open-band',()=>new T.CylinderGeometry(1,1,.065,40,1,true)),gold,[0,.025,0],[rx,1,rz]);
   for(const y of [0,.06]){const rim=torus(mount,gold,[0,y,0],1,.015);rim.rotation.x=Math.PI/2;rim.scale.set(rx,rz,1)}
   for(let i=0;i<5;i++){const angle=i*Math.PI*2/5,x=Math.sin(angle)*rx,z=Math.cos(angle)*rz;
    mesh(mount,geometry('fitted-crown-spike',()=>new T.ConeGeometry(.042,.15,4)),gold,[x,.10,z],[1,height/.20,1]);
    orb(mount,mat('#d96eab',.27),[x,.10+.075*height/.20,z],[.021,.023,.021]);
   }
  }
 }
 clearAccessorySurface(root,mount,id);
 batchColours(mount,{roughness:.36,metalness:id==='crown'?.28:.06});
 const baked=BAKED_ACCESSORY_FITS[rig.face+':'+id];if(baked){mount.position.fromArray(baked.at);const piece=mount.children[0],source=piece.geometry;piece.geometry=geometry('fitted-piece:'+rig.face+':'+id+':'+accessoryColour(colours,mount.userData.slot,'original'),()=>{let g=piece.geometry.clone();const p=g.attributes.position;for(let i=0;i<baked.patch.length;i+=4)p.setXYZ(baked.patch[i],baked.patch[i+1],baked.patch[i+2],baked.patch[i+3]);if(baked.patch.length){g.deleteAttribute('normal');const smooth=mergeVertices(g,1e-5);g.dispose();g=smooth;g.computeVertexNormals()}g.userData.owned=false;return g});if(source.userData.owned)source.dispose()}
 if(requested==='shades'||requested==='stargaze'){
  for(const eye of rig.eyes){const p=eye.position,size=eye.userData.eyeScale||1,z=p.z+fit.depth*size;
   if(requested==='shades')orb(mount,mat('#292f52',.14,.22,{transparent:true,opacity:.65}),[p.x,p.y,z],[.153*size,.174*size,.006]);
   else for(const sign of [-1,1]){const gem=mesh(mount,geometry('wardrobe-diamond',()=>new T.OctahedronGeometry(.027)),gold,[p.x+sign*.13*size,p.y+.17*size,z]);gem.rotation.z=Math.PI/4;}
  }
 }
 if(requested==='silkBow'||requested==='royalBow'){
  const jewel=mat(requested==='royalBow'?'#75e6e2':'#f4d9ed',.17,.35);mesh(mount,geometry('bow-jewel',()=>new T.OctahedronGeometry(.036)),jewel,[0,0,.065]);
  if(requested==='royalBow')for(const side of [-1,1])tube(mount,gold,[[side*.035,0,.049],[side*.132,.060,.049],[side*.132,-.060,.049],[side*.035,0,.049]],.004);
 }
 if(requested==='beanie'){const h=fit.size[1];orb(mount,violet,[0,h+.04,0],[.065,.065,.065])}
 if(requested==='astralCrown'){const gem=mat('#7ceade',.16,.35),z=fit.size[2];tube(mount,gold,[[0,.17,z],[0,.23,z]],.006);mesh(mount,puffyStar(),gem,[0,.24,z],[.10,.10,.10])}
}


function hasAccessoryParent(node){for(let n=node;n;n=n.parent)if(n.userData.attachment)return true;return false}

function frontContact(root,x,y){root.updateMatrixWorld(true);const rig=root.userData.rig,ray=new T.Raycaster(new T.Vector3(x,y,3),new T.Vector3(0,0,-1));const hit=ray.intersectObjects([rig.head,rig.body],true).find(h=>!h.object.userData.surfaceFace&&!hasAccessoryParent(h.object));if(!hit)throw Error('Accessory contact missing for '+rig.face);return rig.head.worldToLocal(hit.point.clone())}
function sideContact(root,side,y,z,fallback){const key=[root.userData.face,side,y,z].join(':');if(contactPoints.has(key))return [...contactPoints.get(key)];root.updateMatrixWorld(true);const head=root.userData.rig.head,ray=new T.Raycaster(new T.Vector3(side*3,y,z),new T.Vector3(-side,0,0)),hit=ray.intersectObject(head,true).find(h=>!h.object.userData.surfaceFace&&!hasAccessoryParent(h.object));const p=hit?head.worldToLocal(hit.point.clone()):new T.Vector3(side*fallback,y-head.position.y,z);p.x+=side*.016;const result=p.toArray();contactPoints.set(key,result);return [...result]}

// Fit the entire piece, not just its centre: curved skin can protrude through
// a wing, bridge or hat rim even when the attachment anchor itself is clear.
function clearAccessorySurface(root,mount,id){
 const rig=root.userData.rig;if(BAKED_ACCESSORY_FITS[rig.face+':'+id])return;
 root.updateMatrixWorld(true);const skin=[];
 for(const parent of [rig.head,rig.body])parent.traverse(n=>{if(n.isMesh&&!n.userData.surfaceFace&&!hasAccessoryParent(n))skin.push(n)});
 const up=id==='cap'||id==='crown',ray=new T.Raycaster(),point=new T.Vector3();let correction=0;
 mount.traverse(n=>{if(!n.isMesh)return;const g=n.geometry.clone(),pos=g.attributes.position;
  for(let i=0;i<pos.count;i++){
   point.fromBufferAttribute(pos,i).applyMatrix4(n.matrixWorld);
   if(id==='glasses'&&Math.abs(point.x)>.36&&point.z<.29)continue;
   ray.set(up?new T.Vector3(point.x,3,point.z):new T.Vector3(point.x,point.y,3),new T.Vector3(0,up?-1:0,up?0:-1));
   const hit=ray.intersectObjects(skin,false)[0];if(!hit)continue;
   const delta=(up?hit.point.y-point.y:hit.point.z-point.z)+.006;
   if(up&&delta>0){point.y+=delta;n.worldToLocal(point);pos.setXYZ(i,point.x,point.y,point.z)}
   else if(!up)correction=Math.max(correction,delta);
  }
  if(up){g.computeVertexNormals();g.userData.owned=true;n.geometry=g}else g.dispose();
 });
 if(!up&&correction>0){const world=mount.getWorldPosition(new T.Vector3());world.z+=correction;mount.position.copy(mount.parent.worldToLocal(world));root.updateMatrixWorld(true)}
}