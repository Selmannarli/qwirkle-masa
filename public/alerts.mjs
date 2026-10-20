export class GameAlerts {
 constructor(notify){this.notify=notify;this.turnKey=null;this.chatKey=null;this.seen=new Set()}
 turn(key,game,me){if(!game)return;const next={turn:game.turn,over:game.over,revision:game.revision};if(key!==this.turnKey){this.turnKey=key;this.previous=next;return}const previous=this.previous;if(previous&&!game.over&&game.turn===me&&(previous.turn!==me||previous.over)&&game.revision!==previous.revision)this.notify('turn');this.previous=next}
 messages(key,messages,me,blocked=[]){if(key!==this.chatKey){this.chatKey=key;this.seen=new Set(messages.map(m=>m.id));return}let incoming=false;for(const m of messages){if(!this.seen.has(m.id)&&m.seat!==me&&!blocked.includes(m.seat))incoming=true;this.seen.add(m.id)}if(this.seen.size>200)this.seen=new Set(messages.map(m=>m.id));if(incoming)this.notify('message')}
}
