import {parentPort} from 'node:worker_threads';
import {bestMove} from './public/engine.mjs';
parentPort.on('message',({id,board,hand,opening})=>{try{parentPort.postMessage({id,move:bestMove(board,hand,opening)})}catch(e){parentPort.postMessage({id,error:e.message})}});
