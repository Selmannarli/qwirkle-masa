import {bestMove} from './engine.mjs';
self.onmessage=({data})=>{const {id,board,hand,opening}=data;self.postMessage({id,move:bestMove(board,hand,opening)})};
