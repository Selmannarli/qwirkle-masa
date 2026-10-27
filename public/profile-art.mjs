import {CHARACTER_TINTS,MIKO_AVATAR} from './character-style.mjs';
import {t} from './i18n.mjs';
import {playCharacter,CHARACTER_CLIPS} from './motion.mjs';
export function defaultAvatar(seed=''){if(seed==='miko')return {...MIKO_AVATAR};let n=2166136261;for(const ch of String(seed))n=Math.imul(n^ch.charCodeAt(0),16777619)>>>0;return {face:n%6,color:(n>>>4)%7}}
export function normalizeAvatar(v,seed=''){if(seed==='miko')return {...MIKO_AVATAR};const d=defaultAvatar(seed);return {face:Number.isInteger(v?.face)&&v.face>=0&&v.face<6?v.face:d.face,color:Number.isInteger(v?.color)&&v.color>=0&&v.color<8?v.color:d.color}}
export const AVATAR_NAMES=['Pof','Robot','Kedi','Tepegöz','Yıldız','Denizanası'];
export function avatarArt(v,seed=''){
 const {face,color}=normalizeAvatar(v,seed);
 return `<span class="character-art character-${face}" data-character="${face}" data-colour="${color}" aria-hidden="true"></span>`;
}

let owner='';export function setAvatarOwner(id){owner=id||''}
const storageKey=()=> 'renkio-avatar:'+owner;
export function readAvatar(seed=owner){try{return normalizeAvatar(JSON.parse(localStorage.getItem(storageKey())),seed)}catch{return defaultAvatar(seed)}}
export function hasAvatar(){return !!localStorage.getItem(storageKey())}
export function saveAvatar(v){localStorage.setItem(storageKey(),JSON.stringify(normalizeAvatar(v,owner)))}
export function playerAvatar(name,index,google='',own=false,v=null,seed=name){const n=document.createElement('div');n.className='avatar illustrated-avatar';n.dataset.avatarName=name;n.innerHTML=avatarArt(own?readAvatar():v,seed);return n}
export function openAvatarPicker(refresh){
 const d=document.createElement('dialog');d.className='avatar-dialog';let draft=readAvatar();
 d.innerHTML='<div class="drawer-heading"><h2>Karakter</h2><button class="icon-button" aria-label="Kapat">×</button></div><div class="character-stage"><button type="button" class="avatar-preview" aria-label="Karakteri canlandır"></button></div><strong class="avatar-character-name"></strong><div class="expression-preview"><button type="button" data-mood="hello" aria-label="Selam ver">'+t('Selam ver')+'</button><button type="button" data-mood="win">'+t('Kazandı')+'</button><button type="button" data-mood="lose">'+t('Kaybetti')+'</button></div><div class="avatar-choices" aria-label="Karakter"></div><div class="avatar-colors" aria-label="Renk"></div><p class="avatar-status" role="status"></p><button class="button button-purple full avatar-save">Kaydet</button>';
 d.querySelectorAll('[data-mood]').forEach(b=>b.onclick=()=>playCharacter(d.querySelector('.avatar-preview'),b.dataset.mood));
 const close=()=>{d.close();d.remove()};d.querySelector('.icon-button').onclick=close;
 const draw=()=>{
  const preview=d.querySelector('.avatar-preview');if(!preview.querySelector('.character-art'))preview.innerHTML=avatarArt(draft);else{const art=preview.querySelector('.character-art');art.dataset.character=draft.face;art.dataset.colour=draft.color;art.className='character-art character-'+draft.face;}
  d.querySelector('.avatar-character-name').textContent=t(AVATAR_NAMES[draft.face]);
  d.querySelector('.avatar-preview').setAttribute('aria-label',t(AVATAR_NAMES[draft.face])+' · '+CHARACTER_CLIPS[draft.face].name);
  playCharacter(d.querySelector('.avatar-preview'));
  [...d.querySelector('.avatar-choices').children].forEach((b,i)=>{
   if(!b.querySelector('.character-art'))b.innerHTML='<span class="avatar-choice-art">'+avatarArt({...draft,face:i})+'</span><span class="avatar-choice-name">'+t(AVATAR_NAMES[i])+'</span>';else b.querySelector('.character-art').dataset.colour=draft.color;
   b.setAttribute('aria-pressed',String(i===draft.face));
  });
  [...d.querySelector('.avatar-colors').children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===draft.color)));
 };
 for(let i=0;i<6;i++){
  const b=document.createElement('button');b.type='button';b.className='avatar-option';
  b.setAttribute('aria-label',t(AVATAR_NAMES[i]));b.title=t(AVATAR_NAMES[i]);
  b.onclick=()=>{draft.face=i;draw()};d.querySelector('.avatar-choices').append(b);
 }
 for(let i=0;i<8;i++){
  const b=document.createElement('button');b.type='button';b.className='avatar-color';b.style.background=CHARACTER_TINTS[i].hex||'conic-gradient(#ad86df,#edb32a,#55c7e8,#eb8b53,#ad86df)';b.dataset.original=String(i===0);
  b.setAttribute('aria-label',t(CHARACTER_TINTS[i].name));b.title=t(CHARACTER_TINTS[i].name);b.onclick=()=>{draft.color=i;draw()};d.querySelector('.avatar-colors').append(b);
 }
 d.querySelector('.avatar-save').onclick=async e=>{
  e.target.disabled=true;
  try{await refresh(draft);saveAvatar(draft);close()}
  catch(error){d.querySelector('.avatar-status').textContent=error.message}
  finally{e.target.disabled=false}
 };
 d.addEventListener('cancel',()=>d.remove());document.body.append(d);draw();d.showModal();
}
