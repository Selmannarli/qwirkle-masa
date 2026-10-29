import test from 'node:test';import assert from 'node:assert/strict';
import {persistAvatar,setAvatarOwner,saveAvatar,readAvatar} from '../public/profile-art.mjs';
test('rapid edits and reopened editors serialize writes, skip superseded drafts and keep the final colour',async()=>{
 const previous=globalThis.localStorage,store=new Map();globalThis.localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};
 try{setAvatarOwner('save-order');let release;const held=new Promise(r=>release=r),writes=[];
 const a={face:2,color:0,accessoryColors:{face:2}},b={face:2,color:0,accessoryColors:{face:3}},c={face:2,color:0,accessoryColors:{face:5}};
 saveAvatar(a);const first=persistAvatar(a,async v=>{writes.push(v);await held},'save-order');await Promise.resolve();await Promise.resolve();
 saveAvatar(b);const second=persistAvatar(b,async v=>writes.push(v),'save-order');saveAvatar(c);const last=persistAvatar(c,async v=>writes.push(v),'save-order');release();await Promise.all([first,second,last]);
 assert.deepEqual(writes,[a,c]);assert.deepEqual(readAvatar(),c);
 let attempts=0;await assert.rejects(persistAvatar(c,async()=>{attempts++;throw Error('offline')},'save-order'));await persistAvatar(c,async()=>{attempts++},'save-order');assert.equal(attempts,2);
 }finally{globalThis.localStorage=previous;setAvatarOwner('')}
});
