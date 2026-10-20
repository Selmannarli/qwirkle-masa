import test from 'node:test';
import assert from 'node:assert/strict';
import {Board,projectPoint,unprojectPoint,fitBoard} from '../public/board.mjs';
test('flat board coordinates round-trip on desktop and phone',()=>{
 for(const [w,h] of [[1440,700],[390,420],[320,220]])for(const x of [-450,0,420])for(const y of [-300,0,340]){const p=projectPoint(x,y,w,h);assert.deepEqual(unprojectPoint(p.x,p.y,w,h),{x,y});assert.equal(projectPoint(x+80,y,w,h).x-p.x,80)}
});
test('selecting different tiles does not reveal legal placement locations',()=>{
 const operations=[];const ctx=new Proxy({},{get:(_,k)=>(...args)=>operations.push([k,...args]),set:(_,k,v)=>{operations.push([k,v]);return true}});
 globalThis.Path2D=class{constructor(d){this.d=d}};globalThis.getComputedStyle=()=>({getPropertyValue:()=> '#aaa'});globalThis.cancelAnimationFrame=()=>{};
 const board=Object.create(Board.prototype);Object.assign(board,{ctx,canvas:{},w:800,h:500,camera:{x:0,y:0,size:60},seen:new Map(),state:{board:{'0,0':{c:0,s:0}},hand:[{id:'a',c:0,s:1},{id:'b',c:1,s:2}],pending:[],selected:null,canPlay:true,last:[],reduced:true}});
 board.draw();const before=JSON.stringify(operations);operations.length=0;board.state.selected='a';board.draw();assert.equal(JSON.stringify(operations),before);operations.length=0;board.state.selected='b';board.draw();assert.equal(JSON.stringify(operations),before);
});
test('pointer redraws are coalesced to one per animation frame',()=>{
 let callbacks=[],draws=0;globalThis.requestAnimationFrame=fn=>{callbacks.push(fn);return callbacks.length};const board=Object.create(Board.prototype);board.draw=()=>draws++;for(let i=0;i<200;i++)board.requestDraw();assert.equal(callbacks.length,1);callbacks[0]();assert.equal(draws,1);board.requestDraw();assert.equal(callbacks.length,2);
});

test('all tiles fit even in a 108-tile line and after phone rotation',()=>{
 const layouts=[Array.from({length:108},(_,x)=>({x,y:0})),Array.from({length:108},(_,y)=>({x:0,y})),[{x:-110,y:-110},{x:110,y:110}],Array.from({length:108},(_,i)=>({x:i%12-6,y:Math.floor(i/12)-4}))];
 for(const [w,h]of[[320,180],[390,460],[1400,600],[566,100]])for(const points of layouts){const camera=fitBoard(points,w,h,112);for(const p of points){const x=w/2+camera.x+p.x*camera.size,y=h/2+camera.y+p.y*camera.size,r=camera.size*.43;assert.ok(x-r>=0&&x+r<=w);assert.ok(y-r>=0&&y+r<=h-40)}}
});
test('canvas and hand use exactly the same six symbol paths',async()=>{
 const {SHAPES,SHAPE_PATHS}=await import('../public/ui.mjs');globalThis.Path2D=class{constructor(d){this.d=d}};const board=Object.create(Board.prototype);for(let i=0;i<6;i++){assert.equal(board.path(i).d,SHAPE_PATHS[i]);assert.equal(SHAPES[i],'<path d="'+SHAPE_PATHS[i]+'"/>')}
});

test('only the latest shared move is highlighted, without player number badges',()=>{
 const drawn=[],labels=[];const ctx=new Proxy({},{get:(_,k)=>(...args)=>{if(k==='fillText')labels.push(args[0])},set:()=>true});globalThis.getComputedStyle=()=>({getPropertyValue:()=> '#aaa'});globalThis.cancelAnimationFrame=()=>{};const board=Object.create(Board.prototype);Object.assign(board,{ctx,canvas:{},w:800,h:500,camera:{x:0,y:0,size:60},seen:new Map(),state:{board:{'0,0':{c:0,s:0},'1,0':{c:1,s:0}},hand:[],pending:[],last:[{x:1,y:0}],lastMoves:{0:[{x:0,y:0}],1:[{x:1,y:0}]},reduced:true}});board.tile=(t,x,y,options)=>drawn.push({x,y,last:options.last});board.draw();assert.deepEqual(drawn,[{x:0,y:0,last:false},{x:1,y:0,last:true}]);assert.deepEqual(labels,[]);
});

test('drag preserves the camera on state updates and center fits board limits',()=>{
 const canvas={style:{},setPointerCapture(){},getBoundingClientRect:()=>({left:0,top:0}),addEventListener(){}};
 let placements=0;const board=Object.create(Board.prototype);Object.assign(board,{canvas,w:800,h:500,camera:{x:0,y:0,size:82},autoFit:true,touches:new Map(),seen:new Map(),state:{board:{'0,0':{c:0,s:0}},pending:[],selected:'a',canPlay:true},draw(){},requestDraw(){},onPlace(){placements++}});board.bind();
 canvas.onpointerdown({pointerId:1,clientX:400,clientY:250});canvas.onpointermove({pointerId:1,clientX:550,clientY:190});canvas.onpointerup({pointerId:1,clientX:550,clientY:190});assert.equal(placements,0);assert.equal(board.autoFit,false);assert.equal(board.camera.x,150);assert.equal(board.camera.y,-60);const camera={...board.camera};board.setState({...board.state,board:{...board.state.board,'1,0':{c:1,s:0}}});assert.deepEqual(board.camera,camera);board.keepInView();assert.deepEqual(board.camera,camera);board.center();assert.equal(board.autoFit,false);const extent=board.extent();assert.deepEqual(board.camera,{size:extent.minZoom,x:-extent.centerX*extent.minZoom,y:-extent.centerY*extent.minZoom});
});
test('zoom keeps the world point under the pointer stationary',()=>{
 const board=Object.create(Board.prototype);Object.assign(board,{w:800,h:500,camera:{x:150,y:-60,size:82},draw(){}});const px=620,py=150,p=board.unproject(px,py),world={x:(p.x-board.camera.x)/82,y:(p.y-board.camera.y)/82};board.zoom(1.2,px,py);const after=board.point(world.x,world.y);assert.ok(Math.abs(after.x-px)<1e-8);assert.ok(Math.abs(after.y-py)<1e-8);assert.equal(board.autoFit,false);
});
