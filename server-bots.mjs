import {Worker} from 'node:worker_threads';
export class BotRunner {
 constructor(){this.jobs=new Map();this.next=0;this.worker=null}
 solve(board,hand,opening){if(!this.worker){const worker=new Worker(new URL('./server-bot-worker.mjs',import.meta.url));this.worker=worker;worker.on('message',v=>{const job=this.jobs.get(v.id);if(job){clearTimeout(job.timer);this.jobs.delete(v.id);v.error?job.reject(Error(v.error)):job.resolve(v.move)}});worker.on('error',e=>this.fail(e));worker.on('exit',()=>{if(this.worker===worker)this.fail(Error('Bot yeniden başlatılıyor.'))});worker.unref()}
 return new Promise((resolve,reject)=>{const id=++this.next,timer=setTimeout(()=>this.fail(Error('Bot hesaplama süresi doldu.')),15000);this.jobs.set(id,{resolve,reject,timer});this.worker.postMessage({id,board,hand,opening})})}
 fail(e){const worker=this.worker;this.worker=null;worker?.terminate();for(const job of this.jobs.values()){clearTimeout(job.timer);job.reject(e)}this.jobs.clear()}
 close(){this.fail(Error('Sunucu kapanıyor.'))}
}
