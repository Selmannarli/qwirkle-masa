import {characterBodyColour} from '../public/character-style.mjs';
import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// A single model library is used by the table, portraits and expression previews.
const geometries=new Map(),materials=new Map();
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
function skin(face,colour){return mat(characterBodyColour(face,colour),face===1?.27:face===5?.2:.43,face===1?.14:0,{sheen:face===0||face===2?.35:0,sheenColor:new T.Color('#ffffff'),sheenRoughness:.65})}
const INK=()=>mat('#21172f',.28),CREAM=()=>mat('#fff0dc',.57),PINK=()=>mat('#ed9bac',.5),BROW=()=>mat('#714270',.5);
function eye(head,at,scale=1,robot=false){
 const n=group(head,'Eye',at);n.scale.setScalar(scale);n.userData.eyeScale=scale;
 if(robot){const led=mat('#6ce7ff',.18,0,{emissive:'#27bbef',emissiveIntensity:.9}),ring=torus(n,led,[0,0,.02],.103,.023);ring.scale.y=1.19;orb(n,mat('#071426',.18),[0,0,.02],[.079,.102,.023]);orb(n,mat('#c1f8ff',.16,0,{emissive:'#91ecff',emissiveIntensity:.6}),[.037,.053,.055],[.018,.021,.009]);
 }else{orb(n,INK(),[0,0,0],[.16,.187,.075]);orb(n,mat('#fffdf8',.26),[0,0,.019],[.147,.174,.076]);orb(n,mat('#8a47cb',.23),[.012,-.009,.086],[.105,.127,.033]);orb(n,mat('#51217c',.25),[.015,-.012,.114],[.08,.102,.022]);orb(n,INK(),[.017,-.012,.133],[.056,.079,.018]);orb(n,mat('#ffffff',.14),[-.021,.043,.153],[.027,.03,.008]);orb(n,mat('#fff5ff',.15),[.049,-.055,.148],[.012,.014,.006]);}
 const lid=group(head,'ClosedEye',at);lid.scale.setScalar(scale);tube(lid,robot?mat('#72e9ff',.18,0,{emissive:'#25c2fa',emissiveIntensity:.8}):INK(),[[-.145,.005,.105],[0,-.025,.145],[.145,.005,.105]],robot?.018:.014);lid.visible=false;remember(n);remember(lid);return {eye:n,lid};
}
function brows(head,at,scale=1,colour=BROW()){
 return [-1,1].map(side=>{const n=group(head,'Brow'+side,[at[0]+side*.2*scale,at[1],at[2]]);tube(n,colour,[[-.1*scale,-.01,0],[0,.03*scale,.018],[.095*scale,-.005,0]],.026*scale);return remember(n)});
}
function mouths(head,at,width=.13,colour=INK(),robot=false){
 const mouth={neutral:group(head,'MouthNeutral',at),happy:group(head,'MouthHappy',at),sad:group(head,'MouthSad',at)};
 tube(mouth.neutral,colour,[[-width,0,0],[0,-.045,.019],[width,.005,0]],robot?.017:.012);
 if(robot){tube(mouth.happy,colour,[[-width*1.45,.012,.01],[0,-width*.58,.025],[width*1.45,.012,.01]],.019)}else{const w=width*1.45,smile=geometry('happy-smile:'+width,()=>{const shape=new T.Shape();shape.moveTo(-w,0);shape.quadraticCurveTo(0,-w*.12,w,0);shape.quadraticCurveTo(w*.75,-w*.86,0,-w*.82);shape.quadraticCurveTo(-w*.75,-w*.86,-w,0);return new T.ExtrudeGeometry(shape,{depth:.01,bevelEnabled:true,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:18})});mesh(mouth.happy,smile,colour);orb(mouth.happy,mat('#e87491',.5),[0,-w*.63,.021],[w*.50,.024,.012]);orb(mouth.happy,CREAM(),[0,-.025,.021],[w*.64,.014,.01])}
 tube(mouth.sad,colour,[[-width,-.035,0],[0,.018,.014],[width,-.035,0]],robot?.017:.013);
 mouth.happy.visible=false;mouth.sad.visible=false;for(const n of Object.values(mouth))remember(n);return mouth;
}
function hand(parent,body,side,at,cream=false,robot=false){
 const n=group(parent,side<0?'ArmL':'ArmR',at),palm=cream?CREAM():body;
 if(robot){const copper=mat('#bc8052',.25,.68);orb(n,copper,[0,-.025,0],[.105,.105,.105]);box(n,CREAM(),[side*.015,-.17,.045],[.19,.25,.2],.08);torus(n,body,[0,-.265,.065],.088,.018).rotation.x=Math.PI/2;orb(n,mat('#343443',.29,.24),[side*.02,-.33,.08],[.12,.10,.105]);for(let k=0;k<3;k++)orb(n,mat('#343443',.29,.24),[side*(-.055+k*.05),-.386,.12],[.029,.04,.033]);
 }else{orb(n,body,[0,-.14,.035],[.095,.19,.10]);orb(n,palm,[side*.015,-.285,.07],[.125,.12,.11]);orb(n,palm,[side*.102,-.253,.10],[.043,.059,.045]);for(let i=0;i<2;i++)tube(n,mat(cream?'#c9a992':'#88536d',.6),[[side*(-.045+i*.047),-.332,.153],[side*(-.04+i*.044),-.35,.15]],.0035);}
 return remember(n);
}
function legs(parent,body,pose,boots=body,robot=false,short=false){
 return [-1,1].map(side=>{const hip=group(parent,side<0?'LegL':'LegR',[side*.20,-.02,0]);orb(hip,body,[0,short?-.065:-.11,0],[.135,short?.12:.16,.13]);const knee=group(hip,'Knee',[0,short?-.13:-.22,0]);orb(knee,body,[0,short?-.075:-.11,0],[.108,short?.11:.16,.115]);orb(knee,boots,[0,short?-.16:-.26,.075],[.165,.115,.21]);if(robot){orb(knee,mat('#353442',.32,.18),[0,-.3,.11],[.18,.075,.21]);orb(knee,mat('#bd7e50',.28,.6),[side*.105,-.015,.045],[.035,.065,.06])}else if(boots!==body)orb(knee,CREAM(),[0,-.31,.095],[.166,.05,.20]);if(pose==='seated'){hip.rotation.x=-Math.PI/2;knee.rotation.x=Math.PI/2}remember(knee);return remember(hip)});
}
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
function catEar(head,body,side){const shape=new T.Shape();shape.moveTo(-.2,0);shape.quadraticCurveTo(-.18,.26,0,.48);shape.quadraticCurveTo(.16,.28,.22,0);shape.closePath();const g=geometry('catEar',()=>new T.ExtrudeGeometry(shape,{depth:.12,bevelEnabled:true,bevelSize:.04,bevelThickness:.035,bevelSegments:4,steps:1}));const n=mesh(head,g,body,[side*.35,1.20,-.09]);n.rotation.z=-side*.2;const inner=mesh(head,g,mat('#e6878d',.6),[side*.35,1.245,.045],[.64,.74,.15]);inner.rotation.z=-side*.2;for(let k=0;k<3;k++){const fur=orb(head,CREAM(),[side*(.35+.025*k),1.30+.045*k,.079],[.032,.065,.012]);fur.rotation.z=side*.25}}
// Batched vertex colours preserve the small face/hand details with one draw per joint.
function batchColours(parent,options={}){const parts=parent.children.filter(n=>n.isMesh);if(parts.length<2)return;const bits=parts.map(n=>{n.updateMatrix();const g=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrix);g.deleteAttribute('uv');const c=n.material.color,values=[];for(let i=0;i<g.attributes.position.count;i++)values.push(c.r,c.g,c.b);g.setAttribute('color',new T.Float32BufferAttribute(values,3));return g}),merged=mergeGeometries(bits);bits.forEach(n=>n.dispose());merged.userData.owned=true;parts.forEach(n=>parent.remove(n));mesh(parent,merged,mat('#ffffff',.32,.02,{vertexColors:true,...options}));}
function bakeRigid(parent){for(const child of [...parent.children])if(!child.isMesh)bakeRigid(child);const buckets=new Map();for(const child of [...parent.children])if(child.isMesh){child.updateMatrix();const list=buckets.get(child.material)||[];list.push(child);buckets.set(child.material,list)}for(const [m,parts]of buckets){if(parts.length<2)continue;const bits=parts.map(n=>{const g=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrix);g.deleteAttribute('uv');return g}),merged=mergeGeometries(bits);bits.forEach(n=>n.dispose());merged.userData.owned=true;parts.forEach(n=>parent.remove(n));mesh(parent,merged,m)}}
export function disposePerson(root){const buffers=new Set(),ownedMats=new Set();root.traverse(n=>{if(n.isMesh&&n.geometry.userData.owned)buffers.add(n.geometry);if(n.isMesh&&n.material.userData.instanceOwned)ownedMats.add(n.material)});buffers.forEach(g=>g.dispose());ownedMats.forEach(m=>m.dispose())}

