// At most one immutable snapshot is in flight; concurrent requests share the next one.
// A caller is acknowledged only after a snapshot containing its request is durable.
export class SnapshotWriter{
 constructor(snapshot,save){this.snapshot=snapshot;this.save=save;this.requested=0;this.running=false;this.waiters=[];this.snapshots=0}
 persist(){const version=++this.requested;const promise=new Promise((resolve,reject)=>this.waiters.push({version,resolve,reject}));if(!this.running){this.running=true;queueMicrotask(()=>this.drain())}return promise}
 async drain(){while(this.waiters.length){const target=this.requested;try{const state=this.snapshot();this.snapshots++;await this.save(state);const ready=this.waiters.filter(w=>w.version<=target);this.waiters=this.waiters.filter(w=>w.version>target);for(const w of ready)w.resolve()}catch(error){const failed=this.waiters.filter(w=>w.version<=target);this.waiters=this.waiters.filter(w=>w.version>target);for(const w of failed)w.reject(error)}}this.running=false}
}
