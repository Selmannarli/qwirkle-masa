export const BOT_WAIT_MS=180000;
export const BOT_PLAYERS=Array.from({length:5},(_,i)=>({id:String(900000000001+i),name:'Player '+(900000000001+i),bot:true}));
export class Matchmaker {
 constructor({createMatch,findMatch,clock=Date.now,waitMs=BOT_WAIT_MS}){this.queue=new Map();this.createMatch=createMatch;this.findMatch=findMatch;this.clock=clock;this.waitMs=waitMs}
 enter(player){const active=this.findMatch(player.uid);if(active)return {status:'matched',match:active};let entry=this.queue.get(player.uid);if(!entry){entry={player,joined:this.clock(),seen:this.clock()};this.queue.set(player.uid,entry)}else{entry.seen=this.clock();entry.player=player}this.tick();return this.status(player.uid)}
 status(uid){const active=this.findMatch(uid);if(active){this.queue.delete(uid);return {status:'matched',match:active}}const e=this.queue.get(uid);if(!e)return {status:'idle'};return {status:'searching',joinedAt:e.joined,serverNow:this.clock(),botAt:e.joined+this.waitMs,botsBusy:this.clock()-e.joined>=this.waitMs}}
 poll(player){const e=this.queue.get(player.uid);if(e)e.seen=this.clock();this.tick();return this.status(player.uid)}
 cancel(uid){const active=this.findMatch(uid);if(active)return {status:'matched',match:active};this.queue.delete(uid);return {status:'idle'}}
 tick(){const now=this.clock();for(const [uid,e] of this.queue)if(now-e.seen>35000||this.findMatch(uid))this.queue.delete(uid);
 let entries=[...this.queue.values()];while(entries.length>=2){const a=entries.shift(),b=entries.shift();if(this.createMatch(a.player,b.player)){this.queue.delete(a.player.uid);this.queue.delete(b.player.uid)}else break}
 for(const e of this.queue.values()){if(now-e.joined<this.waitMs)continue;const bot=BOT_PLAYERS.find(b=>!this.findMatch('bot:'+b.id));if(!bot)break;if(this.createMatch(e.player,{...bot,uid:'bot:'+bot.id})){this.queue.delete(e.player.uid)}}
 }
}
