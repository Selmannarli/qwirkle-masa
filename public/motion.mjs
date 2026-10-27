import {t} from './i18n.mjs';
export const CHARACTER_CLIPS=['El salla','Selam ver','Göz kırp','Ayağını kaldır','Göz kırp ve eğil','Kollarını dalgalandır'].map(name=>({name,duration:1850}));
let portraits,loading,installed=false;
const requests=new WeakMap();
const reduced=()=>document.body?.dataset.motion==='reduced'||matchMedia('(prefers-reduced-motion: reduce)').matches;
async function portraitRuntime(){
 if(portraits)return portraits;
 if(!loading)loading=import('./table-engine.mjs').then(({CharacterPortraits})=>portraits=new CharacterPortraits({reduced})).catch(error=>{for(const art of document.querySelectorAll('.character-art'))art.dataset.modelState='unavailable';console.warn('Character renderer unavailable',error.message);return null});return loading;
}
export function playCharacter(host,mood='hello',remaining=null){
 const art=host?.matches?.('.character-art')?host:host?.querySelector?.('.character-art');if(!art)return null;const request={};requests.set(art,request);
 return portraitRuntime().then(studio=>{if(studio&&art.isConnected&&requests.get(art)===request){studio.play(art,mood,remaining);if(remaining===null)document.dispatchEvent(new CustomEvent('character-voice',{detail:{face:Number(art.dataset.character),mood}}));return studio}});
}
export function installCharacterMotion(root=document){
 if(installed)return;installed=true;let frame;
 const sync=async()=>{frame=null;const arts=[...root.querySelectorAll('.character-art')];if(!arts.length)return;const studio=await portraitRuntime();if(!studio)return;
  for(const avatar of root.querySelectorAll('.illustrated-avatar'))if(!avatar.hasAttribute('role')&&!avatar.parentElement?.closest('button,a,[role="button"]')){avatar.setAttribute('role','button');avatar.tabIndex=0;avatar.dataset.motionOnly='true';avatar.setAttribute('aria-label',(avatar.dataset.avatarName||t('Karakter'))+' · '+t('Canlandır'))}
  for(const art of arts)if(art.isConnected)studio.add(art);studio.prune();studio.invalidate();
 };
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(sync)};
 root.addEventListener('click',event=>{const host=event.target.closest?.('.illustrated-avatar,.home-portrait,.avatar-preview');if(host)playCharacter(host)},{capture:true});
 root.addEventListener('keydown',event=>{const host=event.target.closest?.('[data-motion-only="true"]');if(host&&['Enter',' '].includes(event.key)){event.preventDefault();host.click()}});
 new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-motion','open','class']});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)portraits?.pause();else schedule()});window.addEventListener('scroll',()=>portraits?.request(),{passive:true});window.addEventListener('resize',()=>portraits?.invalidate(),{passive:true});window.addEventListener('pagehide',()=>portraits?.pause());window.addEventListener('pageshow',schedule);matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change',schedule);schedule();
}

// Outcomes describe the character on screen, never the person viewing that character.
export function gameOutcomes(game){
 if(!game?.over||!Array.isArray(game.players))return [];
 const players=game.players,active=players.map((p,i)=>p.eliminated?-1:i).filter(i=>i>=0);
 if(!active.length)return players.map(()=>'lose');
 if(Number.isInteger(game.winner)&&active.includes(game.winner))return players.map((_,i)=>i===game.winner?'win':'lose');
 const score=i=>Number.isFinite(players[i].score)?players[i].score:0,highest=Math.max(...active.map(score)),leaders=active.filter(i=>score(i)===highest);
 return players.map((p,i)=>p.eliminated||!leaders.includes(i)?'lose':leaders.length>1?'draw':'win');
}
// Events are based on committed state. A final result overrides the last tile/timeout.
export function characterEvents(previous,next){
 if(!previous||!next||previous.matchId!==next.matchId||previous.revision===next.revision)return [];
 if(next.over){
  const outcomes=gameOutcomes(next);if(previous.over&&JSON.stringify(outcomes)===JSON.stringify(gameOutcomes(previous)))return [];
  return outcomes.map((mood,seat)=>({seat,mood}));
 }
 const events=new Map(),put=(seat,mood)=>events.set(seat,{seat,mood});
 next.timeoutCounts?.forEach((n,i)=>{if(n>(previous.timeoutCounts?.[i]||0))put(i,'sad')});
 const h=next.history?.[0];
 if(h&&JSON.stringify(h)!==JSON.stringify(previous.history?.[0])&&h.score>0){
  const names=next.players.map((p,i)=>p.name===h.name?i:-1).filter(i=>i>=0),actor=Number.isInteger(h.actor)?h.actor:names.length===1?names[0]:-1;
  if(actor>=0&&actor<next.players.length&&!next.players[actor].eliminated){put(actor,'celebrate');if(h.qwirkles||h.score>=12)next.players.forEach((p,i)=>{if(i!==actor&&!p.eliminated)put(i,'sad')})}
 }
 next.players.forEach((p,i)=>{if(p.eliminated&&!previous.players?.[i]?.eliminated)put(i,'lose')});
 return [...events.values()];
}

