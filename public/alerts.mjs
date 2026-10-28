export class GameAlerts {
 constructor(notify){this.notify=notify;this.turnKey=null;this.chatKey=null;this.seen=new Set()}
 turn(key,game,me){if(!game)return;const next={turn:game.turn,over:game.over,revision:game.revision};if(key!==this.turnKey){this.turnKey=key;this.previous=next;return}const previous=this.previous;if(previous&&!game.over&&game.turn===me&&(previous.turn!==me||previous.over)&&game.revision!==previous.revision)this.notify('turn');this.previous=next}
 messages(key,messages,me,blocked=[]){if(key!==this.chatKey){this.chatKey=key;this.seen=new Set(messages.map(m=>m.id));return}let incoming=false;for(const m of messages){if(!this.seen.has(m.id)&&m.seat!==me&&!blocked.includes(m.seat))incoming=true;this.seen.add(m.id)}if(this.seen.size>200)this.seen=new Set(messages.map(m=>m.id));if(incoming)this.notify('message')}
}

export class TurnWarning {
 constructor(){this.seen=new Set();this.current=null}
 update(game,me,now,{visible=true,blocked=false}={}){
  const key=game?[game.matchId,game.turn,game.history?.length||0].join(':'):null;
  const eligible=visible&&!blocked&&game&&!game.over&&!game.timeoutDecision&&game.turn===me&&!game.players?.[me]?.eliminated&&game.turnSeconds>0&&game.turnDeadline>now;
  if(!eligible||this.current?.key!==key)this.current=null;
  if(eligible&&!this.current&&!this.seen.has(key)&&game.turnDeadline-now<=10000){this.seen.add(key);if(this.seen.size>100)this.seen.delete(this.seen.values().next().value);this.current={key,startedAt:now,beats:0}}
  const current=this.current;if(!current)return null;
  const elapsed=now-current.startedAt,beats=[420,760,1100].filter(t=>elapsed>=t).length;
  const knock=beats>current.beats&&elapsed<1500;current.beats=beats;
  return elapsed<1800?{key,elapsed,remaining:1800-elapsed,knock}:null;
 }
}