export function createCharacter(face=0,colour=0,pose='seated',accessory='none'){
 face=Number.isInteger(face)&&face>=0&&face<6?face:0;colour=Number.isInteger(colour)&&colour>=0&&colour<8?colour:0;
 const root=new T.Group();root.name=['Pof','Robot','Cat','Cyclops','Star','Jelly'][face];root.userData.face=face;
 const body=skin(face,colour),head=group(root,'Head'),torso=group(root,'Torso'),eyes=[],lids=[],arms=[],eyebrows=[];let feet=[],mouth,tail=null,accent=null;
 const addEye=(at,scale=1,robot=false)=>{const part=eye(head,at,scale,robot);eyes.push(part.eye);lids.push(part.lid);return part.eye};
 if(face===0){
  // The cloud silhouette, oversized violet eyes and cream soles match Pof's portrait.
  mesh(head,cloudHull(),body);
  addEye([-.205,.75,.325],1.05);addEye([.205,.75,.325],1.02);eyebrows.push(...brows(head,[0,1.0,.31],1,mat('#7e4fae',.47)));mouth=mouths(head,[0,.5,.36],.13);for(const side of [-1,1])orb(head,PINK(),[side*.34,.56,.30],[.085,.045,.025]);arms.push(hand(root,body,-1,[-.51,.43,.015]),hand(root,body,1,[.51,.43,.015]));feet=legs(root,body,pose,body,false,true);for(const leg of feet){const knee=leg.getObjectByName('Knee');orb(knee,CREAM(),[0,-.21,.09],[.167,.052,.20])}
 }else if(face===1){
  const copper=mat('#be8159',.24,.72),ceramic=mat('#fff0dc',.27,.04),visor=mat('#111522',.15,.20),led=mat('#6ce7ff',.18,0,{emissive:'#29baf1',emissiveIntensity:.85});
  orb(torso,ceramic,[0,.25,0],[.36,.37,.29]);orb(torso,body,[0,.27,.255],[.26,.26,.085]);torus(torso,copper,[0,.27,.32],.25,.014);orb(torso,copper,[0,.64,0],[.13,.1,.13]);
  // Round ceramic helmet and curved black glass, rather than a different box robot.
  orb(head,ceramic,[0,1.02,0],[.59,.47,.42]);orb(head,body,[0,1.02,-.13],[.605,.40,.32]);orb(head,copper,[0,1.02,.316],[.51,.365,.105]);orb(head,visor,[0,1.025,.355],[.49,.346,.105]);
  for(const side of [-1,1]){orb(head,copper,[side*.575,1.02,-.015],[.06,.24,.245]);orb(head,body,[side*.615,1.02,-.015],[.045,.19,.20]);orb(head,mat('#674084',.25,.22),[side*.647,1.02,-.015],[.024,.135,.145]);}
  addEye([-.205,1.04,.447],.94,true);addEye([.205,1.04,.447],.94,true);eyebrows.push(...brows(head,[0,1.27,.414],.84,led));mouth=mouths(head,[0,.846,.447],.076,led,true);
  accent=group(head,'Antenna',[0,1.46,-.06]);tapered(accent,copper,[[0,0,0],[.025,.1,0],[-.02,.20,0],[-.07,.23,0]],[.035,.026,.022]);orb(accent,copper,[-.075,.24,0],[.072,.072,.072]);orb(head,body,[0,1.46,-.06],[.11,.025,.085]);
  const chest=group(torso,'ChestLight',[0,.29,.349]);for(let i=0;i<5;i++){const a=i*Math.PI*2/5,petal=orb(chest,mat('#faf1ff',.18,0,{emissive:'#b881fa',emissiveIntensity:.65}),[Math.sin(a)*.072,Math.cos(a)*.072,0],[.028,.065,.009]);petal.rotation.z=-a}box(torso,copper,[0,.09,.28],[.10,.025,.015],.009);
  arms.push(hand(root,body,-1,[-.42,.48,0],false,true),hand(root,body,1,[.42,.48,0],false,true));feet=legs(root,ceramic,pose,body,true);
 }else if(face===2){
  const stripe=mat('#ce795c',.52),scarf=mat('#663675',.65);orb(torso,body,[0,.25,0],[.34,.43,.28]);orb(torso,CREAM(),[0,.20,.25],[.21,.31,.065]);orb(head,body,[0,.99,0],[.54,.46,.34]);catEar(head,body,-1);catEar(head,body,1);
  for(const side of [-1,1]){orb(head,body,[side*.38,.82,.16],[.25,.18,.24]);orb(head,CREAM(),[side*.16,.78,.292],[.235,.14,.09]);for(let k=0;k<3;k++)tube(head,CREAM(),[[side*.25,.79-k*.045,.355],[side*.47,.83-k*.065,.34],[side*.64,.83-k*.077,.29]],.004)}
  addEye([-.20,1.045,.302],.94);addEye([.20,1.045,.302],.94);eyebrows.push(...brows(head,[0,1.265,.28],.93,mat('#9a513f',.58)));orb(head,PINK(),[0,.845,.397],[.048,.029,.026]);mouth=mouths(head,[0,.725,.367],.075,mat('#8b5550',.6));
  for(const [x,y,r]of [[0,1.36,0],[-.14,1.34,-.16],[.14,1.34,.16]]){const s=orb(head,stripe,[x,y,.20],[.035,.095,.022]);s.rotation.z=r}accent=group(head,'Forelock',[0,1.42,-.03]);for(let k=0;k<3;k++)tapered(accent,body,[[k*.04-.04,0,0],[.04+k*.02,.05,.05],[.10+k*.01,-.01,.13]],[.07,.05,.003]);
  const band=new T.Shape();band.moveTo(-.28,.02);band.quadraticCurveTo(0,-.32,.28,.02);band.quadraticCurveTo(0,-.09,-.28,.02);const scarfGeo=geometry('scarf',()=>new T.ExtrudeGeometry(band,{depth:.025,bevelEnabled:true,bevelSize:.02,bevelThickness:.02,bevelSegments:3,steps:1}));mesh(torso,scarfGeo,scarf,[0,.63,.235]);orb(torso,mat('#e1b258',.3,.45),[0,.51,.297],[.048,.043,.021]);
  tail=group(root,'Tail',[.05,.07,-.19]);tapered(tail,body,[[0,0,0],[.38,-.08,-.06],[.60,.17,-.015],[.57,.42,.055],[.40,.43,.11]],[.10,.115,.105,.12,.055]);orb(tail,CREAM(),[.40,.43,.11],[.12,.115,.11]);arms.push(hand(root,body,-1,[-.33,.43,.02],true),hand(root,body,1,[.33,.43,.02],true));feet=legs(root,body,pose,CREAM());
 }else if(face===3){
  const spot=mat('#31a898',.63),horn=mat('#f0ddb0',.38),gold=mat('#e2b95e',.28,.42),leather=mat('#774765',.6);orb(torso,body,[0,.27,0],[.48,.54,.34]);orb(head,body,[0,.76,0],[.49,.62,.35]);
  for(const side of [-1,1]){tapered(head,horn,[[side*.33,1.16,-.01],[side*.47,1.33,-.02],[side*.48,1.51,-.025],[side*.35,1.61,-.02]],[.135,.115,.085,.008]);tapered(head,gold,[[side*.48,1.48,-.025],[side*.47,1.55,-.025],[side*.35,1.61,-.02]],[.085,.065,.004]);for(let k=0;k<3;k++){const seam=torus(head,mat('#cab88f',.42),[side*(.4+k*.027),1.23+k*.073,-.018],.113-k*.012,.006);seam.rotation.x=Math.PI/2;seam.rotation.z=side*.25}}
  const big=addEye([0,.94,.31],1.65);for(const n of big.children){const c=n.material?.color?.getHexString();if(c==='8a47cb')n.material=mat('#c5872c',.28);if(c==='51217c')n.material=mat('#73410e',.28)}eyebrows.push(...brows(head,[0,1.28,.265],1.13,mat('#218d82',.51)));mouth=mouths(head,[0,.53,.35],.18);for(const side of [-1,1]){orb(mouth.happy,CREAM(),[side*.10,.013,.041],[.039,.061,.025]);orb(head,CREAM(),[side*.12,.52,.387],[.035,.05,.026]);}
  accent=group(head,'TealTuft',[0,1.35,-.08]);for(let k=0;k<3;k++)tapered(accent,mat('#268c85',.43),[[k*.07-.08,0,0],[k*.07-.1,.16,0],[k*.04-.03,.19,.13]],[.07,.06,.004]);
  for(let i=0;i<14;i++){const side=i%2?1:-1,x=side*(.32+(i%3)*.035),y=.20+(i%6)*.125,z=.25;orb(i%2?head:torso,spot,[x,y,z],[.021+(i%2)*.013,.018,.012])}
  const strap=tube(torso,leather,[[-.39,.03,.27],[-.12,.23,.345],[.16,.43,.32],[.42,.64,.15]],.045);tube(torso,gold,[[-.38,.052,.29],[-.1,.25,.369],[.18,.45,.344],[.40,.64,.19]],.005);const buckle=box(torso,gold,[.22,.46,.352],[.12,.11,.024],.018);buckle.rotation.z=-.58;box(torso,leather,[.22,.46,.37],[.073,.063,.015],.012).rotation.z=-.58;box(torso,leather,[-.35,.03,.28],[.28,.31,.13],.07);tube(torso,gold,[[-.45,.09,.35],[-.35,.02,.36],[-.25,.09,.35]],.007);
  arms.push(hand(root,body,-1,[-.46,.49,.01]),hand(root,body,1,[.46,.49,.01]));for(const arm of arms)for(let k=0;k<2;k++)orb(arm,CREAM(),[(k-.5)*.095,-.34,.153],[.034,.043,.025]);feet=legs(root,body,pose);for(const leg of feet){const knee=leg.getObjectByName('Knee');for(let k=0;k<3;k++)orb(knee,CREAM(),[(k-1)*.10,-.28,.242],[.039,.052,.025])}
 }else if(face===4){
  mesh(head,puffyStar(),body,[0,.66,0]);addEye([-.19,.76,.236],.86);addEye([.19,.76,.236],.86);eyebrows.push(...brows(head,[0,.995,.22],.84,mat('#956032',.5)));mouth=mouths(head,[0,.52,.284],.106,mat('#885235',.5));for(const side of [-1,1])orb(head,mat('#ed9b61',.49),[side*.325,.58,.225],[.066,.041,.02]);
  accent=group(head,'PurpleTuft',[0,1.28,0]);tapered(accent,mat('#9c5dd5',.29),[[0,0,0],[.085,.03,.015],[.13,.15,.015],[.04,.27,.005],[-.07,.29,0]],[.09,.10,.085,.055,.003]);tapered(accent,mat('#bc84ed',.3),[[.03,.025,.065],[.075,.10,.072],[.04,.20,.053]],[.012,.012,.001]);arms.push(hand(root,body,-1,[-.35,.59,.015]),hand(root,body,1,[.35,.59,.015]));feet=[-1,1].map(side=>{const foot=group(root,side<0?'LegL':'LegR',[side*.29,.145,.015]);orb(foot,body,[0,-.01,0],[.115,.12,.12]);orb(foot,body,[0,-.085,.055],[.175,.115,.205]);return remember(foot)});
 }else{
  const glass=body.clone();glass.userData.instanceOwned=true;glass.roughness=.16;glass.clearcoat=.95;glass.clearcoatRoughness=.16;glass.sheen=.25;glass.sheenColor=new T.Color('#d4f8ff');glass.emissive=new T.Color('#143746');glass.emissiveIntensity=.16;
  orb(head,glass,[0,.83,-.015],[.59,.51,.39]);for(let i=0;i<9;i++){const a=i*Math.PI*2/9;orb(head,glass,[Math.cos(a)*.48,.46,Math.sin(a)*.28],[.16,.105,.15]);}const fringe=mat('#b1edff',.24,0,{emissive:'#81cbe2',emissiveIntensity:.09});for(let i=0;i<7;i++)orb(head,fringe,[(i-3)*.148,.43,.145],[.096,.025,.1]);
  addEye([-.20,.85,.344],.92);addEye([.20,.85,.344],.92);eyebrows.push(...brows(head,[0,1.09,.305],.91,mat('#347db9',.4)));mouth=mouths(head,[0,.61,.38],.10,mat('#2d6e8a',.4));for(const side of [-1,1])orb(head,mat('#e4a7cf',.45),[side*.32,.67,.31],[.07,.036,.019]);orb(head,glass,[0,.68,.392],[.024,.018,.018]);
  const spread=[[-.36,.10],[-.23,.25],[-.08,.31],[.09,.29],[.23,.22],[.37,.08]];for(let i=0;i<6;i++){const [x,z]=spread[i],side=i<3?-1:1,n=group(root,'Tentacle'+i,[x,.47,z-.12]);tapered(n,glass,[[0,0,0],[side*.035,-.23,.02],[side*.11,-.49,.06],[side*.29,-.55,.1],[side*.34,-.40,.15]],[.065,.072,.078,.085,.07]);orb(n,glass,[side*.34,-.40,.15],[.086,.095,.085]);arms.push(remember(n));}
  accent=group(head,'BellGlint',[0,1.13,.30]);for(let k=0;k<5;k++)orb(accent,mat('#b7f4ff',.18,0,{emissive:'#b7efff',emissiveIntensity:.35}),[(k-2)*.08,Math.sin(k)*.05,-Math.abs(k-2)*.03],[.008,.013,.004]);
 }
 if(face===0)for(const leg of feet)leg.position.y+=.18;for(const leg of feet){const knee=leg.getObjectByName('Knee');remember(leg);if(!knee)continue;knee.updateMatrix();for(const part of [...knee.children])if(part.isMesh){part.applyMatrix4(knee.matrix);leg.add(part)}}if(face!==1)eyes.forEach(n=>batchColours(n,{roughness:.27,clearcoat:.38}));if(face!==5)arms.forEach(n=>batchColours(n,{roughness:face===1?.31:.48,metalness:face===1?.12:0}));remember(head);remember(torso);if(tail)remember(tail);if(accent)remember(accent);root.userData.rig={face,pose,head,body:face===0||face===4?null:torso,eyes,lids,arms,legs:feet,brows:eyebrows,mouth,tail,accent,headRest:0};root.userData.pose=pose;addAccessory(root,accessory);bakeRigid(root);return root;
}
export const createSeatedCharacter=(face,colour,accessory='none')=>createCharacter(face,colour,'seated',accessory);

