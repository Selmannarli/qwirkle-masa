const dayFormat=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'});
export const rewardDay=(now=Date.now())=>dayFormat.format(new Date(now));
export const SUPPORT_PRICE=5;
function economy(profile){
 if(!profile.economy){const old=profile.reward||{};profile.economy={version:2,diamonds:0,inventory:{joker:Math.max(0,old.balance||0),hint:0},lastClaim:old.lastClaim,claimedDays:old.claimedDays||0,receipts:[]}}
 return profile.economy;
}
export function rewardView(profile,now=Date.now()){const e=economy(profile);return {diamonds:e.diamonds,inventory:{...e.inventory},balance:e.inventory.joker,available:e.lastClaim!==rewardDay(now),claimedDays:e.claimedDays,day:rewardDay(now)}}
export function claimReward(profile,now=Date.now()){
 if(!rewardView(profile,now).available)throw Error('Bugünün ödülünü zaten topladın.');
 const e=economy(profile);e.diamonds+=10;e.lastClaim=rewardDay(now);e.claimedDays++;return rewardView(profile,now);
}
function itemCheck(item){if(!['joker','hint'].includes(item))throw Error('Bu destek bulunamadı.')}
function receiptCheck(e,id,item,kind){
 if(typeof id!=='string'||!/^[-\w]{16,80}$/.test(id))throw Error('İşlem kimliği geçersiz.');
 const previous=e.receipts.find(r=>r.id===id);if(previous&&(previous.item!==item||previous.kind!==kind))throw Error('İşlem kimliği daha önce kullanıldı.');return !!previous;
}
function remember(e,id,item,kind){e.receipts.push({id,item,kind});e.receipts=e.receipts.slice(-200)}
export function buySupport(profile,item,receipt){
 itemCheck(item);const e=economy(profile);if(receiptCheck(e,receipt,item,'buy'))return rewardView(profile);
 if(e.diamonds<SUPPORT_PRICE)throw Error('Yeterli elmasın yok.');
 e.diamonds-=SUPPORT_PRICE;e.inventory[item]++;remember(e,receipt,item,'buy');return rewardView(profile);
}
export function consumeSupport(profile,item,receipt){
 itemCheck(item);const e=economy(profile);if(receipt&&receiptCheck(e,receipt,item,'use'))return rewardView(profile);
 if(!e.inventory[item])throw Error('Bu desteğin kalmamış. Mağazadan alabilirsin.');
 e.inventory[item]--;if(receipt)remember(e,receipt,item,'use');return rewardView(profile);
}
export function prepareJoker(game,actor,id){
 if(!game.experimental||game.over||game.players[actor]?.eliminated)throw Error('Bu maçta joker kullanılamıyor.');
 const p=game.players[actor];if(p.jokerUsed)throw Error('Bu maçtaki jokerini kullandın.');
 if(!p.hand.some(t=>t.joker))p.hand.push({id,c:0,s:0,joker:true});
 return p.hand.find(t=>t.joker);
}
