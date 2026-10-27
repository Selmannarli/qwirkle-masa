import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

async function navigation(){
 const app=await readFile(new URL('../public/app.mjs',import.meta.url),'utf8'),start=app.indexOf('function showHub('),end=app.indexOf("\ndocument.querySelectorAll('.bottom-nav button')",start),queued=[],elements=new Map();
 const context={preferences:{reduced:false},view:'home',modeState:false,mode(solo){context.modeState=solo},closeDialogs(){},scrollTo(){},renderFriends(){},refreshFriends:async()=>{},renderStats(){},refreshArchive:async()=>{},loadLeaders(){},matchMedia:()=>({matches:false}),document:{body:{dataset:{page:'home'}},querySelectorAll:()=>[],startViewTransition(update){queued.push(update);return {skipTransition(){},ready:Promise.resolve(),updateCallbackDone:Promise.resolve(),finished:Promise.resolve()}}},$(id){if(!elements.has(id))elements.set(id,{open:false,classList:{toggle(){},add(){}},setAttribute(){},show(){},animate(){const animation={cancelled:false,finished:Promise.resolve(),cancel(){this.cancelled=true}};queued.push(animation);return animation}});return elements.get(id)}};
 vm.runInNewContext('let hubTransition;'+app.slice(start,end)+'\nglobalThis.navigate=showHub;',context);return {context,queued};
}
test('cancelling an entrance cannot replace the selected destination or reset practice mode',async()=>{
 const {context,queued}=await navigation();context.navigate('more');context.navigate('home',true);context.mode(true);assert.equal(queued[0].cancelled,true);assert.equal(context.document.body.dataset.page,'home');assert.equal(context.modeState,true);
});
test('rapid navigation switches immediately and cancels the previous entrance',async()=>{
 const {context,queued}=await navigation();context.navigate('friends');context.navigate('leaders');assert.equal(queued[0].cancelled,true);assert.equal(context.document.body.dataset.page,'leaders');
});
