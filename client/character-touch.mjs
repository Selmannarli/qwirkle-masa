// Readable silhouette gestures, always applied after restoring the authored rig.
// No scaling or detached clones; root tilts pivot around the planted feet.
export const TOUCH_DURATIONS={pat:1450,tickle:2100,curious:1800};
export function applyCharacterTouch(root,{x=0,y=0,strength=0,kind='',elapsed=0,reduced=false}={}){
 const rig=root.userData.rig,clamp=v=>Math.max(-1,Math.min(1,v)),face=rig.face;
 x=clamp(x)*strength;y=clamp(y)*strength;
 rig.head.rotation.y+=x*.22;rig.head.rotation.x-=y*.11;
 for(const pupil of rig.pupils){pupil.position.x+=x*.038;pupil.position.y+=y*.028}
 if(reduced||!kind)return;
 const duration=(TOUCH_DURATIONS[kind]||1450)/1000,t=Math.max(0,Math.min(1,elapsed/duration)),a=Math.sin(Math.PI*t)**2;if(t>=1)return;
 const side=Math.abs(x)>.15?Math.sign(x):(face%2?1:-1);
 if(kind==='tickle'){
  const laugh=Math.sin(t*Math.PI*8)*a;
  rig.facial.expression('happy');rig.facial.brow('happy',a);
  root.rotation.z+=laugh*.075;root.rotation.x+=a*.055;
  rig.head.rotation.z+=laugh*.13;rig.head.rotation.x+=a*.12;
  rig.arms.forEach((arm,i)=>{arm.rotation.z+=(i%2?1:-1)*a*(face===5?.55:.78);arm.rotation.x-=a*.48});
  rig.forearms.forEach((arm,i)=>{arm.rotation.x-=a*.55;arm.rotation.z+=(i%2?1:-1)*a*.16});
  rig.eyes.forEach(eye=>eye.scale.y*=1-a*.55);
  if(face===2)rig.ears.forEach((ear,i)=>ear.rotation.z+=(i?1:-1)*a*.24);
  if(face===1)rig.head.rotation.y+=Math.sin(t*Math.PI*4)*a*.12;
 }else if(kind==='curious'){
  root.rotation.x+=a*.09;rig.head.rotation.z+=a*(face===1?-.23:.23);rig.head.rotation.y+=side*a*.14;rig.facial.brow('happy',a*.9);
  rig.arms.forEach((arm,i)=>{arm.rotation.z+=(i%2?1:-1)*a*.30;arm.rotation.x-=a*.28});
  if(face===5)rig.arms.forEach((arm,i)=>arm.rotation.z+=(i<3?1:-1)*a*.25);
  if(face===2)rig.ears.forEach((ear,i)=>ear.rotation.z+=(i?1:-1)*a*.18);
 }else{
  root.rotation.z+=side*a*.055;rig.head.rotation.x-=a*.15;rig.head.rotation.z+=side*a*.24;
  rig.facial.expression('happy');rig.facial.brow('happy',a*.8);
  rig.eyes.forEach(eye=>eye.scale.y*=1-a*.35);
  rig.arms.forEach((arm,i)=>{arm.rotation.z+=(i%2?1:-1)*a*(face===5?.35:.45);arm.rotation.x-=a*.20});
  if(face===2)rig.ears.forEach((ear,i)=>ear.rotation.z+=(i?1:-1)*a*.30);
  if(face===0&&rig.accent)rig.accent.rotation.z+=a*.22;
  if(face===1&&rig.accent)rig.accent.rotation.z+=a*.30;
  if(face===3)rig.head.rotation.y+=a*.10;
 }
}
