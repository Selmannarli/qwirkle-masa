// Coalesce authoritative snapshots for a slow connection instead of buffering every frame.
export class EventWriter{
 constructor(){this.states=new WeakMap()}
 send(response,payload){if(response.destroyed||response.writableEnded)return;let state=this.states.get(response);if(!state){state={blocked:false,pending:null};this.states.set(response,state)}if(state.blocked){state.pending=payload;return}try{if(!response.write(payload)){state.blocked=true;response.once('drain',()=>{state.blocked=false;const latest=state.pending;state.pending=null;if(latest)this.send(response,latest)})}}catch{state.pending=null;response.destroy()}}
}
