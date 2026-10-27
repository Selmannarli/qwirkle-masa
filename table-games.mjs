import {createHash,randomBytes} from 'node:crypto';

export const RPS_CHOICES=['rock','paper','scissors'];
const INVITE_MS=120000,ROUND_MS=60000,RESULT_MS=45000,START_COOLDOWN_MS=5000;
export const tableSeatId=seat=>createHash('sha256').update(seat.token).digest('hex').slice(0,16);
const activeSeats=room=>room.seats.filter(s=>!s.kicked&&!s.bot);
function member(room,actor){const seat=room.seats[actor];if(!Number.isInteger(actor)||!seat||seat.kicked||seat.bot)throw Error('Bu masada bir oyuncu gerekli.');return {seat,id:tableSeatId(seat)}}
function waiting(room){if(room.game)throw Error('Mini oyun yalnızca bekleme masasında oynanabilir.');}
function finish(game,reason,now){game.status='finished';game.reason=reason;game.expiresAt=now+RESULT_MS;}
function beginRound(game,now){if(game.participants.some(p=>p.state==='invited'))return;if(game.participants.filter(p=>p.state==='accepted').length<2){finish(game,'declined',now);return}game.status='choosing';game.expiresAt=now+ROUND_MS;}
function settle(game,now){const players=game.participants.filter(p=>p.state==='accepted');if(players.some(p=>!RPS_CHOICES.includes(p.choice)))return;const choices=new Set(players.map(p=>p.choice)),beats={rock:'scissors',paper:'rock',scissors:'paper'};for(const p of players)p.result=choices.size!==2?'draw':choices.has(beats[p.choice])?'win':'lose';finish(game,'played',now)}

// Internal choices remain in durable room state only. All outgoing state uses tableGameView.
export function startTableGame(room,actor,targets,now=Date.now()){
 waiting(room);expireTableGame(room,now);const {id}=member(room,actor),available=activeSeats(room).filter(s=>tableSeatId(s)!==id);
 if(room.tableGame&&room.tableGame.status!=='finished')throw Error('Masadaki mini oyunun bitmesini bekle.');
 const last=room.tableGameStarts?.[id];if(Number.isFinite(last)&&now-last<START_COOLDOWN_MS)throw Error('Yeni mini oyun için biraz bekle.');
 if(targets!==undefined&&(!Array.isArray(targets)||targets.length<1||targets.length>3||new Set(targets).size!==targets.length||targets.some(v=>typeof v!=='string'||!available.some(s=>tableSeatId(s)===v))))throw Error('Mini oyun için masadaki oyuncuları seç.');
 const invited=targets===undefined?available:available.filter(s=>targets.includes(tableSeatId(s)));if(!invited.length)throw Error('Mini oyun için masaya bir arkadaş davet et.');
 room.tableGameStarts=Object.fromEntries(Object.entries(room.tableGameStarts||{}).filter(([key])=>activeSeats(room).some(s=>tableSeatId(s)===key)));room.tableGameStarts[id]=now;
 room.tableGame={id:randomBytes(12).toString('hex'),kind:'rps',creator:id,status:'inviting',createdAt:now,expiresAt:now+INVITE_MS,dismissed:[],participants:[{seatId:id,state:'accepted'},...invited.map(s=>({seatId:tableSeatId(s),state:'invited'}))]};return room.tableGame;
}
function current(room,actor,id,now){waiting(room);expireTableGame(room,now);const own=member(room,actor).id,game=room.tableGame;if(!game||game.id!==id)throw Error('Bu mini oyun artık açık değil.');const participant=game.participants.find(p=>p.seatId===own);if(!participant)throw Error('Bu mini oyuna davet edilmedin.');return {game,participant,own}}
export function respondTableGame(room,actor,id,accept,now=Date.now()){
 const {game,participant}=current(room,actor,id,now);if(typeof accept!=='boolean'||game.status!=='inviting'||participant.state!=='invited')throw Error('Mini oyun daveti artık açık değil.');participant.state=accept?'accepted':'declined';beginRound(game,now);return game;
}
export function pickTableGame(room,actor,id,choice,now=Date.now()){
 const {game,participant}=current(room,actor,id,now);if(game.status!=='choosing'||participant.state!=='accepted'||!RPS_CHOICES.includes(choice))throw Error('Taş, kâğıt veya makas seç.');if(participant.choice){if(participant.choice===choice)return game;throw Error('Seçimin kilitlendi.');}participant.choice=choice;settle(game,now);return game;
}
export function cancelTableGame(room,actor,id,now=Date.now()){
 const {game,own}=current(room,actor,id,now);if(game.creator!==own)throw Error('Mini oyunu yalnızca daveti gönderen oyuncu iptal edebilir.');if(!['inviting','choosing'].includes(game.status))throw Error('Bu mini oyun zaten bitti.');finish(game,'cancelled',now);return game;
}
export function dismissTableGame(room,actor,id,now=Date.now()){
 const {game,own}=current(room,actor,id,now);if(game.status!=='finished')throw Error('Mini oyun henüz bitmedi.');if(!game.dismissed.includes(own))game.dismissed.push(own);return game;
}
export function expireTableGame(room,now=Date.now()){
 const game=room.tableGame;if(!game)return false;if(room.game){delete room.tableGame;return true}
 if(game.status==='finished'){if(now>=game.expiresAt){delete room.tableGame;return true}return false}
 const ids=new Set(activeSeats(room).map(tableSeatId));if(game.participants.some(p=>p.state!=='declined'&&!ids.has(p.seatId))){finish(game,'left',now);return true}
 if(now>=game.expiresAt){finish(game,'expired',now);return true}return false;
}
export function tableGameView(room,actor,now=Date.now()){
 const game=room.tableGame,seat=room.seats[actor];if(room.game||!game||!seat||seat.kicked||game.status==='finished'&&now>=game.expiresAt)return null;const own=tableSeatId(seat);if(game.dismissed.includes(own))return null;
 const names=new Map(room.seats.filter(s=>!s.kicked).map(s=>[tableSeatId(s),s.name]));
 return {id:game.id,kind:game.kind,status:game.status,creator:game.creator,createdAt:game.createdAt,expiresAt:game.expiresAt,reason:game.reason,ownChoice:game.participants.find(p=>p.seatId===own)?.choice,participants:game.participants.map(p=>({seatId:p.seatId,name:names.get(p.seatId)||'',state:p.state,picked:!!p.choice,...(game.status==='finished'&&game.reason==='played'?{choice:p.choice,result:p.result}:{})}))};
}
