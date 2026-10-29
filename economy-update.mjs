import {ADMIN_PLAYER_ID} from './admin-friends.mjs';
import {rewardView} from './rewards.mjs';
export function migrateBalances(state,now=Date.now()){
 if(state.balanceReset20261028)return false;
 const previous={};
 for(const [id,p]of Object.entries(state.profiles)){
  if(p.bot)continue;
  rewardView(p);previous[id]={diamonds:p.economy.diamonds,unlimited:!!p.economy.unlimited};p.economy.diamonds=id===ADMIN_PLAYER_ID?700000:500;
  p.economy.unlimited=id===ADMIN_PLAYER_ID;
 }
 state.balanceReset20261028={at:now,previous};return true;
}
export function markAdmin(profile,id){if(id===ADMIN_PLAYER_ID){rewardView(profile);if(!profile.economy.unlimited)profile.economy.diamonds=700000;profile.economy.unlimited=true}}
export function debitDiamonds(profile,amount){
 rewardView(profile);if(!Number.isSafeInteger(amount)||amount<1)throw Error('Geçersiz miktar.');
 if(profile.economy.diamonds<amount&&!profile.economy.unlimited)throw Error('Yeterli elmasın yok.');
 if(!profile.economy.unlimited)profile.economy.diamonds-=amount;
}
export function buyPracticeTime(profile,receipt){
 rewardView(profile);if(typeof receipt!=='string'||!/^[-\w:]{8,160}$/.test(receipt))throw Error('İşlem kimliği geçersiz.');
 profile.economy.timeReceipts??=[];
 if(profile.economy.timeReceipts.includes(receipt))return rewardView(profile);
 debitDiamonds(profile,1);profile.economy.timeReceipts.push(receipt);profile.economy.timeReceipts=profile.economy.timeReceipts.slice(-200);return rewardView(profile);
}
export function gift(state,from,to,item,amount,receipt){
 if(!state.profiles[to]||from===to||state.profiles[to].bot)throw Error('Oyuncu bulunamadı.');
 if(!state.friends?.some(e=>e.status==='accepted'&&(e.from===from&&e.to===to||e.to===from&&e.from===to)))throw Error('Önce arkadaş olmalısınız.');
 if(!['joker','hint','diamonds'].includes(item))throw Error('Bu destek bulunamadı.');
 if(item==='diamonds'&&from!==ADMIN_PLAYER_ID)throw Error('Bu işlem yalnızca yöneticiye açık.');
 if(!Number.isSafeInteger(amount)||amount<1||amount>1000000)throw Error('Geçersiz miktar.');
 if(typeof receipt!=='string'||!/^[-\w]{16,80}$/.test(receipt))throw Error('İşlem kimliği geçersiz.');
 const sender=state.profiles[from],receiver=state.profiles[to];rewardView(sender);rewardView(receiver);
 const signature=[to,item,amount].join(':');sender.economy.gifts??=[];
 const prior=sender.economy.gifts.find(g=>g.receipt===receipt);
 if(prior){if(prior.signature!==signature)throw Error('İşlem kimliği daha önce kullanıldı.');return rewardView(sender)}
 if(item==='diamonds')receiver.economy.diamonds+=amount;
 else {if(sender.economy.inventory[item]<amount)throw Error('Bu desteğin kalmamış. Mağazadan alabilirsin.');sender.economy.inventory[item]-=amount;receiver.economy.inventory[item]+=amount}
 receiver.giftInbox??=[];receiver.giftInbox.push({id:from+':'+receipt,from,name:sender.name||'Player',item,amount,at:Date.now()});receiver.giftInbox=receiver.giftInbox.slice(-200);
 sender.economy.gifts.push({receipt,signature,at:Date.now()});sender.economy.gifts=sender.economy.gifts.slice(-200);
 return rewardView(sender);
}
