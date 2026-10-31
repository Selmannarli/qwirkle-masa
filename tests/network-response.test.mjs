import test from 'node:test';
import assert from 'node:assert/strict';
import {readApiResponse,requestApiJson} from '../public/network.mjs';
test('HTML, empty and invalid proxy responses never leak parser errors',async()=>{
 for(const body of ['<!DOCTYPE html><h1>Starting</h1>','','not json','null','[]'])await assert.rejects(readApiResponse(new Response(body,{status:503})),e=>!e.message.includes('Unexpected token')&&['SERVER_UNAVAILABLE','INVALID_RESPONSE'].includes(e.code));
});
test('valid application data and errors retain their meaning',async()=>{
 assert.deepEqual(await readApiResponse(new Response('{"ok":true}')),{ok:true});
 await assert.rejects(readApiResponse(new Response('{"error":"Sıra sende değil.","code":"TURN"}',{status:409})),e=>e.code==='TURN'&&e.message==='Sıra sende değil.');
});
test('only safe reads retry an HTML proxy response; mutations never replay',async()=>{
 for(const readOnly of [true,false]){let calls=0;const fetchImpl=async()=>++calls===1?new Response('<html>Restarting</html>',{status:503}):new Response('{"ok":true}');const run=requestApiJson('/api/test',{}, {readOnly,fetchImpl,wait:async()=>{}});if(readOnly)assert.deepEqual(await run,{ok:true});else await assert.rejects(run,{code:'SERVER_UNAVAILABLE'});assert.equal(calls,readOnly?2:1)}
});
test('retry stops at one and abort prevents another request',async()=>{
 let calls=0;await assert.rejects(requestApiJson('/',{},{readOnly:true,fetchImpl:async()=>{calls++;return new Response('html')},wait:async()=>{}}),{code:'SERVER_UNAVAILABLE'});assert.equal(calls,2);
 const c=new AbortController();calls=0;await assert.rejects(requestApiJson('/',{signal:c.signal},{readOnly:true,fetchImpl:async()=>{calls++;return new Response('html')},wait:async()=>c.abort()}),{name:'AbortError'});assert.equal(calls,1);
});
