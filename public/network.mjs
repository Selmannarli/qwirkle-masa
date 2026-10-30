export class SingleFlight{
 constructor(){this.pending=new Map()}
 run(key,work){if(!key)return work();if(this.pending.has(key))return this.pending.get(key);const promise=Promise.resolve().then(work).finally(()=>this.pending.delete(key));this.pending.set(key,promise);return promise}
}
export const READ_ROUTES=new Set(['state','games','friends','rewards','messages','messages/list','history','leaderboard','profile']);
