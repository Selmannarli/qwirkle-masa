import {spawn,execFile} from 'node:child_process';
import {bestMove} from '../public/engine.mjs';
const base='https://qwirkle-masa.onrender.com';
const post=async(route,b)=>{const out=await new Promise((resolve,reject)=>execFile(process.platform==='win32'?'curl.exe':'curl',['--max-time','25','--fail-with-body','-sS',base+'/api/'+route,'-H','Content-Type: application/json','--data-binary',JSON.stringify(b)],(e,stdout)=>e?reject(Error(stdout||e.message)):resolve(stdout)));return JSON.parse(out)};
const a=await post('create',{name:'Desktop QA'}),auth={room:a.code,token:a.token};
const adb=process.env.ADB||'adb';
const device=spawn(adb,['-s',process.env.ANDROID_SERIAL||'emulator-5554','shell','am','instrument','-w','-e','room',a.code,'com.renkio.game.test/com.renkio.game.CrossplaySmoke']);
let output='';device.stdout.on('data',v=>{output+=v;process.stdout.write(v)});device.stderr.on('data',v=>process.stderr.write(v));
const done=new Promise((resolve,reject)=>{device.on('exit',code=>{if(code===0&&output.includes('PASS:'))resolve();else reject(Error('Android smoke failed: '+output))})});
let state;for(let i=0;i<90;i++){state=await post('state',auth);if(state.seats.length===2)break;await new Promise(r=>setTimeout(r,1000))}
if(state.seats.length!==2)throw Error('Android did not join');state=await post('start',auth);console.log('Desktop and Android joined the same live room.');
if(state.game.turn===0){const move=bestMove(state.game.board,state.game.players[0].hand,state.game.opening);await post('action',{...auth,action:'play',revision:state.game.revision,placements:move.placements});console.log('Desktop opening transmitted.');}
await done;
state=await post('state',auth);if(state.game.revision<2||state.game.players[1].hand)throw Error('Sync/privacy failed');console.log('CROSSPLAY PASS: Android action visible on desktop; revision '+state.game.revision);

