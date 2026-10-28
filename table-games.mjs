import {createHash,randomBytes} from 'node:crypto';
export const RPS_CHOICES=['rock','paper','scissors'];
export const tableSeatId=seat=>createHash('sha256').update(seat.token).digest('hex').slice(0,16);
function member(room,actor){if(room.game||room.closedAt)throw Error('Mini oyun yalnızca lobide oynanabilir.');const seat=room.seats[actor];if(!seat||seat.kicked||seat.bot)throw Error('Masa üyeliği bulunamadı.');return tableSeatId(seat)}
function finish(game,now){const selected=game.participants.filter(p=>p.choice),types=new Set(selected.map(p=>p.choice)),beats={rock:'scissors',paper:'rock',scissors:'paper'};for(const p of game.participants){p.state=p.choice?'accepted':'skipped';if(p.choice)p.result=selected.length<2||types.size!==2?'draw':types.has(beats[p.choice])?'win':'lose'}game.status='finished';game.reason=selected.length<2?'alone':'played';game.expiresAt=now+8000;}
export function pickTableGame(room,actor,id,choice,now=Date.now(),receipt=null){
 const own=member(room,actor);if(!RPS_CHOICES.includes(choice))throw Error('Taş, kâğıt veya makas seç.');if(id&&room.tableGame?.id!==id)throw Error('Bu tur bitti. Yeniden seçim yapabilirsin.');expireTableGame(room,now);room.tableReceipts??=[];if(receipt&&room.tableReceipts.some(r=>r.id===receipt&&r.seat===own))return room.tableGame;
 let game=room.tableGame;if(id&&game?.id===id&&game.status==='finished')return game;if(id&&(!game||game.id!==id||game.status!=='choosing'))throw Error('Bu tur bitti. Yeniden seçim yapabilirsin.');
 if(!game||game.status==='finished'){if(room.seats.filter(s=>!s.kicked&&!s.bot).length<2)throw Error('Önce masaya bir arkadaş davet et.');game=room.tableGame={id:randomBytes(12).toString('hex'),mode:'quick-v2',kind:'rps',creator:own,status:'choosing',createdAt:now,expiresAt:null,participants:room.seats.filter(s=>!s.kicked&&!s.bot).map(s=>({seatId:tableSeatId(s),state:'pending'}))};}
 const p=game.participants.find(p=>p.seatId===own);if(!p)throw Error('Sonraki tura katılabilirsin.');if(p.choice&&p.choice!==choice)throw Error('Seçimin kilitlendi.');p.choice=choice;p.state='accepted';if(!game.expiresAt&&game.participants.filter(p=>p.choice).length>=2&&game.participants.length>2)game.expiresAt=now+3000;if(receipt){room.tableReceipts.push({id:receipt,seat:own});room.tableReceipts=room.tableReceipts.slice(-40)}if(game.participants.every(p=>p.choice))finish(game,now);return game;
}
export function expireTableGame(room,now=Date.now()){
 const g=room.tableGame;if(!g)return false;if(room.game||room.closedAt||g.mode!=='quick-v2'){delete room.tableGame;return true}if(!g.expiresAt||now<g.expiresAt)return false;if(g.status==='choosing')finish(g,now);else delete room.tableGame;return true;
}
export function tableGameView(room,actor,now=Date.now()){
 const g=room.tableGame,s=room.seats[actor];if(!g||g.mode!=='quick-v2'||room.game||room.closedAt||!s||g.status==='finished'&&now>=g.expiresAt)return null;const own=tableSeatId(s),names=new Map(room.seats.map(s=>[tableSeatId(s),s.name]));return {id:g.id,mode:g.mode,kind:g.kind,status:g.status,creator:g.creator,createdAt:g.createdAt,expiresAt:g.expiresAt,reason:g.reason,ownChoice:g.participants.find(p=>p.seatId===own)?.choice,participants:g.participants.map(p=>({seatId:p.seatId,name:names.get(p.seatId)||'',state:p.state,picked:!!p.choice,...(g.status==='finished'?{choice:p.choice,result:p.result}:{})}))};
}
export function startTableGame(){throw Error('Gamepad simgesinden doğrudan elini seç.')}
export function respondTableGame(){throw Error('Doğrudan taş, kâğıt veya makas seç.')}
export function cancelTableGame(room,actor,id){const own=member(room,actor);if(room.tableGame?.id!==id||room.tableGame.creator!==own)throw Error('Tur kapatılamadı.');delete room.tableGame;}
export function dismissTableGame(room,actor,id){member(room,actor);if(room.tableGame?.id===id&&room.tableGame.status==='finished')delete room.tableGame;}
