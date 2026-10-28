import * as T from 'three';

// Face markings are sampled onto the actual head/muzzle, including every morph
// target. They never translate or scale independently of the skin.
const cache=new Map();
const designs=[
 {name:'cloud-bean',at:[0,.523],width:.115,ink:'#51315f',brow:'#79529d',browY:1.005,browX:.195,browWidth:.078},
 {name:'robot-display',at:[0,.904],width:.125,ink:'#9dffe6',brow:'#9dffe6',browY:1.221,browX:.182,browWidth:.067},
 {name:'cat-muzzle',at:[0,.815],width:.102,ink:'#6f4245',brow:'#995a3c',browY:1.265,browX:.192,browWidth:.064},
 {name:'cyclops-grin',at:[0,.630],width:.158,ink:'#285e50',brow:'#277f6c',browY:1.29,browX:0,browWidth:.25},
 {name:'star-smirk',at:[.012,.613],width:.103,ink:'#95602a',brow:'#aa7831',browY:1.052,browX:.168,browWidth:.061},
 {name:'jelly-pucker',at:[0,.710],width:.061,ink:'#377f9e',brow:'#4c98b4',browY:1.142,browX:.18,browWidth:.067}
];
const clamp=x=>Math.max(0,Math.min(1,x));
function mouthShape(face,u,expression){
 const arch=1-u*u,smile=expression==='happy',sad=expression==='sad',surprise=expression==='surprise';
 if(surprise&&face!==2)return {top:.030*Math.sqrt(arch),bottom:-.070*Math.sqrt(arch)};
 if(face===0){const mid=(sad?.025:smile?-.035:-.021)*arch;return {top:mid+.004+ (smile?.012*arch:0),bottom:mid-.004-(smile?.038*arch:0)}}
 if(face===1){const step=Math.round(u*3)/3,mid=(sad?.034:smile?-.044:-.019)*(1-step*step);return {top:mid+.009,bottom:mid-.009}}
 if(face===2){const w=-.023*Math.sin(Math.abs(u)*Math.PI);const mid=sad?.014*arch:w;return {top:mid+.003,bottom:mid-.004-((smile||surprise)?.019*arch:0)}}
 if(face===3){const mid=(sad?.022:smile?-.025:-.017)*arch;return {top:mid+.006,bottom:mid-.007-(smile?.073*arch:0)}}
 if(face===4){const mid=(sad?.025:-.028)*arch+(!sad?.012*u:0);return {top:mid+.004,bottom:mid-.004-(smile?.014*arch:0)}}
 const mid=sad?.008:smile?-.009:0;return {top:mid+(smile?.023:.012)*Math.sqrt(arch),bottom:mid-(smile?.035:.020)*Math.sqrt(arch)};
}
function projector(surfaces){
 const ray=new T.Raycaster(),memo=new Map();
 for(const mesh of surfaces)mesh.updateWorldMatrix(true,false);
 return (x,y)=>{const key=x.toFixed(6)+':'+y.toFixed(6);if(memo.has(key))return memo.get(key);ray.set(new T.Vector3(x,y,3),new T.Vector3(0,0,-1));const hit=ray.intersectObjects(surfaces,false)[0];if(!hit)throw Error('Facial surface missing at '+key);const z=hit.point.z+.003;memo.set(key,z);return z};
}
function strip(makePoint,z,segments=24){
 const positions=[];for(let i=0;i<=segments;i++){const u=i/segments*2-1;for(const edge of [0,1]){const [x,y]=makePoint(u,edge);positions.push(x,y,z(x,y))}}return new T.Float32BufferAttribute(positions,3);
}
function morphGeometry(base,targets,z){
 const g=new T.BufferGeometry(),positions=strip(base,z),indices=[];g.setAttribute('position',positions);
 for(let i=0;i<positions.count/2-1;i++){const a=i*2;indices.push(a,a+1,a+2,a+2,a+1,a+3)}
 g.setIndex(indices);g.morphAttributes.position=targets.map(target=>strip(target,z));g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();return g;
}
function material(colour,led=false){return new T.MeshBasicMaterial({color:colour,toneMapped:false,side:T.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}
function faceMesh(parent,name,geometry,colour,led=false){
 const m=material(colour,led);m.userData.instanceOwned=true;const mesh=new T.Mesh(geometry,m);mesh.name=name;mesh.userData.surfaceFace=true;mesh.castShadow=false;mesh.receiveShadow=!led;parent.add(mesh);return mesh;
}
export function createFacialRig(head,face){
 const d=designs[face],surfaces=head.children.filter(n=>n.isMesh),z=projector(surfaces),key=face;
 let geometry=cache.get(key);
 if(!geometry){
  const mouthPoint=expression=>(u,edge)=>{const shape=mouthShape(face,u,expression);return [d.at[0]+u*d.width,d.at[1]+(edge?shape.bottom:shape.top)]};
  const mouth=morphGeometry(mouthPoint('neutral'),['happy','sad','surprise'].map(mouthPoint),z);
  const browSides=face===3?[0]:[-1,1];
  const brows=browSides.map(side=>{
   const point=expression=>(u,edge)=>{
    const arch=1-u*u,thickness=[.010,.007,.009,.014,.006,.010][face];
    let curve=[.014,0,.018,.031,.010,.020][face]*arch;
    if(face===2)curve=.020*(1-Math.abs(u))+.007*side*u;
    if(face===4)curve+=side*u*.007;
    if(expression==='happy')curve+=.009*arch;
    if(expression==='sad')curve+=side?(-side*u*.013):(.018*arch);
    if(expression==='angry')curve+=side?(side*u*(face===4?.004:.018)):(-.013*arch);
    return [side*d.browX+u*d.browWidth,d.browY+curve+(edge?-thickness:thickness)];
   };
   return morphGeometry(point('neutral'),['happy','sad','angry'].map(point),z);
  });
  const details=[];if(face===3)for(const side of [-1,1]){const tooth=open=>(u,edge)=>[side*.080+u*.022,.616-(edge&&open?.035*(1-Math.abs(u)*.25):0)];details.push(morphGeometry(tooth(false),[tooth(true),tooth(false),tooth(false)],(x,y)=>z(x,y)+.0007))}
  geometry={mouth,brows,details};cache.set(key,geometry);
 }
 const mouthRoot=new T.Group();mouthRoot.name='FaceMouth';head.add(mouthRoot);
 const mesh=faceMesh(mouthRoot,'Mouth-'+d.name,geometry.mouth,d.ink,face===1);
 const details=geometry.details.map(g=>faceMesh(mouthRoot,'CyclopsTooth',g,'#eee4ce'));
 const mouth={};for(const state of ['neutral','happy','sad']){const marker=new T.Group();marker.name='Mouth'+state;marker.visible=state==='neutral';mouthRoot.add(marker);mouth[state]=marker}
 const brows=geometry.brows.map((g,i)=>{const group=new T.Group();group.name='Brow'+i;group.userData.surfaceFace=true;head.add(group);faceMesh(group,'BrowSurface',g,d.brow,face===1);return group});
 const reset=()=>{for(const n of [mesh,...details])n.morphTargetInfluences.fill(0);for(const b of brows)b.children[0].morphTargetInfluences.fill(0)};
 const expression=name=>{for(const n of [mesh,...details]){n.morphTargetInfluences.fill(0);const i=['happy','sad','surprise'].indexOf(name);if(i>=0)n.morphTargetInfluences[i]=1}};
 const brow=(name,strength)=>{for(const b of brows){b.children[0].morphTargetInfluences.fill(0);const i=['happy','sad','angry'].indexOf(name);if(i>=0)b.children[0].morphTargetInfluences[i]=clamp(strength)}};
 return {name:d.name,mouth,brows,mesh,details,reset,expression,brow};
}
