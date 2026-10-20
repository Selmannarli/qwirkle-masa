import {validate} from './engine.mjs';
export const TIME_OPTIONS=[0,30,60,120];
export const QUICK_MESSAGES=['Merhaba!','Güzel hamle!','Düşünüyorum…','İyi şanslar!','Harika oyun!','Rövanş?'];
export function rebaseDraft(board,hand,draft){if(!draft.length)return [];if(draft.some(p=>!hand.some(t=>t.id===p.id)||board[p.x+','+p.y])||validate(board,hand,draft).error)return [];return draft.map(p=>({...p}))}
