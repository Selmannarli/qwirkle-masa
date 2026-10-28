export const BOT_WAIT_MS=10000;
export const BOT_PLAYERS=Array.from({length:5},(_,i)=>({id:String(900000000001+i),tag:String(99001+i),name:'Player '+(99001+i),bot:true}));
export const MATCH_TIMERS=Object.freeze([30,60,120,43200]);
export function matchTimer(value=60){const seconds=Number(value);if(!MATCH_TIMERS.includes(seconds))throw Error('Geçersiz maç süresi.');return seconds}
export function serverBotDelay(seconds,random=Math.random){const sample=Math.max(0,Math.min(1,random()));return Math.round(seconds>=43200?2000+sample*598000:(seconds||60)*1000*(1/6+sample*2/3))}
// Persist this plan with the room; polling and process restarts cannot reroll it.
export function planBotTurn(game,previous,now=Date.now(),random=Math.random){
 if(previous?.revision===game.revision&&previous?.actor===game.turn)return previous;
 return {revision:game.revision,actor:game.turn,at:Math.min(now+serverBotDelay(game.turnSeconds,random),game.turnDeadline?Math.max(now,game.turnDeadline-1500):Infinity)};
}
export class Matchmaker {
 constructor({createMatch,findMatch,clock=Date.now,waitMs=BOT_WAIT_MS}){this.queue=new Map();this.createMatch=createMatch;this.findMatch=findMatch;this.clock=clock;this.waitMs=waitMs}
 enter(player,seconds=60){seconds=matchTimer(seconds);const active=this.findMatch(player.uid);if(active)return {status:'matched',match:active};let entry=this.queue.get(player.uid);if(entry&&entry.seconds!==seconds){this.queue.delete(player.uid);entry=null}if(!entry){entry={player,seconds,joined:this.clock(),seen:this.clock()};this.queue.set(player.uid,entry)}else{entry.seen=this.clock();entry.player=player}this.tick();return this.status(player.uid)}
 status(uid){const active=this.findMatch(uid);if(active){this.queue.delete(uid);return {status:'matched',match:active}}const e=this.queue.get(uid);if(!e)return {status:'idle'};return {status:'searching',turnSeconds:e.seconds,joinedAt:e.joined,serverNow:this.clock(),botAt:e.joined+this.waitMs,botsBusy:this.clock()-e.joined>=this.waitMs}}
 poll(player){const e=this.queue.get(player.uid);if(e)e.seen=this.clock();this.tick();return this.status(player.uid)}
 cancel(uid){const active=this.findMatch(uid);if(active)return {status:'matched',match:active};this.queue.delete(uid);return {status:'idle'}}
 tick(){const now=this.clock();for(const [uid,e] of this.queue)if(now-e.seen>35000||this.findMatch(uid))this.queue.delete(uid);
 for(const seconds of MATCH_TIMERS){const entries=[...this.queue.values()].filter(e=>e.seconds===seconds);while(entries.length>=2){const a=entries.shift(),b=entries.shift();if(this.createMatch(a.player,b.player,seconds)){this.queue.delete(a.player.uid);this.queue.delete(b.player.uid)}else break}}
 for(const e of this.queue.values()){if(now-e.joined<this.waitMs)continue;const bot=BOT_PLAYERS.find(b=>!this.findMatch('bot:'+b.id));if(!bot)break;if(this.createMatch(e.player,{...bot,uid:'bot:'+bot.id},e.seconds)){this.queue.delete(e.player.uid)}}
 }
}
