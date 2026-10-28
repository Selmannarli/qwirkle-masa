// One paid extension per turn. Server owns payment and the deadline.
export function extendTurn(game,actor,now=Date.now()){
 if(!game||game.over||game.timeoutDecision||game.players[actor]?.eliminated||game.turn!==actor)throw Error('Şu an senin sıran değil.');
 if(!game.turnSeconds||!game.turnDeadline)throw Error('Bu masada süre sınırı yok.');
 if(game.turnSeconds>=43200)throw Error('Bu maçta ek süre desteği yok.');
 if(now>=game.turnDeadline)throw Error('Tur süresi doldu.');
 game.timeSupportUsed??={};
 const serial=game.turnSerial||0;if(game.timeSupportUsed[actor]===serial)throw Error('Bu turda +30 saniyeyi kullandın.');
 game.timeSupportUsed[actor]=serial;
 game.turnDeadline+=30000;
 game.revision++;
 return game.turnDeadline;
}
