import {playCharacter,CHARACTER_FILES,CHARACTER_CLIPS} from './motion.mjs';
const palettes=[['#7550c6','#dfd0fa'],['#137d84','#bceceb'],['#bb535f','#f9d0d6'],['#aa7416','#fae2a3'],['#426bc1','#ccdefb'],['#a04994','#f1c9e9'],['#4d8056','#d4eccc'],['#6c7286','#e0e5f1']];
export function defaultAvatar(seed=''){let n=2166136261;for(const ch of String(seed))n=Math.imul(n^ch.charCodeAt(0),16777619)>>>0;return {face:n%6,color:(n>>>4)%palettes.length}}
export function normalizeAvatar(v,seed=''){const d=defaultAvatar(seed);return {face:Number.isInteger(v?.face)&&v.face>=0&&v.face<6?v.face:d.face,color:Number.isInteger(v?.color)&&v.color>=0&&v.color<8?v.color:d.color}}
export const AVATAR_NAMES=['Pof','Robot','Kedi','Tepegöz','Yıldız','Denizanası'];
const characterHues=[0,255,95,155,315,40,220,0];
export function avatarArt(v,seed=''){
 const {face,color}=normalizeAvatar(v,seed);
 return `<span class="character-art character-${face}" data-character="${face}" aria-hidden="true" style="--avatar-image:url('${CHARACTER_FILES[face]}');--avatar-x:0%;--avatar-y:0%;--avatar-hue:${characterHues[color]}deg;--avatar-sat:${color===7?.18:1}"></span>`;
}

let owner='';export function setAvatarOwner(id){owner=id||''}
const storageKey=()=> 'renkio-avatar:'+owner;
export function readAvatar(seed=owner){try{return normalizeAvatar(JSON.parse(localStorage.getItem(storageKey())),seed)}catch{return defaultAvatar(seed)}}
export function hasAvatar(){return !!localStorage.getItem(storageKey())}
export function saveAvatar(v){localStorage.setItem(storageKey(),JSON.stringify(normalizeAvatar(v,owner)))}
export function playerAvatar(name,index,google='',own=false,v=null,seed=name){const n=document.createElement('div');n.className='avatar illustrated-avatar';n.dataset.avatarName=name;n.innerHTML=avatarArt(own?readAvatar():v,seed);return n}
export function openAvatarPicker(refresh){
 const d=document.createElement('dialog');d.className='avatar-dialog';let draft=readAvatar();
 d.innerHTML='<div class="drawer-heading"><h2>Karakter</h2><button class="icon-button" aria-label="Kapat">×</button></div><div class="character-stage"><button type="button" class="avatar-preview" aria-label="Karakteri canlandır"></button></div><strong class="avatar-character-name"></strong><div class="avatar-choices" aria-label="Karakter"></div><div class="avatar-colors" aria-label="Renk"></div><p class="avatar-status" role="status"></p><button class="button button-purple full avatar-save">Kaydet</button>';
 const close=()=>{d.close();d.remove()};d.querySelector('.icon-button').onclick=close;
 const draw=()=>{
  d.querySelector('.avatar-preview').innerHTML=avatarArt(draft);
  d.querySelector('.avatar-character-name').textContent=AVATAR_NAMES[draft.face];
  d.querySelector('.avatar-preview').setAttribute('aria-label',AVATAR_NAMES[draft.face]+' · '+CHARACTER_CLIPS[draft.face].name);
  playCharacter(d.querySelector('.avatar-preview'));
  [...d.querySelector('.avatar-choices').children].forEach((b,i)=>{
   b.innerHTML='<span class="avatar-choice-art">'+avatarArt({...draft,face:i})+'</span><span class="avatar-choice-name">'+AVATAR_NAMES[i]+'</span>';
   b.setAttribute('aria-pressed',String(i===draft.face));
  });
  [...d.querySelector('.avatar-colors').children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===draft.color)));
 };
 for(let i=0;i<6;i++){
  const b=document.createElement('button');b.type='button';b.className='avatar-option';
  b.setAttribute('aria-label',AVATAR_NAMES[i]);b.title=AVATAR_NAMES[i];
  b.onclick=()=>{draft.face=i;draw()};d.querySelector('.avatar-choices').append(b);
 }
 for(let i=0;i<8;i++){
  const b=document.createElement('button');b.type='button';b.className='avatar-color';b.style.background=palettes[i][0];
  b.setAttribute('aria-label','Renk '+(i+1));b.onclick=()=>{draft.color=i;draw()};d.querySelector('.avatar-colors').append(b);
 }
 d.querySelector('.avatar-save').onclick=async e=>{
  e.target.disabled=true;
  try{await refresh(draft);saveAvatar(draft);close()}
  catch(error){d.querySelector('.avatar-status').textContent=error.message}
  finally{e.target.disabled=false}
 };
 d.addEventListener('cancel',()=>d.remove());document.body.append(d);draw();d.showModal();
}
