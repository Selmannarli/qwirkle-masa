import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createCharacter,disposePerson} from './characters.mjs';
import {animateCharacter,resetCharacter,CHARACTER_DURATIONS} from './character-motion.mjs';

// One GPU context paints all DOM portraits. Their small 2D canvases follow normal
// stacking, clipping and dialog rules, and never create another WebGL context.
export class CharacterPortraits{
 constructor({reduced=()=>false}={}){
  this.reduced=reduced;this.records=new Map();this.models=new Map();this.frame=null;this.lastFrame=0;this.dirty=true;this.lost=false;
  this.renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});this.renderer.setPixelRatio(1);this.renderer.setSize(384,384,false);this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.94;this.renderer.setClearColor(0,0);
  this.scene=new T.Scene();const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.45;room.dispose();pmrem.dispose();
  this.scene.add(new T.HemisphereLight('#fff3ff','#64506d',.65));const key=new T.DirectionalLight('#fff1df',2.1);key.position.set(-3,5,6);this.scene.add(key);const rim=new T.DirectionalLight('#c9b4ff',1.15);rim.position.set(4,3,-3);this.scene.add(rim);
  this.camera=new T.PerspectiveCamera(31,1,.1,30);
  this.observer=new IntersectionObserver(entries=>{for(const e of entries){const r=this.records.get(e.target);if(r){r.visible=e.isIntersecting;r.dirty=true}}this.request()},{threshold:.01});
  this.resizeObserver=new ResizeObserver(()=>this.invalidate());
  this.renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();this.lost=true;this.pause()});this.renderer.domElement.addEventListener('webglcontextrestored',()=>{this.lost=false;this.invalidate()});
 }
 add(art){
  if(this.records.has(art)){const record=this.records.get(art),face=Number(art.dataset.character)||0,colour=Number(art.dataset.colour)||0;if(record.face!==face||record.colour!==colour||record.accessory!==(art.dataset.accessory||'none')){record.face=face;record.colour=colour;record.accessory=art.dataset.accessory||'none';record.dirty=true;this.request()}return}const canvas=document.createElement('canvas');canvas.className='character-canvas';canvas.setAttribute('aria-hidden','true');art.replaceChildren(canvas);const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
  const r={art,canvas,ctx,face:Number(art.dataset.character)||0,colour:Number(art.dataset.colour)||0,accessory:art.dataset.accessory||'none',visible:false,dirty:true,mood:'idle',start:0,until:0,phase:Math.random()*15,last:0};this.records.set(art,r);this.observer.observe(art);this.resizeObserver.observe(art);this.request();
 }
 model(face,colour,accessory='none'){
  const key=face+':'+colour+':'+accessory;let entry=this.models.get(key);if(entry){this.models.delete(key);this.models.set(key,entry);return entry}
  const root=createCharacter(face,colour,'standing',accessory);root.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(root),center=bounds.getCenter(new T.Vector3()),size=bounds.getSize(new T.Vector3());const headBounds=new T.Box3().setFromObject(root.userData.rig.head),headCenter=headBounds.getCenter(new T.Vector3()),headSize=headBounds.getSize(new T.Vector3());headCenter.y-=.04;entry={root,center,radius:Math.max(size.y,size.x)*.5,headCenter,headRadius:Math.max(headSize.y*1.08,headSize.x)*.5};this.models.set(key,entry);
  while(this.models.size>12){const oldest=this.models.keys().next().value,old=this.models.get(oldest);this.models.delete(oldest);disposePerson(old.root)}return entry;
 }
 play(art,mood='hello',remaining=null){
  this.add(art);const r=this.records.get(art);if(!r)return;const duration=(CHARACTER_DURATIONS[mood]||1.85)*1000,now=performance.now();r.mood=mood;r.start=now-Math.max(0,duration-(remaining??duration));r.until=now+(remaining??duration);r.dirty=true;art.dataset.emotion=mood;
  clearTimeout(r.timer);r.timer=setTimeout(()=>{if(this.records.get(art)!==r)return;r.mood='idle';delete art.dataset.emotion;r.dirty=true;this.request()},Math.max(0,r.until-now));this.request();
 }
 invalidate(){this.dirty=true;for(const r of this.records.values())r.dirty=true;this.request()}
 prune(){for(const [art,r]of this.records)if(!art.isConnected){clearTimeout(r.timer);this.observer.unobserve(art);this.resizeObserver.unobserve(art);this.records.delete(art)}}
 request(){if(!this.frame&&!document.hidden&&!this.lost)this.frame=requestAnimationFrame(t=>this.tick(t))}
 pause(){if(this.frame)cancelAnimationFrame(this.frame);this.frame=null}
 tick(now){
  this.frame=null;if(document.hidden||this.lost)return;this.prune();const reduced=this.reduced(),modal=document.querySelector('dialog[open]:modal');let alive=false;
  for(const r of this.records.values()){
   const {art}=r;if(!r.visible||!art.getClientRects().length||modal&&!modal.contains(art))continue;
   const rect=art.getBoundingClientRect();if(rect.bottom<=0||rect.top>=innerHeight||rect.width<1||rect.height<1)continue;
   const idle=!!art.closest('#scores,.home-portrait,.avatar-preview,#winnerPortrait'),active=r.mood!=='idle',animate=!reduced&&(idle||active);alive||=animate;
   if(!r.dirty&&!this.dirty&&(!animate||now-r.last<(active?15:32)))continue;
   const pixels=Math.max(64,Math.min(384,Math.ceil(Math.max(rect.width,rect.height)*Math.min(devicePixelRatio||1,1.5))));
   if(r.canvas.width!==pixels||r.canvas.height!==pixels){r.canvas.width=r.canvas.height=pixels}
   const entry=this.model(r.face,r.colour,r.accessory),root=entry.root,bust=!!art.closest('#scores,.home-portrait,.friend-entry,.leader-row,.mini-player'),center=bust?entry.headCenter:entry.center,radius=bust?entry.headRadius:entry.radius;resetCharacter(root);animateCharacter(root,{time:now/1000+r.phase,face:r.face,mood:r.mood,elapsed:Math.max(0,(now-r.start)/1000),reduced});
   this.scene.add(root);const distance=radius/Math.sin(this.camera.fov*Math.PI/360)*1.14;this.camera.position.copy(center).add(new T.Vector3(.18,.12,1).normalize().multiplyScalar(distance));this.camera.lookAt(center);this.renderer.setScissorTest(true);this.renderer.setScissor(0,0,pixels,pixels);this.renderer.setViewport(0,0,pixels,pixels);this.renderer.render(this.scene,this.camera);r.ctx.globalCompositeOperation='copy';r.ctx.drawImage(this.renderer.domElement,0,384-pixels,pixels,pixels,0,0,pixels,pixels);this.scene.remove(root);
   r.last=now;r.dirty=false;if(!art.dataset.modelReady){art.dataset.modelReady='true';art.dataset.modelVersion='shared-3d-v1'}
  }
  this.dirty=false;this.lastFrame=now;if(alive)this.request();
 }
 dispose(){this.pause();this.observer.disconnect();this.resizeObserver.disconnect();for(const r of this.records.values())clearTimeout(r.timer);this.records.clear();for(const {root}of this.models.values())disposePerson(root);this.models.clear();this.environment.dispose();this.renderer.dispose()}
}
