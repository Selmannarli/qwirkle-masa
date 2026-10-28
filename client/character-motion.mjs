import {Vector3,Quaternion} from 'three';
import {FRAME_SCENES,frameLedge,sampleFrameScene} from '../public/frame-scenes.mjs';
import {HERO_TIMING} from '../public/character-style.mjs';
// Shared articulated animation. Every sample starts from the authored rest pose,
// so a portrait, a seated player and a paused/seeked preview have identical motion.
export const CHARACTER_DURATIONS=Object.freeze({...FRAME_SCENES,knock:1.8,hello:1.85,celebrate:2.65,sad:2.15,win:2.8,lose:2.4,angry:1.8,surprise:1.5,impact:HERO_TIMING.duration/1000});
const rests=new WeakMap();
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*x*(x*(x*6-15)+10)};
const rise=(t,a,b)=>smooth((t-a)/(b-a));
const envelope=(t,a,b,c,d)=>rise(t,a,b)*(1-rise(t,c,d));
const vec=n=>[n?.x||0,n?.y||0,n?.z||0];
const values=(a,v)=>{if(a?.set)a.set(...v);else if(a){a.x=v[0];a.y=v[1];a.z=v[2]}};
const nodes=rig=>[rig.head,rig.body,...(rig.eyes||[]),...(rig.lids||[]),...(rig.arms||[]),...(rig.legs||[]),...(rig.brows||[]),rig.tail,rig.accent,rig.hips,...Object.values(rig.mouth||{})].filter(Boolean);
function remember(n){return {position:vec(n.position),rotation:vec(n.rotation),scale:n.scale?vec(n.scale):[1,1,1],visible:n.visible!==false}}
export function captureRest(root){
 const rig=root?.userData?.rig;if(!rig)return null;
 const state={rig,root:remember(root),nodes:new Map(nodes(rig).map(n=>[n,remember(n)]))};rests.set(root,state);return state;
}
function stateFor(root){const saved=rests.get(root);return saved?.rig===root?.userData?.rig?saved:captureRest(root)}
export function resetCharacter(root){
 const state=stateFor(root);if(!state)return;
 const restore=(n,r)=>{values(n.position,r.position);values(n.rotation,r.rotation);values(n.scale,r.scale);n.visible=r.visible};
 restore(root,state.root);for(const [n,rest]of state.nodes)restore(n,rest);
 setMouth(state.rig,'neutral');for(const lid of state.rig.lids||[])lid.visible=false;
}
function setMouth(rig,expression){
 const mouth=rig.mouth||rig.mouths;if(!mouth)return;
 for(const key of ['neutral','happy','sad'])if(mouth[key])mouth[key].visible=key===expression;
}
function rotate(n,x=0,y=0,z=0){if(!n?.rotation)return;n.rotation.x+=x;n.rotation.y+=y;n.rotation.z+=z}
function move(n,x=0,y=0,z=0){if(!n?.position)return;n.position.x+=x;n.position.y+=y;n.position.z+=z}
function stretch(n,x=1,y=1,z=1){if(!n?.scale)return;n.scale.x*=x;n.scale.y*=y;n.scale.z*=z}
function brow(rig,emotion,strength=1){
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
  if(lid){eye.visible=close<.82;lid.visible=close>=.82;stretch(eye,1,1-close*.24,1)}
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
function idle(rig,time,face){
 const periods=[5.7,6.9,7.4,5.3,6.5,6.1],phase=((time+face*.73)%periods[face]+periods[face])%periods[face];
 let close=blinkAt(phase,1.27,face===2?.075:.026,face===2?.095:.062,face===2?.16:.11);
 if(face===3)close=Math.max(close,blinkAt(phase,1.58));
 blink(rig,close);const watch=envelope(phase,2.0,2.8,3.5,4.3);rotate(rig.head,watch*.035,(face%2?1:-1)*watch*.075,0);
 const breath=Math.sin(time*1.24+face*.5)*.5+.5;
 switch(face){
  case 0:stretch(rig.body||rig.head,1+breath*.003,1+breath*.009,1+breath*.003);move(rig.head,0,breath*.002,0);arm(rig,0,breath*.008);arm(rig,1,breath*.008);break;
  case 1:{const attention=envelope(phase,2.1,2.7,3.7,4.4);rotate(rig.head,attention*-.018,attention*.065,0);rotate(rig.accent,0,attention*.12,attention*.025);break;}
  case 2:{const flick=envelope(phase,3.1,3.4,4.0,4.6);rotate(rig.tail,0,flick*.17,Math.sin(phase*6)*flick*.055);rotate(rig.head,0,flick*-.026,flick*.025);stretch(rig.body,1,1+breath*.006,1);break;}
  case 3:{const curious=envelope(phase,2.3,2.9,3.5,4.2);rotate(rig.head,curious*-.026,curious*.05,curious*-.025);rotate(rig.accent,0,0,curious*.055);stretch(rig.body,1,1+breath*.007,1);break;}
  case 4:{const sparkle=envelope(phase,2.2,2.6,3.0,3.7);rotate(rig.accent,sparkle*.025,0,sparkle*-.06);rotate(rig.head,0,sparkle*.025,0);stretch(rig.body,1,1+breath*.005,1);break;}
  case 5:move(rig.head,0,Math.sin(time*.9)*.009,0);(rig.arms||[]).forEach((n,i)=>rotate(n,Math.sin(time*1.15-i*.5)*.025,0,Math.sin(time*.95-i*.7)*.027));break;
 }
}
function greet(rig,t,face){
 const engage=envelope(t,.04,.38,1.15,1.8),nod=key(t,[[0,0],[.22,.035],[.52,-.055],[.95,-.025],[1.72,0]]);
 blink(rig,blinkAt(t,.12));rotate(rig.head,nod,engage*.065,0);brow(rig,'happy',engage*.45);
 const wave=key(t,[[0,0],[.14,-.045],[.43,1.72],[.66,1.56],[.84,1.8],[1.02,1.58],[1.2,1.72],[1.72,0],[1.85,0]]);
 switch(face){
  case 0:arm(rig,1,wave,-engage*.14);arm(rig,0,engage*.12);rotate(rig.head,0,0,-engage*.055);stretch(rig.body,1,1+engage*.012,1);break;
  case 1:arm(rig,1,wave*.9,-engage*.22);arm(rig,0,engage*.07);rotate(rig.accent,0,0,key(t,[[0,0],[.5,-.1],[.85,.04],[1.25,0]]));break;
  case 2:arm(rig,1,wave*.63,-engage*.32);arm(rig,0,engage*.07);rotate(rig.head,0,0,engage*.085);rotate(rig.tail,0,Math.sin(t*5)*engage*.2,engage*.06);blink(rig,blinkAt(t,.78,.045,.08,.14),0);break;
  case 3:arm(rig,1,wave*1.04,-engage*.1);arm(rig,0,engage*.16);rotate(rig.head,0,key(t,[[0,0],[.22,-.055],[.64,.055],[1.5,0]]),0);break;
  case 4:arm(rig,0,engage*1.03,-engage*.12);arm(rig,1,wave*.74,-engage*.15);rotate(rig.accent,0,0,Math.sin(t*7)*engage*.085);rotate(rig.head,0,0,engage*-.045);break;
  case 5:(rig.arms||[]).forEach((n,i)=>{const reach=envelope(t,.04+i*.055,.4+i*.04,1.03+i*.045,1.66+i*.025);rotate(n,-reach*.15,0,(i<(rig.arms?.length||2)/2?-1:1)*reach*(.3+Math.sin(t*6-i*.8)*.055))});move(rig.head,0,engage*.012,0);rotate(rig.head,0,0,engage*.045);break;
 }
}
function celebrate(rig,root,t,face,duration){
 const raise=envelope(t,.16,.53,duration-.72,duration-.07),anticip=envelope(t,0,.12,.17,.32),pump=jump(t,.66,.38,.14)+jump(t,1.25,.38,.12);
 rotate(rig.head,anticip*.065-raise*.08,0,0);move(rig.head,0,-anticip*.012+raise*.01,0);brow(rig,'happy',raise);blink(rig,Math.max(blinkAt(t,.17),blinkAt(t,.72,.18,.09,.18)));
 if(face!==1)stretch(rig.body,1+anticip*.009,1-anticip*.018+raise*.012,1+anticip*.006);
 if(rig.pose!=='seated')move(root,0,jump(t,.4,.44,.055)+jump(t,1.02,.38,.035),0);
 const strength=[1,1,.84,1.04,1.0,.6][face];
 if(face===5){(rig.arms||[]).forEach((n,i)=>rotate(n,-raise*.18,0,(i<(rig.arms?.length||2)/2?-1:1)*(raise*.34+Math.sin(t*7-i*.65)*raise*.065)))}
 else{arm(rig,0,(raise*1.86+pump)*strength,-raise*.11);arm(rig,1,(raise*2.04+pump*.88)*strength,-raise*.14)}
 if(face===1)rotate(rig.head,0,key(t,[[0,0],[.8,-.055],[1.35,.055],[2.1,0]]),0);
 if(face===2)rotate(rig.tail,0,Math.sin(t*7)*raise*.3,raise*.1);
 if(face===3)rotate(rig.accent,0,0,Math.sin(t*7)*raise*.05);
 if(face===4)rotate(rig.accent,0,0,Math.sin(t*8)*raise*.1);
 if(face===0)rotate(rig.head,0,Math.sin(t*4)*raise*.035,0);
 if(face===5)move(rig.head,0,raise*.022,0);
}
function disappointment(rig,t,face,duration){
 const slump=envelope(t,.02,.5,duration-.55,duration-.03),look=envelope(t,.25,.8,duration-.65,duration-.03);
 rotate(rig.head,slump*.105,-look*.05,look*.035);move(rig.head,0,-slump*.014,0);brow(rig,'sad',slump);
 if(face!==1)stretch(rig.body,1+slump*.004,1-slump*.009,1);arm(rig,0,-slump*.08,slump*.055);arm(rig,1,-slump*.1,slump*.055);
 blink(rig,blinkAt(t,.35,.12,.11,.2));
 if(face===2)rotate(rig.tail,0,-slump*.18,-slump*.08);
 if(face===3)rotate(rig.accent,0,0,slump*.075);
 if(face===4)rotate(rig.accent,0,0,slump*.12);
 if(face===5){(rig.arms||[]).forEach((n,i)=>rotate(n,slump*.045,0,(i<(rig.arms?.length||2)/2?1:-1)*slump*.08));move(rig.head,0,-slump*.012,0)}
}
// Palm target stays attached to the sill while the shoulder/body bears weight.
function pinPalm(root,rig,state,index,target,weight){
 const n=rig.arms?.[index];if(!n||!weight)return;const grip=new Vector3(...(n.userData.grip||[0,-.285,.07]));
 const delta=new Vector3(root.position.x-state.root.position[0],root.position.y-state.root.position[1],root.position.z-state.root.position[2]);
 const desired=new Vector3(...target).sub(delta).sub(n.position),q=new Quaternion().setFromUnitVectors(grip.clone().normalize(),desired.clone().normalize());
 n.quaternion.slerp(q,Math.min(1,weight));const scale=Math.max(.55,Math.min(1.65,desired.length()/grip.length()));n.scale.lerp(new Vector3(...state.nodes.get(n).scale).multiplyScalar(scale),weight);
}
function frameGesture(root,rig,state,mood,t,face,direction=1,reach=1.18){
 const s=sampleFrameScene(mood,t),ledge=frameLedge(face),arms=rig.arms||[],right=face===5?arms.length-1:1;
 setMouth(rig,'neutral');blink(rig,Math.max(blinkAt(t,1.15),s.sleep*.98));
 move(root,direction*s.slide,s.lift,s.out*.10);rotate(rig.head,s.sleep*.22-s.wake*.13+s.lean*.06,s.peek*.27, s.lean*-.10);
 move(rig.head,-s.lean*.025+s.peek*.075,-s.lean*.018-s.react*.035,0);brow(rig,s.wake?'happy':'sad',s.sleep*.25+s.wake*.5);
 (rig.legs||[]).forEach((leg,i)=>rotate(leg,-s.sit*((mood==='frameVault'?1.35:.9)+(i?-.08:.08))+(i?-1:1)*s.step,0,(i?1:-1)*s.sit*.05));
 if(face===5)arms.slice(1,-1).forEach((n,i)=>rotate(n,-s.sit*.25,0,Math.sin(t*2+i)*s.sit*.04));
 for(const i of [0,right]){const n=arms[i];if(!n)continue;const rest=state.nodes.get(n),grip=n.userData.grip||[0,-.285,.07],x=rest.position[0]+grip[0]+(mood==='frameHighFive'?direction*s.slide:0);pinPalm(root,rig,state,i,[x,ledge,.24],s.grip)}
 if(s.lean)pinPalm(root,rig,state,0,[-.27,ledge+.48,.30],s.lean*(1-s.react));
 if(s.wipe)pinPalm(root,rig,state,right,[Math.sin(t*4)*.20,ledge+.48+Math.cos(t*4)*.07,.46],s.wipe);
 if(s.fix){rotate(rig.head,.035,Math.sin(t*1.5)*.08,0);stretch(rig.body,1,1-Math.sin(t*5)*.006*s.fix,1)}
 if(s.yawn){rotate(rig.head,-s.yawn*.08,0,0);pinPalm(root,rig,state,right,[.08,ledge+.40,.42],s.yawn);setMouth(rig,'happy');stretch(rig.mouth.happy,.6,1+s.yawn*.9,1);blink(rig,s.yawn*.95)}
 if(s.five)pinPalm(root,rig,state,direction>0?right:0,[direction*reach,ledge+.38,.27],s.five);
 if(s.wake){arm(rig,0,s.wake*.25);arm(rig,right,s.wake*.25)}
}
/** Returns true while the supplied gesture needs another sample. Units are seconds. */
export function animateCharacter(root,{time=0,face=root?.userData?.rig?.face??root?.userData?.face??0,mood='idle',elapsed=0,reduced=false,direction=1,reach=1.18}={}){
 const state=stateFor(root);if(!state)return false;resetCharacter(root);const rig=state.rig;
 face=Number.isInteger(face)&&face>=0&&face<6?face:0;time=Number.isFinite(time)?Math.max(0,time):0;elapsed=Number.isFinite(elapsed)?Math.max(0,elapsed):0;
 if(mood==='idle'||!CHARACTER_DURATIONS[mood]){if(!reduced)idle(rig,time,face);return !reduced}
 const emotion=mood==='sad'||mood==='lose'?'sad':(['hello','knock'].includes(mood)||FRAME_SCENES[mood])?'neutral':'happy',duration=CHARACTER_DURATIONS[mood];
 setMouth(rig,emotion);
 if(reduced){brow(rig,emotion,.5);return false}
 if(elapsed>=duration){brow(rig,emotion,.45);return false}
 if(rig.mouth?.happy&&emotion==='happy')stretch(rig.mouth.happy,1,1+Math.sin(elapsed*15)*.10,1);
 if(mood==='angry'){const a=envelope(elapsed,0,.25,1.1,1.8);setMouth(rig,'sad');brow(rig,'angry',a);rotate(rig.head,.08*a,Math.sin(elapsed*15)*.035*a,0);arm(rig,0,.45*a);arm(rig,1,.45*a);if(rig.pose!=='seated')move(root,0,jump(elapsed,.3,.25,.025),0)}
 else if(mood==='surprise'){const a=envelope(elapsed,0,.18,.8,1.5);brow(rig,'happy',a);rotate(rig.head,-.1*a,0,0);stretch(rig.mouth.happy,.65,1+.7*a,1);arm(rig,0,.75*a);arm(rig,1,.75*a)}
 else if(mood==='impact'){
  const t=elapsed,turn=key(t,[[0,0],[.65,0],[1.30,Math.PI],[2.35,Math.PI],[3.1,0],[4.8,0]]),contact=envelope(t,1.42,1.78,1.93,2.30),cheer=envelope(t,2.45,2.95,3.95,4.50),anticip=envelope(t,.8,1.10,1.30,1.58);
  brow(rig,'happy',.75);blink(rig,Math.max(blinkAt(t,.4),blinkAt(t,3.25,.12)));rotate(rig.head,-cheer*.10,contact*.38,cheer*Math.sin(t*5)*.035);arm(rig,0,cheer*1.85+anticip*.25,-cheer*.20);arm(rig,1,cheer*2.05+anticip*.25,-cheer*.20);
  if(rig.pose!=='seated'){rotate(root,-contact*.35,turn,0);move(root,0,-anticip*.045+contact*.025+jump(t,2.65,.65,.09)+jump(t,3.5,.55,.06),contact*.32);stretch(rig.body,1+contact*.06,1-contact*.05,1+contact*.10);stretch(rig.hips,1+contact*.15,1-contact*.08,1+contact*.32);move(rig.hips,0,0,-contact*.06);(rig.legs||[]).forEach((n,i)=>rotate(n,contact*.12,0,(i?1:-1)*contact*.055))}
 }
 else if(FRAME_SCENES[mood])frameGesture(root,rig,state,mood,elapsed,face,direction,reach);
 else if(mood==='knock'){
  const t=elapsed,reach=envelope(t,.02,.30,1.34,1.78);
  const contact=[.42,.76,1.10].reduce((a,at)=>a+envelope(t,at-.09,at,at+.025,at+.14),0);
  arm(rig,1,reach*(face===5?.78:1.72),-reach*.38-contact*.34);
  rotate(rig.head,-reach*.035,reach*.065,contact*-.016);brow(rig,'happy',reach*.35);blink(rig,blinkAt(t,1.42));
 }
 else if(mood==='hello')greet(rig,elapsed,face);
 else if(emotion==='happy')celebrate(rig,root,elapsed,face,duration);
 else disappointment(rig,elapsed,face,duration);
 return true;
}
