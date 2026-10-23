export const key=(x,y)=>`${x},${y}`;
export const dirs=[[1,0],[0,1]];
export function bag(){let a=[];for(let c=0;c<6;c++)for(let s=0;s<6;s++)for(let n=0;n<3;n++)a.push({id:`${c}${s}${n}`,c,s});for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function line(board,x,y,dx,dy){while(board[key(x-dx,y-dy)]){x-=dx;y-=dy}let a=[];while(board[key(x,y)]){a.push({...board[key(x,y)],x,y});x+=dx;y+=dy}return a}
function legal(a){return a.length<=6&&new Set(a.map(t=>`${t.c}:${t.s}`)).size===a.length&&(a.every(t=>t.c===a[0].c)||a.every(t=>t.s===a[0].s))}
export function validate(board,hand,placements){
 if(!Array.isArray(placements)||!placements.length||placements.length>6)return {error:'Önce elinden bir taş seçip masaya yerleştir.'};
 let b={...board},seen=new Set(),tiles=[];
 for(const p of placements){if(!Number.isInteger(p.x)||!Number.isInteger(p.y)||Math.abs(p.x)>110||Math.abs(p.y)>110)return {error:'Bu konuma taş yerleştirilemez.'};let t=hand.find(t=>t.id===p.id);if(!t||seen.has(p.id)||b[key(p.x,p.y)])return {error:'Taş ya da konum geçerli değil.'};seen.add(p.id);tiles.push({...t,x:p.x,y:p.y});b[key(p.x,p.y)]=t}
 if(tiles.length>1&&!tiles.every(t=>t.x===tiles[0].x)&&!tiles.every(t=>t.y===tiles[0].y))return {error:'Bu turdaki bütün taşlar aynı satırda veya sütunda olmalı.'};
 if(tiles.length>1){const dx=tiles.every(t=>t.y===tiles[0].y)?1:0,dy=1-dx;const a=line(b,tiles[0].x,tiles[0].y,dx,dy);if(!tiles.every(t=>a.some(z=>z.x===t.x&&z.y===t.y)))return {error:'Taşların arasında boşluk kalamaz.'};if(!legal(tiles))return {error:'Oynadığın taşlar aynı renk veya aynı şekli paylaşmalı; tekrar olamaz.'}}
 if(Object.keys(board).length&&!tiles.some(t=>[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>board[key(t.x+dx,t.y+dy)])))return {error:'Hamleni masadaki taşlara kenardan bağla.'};
 let lines=new Map();
 for(const t of tiles)for(const [dx,dy] of dirs){const a=line(b,t.x,t.y,dx,dy);if(!legal(a))return {error:'Her çizgi aynı renkte farklı şekillerden veya aynı şekilde farklı renklerden oluşmalı. En fazla 6 taş olabilir.'};if(a.length>1)lines.set(`${dx}:${a[0].x},${a[0].y}`,a)}
 let score=0,qwirkles=0;for(const a of lines.values()){score+=a.length;if(a.length===6){score+=6;qwirkles++}}if(!lines.size)score=1;
 return {board:b,score,qwirkles};
}
export function largest(hand){let best=[];for(const attr of ['c','s'])for(let i=0;i<6;i++){let a=hand.filter(t=>t[attr]===i),u=[...new Map(a.map(t=>[`${t.c}${t.s}`,t])).values()];if(u.length>best.length)best=u}return best}
export function createGame(names,{turnSeconds=0}={}){let b=bag();let players=names.map(name=>({name,hand:b.splice(-6),score:0}));let turn=0;players.forEach((p,i)=>{if(largest(p.hand).length>largest(players[turn].hand).length)turn=i});return {board:{},bag:b,players,turn,started:true,over:false,opening:largest(players[turn].hand).length,history:[],timeoutCounts:names.map(()=>0),passes:0,revision:1,lastMoves:{},turnSeconds,turnDeadline:turnSeconds?Date.now()+turnSeconds*1000:null}}
export function play(g,actor,placements){if(g.timeoutDecision)throw Error('Önce süre aşımı kararını bekle.');if(g.over||g.players[actor]?.eliminated||g.turn!==actor)throw Error('Şu an senin sıran değil.');let p=g.players[actor];let r=validate(g.board,p.hand,placements);if(r.error)throw Error(r.error);if(!Object.keys(g.board).length&&placements.length!==g.opening)throw Error(`Açılışta en büyük grubunu, ${g.opening} taşı oynamalısın.`);g.board=r.board;p.hand=p.hand.filter(t=>!placements.some(a=>a.id===t.id));p.score+=r.score;while(p.hand.length<6&&g.bag.length)p.hand.push(g.bag.pop());g.passes=0;g.timeouts=0;g.last=placements.map(p=>({...p}));g.lastMoves??={};g.lastMoves[actor]=g.last;g.history.unshift({name:p.name,score:r.score,qwirkles:r.qwirkles,tiles:placements.map(a=>{const t=r.board[key(a.x,a.y)];return {c:t.c,s:t.s}}),text:`${placements.length} taş oynadı`});if(!p.hand.length){p.score+=6;g.over=true;g.history.unshift({name:p.name,score:6,text:'Elini bitirdi · bitiş bonusu'})}next(g);return r}
export function exchange(g,actor,ids){if(g.timeoutDecision)throw Error('Önce süre aşımı kararını bekle.');if(g.over||g.players[actor]?.eliminated||g.turn!==actor)throw Error('Şu an senin sıran değil.');if(!Object.keys(g.board).length)throw Error('Önce açılış grubu oynanmalı.');let p=g.players[actor];if(!Array.isArray(ids)||!ids.length||new Set(ids).size!==ids.length||ids.length>g.bag.length||ids.some(id=>!p.hand.some(t=>t.id===id)))throw Error('Değiştirmek için torbadaki taş sayısını aşmayan taşlar seç.');let discarded=p.hand.filter(t=>ids.includes(t.id));p.hand=p.hand.filter(t=>!ids.includes(t.id));p.hand.push(...g.bag.splice(-ids.length));g.bag.push(...discarded);for(let i=g.bag.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[g.bag[i],g.bag[j]]=[g.bag[j],g.bag[i]]}g.passes=0;g.timeouts=0;g.history.unshift({name:p.name,score:0,text:`${ids.length} taş değiştirdi`});next(g)}
export function pass(g,actor){if(g.timeoutDecision)throw Error('Önce süre aşımı kararını bekle.');if(g.over||g.players[actor]?.eliminated||g.turn!==actor)throw Error('Şu an senin sıran değil.');if(g.bag.length)throw Error('Torba boşalmadan pas yerine taş değiştir.');if(bestMove(g.board,g.players[actor].hand))throw Error('Oynayabileceğin bir hamle var.');g.timeouts=0;g.passes++;g.history.unshift({name:g.players[actor].name,score:0,text:'Pas geçti'});if(g.passes>=g.players.filter(p=>!p.eliminated).length)g.over=true;next(g)}
function next(g){do{g.turn=(g.turn+1)%g.players.length}while(g.players[g.turn].eliminated&&!g.over);g.revision++;g.turnDeadline=g.turnSeconds&&!g.over?Date.now()+g.turnSeconds*1000:null}
export function bestMove(board,hand,opening=0){
 let best=null,count=0;const limit=18000;let starts=new Map();if(!Object.keys(board).length)starts.set('0,0',[0,0]);else for(const pos of Object.keys(board)){let [x,y]=pos.split(',').map(Number);for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]])if(!board[key(x+dx,y+dy)])starts.set(key(x+dx,y+dy),[x+dx,y+dy])}
 const unique=[...new Map(hand.map(t=>[`${t.c}${t.s}`,t])).values()];
 for(const [sx,sy] of starts.values())for(const [dx,dy] of dirs){
  function search(x,y,remaining,placed){if(++count>limit)return;if(placed.length){const r=validate(board,hand,placed);if(!r.error&&(!opening||placed.length===opening)&&(!best||r.score>best.score||r.score===best.score&&placed.length>best.placements.length))best={score:r.score,placements:placed.map(t=>({...t}))}}
   if(!remaining.length)return;while(board[key(x,y)]){x+=dx;y+=dy}if(Math.abs(x)>110||Math.abs(y)>110)return;
   for(const t of remaining){if(placed.length&&(!placed.every(p=>hand.find(h=>h.id===p.id).c===t.c)&&!placed.every(p=>hand.find(h=>h.id===p.id).s===t.s)))continue;const np=[...placed,{id:t.id,x,y}],r=validate(board,hand,np);if(!r.error)search(x+dx,y+dy,remaining.filter(a=>a.id!==t.id),np)}
  }search(sx,sy,unique,[]);if(count>limit)return best
 }return best
}

