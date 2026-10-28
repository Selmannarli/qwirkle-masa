/* Three.js · The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xh=0,ql=1,qh=2;var Rr=1,Yh=2,pi=3,mi=0,Oe=1,qe=2,Nn=0,Es=1,Yl=2,Zl=3,Jl=4,Zh=5;var Fi=100,Jh=101,$h=102,Kh=103,jh=104,Qh=200,tu=201,eu=202,nu=203,$l=204,Kl=205,iu=206,su=207,ru=208,au=209,ou=210,lu=211,cu=212,hu=213,uu=214,wa=0,Ta=1,Aa=2,hs=3,Ea=4,Ca=5,Ra=6,Ia=7,io=0,fu=1,du=2,xn=0,jl=1,Ql=2,tc=3,Oi=4,ec=5,nc=6,ic=7;var sc=300,gi=301,Bi=302,so=303,ro=304,Ir=306,oi=1e3,rn=1001,us=1002,De=1003,pu=1004;var Pr=1005;var Fe=1006,ao=1007;var _i=1008;var Ze=1009,rc=1010,ac=1011,Cs=1012,oo=1013,yn=1014,an=1015,vn=1016,lo=1017,co=1018,Rs=1020,oc=35902,lc=35899,cc=1021,hc=1022,on=1023,An=1026,xi=1027,ho=1028,uo=1029,yi=1030,fo=1031;var po=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,mo=35840,go=35841,_o=35842,xo=35843,yo=36196,vo=37492,Mo=37496,So=37488,bo=37489,Fr=37490,wo=37491,To=37808,Ao=37809,Eo=37810,Co=37811,Ro=37812,Io=37813,Po=37814,Lo=37815,Do=37816,No=37817,Uo=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,ko=36494,Vo=36495,Go=36283,Ho=36284,Or=36285,Wo=36286;var er=2300,Pa=2301,Sa=2302,Ll=2303,Dl=2400,Nl=2401,Ul=2402;var mu=3200;var Br=0,gu=1,Kn="",Ee="srgb",nr="srgb-linear",ir="linear",ce="srgb";var ba=7680;var _u=519,xu=512,yu=513,vu=514,Xo=515,Mu=516,Su=517,qo=518,bu=519,wu=35044;var uc="300 es",gn=2e3,fs=2001;function Gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=sr("canvas");return i.style.display="block",i}var uh={},ds=null;function fc(...i){let t="THREE."+i.shift();ds?ds("log",t,...i):console.log(t,...i)}function Au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Au(i);let t="THREE."+i.shift();if(ds)ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Au(i);let t="THREE."+i.shift();if(ds)ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in uh||(uh[t]=!0,Ht(...i))}function Eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cu={[wa]:Ta,[Aa]:Ra,[Ea]:Ia,[hs]:Ca,[Ta]:wa,[Ra]:Aa,[Ia]:Ea,[Ca]:hs},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Ks=Math.PI/180,ps=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function Wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xf(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function qf(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function Yf(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function Zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kf(i,t){return i+Math.random()*(t-i)}function jf(i){return i*(.5-Math.random())}function Qf(i){i!==void 0&&(fh=i);let t=fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(i){return i*Ks}function ed(i){return i*ps}function nd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pc={DEG2RAD:Ks,RAD2DEG:ps,generateUUID:zi,clamp:ne,euclideanModulo:dc,mapLinear:Wf,inverseLerp:Xf,lerp:js,damp:qf,pingpong:Yf,smoothstep:Zf,smootherstep:Jf,randInt:$f,randFloat:Kf,randFloatSpread:jf,seededRandom:Qf,degToRad:td,radToDeg:ed,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:He,denormalize:ls},vc=class vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;var dt=vc,Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),C=Math.sin(T);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+v*o;let T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mc=class Mc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mc.prototype.isVector3=!0;var B=Mc,ll=new B,dh=new Cn,Sc=class Sc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],C=s[4],y=s[7],w=s[2],b=s[5],P=s[8];return r[0]=a*v+o*T+l*w,r[3]=a*m+o*C+l*b,r[6]=a*p+o*y+l*P,r[1]=c*v+h*T+f*w,r[4]=c*m+h*C+f*b,r[7]=c*p+h*y+f*P,r[2]=u*v+d*T+g*w,r[5]=u*m+d*C+g*b,r[8]=u*p+d*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;var Gt=Sc,cl=new Gt,ph=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){let i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}var se=ad();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=sr("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},od=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var ld=0,ul=new B,Xe=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rn,s=rn,r=Fe,a=_i,o=on,l=Ze,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=zi(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=sc;Xe.DEFAULT_ANISOTROPY=1;var bc=class bc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(d+1)/2,w=(p+1)/2,b=(h+u)/4,P=(f+v)/4,_=(g+m)/4;return C>y&&C>w?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=P/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=_/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-v)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;var ye=bc,Da=class extends En{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Xe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rr=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var no=class no{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new no().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ei.crossVectors(n,Je),ei.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ei.crossVectors(n,Je)),ei.normalize(),ta.crossVectors(Je,ei),s[0]=ei.x,s[4]=ta.x,s[8]=Je.x,s[1]=ei.y,s[5]=ta.y,s[9]=Je.y,s[2]=ei.z,s[6]=ta.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],C=n[7],y=n[11],w=n[15],b=s[0],P=s[4],_=s[8],A=s[12],F=s[1],V=s[5],z=s[9],K=s[13],L=s[2],H=s[6],tt=s[10],J=s[14],W=s[3],it=s[7],rt=s[11],ht=s[15];return r[0]=a*b+o*F+l*L+c*W,r[4]=a*P+o*V+l*H+c*it,r[8]=a*_+o*z+l*tt+c*rt,r[12]=a*A+o*K+l*J+c*ht,r[1]=h*b+f*F+u*L+d*W,r[5]=h*P+f*V+u*H+d*it,r[9]=h*_+f*z+u*tt+d*rt,r[13]=h*A+f*K+u*J+d*ht,r[2]=g*b+v*F+m*L+p*W,r[6]=g*P+v*V+m*H+p*it,r[10]=g*_+v*z+m*tt+p*rt,r[14]=g*A+v*K+m*J+p*ht,r[3]=T*b+C*F+y*L+w*W,r[7]=T*P+C*V+y*H+w*it,r[11]=T*_+C*z+y*tt+w*rt,r[15]=T*A+C*K+y*J+w*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],T=l*d-c*u,C=o*d-c*f,y=o*u-l*f,w=a*d-c*h,b=a*u-l*h,P=a*f-o*h;return e*(v*T-m*C+p*y)-n*(g*T-m*w+p*b)+s*(g*C-v*w+p*P)-r*(g*y-v*b+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=e*o-n*a,C=e*l-s*a,y=e*c-r*a,w=n*l-s*o,b=n*c-r*o,P=s*c-r*l,_=h*v-f*g,A=h*m-u*g,F=h*p-d*g,V=f*m-u*v,z=f*p-d*v,K=u*p-d*m,L=T*K-C*z+y*V+w*F-b*A+P*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(o*K-l*z+c*V)*H,t[1]=(s*z-n*K-r*V)*H,t[2]=(v*P-m*b+p*w)*H,t[3]=(u*b-f*P-d*w)*H,t[4]=(l*F-a*K-c*A)*H,t[5]=(e*K-s*F+r*A)*H,t[6]=(m*y-g*P-p*C)*H,t[7]=(h*P-u*y+d*C)*H,t[8]=(a*z-o*F+c*_)*H,t[9]=(n*F-e*z-r*_)*H,t[10]=(g*b-v*y+p*T)*H,t[11]=(f*y-h*b-d*T)*H,t[12]=(o*A-a*V-l*_)*H,t[13]=(e*V-n*A+s*_)*H,t[14]=(v*C-g*w-m*T)*H,t[15]=(h*w-f*C+u*T)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,v=a*h,m=a*f,p=o*f,T=l*c,C=l*h,y=l*f,w=n.x,b=n.y,P=n.z;return s[0]=(1-(v+p))*w,s[1]=(d+y)*w,s[2]=(g-C)*w,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(u+p))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(g+C)*P,s[9]=(m-T)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),l=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,h=1/o,f=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,e.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=gn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=gn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===gn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===fs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};no.prototype.isMatrix4=!0;var ue=no,Ji=new B,fn=new ue,cd=new B(0,0,0),hd=new B(1,1,1),ei=new B,ta=new B,Je=new B,gh=new ue,_h=new Cn,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ud=0,xh=new B,$i=new Cn,kn=new ue,ea=new B,Ws=new B,fd=new B,dd=new Cn,yh=new B(1,0,0),vh=new B(0,1,0),Mh=new B(0,0,1),Sh={type:"added"},pd={type:"removed"},Ki={type:"childadded",child:null},fl={type:"childremoved",child:null},Ne=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Rn,n=new Cn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ws,ea,this.up):kn.lookAt(ea,Ws,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(kn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new B(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},md={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(md)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},na={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=dc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dl(a,r,t+1/3),this.g=dl(a,r,t),this.b=dl(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return se.workingToColorSpace(ke.copy(this),t),Math.round(ne(ke.r*255,0,255))*65536+Math.round(ne(ke.g*255,0,255))*256+Math.round(ne(ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ee){se.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(na);let n=js(ni.h,na.h,e),s=js(ni.s,na.s,e),r=js(ni.l,na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new qt;qt.NAMES=Ru;var Yn=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},dn=new B,Vn=new B,pl=new B,Gn=new B,ji=new B,Qi=new B,bh=new B,ml=new B,gl=new B,_l=new B,xl=new ye,yl=new ye,vl=new ye,ai=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Vn.subVectors(n,e),pl.subVectors(t,e);let a=dn.dot(dn),o=dn.dot(Vn),l=dn.dot(pl),c=Vn.dot(Vn),h=Vn.dot(pl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xl,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Vn.subVectors(t,e),dn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),Qi.subVectors(r,n),ml.subVectors(t,n);let l=ji.dot(ml),c=Qi.dot(ml);if(l<=0&&c<=0)return e.copy(n);gl.subVectors(t,s);let h=ji.dot(gl),f=Qi.dot(gl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);_l.subVectors(t,r);let d=ji.dot(_l),g=Qi.dot(_l);if(g>=0&&d<=g)return e.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qi,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return bh.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(bh,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ke=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),sa.subVectors(this.max,Xs),ts.subVectors(t.a,Xs),es.subVectors(t.b,Xs),ns.subVectors(t.c,Xs),ii.subVectors(es,ts),si.subVectors(ns,es),Si.subVectors(ts,ns);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Si.z,Si.y,ii.z,0,-ii.x,si.z,0,-si.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-si.y,si.x,0,-Si.y,Si.x,0];return!Ml(e,ts,es,ns,sa)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,ts,es,ns,sa))?!1:(ra.crossVectors(ii,si),e=[ra.x,ra.y,ra.z],Ml(e,ts,es,ns,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,ia=new Ke,ts=new B,es=new B,ns=new B,ii=new B,si=new B,Si=new B,Xs=new B,sa=new B,ra=new B,bi=new B;function Ml(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Te=new B,aa=new dt,gd=0,We=class extends En{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ar=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},_d=new Ke,qs=new B,Sl=new B,li=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(Sl)),this.expandByPoint(qs.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xd=0,sn=new ue,bl=new Ne,is=new B,$e=new Ke,Ys=new Ke,Le=new B,ge=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?or:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors($e.min,Ys.min),$e.expandByPoint(Le),Le.addVectors($e.max,Ys.max),$e.expandByPoint(Le)):($e.expandByPoint(Ys.min),$e.expandByPoint(Ys.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Le.add(is)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new B,l[_]=new B;let c=new B,h=new B,f=new B,u=new dt,d=new dt,g=new dt,v=new B,m=new B;function p(_,A,F){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,F),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let V=1/(d.x*g.y-g.x*d.y);isFinite(V)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(V),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(V),o[_].add(v),o[A].add(v),o[F].add(v),l[_].add(m),l[A].add(m),l[F].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,A=T.length;_<A;++_){let F=T[_],V=F.start,z=F.count;for(let K=V,L=V+z;K<L;K+=3)p(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let C=new B,y=new B,w=new B,b=new B;function P(_){w.fromBufferAttribute(s,_),b.copy(w);let A=o[_];C.copy(A),C.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(b,A);let V=y.dot(l[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,V)}for(let _=0,A=T.length;_<A;++_){let F=T[_],V=F.start,z=F.count;for(let K=V,L=V+z;K<L;K+=3)P(t.getX(K+0)),P(t.getX(K+1)),P(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new We(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wl=new B,yd=new B,vd=new Gt,mn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wl.subVectors(n,e).cross(yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vd.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Md=0,In=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Es,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Wn=new B,Tl=new B,oa=new B,la=new B,lr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),la.copy(this.origin).sub(Tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(oa),o=la.dot(this.direction),l=-la.dot(oa),c=la.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tl).addScaledVector(oa,u),d}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,T=n.y-a.y,C=n.z-a.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(h),P,_,A,F,V,z,K,L,H,tt,J,W;if(y>=w&&y>=b?(A=l,z=f,H=g,W=p,l>=0?(P=c,_=h,F=u,V=d,K=v,L=m,tt=T,J=C):(P=h,_=c,F=d,V=u,K=m,L=v,tt=C,J=T)):w>=b?(A=c,z=u,H=v,W=T,c>=0?(P=h,_=l,F=d,V=f,K=m,L=g,tt=C,J=p):(P=l,_=h,F=f,V=d,K=g,L=m,tt=p,J=C)):(A=h,z=d,H=m,W=C,h>=0?(P=l,_=c,F=f,V=u,K=g,L=v,tt=p,J=T):(P=c,_=l,F=u,V=f,K=v,L=g,tt=T,J=p)),A===0)return null;let it=P/A,rt=_/A,ht=1/A,Lt=F-it*z,Rt=V-rt*z,Jt=K-it*H,Zt=L-rt*H,Kt=tt-it*W,O=J-rt*W,N=Kt*Zt-O*Jt,D=Lt*O-Rt*Kt,I=Jt*Rt-Zt*Lt;if(s){if(N<0||D<0||I<0)return null}else if((N<0||D<0||I<0)&&(N>0||D>0||I>0))return null;let k=N+D+I;if(k===0)return null;let st=ht*(N*z+D*H+I*W);return(k>0?st<0:st>0)?null:this.at(st/k,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wh=new ue,wi=new lr,ca=new li,Th=new B,ha=new B,ua=new B,fa=new B,Al=new B,da=new B,Ah=new B,pa=new B,fe=class extends Ne{constructor(t=new ge,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Al.fromBufferAttribute(f,t),a?da.addScaledVector(Al,h):da.addScaledVector(Al.sub(e),h))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(ca.containsPoint(wi.origin)===!1&&(wi.intersectSphere(ca,Th)===null||wi.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(wh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(wh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),C=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,w=C;y<w;y+=3){let b=o.getX(y),P=o.getX(y+1),_=o.getX(y+2);s=ma(this,p,t,n,c,h,f,b,P,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let T=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=ma(this,a,t,n,c,h,f,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),C=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,w=C;y<w;y+=3){let b=y,P=y+1,_=y+2;s=ma(this,p,t,n,c,h,f,b,P,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let T=m,C=m+1,y=m+2;s=ma(this,a,t,n,c,h,f,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Sd(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mi,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pa);return c<e.near||c>e.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ha),i.getVertexPosition(l,ua),i.getVertexPosition(c,fa);let h=Sd(i,t,e,n,ha,ua,fa,Ah);if(h){let f=new B;ai.getBarycoord(Ah,ha,ua,fa,f),s&&(h.uv=ai.getInterpolatedAttribute(s,o,l,c,f,new dt)),r&&(h.uv1=ai.getInterpolatedAttribute(r,o,l,c,f,new dt)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};ai.getNormal(ha,ua,fa,u.normal),h.face=u,h.barycoord=f}return h}var cr=class extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,h=De,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new ue,Eh=new ue,ga=[],Ch=new Ke,bd=new ue,Zs=new fe,Js=new li,hr=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Ch.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Js.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Eh.multiplyMatrices(n,ss),Zs.matrixWorld=Eh,Zs.raycast(t,ga);for(let a=0,o=ga.length;a<o;a++){let l=ga[a];l.instanceId=r,l.object=this,e.push(l)}ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(s*this.count),s,this.count,ho,an));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new li,wd=new dt(.5,.5),_a=new B,ys=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],T=r[12],C=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-g,w-T).normalize(),s[1].setComponents(c+a,d+h,p+g,w+T).normalize(),s[2].setComponents(c+o,d+f,p+v,w+C).normalize(),s[3].setComponents(c-o,d-f,p-v,w-C).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,p-m,w-y).normalize();else if(s[4].setComponents(c-l,d-u,p-m,w-y).normalize(),e===gn)s[5].setComponents(c+l,d+u,p+m,w+y).normalize();else if(e===fs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=wd.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends Xe{constructor(t=[],e=gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ei=class extends Xe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Xe{constructor(t,e,n=yn,s,r,a,o=De,l=De,c,h=An,f=1){if(h!==An&&h!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ua=class extends ci{constructor(t,e=yn,n=gi,s,r,a=De,o=De,l,c=An){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fr=class extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ln=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function g(v,m,p,T,C,y,w,b,P,_,A){let F=y/P,V=w/_,z=y/2,K=w/2,L=b/2,H=P+1,tt=_+1,J=0,W=0,it=new B;for(let rt=0;rt<tt;rt++){let ht=rt*V-K;for(let Lt=0;Lt<H;Lt++){let Rt=Lt*F-z;it[v]=Rt*T,it[m]=ht*C,it[p]=L,c.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[p]=b>0?1:-1,h.push(it.x,it.y,it.z),f.push(Lt/P),f.push(1-rt/_),J+=1}}for(let rt=0;rt<_;rt++)for(let ht=0;ht<P;ht++){let Lt=u+ht+H*rt,Rt=u+ht+H*(rt+1),Jt=u+(ht+1)+H*(rt+1),Zt=u+(ht+1)+H*rt;l.push(Lt,Rt,Zt),l.push(Rt,Jt,Zt),W+=6}o.addGroup(d,W,A),d+=W,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fa=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],m=n/2,p=0;T(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function T(){let y=new B,w=new B,b=0,P=(e-t)/n;for(let _=0;_<=r;_++){let A=[],F=_/r,V=F*(e-t)+t;for(let z=0;z<=s;z++){let K=z/s,L=K*l+o,H=Math.sin(L),tt=Math.cos(L);w.x=V*H,w.y=-F*n+m,w.z=V*tt,f.push(w.x,w.y,w.z),y.set(H,P,tt).normalize(),u.push(y.x,y.y,y.z),d.push(K,1-F),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let F=v[A][_],V=v[A+1][_],z=v[A+1][_+1],K=v[A][_+1];(t>0||A!==0)&&(h.push(F,V,K),b+=3),(e>0||A!==r-1)&&(h.push(V,z,K),b+=3)}c.addGroup(p,b,0),p+=b}function C(y){let w=g,b=new dt,P=new B,_=0,A=y===!0?t:e,F=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*F,0),u.push(0,F,0),d.push(.5,.5),g++;let V=g;for(let z=0;z<=s;z++){let L=z/s*l+o,H=Math.cos(L),tt=Math.sin(L);P.x=A*tt,P.y=m*F,P.z=A*H,f.push(P.x,P.y,P.z),u.push(0,F,0),b.x=H*.5+.5,b.y=tt*.5*F+.5,d.push(b.x,b.y),g++}for(let z=0;z<s;z++){let K=w+z,L=V+z;y===!0?h.push(L,L+1,K):h.push(L+1,L,K),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class i extends Fa{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ms=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends Ms{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Rh=new B,Ih=new B,El=new mc,Cl=new mc,Rl=new mc,Zn=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ih.subVectors(s[0],s[1]).add(s[0]),c=Ih);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Rh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),El.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,v,m),Cl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,v,m),Rl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Cl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Rl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(El.calc(l),Cl.calc(l),Rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Td(i,t){let e=1-i;return e*e*t}function Ad(i,t){return 2*(1-i)*i*t}function Ed(i,t){return i*i*t}function Qs(i,t,e,n){return Td(i,t)+Ad(i,e)+Ed(i,n)}function Cd(i,t){let e=1-i;return e*e*e*t}function Rd(i,t){let e=1-i;return 3*e*e*i*t}function Id(i,t){return 3*(1-i)*i*i*t}function Pd(i,t){return i*i*i*t}function tr(i,t,e,n,s){return Cd(i,t)+Rd(i,e)+Id(i,n)+Pd(i,s)}var dr=class extends je{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(tr(t,s.x,r.x,a.x,o.x),tr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ba=class extends je{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(tr(t,s.x,r.x,a.x,o.x),tr(t,s.y,r.y,a.y,o.y),tr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pr=class extends je{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends je{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends je{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(t,s.x,r.x,a.x),Qs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends je{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(t,s.x,r.x,a.x),Qs(t,s.y,r.y,a.y),Qs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ph(o,l.x,c.x,h.x,f.x),Ph(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},ka=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Zn,CubicBezierCurve:dr,CubicBezierCurve3:Ba,EllipseCurve:Ms,LineCurve:pr,LineCurve3:za,QuadraticBezierCurve:mr,QuadraticBezierCurve3:gr,SplineCurve:_r}),Va=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ka[s.type]().fromJSON(s))}return this}},Dn=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pr(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mr(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new dr(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ms(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jn=class extends Dn{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Dn().fromJSON(s))}return this}};function Ld(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Iu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Od(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return xr(r,a,e,o,l,c,0),a}function Iu(i,t,e,n,s){let r;if(s===Zd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Lh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Lh(a/n|0,i[a],i[a+1],r);return r&&Ss(r,r.next)&&(vr(r),r=r.next),r}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ss(e,e.next)||ve(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Nd(i,n,s,r):Dd(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ud(Ci(i),t),xr(i,t,e,n,s,r,2)):a===2&&Fd(i,t,e,n,s,r):xr(Ci(i),t,e,n,s,r,1);break}}}function Dd(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&$s(s,o,r,l,a,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ve(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),v=Math.max(o,l,c),m=Math.max(h,f,u),p=Fl(d,g,t,e,n),T=Fl(v,m,t,e,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=p&&y&&y.z<=T;){if(C.x>=d&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&$s(o,h,l,f,c,u,C.x,C.y)&&ve(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&$s(o,h,l,f,c,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=p;){if(C.x>=d&&C.x<=v&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&$s(o,h,l,f,c,u,C.x,C.y)&&ve(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=T;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&$s(o,h,l,f,c,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ud(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ss(n,s)&&Lu(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),vr(e),vr(e.next),e=i=s),e=e.next}while(e!==i);return Ci(e)}function Fd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xd(a,o)){let l=Du(a,o);a=Ci(a,a.next),l=Ci(l,l.next),xr(a,t,e,n,s,r,0),xr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Od(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Iu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wd(c))}s.sort(Bd);for(let r=0;r<s.length;r++)e=zd(s[r],e);return e}function Bd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function zd(i,t){let e=kd(i,t);if(!e)return t;let n=Du(e,i);return Ci(n,n.next),Ci(e,e.next)}function kd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ss(i,e))return e;do{if(Ss(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Vd(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Vd(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Gd(i,t,e,n){let s=i;do s.z===0&&(s.z=Fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function $s(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Pu(i,t,e,n,s,r,a,o)}function Xd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qd(i,t)&&(yr(i,t)&&yr(t,i)&&Yd(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Ss(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ss(i,t){return i.x===t.x&&i.y===t.y}function Lu(i,t,e,n){let s=ya(ve(i,t,e)),r=ya(ve(i,t,n)),a=ya(ve(e,n,i)),o=ya(ve(e,n,t));return!!(s!==r&&a!==o||s===0&&xa(i,e,t)||r===0&&xa(i,n,t)||a===0&&xa(e,i,n)||o===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ya(i){return i>0?1:i<0?-1:0}function qd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Yd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Du(i,t){let e=Ol(i.i,i.x,i.y),n=Ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(i,t,e,n){let s=Ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bl=class{static triangulate(t,e,n=2){return Ld(t,e,n)}},Tn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dh(t),Nh(n,t);let a=t.length;e.forEach(Dh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nh(n,e[l]);let o=Bl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hi=class i extends ge{constructor(t=new Jn([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Jd,C,y=!1,w,b,P,_;if(p){C=p.getSpacedPoints(h),y=!0,u=!1;let E=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,E),b=new B,P=new B,_=new B}u||(m=0,d=0,g=0,v=0);let A=o.extractPoints(c),F=A.shape,V=A.holes;if(!Tn.isClockWise(F)){F=F.reverse();for(let E=0,G=V.length;E<G;E++){let U=V[E];Tn.isClockWise(U)&&(V[E]=U.reverse())}}function K(E){let U=10000000000000001e-36,$=E[0];for(let j=1;j<=E.length;j++){let lt=j%E.length,mt=E[lt],pt=mt.x-$.x,Z=mt.y-$.y,M=pt*pt+Z*Z,At=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs($.x),Math.abs($.y)),Nt=U*At*At;if(M<=Nt){E.splice(lt,1),j--;continue}$=mt}}K(F),V.forEach(K);let L=V.length,H=F;for(let E=0;E<L;E++){let G=V[E];F=F.concat(G)}function tt(E,G,U){return G||Xt("ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(G,U)}let J=F.length;function W(E,G,U){let $,j,lt,mt=E.x-G.x,pt=E.y-G.y,Z=U.x-E.x,M=U.y-E.y,At=mt*mt+pt*pt,Nt=mt*M-pt*Z;if(Math.abs(Nt)>Number.EPSILON){let R=Math.sqrt(At),x=Math.sqrt(Z*Z+M*M),Y=G.x-pt/R,Q=G.y+mt/R,ot=U.x-M/x,xt=U.y+Z/x,yt=((ot-Y)*M-(xt-Q)*Z)/(mt*M-pt*Z);$=Y+mt*yt-E.x,j=Q+pt*yt-E.y;let ct=$*$+j*j;if(ct<=2)return new dt($,j);lt=Math.sqrt(ct/2)}else{let R=!1;mt>Number.EPSILON?Z>Number.EPSILON&&(R=!0):mt<-Number.EPSILON?Z<-Number.EPSILON&&(R=!0):Math.sign(pt)===Math.sign(M)&&(R=!0),R?($=-pt,j=mt,lt=Math.sqrt(At)):($=mt,j=pt,lt=Math.sqrt(At/2))}return new dt($/lt,j/lt)}let it=[];for(let E=0,G=H.length,U=G-1,$=E+1;E<G;E++,U++,$++)U===G&&(U=0),$===G&&($=0),it[E]=W(H[E],H[U],H[$]);let rt=[],ht,Lt=it.concat();for(let E=0,G=L;E<G;E++){let U=V[E];ht=[];for(let $=0,j=U.length,lt=j-1,mt=$+1;$<j;$++,lt++,mt++)lt===j&&(lt=0),mt===j&&(mt=0),ht[$]=W(U[$],U[lt],U[mt]);rt.push(ht),Lt=Lt.concat(ht)}let Rt;if(m===0)Rt=Tn.triangulateShape(H,V);else{let E=[],G=[];for(let U=0;U<m;U++){let $=U/m,j=d*Math.cos($*Math.PI/2),lt=g*Math.sin($*Math.PI/2)+v;for(let mt=0,pt=H.length;mt<pt;mt++){let Z=tt(H[mt],it[mt],lt);D(Z.x,Z.y,-j),$===0&&E.push(Z)}for(let mt=0,pt=L;mt<pt;mt++){let Z=V[mt];ht=rt[mt];let M=[];for(let At=0,Nt=Z.length;At<Nt;At++){let R=tt(Z[At],ht[At],lt);D(R.x,R.y,-j),$===0&&M.push(R)}$===0&&G.push(M)}}Rt=Tn.triangulateShape(E,G)}let Jt=Rt.length,Zt=g+v;for(let E=0;E<J;E++){let G=u?tt(F[E],Lt[E],Zt):F[E];y?(P.copy(w.normals[0]).multiplyScalar(G.x),b.copy(w.binormals[0]).multiplyScalar(G.y),_.copy(C[0]).add(P).add(b),D(_.x,_.y,_.z)):D(G.x,G.y,0)}for(let E=1;E<=h;E++)for(let G=0;G<J;G++){let U=u?tt(F[G],Lt[G],Zt):F[G];y?(P.copy(w.normals[E]).multiplyScalar(U.x),b.copy(w.binormals[E]).multiplyScalar(U.y),_.copy(C[E]).add(P).add(b),D(_.x,_.y,_.z)):D(U.x,U.y,f/h*E)}for(let E=m-1;E>=0;E--){let G=E/m,U=d*Math.cos(G*Math.PI/2),$=g*Math.sin(G*Math.PI/2)+v;for(let j=0,lt=H.length;j<lt;j++){let mt=tt(H[j],it[j],$);D(mt.x,mt.y,f+U)}for(let j=0,lt=V.length;j<lt;j++){let mt=V[j];ht=rt[j];for(let pt=0,Z=mt.length;pt<Z;pt++){let M=tt(mt[pt],ht[pt],$);y?D(M.x,M.y+C[h-1].y,C[h-1].x+U):D(M.x,M.y,f+U)}}}Kt(),O();function Kt(){let E=s.length/3;if(u){let G=0,U=J*G;for(let $=0;$<Jt;$++){let j=Rt[$];I(j[2]+U,j[1]+U,j[0]+U)}G=h+m*2,U=J*G;for(let $=0;$<Jt;$++){let j=Rt[$];I(j[0]+U,j[1]+U,j[2]+U)}}else{for(let G=0;G<Jt;G++){let U=Rt[G];I(U[2],U[1],U[0])}for(let G=0;G<Jt;G++){let U=Rt[G];I(U[0]+J*h,U[1]+J*h,U[2]+J*h)}}n.addGroup(E,s.length/3-E,0)}function O(){let E=s.length/3,G=0;N(H,G),G+=H.length;for(let U=0,$=V.length;U<$;U++){let j=V[U];N(j,G),G+=j.length}n.addGroup(E,s.length/3-E,1)}function N(E,G){let U=E.length;for(;--U>=0;){let $=U,j=U-1;j<0&&(j=E.length-1);for(let lt=0,mt=h+m*2;lt<mt;lt++){let pt=J*lt,Z=J*(lt+1),M=G+$+pt,At=G+j+pt,Nt=G+j+Z,R=G+$+Z;k(M,At,Nt,R)}}}function D(E,G,U){l.push(E),l.push(G),l.push(U)}function I(E,G,U){st(E),st(G),st(U);let $=s.length/3,j=T.generateTopUV(n,s,$-3,$-2,$-1);_t(j[0]),_t(j[1]),_t(j[2])}function k(E,G,U,$){st(E),st(G),st($),st(G),st(U),st($);let j=s.length/3,lt=T.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);_t(lt[0]),_t(lt[1]),_t(lt[3]),_t(lt[1]),_t(lt[2]),_t(lt[3])}function st(E){s.push(l[E*3+0]),s.push(l[E*3+1]),s.push(l[E*3+2])}function _t(E){r.push(E.x),r.push(E.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $d(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ka[s.type]().fromJSON(s)),new i(n,t.options)}},Jd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-f),new dt(u,1-g),new dt(v,1-p)]:[new dt(o,1-l),new dt(h,1-f),new dt(d,1-g),new dt(m,1-p)]}};function $d(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ri=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let C=0;C<c;C++){let y=C*f-r;g.push(y,-T,0),v.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let C=T+c*p,y=T+c*(p+1),w=T+1+c*(p+1),b=T+1+c*p;d.push(C,y,b),d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ii=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,u=new B,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let T=[],C=p/n,y=a+C*o,w=t*Math.cos(y),b=Math.sqrt(t*t-w*w),P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let A=_/e,F=s+A*r;f.x=-b*Math.cos(F),f.y=w,f.z=b*Math.sin(F),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(A+P,1-C),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let C=h[p][T+1],y=h[p][T],w=h[p+1][T],b=h[p+1][T+1];(p!==0||a>0)&&d.push(C,y,b),(p!==n-1||l<Math.PI)&&d.push(y,w,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mr=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new B,d=new B,g=new B;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let T=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(T),d.y=(t+e*Math.cos(m))*Math.sin(T),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,T=(s+1)*(v-1)+m-1,C=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(p,T,y),l.push(T,C,y)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var bs=class i extends ge{constructor(t=new gr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new dt,h=new B,f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function v(){for(let C=0;C<e;C++)m(C);m(r===!1?e:0),T(),p()}function m(C){h=t.getPointAt(C/e,h);let y=a.normals[C],w=a.binormals[C];for(let b=0;b<=s;b++){let P=b/s*Math.PI*2,_=Math.sin(P),A=-Math.cos(P);l.x=A*y.x+_*w.x,l.y=A*y.y+_*w.y,l.z=A*y.z+_*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let C=1;C<=e;C++)for(let y=1;y<=s;y++){let w=(s+1)*(C-1)+(y-1),b=(s+1)*C+(y-1),P=(s+1)*C+y,_=(s+1)*(C-1)+y;g.push(w,b,_),g.push(b,P,_)}}function T(){for(let C=0;C<=e;C++)for(let y=0;y<=s;y++)c.x=C/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Sr=class extends In{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uh(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=ki(i[e]);for(let s in n)t[s]=n[s]}return t}function Uh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Nu={clone:ki,merge:Ve},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ga=class extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pi=class extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Li=class extends Pi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var br=class extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ha=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-n;break;case Ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*n-e;break;case Ul:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,T=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,C=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+T*a[c+w]+C*a[l+w]+y*a[f+w];return r}},qa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ya=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Za=class extends ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=d*u+g*2,T=f[p],C=f[p+1],y=t*u+g*2,w=h[y],b=h[y+1],P=ep(n,e,T,w,s);r[g]=Uu(P,v,C,b,m)}return r}};function Uu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function tp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ep(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Uu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=tp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Il(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Za(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break;case Ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Il(this.settings)&&(Fh(this.settings.inTangents,t),Fh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Pa;var fi=class extends tn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=er;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Ja.prototype.ValueTypeName="color";var $a=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="number";var Ka=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},wr=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends tn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=er;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="vector";var zl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Oh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Oh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Oh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Qa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fu=new Qa,Di=class{constructor(t){this.manager=t!==void 0?t:Fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xn={},kl=class extends Error{constructor(t,e){super(t),this.response=e}},Tr=class extends Di{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=zl.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Xn[t]!==void 0){Xn[t].push({onLoad:e,onProgress:n,onError:s});return}Xn[t]=[],Xn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xn[t],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0,v=0,m=new ReadableStream({start(p){T();function T(){f.read().then(({done:C,value:y})=>{if(C)p.close();else{v+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let b=0,P=h.length;b<P;b++){let _=h[b];_.onProgress&&_.onProgress(w)}p.enqueue(y),T()}},C=>{p.error(C)})}}});return new Response(m)}else throw new kl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{zl.add(`file:${t}`,c);let h=Xn[t];delete Xn[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Xn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Xn[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ws=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ni=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pl=new ue,Bh=new B,zh=new B,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},va=new B,Ma=new Cn,wn=new B,Er=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(va,Ma,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(va,Ma,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new B,kh=new dt,Vh=new dt,Ce=class extends Er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vl=class extends Ar{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ts=class extends Er{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends Ar{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$n=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,to=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Ce(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ce(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ce(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Ce(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Ce(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},eo=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var _c="\\[\\]\\.:\\/",np=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",ip="[^"+_c.replace("\\.","")+"]",sp=/((?:WC+[\/:])*)/.source.replace("WC",xc),rp=/(WCOD+)?/.source.replace("WCOD",ip),ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),lp=new RegExp("^"+sp+rp+ap+op+"$"),cp=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(np,"")}static parseTrackName(t){let e=lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Hl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var Gh=new ue,Ui=class{constructor(t,e,n=0,s=1/0){this.ray=new lr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(Hh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wl(t[s],this,n,e);return n.sort(Hh),n}};function Hh(i,t){return i.distance-t.distance}function Wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Wl(r[a],t,e,!0)}}var wc=class wc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wc.prototype.isMatrix2=!0;var Xl=wc,Wh=new dt,As=class{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var _n=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Dn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,f=c.length;for(let u=0,d=f-1;u<f;d=u++){let g=c[u],v=c[d];g.y>l.y!=v.y>l.y&&l.x<(v.x-g.x)*(l.y-g.y)/(v.y-g.y)+g.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new dt);if(t(h,l))return h;let f=h.y,u=[],d=l.length;for(let g=0;g<d;g++){let v=l[g],m=l[(g+1)%d];if(v.y>f!=m.y>f){let p=v.x+(f-v.y)*(m.x-v.x)/(m.y-v.y);u.push(p)}}return u.length>1&&(u.sort((g,v)=>g-v),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ht('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Tn.area(c);if(h===0)continue;let f=new As;for(let u=0;u<c.length;u++)f.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:f,interiorPoint:e(c,f),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let f=l-1;f>=0;f--){let u=r[f];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Jn;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Dn;h.curves=l.subPath.curves,c.holes.push(h)}return a}};function yc(i,t,e,n){let s=hp(n);switch(e){case cc:return i*t;case ho:return i*t/s.components*s.byteLength;case uo:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case fo:return i*t*2/s.components*s.byteLength;case hc:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case po:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case yo:case vo:case So:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case Fr:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hp(i){switch(i){case Ze:case rc:return{byteLength:1,components:1};case Cs:case ac:case vn:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case yn:case oo:case an:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _p(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:xp,alphahash_pars_fragment:yp,alphamap_fragment:vp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Ep,begin_vertex:Cp,beginnormal_vertex:Rp,bsdfs:Ip,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Vp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:Jp,envmap_fragment:$p,envmap_common_pars_fragment:Kp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:ym,lightprobes_pars_fragment:vm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Em,map_particle_pars_fragment:Cm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Nm,morphtarget_vertex:Um,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:km,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:f0,transmission_pars_fragment:d0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:y0,backgroundCube_vert:v0,backgroundCube_frag:M0,cube_vert:S0,cube_frag:b0,depth_vert:w0,depth_frag:T0,distance_vert:A0,distance_frag:E0,equirect_vert:C0,equirect_frag:R0,linedashed_vert:I0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:N0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:V0,meshphysical_vert:G0,meshphysical_frag:H0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:$0,sprite_frag:K0},Tt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Fn={basic:{uniforms:Ve([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ve([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ve([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ve([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ve([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ve([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ve([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ve([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ve([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ve([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ve([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Ve([Tt.common,Tt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Ve([Tt.lights,Tt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Fn.physical={uniforms:Ve([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Yo={r:0,b:0,g:0},j0=new ue,af=new Gt;af.set(-1,0,0,0,1,0,0,0,1);function Q0(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(T){let C=!1,y=d(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,C){let y=d(C);y&&(y.isCubeTexture||y.mapping===Ir)?(c===void 0&&(c=new fe(new Ln(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:ki(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=se.getTransfer(y.colorSpace)!==ce,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new fe(new Ri(2,2),new Qe({name:"BackgroundMaterial",uniforms:ki(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,C){T.getRGB(Yo,gc(i)),e.buffers.color.setClear(Yo.r,Yo.g,Yo.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:v,dispose:p}}function tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(V,z,K,L,H){let tt=!1,J=f(V,L,K,z);r!==J&&(r=J,c(r.object)),tt=d(V,L,K,H),tt&&g(V,L,K,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,y(V,z,K,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function h(V){return i.deleteVertexArray(V)}function f(V,z,K,L){let H=L.wireframe===!0,tt=n[z.id];tt===void 0&&(tt={},n[z.id]=tt);let J=V.isInstancedMesh===!0?V.id:0,W=tt[J];W===void 0&&(W={},tt[J]=W);let it=W[K.id];it===void 0&&(it={},W[K.id]=it);let rt=it[H];return rt===void 0&&(rt=u(l()),it[H]=rt),rt}function u(V){let z=[],K=[],L=[];for(let H=0;H<e;H++)z[H]=0,K[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:L,object:V,attributes:{},index:null}}function d(V,z,K,L){let H=r.attributes,tt=z.attributes,J=0,W=K.getAttributes();for(let it in W)if(W[it].location>=0){let ht=H[it],Lt=tt[it];if(Lt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(Lt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(Lt=V.instanceColor)),ht===void 0||ht.attribute!==Lt||Lt&&ht.data!==Lt.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function g(V,z,K,L){let H={},tt=z.attributes,J=0,W=K.getAttributes();for(let it in W)if(W[it].location>=0){let ht=tt[it];ht===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(ht=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(ht=V.instanceColor));let Lt={};Lt.attribute=ht,ht&&ht.data&&(Lt.data=ht.data),H[it]=Lt,J++}r.attributes=H,r.attributesNum=J,r.index=L}function v(){let V=r.newAttributes;for(let z=0,K=V.length;z<K;z++)V[z]=0}function m(V){p(V,0)}function p(V,z){let K=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;K[V]=1,L[V]===0&&(i.enableVertexAttribArray(V),L[V]=1),H[V]!==z&&(i.vertexAttribDivisor(V,z),H[V]=z)}function T(){let V=r.newAttributes,z=r.enabledAttributes;for(let K=0,L=z.length;K<L;K++)z[K]!==V[K]&&(i.disableVertexAttribArray(K),z[K]=0)}function C(V,z,K,L,H,tt,J){J===!0?i.vertexAttribIPointer(V,z,K,H,tt):i.vertexAttribPointer(V,z,K,L,H,tt)}function y(V,z,K,L){v();let H=L.attributes,tt=K.getAttributes(),J=z.defaultAttributeValues;for(let W in tt){let it=tt[W];if(it.location>=0){let rt=H[W];if(rt===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(rt=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(rt=V.instanceColor)),rt!==void 0){let ht=rt.normalized,Lt=rt.itemSize,Rt=t.get(rt);if(Rt===void 0)continue;let Jt=Rt.buffer,Zt=Rt.type,Kt=Rt.bytesPerElement,O=Zt===i.INT||Zt===i.UNSIGNED_INT||rt.gpuType===oo;if(rt.isInterleavedBufferAttribute){let N=rt.data,D=N.stride,I=rt.offset;if(N.isInstancedInterleavedBuffer){for(let k=0;k<it.locationSize;k++)p(it.location+k,N.meshPerAttribute);V.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let k=0;k<it.locationSize;k++)m(it.location+k);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let k=0;k<it.locationSize;k++)C(it.location+k,Lt/it.locationSize,Zt,ht,D*Kt,(I+Lt/it.locationSize*k)*Kt,O)}else{if(rt.isInstancedBufferAttribute){for(let N=0;N<it.locationSize;N++)p(it.location+N,rt.meshPerAttribute);V.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let N=0;N<it.locationSize;N++)m(it.location+N);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let N=0;N<it.locationSize;N++)C(it.location+N,Lt/it.locationSize,Zt,ht,Lt*Kt,Lt/it.locationSize*N*Kt,O)}}else if(J!==void 0){let ht=J[W];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(it.location,ht);break;case 3:i.vertexAttrib3fv(it.location,ht);break;case 4:i.vertexAttrib4fv(it.location,ht);break;default:i.vertexAttrib1fv(it.location,ht)}}}}T()}function w(){A();for(let V in n){let z=n[V];for(let K in z){let L=z[K];for(let H in L){let tt=L[H];for(let J in tt)h(tt[J].object),delete tt[J];delete L[H]}}delete n[V]}}function b(V){if(n[V.id]===void 0)return;let z=n[V.id];for(let K in z){let L=z[K];for(let H in L){let tt=L[H];for(let J in tt)h(tt[J].object),delete tt[J];delete L[H]}}delete n[V.id]}function P(V){for(let z in n){let K=n[z];for(let L in K){let H=K[L];if(H[V.id]===void 0)continue;let tt=H[V.id];for(let J in tt)h(tt[J].object),delete tt[J];delete H[V.id]}}}function _(V){for(let z in n){let K=n[z],L=V.isInstancedMesh===!0?V.id:0,H=K[L];if(H!==void 0){for(let tt in H){let J=H[tt];for(let W in J)h(J[W].object),delete J[W];delete H[tt]}delete K[L],Object.keys(K).length===0&&delete n[z]}}}function A(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==on&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let _=P===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ze&&P!==an&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:w,samples:b}}function ig(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,C=T*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,d);for(let w=0;w!==C;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=d;C!==v;++C,y+=4)a.copy(f[C]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ps=4,sg=6,rg=20,ag=256,zr=new Ts,Ou=new qt,Tc=null,Ac=0,Ec=0,Cc=!1,og=new B,Vi=new B,vi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=og}=r;Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tc,Ac,Ec),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:vn,format:on,colorSpace:nr,depthBuffer:!1},s=Bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lg(r)),this._blurMaterial=hg(r,t,e),this._ggxMaterial=cg(r,t,e)}return s}_compileMaterial(t){let e=new fe(new ge,t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ou),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Ln,new Pn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(Ou),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let w=this._cubeSize;Is(s,y*w,C>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ps?n-g+Ps:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Is(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Is(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),u=4*(this._cubeSize-h);Is(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,zr)}};function lg(i){let t=[],e=[],n=i,s=i-Ps+1+sg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let T=p%3*2/3-1,C=p>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(y,d*u*p);for(let w=0;w<u;w++){let b=h[w*2]*2-1,P=h[w*2+1]*2-1;p===0?Vi.set(1,P,b):p===1?Vi.set(-b,1,-P):p===2?Vi.set(-b,P,1):p===3?Vi.set(-1,P,-b):p===4?Vi.set(-b,-1,P):Vi.set(b,P,-1),Vi.toArray(v,(p*u+w)*d)}}let m=new ge;m.setAttribute("position",new We(g,d)),m.setAttribute("outputDirection",new We(v,d)),e.push(new fe(m,null)),n>Ps&&n--}return{lodMeshes:e,sizeLods:t}}function Bu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cg(i,t,e){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function hg(i,t,e){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function zu(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ku(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jo=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ln(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Nn});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Fe),new to(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===so||d===ro)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Jo(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===so||d===ro,v=d===gi||d===Bi;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new vi(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||v&&T&&l(T)?(n===null&&(n=new vi(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===so?u.mapping=gi:d===ro&&(u.mapping=Bi),u}function l(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let T=d.array;v=d.version;for(let C=0,y=T.length;C<y;C+=3){let w=T[C+0],b=T[C+1],P=T[C+2];u.push(w,b,b,P,P,w)}}else{let T=g.array;v=g.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let w=C+0,b=C+1,P=C+2;u.push(w,b,b,P,P,w)}}let m=new(g.count>=65535?or:ar)(u,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function pg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;d===!0&&(C=1),g===!0&&(C=2),v===!0&&(C=3);let y=o.attributes.position.count*C,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*w*4*f),P=new rr(b,y,w,f);P.type=an,P.needsUpdate=!0;let _=C*4;for(let F=0;F<f;F++){let V=m[F],z=p[F],K=T[F],L=y*w*4*F;for(let H=0;H<V.count;H++){let tt=H*_;d===!0&&(s.fromBufferAttribute(V,H),b[L+tt+0]=s.x,b[L+tt+1]=s.y,b[L+tt+2]=s.z,b[L+tt+3]=0),g===!0&&(s.fromBufferAttribute(z,H),b[L+tt+4]=s.x,b[L+tt+5]=s.y,b[L+tt+6]=s.z,b[L+tt+7]=0),v===!0&&(s.fromBufferAttribute(K,H),b[L+tt+8]=s.x,b[L+tt+9]=s.y,b[L+tt+10]=s.z,b[L+tt+11]=K.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new dt(y,w)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function _g(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var xg={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[Oi]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function yg(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ge;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let h=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fe(c,h),u=new Ts(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,T=[],C=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let b=0;b<T.length;b++){let P=T[b];P.setSize&&P.setSize(y,w)}},this.setEffects=function(y){T=y,C=T.length>0&&T[0].isRenderPass===!0;let w=a.width,b=a.height;T.length>0&&o===null&&(o=new Ye(w,b,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(w,b,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let _=T[P];_.setSize&&_.setSize(w,b)}},this.begin=function(y,w){if(v||y.toneMapping===xn&&T.length===0)return!1;if(p=w,w!==null){let b=w.width,P=w.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=xn,!0},this.hasRenderPass=function(){return C},this.end=function(y,w){y.toneMapping=m,v=!0;let b=a,P=o;for(let _=0;_<T.length;_++){let A=T[_];A.enabled!==!1&&(A.render(y,P,b,w),A.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},se.getTransfer(d)===ce&&(h.defines.SRGB_TRANSFER="");let _=xg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var of=new Xe,Pc=new ci(1,1),lf=new rr,cf=new Na,hf=new ur,Vu=[],Gu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),Pe(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Pe(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Pe(e,n)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=e.isReversedDepthBuffer()?qo:Xo,r=Pc):r=of,e.setTexture2D(t||r,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cf,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hf,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lf,s)}function zg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Eg;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Ig;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Gg(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Hg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function Qg(i,t){i.uniform3uiv(this.addr,t)}function t_(i,t){i.uniform4uiv(this.addr,t)}function e_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pc:a=of;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function n_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cf,r[a])}function i_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function s_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function r_(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function qu(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qu(e,c===void 0?new Lc(o,i,t):new Dc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Nc(o),qu(e,f)),e=f}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);a_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o_=37297,l_=0;function c_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zu=new Gt;function h_(i){se._getMatrix(Zu,se.workingColorSpace,i);let t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ju(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(t),o)}else return r}function u_(i,t){let e=h_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var f_={[jl]:"Linear",[Ql]:"Reinhard",[tc]:"Cineon",[Oi]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[ec]:"Custom"};function d_(i,t){let e=f_[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new B;function p_(){se.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function g_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vr(i){return i!==""}function $u(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(x_,v_)}var y_=new Map;function v_(i,t){let e=te[t];if(e===void 0){let n=y_.get(t);if(n!==void 0)e=te[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uc(e)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(M_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var b_={[Rr]:"SHADOWMAP_TYPE_PCF",[pi]:"SHADOWMAP_TYPE_VSM"};function w_(i){return b_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T_={[gi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"};function A_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var E_={[Bi]:"ENVMAP_MODE_REFRACTION"};function C_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[io]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[du]:"ENVMAP_BLENDING_ADD"};function I_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R_[i.combine]||"ENVMAP_BLENDING_NONE"}function P_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=w_(e),c=A_(e),h=C_(e),f=I_(e),u=P_(e),d=m_(e),g=g_(r),v=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?te.tonemapping_pars_fragment:"",e.toneMapping!==xn?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Uc(a),a=$u(a,e),a=Ku(a,e),o=Uc(o),o=$u(o,e),o=Ku(o,e),a=ju(a),o=ju(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=T+m+a,y=T+p+o,w=Yu(s,s.VERTEX_SHADER,C),b=Yu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(V){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(v)||"",K=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(b)||"",H=z.trim(),tt=K.trim(),J=L.trim(),W=!0,it=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,b);else{let rt=Ju(s,w,"vertex"),ht=Ju(s,b,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+rt+`
`+ht)}else H!==""?Ht("WebGLProgram: Program Info Log:",H):(tt===""||J==="")&&(it=!1);it&&(V.diagnostics={runnable:W,programLog:H,vertexShader:{log:tt,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(b),_=new Ls(s,v),A=__(s,v)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(v,o_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}var D_=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oc(t),e.set(t,n)),n}},Oc=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function N_(i){return i===yi||i===Fr||i===Or}function U_(i,t,e,n,s,r){let a=new gs,o=new Fc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,F,V,z,K){let L=V.fog,H=z.geometry,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?V.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||tt,J),it=W&&W.mapping===Ir?W.image.height:null,rt=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=ht!==void 0?ht.length:0,Rt=0;H.morphAttributes.position!==void 0&&(Rt=1),H.morphAttributes.normal!==void 0&&(Rt=2),H.morphAttributes.color!==void 0&&(Rt=3);let Jt,Zt,Kt,O;if(rt){let pe=Fn[rt];Jt=pe.vertexShader,Zt=pe.fragmentShader}else{Jt=_.vertexShader,Zt=_.fragmentShader;let pe=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,pe,oe),Kt=pe.id,O=oe.id}let N=i.getRenderTarget(),D=i.state.buffers.depth.getReversed(),I=z.isInstancedMesh===!0,k=z.isBatchedMesh===!0,st=!!_.map,_t=!!_.matcap,E=!!W,G=!!_.aoMap,U=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,j=!!_.normalMap,lt=!!_.displacementMap,mt=!!_.emissiveMap,pt=!!_.metalnessMap,Z=!!_.roughnessMap,M=_.anisotropy>0,At=_.clearcoat>0,Nt=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,Y=_.sheen>0,Q=_.transmission>0,ot=M&&!!_.anisotropyMap,xt=At&&!!_.clearcoatMap,yt=At&&!!_.clearcoatNormalMap,ct=At&&!!_.clearcoatRoughnessMap,ut=x&&!!_.iridescenceMap,vt=x&&!!_.iridescenceThicknessMap,Ot=Y&&!!_.sheenColorMap,St=Y&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,kt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,$t=Q&&!!_.transmissionMap,q=Q&&!!_.thicknessMap,bt=!!_.gradientMap,ft=!!_.alphaMap,wt=_.alphaTest>0,It=!!_.alphaHash,gt=!!_.extensions,Vt=xn;_.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:Zt,defines:_.defines,customVertexShaderID:Kt,customFragmentShaderID:O,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:k,batchingColor:k&&z._colorsTexture!==null,instancing:I,instancingColor:I&&z.instanceColor!==null,instancingMorph:I&&z.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:st,matcap:_t,envMap:E,envMapMode:E&&W.mapping,envMapCubeUVHeight:it,aoMap:G,lightMap:U,bumpMap:$,normalMap:j,displacementMap:lt,emissiveMap:mt,normalMapObjectSpace:j&&_.normalMapType===gu,normalMapTangentSpace:j&&_.normalMapType===Br,packedNormalMap:j&&_.normalMapType===Br&&N_(_.normalMap.format),metalnessMap:pt,roughnessMap:Z,anisotropy:M,anisotropyMap:ot,clearcoat:At,clearcoatMap:xt,clearcoatNormalMap:yt,clearcoatRoughnessMap:ct,dispersion:Nt,retroreflection:R,iridescence:x,iridescenceMap:ut,iridescenceThicknessMap:vt,sheen:Y,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Mt,specularColorMap:kt,specularIntensityMap:Wt,transmission:Q,transmissionMap:$t,thicknessMap:q,gradientMap:bt,opaque:_.transparent===!1&&_.blending===Es&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:It,combine:_.combine,mapUv:st&&g(_.map.channel),aoMapUv:G&&g(_.aoMap.channel),lightMapUv:U&&g(_.lightMap.channel),bumpMapUv:$&&g(_.bumpMap.channel),normalMapUv:j&&g(_.normalMap.channel),displacementMapUv:lt&&g(_.displacementMap.channel),emissiveMapUv:mt&&g(_.emissiveMap.channel),metalnessMapUv:pt&&g(_.metalnessMap.channel),roughnessMapUv:Z&&g(_.roughnessMap.channel),anisotropyMapUv:ot&&g(_.anisotropyMap.channel),clearcoatMapUv:xt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(_.sheenRoughnessMap.channel),specularMapUv:Mt&&g(_.specularMap.channel),specularColorMapUv:kt&&g(_.specularColorMap.channel),specularIntensityMapUv:Wt&&g(_.specularIntensityMap.channel),transmissionMapUv:$t&&g(_.transmissionMap.channel),thicknessMapUv:q&&g(_.thicknessMap.channel),alphaMapUv:ft&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(j||M),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(st||ft),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&j===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:D,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Rt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:st&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:mt&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===Oe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&_.extensions.multiDraw===!0||k)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)A.push(F),A.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(A,_),T(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function T(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let A=d[_.type],F;if(A){let V=Fn[A];F=Nu.clone(V.uniforms)}else F=_.uniforms;return F}function y(_,A){let F=h.get(A);return F!==void 0?++F.usedTimes:(F=new L_(i,A,_,s),c.push(F),h.set(A,F)),F}function w(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:P}}function F_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,m,p){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=g,T.materialVariant=a(u),T.groupOrder=v,T.renderOrder=u.renderOrder,T.z=m,T.group=p),t++,T}function l(u,d,g,v,m,p,T){T.reversedDepth===!0&&(m=-m);let C=o(u,d,g,v,m,p);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,d,g,v,m,p){let T=o(u,d,g,v,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||O_),n.length>1&&n.sort(d||tf),s.length>1&&s.sort(d||tf)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function B_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ef,i.set(n,[a])):s>=r.length?(a=new ef,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new qt};break;case"SpotLight":e={position:new B,direction:new B,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V_=0;function G_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H_(i){let t=new z_,e=k_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ue,a=new ue;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,C=0,y=0,w=0,b=0,P=0,_=0,A=0,F=0;c.sort(G_);for(let z=0,K=c.length;z<K;z++){let L=c[z],H=L.color,tt=L.intensity,J=L.distance,W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yi?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*tt,f+=H.g*tt,u+=H.b*tt;else if(L.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(L.sh.coefficients[it],tt);F++}else if(L.isSunLight){let it=t.get(L);if(it.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,ht=e.get(L);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=ht,n.sunShadowMap[g]=W;let Lt=rt.getViewportCount();for(let Rt=0;Rt<Lt;Rt++)n.sunShadowMatrix[v+Rt]=rt.getMatrix(Rt),n.sunShadowCascade[v+Rt]=rt._cascadeData[Rt];v+=Lt,g++}n.sun[d]=it,d++}else if(L.isDirectionalLight){let it=t.get(L);if(it.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,ht=e.get(L);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.directionalShadow[m]=ht,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=it,m++}else if(L.isSpotLight){let it=t.get(L);it.position.setFromMatrixPosition(L.matrixWorld),it.color.copy(H).multiplyScalar(tt),it.distance=J,it.coneCos=Math.cos(L.angle),it.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),it.decay=L.decay,n.spot[T]=it;let rt=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,rt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[T]=rt.matrix,L.castShadow){let ht=e.get(L);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.spotShadow[T]=ht,n.spotShadowMap[T]=W,P++}T++}else if(L.isRectAreaLight){let it=t.get(L);it.color.copy(H).multiplyScalar(tt),it.halfWidth.set(L.width*.5,0,0),it.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=it,C++}else if(L.isPointLight){let it=t.get(L);if(it.color.copy(L.color).multiplyScalar(L.intensity),it.distance=L.distance,it.decay=L.decay,L.castShadow){let rt=L.shadow,ht=e.get(L);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,ht.shadowCameraNear=rt.camera.near,ht.shadowCameraFar=rt.camera.far,n.pointShadow[p]=ht,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=it,p++}else if(L.isHemisphereLight){let it=t.get(L);it.skyColor.copy(L.color).multiplyScalar(tt),it.groundColor.copy(L.groundColor).multiplyScalar(tt),n.hemi[y]=it,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let V=n.hash;(V.sunLength!==d||V.directionalLength!==m||V.pointLength!==p||V.spotLength!==T||V.rectAreaLength!==C||V.hemiLength!==y||V.numSunShadows!==g||V.numDirectionalShadows!==w||V.numPointShadows!==b||V.numSpotShadows!==P||V.numSpotMaps!==_||V.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=m,n.spot.length=T,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,V.sunLength=d,V.directionalLength=m,V.pointLength=p,V.spotLength=T,V.rectAreaLength=C,V.hemiLength=y,V.numSunShadows=g,V.numDirectionalShadows=w,V.numPointShadows=b,V.numSpotShadows=P,V.numSpotMaps=_,V.numLightProbes=F,n.version=V_++)}function l(c,h){let f=0,u=0,d=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){let y=c[T];if(y.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function nf(i){let t=new H_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function W_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new nf(i),t.set(s,[o])):r>=a.length?(o=new nf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Z_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],sf=new ue,kr=new B,Ic=new B;function J_(i,t,e){let n=new ys,s=new dt,r=new dt,a=new ye,o=new Ha,l=new Wa,c={},h=e.maxTextureSize,f={[mi]:Oe,[Oe]:mi,[qe]:qe},u=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let p=this.type;this.render=function(b,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Yh&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let A=i.getRenderTarget(),F=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Nn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let K=p!==this.type;K&&P.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=b.length;L<H;L++){let tt=b[L],J=tt.shadow;if(J===void 0){Ht("WebGLShadowMap:",tt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let W=J.getFrameExtents();s.multiply(W),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,J.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=it,J.map===null||K===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===pi){if(tt.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ye(s.x,s.y,{format:yi,type:vn,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),J.map.texture.name=tt.name+".shadowMap",J.map.depthTexture=new ci(s.x,s.y,an),J.map.depthTexture.name=tt.name+".shadowMapDepth",J.map.depthTexture.format=An,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=De,J.map.depthTexture.magFilter=De}else tt.isPointLight?(J.map=new Jo(s.x),J.map.depthTexture=new Ua(s.x,yn)):(J.map=new Ye(s.x,s.y),J.map.depthTexture=new ci(s.x,s.y,yn)),J.map.depthTexture.name=tt.name+".shadowMap",J.map.depthTexture.format=An,this.type===Rr?(J.map.depthTexture.compareFunction=it?qo:Xo,J.map.depthTexture.minFilter=Fe,J.map.depthTexture.magFilter=Fe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=De,J.map.depthTexture.magFilter=De);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let rt=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();tt.isPointLight!==!0&&J.updateMatrices(tt,_);for(let ht=0;ht<rt;ht++){let Lt=J.getCamera(ht);if(tt.isPointLight){let Rt=J.camera,Jt=J.matrix,Zt=tt.distance||Rt.far;Zt!==Rt.far&&(Rt.far=Zt,Rt.updateProjectionMatrix()),kr.setFromMatrixPosition(tt.matrixWorld),Rt.position.copy(kr),Ic.copy(Rt.position),Ic.add(Y_[ht]),Rt.up.copy(Z_[ht]),Rt.lookAt(Ic),Rt.updateMatrixWorld(),Jt.makeTranslation(-kr.x,-kr.y,-kr.z),sf.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(sf,Rt.coordinateSystem,Rt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(J.map),i.clear());let Rt=J.getViewport(ht);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(a)}n=J.getFrustum(ht),y(P,_,Lt,tt,this.type)}J.isPointLightShadow!==!0&&this.type===pi&&T(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,F,V)};function T(b,P){let _=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ye(s.x,s.y,{format:yi,type:vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,_,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,_,d,v,null)}function C(b,P,_,A){let F=null,V=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)F=V;else if(F=_.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=F.uuid,K=P.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let H=L[K];H===void 0&&(H=F.clone(),L[K]=H,P.addEventListener("dispose",w)),F=H}if(F.visible=P.visible,F.wireframe=P.wireframe,A===pi?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:f[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let z=i.properties.get(F);z.light=_}return F}function y(b,P,_,A,F){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&F===pi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let K=t.update(b),L=b.material;if(Array.isArray(L)){let H=K.groups;for(let tt=0,J=H.length;tt<J;tt++){let W=H[tt],it=L[W.materialIndex];if(it&&it.visible){let rt=C(b,it,A,F);b.onBeforeShadow(i,b,P,_,K,rt,W),i.renderBufferDirect(_,null,K,rt,b,W),b.onAfterShadow(i,b,P,_,K,rt,W)}}}else if(L.visible){let H=C(b,L,A,F);b.onBeforeShadow(i,b,P,_,K,H,null),i.renderBufferDirect(_,null,K,H,b,null),b.onAfterShadow(i,b,P,_,K,H,null)}}let z=b.children;for(let K=0,L=z.length;K<L;K++)y(z[K],P,_,A,F)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let A=c[_],F=b.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function $_(i,t){function e(){let q=!1,bt=new ye,ft=null,wt=new ye(0,0,0,0);return{setMask:function(It){ft!==It&&!q&&(i.colorMask(It,It,It,It),ft=It)},setLocked:function(It){q=It},setClear:function(It,gt,Vt,Bt,pe){pe===!0&&(It*=Bt,gt*=Bt,Vt*=Bt),bt.set(It,gt,Vt,Bt),wt.equals(bt)===!1&&(i.clearColor(It,gt,Vt,Bt),wt.copy(bt))},reset:function(){q=!1,ft=null,wt.set(-1,0,0,0)}}}function n(){let q=!1,bt=!1,ft=null,wt=null,It=null;return{setReversed:function(gt){if(bt!==gt){let Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return bt},setTest:function(gt){gt?N(i.DEPTH_TEST):D(i.DEPTH_TEST)},setMask:function(gt){ft!==gt&&!q&&(i.depthMask(gt),ft=gt)},setFunc:function(gt){if(bt&&(gt=Cu[gt]),wt!==gt){switch(gt){case wa:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=gt}},setLocked:function(gt){q=gt},setClear:function(gt){It!==gt&&(It=gt,bt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){q=!1,ft=null,wt=null,It=null,bt=!1}}}function s(){let q=!1,bt=null,ft=null,wt=null,It=null,gt=null,Vt=null,Bt=null,pe=null;return{setTest:function(oe){q||(oe?N(i.STENCIL_TEST):D(i.STENCIL_TEST))},setMask:function(oe){bt!==oe&&!q&&(i.stencilMask(oe),bt=oe)},setFunc:function(oe,un,Sn){(ft!==oe||wt!==un||It!==Sn)&&(i.stencilFunc(oe,un,Sn),ft=oe,wt=un,It=Sn)},setOp:function(oe,un,Sn){(gt!==oe||Vt!==un||Bt!==Sn)&&(i.stencilOp(oe,un,Sn),gt=oe,Vt=un,Bt=Sn)},setLocked:function(oe){q=oe},setClear:function(oe){pe!==oe&&(i.clearStencil(oe),pe=oe)},reset:function(){q=!1,bt=null,ft=null,wt=null,It=null,gt=null,Vt=null,Bt=null,pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,T=null,C=null,y=null,w=null,b=null,P=null,_=new qt(0,0,0),A=0,F=!1,V=null,z=null,K=null,L=null,H=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(it)[1]),J=W>=1):it.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),J=W>=2);let rt=null,ht={},Lt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Jt=new ye().fromArray(Lt),Zt=new ye().fromArray(Rt);function Kt(q,bt,ft,wt){let It=new Uint8Array(4),gt=i.createTexture();i.bindTexture(q,gt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<ft;Vt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(bt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return gt}let O={};O[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(i.DEPTH_TEST),a.setFunc(hs),$(!1),j(ql),N(i.CULL_FACE),G(Nn);function N(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function D(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function I(q,bt){return u[q]!==bt?(i.bindFramebuffer(q,bt),u[q]=bt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function k(q,bt){let ft=g,wt=!1;if(q){ft=d.get(bt),ft===void 0&&(ft=[],d.set(bt,ft));let It=q.textures;if(ft.length!==It.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Vt=It.length;gt<Vt;gt++)ft[gt]=i.COLOR_ATTACHMENT0+gt;ft.length=It.length,wt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ft)}function st(q){return v!==q?(i.useProgram(q),v=q,!0):!1}let _t={[Fi]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};_t[Kh]=i.MIN,_t[jh]=i.MAX;let E={[Qh]:i.ZERO,[tu]:i.ONE,[eu]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function G(q,bt,ft,wt,It,gt,Vt,Bt,pe,oe){if(q===Nn){m===!0&&(D(i.BLEND),m=!1);return}if(m===!1&&(N(i.BLEND),m=!0),q!==Zh){if(q!==p||oe!==F){if((T!==Fi||w!==Fi)&&(i.blendEquation(i.FUNC_ADD),T=Fi,w=Fi),oe)switch(q){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",q);break}else switch(q){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",q);break}C=null,y=null,b=null,P=null,_.set(0,0,0),A=0,p=q,F=oe}return}It=It||bt,gt=gt||ft,Vt=Vt||wt,(bt!==T||It!==w)&&(i.blendEquationSeparate(_t[bt],_t[It]),T=bt,w=It),(ft!==C||wt!==y||gt!==b||Vt!==P)&&(i.blendFuncSeparate(E[ft],E[wt],E[gt],E[Vt]),C=ft,y=wt,b=gt,P=Vt),(Bt.equals(_)===!1||pe!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,pe),_.copy(Bt),A=pe),p=q,F=!1}function U(q,bt){q.side===qe?D(i.CULL_FACE):N(i.CULL_FACE);let ft=q.side===Oe;bt&&(ft=!ft),$(ft),q.blending===Es&&q.transparent===!1?G(Nn):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let wt=q.stencilWrite;o.setTest(wt),wt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),mt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):D(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(q){V!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),V=q)}function j(q){q!==Xh?(N(i.CULL_FACE),q!==z&&(q===ql?i.cullFace(i.BACK):q===qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):D(i.CULL_FACE),z=q}function lt(q){q!==K&&(J&&i.lineWidth(q),K=q)}function mt(q,bt,ft){q?(N(i.POLYGON_OFFSET_FILL),(L!==bt||H!==ft)&&(L=bt,H=ft,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,ft))):D(i.POLYGON_OFFSET_FILL)}function pt(q){q?N(i.SCISSOR_TEST):D(i.SCISSOR_TEST)}function Z(q){q===void 0&&(q=i.TEXTURE0+tt-1),rt!==q&&(i.activeTexture(q),rt=q)}function M(q,bt,ft){ft===void 0&&(rt===null?ft=i.TEXTURE0+tt-1:ft=rt);let wt=ht[ft];wt===void 0&&(wt={type:void 0,texture:void 0},ht[ft]=wt),(wt.type!==q||wt.texture!==bt)&&(rt!==ft&&(i.activeTexture(ft),rt=ft),i.bindTexture(q,bt||O[q]),wt.type=q,wt.texture=bt)}function At(){let q=ht[rt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function x(){try{i.texSubImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function Y(){try{i.texSubImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function xt(){try{i.texStorage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function yt(){try{i.texStorage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function ct(){try{i.texImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function ut(){try{i.texImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function vt(q){return f[q]!==void 0?f[q]:i.getParameter(q)}function Ot(q,bt){f[q]!==bt&&(i.pixelStorei(q,bt),f[q]=bt)}function St(q){Jt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Jt.copy(q))}function Mt(q){Zt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Zt.copy(q))}function kt(q,bt){let ft=c.get(bt);ft===void 0&&(ft=new WeakMap,c.set(bt,ft));let wt=ft.get(q);wt===void 0&&(wt=i.getUniformBlockIndex(bt,q.name),ft.set(q,wt))}function Wt(q,bt){let wt=c.get(bt).get(q);l.get(bt)!==wt&&(i.uniformBlockBinding(bt,wt,q.__bindingPointIndex),l.set(bt,wt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},rt=null,ht={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,T=null,C=null,y=null,w=null,b=null,P=null,_=new qt(0,0,0),A=0,F=!1,V=null,z=null,K=null,L=null,H=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:D,bindFramebuffer:I,drawBuffers:k,useProgram:st,setBlending:G,setMaterial:U,setFlipSided:$,setCullFace:j,setLineWidth:lt,setPolygonOffset:mt,setScissorTest:pt,activeTexture:Z,bindTexture:M,unbindTexture:At,compressedTexImage2D:Nt,compressedTexImage3D:R,texImage2D:ct,texImage3D:ut,pixelStorei:Ot,getParameter:vt,updateUBOMapping:kt,uniformBlockBinding:Wt,texStorage2D:xt,texStorage3D:yt,texSubImage2D:x,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:ot,scissor:St,viewport:Mt,reset:$t}}function K_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return g?new OffscreenCanvas(R,x):sr("canvas")}function m(R,x,Y){let Q=1,ot=Nt(R);if((ot.width>Y||ot.height>Y)&&(Q=Y/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let xt=Math.floor(Q*ot.width),yt=Math.floor(Q*ot.height);u===void 0&&(u=v(xt,yt));let ct=x?v(xt,yt):u;return ct.width=xt,ct.height=yt,ct.getContext("2d").drawImage(R,0,0,xt,yt),Ht("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+xt+"x"+yt+")."),ct}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps}function T(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,Y,Q,ot,xt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;Q&&(yt=t.get("EXT_texture_norm16"),yt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=x;if(x===i.RED&&(Y===i.FLOAT&&(ct=i.R32F),Y===i.HALF_FLOAT&&(ct=i.R16F),Y===i.UNSIGNED_BYTE&&(ct=i.R8),Y===i.UNSIGNED_SHORT&&yt&&(ct=yt.R16_EXT),Y===i.SHORT&&yt&&(ct=yt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ct=i.R8UI),Y===i.UNSIGNED_SHORT&&(ct=i.R16UI),Y===i.UNSIGNED_INT&&(ct=i.R32UI),Y===i.BYTE&&(ct=i.R8I),Y===i.SHORT&&(ct=i.R16I),Y===i.INT&&(ct=i.R32I)),x===i.RG&&(Y===i.FLOAT&&(ct=i.RG32F),Y===i.HALF_FLOAT&&(ct=i.RG16F),Y===i.UNSIGNED_BYTE&&(ct=i.RG8),Y===i.UNSIGNED_SHORT&&yt&&(ct=yt.RG16_EXT),Y===i.SHORT&&yt&&(ct=yt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ct=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ct=i.RG16UI),Y===i.UNSIGNED_INT&&(ct=i.RG32UI),Y===i.BYTE&&(ct=i.RG8I),Y===i.SHORT&&(ct=i.RG16I),Y===i.INT&&(ct=i.RG32I)),x===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),Y===i.UNSIGNED_INT&&(ct=i.RGB32UI),Y===i.BYTE&&(ct=i.RGB8I),Y===i.SHORT&&(ct=i.RGB16I),Y===i.INT&&(ct=i.RGB32I)),x===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ct=i.RGBA32UI),Y===i.BYTE&&(ct=i.RGBA8I),Y===i.SHORT&&(ct=i.RGBA16I),Y===i.INT&&(ct=i.RGBA32I)),x===i.RGB&&(Y===i.UNSIGNED_SHORT&&yt&&(ct=yt.RGB16_EXT),Y===i.SHORT&&yt&&(ct=yt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),x===i.RGBA){let ut=xt?ir:se.getTransfer(ot);Y===i.FLOAT&&(ct=i.RGBA32F),Y===i.HALF_FLOAT&&(ct=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ct=ut===ce?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&yt&&(ct=yt.RGBA16_EXT),Y===i.SHORT&&yt&&(ct=yt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(R,x){let Y;return R?x===null||x===yn||x===Rs?Y=i.DEPTH24_STENCIL8:x===an?Y=i.DEPTH32F_STENCIL8:x===Cs&&(Y=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yn||x===Rs?Y=i.DEPTH_COMPONENT24:x===an?Y=i.DEPTH_COMPONENT32F:x===Cs&&(Y=i.DEPTH_COMPONENT16),Y}function b(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==De&&R.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function P(R){let x=R.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),V(x)}function A(R){let x=n.get(R);if(x.__webglInit===void 0)return;let Y=R.source,Q=d.get(Y);if(Q){let ot=Q[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&F(R),Object.keys(Q).length===0&&d.delete(Y)}n.remove(R)}function F(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let Y=R.source,Q=d.get(Y);delete Q[x.__cacheKey],a.memory.textures--}function V(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let ot=0;ot<x.__webglFramebuffer[Q].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[Q][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Y=R.textures;for(let Q=0,ot=Y.length;Q<ot;Q++){let xt=n.get(Y[Q]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(Y[Q])}n.remove(R)}let z=0;function K(){z=0}function L(){return z}function H(R){z=R}function tt(){let R=z;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function J(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function W(R,x){let Y=n.get(R);if(R.isVideoTexture&&M(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let Q=R.image;if(Q===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{D(Y,R,x);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+x)}function it(R,x){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){D(Y,R,x);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+x)}function rt(R,x){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){D(Y,R,x);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+x)}function ht(R,x){let Y=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Y.__version!==R.version){I(Y,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+x)}let Lt={[oi]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[us]:i.MIRRORED_REPEAT},Rt={[De]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Jt={[xu]:i.NEVER,[bu]:i.ALWAYS,[yu]:i.LESS,[Xo]:i.LEQUAL,[vu]:i.EQUAL,[qo]:i.GEQUAL,[Mu]:i.GREATER,[Su]:i.NOTEQUAL};function Zt(R,x){if(x.type===an&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Fe||x.magFilter===ao||x.magFilter===Pr||x.magFilter===_i||x.minFilter===Fe||x.minFilter===ao||x.minFilter===Pr||x.minFilter===_i)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Lt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Lt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Lt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Rt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Jt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Pr&&x.minFilter!==_i||x.type===an&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(R,x){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",P));let Q=x.source,ot=d.get(Q);ot===void 0&&(ot={},d.set(Q,ot));let xt=J(x);if(xt!==R.__cacheKey){ot[xt]===void 0&&(ot[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ot[xt].usedTimes++;let yt=ot[R.__cacheKey];yt!==void 0&&(ot[R.__cacheKey].usedTimes--,yt.usedTimes===0&&F(x)),R.__cacheKey=xt,R.__webglTexture=ot[xt].texture}return Y}function O(R,x,Y){return Math.floor(Math.floor(R/Y)/x)}function N(R,x,Y,Q){let xt=R.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,Y,Q,x.data);else{xt.sort((Ot,St)=>Ot.start-St.start);let yt=0;for(let Ot=1;Ot<xt.length;Ot++){let St=xt[yt],Mt=xt[Ot],kt=St.start+St.count,Wt=O(Mt.start,x.width,4),$t=O(St.start,x.width,4);Mt.start<=kt+1&&Wt===$t&&O(Mt.start+Mt.count-1,x.width,4)===Wt?St.count=Math.max(St.count,Mt.start+Mt.count-St.start):(++yt,xt[yt]=Mt)}xt.length=yt+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ot=0,St=xt.length;Ot<St;Ot++){let Mt=xt[Ot],kt=Math.floor(Mt.start/4),Wt=Math.ceil(Mt.count/4),$t=kt%x.width,q=Math.floor(kt/x.width),bt=Wt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,$t,q,bt,ft,Y,Q,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function D(R,x,Y){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let ot=Kt(R,x),xt=x.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+Y);let yt=n.get(xt);if(xt.version!==yt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=se.getPrimaries(se.workingColorSpace),wt=x.colorSpace===Kn?null:se.getPrimaries(x.colorSpace),It=x.colorSpace===Kn||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ut=m(x.image,!1,s.maxTextureSize);ut=At(x,ut);let vt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),St=y(x.internalFormat,vt,Ot,x.normalized,x.colorSpace,x.isVideoTexture);Zt(Q,x);let Mt,kt=x.mipmaps,Wt=x.isVideoTexture!==!0,$t=yt.__version===void 0||ot===!0,q=xt.dataReady,bt=b(x,ut);if(x.isDepthTexture)St=w(x.format===xi,x.type),$t&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,St,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,St,ut.width,ut.height,0,vt,Ot,null));else if(x.isDataTexture)if(kt.length>0){Wt&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let ft=0,wt=kt.length;ft<wt;ft++)Mt=kt[ft],Wt?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,St,Mt.width,Mt.height,0,vt,Ot,Mt.data);x.generateMipmaps=!1}else Wt?($t&&e.texStorage2D(i.TEXTURE_2D,bt,St,ut.width,ut.height),q&&N(x,ut,vt,Ot)):e.texImage2D(i.TEXTURE_2D,0,St,ut.width,ut.height,0,vt,Ot,ut.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,kt[0].width,kt[0].height,ut.depth);for(let ft=0,wt=kt.length;ft<wt;ft++)if(Mt=kt[ft],x.format!==on)if(vt!==null)if(Wt){if(q)if(x.layerUpdates.size>0){let It=yc(Mt.width,Mt.height,x.format,x.type);for(let gt of x.layerUpdates){let Vt=Mt.data.subarray(gt*It/Mt.data.BYTES_PER_ELEMENT,(gt+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,gt,Mt.width,Mt.height,1,vt,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,ut.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,St,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,ut.depth,vt,Ot,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,St,Mt.width,Mt.height,ut.depth,0,vt,Ot,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Wt&&$t&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let ft=0,wt=kt.length;ft<wt;ft++)Mt=kt[ft],x.format!==on?vt!==null?Wt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,St,Mt.width,Mt.height,0,Mt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,St,Mt.width,Mt.height,0,vt,Ot,Mt.data)}else if(x.isDataArrayTexture)if(Wt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,ut.width,ut.height,ut.depth),q)if(x.layerUpdates.size>0){let ft=yc(ut.width,ut.height,x.format,x.type);for(let wt of x.layerUpdates){let It=ut.data.subarray(wt*ft/ut.data.BYTES_PER_ELEMENT,(wt+1)*ft/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,ut.width,ut.height,1,vt,Ot,It)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,vt,Ot,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,ut.width,ut.height,ut.depth,0,vt,Ot,ut.data);else if(x.isData3DTexture)Wt?($t&&e.texStorage3D(i.TEXTURE_3D,bt,St,ut.width,ut.height,ut.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,vt,Ot,ut.data)):e.texImage3D(i.TEXTURE_3D,0,St,ut.width,ut.height,ut.depth,0,vt,Ot,ut.data);else if(x.isFramebufferTexture){if($t)if(Wt)e.texStorage2D(i.TEXTURE_2D,bt,St,ut.width,ut.height);else{let ft=ut.width,wt=ut.height;for(let It=0;It<bt;It++)e.texImage2D(i.TEXTURE_2D,It,St,ft,wt,0,vt,Ot,null),ft>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),ut.parentNode!==ft){ft.appendChild(ut),f.add(x),ft.onpaint=wt=>{let It=wt.changedElements;for(let gt of f)It.includes(gt.image)&&(gt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let It=i.RGBA,gt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,gt,Vt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Wt&&$t){let ft=Nt(kt[0]);e.texStorage2D(i.TEXTURE_2D,bt,St,ft.width,ft.height)}for(let ft=0,wt=kt.length;ft<wt;ft++)Mt=kt[ft],Wt?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,vt,Ot,Mt):e.texImage2D(i.TEXTURE_2D,ft,St,vt,Ot,Mt);x.generateMipmaps=!1}else if(Wt){if($t){let ft=Nt(ut);e.texStorage2D(i.TEXTURE_2D,bt,St,ft.width,ft.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ot,ut)}else e.texImage2D(i.TEXTURE_2D,0,St,vt,Ot,ut);p(x)&&T(Q),yt.__version=xt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function I(R,x,Y){if(x.image.length!==6)return;let Q=Kt(R,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);let xt=n.get(ot);if(ot.version!==xt.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let yt=se.getPrimaries(se.workingColorSpace),ct=x.colorSpace===Kn?null:se.getPrimaries(x.colorSpace),ut=x.colorSpace===Kn||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let vt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,St=[];for(let gt=0;gt<6;gt++)!vt&&!Ot?St[gt]=m(x.image[gt],!0,s.maxCubemapSize):St[gt]=Ot?x.image[gt].image:x.image[gt],St[gt]=At(x,St[gt]);let Mt=St[0],kt=r.convert(x.format,x.colorSpace),Wt=r.convert(x.type),$t=y(x.internalFormat,kt,Wt,x.normalized,x.colorSpace),q=x.isVideoTexture!==!0,bt=xt.__version===void 0||Q===!0,ft=ot.dataReady,wt=b(x,Mt);Zt(i.TEXTURE_CUBE_MAP,x);let It;if(vt){q&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,$t,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){It=St[gt].mipmaps;for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];x.format!==on?kt!==null?q?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Bt.width,Bt.height,kt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,$t,Bt.width,Bt.height,0,Bt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Bt.width,Bt.height,kt,Wt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,$t,Bt.width,Bt.height,0,kt,Wt,Bt.data)}}}else{if(It=x.mipmaps,q&&bt){It.length>0&&wt++;let gt=Nt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,$t,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Ot){q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,St[gt].width,St[gt].height,kt,Wt,St[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,$t,St[gt].width,St[gt].height,0,kt,Wt,St[gt].data);for(let Vt=0;Vt<It.length;Vt++){let pe=It[Vt].image[gt].image;q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,pe.width,pe.height,kt,Wt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,$t,pe.width,pe.height,0,kt,Wt,pe.data)}}else{q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Wt,St[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,$t,kt,Wt,St[gt]);for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Wt,Bt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,$t,kt,Wt,Bt.image[gt])}}}p(x)&&T(i.TEXTURE_CUBE_MAP),xt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function k(R,x,Y,Q,ot,xt){let yt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),ut=y(Y.internalFormat,yt,ct,Y.normalized,Y.colorSpace),vt=n.get(x),Ot=n.get(Y);if(Ot.__renderTarget=x,!vt.__hasExternalTextures){let St=Math.max(1,x.width>>xt),Mt=Math.max(1,x.height>>xt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,xt,ut,St,Mt,x.depth,0,yt,ct,null):e.texImage2D(ot,xt,ut,St,Mt,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ot,Ot.__webglTexture,0,pt(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ot,Ot.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,x,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let Q=x.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,xt=w(x.stencilBuffer,ot),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Z(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(x),xt,x.width,x.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(x),xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{let Q=x.textures;for(let ot=0;ot<Q.length;ot++){let xt=Q[ot],yt=r.convert(xt.format,xt.colorSpace),ct=r.convert(xt.type),ut=y(xt.internalFormat,yt,ct,xt.normalized,xt.colorSpace);Z(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(x),ut,x.width,x.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(x),ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(R,x,Y){let Q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,x.depthTexture);let vt=r.convert(x.depthTexture.format),Ot=r.convert(x.depthTexture.type),St;x.depthTexture.format===An?St=i.DEPTH_COMPONENT24:x.depthTexture.format===xi&&(St=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,St,x.width,x.height,0,vt,Ot,null)}}else W(x.depthTexture,0);let xt=ot.__webglTexture,yt=pt(x),ct=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,ut=x.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===An)Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ct,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ct,xt,0);else if(x.depthTexture.format===xi)Z(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ct,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ct,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function E(R){let x=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=Q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)_t(x.__webglFramebuffer[Q],R,Q);else{let Q=R.texture.mipmaps;Q&&Q.length>0?_t(x.__webglFramebuffer[0],R,0):_t(x.__webglFramebuffer,R,0)}else if(Y){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Q],R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,xt)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(R,x,Y){let Q=n.get(R);x!==void 0&&k(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&E(R)}function U(R){let x=R.texture,Y=n.get(R),Q=n.get(x);R.addEventListener("dispose",_);let ot=R.textures,xt=R.isWebGLCubeRenderTarget===!0,yt=ot.length>1;if(yt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++),xt){Y.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[ct]=[];for(let ut=0;ut<x.mipmaps.length;ut++)Y.__webglFramebuffer[ct][ut]=i.createFramebuffer()}else Y.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)Y.__webglFramebuffer[ct]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ct=0,ut=ot.length;ct<ut;ct++){let vt=n.get(ot[ct]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Z(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ct=0;ct<ot.length;ct++){let ut=ot[ct];Y.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ct]);let vt=r.convert(ut.format,ut.colorSpace),Ot=r.convert(ut.type),St=y(ut.internalFormat,vt,Ot,ut.normalized,ut.colorSpace,R.isXRRenderTarget===!0),Mt=pt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)k(Y.__webglFramebuffer[ct][ut],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else k(Y.__webglFramebuffer[ct],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,ut=ot.length;ct<ut;ct++){let vt=ot[ct],Ot=n.get(vt),St=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ot.__webglTexture),Zt(St,vt),k(Y.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+ct,St,0),p(vt)&&T(St)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Zt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)k(Y.__webglFramebuffer[ut],R,x,i.COLOR_ATTACHMENT0,ct,ut);else k(Y.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ct,0);p(x)&&T(ct),e.unbindTexture()}R.depthBuffer&&E(R)}function $(R){let x=R.textures;for(let Y=0,Q=x.length;Y<Q;Y++){let ot=x[Y];if(p(ot)){let xt=C(R),yt=n.get(ot).__webglTexture;e.bindTexture(xt,yt),T(xt),e.unbindTexture()}}}let j=[],lt=[];function mt(R){if(R.samples>0){if(Z(R)===!1){let x=R.textures,Y=R.width,Q=R.height,ot=i.COLOR_BUFFER_BIT,xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),ct=x.length>1;if(ct)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ut=R.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ot=n.get(x[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,ot,i.NEAREST),l===!0&&(j.length=0,lt.length=0,j.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(j.push(xt),lt.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ot=n.get(x[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function pt(R){return Math.min(s.maxSamples,R.samples)}function Z(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function M(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function At(R,x){let Y=R.colorSpace,Q=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==nr&&Y!==Kn&&(se.getTransfer(Y)===ce?(Q!==on||ot!==Ze)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",Y)),x}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=K,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=it,this.setTexture3D=rt,this.setTextureCube=ht,this.rebindTextures=G,this.setupRenderTarget=U,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Z,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function j_(i,t){function e(n,s=Kn){let r,a=se.getTransfer(s);if(n===Ze)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return i.BYTE;if(n===ac)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===on)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===vo||n===Mo||n===So||n===bo||n===Fr||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===vo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===Ao||n===Eo||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===ko||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===Or||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:Q_,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends En{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Bc,p={},T=e.getContextAttributes(),C=null,y=null,w=[],b=[],P=new dt,_=null,A=null,F=new Ce;F.viewport=new ye;let V=new Ce;V.viewport=new ye;let z=[F,V],K=new eo,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let N=w[O];return N===void 0&&(N=new _s,w[O]=N),N.getTargetRaySpace()},this.getControllerGrip=function(O){let N=w[O];return N===void 0&&(N=new _s,w[O]=N),N.getGripSpace()},this.getHand=function(O){let N=w[O];return N===void 0&&(N=new _s,w[O]=N),N.getHandSpace()};function tt(O){let N=b.indexOf(O.inputSource);if(N===-1)return;let D=w[N];D!==void 0&&(D.update(O.inputSource,O.frame,c||a),D.dispatchEvent({type:O.type,data:O.inputSource}))}function J(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",W);for(let O=0;O<w.length;O++){let N=b[O];N!==null&&(b[O]=null,w[O].disconnect(N))}L=null,H=null,m.reset();for(let O in p)delete p[O];if(t.setRenderTarget(C),d=null,u=null,f=null,s=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),A!==null){let O=A.camera;O.fov=A.fov,O.zoom=A.zoom,O.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",J),s.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let D=null,I=null,k=null;T.depth&&(k=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=T.stencil?xi:An,I=T.stencil?Rs:yn);let st={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(st),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ye(u.textureWidth,u.textureHeight,{format:on,type:Ze,depthTexture:new ci(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let D={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ye(d.framebufferWidth,d.framebufferHeight,{format:on,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(O){for(let N=0;N<O.removed.length;N++){let D=O.removed[N],I=b.indexOf(D);I>=0&&(b[I]=null,w[I].disconnect(D))}for(let N=0;N<O.added.length;N++){let D=O.added[N],I=b.indexOf(D);if(I===-1){for(let st=0;st<w.length;st++)if(st>=b.length){b.push(D),I=st;break}else if(b[st]===null){b[st]=D,I=st;break}if(I===-1)break}let k=w[I];k&&k.connect(D)}}let it=new B,rt=new B;function ht(O,N,D){it.setFromMatrixPosition(N.matrixWorld),rt.setFromMatrixPosition(D.matrixWorld);let I=it.distanceTo(rt),k=N.projectionMatrix.elements,st=D.projectionMatrix.elements,_t=k[14]/(k[10]-1),E=k[14]/(k[10]+1),G=(k[9]+1)/k[5],U=(k[9]-1)/k[5],$=(k[8]-1)/k[0],j=(st[8]+1)/st[0],lt=_t*$,mt=_t*j,pt=I/(-$+j),Z=pt*-$;if(N.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Z),O.translateZ(pt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),k[10]===-1)O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let M=_t+pt,At=E+pt,Nt=lt-Z,R=mt+(I-Z),x=G*E/At*M,Y=U*E/At*M;O.projectionMatrix.makePerspective(Nt,R,x,Y,M,At),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Lt(O,N){N===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(N.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let N=O.near,D=O.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(D=m.depthFar)),K.near=V.near=F.near=N,K.far=V.far=F.far=D,(L!==K.near||H!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),L=K.near,H=K.far),K.layers.mask=O.layers.mask|6,F.layers.mask=K.layers.mask&-5,V.layers.mask=K.layers.mask&-3;let I=O.parent,k=K.cameras;Lt(K,I);for(let st=0;st<k.length;st++)Lt(k[st],I);k.length===2?ht(K,F,V):K.projectionMatrix.copy(F.projectionMatrix),A===null&&O.isPerspectiveCamera&&(A={camera:O,fov:O.fov,zoom:O.zoom}),Rt(O,K,I)};function Rt(O,N,D){D===null?O.matrix.copy(N.matrixWorld):(O.matrix.copy(D.matrixWorld),O.matrix.invert(),O.matrix.multiply(N.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ps*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(O){return p[O]};let Jt=null;function Zt(O,N){if(h=N.getViewerPose(c||a),g=N,h!==null){let D=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let I=!1;D.length!==K.cameras.length&&(K.cameras.length=0,I=!0);for(let E=0;E<D.length;E++){let G=D[E],U=null;if(d!==null)U=d.getViewport(G);else{let j=f.getViewSubImage(u,G);U=j.viewport,E===0&&(t.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(y))}let $=z[E];$===void 0&&($=new Ce,$.layers.enable(E),$.viewport=new ye,z[E]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(U.x,U.y,U.width,U.height),E===0&&(K.matrix.copy($.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),I===!0&&K.cameras.push($)}let k=s.enabledFeatures;if(k&&k.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let E=f.getDepthInformation(D[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(k&&k.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let E=0;E<D.length;E++){let G=D[E].camera;if(G){let U=p[G];U||(U=new fr,p[G]=U);let $=f.getCameraImage(G);U.sourceTexture=$}}}}for(let D=0;D<w.length;D++){let I=b[D],k=w[D];I!==null&&k!==void 0&&k.update(I,N,c||a)}Jt&&Jt(O,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let Kt=new rf;Kt.setAnimationLoop(Zt),this.setAnimationLoop=function(O){Jt=O},this.dispose=function(){}}},ex=new ue,uf=new Gt;uf.set(-1,0,0,0,1,0,0,0,1);function nx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),C=T.envMap,y=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ix(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",T));let P=w.program;n.updateUBOMapping(y,P);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let w=f();y.__bindingPointIndex=w;let b=i.createBuffer(),P=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,A=b.length;_<A;_++){let F=b[_];if(Array.isArray(F))for(let V=0,z=F.length;V<z;V++)d(F[V],_,V,P);else d(F,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,w,b,P){if(v(y,w,b,P)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let F=0;for(let V=0;V<A.length;V++){let z=A[V],K=p(z);g(z,y.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function v(y,w,b,P){let _=y.value,A=w+"_"+b;if(P[A]===void 0)return typeof _=="number"||typeof _=="boolean"?P[A]=_:ArrayBuffer.isView(_)?P[A]=_.slice():P[A]=_.clone(),!0;{let F=P[A];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return P[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function m(y){let w=y.uniforms,b=0,P=16;for(let A=0,F=w.length;A<F;A++){let V=Array.isArray(w[A])?w[A]:[w[A]];for(let z=0,K=V.length;z<K;z++){let L=V[z],H=Array.isArray(L.value)?L.value:[L.value];for(let tt=0,J=H.length;tt<J;tt++){let W=H[tt],it=p(W),rt=b%P,ht=rt%it.boundary,Lt=rt+ht;b+=ht,Lt!==0&&P-Lt<it.storage&&(b+=P-Lt),L.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=it.storage}}}let _=b%P;return _>0&&(b+=P-_),y.__size=b,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",y),w}function T(y){let w=y.target;w.removeEventListener("dispose",T);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function rx(){return Un===null&&(Un=new cr(sx,16,16,yi,vn),Un.name="DFG_LUT",Un.minFilter=Fe,Un.magFilter=Fe,Un.wrapS=rn,Un.wrapT=rn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var Ds=class{constructor(t={}){let{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,m=new Set([po,fo,uo]),p=new Set([Ze,yn,Cs,Rs,lo,co]),T=new Uint32Array(4),C=new Int32Array(4),y=new B,w=null,b=null,P=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,V=!1,z=null,K=null,L=null,H=null;this._outputColorSpace=Ee;let tt=0,J=0,W=null,it=-1,rt=null,ht=new ye,Lt=new ye,Rt=null,Jt=new qt(0),Zt=0,Kt=e.width,O=e.height,N=1,D=null,I=null,k=new ye(0,0,Kt,O),st=new ye(0,0,Kt,O),_t=!1,E=new ys,G=!1,U=!1,$=new ue,j=new B,lt=new ye,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Z(){return W===null?N:1}let M=n;function At(S,X){return e.getContext(S,X)}let Nt,R,x,Y,Q,ot,xt,yt,ct,ut,vt,Ot,St,Mt,kt,Wt,$t,q,bt,ft,wt,It,gt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",un,!1),M===null){let X="webgl2";if(M=At(X,S),M===null)throw At(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Xt("WebGLRenderer: "+S.message),S}function Vt(){Nt=new fg(M),Nt.init(),wt=new j_(M,Nt),R=new ng(M,Nt,t,wt),x=new $_(M,Nt),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),K=M.createFramebuffer(),L=M.createFramebuffer(),H=M.createFramebuffer(),Y=new mg(M),Q=new F_,ot=new K_(M,Nt,x,Q,R,wt,Y),xt=new ug(F),yt=new _p(M),It=new tg(M,yt),ct=new dg(M,yt,Y,It),ut=new _g(M,ct,yt,It,Y),q=new gg(M,R,ot),kt=new ig(Q),vt=new U_(F,xt,Nt,R,It,kt),Ot=new nx(F,Q),St=new B_,Mt=new W_(Nt),$t=new Q0(F,xt,x,ut,g,l),Wt=new J_(F,ut,R),gt=new ix(M,Y,R,x),bt=new eg(M,Nt,Y),ft=new pg(M,Nt,Y),Y.programs=vt.programs,F.capabilities=R,F.extensions=Nt,F.properties=Q,F.renderLists=St,F.shadowMap=Wt,F.state=x,F.info=Y}v!==Ze&&(A=new yg(v,e.width,e.height,o,s,r));let Bt=new zc(F,M);this.xr=Bt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let S=Nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(S){S!==void 0&&(N=S,this.setSize(Kt,O,!1))},this.getSize=function(S){return S.set(Kt,O)},this.setSize=function(S,X,at=!0){if(Bt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=S,O=X,e.width=Math.floor(S*N),e.height=Math.floor(X*N),at===!0&&(e.style.width=S+"px",e.style.height=X+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,X)},this.getDrawingBufferSize=function(S){return S.set(Kt*N,O*N).floor()},this.setDrawingBufferSize=function(S,X,at){Kt=S,O=X,N=at,e.width=Math.floor(S*at),e.height=Math.floor(X*at),this.setViewport(0,0,S,X)},this.setEffects=function(S){if(v===Ze){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let X=0;X<S.length;X++)if(S[X].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ht)},this.getViewport=function(S){return S.copy(k)},this.setViewport=function(S,X,at,et){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,X,at,et),x.viewport(ht.copy(k).multiplyScalar(N).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,X,at,et){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,X,at,et),x.scissor(Lt.copy(st).multiplyScalar(N).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(S){x.setScissorTest(_t=S)},this.setOpaqueSort=function(S){D=S},this.setTransparentSort=function(S){I=S},this.getClearColor=function(S){return S.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(S=!0,X=!0,at=!0){let et=0;if(S){let nt=!1;if(W!==null){let Ct=W.texture.format;nt=m.has(Ct)}if(nt){let Ct=W.texture.type,Dt=p.has(Ct),Et=$t.getClearColor(),Ut=$t.getClearAlpha(),zt=Et.r,jt=Et.g,ie=Et.b;Dt?(T[0]=zt,T[1]=jt,T[2]=ie,T[3]=Ut,M.clearBufferuiv(M.COLOR,0,T)):(C[0]=zt,C[1]=jt,C[2]=ie,C[3]=Ut,M.clearBufferiv(M.COLOR,0,C))}else et|=M.COLOR_BUFFER_BIT}X&&(et|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&M.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),$t.dispose(),St.dispose(),Mt.dispose(),Q.dispose(),xt.dispose(),ut.dispose(),It.dispose(),gt.dispose(),vt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",nh),Bt.removeEventListener("sessionend",ih),Mi.stop()};function pe(S){S.preventDefault(),fc("WebGLRenderer: Context Lost."),V=!0}function oe(){fc("WebGLRenderer: Context Restored."),V=!1;let S=Y.autoReset,X=Wt.enabled,at=Wt.autoUpdate,et=Wt.needsUpdate,nt=Wt.type;Vt(),Y.autoReset=S,Wt.enabled=X,Wt.autoUpdate=at,Wt.needsUpdate=et,Wt.type=nt}function un(S){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Sn(S){let X=S.target;X.removeEventListener("dispose",Sn),Uf(X)}function Uf(S){Ff(S),Q.remove(S)}function Ff(S){let X=Q.get(S).programs;X!==void 0&&(X.forEach(function(at){vt.releaseProgram(at)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,X,at,et,nt,Ct){X===null&&(X=mt);let Dt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Et=zf(S,X,at,et,nt);x.setMaterial(et,Dt);let Ut=at.index,zt=1;if(et.wireframe===!0){if(Ut=ct.getWireframeAttribute(at),Ut===void 0)return;zt=2}let jt=at.drawRange,ie=at.attributes.position,Ft=jt.start*zt,le=(jt.start+jt.count)*zt;Ct!==null&&(Ft=Math.max(Ft,Ct.start*zt),le=Math.min(le,(Ct.start+Ct.count)*zt)),Ut!==null?(Ft=Math.max(Ft,0),le=Math.min(le,Ut.count)):ie!=null&&(Ft=Math.max(Ft,0),le=Math.min(le,ie.count));let we=le-Ft;if(we<0||we===1/0)return;It.setup(nt,et,Et,at,Ut);let _e,de=bt;if(Ut!==null&&(_e=yt.get(Ut),de=ft,de.setIndex(_e)),nt.isMesh)et.wireframe===!0?(x.setLineWidth(et.wireframeLinewidth*Z()),de.setMode(M.LINES)):de.setMode(M.TRIANGLES);else if(nt.isLine){let Be=et.linewidth;Be===void 0&&(Be=1),x.setLineWidth(Be*Z()),nt.isLineSegments?de.setMode(M.LINES):nt.isLineLoop?de.setMode(M.LINE_LOOP):de.setMode(M.LINE_STRIP)}else nt.isPoints?de.setMode(M.POINTS):nt.isSprite&&de.setMode(M.TRIANGLES);if(nt.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))de.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Be=nt._multiDrawStarts,Pt=nt._multiDrawCounts,Ge=nt._multiDrawCount,ae=Ut?yt.get(Ut).bytesPerElement:1,nn=Q.get(et).currentProgram.getUniforms();for(let bn=0;bn<Ge;bn++)nn.setValue(M,"_gl_DrawID",bn),de.render(Be[bn]/ae,Pt[bn])}else if(nt.isInstancedMesh)de.renderInstances(Ft,we,nt.count);else if(at.isInstancedBufferGeometry){let Be=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Pt=Math.min(at.instanceCount,Be);de.renderInstances(Ft,we,Pt)}else de.render(Ft,we)};function eh(S,X,at,et){z!==null&&S.isNodeMaterial&&z.setObject(et,S),G===!0&&kt.setState(S,at,!1),S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,Qr(S,X,et),S.side=mi,S.needsUpdate=!0,Qr(S,X,et),S.side=qe):Qr(S,X,et)}this.compile=function(S,X,at=null){at===null&&(at=S),z!==null&&z.renderStart(S,X,at),b=Mt.get(at),b.init(X),_.push(b),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),S!==at&&S.traverseVisible(function(nt){nt.isLight&&nt.layers.test(X.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),U=this.localClippingEnabled,G=kt.init(this.clippingPlanes,U),G===!0&&kt.setGlobalState(this.clippingPlanes,X),z!==null&&Wt.render(b.state.shadowsArray,at,X);let et=new Set;return S.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Ct=nt.material;if(Ct)if(Array.isArray(Ct))for(let Dt=0;Dt<Ct.length;Dt++){let Et=Ct[Dt];eh(Et,at,X,nt),et.add(Et)}else eh(Ct,at,X,nt),et.add(Ct)}),b=_.pop(),z!==null&&z.renderEnd(),et},this.compileAsync=function(S,X,at=null){let et=this.compile(S,X,at);return new Promise(nt=>{function Ct(){if(et.forEach(function(Dt){let Ut=Q.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&et.delete(Dt)}),et.size===0){nt(S);return}setTimeout(Ct,10)}Nt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let al=null;function Of(S){al&&al(S)}function nh(){Mi.stop()}function ih(){Mi.start()}let Mi=new rf;Mi.setAnimationLoop(Of),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(S){al=S,Bt.setAnimationLoop(S),S===null?Mi.stop():Mi.start()},Bt.addEventListener("sessionstart",nh),Bt.addEventListener("sessionend",ih),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;z!==null&&z.renderStart(S,X);let at=Bt.enabled===!0&&Bt.isPresenting===!0,et=A!==null&&(W===null||at)&&A.begin(F,W);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(X),X=Bt.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,X,W),b=Mt.get(S,_.length),b.init(X),b.state.textureUnits=ot.getTextureUnits(),_.push(b),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),E.setFromProjectionMatrix($,gn,X.reversedDepth),U=this.localClippingEnabled,G=kt.init(this.clippingPlanes,U),w=St.get(S,P.length),w.init(),P.push(w),Bt.enabled===!0&&Bt.isPresenting===!0){let Dt=F.xr.getDepthSensingMesh();Dt!==null&&ol(Dt,X,-1/0,F.sortObjects)}ol(S,X,0,F.sortObjects),w.finish(),z!==null&&z.updateLights(b.state.lightsArray),F.sortObjects===!0&&w.sort(D,I),pt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,pt&&$t.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&kt.beginShadows();let nt=b.state.shadowsArray;if(Wt.render(nt,S,X),G===!0&&kt.endShadows(),(et&&A.hasRenderPass())===!1){let Dt=w.opaque,Et=w.transmissive;if(b.setupLights(),X.isArrayCamera){let Ut=X.cameras;if(Et.length>0)for(let zt=0,jt=Ut.length;zt<jt;zt++){let ie=Ut[zt];rh(Dt,Et,S,ie)}pt&&$t.render(S);for(let zt=0,jt=Ut.length;zt<jt;zt++){let ie=Ut[zt];sh(w,S,ie,ie.viewport)}}else Et.length>0&&rh(Dt,Et,S,X),pt&&$t.render(S),sh(w,S,X)}W!==null&&J===0&&(ot.updateMultisampleRenderTarget(W),ot.updateRenderTargetMipmap(W)),et&&A.end(F),S.isScene===!0&&S.onAfterRender(F,S,X),It.resetDefaultState(),it=-1,rt=null,_.pop(),_.length>0?(b=_[_.length-1],ot.setTextureUnits(b.state.textureUnits),G===!0&&kt.setGlobalState(F.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,z!==null&&z.renderEnd()};function ol(S,X,at,et){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)at=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(E)){et&&lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4($);let Dt=ut.update(S),Et=S.material;Et.visible&&w.push(S,Dt,Et,at,lt.z,null,X)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(E))){let Dt=ut.update(S),Et=S.material;if(et&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),lt.copy(S.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),lt.copy(Dt.boundingSphere.center)),lt.applyMatrix4(S.matrixWorld).applyMatrix4($)),Array.isArray(Et)){let Ut=Dt.groups;for(let zt=0,jt=Ut.length;zt<jt;zt++){let ie=Ut[zt],Ft=Et[ie.materialIndex];Ft&&Ft.visible&&w.push(S,Dt,Ft,at,lt.z,ie,X)}}else Et.visible&&w.push(S,Dt,Et,at,lt.z,null,X)}}let Ct=S.children;for(let Dt=0,Et=Ct.length;Dt<Et;Dt++)ol(Ct[Dt],X,at,et)}function sh(S,X,at,et){let{opaque:nt,transmissive:Ct,transparent:Dt}=S;b.setupLightsView(at),G===!0&&kt.setGlobalState(F.clippingPlanes,at),et&&x.viewport(ht.copy(et)),nt.length>0&&jr(nt,X,at),Ct.length>0&&jr(Ct,X,at),Dt.length>0&&jr(Dt,X,at),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function rh(S,X,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[et.id]===void 0){let Ft=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[et.id]=new Ye(1,1,{generateMipmaps:!0,type:Ft?vn:Ze,minFilter:_i,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Ct=b.state.transmissionRenderTarget[et.id],Dt=et.viewport||ht;Ct.setSize(Dt.z*F.transmissionResolutionScale,Dt.w*F.transmissionResolutionScale);let Et=F.getRenderTarget(),Ut=F.getActiveCubeFace(),zt=F.getActiveMipmapLevel();F.setRenderTarget(Ct),F.getClearColor(Jt),Zt=F.getClearAlpha(),Zt<1&&F.setClearColor(16777215,.5),F.clear(),pt&&$t.render(at);let jt=F.toneMapping;F.toneMapping=xn;let ie=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),b.setupLightsView(et),G===!0&&kt.setGlobalState(F.clippingPlanes,et),jr(S,at,et),ot.updateMultisampleRenderTarget(Ct),ot.updateRenderTargetMipmap(Ct),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let le=0,we=X.length;le<we;le++){let _e=X[le],{object:de,geometry:Be,material:Pt,group:Ge}=_e;if(Pt.side===qe&&de.layers.test(et.layers)){let ae=Pt.side;Pt.side=Oe,Pt.needsUpdate=!0,ah(de,at,et,Be,Pt,Ge),Pt.side=ae,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(ot.updateMultisampleRenderTarget(Ct),ot.updateRenderTargetMipmap(Ct))}F.setRenderTarget(Et,Ut,zt),F.setClearColor(Jt,Zt),ie!==void 0&&(et.viewport=ie),F.toneMapping=jt}function jr(S,X,at){let et=X.isScene===!0?X.overrideMaterial:null;for(let nt=0,Ct=S.length;nt<Ct;nt++){let Dt=S[nt],{object:Et,geometry:Ut,group:zt}=Dt,jt=Dt.material;jt.allowOverride===!0&&et!==null&&(jt=et),Et.layers.test(at.layers)&&ah(Et,X,at,Ut,jt,zt)}}function ah(S,X,at,et,nt,Ct){z!==null&&nt.isNodeMaterial&&z.setObject(S,nt),S.onBeforeRender(F,X,at,et,nt,Ct),S.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),nt.onBeforeRender(F,X,at,et,S,Ct),nt.transparent===!0&&nt.side===qe&&nt.forceSinglePass===!1?(nt.side=Oe,nt.needsUpdate=!0,F.renderBufferDirect(at,X,et,nt,S,Ct),nt.side=mi,nt.needsUpdate=!0,F.renderBufferDirect(at,X,et,nt,S,Ct),nt.side=qe):F.renderBufferDirect(at,X,et,nt,S,Ct),S.onAfterRender(F,X,at,et,nt,Ct)}function Qr(S,X,at){X.isScene!==!0&&(X=mt);let et=Q.get(S),nt=b.state.lights,Ct=b.state.shadowsArray,Dt=nt.state.version,Et=vt.getParameters(S,nt.state,Ct,X,at,b.state.lightProbeGridArray),Ut=vt.getProgramCacheKey(Et),zt=et.programs;et.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?X.environment:null,et.fog=X.fog;let jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;et.envMap=xt.get(S.envMap||et.environment,jt),et.envMapRotation=et.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Sn),zt=new Map,et.programs=zt);let ie=zt.get(Ut);if(ie!==void 0){if(et.currentProgram===ie&&et.lightsStateVersion===Dt)return lh(S,Et),ie}else Et.uniforms=vt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,at,Et),S.onBeforeCompile(Et,F),ie=vt.acquireProgram(Et,Ut),zt.set(Ut,ie),et.uniforms=Et.uniforms;let Ft=et.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=kt.uniform),lh(S,Et),et.needsLights=Vf(S),et.lightsStateVersion=Dt,et.needsLights&&(Ft.ambientLightColor.value=nt.state.ambient,Ft.lightProbe.value=nt.state.probe,Ft.sunLights.value=nt.state.sun,Ft.sunLightShadows.value=nt.state.sunShadow,Ft.directionalLights.value=nt.state.directional,Ft.directionalLightShadows.value=nt.state.directionalShadow,Ft.spotLights.value=nt.state.spot,Ft.spotLightShadows.value=nt.state.spotShadow,Ft.rectAreaLights.value=nt.state.rectArea,Ft.ltc_1.value=nt.state.rectAreaLTC1,Ft.ltc_2.value=nt.state.rectAreaLTC2,Ft.pointLights.value=nt.state.point,Ft.pointLightShadows.value=nt.state.pointShadow,Ft.hemisphereLights.value=nt.state.hemi,Ft.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ft.sunShadowCascade.value=nt.state.sunShadowCascade,Ft.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ft.spotLightMatrix.value=nt.state.spotLightMatrix,Ft.spotLightMap.value=nt.state.spotLightMap,Ft.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=b.state.lightProbeGridArray.length>0,et.currentProgram=ie,et.uniformsList=null,ie}function oh(S){if(S.uniformsList===null){let X=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function lh(S,X){let at=Q.get(S);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function Bf(S,X){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let at=0,et=S.length;at<et;at++){let nt=S[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(y))return nt}return null}function zf(S,X,at,et,nt){X.isScene!==!0&&(X=mt),ot.resetTextureUnits();let Ct=X.fog,Dt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?X.environment:null,Et=W===null?F.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:se.workingColorSpace,Ut=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,zt=xt.get(et.envMap||Dt,Ut),jt=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ie=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ft=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,we=!!at.morphAttributes.color,_e=xn;et.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(_e=F.toneMapping);let de=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Be=de!==void 0?de.length:0,Pt=Q.get(et),Ge=b.state.lights;if(G===!0&&(U===!0||S!==rt)){let me=S===rt&&et.id===it;kt.setState(et,S,me)}let ae=!1;et.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ge.state.version||Pt.outputColorSpace!==Et||nt.isBatchedMesh&&Pt.batching===!1||!nt.isBatchedMesh&&Pt.batching===!0||nt.isBatchedMesh&&Pt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Pt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Pt.instancing===!1||!nt.isInstancedMesh&&Pt.instancing===!0||nt.isSkinnedMesh&&Pt.skinning===!1||!nt.isSkinnedMesh&&Pt.skinning===!0||nt.isInstancedMesh&&Pt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Pt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Pt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Pt.instancingMorph===!1&&nt.morphTexture!==null||Pt.envMap!==zt||et.fog===!0&&Pt.fog!==Ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==kt.numPlanes||Pt.numIntersection!==kt.numIntersection)||Pt.vertexAlphas!==jt||Pt.vertexTangents!==ie||Pt.morphTargets!==Ft||Pt.morphNormals!==le||Pt.morphColors!==we||Pt.toneMapping!==_e||Pt.morphTargetsCount!==Be||!!Pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Pt.__version=et.version);let nn=Pt.currentProgram;ae===!0&&(nn=Qr(et,X,nt),z&&et.isNodeMaterial&&z.onUpdateProgram(et,nn,Pt));let bn=!1,jn=!1,qi=!1,he=nn.getUniforms(),be=Pt.uniforms;if(x.useProgram(nn.program)&&(bn=!0,jn=!0,qi=!0),et.id!==it&&(it=et.id,jn=!0),Pt.needsLights){let me=Bf(b.state.lightProbeGridArray,nt);Pt.lightProbeGrid!==me&&(Pt.lightProbeGrid=me,jn=!0)}if(bn||rt!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),he.setValue(M,"projectionMatrix",S.projectionMatrix),he.setValue(M,"viewMatrix",S.matrixWorldInverse);let ti=he.map.cameraPosition;ti!==void 0&&ti.setValue(M,j.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&he.setValue(M,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&he.setValue(M,"isOrthographic",S.isOrthographicCamera===!0),rt!==S&&(rt=S,jn=!0,qi=!0)}if(Pt.needsLights&&(Ge.state.sunShadowMap.length>0&&he.setValue(M,"sunShadowMap",Ge.state.sunShadowMap,ot),Ge.state.directionalShadowMap.length>0&&he.setValue(M,"directionalShadowMap",Ge.state.directionalShadowMap,ot),Ge.state.spotShadowMap.length>0&&he.setValue(M,"spotShadowMap",Ge.state.spotShadowMap,ot),Ge.state.pointShadowMap.length>0&&he.setValue(M,"pointShadowMap",Ge.state.pointShadowMap,ot)),nt.isSkinnedMesh){he.setOptional(M,nt,"bindMatrix"),he.setOptional(M,nt,"bindMatrixInverse");let me=nt.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),he.setValue(M,"boneTexture",me.boneTexture,ot))}nt.isBatchedMesh&&(he.setOptional(M,nt,"batchingTexture"),he.setValue(M,"batchingTexture",nt._matricesTexture,ot),he.setOptional(M,nt,"batchingIdTexture"),he.setValue(M,"batchingIdTexture",nt._indirectTexture,ot),he.setOptional(M,nt,"batchingColorTexture"),nt._colorsTexture!==null&&he.setValue(M,"batchingColorTexture",nt._colorsTexture,ot));let Qn=at.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&q.update(nt,at,nn),(jn||Pt.receiveShadow!==nt.receiveShadow)&&(Pt.receiveShadow=nt.receiveShadow,he.setValue(M,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&X.environment!==null&&(be.envMapIntensity.value=X.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=rx()),jn){if(he.setValue(M,"toneMappingExposure",F.toneMappingExposure),Pt.needsLights&&kf(be,qi),Ct&&et.fog===!0&&Ot.refreshFogUniforms(be,Ct),Ot.refreshMaterialUniforms(be,et,N,O,b.state.transmissionRenderTarget[S.id]),Pt.needsLights&&Pt.lightProbeGrid){let me=Pt.lightProbeGrid;be.probesSH.value=me.texture,be.probesMin.value.copy(me.boundingBox.min),be.probesMax.value.copy(me.boundingBox.max),be.probesResolution.value.copy(me.resolution)}Ls.upload(M,oh(Pt),be,ot)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ls.upload(M,oh(Pt),be,ot),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&he.setValue(M,"center",nt.center),he.setValue(M,"modelViewMatrix",nt.modelViewMatrix),he.setValue(M,"normalMatrix",nt.normalMatrix),he.setValue(M,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let me=et.uniformsGroups;for(let ti=0,Yi=me.length;ti<Yi;ti++){let hh=me[ti];gt.update(hh,nn),gt.bind(hh,nn)}}return nn}function kf(S,X){S.ambientLightColor.needsUpdate=X,S.lightProbe.needsUpdate=X,S.sunLights.needsUpdate=X,S.sunLightShadows.needsUpdate=X,S.directionalLights.needsUpdate=X,S.directionalLightShadows.needsUpdate=X,S.pointLights.needsUpdate=X,S.pointLightShadows.needsUpdate=X,S.spotLights.needsUpdate=X,S.spotLightShadows.needsUpdate=X,S.rectAreaLights.needsUpdate=X,S.hemisphereLights.needsUpdate=X}function Vf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(S,X,at){let et=Q.get(S);et.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Q.get(S.texture).__webglTexture=X,Q.get(S.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,X){let at=Q.get(S);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(S,X=0,at=0){W=S,tt=X,J=at;let et=null,nt=!1,Ct=!1;if(S){let Et=Q.get(S);if(Et.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(M.FRAMEBUFFER,Et.__webglFramebuffer),ht.copy(S.viewport),Lt.copy(S.scissor),Rt=S.scissorTest,x.viewport(ht),x.scissor(Lt),x.setScissorTest(Rt),it=-1;return}else if(Et.__webglFramebuffer===void 0)ot.setupRenderTarget(S);else if(Et.__hasExternalTextures)ot.rebindTextures(S,Q.get(S.texture).__webglTexture,Q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let jt=S.depthTexture;if(Et.__boundDepthTexture!==jt){if(jt!==null&&Q.has(jt)&&(S.width!==jt.image.width||S.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(S)}}let Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Ct=!0);let zt=Q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[X])?et=zt[X][at]:et=zt[X],nt=!0):S.samples>0&&ot.useMultisampledRTT(S)===!1?et=Q.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?et=zt[at]:et=zt,ht.copy(S.viewport),Lt.copy(S.scissor),Rt=S.scissorTest}else ht.copy(k).multiplyScalar(N).floor(),Lt.copy(st).multiplyScalar(N).floor(),Rt=_t;if(at!==0&&(et=K),x.bindFramebuffer(M.FRAMEBUFFER,et)&&x.drawBuffers(S,et),x.viewport(ht),x.scissor(Lt),x.setScissorTest(Rt),nt){let Et=Q.get(S.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et.__webglTexture,at)}else if(Ct){let Et=X;for(let Ut=0;Ut<S.textures.length;Ut++){let zt=Q.get(S.textures[Ut]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,at,Et)}}else if(S!==null&&at!==0){let Et=Q.get(S.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Et.__webglTexture,at)}it=-1};function ch(S){let X=Q.get(S);return(X.__readFormat!==S.format||X.__readType!==S.type)&&(X.__readFormat=S.format,X.__readType=S.type,X.__formatReadable=R.textureFormatReadable(S.format),X.__typeReadable=R.textureTypeReadable(S.type)),X}this.readRenderTargetPixels=function(S,X,at,et,nt,Ct,Dt,Et=0){if(!(S&&S.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){x.bindFramebuffer(M.FRAMEBUFFER,Ut);try{let zt=S.textures[Et],jt=zt.format,ie=zt.type;S.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Et);let Ft=ch(zt);if(Ft.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=S.width-et&&at>=0&&at<=S.height-nt&&M.readPixels(X,at,et,nt,wt.convert(jt),wt.convert(ie),Ct)}finally{let zt=W!==null?Q.get(W).__webglFramebuffer:null;x.bindFramebuffer(M.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(S,X,at,et,nt,Ct,Dt,Et=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(X>=0&&X<=S.width-et&&at>=0&&at<=S.height-nt){x.bindFramebuffer(M.FRAMEBUFFER,Ut);let zt=S.textures[Et],jt=zt.format,ie=zt.type;S.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Et);let Ft=ch(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,le),M.bufferData(M.PIXEL_PACK_BUFFER,Ct.byteLength,M.STREAM_READ),M.readPixels(X,at,et,nt,wt.convert(jt),wt.convert(ie),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let we=W!==null?Q.get(W).__webglFramebuffer:null;x.bindFramebuffer(M.FRAMEBUFFER,we);let _e=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Eu(M,_e,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,le),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Ct),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(le),M.deleteSync(_e),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,X=null,at=0){let et=Math.pow(2,-at),nt=Math.floor(S.image.width*et),Ct=Math.floor(S.image.height*et),Dt=X!==null?X.x:0,Et=X!==null?X.y:0;ot.setTexture2D(S,0),M.copyTexSubImage2D(M.TEXTURE_2D,at,0,0,Dt,Et,nt,Ct),x.unbindTexture()},this.copyTextureToTexture=function(S,X,at=null,et=null,nt=0,Ct=0){let Dt,Et,Ut,zt,jt,ie,Ft,le,we,_e=S.isCompressedTexture?S.mipmaps[Ct]:S.image;if(at!==null)Dt=at.max.x-at.min.x,Et=at.max.y-at.min.y,Ut=at.isBox3?at.max.z-at.min.z:1,zt=at.min.x,jt=at.min.y,ie=at.isBox3?at.min.z:0;else{let be=Math.pow(2,-nt);Dt=Math.floor(_e.width*be),Et=Math.floor(_e.height*be),S.isDataArrayTexture?Ut=_e.depth:S.isData3DTexture?Ut=Math.floor(_e.depth*be):Ut=1,zt=0,jt=0,ie=0}et!==null?(Ft=et.x,le=et.y,we=et.z):(Ft=0,le=0,we=0);let de=wt.convert(X.format),Be=wt.convert(X.type),Pt;X.isData3DTexture?(ot.setTexture3D(X,0),Pt=M.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ot.setTexture2DArray(X,0),Pt=M.TEXTURE_2D_ARRAY):(ot.setTexture2D(X,0),Pt=M.TEXTURE_2D),x.activeTexture(M.TEXTURE0),x.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,X.flipY),x.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),x.pixelStorei(M.UNPACK_ALIGNMENT,X.unpackAlignment);let Ge=x.getParameter(M.UNPACK_ROW_LENGTH),ae=x.getParameter(M.UNPACK_IMAGE_HEIGHT),nn=x.getParameter(M.UNPACK_SKIP_PIXELS),bn=x.getParameter(M.UNPACK_SKIP_ROWS),jn=x.getParameter(M.UNPACK_SKIP_IMAGES);x.pixelStorei(M.UNPACK_ROW_LENGTH,_e.width),x.pixelStorei(M.UNPACK_IMAGE_HEIGHT,_e.height),x.pixelStorei(M.UNPACK_SKIP_PIXELS,zt),x.pixelStorei(M.UNPACK_SKIP_ROWS,jt),x.pixelStorei(M.UNPACK_SKIP_IMAGES,ie);let qi=S.isDataArrayTexture||S.isData3DTexture,he=X.isDataArrayTexture||X.isData3DTexture;if(S.isDepthTexture){let be=Q.get(S),Qn=Q.get(X),me=Q.get(be.__renderTarget),ti=Q.get(Qn.__renderTarget);x.bindFramebuffer(M.READ_FRAMEBUFFER,me.__webglFramebuffer),x.bindFramebuffer(M.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Yi=0;Yi<Ut;Yi++)qi&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Q.get(S).__webglTexture,nt,ie+Yi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,Ct,we+Yi)),M.blitFramebuffer(zt,jt,Dt,Et,Ft,le,Dt,Et,M.DEPTH_BUFFER_BIT,M.NEAREST);x.bindFramebuffer(M.READ_FRAMEBUFFER,null),x.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(nt!==0||S.isRenderTargetTexture||Q.has(S)){let be=Q.get(S),Qn=Q.get(X);x.bindFramebuffer(M.READ_FRAMEBUFFER,L),x.bindFramebuffer(M.DRAW_FRAMEBUFFER,H);for(let me=0;me<Ut;me++)qi?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,be.__webglTexture,nt,ie+me):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,be.__webglTexture,nt),he?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Qn.__webglTexture,Ct,we+me):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Qn.__webglTexture,Ct),nt!==0?M.blitFramebuffer(zt,jt,Dt,Et,Ft,le,Dt,Et,M.COLOR_BUFFER_BIT,M.NEAREST):he?M.copyTexSubImage3D(Pt,Ct,Ft,le,we+me,zt,jt,Dt,Et):M.copyTexSubImage2D(Pt,Ct,Ft,le,zt,jt,Dt,Et);x.bindFramebuffer(M.READ_FRAMEBUFFER,null),x.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?M.texSubImage3D(Pt,Ct,Ft,le,we,Dt,Et,Ut,de,Be,_e.data):X.isCompressedArrayTexture?M.compressedTexSubImage3D(Pt,Ct,Ft,le,we,Dt,Et,Ut,de,_e.data):M.texSubImage3D(Pt,Ct,Ft,le,we,Dt,Et,Ut,de,Be,_e):S.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Ct,Ft,le,Dt,Et,de,Be,_e.data):S.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Ct,Ft,le,_e.width,_e.height,de,_e.data):M.texSubImage2D(M.TEXTURE_2D,Ct,Ft,le,Dt,Et,de,Be,_e);x.pixelStorei(M.UNPACK_ROW_LENGTH,Ge),x.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ae),x.pixelStorei(M.UNPACK_SKIP_PIXELS,nn),x.pixelStorei(M.UNPACK_SKIP_ROWS,bn),x.pixelStorei(M.UNPACK_SKIP_IMAGES,jn),Ct===0&&X.generateMipmaps&&M.generateMipmap(Pt),x.unbindTexture()},this.initRenderTarget=function(S){Q.get(S).__webglFramebuffer===void 0&&ot.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ot.setTextureCube(S,0):S.isData3DTexture?ot.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ot.setTexture2DArray(S,0):ot.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){tt=0,J=0,W=null,x.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Gr=new B;function ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Gr.copy(t),Gr[n]=0,Gr.normalize();let c=.5*a/(a+o),h=1-Gr.angleTo(i)/l;return Math.sign(Gr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Us=class i extends Ln{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,v=new B,m=.5/a;for(let p=0,T=0;p<f.length;p+=3,T+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[T+0]=ln(v,c,"z","y",r,n),d[T+1]=1-ln(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[T+0]=1-ln(v,c,"z","y",r,n),d[T+1]=1-ln(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[T+0]=1-ln(v,c,"x","z",r,t),d[T+1]=ln(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[T+0]=1-ln(v,c,"x","z",r,t),d[T+1]=1-ln(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[T+0]=1-ln(v,c,"x","y",r,t),d[T+1]=1-ln(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[T+0]=ln(v,c,"x","y",r,t),d[T+1]=1-ln(v,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Os=class extends Yn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ln;t.deleteAttribute("uv");let e=new Pi({side:Oe}),n=new Pi,s=new Cr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new hr(t,n,6),o=new Ne;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new fe(t,Fs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new fe(t,Fs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new fe(t,Fs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new fe(t,Fs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new fe(t,Fs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new fe(t,Fs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Fs(i){return new br({color:0,emissive:16777215,emissiveIntensity:i})}function Hr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ge,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ff(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let g=ff(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function ff(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new We(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+f,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Wr=Ee,Qo=class i extends Di{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Tr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(N,D){if(N.nodeType!==1)return;N.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let I=w(N),k=!1,st=null;switch(N.nodeName){case"svg":D=v(N,D);break;case"style":r(N);break;case"g":D=v(N,D);break;case"path":D=v(N,D),N.hasAttribute("d")&&(st=s(N));break;case"rect":D=v(N,D),st=l(N);break;case"polygon":D=v(N,D),st=c(N);break;case"polyline":D=v(N,D),st=h(N);break;case"circle":D=v(N,D),st=f(N);break;case"ellipse":D=v(N,D),st=u(N);break;case"line":D=v(N,D),st=d(N);break;case"defs":k=!0;break;case"use":D=v(N,D);let G=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),U=N.viewportElement.getElementById(G);U?n(U,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+G);break;default:}if(st){D.fill!==void 0&&D.fill!=="none"&&!D.fill.startsWith("url")&&st.color.setStyle(D.fill,Wr),_(st,Zt),H.push(st);let E=Object.assign({},D);E.strokeWidth=D.strokeWidth*K(Zt),st.userData={node:N,style:E,transform:Zt.clone(),gradients:J}}let _t=N.childNodes;for(let E=0;E<_t.length;E++){let G=_t[E];k&&G.nodeName!=="style"&&G.nodeName!=="defs"||n(G,D)}I&&(W.pop(),W.length>0?Zt.copy(W[W.length-1]):Zt.identity())}function s(N){let D=new _n,I=new dt,k=new dt,st=new dt,_t=!0,E=!1,G=N.getAttribute("d");if(G===""||G==="none")return null;let U=G.match(/[a-df-z][^a-df-z]*/ig);for(let $=0,j=U.length;$<j;$++){let lt=U[$],mt=lt.charAt(0),pt=lt.slice(1).trim();_t===!0&&(E=!0,_t=!1);let Z;switch(mt){case"M":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2)I.x=Z[M+0],I.y=Z[M+1],k.x=I.x,k.y=I.y,M===0?D.moveTo(I.x,I.y):D.lineTo(I.x,I.y),M===0&&st.copy(I);break;case"H":Z=p(pt);for(let M=0,At=Z.length;M<At;M++)I.x=Z[M],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"V":Z=p(pt);for(let M=0,At=Z.length;M<At;M++)I.y=Z[M],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"L":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2)I.x=Z[M+0],I.y=Z[M+1],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"C":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=6)D.bezierCurveTo(Z[M+0],Z[M+1],Z[M+2],Z[M+3],Z[M+4],Z[M+5]),k.x=Z[M+2],k.y=Z[M+3],I.x=Z[M+4],I.y=Z[M+5],M===0&&E===!0&&st.copy(I);break;case"S":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=4)D.bezierCurveTo(m(I.x,k.x),m(I.y,k.y),Z[M+0],Z[M+1],Z[M+2],Z[M+3]),k.x=Z[M+0],k.y=Z[M+1],I.x=Z[M+2],I.y=Z[M+3],M===0&&E===!0&&st.copy(I);break;case"Q":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=4)D.quadraticCurveTo(Z[M+0],Z[M+1],Z[M+2],Z[M+3]),k.x=Z[M+0],k.y=Z[M+1],I.x=Z[M+2],I.y=Z[M+3],M===0&&E===!0&&st.copy(I);break;case"T":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2){let Nt=m(I.x,k.x),R=m(I.y,k.y);D.quadraticCurveTo(Nt,R,Z[M+0],Z[M+1]),k.x=Nt,k.y=R,I.x=Z[M+0],I.y=Z[M+1],M===0&&E===!0&&st.copy(I)}break;case"A":Z=p(pt,[3,4],7);for(let M=0,At=Z.length;M<At;M+=7){if(Z[M+5]==I.x&&Z[M+6]==I.y)continue;let Nt=I.clone();I.x=Z[M+5],I.y=Z[M+6],k.x=I.x,k.y=I.y,a(D,Z[M],Z[M+1],Z[M+2],Z[M+3],Z[M+4],Nt,I),M===0&&E===!0&&st.copy(I)}break;case"m":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2)I.x+=Z[M+0],I.y+=Z[M+1],k.x=I.x,k.y=I.y,M===0?D.moveTo(I.x,I.y):D.lineTo(I.x,I.y),M===0&&st.copy(I);break;case"h":Z=p(pt);for(let M=0,At=Z.length;M<At;M++)I.x+=Z[M],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"v":Z=p(pt);for(let M=0,At=Z.length;M<At;M++)I.y+=Z[M],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"l":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2)I.x+=Z[M+0],I.y+=Z[M+1],k.x=I.x,k.y=I.y,D.lineTo(I.x,I.y),M===0&&E===!0&&st.copy(I);break;case"c":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=6)D.bezierCurveTo(I.x+Z[M+0],I.y+Z[M+1],I.x+Z[M+2],I.y+Z[M+3],I.x+Z[M+4],I.y+Z[M+5]),k.x=I.x+Z[M+2],k.y=I.y+Z[M+3],I.x+=Z[M+4],I.y+=Z[M+5],M===0&&E===!0&&st.copy(I);break;case"s":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=4)D.bezierCurveTo(m(I.x,k.x),m(I.y,k.y),I.x+Z[M+0],I.y+Z[M+1],I.x+Z[M+2],I.y+Z[M+3]),k.x=I.x+Z[M+0],k.y=I.y+Z[M+1],I.x+=Z[M+2],I.y+=Z[M+3],M===0&&E===!0&&st.copy(I);break;case"q":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=4)D.quadraticCurveTo(I.x+Z[M+0],I.y+Z[M+1],I.x+Z[M+2],I.y+Z[M+3]),k.x=I.x+Z[M+0],k.y=I.y+Z[M+1],I.x+=Z[M+2],I.y+=Z[M+3],M===0&&E===!0&&st.copy(I);break;case"t":Z=p(pt);for(let M=0,At=Z.length;M<At;M+=2){let Nt=m(I.x,k.x),R=m(I.y,k.y);D.quadraticCurveTo(Nt,R,I.x+Z[M+0],I.y+Z[M+1]),k.x=Nt,k.y=R,I.x=I.x+Z[M+0],I.y=I.y+Z[M+1],M===0&&E===!0&&st.copy(I)}break;case"a":Z=p(pt,[3,4],7);for(let M=0,At=Z.length;M<At;M+=7){if(Z[M+5]==0&&Z[M+6]==0)continue;let Nt=I.clone();I.x+=Z[M+5],I.y+=Z[M+6],k.x=I.x,k.y=I.y,a(D,Z[M],Z[M+1],Z[M+2],Z[M+3],Z[M+4],Nt,I),M===0&&E===!0&&st.copy(I)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(I.copy(st),D.currentPath.currentPoint.copy(I),_t=!0);break;default:console.warn(lt)}E=!1}return D}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let D=0;D<N.sheet.cssRules.length;D++){let I=N.sheet.cssRules[D];if(I.type!==1)continue;let k=I.selectorText.split(/,/gm).filter(Boolean).map(st=>st.trim());for(let st=0;st<k.length;st++){let _t=Object.fromEntries(Object.entries(I.style).filter(([,E])=>E!==""));tt[k[st]]=Object.assign(tt[k[st]]||{},_t)}}}function a(N,D,I,k,st,_t,E,G){if(D==0||I==0){N.lineTo(G.x,G.y);return}k=k*Math.PI/180,D=Math.abs(D),I=Math.abs(I);let U=(E.x-G.x)/2,$=(E.y-G.y)/2,j=Math.cos(k)*U+Math.sin(k)*$,lt=-Math.sin(k)*U+Math.cos(k)*$,mt=D*D,pt=I*I,Z=j*j,M=lt*lt,At=Z/mt+M/pt;if(At>1){let ut=Math.sqrt(At);D=ut*D,I=ut*I,mt=D*D,pt=I*I}let Nt=mt*M+pt*Z,R=(mt*pt-Nt)/Nt,x=Math.sqrt(Math.max(0,R));st===_t&&(x=-x);let Y=x*D*lt/I,Q=-x*I*j/D,ot=Math.cos(k)*Y-Math.sin(k)*Q+(E.x+G.x)/2,xt=Math.sin(k)*Y+Math.cos(k)*Q+(E.y+G.y)/2,yt=o(1,0,(j-Y)/D,(lt-Q)/I),ct=o((j-Y)/D,(lt-Q)/I,(-j-Y)/D,(-lt-Q)/I)%(Math.PI*2);N.currentPath.absellipse(ot,xt,D,I,yt,yt+ct,_t===0,k)}function o(N,D,I,k){let st=N*I+D*k,_t=Math.sqrt(N*N+D*D)*Math.sqrt(I*I+k*k),E=Math.acos(Math.max(-1,Math.min(1,st/_t)));return N*k-D*I<0&&(E=-E),E}function l(N){let D=y(N.getAttribute("x")||0),I=y(N.getAttribute("y")||0),k=y(N.getAttribute("rx")||N.getAttribute("ry")||0),st=y(N.getAttribute("ry")||N.getAttribute("rx")||0),_t=y(N.getAttribute("width")),E=y(N.getAttribute("height")),G=1-.551915024494,U=new _n;return U.moveTo(D+k,I),U.lineTo(D+_t-k,I),(k!==0||st!==0)&&U.bezierCurveTo(D+_t-k*G,I,D+_t,I+st*G,D+_t,I+st),U.lineTo(D+_t,I+E-st),(k!==0||st!==0)&&U.bezierCurveTo(D+_t,I+E-st*G,D+_t-k*G,I+E,D+_t-k,I+E),U.lineTo(D+k,I+E),(k!==0||st!==0)&&U.bezierCurveTo(D+k*G,I+E,D,I+E-st*G,D,I+E-st),U.lineTo(D,I+st),(k!==0||st!==0)&&U.bezierCurveTo(D,I+st*G,D+k*G,I,D+k,I),U}function c(N){function D(_t,E,G){let U=y(E),$=y(G);st===0?k.moveTo(U,$):k.lineTo(U,$),st++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,k=new _n,st=0;return N.getAttribute("points").replace(I,D),k.currentPath.autoClose=!0,k}function h(N){function D(_t,E,G){let U=y(E),$=y(G);st===0?k.moveTo(U,$):k.lineTo(U,$),st++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,k=new _n,st=0;return N.getAttribute("points").replace(I,D),k.currentPath.autoClose=!1,k}function f(N){let D=y(N.getAttribute("cx")||0),I=y(N.getAttribute("cy")||0),k=y(N.getAttribute("r")||0),st=new Dn;st.absarc(D,I,k,0,Math.PI*2);let _t=new _n;return _t.subPaths.push(st),_t}function u(N){let D=y(N.getAttribute("cx")||0),I=y(N.getAttribute("cy")||0),k=y(N.getAttribute("rx")||0),st=y(N.getAttribute("ry")||0),_t=new Dn;_t.absellipse(D,I,k,st,0,Math.PI*2);let E=new _n;return E.subPaths.push(_t),E}function d(N){let D=y(N.getAttribute("x1")||0),I=y(N.getAttribute("y1")||0),k=y(N.getAttribute("x2")||0),st=y(N.getAttribute("y2")||0),_t=new _n;return _t.moveTo(D,I),_t.lineTo(k,st),_t.currentPath.autoClose=!1,_t}function g(N){let D="http://www.w3.org/1999/xlink",I=N.querySelectorAll("linearGradient, radialGradient"),k=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],st={};for(let E of I){let G=E.getAttribute("id");if(!G)continue;let U={type:E.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},$=E.getAttributeNS(D,"href")||E.getAttribute("href")||"";$.startsWith("#")&&(U.href=$.substring(1));for(let lt of k)E.hasAttribute(lt)&&(U.attrs[lt]=E.getAttribute(lt));let j=E.querySelectorAll("stop");if(j.length>0){U.stops=[];for(let lt of j){let mt=lt.getAttribute("stop-color");!mt&&lt.style&&(mt=lt.style["stop-color"]),mt||(mt="#000");let pt=lt.getAttribute("stop-opacity");(pt===null||pt==="")&&lt.style&&(pt=lt.style["stop-opacity"]),pt=pt===null||pt===""||pt===void 0?1:Math.max(0,Math.min(1,parseFloat(pt)));let Z=Math.max(0,Math.min(1,parseFloat(lt.getAttribute("offset")||"0")));U.stops.push({offset:Z,color:mt,opacity:pt})}}st[G]=U}function _t(E,G){let U=st[E];if(!U||G.has(E))return U;if(G.add(E),U.href&&st[U.href]){let $=_t(U.href,G);if($){U.stops||(U.stops=$.stops);for(let j in $.attrs)j in U.attrs||(U.attrs[j]=$.attrs[j])}}return U}for(let E in st)_t(E,new Set);for(let E in st){let lt=function(mt){return typeof mt!="string"?0:mt.endsWith("%")?parseFloat(mt)/100:y(mt)},G=st[E],U=G.attrs,$=U.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",j={type:G.type,gradientUnits:$,spreadMethod:U.spreadMethod==="reflect"||U.spreadMethod==="repeat"?U.spreadMethod:"pad",gradientTransform:null,stops:(G.stops||[]).slice().sort((mt,pt)=>mt.offset-pt.offset)};if(U.gradientTransform&&(j.gradientTransform=new Gt,P(U.gradientTransform,j.gradientTransform)),G.type==="linearGradient")j.x1=U.x1!==void 0?lt(U.x1):0,j.y1=U.y1!==void 0?lt(U.y1):0,j.x2=U.x2!==void 0?lt(U.x2):$==="objectBoundingBox"?1:0,j.y2=U.y2!==void 0?lt(U.y2):0;else{let mt=$==="objectBoundingBox"?.5:0,pt=$==="objectBoundingBox"?.5:0;j.cx=U.cx!==void 0?lt(U.cx):mt,j.cy=U.cy!==void 0?lt(U.cy):mt,j.r=U.r!==void 0?lt(U.r):pt,j.fx=U.fx!==void 0?lt(U.fx):j.cx,j.fy=U.fy!==void 0?lt(U.fy):j.cy}J[E]=j}}function v(N,D){D=Object.assign({},D);let I={};if(N.hasAttribute("class")){let E=N.getAttribute("class").split(/\s/).filter(Boolean).map(G=>G.trim());for(let G=0;G<E.length;G++)I=Object.assign(I,tt["."+E[G]])}N.hasAttribute("id")&&(I=Object.assign(I,tt["#"+N.getAttribute("id")]));function k(E,G,U){U===void 0&&(U=function(j){return j}),N.hasAttribute(E)&&(D[G]=U(N.getAttribute(E))),I[G]&&(D[G]=U(I[G])),N.style&&N.style[E]!==""&&(D[G]=U(N.style[E]))}function st(E){return Math.max(0,Math.min(1,y(E)))}function _t(E){return Math.max(0,y(E))}return k("fill","fill"),k("fill-opacity","fillOpacity",st),k("fill-rule","fillRule"),k("opacity","opacity",st),k("stroke","stroke"),k("stroke-opacity","strokeOpacity",st),k("stroke-width","strokeWidth",_t),k("stroke-linejoin","strokeLineJoin"),k("stroke-linecap","strokeLineCap"),k("stroke-miterlimit","strokeMiterLimit",_t),k("visibility","visibility"),D}function m(N,D){return N-(D-N)}function p(N,D,I){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);let k={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},st=0,_t=1,E=2,G=3,U=st,$=!0,j="",lt="",mt=[];function pt(Nt,R,x){let Y=new SyntaxError('Unexpected character "'+Nt+'" at index '+R+".");throw Y.partial=x,Y}function Z(){j!==""&&(lt===""?mt.push(Number(j)):mt.push(Number(j)*Math.pow(10,Number(lt)))),j="",lt=""}let M,At=N.length;for(let Nt=0;Nt<At;Nt++){if(M=N[Nt],Array.isArray(D)&&D.includes(mt.length%I)&&k.FLAGS.test(M)){U=_t,j=M,Z();continue}if(U===st){if(k.WHITESPACE.test(M))continue;if(k.DIGIT.test(M)||k.SIGN.test(M)){U=_t,j=M;continue}if(k.POINT.test(M)){U=E,j=M;continue}k.COMMA.test(M)&&($&&pt(M,Nt,mt),$=!0)}if(U===_t){if(k.DIGIT.test(M)){j+=M;continue}if(k.POINT.test(M)){j+=M,U=E;continue}if(k.EXP.test(M)){U=G;continue}k.SIGN.test(M)&&j.length===1&&k.SIGN.test(j[0])&&pt(M,Nt,mt)}if(U===E){if(k.DIGIT.test(M)){j+=M;continue}if(k.EXP.test(M)){U=G;continue}k.POINT.test(M)&&j[j.length-1]==="."&&pt(M,Nt,mt)}if(U===G){if(k.DIGIT.test(M)){lt+=M;continue}if(k.SIGN.test(M)){if(lt===""){lt+=M;continue}lt.length===1&&k.SIGN.test(lt)&&pt(M,Nt,mt)}}k.WHITESPACE.test(M)?(Z(),U=st,$=!1):k.COMMA.test(M)?(Z(),U=st,$=!0):k.SIGN.test(M)?(Z(),U=_t,j=M):k.POINT.test(M)?(Z(),U=E,j=M):pt(M,Nt,mt)}return Z(),mt}let T=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(N){let D="px";if(typeof N=="string"||N instanceof String)for(let k=0,st=T.length;k<st;k++){let _t=T[k];if(N.endsWith(_t)){D=_t,N=N.substring(0,N.length-_t.length);break}}let I;return D==="px"&&e.defaultUnit!=="px"?I=C.in[e.defaultUnit]/e.defaultDPI:(I=C[D][e.defaultUnit],I<0&&(I=C[D].in*e.defaultDPI)),I*parseFloat(N)}function w(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;let D=b(N);return W.length>0&&D.premultiply(W[W.length-1]),Zt.copy(D),W.push(D),D}function b(N){let D=new Gt;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){let I=y(N.getAttribute("x")||0),k=y(N.getAttribute("y")||0);D.makeTranslation(I,k)}return N.hasAttribute("transform")&&P(N.getAttribute("transform"),D),D}function P(N,D){let I=it,k=N.split(")");for(let st=k.length-1;st>=0;st--){let _t=k[st].trim();if(_t==="")continue;let E=_t.indexOf("("),G=_t.length;if(E>0&&E<G){let U=_t.slice(0,E),$=p(_t.slice(E+1));switch(I.identity(),U){case"translate":if($.length>=1){let j=$[0],lt=0;$.length>=2&&(lt=$[1]),I.makeTranslation(j,lt)}break;case"rotate":if($.length>=1){let j=0,lt=0,mt=0;j=$[0]*Math.PI/180,$.length>=3&&(lt=$[1],mt=$[2]),rt.makeTranslation(-lt,-mt),ht.makeRotation(j),Lt.multiplyMatrices(ht,rt),rt.makeTranslation(lt,mt),I.multiplyMatrices(rt,Lt)}break;case"scale":if($.length>=1){let j=$[0],lt=j;$.length>=2&&(lt=$[1]),I.makeScale(j,lt)}break;case"skewX":$.length===1&&I.set(1,Math.tan($[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":$.length===1&&I.set(1,0,0,Math.tan($[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":$.length===6&&I.set($[0],$[2],$[4],$[1],$[3],$[5],0,0,1);break}D.premultiply(I)}}return D}function _(N,D){function I(E){Jt.set(E.x,E.y,1).applyMatrix3(D),E.set(Jt.x,Jt.y)}function k(E){let G=E.xRadius,U=E.yRadius,$=Math.cos(E.aRotation),j=Math.sin(E.aRotation),lt=new B(G*$,G*j,0),mt=new B(-U*j,U*$,0),pt=lt.applyMatrix3(D),Z=mt.applyMatrix3(D),M=it.set(pt.x,Z.x,0,pt.y,Z.y,0,0,0,1),At=rt.copy(M).invert(),x=ht.copy(At).transpose().multiply(At).elements,Y=L(x[0],x[1],x[4]),Q=Math.sqrt(Y.rt1),ot=Math.sqrt(Y.rt2);if(E.xRadius=1/Q,E.yRadius=1/ot,E.aRotation=Math.atan2(Y.sn,Y.cs),!((E.aEndAngle-E.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let yt=rt.set(Q,0,0,0,ot,0,0,0,1),ct=ht.set(Y.cs,Y.sn,0,-Y.sn,Y.cs,0,0,0,1),ut=yt.multiply(ct).multiply(M),vt=Ot=>{let{x:St,y:Mt}=new B(Math.cos(Ot),Math.sin(Ot),0).applyMatrix3(ut);return Math.atan2(Mt,St)};E.aStartAngle=vt(E.aStartAngle),E.aEndAngle=vt(E.aEndAngle),A(D)&&(E.aClockwise=!E.aClockwise)}}function st(E){let G=V(D),U=z(D);E.xRadius*=G,E.yRadius*=U;let $=G>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);E.aRotation+=$,A(D)&&(E.aStartAngle*=-1,E.aEndAngle*=-1,E.aClockwise=!E.aClockwise)}let _t=N.subPaths;for(let E=0,G=_t.length;E<G;E++){let $=_t[E].curves;for(let j=0;j<$.length;j++){let lt=$[j];lt.isLineCurve?(I(lt.v1),I(lt.v2)):lt.isCubicBezierCurve?(I(lt.v0),I(lt.v1),I(lt.v2),I(lt.v3)):lt.isQuadraticBezierCurve?(I(lt.v0),I(lt.v1),I(lt.v2)):lt.isEllipseCurve&&(Rt.set(lt.aX,lt.aY),I(Rt),lt.aX=Rt.x,lt.aY=Rt.y,F(D)?k(lt):st(lt))}}}function A(N){let D=N.elements;return D[0]*D[4]-D[1]*D[3]<0}function F(N){let D=N.elements,I=D[0]*D[3]+D[1]*D[4];if(I===0)return!1;let k=V(N),st=z(N);return Math.abs(I/(k*st))>Number.EPSILON}function V(N){let D=N.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function z(N){let D=N.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function K(N){let D=N.elements,I=D[0]*D[4]-D[1]*D[3];return Math.sqrt(Math.abs(I))}function L(N,D,I){let k,st,_t,E,G,U=N+I,$=N-I,j=Math.sqrt($*$+4*D*D);return U>0?(k=.5*(U+j),G=1/k,st=N*G*I-D*G*D):U<0?st=.5*(U-j):(k=.5*j,st=-.5*j),$>0?_t=$+j:_t=$-j,Math.abs(_t)>2*Math.abs(D)?(G=-2*D/_t,E=1/Math.sqrt(1+G*G),_t=G*E):Math.abs(D)===0?(_t=1,E=0):(G=-.5*_t/D,_t=1/Math.sqrt(1+G*G),E=G*_t),$>0&&(G=_t,_t=-E,E=G),{rt1:k,rt2:st,cs:_t,sn:E}}let H=[],tt={},J={},W=[],it=new Gt,rt=new Gt,ht=new Gt,Lt=new Gt,Rt=new dt,Jt=new B,Zt=new Gt,Kt=new DOMParser().parseFromString(t,"image/svg+xml");return g(Kt),n(Kt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:H,gradients:J,xml:Kt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=df.exec(e.fill);if(r){let o=t.userData.gradients&&t.userData.gradients[r[1]];s=ax(o,t)}let a=new Pn({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:qe,depthWrite:!1});return s!==null?a.map=s:a.color=n,a}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(df.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new Pn({color:new qt().setStyle(e.stroke,Wr),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:qe,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let l=new ge;return l.setAttribute("position",new Qt(r,3)),l.setAttribute("normal",new Qt(a,3)),l.setAttribute("uv",new Qt(o,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,l){let c=new dt,h=new dt,f=new dt,u=new dt,d=new dt,g=new dt,v=new dt,m=new dt,p=new dt,T=new dt,C=new dt,y=new dt,w=new dt,b=new dt,P=new dt,_=new dt,A=new dt;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=_t(t);let F=t.length;if(F<2)return 0;let V=t[0].equals(t[F-1]),z,K=t[0],L,H=e.strokeWidth/2,tt=1/(F-1),J=0,W,it,rt,ht,Lt=!1,Rt=0,Jt=l*3,Zt=l*2;Kt(t[0],t[1],c).multiplyScalar(H),m.copy(t[0]).sub(c),p.copy(t[0]).add(c),T.copy(m),C.copy(p);for(let E=1;E<F;E++){z=t[E],E===F-1?V?L=t[1]:L=void 0:L=t[E+1];let G=c;if(Kt(K,z,G),f.copy(G).multiplyScalar(H),y.copy(z).sub(f),w.copy(z).add(f),W=J+tt,it=!1,L!==void 0){Kt(z,L,h),f.copy(h).multiplyScalar(H),b.copy(z).sub(f),P.copy(z).add(f),rt=!0,f.subVectors(L,K),G.dot(f)<0&&(rt=!1),E===1&&(Lt=rt),f.subVectors(L,z),f.normalize();let U=Math.abs(G.dot(f));if(U>Number.EPSILON){let $=H/U;f.multiplyScalar(-$),u.subVectors(z,K),d.copy(u).setLength($).add(f),_.copy(d).negate();let j=d.length(),lt=u.length();u.divideScalar(lt),g.subVectors(L,z);let mt=g.length();if(g.divideScalar(mt),u.dot(_)<lt&&g.dot(_)<mt&&(it=!0),A.copy(d).add(z),_.add(z),it){let pt=rt?p:m,Z=(A.x-pt.x)*(_.y-pt.y)-(A.y-pt.y)*(_.x-pt.x);(rt&&Z<0||!rt&&Z>0)&&_.copy(pt)}switch(ht=!1,it?rt?(P.copy(_),w.copy(_)):(b.copy(_),y.copy(_)):D(),e.strokeLineJoin){case"bevel":I(rt,it,W);break;case"round":k(rt,it),rt?N(z,y,b,W,0):N(z,P,w,W,1);break;default:let pt=H*e.strokeMiterLimit/j;if(pt<1)if(e.strokeLineJoin!=="miter-clip"){I(rt,it,W);break}else k(rt,it),rt?(g.subVectors(A,y).multiplyScalar(pt).add(y),v.subVectors(A,b).multiplyScalar(pt).add(b),O(y,W,0),O(g,W,0),O(z,W,.5),O(z,W,.5),O(g,W,0),O(v,W,0),O(z,W,.5),O(v,W,0),O(b,W,0)):(g.subVectors(A,w).multiplyScalar(pt).add(w),v.subVectors(A,P).multiplyScalar(pt).add(P),O(w,W,1),O(g,W,1),O(z,W,.5),O(z,W,.5),O(g,W,1),O(v,W,1),O(z,W,.5),O(v,W,1),O(P,W,1));else it?(rt?(O(p,J,1),O(m,J,0),O(A,W,0),O(p,J,1),O(A,W,0),O(_,W,1)):(O(p,J,1),O(m,J,0),O(A,W,1),O(m,J,0),O(_,W,0),O(A,W,1)),rt?b.copy(A):P.copy(A)):rt?(O(y,W,0),O(A,W,0),O(z,W,.5),O(z,W,.5),O(A,W,0),O(b,W,0)):(O(w,W,1),O(A,W,1),O(z,W,.5),O(z,W,.5),O(A,W,1),O(P,W,1)),ht=!0;break}}else D()}else D();!V&&E===F-1&&st(t[0],T,C,rt,!0,J),J=W,K=z,m.copy(b),p.copy(P)}if(!V)st(z,y,w,rt,!1,W);else if(it&&r){let E=A,G=_;Lt!==rt&&(E=_,G=A),rt?(ht||Lt)&&(G.toArray(r,0),G.toArray(r,9),ht&&E.toArray(r,3)):(ht||!Lt)&&(G.toArray(r,3),G.toArray(r,9),ht&&E.toArray(r,0))}if(r){let E=[new dt,new dt,new dt],G=l*3;for(let U=G;U<Jt;U+=9)E[0].set(r[U],r[U+1]),E[1].set(r[U+3],r[U+4]),E[2].set(r[U+6],r[U+7]),Tn.area(E)<0&&(r[U+3]=E[0].x,r[U+4]=E[0].y)}return Rt;function Kt(E,G,U){return U.subVectors(G,E),U.set(-U.y,U.x).normalize()}function O(E,G,U){r&&(r[Jt]=E.x,r[Jt+1]=E.y,r[Jt+2]=0,a&&(a[Jt]=0,a[Jt+1]=0,a[Jt+2]=1),Jt+=3,o&&(o[Zt]=G,o[Zt+1]=U,Zt+=2)),Rt+=3}function N(E,G,U,$,j){c.copy(G).sub(E).normalize(),h.copy(U).sub(E).normalize();let lt=Math.PI,mt=c.dot(h);Math.abs(mt)<1&&(lt=Math.abs(Math.acos(mt))),lt/=n,f.copy(G);for(let pt=0,Z=n-1;pt<Z;pt++)u.copy(f).rotateAround(E,lt),O(f,$,j),O(u,$,j),O(E,$,.5),f.copy(u);O(f,$,j),O(U,$,j),O(E,$,.5)}function D(){O(p,J,1),O(m,J,0),O(y,W,0),O(p,J,1),O(y,W,0),O(w,W,1)}function I(E,G,U){G?E?(O(p,J,1),O(m,J,0),O(y,W,0),O(p,J,1),O(y,W,0),O(_,W,1),O(y,U,0),O(b,U,0),O(_,U,.5)):(O(p,J,1),O(m,J,0),O(w,W,1),O(m,J,0),O(_,W,0),O(w,W,1),O(w,U,1),O(_,U,0),O(P,U,1)):E?(O(y,U,0),O(b,U,0),O(z,U,.5)):(O(w,U,1),O(P,U,0),O(z,U,.5))}function k(E,G){G&&(E?(O(p,J,1),O(m,J,0),O(y,W,0),O(p,J,1),O(y,W,0),O(_,W,1),O(y,J,0),O(z,W,.5),O(_,W,1),O(z,W,.5),O(b,J,0),O(_,W,1)):(O(p,J,1),O(m,J,0),O(w,W,1),O(m,J,0),O(_,W,0),O(w,W,1),O(w,J,1),O(_,W,0),O(z,W,.5),O(z,W,.5),O(_,W,0),O(P,J,1)))}function st(E,G,U,$,j,lt){switch(e.strokeLineCap){case"round":j?N(E,U,G,lt,.5):N(E,G,U,lt,.5);break;case"square":if(j)c.subVectors(G,E),h.set(c.y,-c.x),f.addVectors(c,h).add(E),u.subVectors(h,c).add(E),$?(f.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(f.toArray(r,3),o[7]===1?u.toArray(r,9):f.toArray(r,9),u.toArray(r,0));else{c.subVectors(U,E),h.set(c.y,-c.x),f.addVectors(c,h).add(E),u.subVectors(h,c).add(E);let mt=r.length;$?(f.toArray(r,mt-3),u.toArray(r,mt-6),u.toArray(r,mt-12)):(u.toArray(r,mt-6),f.toArray(r,mt-3),u.toArray(r,mt-12))}break;default:break}}function _t(E){let G=!1;for(let $=1,j=E.length-1;$<j;$++)if(E[$].distanceTo(E[$+1])<s){G=!0;break}if(!G)return E;let U=[];U.push(E[0]);for(let $=1,j=E.length-1;$<j;$++)E[$].distanceTo(E[$+1])>=s&&U.push(E[$]);return U.push(E[E.length-1]),U}}},df=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function ax(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=ox(t,n),r===null))return null;function a(f,u,d){d.set(f,u,1),i.gradientTransform&&d.applyMatrix3(i.gradientTransform),s&&d.set(r.minX+d.x*r.width,r.minY+d.y*r.height,1),n&&d.applyMatrix3(n)}let o=document.createElement("canvas"),l;if(i.type==="linearGradient"){o.width=e,o.height=1;let f=o.getContext("2d"),u=f.createLinearGradient(0,0,e,0);pf(u,i.stops),f.fillStyle=u,f.fillRect(0,0,e,1);let d=new B,g=new B;a(i.x1,i.y1,d),a(i.x2,i.y2,g);let v=g.x-d.x,m=g.y-d.y,p=v*v+m*m||1e-20,T=v/p,C=m/p,y=-(T*d.x+C*d.y);l=new Gt().set(T,C,y,0,0,.5,0,0,1)}else{let f=i.cx,u=i.cy,d=i.fx,g=i.fy,v=i.r;if(i.gradientTransform){let _=new B;_.set(f,u,1).applyMatrix3(i.gradientTransform),f=_.x,u=_.y,_.set(d,g,1).applyMatrix3(i.gradientTransform),d=_.x,g=_.y}if(s&&(f=r.minX+f*r.width,u=r.minY+u*r.height,d=r.minX+d*r.width,g=r.minY+g*r.height,v=v*Math.sqrt((r.width*r.width+r.height*r.height)/2)),v<=0)return null;o.width=e,o.height=e;let m=o.getContext("2d"),p=f-v,T=u-v,C=2*v,y=e/C;m.setTransform(y,0,0,y,-p*y,-T*y);let w=m.createRadialGradient(d,g,0,f,u,v);pf(w,i.stops),m.fillStyle=w,m.fillRect(p,T,C,C);let b=n?n.clone().invert():new Gt;l=new Gt().set(1/C,0,-p/C,0,1/C,-T/C,0,0,1).multiply(b)}let c=new Ei(o);c.colorSpace=Wr,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let h=i.spreadMethod==="reflect"?us:i.spreadMethod==="repeat"?oi:rn;return c.wrapS=h,c.wrapT=h,c}function ox(i,t){let e=t?t.clone().invert():null,n=new dt,s=new As;for(let r of i.subPaths)for(let a of r.getPoints())n.copy(a),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function pf(i,t){let e=new qt;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,Wr);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(Wr));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}var Xr=[{x:0,z:-2.08,yaw:0},{x:-2.55,z:0,yaw:Math.PI/2},{x:2.55,z:0,yaw:-Math.PI/2},{x:0,z:2.08,yaw:Math.PI}],mf=.96,qr=1.46;var gf=new Map,lx=[{name:"cloud-bean",at:[0,.523],width:.115,ink:"#51315f",brow:"#79529d",browY:1.005,browX:.195,browWidth:.078},{name:"robot-display",at:[0,.904],width:.125,ink:"#9dffe6",brow:"#9dffe6",browY:1.221,browX:.182,browWidth:.067},{name:"cat-muzzle",at:[0,.815],width:.102,ink:"#6f4245",brow:"#995a3c",browY:1.265,browX:.192,browWidth:.064},{name:"cyclops-grin",at:[0,.63],width:.158,ink:"#285e50",brow:"#277f6c",browY:1.29,browX:0,browWidth:.25},{name:"star-smirk",at:[.012,.613],width:.103,ink:"#95602a",brow:"#aa7831",browY:1.052,browX:.168,browWidth:.061},{name:"jelly-pucker",at:[0,.71],width:.061,ink:"#377f9e",brow:"#4c98b4",browY:1.142,browX:.18,browWidth:.067}],cx=i=>Math.max(0,Math.min(1,i));function hx(i,t,e){let n=1-t*t,s=e==="happy",r=e==="sad",a=e==="surprise";if(a&&i!==2)return{top:.03*Math.sqrt(n),bottom:-.07*Math.sqrt(n)};if(i===0){let l=(r?.025:s?-.035:-.021)*n;return{top:l+.004+(s?.012*n:0),bottom:l-.004-(s?.038*n:0)}}if(i===1){let l=Math.round(t*3)/3,c=(r?.034:s?-.044:-.019)*(1-l*l);return{top:c+.009,bottom:c-.009}}if(i===2){let l=-.023*Math.sin(Math.abs(t)*Math.PI),c=r?.014*n:l;return{top:c+.003,bottom:c-.004-(s||a?.019*n:0)}}if(i===3){let l=(r?.022:s?-.025:-.017)*n;return{top:l+.006,bottom:l-.007-(s?.073*n:0)}}if(i===4){let l=(r?.025:-.028)*n+(r?0:.012*t);return{top:l+.004,bottom:l-.004-(s?.014*n:0)}}let o=r?.008:s?-.009:0;return{top:o+(s?.023:.012)*Math.sqrt(n),bottom:o-(s?.035:.02)*Math.sqrt(n)}}function ux(i){let t=new Ui,e=new Map;for(let n of i)n.updateWorldMatrix(!0,!1);return(n,s)=>{let r=n.toFixed(6)+":"+s.toFixed(6);if(e.has(r))return e.get(r);t.set(new B(n,s,3),new B(0,0,-1));let a=t.intersectObjects(i,!1)[0];if(!a)throw Error("Facial surface missing at "+r);let o=a.point.z+.003;return e.set(r,o),o}}function _f(i,t,e=24){let n=[];for(let s=0;s<=e;s++){let r=s/e*2-1;for(let a of[0,1]){let[o,l]=i(r,a);n.push(o,l,t(o,l))}}return new Qt(n,3)}function kc(i,t,e){let n=new ge,s=_f(i,e),r=[];n.setAttribute("position",s);for(let a=0;a<s.count/2-1;a++){let o=a*2;r.push(o,o+1,o+2,o+2,o+1,o+3)}return n.setIndex(r),n.morphAttributes.position=t.map(a=>_f(a,e)),n.computeVertexNormals(),n.computeBoundingBox(),n.computeBoundingSphere(),n}function fx(i,t=!1){return new Pn({color:i,toneMapped:!1,side:qe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}function Vc(i,t,e,n,s=!1){let r=fx(n,s);r.userData.instanceOwned=!0;let a=new fe(e,r);return a.name=t,a.userData.surfaceFace=!0,a.castShadow=!1,a.receiveShadow=!s,i.add(a),a}function xf(i,t){let e=lx[t],n=i.children.filter(v=>v.isMesh),s=ux(n),r=t,a=gf.get(r);if(!a){let v=y=>(w,b)=>{let P=hx(t,w,y);return[e.at[0]+w*e.width,e.at[1]+(b?P.bottom:P.top)]},m=kc(v("neutral"),["happy","sad","surprise"].map(v),s),T=(t===3?[0]:[-1,1]).map(y=>{let w=b=>(P,_)=>{let A=1-P*P,F=[.01,.007,.009,.014,.006,.01][t],V=[.014,0,.018,.031,.01,.02][t]*A;return t===2&&(V=.02*(1-Math.abs(P))+.007*y*P),t===4&&(V+=y*P*.007),b==="happy"&&(V+=.009*A),b==="sad"&&(V+=y?-y*P*.013:.018*A),b==="angry"&&(V+=y?y*P*(t===4?.004:.018):-.013*A),[y*e.browX+P*e.browWidth,e.browY+V+(_?-F:F)]};return kc(w("neutral"),["happy","sad","angry"].map(w),s)}),C=[];if(t===3)for(let y of[-1,1]){let w=b=>(P,_)=>[y*.08+P*.022,.616-(_&&b?.035*(1-Math.abs(P)*.25):0)];C.push(kc(w(!1),[w(!0),w(!1),w(!1)],(b,P)=>s(b,P)+7e-4))}a={mouth:m,brows:T,details:C},gf.set(r,a)}let o=new Re;o.name="FaceMouth",i.add(o);let l=Vc(o,"Mouth-"+e.name,a.mouth,e.ink,t===1),c=a.details.map(v=>Vc(o,"CyclopsTooth",v,"#eee4ce")),h={};for(let v of["neutral","happy","sad"]){let m=new Re;m.name="Mouth"+v,m.visible=v==="neutral",o.add(m),h[v]=m}let f=a.brows.map((v,m)=>{let p=new Re;return p.name="Brow"+m,p.userData.surfaceFace=!0,i.add(p),Vc(p,"BrowSurface",v,e.brow,t===1),p}),u=()=>{for(let v of[l,...c])v.morphTargetInfluences.fill(0);for(let v of f)v.children[0].morphTargetInfluences.fill(0)},d=v=>{for(let m of[l,...c]){m.morphTargetInfluences.fill(0);let p=["happy","sad","surprise"].indexOf(v);p>=0&&(m.morphTargetInfluences[p]=1)}},g=(v,m)=>{for(let p of f){p.children[0].morphTargetInfluences.fill(0);let T=["happy","sad","angry"].indexOf(v);T>=0&&(p.children[0].morphTargetInfluences[T]=cx(m))}};return{name:e.name,mouth:h,brows:f,mesh:l,details:c,reset:u,expression:d,brow:g}}var dx=Object.freeze([{name:"\xD6zg\xFCn renkler",hex:null},{name:"Turkuaz",hex:"#48bcb8"},{name:"Mercan",hex:"#ed8396"},{name:"Alt\u0131n",hex:"#eebc47"},{name:"Mavi",hex:"#7d9fe7"},{name:"Pembe",hex:"#cd86cb"},{name:"Ye\u015Fil",hex:"#7fc496"},{name:"Gri",hex:"#a5aabc"}]),yf=Object.freeze(["#ad86df","#8c54c7","#eb8b53","#43bea8","#edb32a","#55c7e8"]),XM=Object.freeze({face:1,color:0});function Mf(i,t){return dx[t]?.hex||yf[i]||yf[0]}var px=Object.freeze([{id:"none",name:"Aksesuars\u0131z",price:0},{id:"glasses",name:"G\xF6zl\xFCk",price:0,slot:"face"},{id:"bow",name:"Papyon",price:0,slot:"neck"},{id:"cap",name:"\u015Eapka",price:20,slot:"head"},{id:"crown",name:"Ta\xE7",price:30,slot:"head"}]),mx=i=>px.find(t=>t.id===i),Sf=Object.freeze([{name:"\xD6zg\xFCn renkler",hex:null},{name:"Mor",hex:"#9868dc"},{name:"Mavi",hex:"#459fdb"},{name:"Mercan",hex:"#ef7786"},{name:"Ye\u015Fil",hex:"#53b998"},{name:"Alt\u0131n",hex:"#e6b65f"},{name:"Siyah",hex:"#302c43"},{name:"Beyaz",hex:"#eee5db"}]);function bf(i){let t=typeof i=="string"?Object.fromEntries(i.split(",").filter(Boolean).map(n=>n.split(":").map((s,r)=>r?Number(s):s))):i,e={};for(let n of["face","neck","head"]){let s=t?.[n];Number.isInteger(s)&&s>0&&s<Sf.length&&(e[n]=s)}return e}var tl=i=>Object.entries(bf(i)).map(([t,e])=>t+":"+e).join(","),Bs=(i,t,e)=>Sf[bf(i)[t]||0].hex||e;function wf(i){let t=Array.isArray(i)?i:typeof i=="string"?i.split(","):[],e=new Map;for(let n of t){let s=mx(n);s?.slot&&e.set(s.slot,n)}return[...e.values()].sort()}var Tf=Object.freeze({duration:4800,impact:1780}),vf=Object.freeze({idle:0,hello:10,draw:30,celebrate:40,sad:40,angry:40,surprise:40,knock:60,win:80,lose:80,impact:100});function el(i,t,e=0){return t==="idle"||e<=0||!i||i==="idle"?!0:i!==t&&(vf[t]||0)>=(vf[i]||0)}var Gc=new Map,Hc=new Map;function On(i,t){return Gc.has(i)||Gc.set(i,t()),Gc.get(i)}function re(i,t=.4,e=0,n={}){let s=JSON.stringify([i,t,e,n]);return Hc.has(s)||Hc.set(s,new Li({color:i,roughness:t,metalness:e,clearcoat:.24,clearcoatRoughness:.24,...n})),Hc.get(s)}function Ae(i,t,e=[0,0,0]){let n=new Re;return n.name=t,n.position.set(...e),i.add(n),n}function en(i,t,e,n=[0,0,0],s=[1,1,1]){let r=new fe(t,e);return r.position.set(...n),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function ee(i,t,e,n){let s=Math.max(...n),r=s<.05?[12,8]:s<.18?[20,14]:[32,22];return en(i,On("sphere:"+r,()=>new Ii(1,...r)),t,e,n)}function cn(i,t,e,n,s=.07){return en(i,On("rounded:"+n+":"+s,()=>new Us(...n,5,s)),t,e)}function Gi(i,t,e,n=.022){return en(i,On("tube:"+e.flat()+":"+n,()=>new bs(new Zn(e.map(s=>new B(...s))),32,n,10,!1)),t)}function Af(i,t,e,n,s=.018){return en(i,On("torus:"+n+":"+s,()=>new Mr(n,s,12,48)),t,e)}function Wc(i,t,e,n){let s="tapered:"+e.flat()+":"+n,r=On(s,()=>{let a=new Zn(e.map(d=>new B(...d))),o=40,l=14,c=a.computeFrenetFrames(o,!1),h=[],f=[];for(let d=0;d<=o;d++){let g=d/o,v=a.getPoint(g),m=g*(n.length-1),p=Math.min(n.length-2,Math.floor(m)),T=pc.lerp(n[p],n[p+1],m-p);for(let C=0;C<=l;C++){let y=C/l*Math.PI*2,w=c.normals[d].clone().multiplyScalar(Math.cos(y)*T).addScaledVector(c.binormals[d],Math.sin(y)*T);h.push(v.x+w.x,v.y+w.y,v.z+w.z)}}for(let d=0;d<o;d++)for(let g=0;g<l;g++){let v=d*(l+1)+g,m=v+l+1;f.push(v,m,v+1,m,m+1,v+1)}let u=new ge;return u.setAttribute("position",new Qt(h,3)),u.setIndex(f),u.computeVertexNormals(),u});return en(i,r,t)}function gx(i,t){return re(Mf(i,t),i===1?.27:i===5?.2:.43,i===1?.14:0,{sheen:i===0||i===2?.35:0,sheenColor:new qt("#ffffff"),sheenRoughness:.65})}var _x=()=>re("#21172f",.28),zs=()=>re("#fff0dc",.57);function xx(){return On("smooth-cloud",()=>{let i=[[0,.68,0,.58,.49,.34],[-.38,.9,-.035,.31,.31,.31],[-.45,.57,-.015,.27,.27,.31],[0,1.12,-.035,.35,.35,.31],[.4,.82,-.025,.32,.32,.31]],t=.11,e=(p,T,C)=>{let y=10;for(let[w,b,P,_,A,F]of i){let V=(Math.hypot((p-w)/_,(T-b)/A,(C-P)/F)-1)*Math.min(_,A,F),z=Math.max(0,Math.min(1,.5+.5*(V-y)/t));y=V*(1-z)+y*z-t*z*(1-z)}return y},n=37,s=35,r=25,a=[-.8,.12,-.43],o=[1.6/n,1.42/s,.86/r],l=new Float32Array((n+1)*(s+1)*(r+1)),c=(p,T,C)=>p+(n+1)*(T+(s+1)*C);for(let p=0;p<=r;p++)for(let T=0;T<=s;T++)for(let C=0;C<=n;C++)l[c(C,T,p)]=e(a[0]+C*o[0],a[1]+T*o[1],a[2]+p*o[2]);let h=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],f=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],u=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],d=[],g=[],v=p=>new B(e(p.x+.001,p.y,p.z)-e(p.x-.001,p.y,p.z),e(p.x,p.y+.001,p.z)-e(p.x,p.y-.001,p.z),e(p.x,p.y,p.z+.001)-e(p.x,p.y,p.z-.001)).normalize();for(let p=0;p<r;p++)for(let T=0;T<s;T++)for(let C=0;C<n;C++){let y=h.map(b=>l[c(C+b[0],T+b[1],p+b[2])]);if(y.every(b=>b>=0)||y.every(b=>b<0))continue;let w=h.map(b=>new B(a[0]+(C+b[0])*o[0],a[1]+(T+b[1])*o[1],a[2]+(p+b[2])*o[2]));for(let b of f){let P=[];for(let[z,K]of u){let L=b[z],H=b[K];y[L]<0!=y[H]<0&&P.push(w[L].clone().lerp(w[H],y[L]/(y[L]-y[H])))}if(P.length<3)continue;let _=P.reduce((z,K)=>z.add(K),new B).multiplyScalar(1/P.length),A=v(_),F=P[0].clone().sub(_).normalize(),V=new B().crossVectors(A,F);P.sort((z,K)=>Math.atan2(z.clone().sub(_).dot(V),z.clone().sub(_).dot(F))-Math.atan2(K.clone().sub(_).dot(V),K.clone().sub(_).dot(F)));for(let z=1;z<P.length-1;z++)for(let K of[P[0],P[z],P[z+1]]){d.push(K.x,K.y,K.z);let L=v(K);g.push(L.x,L.y,L.z)}}}let m=new ge;return m.setAttribute("position",new Qt(d,3)),m.setAttribute("normal",new Qt(g,3)),m})}function yx(){return On("star",()=>{let i=Array.from({length:10},(l,c)=>{let h=Math.PI/2+c*Math.PI/5,f=c%2?.43:.61;return new B(Math.cos(h)*f,Math.sin(h)*f,0)}),t=new Zn(i,!0,"catmullrom",.5),e=t.getPoints(100).slice(0,-1),n=[],s=[],r=16,a=e.length;for(let l of[1,-1])for(let c=0;c<=r;c++){let h=c/r*Math.PI/2;for(let f of e)n.push(f.x*Math.sin(h),f.y*Math.sin(h),l*.28*Math.cos(h))}for(let l=0;l<2;l++)for(let c=0;c<r;c++)for(let h=0;h<a;h++){let f=l*(r+1)*a,u=f+c*a+h,d=f+(c+1)*a+h,g=f+(c+1)*a+(h+1)%a,v=f+c*a+(h+1)%a;l?s.push(u,g,d,u,v,g):s.push(u,d,g,u,g,v)}let o=new ge;return o.setAttribute("position",new Qt(n,3)),o.setIndex(s),o.computeVertexNormals(),o})}function Xc(i,t={}){if(i.userData.surfaceFace)return;let e=i.children.filter(r=>r.isMesh);if(e.length<2)return;let n=e.map(r=>{r.updateMatrix();let a=(r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone()).applyMatrix4(r.matrix);a.deleteAttribute("uv");let o=r.material.color,l=[];for(let c=0;c<a.attributes.position.count;c++)l.push(o.r,o.g,o.b);return a.setAttribute("color",new Qt(l,3)),a}),s=Hr(n);n.forEach(r=>r.dispose()),s.userData.owned=!0,e.forEach(r=>i.remove(r)),en(i,s,re("#ffffff",.32,.02,{vertexColors:!0,...t}))}function Ef(i){for(let e of[...i.children])e.isMesh||Ef(e);let t=new Map;for(let e of[...i.children])if(e.isMesh&&!e.userData.surfaceFace){e.updateMatrix();let n=t.get(e.material)||[];n.push(e),t.set(e.material,n)}for(let[e,n]of t){if(n.length<2)continue;let s=n.map(a=>{let o=(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(a.matrix);return o.deleteAttribute("uv"),o}),r=Hr(s);s.forEach(a=>a.dispose()),r.userData.owned=!0,n.forEach(a=>i.remove(a)),en(i,r,e)}}function ks(i){let t=new Set,e=new Set;i.traverse(n=>{n.isMesh&&n.geometry.userData.owned&&t.add(n.geometry),n.isMesh&&n.material.userData.instanceOwned&&e.add(n.material)}),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose())}var qc="surface-faces-v3";function vx(i,t,e,n,{robot:s=!1,paw:r=!1,short:a=!1}={}){let o=Ae(i,e<0?"ArmL":"ArmR",n),l=a?.125:.175,c=s?re("#655478",.32,.35):t;ee(o,c,[0,-.018,0],[.095,.096,.095]),ee(o,t,[0,-l*.48,.012],[.087,l*.67,.087]);let h=Ae(o,"Elbow",[0,-l,0]);ee(h,c,[0,0,0],[.078,.079,.078]),ee(h,t,[0,-l*.43,.02],[.078,l*.65,.081]);let f=Ae(h,"Wrist",[0,-l*.85,.025]),u=r?zs():t;ee(f,u,[0,-.024,.02],[.112,.106,.095]),ee(f,u,[e*.086,.012,.035],[.043,.059,.049]);for(let d=0;d<2;d++)Gi(f,re(s?"#584369":r?"#c8ad9e":"#795572",.65),[[(d-.5)*.052,-.055,.104],[(d-.5)*.05,-.072,.097]],.003);return o.userData.grip=[0,-l*1.85-.024,.045],o.userData.elbow=h,o.userData.wrist=f,o}function Yr(i,t,e,{robot:n=!1,short:s=!1,paw:r=!1}={}){return[-1,1].map(a=>{let o=Ae(i,a<0?"LegL":"LegR",[a*.195,.09,0]),l=s?.11:.19;ee(o,t,[0,-l*.44,0],[.12,l*.75,.13]);let c=Ae(o,"Knee",[0,-l,0]);return ee(c,t,[0,-l*.48,.01],[.103,l*.77,.112]),ee(c,r?zs():t,[0,-l*.94,.075],[.151,.108,.192]),n&&(cn(c,re("#4e3e63",.36,.18),[0,-l*1.22,.08],[.29,.07,.34],.03),ee(c,re("#b8a1d8",.3,.35),[a*.1,0,0],[.025,.047,.05])),e==="seated"&&(o.rotation.x=-Math.PI/2,c.rotation.x=Math.PI/2),o})}function Mx(i,t,e,n,s=!1){let r=Ae(i,"Eye",t);if(r.scale.setScalar(e),r.userData.eyeScale=e,s){let o=re("#a0ffee",.27,0,{emissive:"#41dfc3",emissiveIntensity:.55});cn(r,o,[0,0,.022],[.18,.225,.045],.07),ee(r,re("#effffb",.28),[-.035,.05,.05],[.023,.033,.01])}else{ee(r,re("#fff9ef",.32),[0,0,0],[.155,.183,.08]);let o=Ae(r,"Pupil",[0,0,.075]);ee(o,re(n,.34),[0,-.005,0],[.101,.125,.034]),ee(o,re("#201b35",.3),[.006,-.008,.025],[.061,.085,.021]),ee(o,re("#ffffff",.22),[-.027,.043,.047],[.03,.034,.009]),ee(o,re("#fff6fa",.24),[.041,-.046,.044],[.011,.013,.005]),Xc(o,{roughness:.32})}let a=Ae(i,"ClosedEye",t);return a.scale.setScalar(e),Gi(a,s?re("#9dffe6",.28,0,{emissive:"#3ee0be",emissiveIntensity:.4}):_x(),[[-.13,.012,.1],[0,-.025,.13],[.13,.012,.1]],.018),a.visible=!1,{eye:r,lid:a}}function Sx(i,t){for(let e of i.children)e.position.y-=t;i.position.y=t}function Yc(i=0,t=0,e="seated",n="none",s={}){i=Number.isInteger(i)&&i>=0&&i<6?i:0,t=Number.isInteger(t)&&t>=0&&t<8?t:0;let r=new Re;r.name=["Pof","Robot","Cat","Cyclops","Star","Jelly"][i],r.userData.face=i,r.userData.modelVersion=qc;let a=gx(i,t),o=Ae(r,"Head"),l=Ae(r,"Torso"),c=[],h=[],f=[],u=[],d=[],g,v=null,m=null,p=[],T=(L,H=1,tt="#8054bb",J=!1)=>{let W=Mx(o,L,H,tt,J);c.push(W.eye),h.push(W.lid)},C=(L,H,tt,J=.06)=>ee(o,re("#f1a1ad",.65),[L,H,tt],[J,J*.48,.015]),y=(L,H,tt,J={})=>{for(let W of[-1,1])f.push(vx(r,a,W,[W*L,H,tt],J))},w=.84,b=1.4,P=.4,_=.48;if(i===0)en(o,xx(),a,[0,0,0],[.94,.91,1.06]),T([-.195,.75,.354],1.01,"#7c4eb5"),T([.195,.75,.354],1.01,"#7c4eb5"),C(-.34,.57,.325),C(.34,.57,.325),m=Ae(o,"CloudCurl",[.19,1.15,-.01]),ee(m,a,[0,0,0],[.24,.2,.24]),y(.45,.49,.025,{short:!0}),d=Yr(r,a,e,{short:!0,paw:!0}),w=.7,b=1.34,P=.38,_=.45;else if(i===1){let L=re("#eee6ff",.32,.03),H=re("#212039",.3,.15),tt=re("#bb9cdf",.31,.24);cn(l,a,[0,.29,0],[.61,.64,.48],.17),cn(l,L,[0,.32,.24],[.43,.36,.058],.11);for(let W=0;W<3;W++)cn(l,re("#8260b1",.32),[(W-1)*.082,.31,.276],[.045,.11,.018],.015);ee(l,tt,[0,.65,0],[.13,.08,.13]),cn(o,a,[0,1.02,0],[1.08,.8,.67],.23),cn(o,L,[0,1.025,.25],[1.015,.7,.25],.2),cn(o,H,[0,1.025,.39],[.86,.48,.13],.16);for(let W of[-1,1])cn(o,tt,[W*.555,1.025,-.025],[.085,.32,.3],.04),cn(o,a,[W*.6,1.025,-.025],[.045,.21,.23],.02);T([-.185,1.06,.465],.89,"#a0ffee",!0),T([.185,1.06,.465],.89,"#a0ffee",!0);let J=re("#9dffe6",.25,0,{emissive:"#45dfc3",emissiveIntensity:.4});m=Ae(o,"Antenna",[0,1.42,-.05]),Gi(m,tt,[[0,0,0],[0,.07,0],[.035,.13,0]],.025),ee(m,J,[.035,.14,0],[.055,.055,.055]),y(.34,.52,.015,{robot:!0}),d=Yr(r,a,e,{robot:!0}),w=1,b=1.43,P=.64,_=.49}else if(i===2){ee(l,a,[0,.32,0],[.35,.43,.275]),ee(l,zs(),[0,.275,.24],[.2,.27,.055]),ee(o,a,[0,1.01,0],[.535,.43,.355]);for(let L of[-1,1]){let H=Ae(o,L<0?"EarL":"EarR",[L*.33,1.29,-.02]),tt=new Jn;tt.moveTo(-.17,0),tt.quadraticCurveTo(-.18,.2,-.035,.36),tt.quadraticCurveTo(.05,.4,.18,0),tt.closePath();let J=On("studio-cat-ear",()=>new hi(tt,{depth:.1,bevelEnabled:!0,bevelSize:.035,bevelThickness:.03,bevelSegments:4,curveSegments:16}));en(H,J,a,[0,0,-.06]),en(H,J,re("#f1b4b1",.63),[0,.045,.071],[.6,.72,.12]),H.rotation.z=-L*.13,p.push(H),ee(o,zs(),[L*.135,.837,.3],[.17,.11,.07]);for(let W=0;W<2;W++)Gi(o,re("#a36762",.65),[[L*.32,.85-W*.05,.3],[L*.54,.87-W*.07,.25]],.004)}T([-.19,1.055,.317],.94,"#4c8c87"),T([.19,1.055,.317],.94,"#4c8c87"),ee(o,re("#b66c76",.5),[0,.89,.389],[.044,.032,.024]);for(let L of[-.12,0,.12]){let H=ee(o,re("#b9704b",.6),[L,1.34,.2],[.026,.075,.02]);H.rotation.z=L*-.8}v=Ae(r,"Tail",[0,.08,-.18]),Wc(v,a,[[0,0,0],[.36,-.07,-.1],[.5,.13,-.12],[.46,.37,-.09],[.32,.39,-.02]],[.085,.095,.09,.1,.055]),ee(v,zs(),[.32,.39,-.02],[.1,.1,.085]),y(.33,.52,.015,{paw:!0}),d=Yr(r,a,e,{paw:!0}),w=.96,b=1.42,P=.62,_=.45}else if(i===3){ee(l,a,[0,.35,0],[.43,.47,.32]),ee(l,re("#b9e8cd",.6),[0,.265,.285],[.26,.3,.055]),ee(o,a,[0,.89,0],[.49,.51,.36]);for(let L of[-1,1]){Wc(o,zs(),[[L*.34,1.2,-.02],[L*.44,1.31,-.03],[L*.42,1.48,-.05],[L*.33,1.54,-.04]],[.1,.095,.06,.005]);for(let H=0;H<3;H++)ee(o,re("#3caa92",.65),[L*(.36+H*.028),.73+H*.08,.25],[.022,.025,.014])}T([0,.98,.327],1.54,"#b58a38"),m=Ae(o,"Sprout",[0,1.36,-.07]);for(let L of[-1,1]){let H=ee(m,re("#268b75",.55),[L*.045,.055,0],[.042,.1,.043]);H.rotation.z=-L*.4}y(.4,.56,0),d=Yr(r,a,e),w=.87,b=1.4,P=.47,_=.45}else if(i===4)en(o,yx(),a,[0,.75,0],[.94,.94,1.13]),T([-.175,.835,.269],.87,"#a35b38"),T([.175,.835,.269],.87,"#a35b38"),C(-.3,.66,.258,.057),C(.3,.66,.258,.057),y(.34,.58,.005,{short:!0}),d=Yr(r,a,e,{short:!0}),w=.74,b=1.2,P=.38,_=.4;else{let L=a.clone();L.userData.instanceOwned=!0,L.roughness=.27,L.clearcoat=.7,L.clearcoatRoughness=.27,ee(o,L,[0,.89,-.015],[.55,.47,.365]);for(let tt=0;tt<7;tt++){let J=tt*Math.PI*2/7;ee(o,L,[Math.cos(J)*.43,.56,Math.sin(J)*.22],[.14,.115,.15])}T([-.185,.925,.314],.91,"#5266a9"),T([.185,.925,.314],.91,"#5266a9"),C(-.3,.74,.29,.055),C(.3,.74,.29,.055),[[-.33,.02],[-.22,.18],[-.08,.25],[.08,.25],[.22,.18],[.33,.02]].forEach(([tt,J],W)=>{let it=W<3?-1:1,rt=Ae(r,"Tentacle"+W,[tt,.53,J-.1]);Wc(rt,L,[[0,0,0],[it*.02,-.17,.015],[it*.06,-.34,.035],[it*.17,-.4,.085]],[.062,.073,.074,.055]);let ht=Ae(rt,"Elbow",[it*.17,-.4,.085]);ee(ht,L,[it*.035,.012,.01],[.09,.07,.08]),rt.userData.grip=[it*.205,-.388,.095],rt.userData.elbow=ht,f.push(rt)}),m=Ae(o,"BellGlint",[.17,1.19,.22]),ee(m,re("#d5f3ff",.4),[0,0,0],[.037,.08,.012]),m.rotation.z=-.5,w=.87,b=1.34,P=.49,_=.46}if(i===0||i===4){let L=i===0?.12:.24;for(let H of d)H.position.y+=L;r.userData.seatOffset=-L}let A=Ae(r,"Hips",[0,i===0?.24:i===4?.36:.12,-.22]);for(let L of[-1,1])ee(A,a,[L*.09,0,0],[.12,.11,.1]);let F=xf(o,i);g=F.mouth,u.push(...F.brows),Sx(o,w);let V=f.map(L=>L.userData.elbow).filter(Boolean),z=f.map(L=>L.userData.wrist).filter(Boolean),K=d.map(L=>L.getObjectByName("Knee")).filter(Boolean);r.userData.rig={face:i,pose:e,facial:F,head:o,body:l,eyes:c,pupils:c.flatMap(L=>L.children.filter(H=>H.name==="Pupil")),lids:h,arms:f,forearms:V,hands:z,legs:d,knees:K,brows:u,mouth:g,tail:v,accent:m,ears:p,hips:A,mounts:{top:b-w,neck:P-w,z:i===1?.45:i===4?.32:.37,width:_}},r.userData.pose=e;for(let L of wf(n))bx(r,L,s);for(let L of[l,A,...f,...V,...z,...d,...K,...c,...u])Xc(L,{roughness:i===1?.34:.48,metalness:i===1?.08:0});return Ef(r),r}var Zc=(i,t,e="none",n={})=>Yc(i,t,"seated",e,n);function Cf(i,t){let e=i.userData.rig;return(e.hands?.[1]||e.forearms?.[1]||e.arms[1]).getWorldPosition(new B).project(t)}function bx(i,t,e={}){let n=i.userData.rig,s=n.head,r=n.mounts,a=Ae(t==="bow"?n.body:s,"Accessory-"+t),o=re(Bs(e,"head","#eac168"),.3,.42),l=re(Bs(e,t==="bow"?"neck":"head","#7651c2"),.48);if(a.userData.attachment=t,a.userData.slot=t==="bow"?"neck":t==="glasses"?"face":"head",t==="glasses"){let c=re(Bs(e,"face","#302b48"),.34),h=n.eyes.map(f=>f.position.clone());for(let f=0;f<h.length;f++){let u=h[f],d=n.eyes[f].userData.eyeScale||1,g=.173*d,v=u.z+.13*d,m=Af(a,c,[u.x,u.y,v],g,.017);m.scale.y=1.12;for(let p of h.length===1?[-1,1]:[f===0?-1:1])Gi(a,c,[[u.x+p*g,u.y,v],[p*(r.width+.025),u.y+.01,.07],[p*r.width,u.y-.015,-.07]],.012)}if(h.length===2){let[f,u]=h;Gi(a,c,[[f.x+.16,f.y,f.z+.14],[0,f.y+.027,Math.max(f.z,u.z)+.155],[u.x-.16,u.y,u.z+.14]],.014)}}else if(t==="bow"){let c=r.neck+s.position.y;for(let h of[-1,1]){let f=new Jn;f.moveTo(h*.023,-.029),f.lineTo(h*.145,-.078),f.lineTo(h*.145,.078),f.lineTo(h*.023,.029),f.closePath();let u=On("angular-bow-"+h,()=>new hi(f,{depth:.032,bevelEnabled:!0,bevelSize:.006,bevelThickness:.005,bevelSegments:2}));en(a,u,l,[0,c,r.z]),Gi(a,re(Bs(e,"neck","#a58ae1"),.65),[[h*.035,c,r.z+.038],[h*.105,c+.027,r.z+.038]],.003)}cn(a,l,[0,c,r.z+.025],[.06,.08,.057],.01)}else if(t==="cap"){n.face===1&&(n.accent.visible=!1);let c=r.width*(n.face===2?.46:.75);ee(a,l,[0,r.top-.028,-.015],[c,.15,c*.8]),cn(a,re(Bs(e,"head","#a58ae1"),.45),[0,r.top-.093,c*.63],[c*1.9,.042,c*.95],.035),ee(a,o,[0,r.top+.115,-.015],[.026,.019,.026])}else if(t==="crown"){n.face===1&&(n.accent.visible=!1);let c=r.width*(n.face===2?.43:.64);Af(a,o,[0,r.top-.015,0],c,.031).rotation.x=Math.PI/2;for(let h=0;h<5;h++){let f=h*Math.PI*2/5,u=Math.sin(f)*c,d=Math.cos(f)*c;en(a,On("studio-crown-spike",()=>new vs(.057,.15,4)),o,[u,r.top+.05,d]),ee(a,re("#d96eab",.27),[u,r.top+.128,d],[.024,.025,.024])}}Xc(a,{roughness:.36,metalness:t==="crown"?.28:.06})}var Vs=Object.freeze({knock:1.8,hello:1.85,celebrate:2.65,sad:2.15,win:2.8,lose:2.4,draw:1.8,angry:1.8,surprise:1.5,impact:Tf.duration/1e3}),If=new WeakMap,Pf=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),jc=i=>(i=Pf(i),i*i*i*(i*(i*6-15)+10)),il=(i,t,e)=>jc((i-t)/(e-t)),Ue=(i,t,e,n,s)=>il(i,t,e)*(1-il(i,n,s)),Jc=i=>[i?.x||0,i?.y||0,i?.z||0],$c=(i,t)=>{i?.set?i.set(...t):i&&(i.x=t[0],i.y=t[1],i.z=t[2])},wx=i=>[i.facial?.mesh,...i.facial?.details||[],...(i.facial?.brows||[]).map(t=>t.children[0]),i.head,i.body,...i.eyes||[],...i.pupils||[],...i.lids||[],...i.arms||[],...i.forearms||[],...i.hands||[],...i.ears||[],...i.legs||[],...i.knees||[],...i.brows||[],i.tail,i.accent,i.hips,...Object.values(i.mouth||{})].filter(Boolean);function Rf(i){return{position:Jc(i.position),rotation:Jc(i.rotation),scale:i.scale?Jc(i.scale):[1,1,1],visible:i.visible!==!1}}function Tx(i){let t=i?.userData?.rig;if(!t)return null;let e={rig:t,root:Rf(i),nodes:new Map(wx(t).map(n=>[n,Rf(n)]))};return If.set(i,e),e}function Qc(i){let t=If.get(i);return t?.rig===i?.userData?.rig?t:Tx(i)}function sl(i){let t=Qc(i);return t?[i,...t.nodes.keys()].map(e=>({node:e,position:e.position.clone(),quaternion:e.quaternion.clone(),scale:e.scale.clone(),morph:e.morphTargetInfluences?.slice()})):[]}function rl(i,t){let e=jc(t);for(let{node:n,position:s,quaternion:r,scale:a,morph:o}of i){n.position.lerpVectors(s,n.position,e);let l=n.quaternion.clone();if(n.quaternion.slerpQuaternions(r,l,e),n.scale.lerpVectors(a,n.scale,e),o)for(let c=0;c<o.length;c++)n.morphTargetInfluences[c]=o[c]+(n.morphTargetInfluences[c]-o[c])*e}}function Zr(i){let t=Qc(i);if(!t)return;let e=(n,s)=>{$c(n.position,s.position),$c(n.rotation,s.rotation),$c(n.scale,s.scale),n.visible=s.visible};e(i,t.root);for(let[n,s]of t.nodes)e(n,s);t.rig.facial?.reset(),Kc(t.rig,"neutral");for(let n of t.rig.lids||[])n.visible=!1}function Kc(i,t){i.facial?.expression(t);let e=i.mouth||i.mouths;if(e)for(let n of["neutral","happy","sad"])e[n]&&(e[n].visible=n===t)}function Yt(i,t=0,e=0,n=0){i?.rotation&&(i.rotation.x+=t,i.rotation.y+=e,i.rotation.z+=n)}function Wi(i,t=0,e=0,n=0){i?.position&&(i.position.x+=t,i.position.y+=e,i.position.z+=n)}function Mn(i,t=1,e=1,n=1){i?.scale&&(i.scale.x*=t,i.scale.y*=e,i.scale.z*=n)}function Bn(i,t,e=1){if(i.facial){i.facial.brow(t,e);return}(i.brows||[]).forEach((n,s)=>{let r=s%2===0?-1:1;t==="sad"?(Yt(n,0,0,-r*.18*e),Wi(n,0,.008*e,0)):t==="angry"?(Yt(n,0,0,r*.3*e),Wi(n,0,-.014*e,0)):t==="happy"&&(Yt(n,0,0,r*.035*e),Wi(n,0,.025*e,0))})}function Xi(i,t,e=null){let n=Pf(t);(i.eyes||[]).forEach((s,r)=>{if(e!==null&&r!==e)return;let a=i.lids?.[r];a?(s.visible=n<.82,a.visible=n>=.82,Mn(s,1,Math.max(.045,1-n*.955),1)):Mn(s,1+n*.025,Math.max(.07,1-n*.93),1)})}function zn(i,t,e=.026,n=.062,s=.11){return il(i,t,t+n)*(1-il(i,t+n+e,t+n+e+s))}function nl(i,t){if(i<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++){let[n,s]=t[e],[r,a]=t[e-1];if(i<=n)return a+(s-a)*jc((i-r)/(n-r))}return t.at(-1)[1]}function Hi(i,t,e,n){let s=(i-t)/e;return s>0&&s<1?4*n*s*(1-s):0}function Me(i,t,e,n=0){let s=i.arms?.[t];if(!s)return;let r=t%2===0?-1:1;Yt(s,n,0,r*e)}function Se(i,t,e=0,n=0){let s=i.forearms?.[t],r=i.hands?.[t];Yt(s,-e,0,0),Yt(r,0,n*.3,(t?1:-1)*n)}function Ax(i,t,e){let n=[7.1,8.7,7.8,6.9,8.1,8.4][e],s=((t+e*.73)%n+n)%n,r=zn(s,1.27,e===2?.075:.026,e===2?.095:.062,e===2?.16:.11);e===3&&(r=Math.max(r,zn(s,1.58))),Xi(i,r);let a=Ue(s,2.7,3.25,4.25,4.9),o=(Math.sin(t*1.45+e*.6)+1)*.5;Yt(i.head,-a*.018,(e%2?1:-1)*a*.065,0);for(let l of i.eyes||[])for(let c of l.children.filter(h=>h.name==="Pupil"))c.position.x=a*(e%2?-.01:.01),c.position.y=0;if(e===0)Mn(i.body,1+o*.004,1+o*.009,1+o*.003),Yt(i.accent,0,0,Math.sin(t*1.1)*.018),Me(i,0,o*.012),Me(i,1,o*.012);else if(e===1){let l=Ue(s,3,3.45,4.2,4.8);Yt(i.head,-l*.025,l*.1,0),Yt(i.accent,0,0,l*.045),Se(i,0,.025+o*.012),Se(i,1,.025+o*.012)}else if(e===2){let l=Ue(s,4.8,4.95,5,5.25);Yt(i.ears?.[0],0,0,-l*.12),Yt(i.ears?.[1],0,0,l*.06),Yt(i.tail,0,Math.sin(t*.8)*.13,0),Mn(i.body,1,1+o*.008,1)}else if(e===3){let l=Ue(s,3,3.55,4.4,5.1);Yt(i.head,-l*.025,l*.06,-l*.035),Mn(i.body,1+o*.003,1+o*.008,1),Yt(i.accent,0,0,Math.sin(t*1.2)*.025)}else if(e===4){let l=Ue(s,3,3.7,4.2,5);Yt(i.head,-l*.035,l*.05,l*.035),Se(i,0,l*.18),Se(i,1,l*.18),Mn(i.body,1,1+o*.007,1)}else Mn(i.head,1+o*.003,1+o*.006,1),(i.arms||[]).forEach((l,c)=>{Yt(l,Math.sin(t*.85-c*.55)*.018,0,Math.sin(t*.9-c*.7)*.022),Yt(i.forearms?.[c],0,0,Math.sin(t*1.1-c*.6)*.06)})}function Ex(i,t,e){let n=Ue(t,.02,.3,1.3,1.85),s=nl(t,[[0,0],[.14,-.07],[.49,1.24],[1.18,1.24],[1.8,0],[1.85,0]]),r=nl(t,[[0,0],[.42,0],[.64,-.22],[.85,.21],[1.06,-.17],[1.25,.1],[1.6,0],[1.85,0]]);Xi(i,zn(t,.16)),Bn(i,"happy",n*.65),Yt(i.head,nl(t,[[0,0],[.22,.035],[.57,-.055],[1.22,-.025],[1.85,0]]),n*.04,0),e===0?(Me(i,1,s,-n*.12),Se(i,1,n*.65,r),Me(i,0,n*.1),Yt(i.head,0,0,-n*.06),Yt(i.accent,0,0,-r*.13)):e===1?(Me(i,1,s*.88,-n*.15),Se(i,1,n*.85,r*.72),Yt(i.head,-n*.055,n*.055,-n*.045),Yt(i.accent,0,0,r*.22)):e===2?(Me(i,1,s*.75,-n*.25),Se(i,1,n*1.1,r*.55),Yt(i.head,-n*.035,n*.035,n*.08),Xi(i,zn(t,.83,.09,.06,.16),0),Yt(i.tail,0,Math.sin(t*4)*n*.23,0),Yt(i.ears?.[1],0,0,-n*.08)):e===3?(Me(i,1,s*.88,-n*.18),Se(i,1,n*.75,r*.5),Yt(i.head,-n*.055,-n*.05,-n*.045),Me(i,0,n*.12),Yt(i.accent,0,0,r*.1)):e===4?(Me(i,0,s*.82,-n*.14),Me(i,1,s,-n*.14),Se(i,0,n*.6,-r*.8),Se(i,1,n*.6,r),Yt(i.head,-n*.03,0,n*.055)):((i.arms||[]).forEach((a,o)=>{let l=Ue(t,.04+o*.045,.36+o*.045,1.06+o*.035,1.62+o*.035);Yt(a,-l*.24,0,(o<3?-1:1)*l*(.29+Math.sin(t*5-o*.75)*.055)),Yt(i.forearms?.[o],0,0,(o<3?-1:1)*l*.26)}),Yt(i.head,-n*.035,n*.06,-n*.035))}function Cx(i,t,e,n,s){let r=Ue(e,.01,.15,.2,.4),a=Ue(e,.17,.58,s-.68,s-.03),o=Hi(e,.71,.38,.1)+Hi(e,1.3,.38,.08);if(Yt(i.head,r*.055-a*.09,Math.sin(e*3)*a*.02,Math.sin(e*4)*a*.025),Bn(i,"happy",a),Xi(i,Math.max(zn(e,.18),zn(e,.83,.15,.08,.15))),n!==1&&Mn(i.body,1+r*.012,1-r*.022+a*.01,1+r*.007),i.pose!=="seated"&&Wi(t,0,Hi(e,.43,.42,.05)+Hi(e,1.08,.37,.03),0),n!==5){let l=[1,.92,.88,.96,1][n];Me(i,0,(a*1.52+o)*l,-a*.12),Me(i,1,(a*1.65+o*.8)*l,-a*.15),Se(i,0,a*.47,a*.08),Se(i,1,a*.6,-a*.08)}else(i.arms||[]).forEach((l,c)=>{Yt(l,-a*.2,0,(c<3?-1:1)*a*(.38+Math.sin(e*6-c*.65)*.045)),Yt(i.forearms?.[c],0,0,(c<3?-1:1)*a*.25)});Yt(i.tail,0,Math.sin(e*5)*a*.23,0),Yt(i.accent,0,0,Math.sin(e*6)*a*.045),(i.ears||[]).forEach((l,c)=>Yt(l,0,0,(c?1:-1)*a*.035))}function Rx(i,t,e,n){let s=Ue(t,.03,.5,n-.58,n-.02);Yt(i.head,s*.105,-s*.045,s*.035),Bn(i,"sad",s),Xi(i,zn(t,.56,.1,.09,.17)),e!==1&&Mn(i.body,1+s*.004,1-s*.009,1),Me(i,0,-s*.035,s*.025),Me(i,1,-s*.035,s*.025),Se(i,0,s*.09),Se(i,1,s*.09),Yt(i.tail,0,-s*.15,-s*.04),Yt(i.accent,0,0,s*.06),(i.ears||[]).forEach((r,a)=>Yt(r,0,0,(a?-1:1)*s*.1)),e===5&&(i.arms||[]).forEach((r,a)=>Yt(r,s*.02,0,(a<3?1:-1)*s*.045))}function Gs(i,{time:t=0,face:e=i?.userData?.rig?.face??i?.userData?.face??0,mood:n="idle",elapsed:s=0,reduced:r=!1}={}){let a=Qc(i);if(!a)return!1;Zr(i);let o=a.rig;if(e=Number.isInteger(e)&&e>=0&&e<6?e:0,t=Number.isFinite(t)?Math.max(0,t):0,s=Number.isFinite(s)?Math.max(0,s):0,n==="idle"||!Vs[n])return r||Ax(o,t,e),!r;let l=n==="sad"||n==="lose"?"sad":["hello","knock"].includes(n)?"neutral":"happy",c=Vs[n];if(Kc(o,l),r)return Bn(o,l,.5),!1;if(s>=c)return Bn(o,l,.45),!1;if(n==="angry"){let h=Ue(s,0,.25,1.1,1.8);Kc(o,"sad"),Bn(o,"angry",h),Yt(o.head,.08*h,Math.sin(s*15)*.035*h,0),Me(o,0,.25*h),Me(o,1,.25*h),Se(o,0,h*.75),Se(o,1,h*.75),o.pose!=="seated"&&Wi(i,0,Hi(s,.3,.25,.025),0)}else if(n==="draw"){let h=Ue(s,.03,.35,1.15,1.78);Bn(o,"happy",h*.6),Yt(o.head,-h*.035,h*.04,0),Me(o,0,h*.25),Me(o,1,h*.25),Se(o,0,h*.25),Se(o,1,h*.25)}else if(n==="surprise"){let h=Ue(s,0,.18,.8,1.5);Bn(o,"happy",h),Yt(o.head,-.1*h,0,0),o.facial?.expression("surprise"),Me(o,0,.65*h),Me(o,1,.65*h),Se(o,0,h*.35),Se(o,1,h*.35)}else if(n==="impact"){let h=s,f=nl(h,[[0,0],[.65,0],[1.3,Math.PI],[2.35,Math.PI],[3.1,0],[4.8,0]]),u=Ue(h,1.42,1.78,1.93,2.3),d=Ue(h,2.45,2.95,3.95,4.5),g=Ue(h,.8,1.1,1.3,1.58);Bn(o,"happy",.75),Xi(o,Math.max(zn(h,.4),zn(h,3.25,.12))),Yt(o.head,-d*.1,u*.38,d*Math.sin(h*5)*.035),Me(o,0,d*1.6+g*.25,-d*.2),Me(o,1,d*1.72+g*.25,-d*.2),Se(o,0,d*.55+g*.25,d*.08),Se(o,1,d*.6+g*.25,-d*.08),o.pose!=="seated"&&(Yt(i,-u*.35,f,0),Wi(i,0,-g*.045+u*.025+Hi(h,2.65,.65,.09)+Hi(h,3.5,.55,.06),u*.32),Mn(o.body,1+u*.06,1-u*.05,1+u*.1),Mn(o.hips,1+u*.15,1-u*.08,1+u*.32),Wi(o.hips,0,0,-u*.06),(o.legs||[]).forEach((v,m)=>Yt(v,u*.12,0,(m?1:-1)*u*.055)))}else if(n==="knock"){let h=s,f=Ue(h,.02,.3,1.34,1.78),u=[.42,.76,1.1].reduce((d,g)=>d+Ue(h,g-.09,g,g+.025,g+.14),0);Me(o,1,f*2.35,-f*.38-u*.34),Se(o,1,f*.7-u*.38,-u*.1),Yt(o.head,-f*.035,f*.065,u*-.016),Bn(o,"happy",f*.35),Xi(o,zn(h,1.42))}else n==="hello"?Ex(o,s,e):l==="happy"?Cx(o,i,s,e,c):Rx(o,s,e,c);return!0}var th=class{constructor({reduced:t=()=>!1}={}){this.reduced=t,this.records=new Map,this.models=new Map,this.frame=null,this.lastFrame=0,this.dirty=!0,this.lost=!1,this.renderer=new Ds({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(1),this.renderer.setSize(384,384,!1),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=Oi,this.renderer.toneMappingExposure=.94,this.renderer.setClearColor(0,0),this.scene=new Yn;let e=new Os,n=new vi(this.renderer);this.environment=n.fromScene(e,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,e.dispose(),n.dispose(),this.scene.add(new Ni("#fff3ff","#64506d",.65));let s=new $n("#fff1df",2.1);s.position.set(-3,5,6),this.scene.add(s);let r=new $n("#c9b4ff",1.15);r.position.set(4,3,-3),this.scene.add(r),this.camera=new Ce(31,1,.1,30),this.observer=new IntersectionObserver(a=>{for(let o of a){let l=this.records.get(o.target);l&&(l.visible=o.isIntersecting,l.dirty=!0)}this.request()},{threshold:.01}),this.resizeObserver=new ResizeObserver(()=>this.invalidate()),this.renderer.domElement.addEventListener("webglcontextlost",a=>{a.preventDefault(),this.lost=!0,this.pause()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.invalidate()})}add(t){if(this.records.has(t)){let r=this.records.get(t),a=Number(t.dataset.character)||0,o=Number(t.dataset.colour)||0;(r.face!==a||r.colour!==o||r.accessory!==(t.dataset.accessory||"none")||r.colours!==(t.dataset.accessoryColours||""))&&(r.face=a,r.colour=o,r.accessory=t.dataset.accessory||"none",r.colours=t.dataset.accessoryColours||"",r.mood="idle",r.until=0,r.transition=null,clearTimeout(r.timer),delete t.dataset.emotion,r.dirty=!0,this.request());return}let e=document.createElement("canvas");e.className="character-canvas",e.setAttribute("aria-hidden","true"),t.replaceChildren(e);let n=e.getContext("2d",{alpha:!0});if(!n)return;let s={art:t,canvas:e,ctx:n,face:Number(t.dataset.character)||0,colour:Number(t.dataset.colour)||0,accessory:t.dataset.accessory||"none",colours:t.dataset.accessoryColours||"",visible:!1,dirty:!0,mood:"idle",start:0,until:0,phase:Math.random()*15,last:0};this.records.set(t,s),this.observer.observe(t),this.resizeObserver.observe(t),this.request()}model(t,e,n="none",s=""){let r=t+":"+e+":"+n+":"+tl(s),a=this.models.get(r);if(a)return this.models.delete(r),this.models.set(r,a),a;let o=Yc(t,e,"standing",n,s);o.updateMatrixWorld(!0);let l=new Ke().setFromObject(o),c=l.getCenter(new B),h=l.getSize(new B),f=new Ke().setFromObject(o.userData.rig.head),u=f.getCenter(new B),d=f.getSize(new B);for(u.y-=.04,a={root:o,center:c,radius:Math.max(h.y,h.x)*.5,headCenter:u,headRadius:Math.max(d.y*1.08,d.x)*.5},this.models.set(r,a);this.models.size>12;){let g=this.models.keys().next().value,v=this.models.get(g);this.models.delete(g),ks(v.root)}return a}play(t,e="hello",n=null){this.add(t);let s=this.records.get(t);if(!s)return!1;let r=(Vs[e]||1.85)*1e3,a=performance.now();return el(s.mood,e,s.until-a)?(s.transition={mood:s.mood,start:s.start,at:a},s.mood=e,s.start=a-Math.max(0,r-(n??r)),s.until=a+(n??r),s.dirty=!0,t.dataset.emotion=e,clearTimeout(s.timer),s.timer=setTimeout(()=>{this.records.get(t)===s&&(s.transition={mood:s.mood,start:s.start,at:performance.now()},s.mood="idle",delete t.dataset.emotion,s.dirty=!0,this.request())},Math.max(0,s.until-a)),this.request(),!0):!1}invalidate(){this.dirty=!0;for(let t of this.records.values())t.dirty=!0;this.request()}prune(){for(let[t,e]of this.records)t.isConnected||(clearTimeout(e.timer),this.observer.unobserve(t),this.resizeObserver.unobserve(t),this.records.delete(t))}request(){!this.frame&&!document.hidden&&!this.lost&&(this.frame=requestAnimationFrame(t=>this.tick(t)))}pause(){this.frame&&cancelAnimationFrame(this.frame),this.frame=null}tick(t){if(this.frame=null,document.hidden||this.lost)return;this.prune();let e=this.reduced(),n=document.querySelector("dialog[open]:modal"),s=!1;for(let r of this.records.values()){let{art:a}=r;if(!r.visible||!a.getClientRects().length||n&&!n.contains(a)&&!a.closest(".character-hero"))continue;let o=a.getBoundingClientRect();if(o.bottom<=0||o.top>=innerHeight||o.width<1||o.height<1)continue;let l=!!a.closest("#scores,.home-portrait,.avatar-preview,#winnerPortrait"),c=r.mood!=="idle",h=!e&&(l||c);if(s||(s=h),!r.dirty&&!this.dirty&&(!h||t-r.last<(c?15:32)))continue;let f=Math.max(64,Math.min(384,Math.ceil(Math.max(o.width,o.height)*Math.min(devicePixelRatio||1,1.5))));(r.canvas.width!==f||r.canvas.height!==f)&&(r.canvas.width=r.canvas.height=f);let u=this.model(r.face,r.colour,r.accessory,r.colours),d=u.root,g=!!a.closest("#scores,.home-portrait,.friend-entry,.leader-row,.mini-player"),v=g?u.headCenter:u.center,m=g?u.headRadius:u.radius,p=null;r.transition&&!e&&t-r.transition.at<180?(Gs(d,{time:t/1e3+r.phase,face:r.face,mood:r.transition.mood,elapsed:Math.max(0,(t-r.transition.start)/1e3)}),p=sl(d)):r.transition=null,Zr(d),Gs(d,{time:t/1e3+r.phase,face:r.face,mood:r.mood,elapsed:Math.max(0,(t-r.start)/1e3),reduced:e}),p&&rl(p,(t-r.transition.at)/180);let T=this.camera;this.scene.add(d);let C=m/Math.sin(this.camera.fov*Math.PI/360)*1.14;if(this.camera.position.copy(v).add(new B(.18,.12,1).normalize().multiplyScalar(C)),this.camera.lookAt(v),this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,f,f),this.renderer.setViewport(0,0,f,f),this.renderer.render(this.scene,T),r.ctx.globalCompositeOperation="copy",r.ctx.drawImage(this.renderer.domElement,0,384-f,f,f,0,0,f,f),this.scene.remove(d),r.mood==="knock"){let y=Cf(d,T);a.dataset.knockX=((y.x+1)*50).toFixed(1)+"%",a.dataset.knockY=((1-y.y)*50).toFixed(1)+"%"}r.last=t,r.dirty=!1,a.dataset.modelReady||(a.dataset.modelReady="true",a.dataset.modelVersion=qc)}this.dirty=!1,this.lastFrame=t,s&&this.request()}dispose(){this.pause(),this.observer.disconnect(),this.resizeObserver.disconnect();for(let t of this.records.values())clearTimeout(t.timer);this.records.clear();for(let{root:t}of this.models.values())ks(t);this.models.clear(),this.environment.dispose(),this.renderer.dispose()}};var Jr=new Map,$r=new Map,Ix=()=>Df("orb",()=>new Ii(1,24,18));function Df(i,t){return Jr.has(i)||Jr.set(i,t()),Jr.get(i)}function Hs(i,t=.48,e=0){let n=i+":"+t+":"+e;return $r.has(n)||$r.set(n,new Li({color:i,roughness:t,metalness:e,clearcoat:.18,clearcoatRoughness:.3})),$r.get(n)}function Nf(i,t,e=[0,0,0]){let n=new Re;return n.name=t,n.position.set(...e),i.add(n),n}function Kr(i,t,e,n=[0,0,0],s=[1,1,1]){let r=new fe(t,e);return r.position.set(...n),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Px(i,t,e,n){return Kr(i,Ix(),t,e,n)}function hn(i,t,e,n,s=.08){return Kr(i,Df("box:"+n.join(":")+":"+s,()=>new Us(...n,4,s)),t,e)}function Lx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createImageData(128,128),n=47;for(let r=0;r<128;r++)for(let a=0;a<128;a++){n=Math.imul(n,1664525)+1013904223>>>0;let o=155+n%17+(a%3===0?15:0)+(r%3===0?11:0),l=(r*128+a)*4;e.data.set([o,o,o,255],l)}t.putImageData(e,0,0);let s=new Ei(i);return s.wrapS=s.wrapT=oi,s.repeat.set(8,6),s}function Dx(){let i=new Re,t=Hs("#59404b",.48),e=Hs("#c9a57b",.32,.5),n=Hs("#73598d",.92),s=Hs("#9672b0",.76);n.bumpMap||(n.bumpMap=Lx(),n.bumpScale=.009,s.bumpMap=n.bumpMap,s.bumpScale=.006),hn(i,t,[0,qr-.12,0],[3.7,.26,2.62],.2),hn(i,e,[0,qr+.02,0],[3.57,.06,2.49],.16),hn(i,n,[0,qr+.055,0],[3.42,.065,2.34],.15);for(let o of[-1.32,1.32])for(let l of[-.82,.82])hn(i,t,[o,.65,l],[.19,1.3,.19],.06),hn(i,e,[o,.13,l],[.2,.16,.2],.035);for(let o of Xr){let l=Nf(i,"Chair",[o.x,0,o.z]);l.rotation.y=o.yaw,hn(l,t,[0,.8,0],[1.07,.17,1],.12),hn(l,s,[0,.9,0],[.97,.16,.9],.14),hn(l,t,[0,1.36,-.44],[1.08,1.08,.18],.16),hn(l,s,[0,1.4,-.32],[.89,.83,.11],.12);for(let c of[-.36,.36])for(let h of[-.32,.32])hn(l,t,[c,.39,h],[.12,.78,.12],.035);for(let c of[-1,1])Px(l,e,[c*.41,1.77,-.4],[.044,.045,.035]),hn(l,t,[c*.5,1.1,0],[.1,.12,.75],.04)}i.updateMatrixWorld(!0);let r=new Map;i.traverse(o=>{if(!o.isMesh)return;let l=r.get(o.material)||[];l.push((o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrixWorld)),r.set(o.material,l)});let a=new Re;for(let[o,l]of r){let c=Hr(l);l.forEach(h=>h.dispose()),Kr(a,c,o)}return a}var Lf=class{constructor({onProject:t,onGreet:e,onError:n,onRestore:s,paths:r,colours:a}){this.onProject=t,this.onGreet=e,this.onError=n,this.onRestore=s,this.scene=new Yn,this.people=Array(4).fill(null),this.poses=new Map,this.visible=!1,this.angle=.55,this.angleTarget=.55,this.angularVelocity=0,this.lastTick=0,this.lastDraw=0,this.camera=new Ce(36,1.4,.1,50),this.target=new B(0,1,0),this.renderer=new Ds({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=Oi,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pi,this.canvas=this.renderer.domElement,this.canvas.className="table-scene-canvas",this.canvas.setAttribute("aria-hidden","true");let o=new Os,l=new vi(this.renderer);this.environment=l.fromScene(o,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.55,o.dispose(),l.dispose();let c=new Ni("#f6e8ff","#554568",.7);this.scene.add(c);let h=new $n("#fff0db",2.3);h.position.set(-3.5,7,5),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.left=-4,h.shadow.camera.right=4,h.shadow.camera.top=4,h.shadow.camera.bottom=-4,h.shadow.normalBias=.025,h.shadow.bias=-15e-5,h.shadow.radius=10,h.shadow.blurSamples=8,h.shadow.camera.near=.5,h.shadow.camera.far=20,this.scene.add(h);let f=new $n("#bfa5ff",1);f.position.set(3,4,-4),this.scene.add(f),this.scene.add(Dx());let u=Kr(this.scene,new Ri(20,20),new Sr({color:"#10081b",opacity:.13}),[0,-.012,0]);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,u.castShadow=!1,this.tiles(r,a),this.raycaster=new Ui,this.bind(),this.idle=null}tiles(t,e){let n=Hs("#fff9ee",.45),s=new Re;s.position.set(0,qr+.14,0);for(let r=0;r<4;r++){let a=Nf(s,"Tile",[(r%2-.5)*.46,.005,Math.floor(r/2)*.46-.23]);a.rotation.y=(r-1.5)*.08,hn(a,n,[0,0,0],[.4,.1,.4],.055);let o=new Qo().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="'+t[[0,2,4,5][r]]+'"/></svg>');for(let l of o.paths)for(let c of l.toShapes()){let h=new hi(c,{depth:.12,bevelEnabled:!1,curveSegments:12}),f=Kr(a,h,Hs(e[[0,2,3,5][r]],.52));f.rotation.x=-Math.PI/2,f.scale.setScalar(.007),f.position.set(-.14,.052,.14)}}this.scene.add(s)}bind(){this.canvas.style.touchAction="pan-y",this.canvas.addEventListener("pointerdown",t=>{this.angularVelocity=0,this.angleTarget=this.angle,this.pointer={id:t.pointerId,x:t.clientX,y:t.clientY,angle:this.angle,drag:!1,time:performance.now(),lastAngle:this.angle,velocity:0}}),this.canvas.addEventListener("pointermove",t=>{let e=this.pointer;if(!e||e.id!==t.pointerId)return;let n=t.clientX-e.x,s=t.clientY-e.y;if(!e.drag&&Math.abs(n)>8&&Math.abs(n)>Math.abs(s)*1.2&&(e.drag=!0,this.canvas.setPointerCapture(t.pointerId)),e.drag){t.preventDefault();let r=performance.now(),a=e.angle-n*.008;e.velocity=e.velocity*.45+(a-e.lastAngle)/Math.max(.008,(r-e.time)/1e3)*.55,e.lastAngle=a,e.time=r,this.angle=a,this.angleTarget=a,this.render()}}),this.canvas.addEventListener("pointerup",t=>{let e=this.pointer;if(this.pointer=null,!e)return;if(e.drag){this.reduced||(this.angularVelocity=Math.max(-3,Math.min(3,performance.now()-e.time>90?0:e.velocity)),this.angleTarget=this.angle+this.angularVelocity*.18,this.startMotion());return}let n=this.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new dt((t.clientX-n.left)/n.width*2-1,-(t.clientY-n.top)/n.height*2+1),this.camera);let s=this.raycaster.intersectObjects(this.people.filter(Boolean).map(r=>r.root),!0)[0];if(s){let r=s.object;for(;r&&r.userData.seat===void 0;)r=r.parent;r&&this.greet(r.userData.seat)}}),this.canvas.addEventListener("pointercancel",()=>this.pointer=null),this.canvas.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.onRestore?.()}),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.lost=!0,this.pause(),this.onError?.()})}attach(t,e,n){this.host=t,this.reduced=n,t.prepend(this.canvas),this.visible=!0,this.setSeats(e),this.resize(),this.render(),n||this.startMotion()}setSeats(t){t.forEach((e,n)=>{let s=e?e.face+":"+e.colour+":"+(e.accessory||"none")+":"+tl(e.accessoryColours):"";if(this.people[n]?.signature===s||(this.people[n]&&(this.scene.remove(this.people[n].root),ks(this.people[n].root),this.poses.delete(n)),this.people[n]=null,!e))return;let r=Zc(e.face,e.colour,e.accessory,e.accessoryColours),a=Xr[n];r.position.set(a.x,mf+(r.userData.seatOffset||0),a.z),r.rotation.y=a.yaw,r.userData.seat=n,this.scene.add(r),this.people[n]={root:r,signature:s}})}setMotion(t){this.reduced!==t&&(this.reduced=t,t?(this.pause(),this.visible=!0,this.render()):this.startMotion())}resize(){if(!this.host)return;let t=this.host.clientWidth,e=this.host.clientHeight;!t||!e||(this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.render())}positionCamera(){let t=new B(Math.sin(this.angle),.84,Math.cos(this.angle)).normalize(),e=[];for(let o of[-1.87,1.87])for(let l of[-1.33,1.33])for(let c of[0,1.55])e.push(new B(o,c,l));Xr.forEach((o,l)=>{for(let c of[-.58,.58])for(let[h,f]of[[.02,-.5],[.02,.5],[1.92,-.5],[1,.5]])e.push(new B(o.x+Math.cos(o.yaw)*c+Math.sin(o.yaw)*f,h,o.z-Math.sin(o.yaw)*c+Math.cos(o.yaw)*f));if(this.people[l])for(let c of[-.62,.62])for(let h of[1.45,2.82])e.push(new B(o.x+Math.cos(o.yaw)*c,h,o.z-Math.sin(o.yaw)*c))});let n=new B().crossVectors(new B(0,1,0),t).normalize(),s=new B().crossVectors(t,n).normalize(),r=Math.tan(this.camera.fov*Math.PI/360),a=5.4;for(let o of e){let l=o.clone().sub(this.target),c=l.dot(t);a=Math.max(a,c+Math.abs(l.dot(n))/(r*this.camera.aspect*.91),c+Math.abs(l.dot(s))/(r*.88))}this.camera.position.copy(this.target).addScaledVector(t,a),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(),this.distance=a}render(){if(!this.visible||!this.width||document.hidden||this.lost)return;this.positionCamera(),this.renderer.render(this.scene,this.camera),this.lastDraw=performance.now();let t=Xr.map((e,n)=>{let s=new B(e.x,this.people[n]?2.82:1.03,e.z).project(this.camera);return{index:n,x:(s.x+1)*.5*this.width,y:Math.max(7,Math.min(this.height-24,(1-s.y)*.5*this.height)),visible:s.z<1}});this.onProject?.(this.host,t),this.host.dataset.sceneReady="true",this.host.dataset.sceneDistance=this.distance.toFixed(2),this.host.dataset.sceneTriangles=String(this.renderer.info.render.triangles),this.host.dataset.sceneDraws=String(this.renderer.info.render.calls)}rotate(t){if(this.angleTarget+=t,this.reduced){this.angle=this.angleTarget,this.angularVelocity=0,this.render();return}this.startMotion()}startMotion(){this.frame||(this.lastTick=performance.now(),this.frame=requestAnimationFrame(t=>this.tick(t)))}react(t,e){if(!this.people[t])return!1;let n=performance.now(),s=this.poses.get(t);return s&&!el(s.mood,e,(Vs[s.mood]||1.85)*1e3-(n-s.start))?!1:(this.poses.set(t,{start:n,mood:e,previous:s||{mood:"idle",start:n}}),this.startMotion(),!0)}greet(t,e=!1){if(!(!this.people[t]||!this.visible||document.hidden||e)){if(this.reduced){this.onGreet?.(this.host,t);return}this.react(t,"hello")&&this.onGreet?.(this.host,t)}}tick(t){if(this.frame=null,!this.visible||document.hidden)return;let e=Math.min(.032,Math.max(.001,(t-this.lastTick)/1e3));this.lastTick=t;let n=Math.abs(this.angleTarget-this.angle)>3e-4||Math.abs(this.angularVelocity)>.003;if(n&&!this.pointer?.drag){let a=e/3;for(let o=0;o<3;o++)this.angularVelocity+=(100*(this.angleTarget-this.angle)-20*this.angularVelocity)*a,this.angle+=this.angularVelocity*a;Math.abs(this.angleTarget-this.angle)<3e-4&&Math.abs(this.angularVelocity)<.003&&(this.angle=this.angleTarget,this.angularVelocity=0,n=!1)}let s=this.people?.some(Boolean)&&!this.reduced,r=t-this.lastDraw>=(n||this.poses.size?15:32)||!s;if(r)for(let a=0;a<(this.people?.length||0);a++){let o=this.people[a];if(!o)continue;let l=this.poses.get(a),c={time:t/1e3+a*1.17,face:o.root.userData.rig.face,reduced:this.reduced},h=null;l?.previous&&t-l.start<180&&!this.reduced&&(Gs(o.root,{...c,mood:l.previous.mood,elapsed:(t-l.previous.start)/1e3}),h=sl(o.root));let f=Gs(o.root,{...c,mood:l?.mood||"idle",elapsed:l?(t-l.start)/1e3:0});h&&rl(h,(t-l.start)/180),l&&!f&&this.poses.delete(a)}r&&this.render(),(n||this.poses.size||s)&&(this.frame=requestAnimationFrame(a=>this.tick(a)))}pause(){this.visible=!1,this.pointer=null,this.angleTarget=this.angle,this.angularVelocity=0,this.frame&&cancelAnimationFrame(this.frame),this.frame=null;for(let t of this.people.filter(Boolean))Zr(t.root);this.poses.clear()}dispose(){this.pause(),clearInterval(this.idle);for(let s of this.people.filter(Boolean))this.scene.remove(s.root),ks(s.root);this.environment.dispose();let t=new Set(Jr.values()),e=new Set($r.values());this.scene.traverse(s=>{s.isMesh&&(t.add(s.geometry),e.add(s.material))});for(let s of t)s.dispose();let n=new Set;for(let s of e)s.bumpMap&&n.add(s.bumpMap),s.dispose();for(let s of n)s.dispose();Jr.clear(),$r.clear(),this.renderer.dispose(),this.canvas.remove()}};export{th as CharacterPortraits,Lf as TableScene,Zc as createSeatedCharacter};
