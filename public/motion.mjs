import {t} from './i18n.mjs';
// Native compositor timelines: portraits stay alive without a JavaScript frame loop.
export const CHARACTER_FILES=['pof','robot','cat','cyclops','star','jelly'].map(name=>'/assets/character-'+name+'-v4.webp');
export const FRAME_COUNT=4;
export const CHARACTER_CLIPS=[
 {name:'El salla',duration:1150},
 {name:'Selam ver',duration:1100},
 {name:'Göz kırp',duration:900},
 {name:'Ayağını kaldır',duration:1150},
 {name:'Göz kırp ve eğil',duration:1050},
 {name:'Kollarını dalgalandır',duration:1300}
].map(clip=>({...clip,frames:Array.from({length:FRAME_COUNT},(_,i)=>i)}));
export const EXPRESSIONS={idle:'0% 0%',celebrate:'100% 0%',sad:'0% 100%',hello:'100% 100%'};
export function spriteFrames(face,mood='hello'){
 if(!CHARACTER_CLIPS[face])return [];
 const pose=EXPRESSIONS[mood]||EXPRESSIONS.hello;
 const tilt=[-2,1,-2,1.5,-2,1][face];
 const transforms=mood==='celebrate'?['translateY(0) scale(1)','translateY(2px) scale(1.015,.985)','translateY(-6px) rotate(-1deg) scale(.995,1.005)','translateY(-2px) rotate(1deg)','translateY(-1px) rotate(0deg)','translateY(0) scale(1)']:
 mood==='sad'?['translateY(0)','translateY(4px) rotate(-3deg) scale(.98,.97)','translateY(3px) rotate(2deg)','translateY(0)']:
 ['translateY(0) rotate(0deg)',`translateY(-3px) rotate(${tilt}deg)`,`translateY(-1px) rotate(${-tilt*.6}deg)`,'translateY(0) rotate(0deg)'];
 return transforms.map((transform,i)=>({backgroundPosition:pose,transform:transform+' scale(var(--portrait-scale,1))',offset:i/(transforms.length-1),easing:'cubic-bezier(.25,.7,.2,1)'}));
}
// Events are based on committed state, never speculative score or a redraw.
export function characterEvents(previous,next){
 if(!previous||!next||previous.matchId!==next.matchId||previous.revision===next.revision)return [];
 const events=[];
 next.timeoutCounts?.forEach((n,i)=>{if(n>(previous.timeoutCounts?.[i]||0))events.push({seat:i,mood:'sad'})});
 const h=next.history?.[0];if(h&&JSON.stringify(h)!==JSON.stringify(previous.history?.[0])&&h.score>0){const actor=Number.isInteger(h.actor)?h.actor:next.players.findIndex(p=>p.name===h.name);if(actor>=0){events.push({seat:actor,mood:'celebrate'});if(h.qwirkles||h.score>=12)next.players.forEach((p,i)=>{if(i!==actor&&!p.eliminated)events.push({seat:i,mood:'sad'})})}}
 return events;
}
export class MotionDirector{
 constructor({limit=8,reduced=()=>false}={}){this.limit=Math.max(1,limit);this.reduced=reduced;this.active=new Map()}
 play(element,frames,options={}){
  if(this.reduced()||!element?.animate||element.isConnected===false)return null;
  this.cancel(element);this.prune();while(this.active.size>=this.limit)this.cancel(this.active.keys().next().value);
  const animation=element.animate(frames,{duration:450,easing:'linear',...options,iterations:1,fill:'none'});
  this.active.set(element,animation);const done=()=>{if(this.active.get(element)===animation)this.active.delete(element)};
  animation.finished.then(done,done);return animation;
 }
 cancel(element){const animation=this.active.get(element);if(!animation)return;this.active.delete(element);animation.cancel()}
 cancelAll(){for(const element of [...this.active.keys()])this.cancel(element)}
 prune(){for(const element of this.active.keys())if(element.isConnected===false)this.cancel(element)}
}
// Eyelids are registered to the neutral frame of each original illustration.
// Local overlays close the existing eyes; idle never swaps the entire expression sheet.
export const CHARACTER_IDLE=[
 {name:'cloud-breath',duration:7100,eyes:[[44.3,45.2,17.1,17.5],[69.1,45.8,13.1,16.3]],skin:['#c6a5eb','#a67ad0'],line:'#64418c',kind:'breath'},
 {name:'robot-scan',duration:8300,eyes:[[50.5,40.2,12.2,13.5],[70.5,38.1,10.8,13.2]],skin:['#181820','#11121a'],line:'#51d6ff',kind:'signal'},
 {name:'cat-slow-blink',duration:9400,eyes:[[51.8,41.3,11.9,11.3],[68.9,44.0,10.0,10.8]],skin:['#f7a77f','#ee926b'],line:'#713b34',kind:'settle'},
 {name:'cyclops-look',duration:7900,eyes:[[53.2,31.7,24.0,19.2]],skin:['#70d6bf','#45bca7'],line:'#287a70',kind:'curious'},
 {name:'star-shimmer',duration:10100,eyes:[[43.5,46.5,15.3,14.3],[66.6,44.7,13.8,14.0]],skin:['#ffe375','#edbc37'],line:'#86562f',kind:'sparkle'},
 {name:'jelly-drift',duration:8700,eyes:[[43.7,35.8,13.8,13.4],[66.2,32.6,12.2,13.5]],skin:['#6bd4eb','#40bfdc'],line:'#367d99',kind:'float'}
];
export function idleBodyFrames(face){
 const kind=CHARACTER_IDLE[face]?.kind;
 const values=kind==='breath'?['scale(1)','scale(1.008,1.017)','scale(1)']:
  kind==='settle'?['translateX(0) rotate(0deg)','translateX(.35px) rotate(.45deg)','translateX(0) rotate(0deg)']:
  kind==='curious'?['translateY(0)','translateY(-.45px) scale(1.006)','translateY(0)']:
  kind==='float'?['translateY(0) scale(1)','translateY(-1.3px) scale(.996,1.014)','translateY(0) scale(1)']:['translateY(0)','translateY(0)','translateY(0)'];
 return values.map((v,i)=>({transform:v,offset:i/2,easing:'cubic-bezier(.45,0,.55,1)'}));
}
export function idleBlinkFrames(face,eye=0){
 const slow=face===2,close=slow ? .035 : .012,start=.30+eye*.004;
 return [{clipPath:'inset(0 0 100% 0 round 48%)',offset:0},{clipPath:'inset(0 0 100% 0 round 48%)',offset:start},{clipPath:'inset(0 0 0 0 round 48%)',offset:start+close},{clipPath:'inset(0 0 100% 0 round 48%)',offset:start+close+(slow ? .045 : .021)},{clipPath:'inset(0 0 100% 0 round 48%)',offset:1}];
}
// Paused native timelines preserve phase offscreen. Reactions temporarily own the art.
export class IdleMotionDirector{
 constructor({reduced=()=>false}={}){this.reduced=reduced;this.active=new Map()}
 add(art,animations,layer){this.remove(art);this.active.set(art,{animations,layer,inView:false});this.sync()}
 visibility(art,inView){const state=this.active.get(art);if(state){state.inView=inView;this.sync()}}
 sync(){for(const [art,state]of this.active){if(art.isConnected===false){this.remove(art);continue}const live=!this.reduced()&&state.inView&&!art.dataset.emotion;state.layer.style.visibility=live?'visible':'hidden';for(const animation of state.animations)if(live){if(animation.playState!=='running')animation.play()}else if(animation.playState!=='paused')animation.pause()}}
 remove(art){const state=this.active.get(art);if(!state)return;state.animations.forEach(a=>a.cancel());state.layer.remove();this.active.delete(art)}
}
let idlePortraits,idleObserver;
function prepareIdle(art){
 if(idlePortraits.active.has(art))return;const face=Number(art.dataset.character),profile=CHARACTER_IDLE[face];if(!profile)return;if(!artwork.get(face)?.loaded){prepareAtlas(face).then(ok=>{if(ok&&art.isConnected)prepareIdle(art)});return}
 art.style.position='relative';art.style.animation='none';const layer=document.createElement('span');layer.className='portrait-idle-layer';layer.setAttribute('aria-hidden','true');Object.assign(layer.style,{position:'absolute',inset:'0',pointerEvents:'none',visibility:'hidden'});art.append(layer);
 const options={duration:profile.duration,iterations:Infinity,fill:'both',easing:'linear',delay:-Math.random()*profile.duration},animations=[art.animate(idleBodyFrames(face),{...options,composite:'add'})];
 profile.eyes.forEach(([x,y,w,h],index)=>{const lid=document.createElement('span');lid.className='portrait-eyelid';Object.assign(lid.style,{position:'absolute',left:(x-w/2)+'%',top:(y-h/2)+'%',width:w+'%',height:h+'%',borderRadius:'48%',background:'linear-gradient(130deg,'+profile.skin.join(',')+')',boxShadow:'inset 0 -1px 1px '+profile.line+'88',clipPath:'inset(0 0 100% 0 round 48%)'});const seam=document.createElement('span');Object.assign(seam.style,{position:'absolute',left:'10%',right:'10%',top:'53%',height:'13%',borderBottom:'1px solid '+profile.line,borderRadius:'0 0 50% 50%',opacity:'.8'});lid.append(seam);layer.append(lid);animations.push(lid.animate(idleBlinkFrames(face,index),options))});
 if(['signal','sparkle','float'].includes(profile.kind)){const light=document.createElement('span');light.className='portrait-idle-glimmer';const robot=face===1;Object.assign(light.style,{position:'absolute',left:robot?'44%':face===4?'29%':'35%',top:robot?'65%':face===4?'30%':'19%',width:robot?'13%':'5%',height:robot?'10%':'5%',borderRadius:'50%',background:robot?'#edcfff':'#fff',boxShadow:'0 0 4px '+(robot?'#d9b2ff':'#cffbff'),opacity:'0',mixBlendMode:'screen'});layer.append(light);animations.push(light.animate([{opacity:0,transform:'scale(.7)',offset:0},{opacity:robot ? .35 : .65,transform:'scale(1.2)',offset:.48},{opacity:0,transform:'scale(.7)',offset:.67},{opacity:0,offset:1}],options))}
 animations.forEach(a=>a.pause());idlePortraits.add(art,animations,layer);idleObserver.observe(art);
}
let director,installed=false;
const artwork=new Map();
const requests=new WeakMap();
function prepareAtlas(face){
 if(artwork.has(face))return artwork.get(face).ready;
 const state={loaded:false,ready:null};
 state.ready=new Promise(resolve=>{const image=new Image();image.onload=()=>{state.loaded=true;resolve(true)};image.onerror=()=>{artwork.delete(face);resolve(false)};image.src=CHARACTER_FILES[face];if(image.complete&&image.naturalWidth){state.loaded=true;resolve(true)}});
 artwork.set(face,state);return state.ready;
}
const reduced=()=>document.hidden||document.body?.dataset.motion==='reduced'||matchMedia('(prefers-reduced-motion: reduce)').matches;
export function motionDirector(){return director??=new MotionDirector({reduced})}
export function playCharacter(host,mood='hello',remaining=null){
 const art=host?.matches?.('.character-art')?host:host?.querySelector?.('.character-art');
 if(!art||reduced())return null;const clip=CHARACTER_CLIPS[Number(art.dataset.character)];if(!clip)return null;
 const request={};requests.set(art,request);
 const start=()=>{if(requests.get(art)!==request||!art.isConnected||reduced())return null;art.dataset.emotion=mood;idlePortraits?.sync();const animation=motionDirector().play(art,spriteFrames(Number(art.dataset.character),mood).map(frame=>art.dataset.seated?{...frame,backgroundPosition:art.style.getPropertyValue('--seat-x')+' 0%'}:frame),{duration:remaining??(mood==='celebrate'?1750:mood==='sad'?2100:clip.duration)});animation?.finished.finally(()=>{if(requests.get(art)===request){delete art.dataset.emotion;idlePortraits?.sync()}}).catch(()=>{});return animation};
 const face=Number(art.dataset.character);
 return artwork.get(face)?.loaded?start():prepareAtlas(face).then(ok=>ok?start():null);
}
export function installCharacterMotion(root=document){
 if(installed)return;installed=true;
 idlePortraits=new IdleMotionDirector({reduced});idleObserver=new IntersectionObserver(entries=>{for(const entry of entries)idlePortraits.visibility(entry.target,entry.isIntersecting)},{threshold:.1});
 const enhance=()=>{for(const avatar of root.querySelectorAll('.illustrated-avatar')){
  if(avatar.hasAttribute('role')||avatar.parentElement?.closest('button,a,[role="button"]'))continue;
  avatar.setAttribute('role','button');avatar.tabIndex=0;avatar.dataset.motionOnly='true';avatar.setAttribute('aria-label',(avatar.dataset.avatarName||t('Karakter'))+' · '+t('Canlandır'));
 }for(const art of root.querySelectorAll('.character-art'))if(art.getClientRects().length)prepareAtlas(Number(art.dataset.character));for(const art of root.querySelectorAll('#scores .character-art,.home-portrait .character-art,.avatar-preview .character-art'))prepareIdle(art);for(const art of [...idlePortraits.active.keys()])if(!art.isConnected){idleObserver.unobserve(art);idlePortraits.remove(art)}idlePortraits.sync();};
 root.addEventListener('click',event=>{const host=event.target.closest?.('.illustrated-avatar,.home-portrait,.avatar-preview');if(host)playCharacter(host)},{capture:true});
 root.addEventListener('keydown',event=>{const host=event.target.closest?.('[data-motion-only="true"]');if(host&&['Enter',' '].includes(event.key)){event.preventDefault();host.click()}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)director?.cancelAll();idlePortraits?.sync()});
 const media=matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener?.('change',()=>{if(reduced())director?.cancelAll();idlePortraits?.sync()});
 let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;director?.prune();if(reduced())director?.cancelAll();enhance()})}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-motion','data-emotion']});
 enhance();

}

export class CharacterReactions{
 constructor(){this.snapshot=null;this.pending=new Map()}
 update(game,now=performance.now()){
  if(this.snapshot?.matchId!==game?.matchId)this.pending.clear();
  for(const event of characterEvents(this.snapshot,game))this.pending.set(event.seat,{...event,until:now+(event.mood==='celebrate'?1750:2100)});
  this.snapshot={matchId:game?.matchId,revision:game?.revision,history:game?.history?.slice(0,1),timeoutCounts:game?.timeoutCounts?.slice()};
  for(const [seat,event]of this.pending)if(event.until<=now)this.pending.delete(seat);
  return [...this.pending.values()].map(event=>({...event,remaining:event.until-now}));
 }
}
const reactions=new CharacterReactions();
export function reactToGame(game){
 for(const event of reactions.update(game)){
  const host=document.querySelector('#scores [data-seat="'+event.seat+'"] .illustrated-avatar'),art=host?.querySelector('.character-art');
  if(art&&art.dataset.emotion!==event.mood)playCharacter(host,event.mood,event.remaining);
 }
}
