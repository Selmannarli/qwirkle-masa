const dayFormat=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'});
export const rewardDay=(now=Date.now())=>dayFormat.format(new Date(now));
export function rewardView(profile,now=Date.now()){const r=profile.reward||{};return {balance:r.balance||0,available:r.lastClaim!==rewardDay(now),claimedDays:r.claimedDays||0,day:rewardDay(now)}}
export function claimReward(profile,now=Date.now()){
 if(!rewardView(profile,now).available)throw Error('Bugünün jokerini zaten topladın.');
 const r=profile.reward||{};profile.reward={balance:(r.balance||0)+1,lastClaim:rewardDay(now),claimedDays:(r.claimedDays||0)+1};return rewardView(profile,now);
}
export function prepareJoker(game,actor,id){
 if(!game.experimental||game.over||game.players[actor]?.eliminated)throw Error('Bu maçta joker kullanılamıyor.');
 const p=game.players[actor];if(p.jokerUsed)throw Error('Bu maçtaki jokerini kullandın.');
 if(!p.hand.some(t=>t.joker))p.hand.push({id,c:0,s:0,joker:true});
 return p.hand.find(t=>t.joker);
}
