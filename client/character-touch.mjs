// Small, bounded additive poses. The portrait renderer restores the rig first;
// these offsets never accumulate, scale the actor, or replace its model.
export function applyCharacterTouch(root,{x=0,y=0,strength=0,kind='',elapsed=0,reduced=false}={}){
 const rig=root.userData.rig,clamp=v=>Math.max(-1,Math.min(1,v)),face=rig.face;
 x=clamp(x)*strength;y=clamp(y)*strength;
 rig.head.rotation.y+=x*.11;rig.head.rotation.x-=y*.055;
 for(const pupil of rig.pupils){pupil.position.x+=x*.025;pupil.position.y+=y*.018}
 if(reduced||!kind)return;
 const duration=kind==='tickle'?1.65:kind==='curious'?1.4:1.15,t=Math.max(0,Math.min(1,elapsed/duration)),a=Math.sin(Math.PI*t)**2;if(t>=1)return;
 if(kind==='tickle'){
  rig.facial.expression('happy');rig.facial.brow('happy',a*.65);
  rig.head.rotation.z+=Math.sin(t*Math.PI*6)*a*.035;
  rig.arms.forEach((arm,i)=>{arm.rotation.z+=(i%2?1:-1)*a*(face===5?.18:.23);arm.rotation.x-=a*.13});
  if(face===2)rig.ears.forEach((ear,i)=>ear.rotation.z+=(i?1:-1)*a*.10);
  if(face===1)rig.head.rotation.y+=Math.sin(t*Math.PI*4)*a*.035;
 }else if(kind==='curious'){
  rig.head.rotation.z+=a*(face===1?-.09:.085);rig.facial.brow('happy',a*.5);
  if(face===5)rig.arms.forEach((arm,i)=>arm.rotation.z+=(i<3?1:-1)*a*.13);
 }else{
  rig.head.rotation.x-=a*.075;rig.head.rotation.z+=a*x*.06;
  rig.facial.expression('happy');rig.facial.brow('happy',a*.4);
  if(face===2)rig.ears.forEach((ear,i)=>ear.rotation.z+=(i?1:-1)*a*.16);
  if(face===4)rig.arms.forEach((arm,i)=>arm.rotation.z+=(i?1:-1)*a*.11);
  if(face===0&&rig.accent)rig.accent.rotation.z+=a*.10;
  if(face===1&&rig.accent)rig.accent.rotation.z+=a*.12;
  if(face===3)rig.head.rotation.y+=a*.06;
 }
}
export const TOUCH_DURATIONS={pat:1150,tickle:1650,curious:1400};