export class CharacterReactions{
 constructor(){this.snapshot=null;this.pending=new Map()}
 update(game,now=performance.now()){
  if(this.snapshot?.matchId!==game?.matchId)this.pending.clear();
  for(const event of characterEvents(this.snapshot,game))this.pending.set(event.seat,{...event,until:now+({celebrate:2650,win:2800,lose:2400,draw:1800}[event.mood]||2150)});
  this.snapshot={matchId:game?.matchId,revision:game?.revision,over:game?.over,winner:game?.winner,players:game?.players?.map(p=>({name:p.name,score:p.score,eliminated:!!p.eliminated})),history:game?.history?.slice(0,1),timeoutCounts:game?.timeoutCounts?.slice()};
  for(const [seat,event]of this.pending)if(event.until<=now)this.pending.delete(seat);
  return [...this.pending.values()].map(event=>({...event,remaining:event.until-now}));
 }
}
const reactions=new CharacterReactions();
let heroKey=null,heroNode=null;
function scoreHero(game){
 const h=game.history?.[0],key=game.matchId+':'+game.revision;if(heroKey===null||!heroKey.startsWith(game.matchId+':')){heroKey=key;return}if(heroKey===key)return;heroKey=key;if(!h||!h.tiles?.length||h.score<12)return;if(document.hidden||document.body.dataset.motion==='reduced'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const actor=Number.isInteger(h.actor)?h.actor:game.players.findIndex(p=>p.name===h.name),source=document.querySelector('#scores [data-seat="'+actor+'"] .character-art');if(!source)return;heroNode?.remove();const rect=source.getBoundingClientRect(),hero=document.createElement('div'),art=source.cloneNode(false);hero.className='character-hero';hero.setAttribute('aria-hidden','true');hero.append(art);hero.style.left=(innerWidth/2-78)+'px';hero.style.top=(innerHeight*.40-95)+'px';document.body.append(hero);heroNode=hero;const dx=rect.left+rect.width/2-innerWidth/2,dy=rect.top+rect.height/2-innerHeight*.40;playCharacter(art,'impact');const motion=hero.animate([{transform:`translate(${dx}px,${dy}px) scale(.35)`,opacity:0},{transform:'translate(0,0) scale(1)',opacity:1,offset:.22},{transform:'translate(0,0) scale(1.16)',opacity:1,offset:.45},{transform:'translate(0,0) scale(1)',opacity:1,offset:.78},{transform:`translate(${dx}px,${dy}px) scale(.35)`,opacity:0}],{duration:2200,easing:'cubic-bezier(.22,.65,.32,1)'});motion.finished.finally(()=>{hero.remove();if(heroNode===hero)heroNode=null});
}
export function reactToGame(game){
 scoreHero(game);
 for(const event of reactions.update(game)){
  const host=document.querySelector('#scores [data-seat="'+event.seat+'"] .illustrated-avatar'),art=host?.querySelector('.character-art');
  const mood=event.mood==='sad'&&!game.over?(game.history?.[0]?.score>=24?'surprise':(game.timeoutCounts?.[event.seat]||0)>=2?'angry':'sad'):event.mood;if(art&&art.dataset.emotion!==mood)playCharacter(host,mood,Math.min(event.remaining,mood==='surprise'?1500:mood==='angry'?1800:event.remaining));
 }
}