export function resignGame(g,actor,text='Pes etti'){
 if(!g||g.over||!g.players[actor]||g.players[actor].eliminated)return false;
 g.players[actor].eliminated=true;g.passes=0;
 g.history.unshift({name:g.players[actor].name,score:0,text,eliminated:true});
 const remaining=g.players.map((p,i)=>p.eliminated?-1:i).filter(i=>i>=0);
 if(remaining.length===1){g.over=true;g.winner=remaining[0];g.turnDeadline=null;g.revision++}
 else if(g.turn===actor){next(g);if(!Object.keys(g.board).length)g.opening=largest(g.players[g.turn].hand).length}
 else g.revision++;
 if(g.timeoutDecision){if(g.over||g.timeoutDecision.actor===actor)g.timeoutDecision=null;else if(g.players[g.timeoutDecision.decider]?.eliminated)g.timeoutDecision.decider=g.turn;if(g.timeoutDecision)g.turnDeadline=null;else if(!g.over)g.turnDeadline=g.turnSeconds?Date.now()+g.turnSeconds*1000:null;}
 return true;
}
export function expireTurn(g,now=Date.now()){
 if(g.over||g.timeoutDecision||!g.turnSeconds||!g.turnDeadline||now<g.turnDeadline)return false;
 const actor=g.turn;g.timeoutCounts??=g.players.map(()=>0);g.timeoutCounts[actor]=(g.timeoutCounts[actor]||0)+1;
 g.history.unshift({name:g.players[actor].name,score:0,text:'Süresi doldu · '+g.timeoutCounts[actor]+'/3',timeout:true});next(g);
 if(g.timeoutCounts[actor]>=3){g.timeoutDecision={actor,decider:g.turn};g.turnDeadline=null;}
 if(!Object.keys(g.board).length)g.opening=largest(g.players[g.turn].hand).length;
 if(!g.timeoutDecision)g.turnDeadline=now+g.turnSeconds*1000;return true;
}
export function resolveTimeout(g,actor,forfeit,now=Date.now()){
 const decision=g.timeoutDecision;if(!decision||g.over||actor!==decision.decider||g.players[actor]?.eliminated)throw Error('Bu karar sana ait değil.');
 if(typeof forfeit!=='boolean')throw Error('Bir seçenek seç.');g.timeoutDecision=null;
 if(forfeit)resignGame(g,decision.actor,'3. süre aşımı · rakibin kararıyla elendi');
 else{g.timeoutCounts[decision.actor]=0;g.history.unshift({name:g.players[actor].name,score:0,text:g.players[decision.actor].name+' ile devam etmeyi seçti'});g.revision++;}
 g.turnDeadline=g.over?null:g.turnSeconds?now+g.turnSeconds*1000:null;return true;
}
