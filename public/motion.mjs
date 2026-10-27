import {t} from './i18n.mjs';
// One-shot native timelines: no idle game loop, GPU context or external dependency.
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
 const tilt=[-5,3,-7,5,-9,4][face];
 const transforms=mood==='celebrate'?['translateY(0) scale(1)','translateY(4px) scale(1.08,.92)','translateY(-13px) rotate(-4deg) scale(.96,1.04)','translateY(-3px) rotate(4deg)','translateY(-8px) rotate(-2deg)','translateY(0) scale(1)']:
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
 const start=()=>{if(requests.get(art)!==request||!art.isConnected||reduced())return null;art.dataset.emotion=mood;const animation=motionDirector().play(art,spriteFrames(Number(art.dataset.character),mood).map(frame=>art.dataset.seated?{...frame,backgroundPosition:art.style.getPropertyValue('--seat-x')+' 0%'}:frame),{duration:remaining??(mood==='celebrate'?1750:mood==='sad'?2100:clip.duration)});animation?.finished.finally(()=>{if(requests.get(art)===request)delete art.dataset.emotion}).catch(()=>{});return animation};
 const face=Number(art.dataset.character);
 return artwork.get(face)?.loaded?start():prepareAtlas(face).then(ok=>ok?start():null);
}
export function installCharacterMotion(root=document){
 if(installed)return;installed=true;
 const enhance=()=>{for(const avatar of root.querySelectorAll('.illustrated-avatar')){
  if(avatar.hasAttribute('role')||avatar.parentElement?.closest('button,a,[role="button"]'))continue;
  avatar.setAttribute('role','button');avatar.tabIndex=0;avatar.dataset.motionOnly='true';avatar.setAttribute('aria-label',(avatar.dataset.avatarName||t('Karakter'))+' · '+t('Canlandır'));
 }for(const art of root.querySelectorAll('.character-art'))if(art.getClientRects().length)prepareAtlas(Number(art.dataset.character));};
 root.addEventListener('click',event=>{const host=event.target.closest?.('.illustrated-avatar,.home-portrait,.avatar-preview');if(host)playCharacter(host)},{capture:true});
 root.addEventListener('keydown',event=>{const host=event.target.closest?.('[data-motion-only="true"]');if(host&&['Enter',' '].includes(event.key)){event.preventDefault();host.click()}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)director?.cancelAll()});
 const media=matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener?.('change',()=>{if(reduced())director?.cancelAll()});
 let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;director?.prune();if(reduced())director?.cancelAll();enhance()})}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-motion']});
 enhance();
 setInterval(()=>{if(reduced())return;const visible=[...root.querySelectorAll('.table-character,.home-portrait,#scores .illustrated-avatar')].filter(n=>n.getClientRects().length&&n.getBoundingClientRect().bottom>0&&n.getBoundingClientRect().top<innerHeight&&!n.querySelector('[data-emotion]'));if(visible.length)playCharacter(visible[Math.floor(Math.random()*visible.length)])},12000);
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