function addAccessory(root,id){const rig=root.userData.rig,head=rig.head;if(!['glasses','bow','cap','crown'].includes(id))return;head.updateMatrixWorld(true);const accessory=group(head,'Accessory'),gold=mat('#f2bd50',.28,.5),purple=mat('#7250bb',.48);if(id==='glasses'){const points=rig.eyes.map(eye=>head.worldToLocal(eye.getWorldPosition(new T.Vector3())));for(const [i,p]of points.entries()){const scale=rig.eyes[i].userData.eyeScale||1;torus(accessory,mat('#382c4c',.3),[p.x,p.y,p.z+.18],.175*scale,.018).scale.y=1.12}if(points.length===2)tube(accessory,gold,[[points[0].x+.14,points[0].y,points[0].z+.18],[0,(points[0].y+points[1].y)/2+.04,Math.max(points[0].z,points[1].z)+.18],[points[1].x-.14,points[1].y,points[1].z+.18]],.016)}else if(id==='bow'){const center=new T.Box3().setFromObject(head).getCenter(new T.Vector3()),p=head.worldToLocal(center);p.y-=.38;p.z=.39;for(const side of [-1,1])orb(accessory,purple,[p.x+side*.085,p.y,p.z],[.10,.065,.035]);orb(accessory,gold,[p.x,p.y,p.z+.02],[.04,.04,.028])}else{const bounds=new T.Box3().setFromObject(head),point=head.worldToLocal(new T.Vector3(0,bounds.max.y,0));if(rig.accent&&(rig.face===1||rig.face===4))rig.accent.visible=false;if(id==='cap'){orb(accessory,purple,[0,point.y-.04,0],[.34,.17,.30]);box(accessory,purple,[0,point.y-.09,.22],[.65,.045,.30],.05)}else{torus(accessory,gold,[0,point.y-.09,0],.27,.045).rotation.x=Math.PI/2;for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const shape=geometry('crown-spike',()=>new T.ConeGeometry(.065,.23,4));mesh(accessory,shape,gold,[Math.cos(a)*.25,point.y+.015,Math.sin(a)*.25]);orb(accessory,mat('#db6eab',.22),[Math.cos(a)*.25,point.y+.14,Math.sin(a)*.25],[.035,.035,.035])}}}root.userData.accessory=id;}
