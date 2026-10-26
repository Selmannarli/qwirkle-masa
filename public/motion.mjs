// One-shot native timelines: no idle game loop, GPU context or external dependency.
export const CHARACTER_CLIPS=[
 {name:'El salla',duration:1150,frames:[0,1,2,3,2,3,4,5]},
 {name:'Selam ver',duration:1100,frames:[0,1,2,2,3,4,5]},
 {name:'Göz kırp',duration:900,frames:[0,1,2,3,3,4,5]},
 {name:'Ayağını kaldır',duration:1150,frames:[0,1,2,3,3,4,5]},
 {name:'Göz kırp ve eğil',duration:1050,frames:[0,1,2,3,3,4,5]},
 {name:'Kollarını dalgalandır',duration:1300,frames:[0,1,2,3,2,3,4,5]}
];
export function spriteFrames(face){
 const clip=CHARACTER_CLIPS[face];if(!clip)return [];
 return clip.frames.map((frame,i)=>({backgroundPositionX:frame*20+'%',offset:i/(clip.frames.length-1),easing:'steps(1,end)'}));
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
let director,installed=false,atlasReady,atlasLoaded=false;
const requests=new WeakMap();
function prepareAtlas(){
 if(atlasReady)return atlasReady;
 atlasReady=new Promise(resolve=>{const image=new Image();image.onload=()=>{atlasLoaded=true;resolve(true)};image.onerror=()=>{atlasReady=null;resolve(false)};image.src='/assets/characters-motion-v1.webp';if(image.complete&&image.naturalWidth){atlasLoaded=true;resolve(true)}});
 return atlasReady;
}
const reduced=()=>document.hidden||document.body?.dataset.motion==='reduced'||matchMedia('(prefers-reduced-motion: reduce)').matches;
export function motionDirector(){return director??=new MotionDirector({reduced})}
export function playCharacter(host){
 const art=host?.matches?.('.character-art')?host:host?.querySelector?.('.character-art');
 if(!art||reduced())return null;const clip=CHARACTER_CLIPS[Number(art.dataset.character)];if(!clip)return null;
 const request={};requests.set(art,request);
 const start=()=>{if(requests.get(art)!==request||!art.isConnected||reduced())return null;return motionDirector().play(art,spriteFrames(Number(art.dataset.character)),{duration:clip.duration})};
 return atlasLoaded?start():prepareAtlas().then(ok=>ok?start():null);
}
export function installCharacterMotion(root=document){
 if(installed)return;installed=true;prepareAtlas();
 const enhance=()=>{for(const avatar of root.querySelectorAll('.illustrated-avatar')){
  if(avatar.hasAttribute('role')||avatar.parentElement?.closest('button,a,[role="button"]'))continue;
  avatar.setAttribute('role','button');avatar.tabIndex=0;avatar.dataset.motionOnly='true';avatar.setAttribute('aria-label',(avatar.dataset.avatarName||'Karakter')+' · Canlandır');
 }};
 root.addEventListener('click',event=>{const host=event.target.closest?.('.illustrated-avatar,.home-portrait,.avatar-preview');if(host)playCharacter(host)},{capture:true});
 root.addEventListener('keydown',event=>{const host=event.target.closest?.('[data-motion-only="true"]');if(host&&['Enter',' '].includes(event.key)){event.preventDefault();host.click()}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)director?.cancelAll()});
 const media=matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener?.('change',()=>{if(reduced())director?.cancelAll()});
 let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;director?.prune();if(reduced())director?.cancelAll();enhance()})}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-motion']});
 enhance();
}
