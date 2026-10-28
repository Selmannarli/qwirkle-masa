import {HERO_TIMING} from '../public/character-style.mjs';
// Shared articulated animation. Every sample starts from the authored rest pose,
// so a portrait, a seated player and a paused/seeked preview have identical motion.
export const CHARACTER_DURATIONS=Object.freeze({knock:1.8,hello:1.85,celebrate:2.65,sad:2.15,win:2.8,lose:2.4,draw:1.8,angry:1.8,surprise:1.5,impact:HERO_TIMING.duration/1000});
const rests=new WeakMap();
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*x*(x*(x*6-15)+10)};
const rise=(t,a,b)=>smooth((t-a)/(b-a));
const envelope=(t,a,b,c,d)=>rise(t,a,b)*(1-rise(t,c,d));
const vec=n=>[n?.x||0,n?.y||0,n?.z||0];
const values=(a,v)=>{if(a?.set)a.set(...v);else if(a){a.x=v[0];a.y=v[1];a.z=v[2]}};
const nodes=rig=>[rig.facial?.mesh,...(rig.facial?.details||[]),...(rig.facial?.brows||[]).map(b=>b.children[0]),rig.head,rig.body,...(rig.eyes||[]),...(rig.pupils||[]),...(rig.lids||[]),...(rig.arms||[]),...(rig.forearms||[]),...(rig.hands||[]),...(rig.ears||[]),...(rig.legs||[]),...(rig.knees||[]),...(rig.brows||[]),rig.tail,rig.accent,rig.hips,...Object.values(rig.mouth||{})].filter(Boolean);
function remember(n){return {position:vec(n.position),rotation:vec(n.rotation),scale:n.scale?vec(n.scale):[1,1,1],visible:n.visible!==false}}
export function captureRest(root){
 const rig=root?.userData?.rig;if(!rig)return null;
 const state={rig,root:remember(root),nodes:new Map(nodes(rig).map(n=>[n,remember(n)]))};rests.set(root,state);return state;
}
function stateFor(root){const saved=rests.get(root);return saved?.rig===root?.userData?.rig?saved:captureRest(root)}
export function captureCharacterPose(root){
 const state=stateFor(root);return state?[root,...state.nodes.keys()].map(n=>({node:n,position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone(),morph:n.morphTargetInfluences?.slice()})):[];
}
export function blendCharacterPose(previous,amount){
 const weight=smooth(amount);for(const {node,position,quaternion,scale,morph}of previous){node.position.lerpVectors(position,node.position,weight);const target=node.quaternion.clone();node.quaternion.slerpQuaternions(quaternion,target,weight);node.scale.lerpVectors(scale,node.scale,weight);if(morph)for(let i=0;i<morph.length;i++)node.morphTargetInfluences[i]=morph[i]+(node.morphTargetInfluences[i]-morph[i])*weight}
}
export function resetCharacter(root){
 const state=stateFor(root);if(!state)return;
 const restore=(n,r)=>{values(n.position,r.position);values(n.rotation,r.rotation);values(n.scale,r.scale);n.visible=r.visible};
 restore(root,state.root);for(const [n,rest]of state.nodes)restore(n,rest);
 state.rig.facial?.reset();setMouth(state.rig,'neutral');for(const lid of state.rig.lids||[])lid.visible=false;
}
function setMouth(rig,expression){
 rig.facial?.expression(expression);const mouth=rig.mouth||rig.mouths;if(!mouth)return;
 for(const key of ['neutral','happy','sad'])if(mouth[key])mouth[key].visible=key===expression;
}
function rotate(n,x=0,y=0,z=0){if(!n?.rotation)return;n.rotation.x+=x;n.rotation.y+=y;n.rotation.z+=z}
function move(n,x=0,y=0,z=0){if(!n?.position)return;n.position.x+=x;n.position.y+=y;n.position.z+=z}
function stretch(n,x=1,y=1,z=1){if(!n?.scale)return;n.scale.x*=x;n.scale.y*=y;n.scale.z*=z}
function brow(rig,emotion,strength=1){
 if(rig.facial){rig.facial.brow(emotion,strength);return}
 (rig.brows||[]).forEach((n,i)=>{
  const side=i%2===0?-1:1;
  if(emotion==='sad'){rotate(n,0,0,-side*.18*strength);move(n,0,.008*strength,0)}
  else if(emotion==='angry'){rotate(n,0,0,side*.30*strength);move(n,0,-.014*strength,0)}
  else if(emotion==='happy'){rotate(n,0,0,side*.035*strength);move(n,0,.025*strength,0)}
 });
}
function blink(rig,amount,eyeIndex=null){
 const close=clamp(amount);(rig.eyes||[]).forEach((eye,i)=>{
  if(eyeIndex!==null&&i!==eyeIndex)return;
  const lid=rig.lids?.[i];
  if(lid){eye.visible=close<.82;lid.visible=close>=.82;stretch(eye,1,Math.max(.045,1-close*.955),1)}
  else stretch(eye,1+close*.025,Math.max(.07,1-close*.93),1);
 });
}
function blinkAt(t,start,hold=.026,close=.062,open=.11){
 return rise(t,start,start+close)*(1-rise(t,start+close+hold,start+close+hold+open));
}
function key(t,points){
 if(t<=points[0][0])return points[0][1];
 for(let i=1;i<points.length;i++){const [end,v]=points[i],[start,p]=points[i-1];if(t<=end)return p+(v-p)*smooth((t-start)/(end-start))}
 return points.at(-1)[1];
}
function jump(t,start,duration,height){const p=(t-start)/duration;return p>0&&p<1?4*height*p*(1-p):0}
function arm(rig,index,lift,forward=0){const n=rig.arms?.[index];if(!n)return;const sign=index%2===0?-1:1;rotate(n,forward,0,sign*lift)}
function bend(rig,index,elbow=0,wrist=0){
 const fore=rig.forearms?.[index],hand=rig.hands?.[index];
 rotate(fore,-elbow,0,0);rotate(hand,0,wrist*.3,(index?1:-1)*wrist);
}
function idle(rig,time,face){
 const period=[7.1,8.7,7.8,6.9,8.1,8.4][face],phase=((time+face*.73)%period+period)%period;
 let close=blinkAt(phase,1.27,face===2?.075:.026,face===2?.095:.062,face===2?.16:.11);
 if(face===3)close=Math.max(close,blinkAt(phase,1.58));
 blink(rig,close);
 const look=envelope(phase,2.7,3.25,4.25,4.9),breath=(Math.sin(time*1.45+face*.6)+1)*.5;
 rotate(rig.head,-look*.018,(face%2?1:-1)*look*.065,0);
 for(const eye of rig.eyes||[])for(const pupil of eye.children.filter(n=>n.name==='Pupil')){pupil.position.x=look*(face%2?-.01:.01);pupil.position.y=0}
 if(face===0){
  stretch(rig.body,1+breath*.004,1+breath*.009,1+breath*.003);
  rotate(rig.accent,0,0,Math.sin(time*1.1)*.018);arm(rig,0,breath*.012);arm(rig,1,breath*.012);
 }else if(face===1){
  const scan=envelope(phase,3.0,3.45,4.2,4.8);rotate(rig.head,-scan*.025,scan*.10,0);
  rotate(rig.accent,0,0,scan*.045);bend(rig,0,.025+breath*.012);bend(rig,1,.025+breath*.012);
 }else if(face===2){
  const flick=envelope(phase,4.8,4.95,5.0,5.25);rotate(rig.ears?.[0],0,0,-flick*.12);rotate(rig.ears?.[1],0,0,flick*.06);
  rotate(rig.tail,0,Math.sin(time*.8)*.13,0);stretch(rig.body,1,1+breath*.008,1);
 }else if(face===3){
  const curious=envelope(phase,3,3.55,4.4,5.1);rotate(rig.head,-curious*.025,curious*.06,-curious*.035);
  stretch(rig.body,1+breath*.003,1+breath*.008,1);rotate(rig.accent,0,0,Math.sin(time*1.2)*.025);
 }else if(face===4){
  const proud=envelope(phase,3,3.7,4.2,5);rotate(rig.head,-proud*.035,proud*.05,proud*.035);
  bend(rig,0,proud*.18);bend(rig,1,proud*.18);stretch(rig.body,1,1+breath*.007,1);
 }else{
  // The bell stays attached to the tentacles. Only their tips breathe in sequence.
  stretch(rig.head,1+breath*.003,1+breath*.006,1);
  (rig.arms||[]).forEach((n,i)=>{rotate(n,Math.sin(time*.85-i*.55)*.018,0,Math.sin(time*.9-i*.7)*.022);rotate(rig.forearms?.[i],0,0,Math.sin(time*1.1-i*.6)*.06)});
 }
}
function greet(rig,t,face){
 const engaged=envelope(t,.02,.30,1.30,1.85),lift=key(t,[[0,0],[.14,-.07],[.49,1.24],[1.18,1.24],[1.80,0],[1.85,0]]);
 const wave=key(t,[[0,0],[.42,0],[.64,-.22],[.85,.21],[1.06,-.17],[1.25,.10],[1.60,0],[1.85,0]]);
 blink(rig,blinkAt(t,.16));brow(rig,'happy',engaged*.65);
 rotate(rig.head,key(t,[[0,0],[.22,.035],[.57,-.055],[1.22,-.025],[1.85,0]]),engaged*.04,0);
 if(face===0){
  arm(rig,1,lift,-engaged*.12);bend(rig,1,engaged*.65,wave);arm(rig,0,engaged*.10);rotate(rig.head,0,0,-engaged*.06);
  rotate(rig.accent,0,0,-wave*.13);
 }else if(face===1){
  arm(rig,1,lift*.88,-engaged*.15);bend(rig,1,engaged*.85,wave*.72);
  rotate(rig.head,-engaged*.055,engaged*.055,-engaged*.045);rotate(rig.accent,0,0,wave*.22);
 }else if(face===2){
  // A raised paw and a deliberate wink; the paw has an elbow instead of stretching.
  arm(rig,1,lift*.75,-engaged*.25);bend(rig,1,engaged*1.10,wave*.55);
  rotate(rig.head,-engaged*.035,engaged*.035,engaged*.08);blink(rig,blinkAt(t,.83,.09,.06,.16),0);
  rotate(rig.tail,0,Math.sin(t*4)*engaged*.23,0);rotate(rig.ears?.[1],0,0,-engaged*.08);
 }else if(face===3){
  arm(rig,1,lift*.88,-engaged*.18);bend(rig,1,engaged*.75,wave*.5);
  rotate(rig.head,-engaged*.055,-engaged*.05,-engaged*.045);arm(rig,0,engaged*.12);
  rotate(rig.accent,0,0,wave*.10);
 }else if(face===4){
  arm(rig,0,lift*.82,-engaged*.14);arm(rig,1,lift,-engaged*.14);
  bend(rig,0,engaged*.6,-wave*.8);bend(rig,1,engaged*.6,wave);
  rotate(rig.head,-engaged*.03,0,engaged*.055);
 }else{
  (rig.arms||[]).forEach((n,i)=>{const cue=envelope(t,.04+i*.045,.36+i*.045,1.06+i*.035,1.62+i*.035);rotate(n,-cue*.24,0,(i<3?-1:1)*cue*(.29+Math.sin(t*5-i*.75)*.055));rotate(rig.forearms?.[i],0,0,(i<3?-1:1)*cue*.26)});
  rotate(rig.head,-engaged*.035,engaged*.06,-engaged*.035);
 }
}
function celebrate(rig,root,t,face,duration){
 const anticipate=envelope(t,.01,.15,.20,.40),raise=envelope(t,.17,.58,duration-.68,duration-.03);
 const pulse=jump(t,.71,.38,.10)+jump(t,1.3,.38,.08);
 rotate(rig.head,anticipate*.055-raise*.09,Math.sin(t*3)*raise*.02,Math.sin(t*4)*raise*.025);
 brow(rig,'happy',raise);blink(rig,Math.max(blinkAt(t,.18),blinkAt(t,.83,.15,.08,.15)));
 if(face!==1)stretch(rig.body,1+anticipate*.012,1-anticipate*.022+raise*.01,1+anticipate*.007);
 if(rig.pose!=='seated')move(root,0,jump(t,.43,.42,.05)+jump(t,1.08,.37,.03),0);
 if(face!==5){
  const strength=[1,.92,.88,.96,1][face];
  arm(rig,0,(raise*1.52+pulse)*strength,-raise*.12);arm(rig,1,(raise*1.65+pulse*.8)*strength,-raise*.15);
  bend(rig,0,raise*.47,raise*.08);bend(rig,1,raise*.60,-raise*.08);
 }else (rig.arms||[]).forEach((n,i)=>{rotate(n,-raise*.20,0,(i<3?-1:1)*raise*(.38+Math.sin(t*6-i*.65)*.045));rotate(rig.forearms?.[i],0,0,(i<3?-1:1)*raise*.25)});
 rotate(rig.tail,0,Math.sin(t*5)*raise*.23,0);rotate(rig.accent,0,0,Math.sin(t*6)*raise*.045);
 (rig.ears||[]).forEach((n,i)=>rotate(n,0,0,(i?1:-1)*raise*.035));
}
function disappointment(rig,t,face,duration){
 const settle=envelope(t,.03,.50,duration-.58,duration-.02);
 rotate(rig.head,settle*.105,-settle*.045,settle*.035);brow(rig,'sad',settle);
 blink(rig,blinkAt(t,.56,.10,.09,.17));
 if(face!==1)stretch(rig.body,1+settle*.004,1-settle*.009,1);
 arm(rig,0,-settle*.035,settle*.025);arm(rig,1,-settle*.035,settle*.025);
 bend(rig,0,settle*.09);bend(rig,1,settle*.09);
 rotate(rig.tail,0,-settle*.15,-settle*.04);rotate(rig.accent,0,0,settle*.06);
 (rig.ears||[]).forEach((n,i)=>rotate(n,0,0,(i?-1:1)*settle*.10));
 if(face===5)(rig.arms||[]).forEach((n,i)=>rotate(n,settle*.02,0,(i<3?1:-1)*settle*.045));
}

