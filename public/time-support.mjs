// One free extension per player per match. Server owns the deadline.
export function extendTurn(game,actor,now=Date.now()){
 if(!game||game.over||game.timeoutDecision||game.players[actor]?.eliminated||game.turn!==actor)throw Error('Şu an senin sıran değil.');
 if(!game.turnSeconds||!game.turnDeadline)throw Error('Bu masada süre sınırı yok.');
 if(now>=game.turnDeadline)throw Error('Tur süresi doldu.');
 game.timeSupportUsed??={};
 if(game.timeSupportUsed[actor])throw Error('Bu maçta +30 saniyeyi kullandın.');
 game.timeSupportUsed[actor]=true;
 game.turnDeadline+=30000;
 game.revision++;
 return game.turnDeadline;
}
