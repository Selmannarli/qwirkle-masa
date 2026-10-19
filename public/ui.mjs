export const COLORS=['#f36a78','#e56b14','#edcb00','#38ad89','#359ed3','#9971d4'];
export const COLOR_NAMES=['Mercan','Turuncu','Sarı','Yeşil','Mavi','Mor'];
export const SHAPE_NAMES=['Daire','Kare','Baklava','Yıldız','Yonca','Işın'];
export const SHAPE_PATHS=['M34 20A14 14 0 1 0 6 20A14 14 0 1 0 34 20Z','M11 7H29Q33 7 33 11V29Q33 33 29 33H11Q7 33 7 29V11Q7 7 11 7Z','M20 3 37 20 20 37 3 20Z','M20 2 25 14 38 20 25 26 20 38 15 26 2 20 15 14Z','M20 9C20-2 1 0 4 13C-5 19 2 33 13 29C14 43 31 41 30 28C44 30 44 12 31 12C37 0 20-4 20 9Z','M20 1 25 10 34 6 30 15 39 20 30 25 34 34 25 30 20 39 15 30 6 34 10 25 1 20 10 15 6 6 15 10Z'];
export const SHAPES=SHAPE_PATHS.map(d=>'<path d="'+d+'"/>');
const paths={
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 8.7a2.6 2.6 0 0 1 5 1c0 1.8-2.5 2-2.5 3.8M12 17h.01"/>',
 sound:'<path d="m11 4-5 4H3v8h3l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',mute:'<path d="m11 4-5 4H3v8h3l5 4V4Zm5 5 5 6m0-6-5 6"/>',
 settings:'<path d="m10 3-1 3-3 1-3 1 1 4-1 4 3 1 3 1 1 3h4l1-3 3-1 3-1-1-4 1-4-3-1-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3m2-15a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',spark:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>',
 game:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bot:'<rect x="4" y="7" width="16" height="13" rx="4"/><path d="M12 3v4M8 12v2m8-2v2m-7 3h6M1 12v4m22-4v4"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
 shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
 refresh:'<path d="M20 7a9 9 0 1 0 1 9M20 3v5h-5"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',lock:'<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
 copy:'<rect x="8" y="8" width="12" height="13" rx="3"/><path d="M15 4H6a3 3 0 0 0-3 3v9"/>',link:'<path d="m9 15 6-6m-7 9-1 1a4.3 4.3 0 0 1-6-6l5-5a4.3 4.3 0 0 1 6 0m0 8a4.3 4.3 0 0 0 6 0l5-5a4.3 4.3 0 0 0-6-6l-1 1" transform="translate(1 0) scale(.9)"/>',
 history:'<path d="M3 8a9 9 0 1 1-1 8M3 3v6h6m3-2v5l3 2"/>',bag:'<path d="M8 3h8l-2 5h-4L8 3Zm2 5C7 11 3 14 3 17c0 4 4 4 9 4s9 0 9-4c0-3-4-6-7-9H10Z"/>',
 target:'<circle cx="12" cy="12" r="6"/><path d="M12 2v5m0 10v5M2 12h5m10 0h5"/>',cube:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10L3 7m9 5 9-5m-9 5v10"/>',expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
 check:'<path d="m5 12 5 5L20 7"/>',undo:'<path d="M4 10h10a6 6 0 0 1 0 12M4 10l6-6m-6 6 6 6" transform="translate(0 -2)"/>',bulb:'<path d="M9 18h6m-5 3h4m-5-6a7 7 0 1 1 6 0v3H9v-3Z"/>',swap:'<path d="M3 7h17l-4-4m4 4-4 4M21 17H4l4-4m-4 4 4 4"/>',
 close:'<path d="m6 6 12 12M18 6 6 18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',moon:'<path d="M21 14A9 9 0 0 1 10 3a9 9 0 1 0 11 11Z"/>',
 trophy:'<path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-5 0h10"/>',home:'<path d="m3 11 9-8 9 8v10h-7v-7h-4v7H3V11Z"/>',door:'<path d="M14 3H4v18h10m-3-9h11m-4-4 4 4-4 4"/>',heart:'<path d="M12 21 3 12A6 6 0 0 1 12 4a6 6 0 0 1 9 8l-9 9Z"/>'
};
export function icon(name){return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.spark}</svg>`}
export function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(n=>{if(n.querySelector(':scope > svg'))return;n.insertAdjacentHTML('afterbegin',icon(n.dataset.icon))})}
export function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
export function tileElement(t,opts={}){const n=node('button','tile'+(opts.used?' used':'')+(opts.selected?' selected':'')+(opts.exchange?' exchange-selected':''));n.setAttribute('aria-label',`${COLOR_NAMES[t.c]} ${SHAPE_NAMES[t.s]}`);n.setAttribute('aria-pressed',String(!!opts.selected||!!opts.exchange));n.innerHTML=`<span class="tile-face"><svg viewBox="0 0 40 40" fill="${COLORS[t.c]}" aria-hidden="true">${SHAPES[t.s]}</svg></span>`;n.title=COLOR_NAMES[t.c]+' '+SHAPE_NAMES[t.s];n.dataset.tile=t.id||'';if(opts.number){const number=node('span','tile-number',opts.number);number.setAttribute('aria-hidden','true');n.append(number)}return n}
export function avatar(name,index=0,robot=false){const a=node('div','avatar avatar-'+index);a.setAttribute('aria-hidden','true');a.innerHTML=robot?icon('bot'):`<svg viewBox="0 0 48 48"><path fill="currentColor" d="M24 3C39-1 49 17 44 32c-3 12-18 17-31 10C-1 35-1 12 12 6c4-2 7-2 12-3Z"/><ellipse cx="17" cy="22" rx="2.3" ry="3.2" fill="#392b61"/><ellipse cx="31" cy="22" rx="2.3" ry="3.2" fill="#392b61"/><path d="M19 31q5 5 10-1" fill="none" stroke="#392b61" stroke-width="2.4" stroke-linecap="round"/></svg>`;return a}
export class Sound {
 constructor(enabled=true){this.enabled=enabled;this.ctx=null}
 tone(f,time,duration=.09,type='sine',gain=.1){if(!this.enabled)return;try{this.ctx??=new (window.AudioContext||window.webkitAudioContext)();this.ctx.resume().catch(()=>{});const o=this.ctx.createOscillator(),g=this.ctx.createGain(),at=this.ctx.currentTime+time;o.type=type;o.frequency.setValueAtTime(f,at);g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(gain,at+.008);g.gain.exponentialRampToValueAtTime(.0001,at+duration);o.connect(g);g.connect(this.ctx.destination);o.start(at);o.stop(at+duration+.01)}catch{}}
 play(kind){if(kind==='place'){this.tone(640,0,.045,'triangle',.09);this.tone(260,.015,.06,'sine',.09)}else if(kind==='select')this.tone(530,0,.035,'sine',.045);else if(kind==='error')this.tone(170,0,.1,'triangle',.06);else if(kind==='win'||kind==='renkio'){[523,659,784,1047].forEach((f,i)=>this.tone(f,i*.09,.28,'sine',.09))}else{this.tone(660,0,.12,'sine',.07);this.tone(880,.07,.18,'sine',.06)}}
}