/** Returns true while the supplied gesture needs another sample. Units are seconds. */
export function animateCharacter(root,{time=0,face=root?.userData?.rig?.face??root?.userData?.face??0,mood='idle',elapsed=0,reduced=false}={}){
 const state=stateFor(root);if(!state)return false;resetCharacter(root);const rig=state.rig;
 face=Number.isInteger(face)&&face>=0&&face<6?face:0;time=Number.isFinite(time)?Math.max(0,time):0;elapsed=Number.isFinite(elapsed)?Math.max(0,elapsed):0;
 if(mood==='idle'||!CHARACTER_DURATIONS[mood]){if(!reduced)idle(rig,time,face);return !reduced}
 const emotion=mood==='sad'||mood==='lose'?'sad':(['hello','knock'].includes(mood))?'neutral':'happy',duration=CHARACTER_DURATIONS[mood];
 setMouth(rig,emotion);
 if(reduced){brow(rig,emotion,.5);return false}
 if(elapsed>=duration){brow(rig,emotion,.45);return false}

 if(mood==='angry'){const a=envelope(elapsed,0,.25,1.1,1.8);setMouth(rig,'sad');brow(rig,'angry',a);rotate(rig.head,.08*a,Math.sin(elapsed*15)*.035*a,0);arm(rig,0,.25*a);arm(rig,1,.25*a);bend(rig,0,a*.75);bend(rig,1,a*.75);if(rig.pose!=='seated')move(root,0,jump(elapsed,.3,.25,.025),0)}
 else if(mood==='draw'){const a=envelope(elapsed,.03,.35,1.15,1.78);brow(rig,'happy',a*.6);rotate(rig.head,-a*.035,a*.04,0);arm(rig,0,a*.25);arm(rig,1,a*.25);bend(rig,0,a*.25);bend(rig,1,a*.25)}
 else if(mood==='surprise'){const a=envelope(elapsed,0,.18,.8,1.5);brow(rig,'happy',a);rotate(rig.head,-.1*a,0,0);rig.facial?.expression('surprise');arm(rig,0,.65*a);arm(rig,1,.65*a);bend(rig,0,a*.35);bend(rig,1,a*.35)}
 else if(mood==='impact'){
  const t=elapsed,turn=key(t,[[0,0],[.65,0],[1.30,Math.PI],[2.35,Math.PI],[3.1,0],[4.8,0]]),contact=envelope(t,1.42,1.78,1.93,2.30),cheer=envelope(t,2.45,2.95,3.95,4.50),anticip=envelope(t,.8,1.10,1.30,1.58);
  brow(rig,'happy',.75);blink(rig,Math.max(blinkAt(t,.4),blinkAt(t,3.25,.12)));rotate(rig.head,-cheer*.10,contact*.38,cheer*Math.sin(t*5)*.035);arm(rig,0,cheer*1.60+anticip*.25,-cheer*.20);arm(rig,1,cheer*1.72+anticip*.25,-cheer*.20);bend(rig,0,cheer*.55+anticip*.25,cheer*.08);bend(rig,1,cheer*.60+anticip*.25,-cheer*.08);
  if(rig.pose!=='seated'){rotate(root,-contact*.35,turn,0);move(root,0,-anticip*.045+contact*.025+jump(t,2.65,.65,.09)+jump(t,3.5,.55,.06),contact*.32);if(face!==1)stretch(rig.body,1+contact*.025,1-contact*.025,1+contact*.035);const softness=rig.rear?.softness??.025;stretch(rig.hips,1+contact*softness,1-contact*softness*.5,1+contact*softness);move(rig.hips,0,0,-contact*softness*.25);(rig.legs||[]).forEach((n,i)=>rotate(n,contact*.12,0,(i?1:-1)*contact*.055))}
 }
 else if(mood==='knock'){
  const t=elapsed,reach=envelope(t,.02,.30,1.34,1.78);
  const contact=[.42,.76,1.10].reduce((a,at)=>a+envelope(t,at-.09,at,at+.025,at+.14),0);
  arm(rig,1,reach*2.35,-reach*.38-contact*.34);
  bend(rig,1,reach*.70-contact*.38,-contact*.10);
  rotate(rig.head,-reach*.035,reach*.065,contact*-.016);brow(rig,'happy',reach*.35);blink(rig,blinkAt(t,1.42));
 }
 else if(mood==='hello')greet(rig,elapsed,face);
 else if(emotion==='happy')celebrate(rig,root,elapsed,face,duration);
 else disappointment(rig,elapsed,face,duration);
 return true;
}
