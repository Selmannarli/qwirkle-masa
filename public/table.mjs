import {tileElement} from './ui.mjs';
import {avatarArt,readAvatar} from './profile-art.mjs';
import {t} from './i18n.mjs';
export function tableSeats(seats,own){
 const list=seats.filter(s=>!s.kicked).slice(0,4),index=list.findIndex(s=>s.playerId===own);
 const ordered=Array(4).fill(null);if(index>=0){ordered[3]=list[index];list.filter((_,i)=>i!==index).forEach((s,i)=>ordered[i]=s)}else list.forEach((s,i)=>ordered[i]=s);
 return ordered;
}
export function renderTable(host,seats=[],{own}={}){
 if(!host)return;const ordered=tableSeats(seats,own),stamp=JSON.stringify({ordered,own,avatar:readAvatar()});
 if(host.dataset.tableStamp===stamp)return;host.dataset.tableStamp=stamp;host.replaceChildren();
 const background=document.createElement('img');background.className='table-model';background.src='/assets/table-v2.webp';background.alt='';background.width=1200;background.height=800;host.append(background);const front=background.cloneNode();front.className='table-model table-foreground';host.append(front);const tiles=document.createElement('div');tiles.className='table-scatter';tiles.setAttribute('aria-hidden','true');for(const [c,shape]of [[0,0],[2,2],[3,4],[5,5]]){const tile=tileElement({c,s:shape});tile.disabled=true;tile.tabIndex=-1;tiles.append(tile)}host.append(tiles);
 ordered.forEach((seat,i)=>{const n=document.createElement('div');n.className='table-player table-seat-'+i+(seat?' occupied':' empty');
 if(seat){const art=document.createElement('button');art.type='button';art.className='table-character illustrated-avatar';art.setAttribute('aria-label',seat.name+' · '+t('Canlandır'));art.dataset.avatarName=seat.name;art.innerHTML=avatarArt(seat.playerId===own?readAvatar():seat.avatar,seat.playerId||seat.name);const face=Number(art.querySelector('.character-art').dataset.character),sprite=art.querySelector('.character-art');sprite.dataset.seated='true';sprite.style.setProperty('--seat-image',"url('/assets/seated-"+(face<3?'a':'b')+".webp')");sprite.style.setProperty('--seat-x',(face%3)*50+'%');const label=document.createElement('span');label.className='table-player-name';label.textContent=seat.name;n.append(art,label)}else{const marker=document.createElement('span');marker.className='empty-table-seat';marker.textContent='+';marker.setAttribute('aria-label',t('Boş yer'));n.append(marker)}host.append(n)});
}
