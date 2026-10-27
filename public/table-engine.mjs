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
 */var kh=0,Yl=1,Vh=2;var Pr=1,Gh=2,_i=3,xi=0,Ue=1,sn=2,Bn=0,Es=1,Zl=2,Jl=3,$l=4,Hh=5;var Bi=100,Wh=101,Xh=102,qh=103,Yh=104,Zh=200,Jh=201,$h=202,Kh=203,Kl=204,jl=205,jh=206,Qh=207,tu=208,eu=209,nu=210,iu=211,su=212,ru=213,au=214,Ea=0,Ca=1,Ra=2,hs=3,Ia=4,Pa=5,La=6,Na=7,ao=0,ou=1,lu=2,Mn=0,Ql=1,tc=2,ec=3,zi=4,nc=5,ic=6,sc=7;var rc=300,yi=301,ki=302,oo=303,lo=304,Lr=306,hi=1e3,ln=1001,us=1002,Le=1003,cu=1004;var Nr=1005;var De=1006,co=1007;var vi=1008;var Ze=1009,ac=1010,oc=1011,Cs=1012,ho=1013,Sn=1014,cn=1015,bn=1016,uo=1017,fo=1018,Rs=1020,lc=35902,cc=35899,hc=1021,uc=1022,hn=1023,In=1026,Mi=1027,po=1028,mo=1029,Si=1030,go=1031;var _o=1033,Dr=33776,Ur=33777,Fr=33778,Or=33779,xo=35840,yo=35841,vo=35842,Mo=35843,So=36196,bo=37492,To=37496,wo=37488,Ao=37489,Br=37490,Eo=37491,Co=37808,Ro=37809,Io=37810,Po=37811,Lo=37812,No=37813,Do=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Vo=37821,Go=36492,Ho=36494,Wo=36495,Xo=36283,qo=36284,zr=36285,Yo=36286;var nr=2300,Da=2301,wa=2302,Nl=2303,Dl=2400,Ul=2401,Fl=2402;var hu=3200;var kr=0,uu=1,Qn="",Ee="srgb",ir="srgb-linear",sr="linear",he="srgb";var Aa=7680;var fu=519,du=512,pu=513,mu=514,Zo=515,gu=516,_u=517,Jo=518,xu=519,yu=35044;var fc="300 es",yn=2e3,fs=2001;function Nf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Df(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vu(){let s=rr("canvas");return s.style.display="block",s}var ah={},ds=null;function dc(...s){let t="THREE."+s.shift();ds?ds("log",t,...s):console.log(t,...s)}function Mu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=Mu(s);let t="THREE."+s.shift();if(ds)ds("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Jt(...s){s=Mu(s);let t="THREE."+s.shift();if(ds)ds("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ri(...s){let t=s.join(" ");t in ah||(ah[t]=!0,qt(...s))}function Su(s,t,e){return new Promise(function(i,r){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}var bu={[Ea]:Ca,[Ra]:La,[Ia]:Na,[hs]:Pa,[Ca]:Ea,[La]:Ra,[Na]:Ia,[Pa]:hs},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,js=Math.PI/180,ps=180/Math.PI;function Vi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function pc(s,t){return(s%t+t)%t}function Uf(s,t,e,i,r){return i+(s-t)*(r-i)/(e-t)}function Ff(s,t,e){return s!==t?(e-s)/(t-s):0}function Qs(s,t,e){return(1-e)*s+e*t}function Of(s,t,e,i){return Qs(s,t,1-Math.exp(-e*i))}function Bf(s,t=1){return t-Math.abs(pc(s,t*2)-t)}function zf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function kf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Vf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gf(s,t){return s+Math.random()*(t-s)}function Hf(s){return s*(.5-Math.random())}function Wf(s){s!==void 0&&(oh=s);let t=oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xf(s){return s*js}function qf(s){return s*ps}function Yf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Zf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $f(s,t,e,i,r){let a=Math.cos,o=Math.sin,l=a(e/2),c=o(e/2),h=a((t+i)/2),u=o((t+i)/2),d=a((t-i)/2),f=o((t-i)/2),m=a((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":s.set(l*u,c*d,c*f,l*h);break;case"YZY":s.set(c*f,l*u,c*d,l*h);break;case"ZXZ":s.set(c*d,c*f,l*u,l*h);break;case"XZX":s.set(l*u,c*_,c*m,l*h);break;case"YXY":s.set(c*m,l*u,c*_,l*h);break;case"ZYZ":s.set(c*_,c*m,l*u,l*h);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mc={DEG2RAD:js,RAD2DEG:ps,generateUUID:Vi,clamp:ne,euclideanModulo:pc,mapLinear:Uf,inverseLerp:Ff,lerp:Qs,damp:Of,pingpong:Bf,smoothstep:zf,smootherstep:kf,randInt:Vf,randFloat:Gf,randFloatSpread:Hf,seededRandom:Wf,degToRad:Xf,radToDeg:qf,isPowerOfTwo:Yf,ceilPowerOfTwo:Zf,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:$f,normalize:Ge,denormalize:ls},Mc=class Mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*r+t.x,this.y=a*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;var pt=Mc,Ln=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,o,l){let c=i[r+0],h=i[r+1],u=i[r+2],d=i[r+3],f=a[o+0],m=a[o+1],_=a[o+2],S=a[o+3];if(d!==S||c!==f||h!==m||u!==_){let g=c*f+h*m+u*_+d*S;g<0&&(f=-f,m=-m,_=-_,S=-S,g=-g);let p=1-l;if(g<.9995){let A=Math.acos(g),C=Math.sin(A);p=Math.sin(p*A)/C,l=Math.sin(l*A)/C,c=c*p+f*l,h=h*p+m*l,u=u*p+_*l,d=d*p+S*l}else{c=c*p+f*l,h=h*p+m*l,u=u*p+_*l,d=d*p+S*l;let A=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=A,h*=A,u*=A,d*=A}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,a,o){let l=i[r],c=i[r+1],h=i[r+2],u=i[r+3],d=a[o],f=a[o+1],m=a[o+2],_=a[o+3];return t[e]=l*_+u*d+c*m-h*f,t[e+1]=c*_+u*f+h*d-l*m,t[e+2]=h*_+u*m+l*f-c*d,t[e+3]=u*_-l*d-c*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,a=t._z,o=t._order,l=Math.cos,c=Math.sin,h=l(i/2),u=l(r/2),d=l(a/2),f=c(i/2),m=c(r/2),_=c(a/2);switch(o){case"XYZ":this._x=f*u*d+h*m*_,this._y=h*m*d-f*u*_,this._z=h*u*_+f*m*d,this._w=h*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+h*m*_,this._y=h*m*d-f*u*_,this._z=h*u*_-f*m*d,this._w=h*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-h*m*_,this._y=h*m*d+f*u*_,this._z=h*u*_+f*m*d,this._w=h*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-h*m*_,this._y=h*m*d+f*u*_,this._z=h*u*_-f*m*d,this._w=h*u*d+f*m*_;break;case"YZX":this._x=f*u*d+h*m*_,this._y=h*m*d+f*u*_,this._z=h*u*_-f*m*d,this._w=h*u*d-f*m*_;break;case"XZY":this._x=f*u*d-h*m*_,this._y=h*m*d-f*u*_,this._z=h*u*_+f*m*d,this._w=h*u*d+f*m*_;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],o=e[1],l=e[5],c=e[9],h=e[2],u=e[6],d=e[10],f=i+l+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-h)*m,this._z=(o-r)*m}else if(i>l&&i>d){let m=2*Math.sqrt(1+i-l-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+h)/m}else if(l>d){let m=2*Math.sqrt(1+l-i-d);this._w=(a-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-l);this._w=(o-r)/m,this._x=(a+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,o=t._w,l=e._x,c=e._y,h=e._z,u=e._w;return this._x=i*u+o*l+r*h-a*c,this._y=r*u+o*c+a*l-i*h,this._z=a*u+o*h+i*c-r*l,this._w=o*u-i*l-r*c-a*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,a=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,r=-r,a=-a,o=-o,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+a*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+a*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sc=class Sc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,a=t.x,o=t.y,l=t.z,c=t.w,h=2*(o*r-l*i),u=2*(l*e-a*r),d=2*(a*i-o*e);return this.x=e+c*h+o*d-l*u,this.y=i+c*u+l*h-a*d,this.z=r+c*d+a*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,a=t.z,o=e.x,l=e.y,c=e.z;return this.x=r*c-a*l,this.y=a*o-i*c,this.z=i*l-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;var B=Sc,cl=new B,lh=new Ln,bc=class bc{constructor(t,e,i,r,a,o,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,o,l,c,h)}set(t,e,i,r,a,o,l,c,h){let u=this.elements;return u[0]=t,u[1]=r,u[2]=l,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,o=i[0],l=i[3],c=i[6],h=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],S=r[0],g=r[3],p=r[6],A=r[1],C=r[4],y=r[7],w=r[2],T=r[5],L=r[8];return a[0]=o*S+l*A+c*w,a[3]=o*g+l*C+c*T,a[6]=o*p+l*y+c*L,a[1]=h*S+u*A+d*w,a[4]=h*g+u*C+d*T,a[7]=h*p+u*y+d*L,a[2]=f*S+m*A+_*w,a[5]=f*g+m*C+_*T,a[8]=f*p+m*y+_*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*l*h-i*a*u+i*l*c+r*a*h-r*o*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=u*o-l*h,f=l*c-u*a,m=h*a-o*c,_=e*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(r*h-u*i)*S,t[2]=(l*i-r*o)*S,t[3]=f*S,t[4]=(u*e-r*c)*S,t[5]=(r*a-l*e)*S,t[6]=m*S,t[7]=(i*c-h*e)*S,t[8]=(o*e-i*a)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,o,l){let c=Math.cos(a),h=Math.sin(a);return this.set(i*c,i*h,-i*(c*o+h*l)+o+t,-r*h,r*c,-r*(-h*o+c*l)+l+e,0,0,1),this}scale(t,e){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(t,e)),this}rotate(t){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bc.prototype.isMatrix3=!0;var Xt=bc,hl=new Xt,ch=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let s={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===he&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?sr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ir]:{primaries:t,whitePoint:i,transfer:sr,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:he,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}var ae=Kf();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zi,Ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zi===void 0&&(Zi=rr("canvas")),Zi.width=t.width,Zi.height=t.height;let r=Zi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Zn(a[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zn(e[i]/255)*255):e[i]=Zn(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(ul(r[o].image)):a.push(ul(r[o]))}else a=ul(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Qf=0,fl=new B,Xe=class s extends Pn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ln,r=ln,a=De,o=vi,l=hn,c=Ze,h=s.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Vi(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hi:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hi:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=rc;Xe.DEFAULT_ANISOTROPY=1;var Tc=class Tc{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a,c=t.elements,h=c[0],u=c[4],d=c[8],f=c[1],m=c[5],_=c[9],S=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+g)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(h+1)/2,y=(m+1)/2,w=(p+1)/2,T=(u+f)/4,L=(d+S)/4,x=(_+g)/4;return C>y&&C>w?C<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(C),r=T/i,a=L/i):y>w?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=T/r,a=x/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=L/a,r=x/a),this.set(i,r,a,e),this}let A=Math.sqrt((g-_)*(g-_)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-S)/A,this.z=(f-u)/A,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tc.prototype.isVector4=!0;var ye=Tc,Fa=class extends Pn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},a=new Xe(r),o=i.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Fa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ar=class extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ro=class ro{constructor(t,e,i,r,a,o,l,c,h,u,d,f,m,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,o,l,c,h,u,d,f,m,_,S,g)}set(t,e,i,r,a,o,l,c,h,u,d,f,m,_,S,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=l,p[13]=c,p[2]=h,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=_,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),a=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,a=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=o*u,m=o*d,_=l*u,S=l*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=m+_*h,e[5]=f-S*h,e[9]=-l*c,e[2]=S-f*h,e[6]=_+m*h,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,m=c*d,_=h*u,S=h*d;e[0]=f+S*l,e[4]=_*l-m,e[8]=o*h,e[1]=o*d,e[5]=o*u,e[9]=-l,e[2]=m*l-_,e[6]=S+f*l,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,m=c*d,_=h*u,S=h*d;e[0]=f-S*l,e[4]=-o*d,e[8]=_+m*l,e[1]=m+_*l,e[5]=o*u,e[9]=S-f*l,e[2]=-o*h,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,m=o*d,_=l*u,S=l*d;e[0]=c*u,e[4]=_*h-m,e[8]=f*h+S,e[1]=c*d,e[5]=S*h+f,e[9]=m*h-_,e[2]=-h,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*h,_=l*c,S=l*h;e[0]=c*u,e[4]=S-f*d,e[8]=_*d+m,e[1]=d,e[5]=o*u,e[9]=-l*u,e[2]=-h*u,e[6]=m*d+_,e[10]=f-S*d}else if(t.order==="XZY"){let f=o*c,m=o*h,_=l*c,S=l*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=f*d+S,e[5]=o*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=l*u,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,i){let r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),si.crossVectors(i,je),si.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),si.crossVectors(i,je)),si.normalize(),ia.crossVectors(je,si),r[0]=si.x,r[4]=ia.x,r[8]=je.x,r[1]=si.y,r[5]=ia.y,r[9]=je.y,r[2]=si.z,r[6]=ia.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,o=i[0],l=i[4],c=i[8],h=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],S=i[6],g=i[10],p=i[14],A=i[3],C=i[7],y=i[11],w=i[15],T=r[0],L=r[4],x=r[8],E=r[12],F=r[1],H=r[5],k=r[9],K=r[13],V=r[2],$=r[6],ot=r[10],j=r[14],J=r[3],st=r[7],at=r[11],ut=r[15];return a[0]=o*T+l*F+c*V+h*J,a[4]=o*L+l*H+c*$+h*st,a[8]=o*x+l*k+c*ot+h*at,a[12]=o*E+l*K+c*j+h*ut,a[1]=u*T+d*F+f*V+m*J,a[5]=u*L+d*H+f*$+m*st,a[9]=u*x+d*k+f*ot+m*at,a[13]=u*E+d*K+f*j+m*ut,a[2]=_*T+S*F+g*V+p*J,a[6]=_*L+S*H+g*$+p*st,a[10]=_*x+S*k+g*ot+p*at,a[14]=_*E+S*K+g*j+p*ut,a[3]=A*T+C*F+y*V+w*J,a[7]=A*L+C*H+y*$+w*st,a[11]=A*x+C*k+y*ot+w*at,a[15]=A*E+C*K+y*j+w*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],o=t[1],l=t[5],c=t[9],h=t[13],u=t[2],d=t[6],f=t[10],m=t[14],_=t[3],S=t[7],g=t[11],p=t[15],A=c*m-h*f,C=l*m-h*d,y=l*f-c*d,w=o*m-h*u,T=o*f-c*u,L=o*d-l*u;return e*(S*A-g*C+p*y)-i*(_*A-g*w+p*T)+r*(_*C-S*w+p*L)-a*(_*y-S*T+g*L)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10];return e*(o*u-l*h)-i*(a*u-l*c)+r*(a*h-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=t[9],f=t[10],m=t[11],_=t[12],S=t[13],g=t[14],p=t[15],A=e*l-i*o,C=e*c-r*o,y=e*h-a*o,w=i*c-r*l,T=i*h-a*l,L=r*h-a*c,x=u*S-d*_,E=u*g-f*_,F=u*p-m*_,H=d*g-f*S,k=d*p-m*S,K=f*p-m*g,V=A*K-C*k+y*H+w*F-T*E+L*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/V;return t[0]=(l*K-c*k+h*H)*$,t[1]=(r*k-i*K-a*H)*$,t[2]=(S*L-g*T+p*w)*$,t[3]=(f*T-d*L-m*w)*$,t[4]=(c*F-o*K-h*E)*$,t[5]=(e*K-r*F+a*E)*$,t[6]=(g*y-_*L-p*C)*$,t[7]=(u*L-f*y+m*C)*$,t[8]=(o*k-l*F+h*x)*$,t[9]=(i*F-e*k-a*x)*$,t[10]=(_*T-S*y+p*A)*$,t[11]=(d*y-u*T-m*A)*$,t[12]=(l*E-o*H-c*x)*$,t[13]=(e*H-i*E+r*x)*$,t[14]=(S*C-_*w-g*A)*$,t[15]=(u*w-d*C+f*A)*$,this}scale(t){let e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),a=1-i,o=t.x,l=t.y,c=t.z,h=a*o,u=a*l;return this.set(h*o+i,h*l-r*c,h*c+r*l,0,h*l+r*c,u*l+i,u*c-r*o,0,h*c-r*l,u*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,o){return this.set(1,i,a,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,a=e._x,o=e._y,l=e._z,c=e._w,h=a+a,u=o+o,d=l+l,f=a*h,m=a*u,_=a*d,S=o*u,g=o*d,p=l*d,A=c*h,C=c*u,y=c*d,w=i.x,T=i.y,L=i.z;return r[0]=(1-(S+p))*w,r[1]=(m+y)*w,r[2]=(_-C)*w,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+p))*T,r[6]=(g+A)*T,r[7]=0,r[8]=(_+C)*L,r[9]=(g-A)*L,r[10]=(1-(f+S))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let o=Ji.set(r[0],r[1],r[2]).length(),l=Ji.set(r[4],r[5],r[6]).length(),c=Ji.set(r[8],r[9],r[10]).length();a<0&&(o=-o),mn.copy(this);let h=1/o,u=1/l,d=1/c;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,r,a,o,l=yn,c=!1){let h=this.elements,u=2*a/(e-t),d=2*a/(i-r),f=(e+t)/(e-t),m=(i+r)/(i-r),_,S;if(c)_=a/(o-a),S=o*a/(o-a);else if(l===yn)_=-(o+a)/(o-a),S=-2*o*a/(o-a);else if(l===fs)_=-o/(o-a),S=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=d,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,a,o,l=yn,c=!1){let h=this.elements,u=2/(e-t),d=2/(i-r),f=-(e+t)/(e-t),m=-(i+r)/(i-r),_,S;if(c)_=1/(o-a),S=o/(o-a);else if(l===yn)_=-2/(o-a),S=-(o+a)/(o-a);else if(l===fs)_=-1/(o-a),S=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=d,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=_,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ro.prototype.isMatrix4=!0;var fe=ro,Ji=new B,mn=new fe,td=new B(0,0,0),ed=new B(1,1,1),si=new B,ia=new B,je=new B,uh=new fe,fh=new Ln,Nn=class s{constructor(t=0,e=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nd=0,dh=new B,$i=new Ln,Gn=new fe,sa=new B,Xs=new B,id=new B,sd=new Ln,ph=new B(1,0,0),mh=new B(0,1,0),gh=new B(0,0,1),_h={type:"added"},rd={type:"removed"},Ki={type:"childadded",child:null},dl={type:"childremoved",child:null},Ne=class s extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new Nn,i=new Ln,r=new B(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Xt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sa.copy(t):sa.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Xs,sa,this.up):Gn.lookAt(sa,Xs,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Gn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*r,a[13]+=i-a[1]*e-a[5]*i-a[9]*r,a[14]+=r-a[2]*e-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new B(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,o=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,i),p=this._getHandJoint(h,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;h.inputState.pinching&&f>m+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ra={h:0,s:0,l:0};function pl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ae.workingColorSpace){if(t=pc(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=pl(o,a,t+1/3),this.g=pl(o,a,t),this.b=pl(o,a,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=Ee){function i(a){a!==void 0&&parseFloat(a)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=Tu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ae.workingToColorSpace(Be.copy(this),t),Math.round(ne(Be.r*255,0,255))*65536+Math.round(ne(Be.g*255,0,255))*256+Math.round(ne(Be.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Be.copy(this),e);let i=Be.r,r=Be.g,a=Be.b,o=Math.max(i,r,a),l=Math.min(i,r,a),c,h,u=(l+o)/2;if(l===o)c=0,h=0;else{let d=o-l;switch(h=u<=.5?d/(o+l):d/(2-o-l),o){case i:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-i)/d+2;break;case a:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ee){ae.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,r=Be.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(ra);let i=Qs(ri.h,ra.h,e),r=Qs(ri.s,ra.s,e),a=Qs(ri.l,ra.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Yt;Yt.NAMES=Tu;var Jn=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new B,Hn=new B,ml=new B,Wn=new B,ji=new B,Qi=new B,xh=new B,gl=new B,_l=new B,xl=new B,yl=new ye,vl=new ye,Ml=new ye,ci=class s{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gn.subVectors(t,e),r.cross(gn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){gn.subVectors(r,e),Hn.subVectors(i,e),ml.subVectors(t,e);let o=gn.dot(gn),l=gn.dot(Hn),c=gn.dot(ml),h=Hn.dot(Hn),u=Hn.dot(ml),d=o*h-l*l;if(d===0)return a.set(0,0,0),null;let f=1/d,m=(h*c-l*u)*f,_=(o*u-l*c)*f;return a.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,i,r,a,o,l,c){return this.getBarycoord(t,e,i,r,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(l,Wn.z),c)}static getInterpolatedAttribute(t,e,i,r,a,o){return yl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(yl,a.x),o.addScaledVector(vl,a.y),o.addScaledVector(Ml,a.z),o}static isFrontFacing(t,e,i,r){return gn.subVectors(i,e),Hn.subVectors(t,e),gn.cross(Hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return s.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,a=this.c,o,l;ji.subVectors(r,i),Qi.subVectors(a,i),gl.subVectors(t,i);let c=ji.dot(gl),h=Qi.dot(gl);if(c<=0&&h<=0)return e.copy(i);_l.subVectors(t,r);let u=ji.dot(_l),d=Qi.dot(_l);if(u>=0&&d<=u)return e.copy(r);let f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ji,o);xl.subVectors(t,a);let m=ji.dot(xl),_=Qi.dot(xl);if(_>=0&&m<=_)return e.copy(a);let S=m*h-c*_;if(S<=0&&h>=0&&_<=0)return l=h/(h-_),e.copy(i).addScaledVector(Qi,l);let g=u*_-m*d;if(g<=0&&d-u>=0&&m-_>=0)return xh.subVectors(a,r),l=(d-u)/(d-u+(m-_)),e.copy(r).addScaledVector(xh,l);let p=1/(g+S+f);return o=S*p,l=f*p,e.copy(i).addScaledVector(ji,o).addScaledVector(Qi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ze=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(a,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}let r=t.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),oa.subVectors(this.max,qs),ts.subVectors(t.a,qs),es.subVectors(t.b,qs),ns.subVectors(t.c,qs),ai.subVectors(es,ts),oi.subVectors(ns,es),wi.subVectors(ts,ns);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!Sl(e,ts,es,ns,oa)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,ts,es,ns,oa))?!1:(la.crossVectors(ai,oi),e=[la.x,la.y,la.z],Sl(e,ts,es,ns,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new B,new B,new B,new B,new B,new B,new B,new B],_n=new B,aa=new ze,ts=new B,es=new B,ns=new B,ai=new B,oi=new B,wi=new B,qs=new B,oa=new B,la=new B,Ai=new B;function Sl(s,t,e,i,r){for(let a=0,o=s.length-3;a<=o;a+=3){Ai.fromArray(s,a);let l=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),c=t.dot(Ai),h=e.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}var we=new B,ca=new pt,od=0,We=class extends Pn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yu,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ls(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),a=Ge(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}},ld=new ze,Ys=new B,bl=new B,ui=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ld.setFromPoints(t).getCenter(i);let r=0;for(let a=0,o=t.length;a<o;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(bl)),this.expandByPoint(Ys.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cd=0,on=new fe,Tl=new Ne,is=new B,Qe=new ze,Zs=new ze,Pe=new B,ve=class s extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nf(t)?lr:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Xt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let a=e[i];Qe.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){let l=e[a];Zs.setFromBufferAttribute(l),this.morphTargetsRelative?(Pe.addVectors(Qe.min,Zs.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,Zs.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(Zs.min),Qe.expandByPoint(Zs.max))}Qe.getCenter(i);let r=0;for(let a=0,o=t.count;a<o;a++)Pe.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let a=0,o=e.length;a<o;a++){let l=e[a],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)Pe.fromBufferAttribute(l,h),c&&(is.fromBufferAttribute(t,h),Pe.add(is)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,a=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new We(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new B,c[x]=new B;let h=new B,u=new B,d=new B,f=new pt,m=new pt,_=new pt,S=new B,g=new B;function p(x,E,F){h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,F),f.fromBufferAttribute(a,x),m.fromBufferAttribute(a,E),_.fromBufferAttribute(a,F),u.sub(h),d.sub(h),m.sub(f),_.sub(f);let H=1/(m.x*_.y-_.x*m.y);isFinite(H)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(H),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(H),l[x].add(S),l[E].add(S),l[F].add(S),c[x].add(g),c[E].add(g),c[F].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let x=0,E=A.length;x<E;++x){let F=A[x],H=F.start,k=F.count;for(let K=H,V=H+k;K<V;K+=3)p(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let C=new B,y=new B,w=new B,T=new B;function L(x){w.fromBufferAttribute(r,x),T.copy(w);let E=l[x];C.copy(E),C.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(T,E);let H=y.dot(c[x])<0?-1:1;o.setXYZW(x,C.x,C.y,C.z,H)}for(let x=0,E=A.length;x<E;++x){let F=A[x],H=F.start,k=F.count;for(let K=H,V=H+k;K<V;K+=3)L(t.getX(K+0)),L(t.getX(K+1)),L(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B,d=new B;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),S=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,S),o.fromBufferAttribute(e,g),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,g),l.add(u),c.add(u),h.add(u),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(l,c){let h=l.array,u=l.itemSize,d=l.normalized,f=new h.constructor(c.length*u),m=0,_=0;for(let S=0,g=c.length;S<g;S++){l.isInterleavedBufferAttribute?m=c[S]*l.data.stride+l.offset:m=c[S]*u;for(let p=0;p<u;p++)f[_++]=h[m++]}return new We(f,u,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,r=this.attributes;for(let l in r){let c=r[l],h=t(c,i);e.setAttribute(l,h)}let a=this.morphAttributes;for(let l in a){let c=[],h=a[l];for(let u=0,d=h.length;u<d;u++){let f=h[u],m=t(f,i);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let h=o[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let r={},a=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){let m=h[d];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let h in r){let u=r[h];this.setAttribute(h,u.clone(e))}let a=t.morphAttributes;for(let h in a){let u=[],d=a[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wl=new B,hd=new B,ud=new Xt,xn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=wl.subVectors(i,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(wl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ud.getNormalMatrix(t),r=this.coplanarPoint(wl).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fd=0,Dn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Es,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=jl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}if(e){let a=r(t.textures),o=r(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qn=new B,Al=new B,ha=new B,ua=new B,cr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Al.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Al);let a=t.distanceTo(e)*.5,o=-this.direction.dot(ha),l=ua.dot(this.direction),c=-ua.dot(ha),h=ua.lengthSq(),u=Math.abs(1-o*o),d,f,m,_;if(u>0)if(d=o*c-l,f=o*l-c,_=a*u,d>=0)if(f>=-_)if(f<=_){let S=1/u;d*=S,f*=S,m=d*(d+o*f+2*l)+f*(o*d+f+2*c)+h}else f=a,d=Math.max(0,-(o*f+l)),m=-d*d+f*(f+2*c)+h;else f=-a,d=Math.max(0,-(o*f+l)),m=-d*d+f*(f+2*c)+h;else f<=-_?(d=Math.max(0,-(-o*a+l)),f=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+h):f<=_?(d=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+h):(d=Math.max(0,-(o*a+l)),f=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+h);else f=o>0?-a:a,d=Math.max(0,-(o*f+l)),m=-d*d+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Al).addScaledVector(ha,f),m}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let i=qn.dot(this.direction),r=qn.dot(qn)-i*i,a=t.radius*t.radius;if(r>a)return null;let o=Math.sqrt(a-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,o,l,c,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,r=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,r=(t.min.x-f.x)*h),u>=0?(a=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(l=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(l=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,r,a){let o=this.origin,l=this.direction,c=l.x,h=l.y,u=l.z,d=t.x-o.x,f=t.y-o.y,m=t.z-o.z,_=e.x-o.x,S=e.y-o.y,g=e.z-o.z,p=i.x-o.x,A=i.y-o.y,C=i.z-o.z,y=Math.abs(c),w=Math.abs(h),T=Math.abs(u),L,x,E,F,H,k,K,V,$,ot,j,J;if(y>=w&&y>=T?(E=c,k=d,$=_,J=p,c>=0?(L=h,x=u,F=f,H=m,K=S,V=g,ot=A,j=C):(L=u,x=h,F=m,H=f,K=g,V=S,ot=C,j=A)):w>=T?(E=h,k=f,$=S,J=A,h>=0?(L=u,x=c,F=m,H=d,K=g,V=_,ot=C,j=p):(L=c,x=u,F=d,H=m,K=_,V=g,ot=p,j=C)):(E=u,k=m,$=g,J=C,u>=0?(L=c,x=h,F=d,H=f,K=_,V=S,ot=p,j=A):(L=h,x=c,F=f,H=d,K=S,V=_,ot=A,j=p)),E===0)return null;let st=L/E,at=x/E,ut=1/E,Dt=F-st*k,It=H-at*k,Kt=K-st*$,$t=V-at*$,Qt=ot-st*J,O=j-at*J,D=Qt*$t-O*Kt,N=Dt*O-It*Qt,P=Kt*It-$t*Dt;if(r){if(D<0||N<0||P<0)return null}else if((D<0||N<0||P<0)&&(D>0||N>0||P>0))return null;let z=D+N+P;if(z===0)return null;let it=ut*(D*k+N*$+P*J);return(z>0?it<0:it>0)?null:this.at(it/z,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yh=new fe,Ei=new cr,fa=new ui,vh=new B,da=new B,pa=new B,ma=new B,El=new B,ga=new B,Mh=new B,_a=new B,ge=class extends Ne{constructor(t=new ve,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){let l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let l=this.morphTargetInfluences;if(a&&l){ga.set(0,0,0);for(let c=0,h=a.length;c<h;c++){let u=l[c],d=a[c];u!==0&&(El.fromBufferAttribute(d,t),o?ga.addScaledVector(El,u):ga.addScaledVector(El.sub(e),u))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(a),Ei.copy(t.ray).recast(t.near),!(fa.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(fa,vh)===null||Ei.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(yh.copy(a).invert(),Ei.copy(t.ray).applyMatrix4(yh),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let r,a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,h=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){let g=f[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),C=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=A,w=C;y<w;y+=3){let T=l.getX(y),L=l.getX(y+1),x=l.getX(y+2);r=xa(this,p,t,i,h,u,d,T,L,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=_,p=S;g<p;g+=3){let A=l.getX(g),C=l.getX(g+1),y=l.getX(g+2);r=xa(this,o,t,i,h,u,d,A,C,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){let g=f[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),C=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=A,w=C;y<w;y+=3){let T=y,L=y+1,x=y+2;r=xa(this,p,t,i,h,u,d,T,L,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let g=_,p=S;g<p;g+=3){let A=g,C=g+1,y=g+2;r=xa(this,o,t,i,h,u,d,A,C,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function dd(s,t,e,i,r,a,o,l){let c;if(t.side===Ue?c=i.intersectTriangle(o,a,r,!0,l):c=i.intersectTriangle(r,a,o,t.side===xi,l),c===null)return null;_a.copy(l),_a.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(_a);return h<e.near||h>e.far?null:{distance:h,point:_a.clone(),object:s}}function xa(s,t,e,i,r,a,o,l,c,h){s.getVertexPosition(l,da),s.getVertexPosition(c,pa),s.getVertexPosition(h,ma);let u=dd(s,t,e,i,da,pa,ma,Mh);if(u){let d=new B;ci.getBarycoord(Mh,da,pa,ma,d),r&&(u.uv=ci.getInterpolatedAttribute(r,l,c,h,d,new pt)),a&&(u.uv1=ci.getInterpolatedAttribute(a,l,c,h,d,new pt)),o&&(u.normal=ci.getInterpolatedAttribute(o,l,c,h,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:c,c:h,normal:new B,materialIndex:0};ci.getNormal(da,pa,ma,f.normal),u.face=f,u.barycoord=d}return u}var hr=class extends Xe{constructor(t=null,e=1,i=1,r,a,o,l,c,h=Le,u=Le,d,f){super(null,o,l,c,h,u,r,a,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class extends We{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new fe,Sh=new fe,ya=[],bh=new ze,pd=new fe,Js=new ge,$s=new ui,ur=class extends ge{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,pd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),bh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),$s.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,o=t*a+1;for(let l=0;l<i.length;l++)i[l]=r[o+l]}raycast(t,e){let i=this.matrixWorld,r=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,ss),Sh.multiplyMatrices(i,ss),Js.matrixWorld=Sh,Js.raycast(t,ya);for(let o=0,l=ya.length;o<l;o++){let c=ya[o];c.instanceId=a,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(r*this.count),r,this.count,po,cn));let a=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let l=this.geometry.morphTargetsRelative?1:1-o,c=r*t;return a[c]=l,a.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new ui,md=new pt(.5,.5),va=new B,ys=class{constructor(t=new xn,e=new xn,i=new xn,r=new xn,a=new xn,o=new xn){this.planes=[t,e,i,r,a,o]}set(t,e,i,r,a,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){let r=this.planes,a=t.elements,o=a[0],l=a[1],c=a[2],h=a[3],u=a[4],d=a[5],f=a[6],m=a[7],_=a[8],S=a[9],g=a[10],p=a[11],A=a[12],C=a[13],y=a[14],w=a[15];if(r[0].setComponents(h-o,m-u,p-_,w-A).normalize(),r[1].setComponents(h+o,m+u,p+_,w+A).normalize(),r[2].setComponents(h+l,m+d,p+S,w+C).normalize(),r[3].setComponents(h-l,m-d,p-S,w-C).normalize(),i)r[4].setComponents(c,f,g,y).normalize(),r[5].setComponents(h-c,m-f,p-g,w-y).normalize();else if(r[4].setComponents(h-c,m-f,p-g,w-y).normalize(),e===yn)r[5].setComponents(h+c,m+f,p+g,w+y).normalize();else if(e===fs)r[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=md.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(va.x=r.normal.x>0?t.max.x:t.min.x,va.y=r.normal.y>0?t.max.y:t.min.y,va.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fr=class extends Xe{constructor(t=[],e=yi,i,r,a,o,l,c,h,u){super(t,e,i,r,a,o,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ii=class extends Xe{constructor(t,e,i,r,a,o,l,c,h){super(t,e,i,r,a,o,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Xe{constructor(t,e,i=Sn,r,a,o,l=Le,c=Le,h,u=In,d=1){if(u!==In&&u!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,r,a,o,l,c,u,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ba=class extends di{constructor(t,e=Sn,i=yi,r,a,o=Le,l=Le,c,h=In){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,r,a,o,l,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},dr=class extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Un=class s extends ve{constructor(t=1,e=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};let l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);let c=[],h=[],u=[],d=[],f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,a,0),_("z","y","x",1,-1,i,e,-t,o,a,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,a,4),_("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function _(S,g,p,A,C,y,w,T,L,x,E){let F=y/L,H=w/x,k=y/2,K=w/2,V=T/2,$=L+1,ot=x+1,j=0,J=0,st=new B;for(let at=0;at<ot;at++){let ut=at*H-K;for(let Dt=0;Dt<$;Dt++){let It=Dt*F-k;st[S]=It*A,st[g]=ut*C,st[p]=V,h.push(st.x,st.y,st.z),st[S]=0,st[g]=0,st[p]=T>0?1:-1,u.push(st.x,st.y,st.z),d.push(Dt/L),d.push(1-at/x),j+=1}}for(let at=0;at<x;at++)for(let ut=0;ut<L;ut++){let Dt=f+ut+$*at,It=f+ut+$*(at+1),Kt=f+(ut+1)+$*(at+1),$t=f+(ut+1)+$*at;c.push(Dt,It,$t),c.push(It,Kt,$t),J+=6}l.addGroup(m,J,E),m+=J,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var za=class s extends ve{constructor(t=1,e=1,i=1,r=32,a=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:c};let h=this;r=Math.floor(r),a=Math.floor(a);let u=[],d=[],f=[],m=[],_=0,S=[],g=i/2,p=0;A(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function A(){let y=new B,w=new B,T=0,L=(e-t)/i;for(let x=0;x<=a;x++){let E=[],F=x/a,H=F*(e-t)+t;for(let k=0;k<=r;k++){let K=k/r,V=K*c+l,$=Math.sin(V),ot=Math.cos(V);w.x=H*$,w.y=-F*i+g,w.z=H*ot,d.push(w.x,w.y,w.z),y.set($,L,ot).normalize(),f.push(y.x,y.y,y.z),m.push(K,1-F),E.push(_++)}S.push(E)}for(let x=0;x<r;x++)for(let E=0;E<a;E++){let F=S[E][x],H=S[E+1][x],k=S[E+1][x+1],K=S[E][x+1];(t>0||E!==0)&&(u.push(F,H,K),T+=3),(e>0||E!==a-1)&&(u.push(H,k,K),T+=3)}h.addGroup(p,T,0),p+=T}function C(y){let w=_,T=new pt,L=new B,x=0,E=y===!0?t:e,F=y===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,g*F,0),f.push(0,F,0),m.push(.5,.5),_++;let H=_;for(let k=0;k<=r;k++){let V=k/r*c+l,$=Math.cos(V),ot=Math.sin(V);L.x=E*ot,L.y=g*F,L.z=E*$,d.push(L.x,L.y,L.z),f.push(0,F,0),T.x=$*.5+.5,T.y=ot*.5*F+.5,m.push(T.x,T.y),_++}for(let k=0;k<r;k++){let K=w+k,V=H+k;y===!0?u.push(V,V+1,K):u.push(V+1,V,K),x+=3}h.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class s extends za{constructor(t=1,e=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(0,t,e,i,r,a,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),a+=i.distanceTo(r),e.push(a),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,a=i.length,o;e?o=e:o=t*i[a-1];let l=0,c=a-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=i[r]-o,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(a-1);let u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(a-1)}getTangent(t,e){let r=t-1e-4,a=t+1e-4;r<0&&(r=0),a>1&&(a=1);let o=this.getPoint(r),l=this.getPoint(a),c=e||(o.isVector2?new pt:new B);return c.copy(l).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new B,r=[],a=[],o=[],l=new B,c=new fe;for(let m=0;m<=t;m++){let _=m/t;r[m]=this.getTangentAt(_,new B)}a[0]=new B,o[0]=new B;let h=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=h&&(h=u,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),f<=h&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],l),o[0].crossVectors(r[0],a[0]);for(let m=1;m<=t;m++){if(a[m]=a[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(r[m-1],r[m]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(ne(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(c.makeRotationAxis(l,_))}o[m].crossVectors(r[m],a[m])}if(e===!0){let m=Math.acos(ne(a[0].dot(a[t]),-1,1));m/=t,r[0].dot(l.crossVectors(a[0],a[t]))>0&&(m=-m);for(let _=1;_<=t;_++)a[_].applyMatrix4(c.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],a[_])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ms=class extends tn{constructor(t=0,e=0,i=1,r=1,a=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new pt){let i=e,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);let l=this.aStartAngle+t*a,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=h-this.aY;c=f*u-m*d+this.aX,h=f*d+m*u+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends Ms{constructor(t,e,i,r,a,o){super(t,e,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let s=0,t=0,e=0,i=0;function r(a,o,l,c){s=a,t=l,e=-3*a+3*o-2*l-c,i=2*a-2*o+l+c}return{initCatmullRom:function(a,o,l,c,h){r(o,l,h*(l-a),h*(c-o))},initNonuniformCatmullRom:function(a,o,l,c,h,u,d){let f=(o-a)/h-(l-a)/(h+u)+(l-o)/u,m=(l-o)/u-(c-o)/(u+d)+(c-l)/d;f*=u,m*=u,r(o,l,f,m)},calc:function(a){let o=a*a,l=o*a;return s+t*a+e*o+i*l}}}var Th=new B,wh=new B,Cl=new gc,Rl=new gc,Il=new gc,$n=class extends tn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new B){let i=e,r=this.points,a=r.length,o=(a-(this.closed?0:1))*t,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:c===0&&l===a-1&&(l=a-2,c=1);let h,u;this.closed||l>0?h=r[(l-1)%a]:(wh.subVectors(r[0],r[1]).add(r[0]),h=wh);let d=r[l%a],f=r[(l+1)%a];if(this.closed||l+2<a?u=r[(l+2)%a]:(Th.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Th),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(h.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(u),m);S<1e-4&&(S=1),_<1e-4&&(_=S),g<1e-4&&(g=S),Cl.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,_,S,g),Rl.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,_,S,g),Il.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,_,S,g)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),Rl.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),Il.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return i.set(Cl.calc(c),Rl.calc(c),Il.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new B().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(s,t,e,i,r){let a=(i-t)*.5,o=(r-e)*.5,l=s*s,c=s*l;return(2*e-2*i+a+o)*c+(-3*e+3*i-2*a-o)*l+a*s+e}function gd(s,t){let e=1-s;return e*e*t}function _d(s,t){return 2*(1-s)*s*t}function xd(s,t){return s*s*t}function tr(s,t,e,i){return gd(s,t)+_d(s,e)+xd(s,i)}function yd(s,t){let e=1-s;return e*e*e*t}function vd(s,t){let e=1-s;return 3*e*e*s*t}function Md(s,t){return 3*(1-s)*s*s*t}function Sd(s,t){return s*s*s*t}function er(s,t,e,i,r){return yd(s,t)+vd(s,e)+Md(s,i)+Sd(s,r)}var pr=class extends tn{constructor(t=new pt,e=new pt,i=new pt,r=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new pt){let i=e,r=this.v0,a=this.v1,o=this.v2,l=this.v3;return i.set(er(t,r.x,a.x,o.x,l.x),er(t,r.y,a.y,o.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends tn{constructor(t=new B,e=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new B){let i=e,r=this.v0,a=this.v1,o=this.v2,l=this.v3;return i.set(er(t,r.x,a.x,o.x,l.x),er(t,r.y,a.y,o.y,l.y),er(t,r.z,a.z,o.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends tn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends tn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends tn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,r=this.v0,a=this.v1,o=this.v2;return i.set(tr(t,r.x,a.x,o.x),tr(t,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends tn{constructor(t=new B,e=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new B){let i=e,r=this.v0,a=this.v1,o=this.v2;return i.set(tr(t,r.x,a.x,o.x),tr(t,r.y,a.y,o.y),tr(t,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,r=this.points,a=(r.length-1)*t,o=Math.floor(a),l=a-o,c=r[o===0?o:o-1],h=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Ah(l,c.x,h.x,u.x,d.x),Ah(l,c.y,h.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new pt().fromArray(r))}return this}},Ha=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:$n,CubicBezierCurve:pr,CubicBezierCurve3:Va,EllipseCurve:Ms,LineCurve:mr,LineCurve3:Ga,QuadraticBezierCurve:gr,QuadraticBezierCurve3:_r,SplineCurve:xr}),Wa=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let o=r[a]-i,l=this.curves[a],c=l.getLength(),h=c===0?0:1-o/c;return l.getPointAt(h,e)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,a=this.curves;r<a.length;r++){let o=a[r],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(l);for(let h=0;h<c.length;h++){let u=c[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Ha[r.type]().fromJSON(r))}return this}},Fn=class extends Wa{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new mr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let a=new gr(this.currentPoint.clone(),new pt(t,e),new pt(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,a,o){let l=new pr(this.currentPoint.clone(),new pt(t,e),new pt(i,r),new pt(a,o));return this.curves.push(l),this.currentPoint.set(a,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new xr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,i,r,a,o),this}absarc(t,e,i,r,a,o){return this.absellipse(t,e,i,i,r,a,o),this}ellipse(t,e,i,r,a,o,l,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,r,a,o,l,c),this}absellipse(t,e,i,r,a,o,l,c){let h=new Ms(t,e,i,r,a,o,l,c);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},On=class extends Fn{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new Fn().fromJSON(r))}return this}};function bd(s,t,e=2){let i=t&&t.length,r=i?t[0]*e:s.length,a=wu(s,0,r,e,!0),o=[];if(!a||a.next===a.prev)return o;let l,c,h;if(i&&(a=Cd(s,t,a,e)),s.length>80*e){l=s[0],c=s[1];let u=l,d=c;for(let f=e;f<r;f+=e){let m=s[f],_=s[f+1];m<l&&(l=m),_<c&&(c=_),m>u&&(u=m),_>d&&(d=_)}h=Math.max(u-l,d-c),h=h!==0?32767/h:0}return yr(a,o,e,l,c,h,0),o}function wu(s,t,e,i,r){let a;if(r===zd(s,t,e,i)>0)for(let o=t;o<e;o+=i)a=Eh(o/i|0,s[o],s[o+1],a);else for(let o=e-i;o>=t;o-=i)a=Eh(o/i|0,s[o],s[o+1],a);return a&&Ss(a,a.next)&&(Mr(a),a=a.next),a}function Pi(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ss(e,e.next)||Me(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yr(s,t,e,i,r,a,o){if(!s)return;!o&&a&&Nd(s,i,r,a);let l=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(a?wd(s,i,r,a):Td(s)){t.push(c.i,s.i,h.i),Mr(s),s=h.next,l=h.next;continue}if(s=h,s===l){o?o===1?(s=Ad(Pi(s),t),yr(s,t,e,i,r,a,2)):o===2&&Ed(s,t,e,i,r,a):yr(Pi(s),t,e,i,r,a,1);break}}}function Td(s){let t=s.prev,e=s,i=s.next;if(Me(t,e,i)>=0)return!1;let r=t.x,a=e.x,o=i.x,l=t.y,c=e.y,h=i.y,u=Math.min(r,a,o),d=Math.min(l,c,h),f=Math.max(r,a,o),m=Math.max(l,c,h),_=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=m&&Ks(r,l,a,c,o,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function wd(s,t,e,i){let r=s.prev,a=s,o=s.next;if(Me(r,a,o)>=0)return!1;let l=r.x,c=a.x,h=o.x,u=r.y,d=a.y,f=o.y,m=Math.min(l,c,h),_=Math.min(u,d,f),S=Math.max(l,c,h),g=Math.max(u,d,f),p=Ol(m,_,t,e,i),A=Ol(S,g,t,e,i),C=s.prevZ,y=s.nextZ;for(;C&&C.z>=p&&y&&y.z<=A;){if(C.x>=m&&C.x<=S&&C.y>=_&&C.y<=g&&C!==r&&C!==o&&Ks(l,u,c,d,h,f,C.x,C.y)&&Me(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=m&&y.x<=S&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&Ks(l,u,c,d,h,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=p;){if(C.x>=m&&C.x<=S&&C.y>=_&&C.y<=g&&C!==r&&C!==o&&Ks(l,u,c,d,h,f,C.x,C.y)&&Me(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=A;){if(y.x>=m&&y.x<=S&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&Ks(l,u,c,d,h,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ad(s,t){let e=s;do{let i=e.prev,r=e.next.next;!Ss(i,r)&&Eu(i,e,e.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i,e.i,r.i),Mr(e),Mr(e.next),e=s=r),e=e.next}while(e!==s);return Pi(e)}function Ed(s,t,e,i,r,a){let o=s;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Fd(o,l)){let c=Cu(o,l);o=Pi(o,o.next),c=Pi(c,c.next),yr(o,t,e,i,r,a,0),yr(c,t,e,i,r,a,0);return}l=l.next}o=o.next}while(o!==s)}function Cd(s,t,e,i){let r=[];for(let a=0,o=t.length;a<o;a++){let l=t[a]*i,c=a<o-1?t[a+1]*i:s.length,h=wu(s,l,c,i,!1);h===h.next&&(h.steiner=!0),r.push(Ud(h))}r.sort(Rd);for(let a=0;a<r.length;a++)e=Id(r[a],e);return e}function Rd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Id(s,t){let e=Pd(s,t);if(!e)return t;let i=Cu(e,s);return Pi(i,i.next),Pi(e,e.next)}function Pd(s,t){let e=t,i=s.x,r=s.y,a=-1/0,o;if(Ss(s,e))return e;do{if(Ss(s,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>a&&(a=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let l=o,c=o.x,h=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Au(r<h?i:a,r,c,h,r<h?a:i,r,e.x,e.y)){let d=Math.abs(r-e.y)/(i-e.x);vr(e,s)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Ld(o,e)))&&(o=e,u=d)}e=e.next}while(e!==l);return o}function Ld(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function Nd(s,t,e,i){let r=s;do r.z===0&&(r.z=Ol(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,Dd(r)}function Dd(s){let t,e=1;do{let i=s,r;s=null;let a=null;for(t=0;i;){t++;let o=i,l=0;for(let h=0;h<e&&(l++,o=o.nextZ,!!o);h++);let c=e;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,l--):(r=o,o=o.nextZ,c--),a?a.nextZ=r:s=r,r.prevZ=a,a=r;i=o}a.nextZ=null,e*=2}while(t>1);return s}function Ol(s,t,e,i,r){return s=(s-e)*r|0,t=(t-i)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ud(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Au(s,t,e,i,r,a,o,l){return(r-o)*(t-l)>=(s-o)*(a-l)&&(s-o)*(i-l)>=(e-o)*(t-l)&&(e-o)*(a-l)>=(r-o)*(i-l)}function Ks(s,t,e,i,r,a,o,l){return!(s===o&&t===l)&&Au(s,t,e,i,r,a,o,l)}function Fd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Od(s,t)&&(vr(s,t)&&vr(t,s)&&Bd(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||Ss(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ss(s,t){return s.x===t.x&&s.y===t.y}function Eu(s,t,e,i){let r=Sa(Me(s,t,e)),a=Sa(Me(s,t,i)),o=Sa(Me(e,i,s)),l=Sa(Me(e,i,t));return!!(r!==a&&o!==l||r===0&&Ma(s,e,t)||a===0&&Ma(s,i,t)||o===0&&Ma(e,s,i)||l===0&&Ma(e,t,i))}function Ma(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Sa(s){return s>0?1:s<0?-1:0}function Od(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function Bd(s,t){let e=s,i=!1,r=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&r<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Cu(s,t){let e=Bl(s.i,s.x,s.y),i=Bl(t.i,t.x,t.y),r=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=r,r.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function Eh(s,t,e,i){let r=Bl(s,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zd(s,t,e,i){let r=0;for(let a=t,o=e-i;a<e;a+=i)r+=(s[o]-s[a])*(s[a+1]+s[o+1]),o=a;return r}var zl=class{static triangulate(t,e,i=2){return bd(t,e,i)}},Rn=class s{static area(t){let e=t.length,i=0;for(let r=e-1,a=0;a<e;r=a++)i+=t[r].x*t[a].y-t[a].x*t[r].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],r=[],a=[];Ch(t),Rh(i,t);let o=t.length;e.forEach(Ch);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Rh(i,e[c]);let l=zl.triangulate(i,r);for(let c=0;c<l.length;c+=3)a.push(l.slice(c,c+3));return a}};function Ch(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Rh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Kn=class s extends ve{constructor(t=new On([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,r=[],a=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];o(h)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(a,2)),this.computeVertexNormals();function o(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:kd,C,y=!1,w,T,L,x;if(p){C=p.getSpacedPoints(u),y=!0,f=!1;let R=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,R),T=new B,L=new B,x=new B}f||(g=0,m=0,_=0,S=0);let E=l.extractPoints(h),F=E.shape,H=E.holes;if(!Rn.isClockWise(F)){F=F.reverse();for(let R=0,G=H.length;R<G;R++){let U=H[R];Rn.isClockWise(U)&&(H[R]=U.reverse())}}function K(R){let U=10000000000000001e-36,Z=R[0];for(let Q=1;Q<=R.length;Q++){let ct=Q%R.length,gt=R[ct],mt=gt.x-Z.x,Y=gt.y-Z.y,M=mt*mt+Y*Y,Et=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(Z.x),Math.abs(Z.y)),Ft=U*Et*Et;if(M<=Ft){R.splice(ct,1),Q--;continue}Z=gt}}K(F),H.forEach(K);let V=H.length,$=F;for(let R=0;R<V;R++){let G=H[R];F=F.concat(G)}function ot(R,G,U){return G||Jt("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(G,U)}let j=F.length;function J(R,G,U){let Z,Q,ct,gt=R.x-G.x,mt=R.y-G.y,Y=U.x-R.x,M=U.y-R.y,Et=gt*gt+mt*mt,Ft=gt*M-mt*Y;if(Math.abs(Ft)>Number.EPSILON){let I=Math.sqrt(Et),v=Math.sqrt(Y*Y+M*M),q=G.x-mt/I,tt=G.y+gt/I,lt=U.x-M/v,yt=U.y+Y/v,vt=((lt-q)*M-(yt-tt)*Y)/(gt*M-mt*Y);Z=q+gt*vt-R.x,Q=tt+mt*vt-R.y;let ht=Z*Z+Q*Q;if(ht<=2)return new pt(Z,Q);ct=Math.sqrt(ht/2)}else{let I=!1;gt>Number.EPSILON?Y>Number.EPSILON&&(I=!0):gt<-Number.EPSILON?Y<-Number.EPSILON&&(I=!0):Math.sign(mt)===Math.sign(M)&&(I=!0),I?(Z=-mt,Q=gt,ct=Math.sqrt(Et)):(Z=gt,Q=mt,ct=Math.sqrt(Et/2))}return new pt(Z/ct,Q/ct)}let st=[];for(let R=0,G=$.length,U=G-1,Z=R+1;R<G;R++,U++,Z++)U===G&&(U=0),Z===G&&(Z=0),st[R]=J($[R],$[U],$[Z]);let at=[],ut,Dt=st.concat();for(let R=0,G=V;R<G;R++){let U=H[R];ut=[];for(let Z=0,Q=U.length,ct=Q-1,gt=Z+1;Z<Q;Z++,ct++,gt++)ct===Q&&(ct=0),gt===Q&&(gt=0),ut[Z]=J(U[Z],U[ct],U[gt]);at.push(ut),Dt=Dt.concat(ut)}let It;if(g===0)It=Rn.triangulateShape($,H);else{let R=[],G=[];for(let U=0;U<g;U++){let Z=U/g,Q=m*Math.cos(Z*Math.PI/2),ct=_*Math.sin(Z*Math.PI/2)+S;for(let gt=0,mt=$.length;gt<mt;gt++){let Y=ot($[gt],st[gt],ct);N(Y.x,Y.y,-Q),Z===0&&R.push(Y)}for(let gt=0,mt=V;gt<mt;gt++){let Y=H[gt];ut=at[gt];let M=[];for(let Et=0,Ft=Y.length;Et<Ft;Et++){let I=ot(Y[Et],ut[Et],ct);N(I.x,I.y,-Q),Z===0&&M.push(I)}Z===0&&G.push(M)}}It=Rn.triangulateShape(R,G)}let Kt=It.length,$t=_+S;for(let R=0;R<j;R++){let G=f?ot(F[R],Dt[R],$t):F[R];y?(L.copy(w.normals[0]).multiplyScalar(G.x),T.copy(w.binormals[0]).multiplyScalar(G.y),x.copy(C[0]).add(L).add(T),N(x.x,x.y,x.z)):N(G.x,G.y,0)}for(let R=1;R<=u;R++)for(let G=0;G<j;G++){let U=f?ot(F[G],Dt[G],$t):F[G];y?(L.copy(w.normals[R]).multiplyScalar(U.x),T.copy(w.binormals[R]).multiplyScalar(U.y),x.copy(C[R]).add(L).add(T),N(x.x,x.y,x.z)):N(U.x,U.y,d/u*R)}for(let R=g-1;R>=0;R--){let G=R/g,U=m*Math.cos(G*Math.PI/2),Z=_*Math.sin(G*Math.PI/2)+S;for(let Q=0,ct=$.length;Q<ct;Q++){let gt=ot($[Q],st[Q],Z);N(gt.x,gt.y,d+U)}for(let Q=0,ct=H.length;Q<ct;Q++){let gt=H[Q];ut=at[Q];for(let mt=0,Y=gt.length;mt<Y;mt++){let M=ot(gt[mt],ut[mt],Z);y?N(M.x,M.y+C[u-1].y,C[u-1].x+U):N(M.x,M.y,d+U)}}}Qt(),O();function Qt(){let R=r.length/3;if(f){let G=0,U=j*G;for(let Z=0;Z<Kt;Z++){let Q=It[Z];P(Q[2]+U,Q[1]+U,Q[0]+U)}G=u+g*2,U=j*G;for(let Z=0;Z<Kt;Z++){let Q=It[Z];P(Q[0]+U,Q[1]+U,Q[2]+U)}}else{for(let G=0;G<Kt;G++){let U=It[G];P(U[2],U[1],U[0])}for(let G=0;G<Kt;G++){let U=It[G];P(U[0]+j*u,U[1]+j*u,U[2]+j*u)}}i.addGroup(R,r.length/3-R,0)}function O(){let R=r.length/3,G=0;D($,G),G+=$.length;for(let U=0,Z=H.length;U<Z;U++){let Q=H[U];D(Q,G),G+=Q.length}i.addGroup(R,r.length/3-R,1)}function D(R,G){let U=R.length;for(;--U>=0;){let Z=U,Q=U-1;Q<0&&(Q=R.length-1);for(let ct=0,gt=u+g*2;ct<gt;ct++){let mt=j*ct,Y=j*(ct+1),M=G+Z+mt,Et=G+Q+mt,Ft=G+Q+Y,I=G+Z+Y;z(M,Et,Ft,I)}}}function N(R,G,U){c.push(R),c.push(G),c.push(U)}function P(R,G,U){it(R),it(G),it(U);let Z=r.length/3,Q=A.generateTopUV(i,r,Z-3,Z-2,Z-1);xt(Q[0]),xt(Q[1]),xt(Q[2])}function z(R,G,U,Z){it(R),it(G),it(Z),it(G),it(U),it(Z);let Q=r.length/3,ct=A.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);xt(ct[0]),xt(ct[1]),xt(ct[3]),xt(ct[1]),xt(ct[2]),xt(ct[3])}function it(R){r.push(c[R*3+0]),r.push(c[R*3+1]),r.push(c[R*3+2])}function xt(R){a.push(R.x),a.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Vd(e,i,t)}static fromJSON(t,e){let i=[];for(let a=0,o=t.shapes.length;a<o;a++){let l=e[t.shapes[a]];i.push(l)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ha[r.type]().fromJSON(r)),new s(i,t.options)}},kd={generateTopUV:function(s,t,e,i,r){let a=t[e*3],o=t[e*3+1],l=t[i*3],c=t[i*3+1],h=t[r*3],u=t[r*3+1];return[new pt(a,o),new pt(l,c),new pt(h,u)]},generateSideWallUV:function(s,t,e,i,r,a){let o=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[i*3],u=t[i*3+1],d=t[i*3+2],f=t[r*3],m=t[r*3+1],_=t[r*3+2],S=t[a*3],g=t[a*3+1],p=t[a*3+2];return Math.abs(l-u)<Math.abs(o-h)?[new pt(o,1-c),new pt(h,1-d),new pt(f,1-_),new pt(S,1-p)]:[new pt(l,1-c),new pt(u,1-d),new pt(m,1-_),new pt(g,1-p)]}};function Vd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){let a=s[i];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class s extends ve{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let a=t/2,o=e/2,l=Math.floor(i),c=Math.floor(r),h=l+1,u=c+1,d=t/l,f=e/c,m=[],_=[],S=[],g=[];for(let p=0;p<u;p++){let A=p*f-o;for(let C=0;C<h;C++){let y=C*d-a;_.push(y,-A,0),S.push(0,0,1),g.push(C/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<l;A++){let C=A+h*p,y=A+h*(p+1),w=A+1+h*(p+1),T=A+1+h*p;m.push(C,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(S,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ni=class s extends ve{constructor(t=1,e=32,i=16,r=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+l,Math.PI),h=0,u=[],d=new B,f=new B,m=[],_=[],S=[],g=[];for(let p=0;p<=i;p++){let A=[],C=p/i,y=o+C*l,w=t*Math.cos(y),T=Math.sqrt(t*t-w*w),L=0;p===0&&o===0?L=.5/e:p===i&&c===Math.PI&&(L=-.5/e);for(let x=0;x<=e;x++){let E=x/e,F=r+E*a;d.x=-T*Math.cos(F),d.y=w,d.z=T*Math.sin(F),_.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),g.push(E+L,1-C),A.push(h++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<e;A++){let C=u[p][A+1],y=u[p][A],w=u[p+1][A],T=u[p+1][A+1];(p!==0||o>0)&&m.push(C,y,T),(p!==i-1||c<Math.PI)&&m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(S,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Sr=class s extends ve{constructor(t=1,e=.4,i=12,r=48,a=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:a,thetaStart:o,thetaLength:l},i=Math.floor(i),r=Math.floor(r);let c=[],h=[],u=[],d=[],f=new B,m=new B,_=new B;for(let S=0;S<=i;S++){let g=o+S/i*l;for(let p=0;p<=r;p++){let A=p/r*a;m.x=(t+e*Math.cos(g))*Math.cos(A),m.y=(t+e*Math.cos(g))*Math.sin(A),m.z=e*Math.sin(g),h.push(m.x,m.y,m.z),f.x=t*Math.cos(A),f.y=t*Math.sin(A),_.subVectors(m,f).normalize(),u.push(_.x,_.y,_.z),d.push(p/r),d.push(S/i)}}for(let S=1;S<=i;S++)for(let g=1;g<=r;g++){let p=(r+1)*S+g-1,A=(r+1)*(S-1)+g-1,C=(r+1)*(S-1)+g,y=(r+1)*S+g;c.push(p,A,y),c.push(A,C,y)}this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var bs=class s extends ve{constructor(t=new _r(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:a};let o=t.computeFrenetFrames(e,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let l=new B,c=new B,h=new pt,u=new B,d=[],f=[],m=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function S(){for(let C=0;C<e;C++)g(C);g(a===!1?e:0),A(),p()}function g(C){u=t.getPointAt(C/e,u);let y=o.normals[C],w=o.binormals[C];for(let T=0;T<=r;T++){let L=T/r*Math.PI*2,x=Math.sin(L),E=-Math.cos(L);c.x=E*y.x+x*w.x,c.y=E*y.y+x*w.y,c.z=E*y.z+x*w.z,c.normalize(),f.push(c.x,c.y,c.z),l.x=u.x+i*c.x,l.y=u.y+i*c.y,l.z=u.z+i*c.z,d.push(l.x,l.y,l.z)}}function p(){for(let C=1;C<=e;C++)for(let y=1;y<=r;y++){let w=(r+1)*(C-1)+(y-1),T=(r+1)*C+(y-1),L=(r+1)*C+y,x=(r+1)*(C-1)+y;_.push(w,T,x),_.push(T,L,x)}}function A(){for(let C=0;C<=e;C++)for(let y=0;y<=r;y++)h.x=C/e,h.y=y/r,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Ha[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var br=class extends Dn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Gi(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let r=s[e][i];if(Ih(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Ih(r[0])){let a=[];for(let o=0,l=r.length;o<l;o++)a[o]=r[o].clone();t[e][i]=a}else t[e][i]=r.slice();else t[e][i]=r}}return t}function ke(s){let t={};for(let e=0;e<s.length;e++){let i=Gi(s[e]);for(let r in i)t[r]=i[r]}return t}function Ih(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _c(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Ru={clone:Gi,merge:ke},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(r.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ye().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Di=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ui=class extends Di{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Tr=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qa=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Pl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var pi=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let l=i+2;;){if(r===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(a=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=a)){let l=e[1];t<l&&(i=2,a=l);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=a,a=e[--i-1],t>=a)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let o=0;o!==r;++o)e[o]=i[a+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends pi{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,o=t+1,l=r[a],c=r[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ul:a=t,l=2*e-i;break;case Fl:a=r.length-2,l=e+r[a]-r[a+1];break;default:a=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ul:o=t,c=2*i-e;break;case Fl:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-i),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(t,e,i,r){let a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-e)/(r-e),S=_*_,g=S*_,p=-f*g+2*f*S-f*_,A=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*_+1,C=(-1-m)*g+(1.5+m)*S+.5*_,y=m*g-m*S;for(let w=0;w!==l;++w)a[w]=p*o[u+w]+A*o[h+w]+C*o[c+w]+y*o[d+w];return a}},Ja=class extends pi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=(i-e)/(r-e),d=1-u;for(let f=0;f!==l;++f)a[f]=o[h+f]*d+o[c+f]*u;return a}},$a=class extends pi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ka=class extends pi{interpolate_(t,e,i,r){let a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-e)/(r-e),S=1-_;for(let g=0;g!==l;++g)a[g]=o[h+g]*S+o[c+g]*_;return a}let f=l*2,m=t-1;for(let _=0;_!==l;++_){let S=o[h+_],g=o[c+_],p=m*f+_*2,A=d[p],C=d[p+1],y=t*f+_*2,w=u[y],T=u[y+1],L=qd(i,e,A,w,r);a[_]=Iu(L,S,C,T,g)}return a}};function Iu(s,t,e,i,r){let a=1-s;return a*a*a*t+3*a*a*s*e+3*a*s*s*i+s*s*s*r}function Xd(s,t,e,i,r){let a=1-s;return 3*a*a*(e-t)+6*a*s*(i-e)+3*s*s*(r-i)}function qd(s,t,e,i,r){let a=(s-t)/(r-t);for(let o=0;o<8;o++){let l=Iu(a,t,e,i,r)-s;if(Math.abs(l)<1e-10)break;let c=Xd(a,t,e,i,r);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-l/c))}return a}var nn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),Pl(t.settings)&&(i.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Da:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;Pl(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,a=0,o=r-1;for(;a!==r&&i[a]<t;)++a;for(;o!==-1&&i[o]>e;)--o;if(++o,a!==0||o!==r){a>=o&&(o=Math.max(o,1),a=o-1);let l=this.getValueSize();this.times=i.slice(a,o),this.values=this.values.slice(a*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==a;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){Jt("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(r!==void 0&&Df(r))for(let l=0,c=r.length;l!==c;++l){let h=r[l];if(isNaN(h)){Jt("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===wa,a=t.length-1,o=1;for(let l=1;l<a;++l){let c=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(r)c=!0;else{let d=l*i,f=d-i,m=d+i;for(let _=0;_!==i;++_){let S=e[d+_];if(S!==e[f+_]||S!==e[m+_]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let d=l*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++o}}if(a>0){t[o]=t[a];for(let l=a*i,c=o*i,h=0;h!==i;++h)e[c+h]=e[l+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,Pl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ph(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Da;var mi=class extends nn{constructor(t,e,i){super(t,e,i)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=nr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends nn{constructor(t,e,i,r){super(t,e,i,r)}};ja.prototype.ValueTypeName="color";var Qa=class extends nn{constructor(t,e,i,r){super(t,e,i,r)}};Qa.prototype.ValueTypeName="number";var to=class extends pi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-e)/(r-e),h=t*l;for(let u=h+l;h!==u;h+=4)Ln.slerpFlat(a,0,o,h-l,o,h,c);return a}},wr=class extends nn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends nn{constructor(t,e,i){super(t,e,i)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=nr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends nn{constructor(t,e,i,r){super(t,e,i,r)}};eo.prototype.ValueTypeName="vector";var kl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Lh(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Lh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lh(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var no=class{constructor(t,e,i){let r=this,a=!1,o=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,l),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){let m=h[d],_=h[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pu=new no,Fi=class{constructor(t){this.manager=t!==void 0?t:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,a){i.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Vl=class extends Error{constructor(t,e){super(t),this.response=e}},Ar=class extends Fi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=kl.get(`file:${t}`);if(a!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0);return}if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:i,onError:r});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:i,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&qt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let u=Yn[t],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0,S=0,g=new ReadableStream({start(p){A();function A(){d.read().then(({done:C,value:y})=>{if(C)p.close();else{S+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:m});for(let T=0,L=u.length;T<L;T++){let x=u[T];x.onProgress&&x.onProgress(w)}p.enqueue(y),A()}},C=>{p.error(C)})}}});return new Response(g)}else throw new Vl(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return h.json();default:if(l==="")return h.text();{let d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return h.arrayBuffer().then(_=>m.decode(_))}}}).then(h=>{kl.add(`file:${t}`,h);let u=Yn[t];delete Yn[t];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onLoad&&m.onLoad(h)}}).catch(h=>{let u=Yn[t];if(u===void 0)throw this.manager.itemError(t),h;delete Yn[t];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onError&&m.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Oi=class extends Ts{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ll=new fe,Nh=new B,Dh=new B,Er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ll,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,o=r?r.z/a.x:1,l=r?r.w/a.y:1,c=r?r.x/a.x:0,h=r?r.y/a.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new B,Ta=new Ln,Cn=new B,Cr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ta,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ba,Ta,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new B,Uh=new pt,Fh=new pt,Ce=class extends Cr{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Fh),e.subVectors(Fh,Uh)}setViewOffset(t,e,i,r,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;a+=o.offsetX*r/c,e-=o.offsetY*i/h,r*=o.width/c,i*=o.height/h}let l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gl=class extends Er{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0}},Rr=class extends Ts{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ws=class extends Cr{constructor(t=-1,e=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,o=i+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hl=class extends Er{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Hl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,io=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ce(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ce(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ce(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Ce(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Ce(as,os,t,e);c.layers=this.layers,this.add(c);let h=new Ce(as,os,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,o,l,c]=e;for(let h of e)this.remove(h);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,o,l,c,h,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},so=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xc="\\[\\]\\.:\\/",Yd=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Zd="[^"+xc.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",yc),$d=/(WCOD+)?/.source.replace("WCOD",Zd),Kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Qd=new RegExp("^"+Jd+$d+Kd+jd+"$"),tp=["material","materials","bones","map"],Wl=class{constructor(t,e,i){let r=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(t){let e=Qd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);tp.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[r];if(o===void 0){let h=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Wl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);var Oh=new fe,Ir=class{constructor(t,e,i=0,r=1/0){this.ray=new cr(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(t,e=!0,i=[]){return Xl(t,this,i,e),i.sort(Bh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,a=t.length;r<a;r++)Xl(t[r],this,i,e);return i.sort(Bh),i}};function Bh(s,t){return s.distance-t.distance}function Xl(s,t,e,i){let r=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let a=s.children;for(let o=0,l=a.length;o<l;o++)Xl(a[o],t,e,!0)}}var wc=class wc{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let a=this.elements;return a[0]=t,a[2]=e,a[1]=i,a[3]=r,this}};wc.prototype.isMatrix2=!0;var ql=wc,zh=new pt,As=class{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var vn=class{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Fn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,a,o){return this.currentPath.bezierCurveTo(t,e,i,r,a,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,h){let u=!1,d=h.length;for(let f=0,m=d-1;f<d;m=f++){let _=h[f],S=h[m];_.y>c.y!=S.y>c.y&&c.x<(S.x-_.x)*(c.y-_.y)/(S.y-_.y)+_.x&&(u=!u)}return u}function e(c,h){let u=h.getCenter(new pt);if(t(u,c))return u;let d=u.y,f=[],m=c.length;for(let _=0;_<m;_++){let S=c[_],g=c[(_+1)%m];if(S.y>d!=g.y>d){let p=S.x+(d-S.y)*(g.x-S.x)/(g.y-S.y);f.push(p)}}return f.length>1&&(f.sort((_,S)=>_-S),u.x=(f[0]+f[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(qt('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let r=i==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),a=[];for(let c of this.subPaths){let h=c.getPoints();if(h.length<3)continue;let u=Rn.area(h);if(u===0)continue;let d=new As;for(let f=0;f<h.length;f++)d.expandByPoint(h[f]);a.push({subPath:c,points:h,boundingBox:d,interiorPoint:e(h,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}a.sort((c,h)=>h.absArea-c.absArea);for(let c=0;c<a.length;c++){let h=a[c],u=0;for(let d=c-1;d>=0;d--){let f=a[d];if(f.boundingBox.containsBox(h.boundingBox)&&t(h.interiorPoint,f.points)){h.container=f.exclude?f.container:f,u=f.winding,h.winding+=u;break}}r(h.winding)===r(u)&&(h.exclude=!0)}for(let c of a)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let o=[],l=new Map;for(let c of a){if(c.exclude||c.role!=="outer")continue;let h=new On;h.curves=c.subPath.curves,o.push(h),l.set(c,h)}for(let c of a){if(c.exclude||c.role!=="hole")continue;let h=l.get(c.container);if(!h)continue;let u=new Fn;u.curves=c.subPath.curves,h.holes.push(u)}return o}};function vc(s,t,e,i){let r=ep(i);switch(e){case hc:return s*t;case po:return s*t/r.components*r.byteLength;case mo:return s*t/r.components*r.byteLength;case Si:return s*t*2/r.components*r.byteLength;case go:return s*t*2/r.components*r.byteLength;case uc:return s*t*3/r.components*r.byteLength;case hn:return s*t*4/r.components*r.byteLength;case _o:return s*t*4/r.components*r.byteLength;case Dr:case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yo:case Mo:return Math.max(s,16)*Math.max(t,8)/4;case xo:case vo:return Math.max(s,8)*Math.max(t,8)/2;case So:case bo:case wo:case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case To:case Br:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Go:case Ho:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xo:case qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zr:case Yo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ep(s){switch(s){case Ze:case ac:return{byteLength:1,components:1};case Cs:case oc:case bn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case Sn:case ho:case cn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let s=null,t=!1,e=null,i=null;function r(a,o){i=s.requestAnimationFrame(r),e(a,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function lp(s){let t=new WeakMap;function e(l,c){let h=l.array,u=l.usage,d=h.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,h,u),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=s.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,h){let u=c.array,d=c.updateRanges;if(s.bindBuffer(h,l),d.length===0)s.bufferSubData(h,0,u);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){let _=d[f],S=d[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){let S=d[m];s.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(s.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,c),h.version=l.version}}return{get:r,remove:a,update:o}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,om=`uniform sampler2D dfgLUT;
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ym=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,C0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,F0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:fp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:xp,begin_vertex:yp,beginnormal_vertex:vp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Ep,color_fragment:Cp,color_pars_fragment:Rp,color_pars_vertex:Ip,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Hp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,lightprobes_pars_fragment:um,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:xm,map_particle_pars_fragment:ym,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:Sm,morphcolor_vertex:bm,morphnormal_vertex:Tm,morphtarget_pars_vertex:wm,morphtarget_vertex:Am,normal_fragment_begin:Em,normal_fragment_maps:Cm,normal_pars_fragment:Rm,normal_pars_vertex:Im,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:km,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:qm,shadowmap_vertex:Ym,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:$m,skinning_vertex:Km,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:s0,uv_pars_fragment:r0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:f0,cube_vert:d0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distance_vert:_0,distance_frag:x0,equirect_vert:y0,equirect_frag:v0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:b0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:A0,meshmatcap_vert:E0,meshmatcap_frag:C0,meshnormal_vert:R0,meshnormal_frag:I0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:N0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:F0,points_vert:O0,points_frag:B0,shadow_vert:z0,shadow_frag:k0,sprite_vert:V0,sprite_frag:G0},At={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},kn={basic:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:ke([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:ke([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:ke([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:ke([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:ke([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:ke([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:ke([At.common,At.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:ke([At.lights,At.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};kn.physical={uniforms:ke([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var $o={r:0,b:0,g:0},H0=new fe,tf=new Xt;tf.set(-1,0,0,0,1,0,0,0,1);function W0(s,t,e,i,r,a){let o=new Yt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let y=A.backgroundBlurriness>0;C=t.get(C,y)}return C}function _(A){let C=!1,y=m(A);y===null?g(o,l):y&&y.isColor&&(g(y,1),C=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(A,C){let y=m(C);y&&(y.isCubeTexture||y.mapping===Lr)?(h===void 0&&(h=new ge(new Un(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Gi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(tf),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==he,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new Li(2,2),new en({name:"BackgroundMaterial",uniforms:Gi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,C){A.getRGB($o,_c(s)),e.buffers.color.setClear($o.r,$o.g,$o.b,C,a)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,C=1){o.set(A),l=C,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(o,l)},render:_,addToRenderList:S,dispose:p}}function X0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=f(null),a=r,o=!1;function l(H,k,K,V,$){let ot=!1,j=d(H,V,K,k);a!==j&&(a=j,h(a.object)),ot=m(H,V,K,$),ot&&_(H,V,K,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,y(H,k,K,V),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function u(H){return s.deleteVertexArray(H)}function d(H,k,K,V){let $=V.wireframe===!0,ot=i[k.id];ot===void 0&&(ot={},i[k.id]=ot);let j=H.isInstancedMesh===!0?H.id:0,J=ot[j];J===void 0&&(J={},ot[j]=J);let st=J[K.id];st===void 0&&(st={},J[K.id]=st);let at=st[$];return at===void 0&&(at=f(c()),st[$]=at),at}function f(H){let k=[],K=[],V=[];for(let $=0;$<e;$++)k[$]=0,K[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:V,object:H,attributes:{},index:null}}function m(H,k,K,V){let $=a.attributes,ot=k.attributes,j=0,J=K.getAttributes();for(let st in J)if(J[st].location>=0){let ut=$[st],Dt=ot[st];if(Dt===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(Dt=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(Dt=H.instanceColor)),ut===void 0||ut.attribute!==Dt||Dt&&ut.data!==Dt.data)return!0;j++}return a.attributesNum!==j||a.index!==V}function _(H,k,K,V){let $={},ot=k.attributes,j=0,J=K.getAttributes();for(let st in J)if(J[st].location>=0){let ut=ot[st];ut===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(ut=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(ut=H.instanceColor));let Dt={};Dt.attribute=ut,ut&&ut.data&&(Dt.data=ut.data),$[st]=Dt,j++}a.attributes=$,a.attributesNum=j,a.index=V}function S(){let H=a.newAttributes;for(let k=0,K=H.length;k<K;k++)H[k]=0}function g(H){p(H,0)}function p(H,k){let K=a.newAttributes,V=a.enabledAttributes,$=a.attributeDivisors;K[H]=1,V[H]===0&&(s.enableVertexAttribArray(H),V[H]=1),$[H]!==k&&(s.vertexAttribDivisor(H,k),$[H]=k)}function A(){let H=a.newAttributes,k=a.enabledAttributes;for(let K=0,V=k.length;K<V;K++)k[K]!==H[K]&&(s.disableVertexAttribArray(K),k[K]=0)}function C(H,k,K,V,$,ot,j){j===!0?s.vertexAttribIPointer(H,k,K,$,ot):s.vertexAttribPointer(H,k,K,V,$,ot)}function y(H,k,K,V){S();let $=V.attributes,ot=K.getAttributes(),j=k.defaultAttributeValues;for(let J in ot){let st=ot[J];if(st.location>=0){let at=$[J];if(at===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(at=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(at=H.instanceColor)),at!==void 0){let ut=at.normalized,Dt=at.itemSize,It=t.get(at);if(It===void 0)continue;let Kt=It.buffer,$t=It.type,Qt=It.bytesPerElement,O=$t===s.INT||$t===s.UNSIGNED_INT||at.gpuType===ho;if(at.isInterleavedBufferAttribute){let D=at.data,N=D.stride,P=at.offset;if(D.isInstancedInterleavedBuffer){for(let z=0;z<st.locationSize;z++)p(st.location+z,D.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let z=0;z<st.locationSize;z++)g(st.location+z);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let z=0;z<st.locationSize;z++)C(st.location+z,Dt/st.locationSize,$t,ut,N*Qt,(P+Dt/st.locationSize*z)*Qt,O)}else{if(at.isInstancedBufferAttribute){for(let D=0;D<st.locationSize;D++)p(st.location+D,at.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let D=0;D<st.locationSize;D++)g(st.location+D);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let D=0;D<st.locationSize;D++)C(st.location+D,Dt/st.locationSize,$t,ut,Dt*Qt,Dt/st.locationSize*D*Qt,O)}}else if(j!==void 0){let ut=j[J];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(st.location,ut);break;case 3:s.vertexAttrib3fv(st.location,ut);break;case 4:s.vertexAttrib4fv(st.location,ut);break;default:s.vertexAttrib1fv(st.location,ut)}}}}A()}function w(){E();for(let H in i){let k=i[H];for(let K in k){let V=k[K];for(let $ in V){let ot=V[$];for(let j in ot)u(ot[j].object),delete ot[j];delete V[$]}}delete i[H]}}function T(H){if(i[H.id]===void 0)return;let k=i[H.id];for(let K in k){let V=k[K];for(let $ in V){let ot=V[$];for(let j in ot)u(ot[j].object),delete ot[j];delete V[$]}}delete i[H.id]}function L(H){for(let k in i){let K=i[k];for(let V in K){let $=K[V];if($[H.id]===void 0)continue;let ot=$[H.id];for(let j in ot)u(ot[j].object),delete ot[j];delete $[H.id]}}}function x(H){for(let k in i){let K=i[k],V=H.isInstancedMesh===!0?H.id:0,$=K[V];if($!==void 0){for(let ot in $){let j=$[ot];for(let J in j)u(j[J].object),delete j[J];delete $[ot]}delete K[V],Object.keys(K).length===0&&delete i[k]}}}function E(){F(),o=!0,a!==r&&(a=r,h(a.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:E,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:g,disableUnusedAttributes:A}}function q0(s,t,e){let i;function r(c){i=c}function a(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function l(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function Y0(s,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==hn&&i.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){let x=L===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Ze&&L!==cn&&!x&&i.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(qt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:y,maxSamples:w,samples:T}}function Z0(s){let t=this,e=null,i=0,r=!1,a=!1,o=new xn,l=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!r||_===null||_.length===0||a&&!g)a?u(null):h();else{let A=a?0:i,C=A*4,y=p.clippingState||null;c.value=y,y=u(_,f,C,m);for(let w=0;w!==C;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,m,_){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=c.value,_!==!0||g===null){let p=m+S*4,A=f.matrixWorldInverse;l.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,y=m;C!==S;++C,y+=4)o.copy(d[C]).applyMatrix4(A,l),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var Ps=4,J0=6,$0=20,K0=256,Vr=new ws,Lu=new Yt,Ac=null,Ec=0,Cc=0,Rc=!1,j0=new B,Hi=new B,bi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,a={}){let{size:o=256,position:l=j0}=a;Ac=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Ec,Cc),this._renderer.xr.enabled=Rc,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:bn,format:hn,colorSpace:ir,depthBuffer:!1},r=Nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q0(a)),this._blurMaterial=eg(a,t,e),this._ggxMaterial=tg(a,t,e)}return r}_compileMaterial(t){let e=new ge(new ve,t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,i,r,a){let c=new Ce(90,1,e,i),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Lu),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Un,new fi({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,p=!1,A=t.background;A?A.isColor&&(g.color.copy(A),t.background=null,p=!0):(g.color.copy(Lu),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(c.up.set(0,h[C],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[C],a.y,a.z)):y===1?(c.up.set(0,0,h[C]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[C],a.z)):(c.up.set(0,h[C],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[C]));let w=this._cubeSize;Is(r,y*w,C>2?w:0,w,w),d.setRenderTarget(r),p&&d.render(S,c),d.render(t,c)}d.toneMapping=m,d.autoClear=f,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===yi||t.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());let a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let l=a.uniforms;l.envMap.value=t;let c=this._cubeSize;Is(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Vr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms,h=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-u*u),f=h*1.25,m=d*f,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-Ps?i-_+Ps:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=_-e,Is(a,g,p,3*S,2*S),r.setRenderTarget(a),r.render(l,Vr),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=_-i,Is(t,g,p,3*S,2*S),r.setRenderTarget(t),r.render(l,Vr)}_blur(t,e,i,r){let a=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,i,o),this._blurPass(a,t,i,i,o)}_blurPass(t,e,i,r,a){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-Ps?r-this._lodMax+Ps:0),f=4*(this._cubeSize-u);Is(e,d,f,3*u,2*u),o.setRenderTarget(e),o.render(c,Vr)}};function Q0(s){let t=[],e=[],i=s,r=s-Ps+1+J0;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/(o-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,f=6,m=3,_=new Float32Array(m*f*d),S=new Float32Array(m*f*d);for(let p=0;p<d;p++){let A=p%3*2/3-1,C=p>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(y,m*f*p);for(let w=0;w<f;w++){let T=u[w*2]*2-1,L=u[w*2+1]*2-1;p===0?Hi.set(1,L,T):p===1?Hi.set(-T,1,-L):p===2?Hi.set(-T,L,1):p===3?Hi.set(-1,L,-T):p===4?Hi.set(-T,-1,L):Hi.set(T,L,-1),Hi.toArray(S,(p*f+w)*m)}}let g=new ve;g.setAttribute("position",new We(_,m)),g.setAttribute("outputDirection",new We(S,m)),e.push(new ge(g,null)),i>Ps&&i--}return{lodMeshes:e,sizeLods:t}}function Nu(s,t,e){let i=new Ye(s,t,e);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(s,t,e,i,r){s.viewport.set(t,e,i,r),s.scissor.set(t,e,i,r)}function tg(s,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function eg(s,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Du(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Uu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jo=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new fr(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),a=new en({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Bn});a.uniforms.tEquirect.value=e;let o=new ge(r,a),l=e.minFilter;return e.minFilter===vi&&(e.minFilter=De),new io(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(a)}};function ng(s){let t=new WeakMap,e=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?o(f):a(f)}function a(f){if(f&&f.isTexture){let m=f.mapping;if(m===oo||m===lo)if(t.has(f)){let _=t.get(f).texture;return l(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let S=new jo(_.height);return S.fromEquirectangularTexture(s,f),t.set(f,S),f.addEventListener("dispose",h),l(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let m=f.mapping,_=m===oo||m===lo,S=m===yi||m===ki;if(_||S){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new bi(s)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let A=f.image;return _&&A&&A.height>0||S&&A&&c(A)?(i===null&&(i=new bi(s)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,m){return m===oo?f.mapping=yi:m===lo&&(f.mapping=ki),f}function c(f){let m=0,_=6;for(let S=0;S<_;S++)f[S]!==void 0&&m++;return m===_}function h(f){let m=f.target;m.removeEventListener("dispose",h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(f){let m=f.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function ig(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=s.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Ri("WebGLRenderer: "+i+" extension not supported."),r}}}function sg(s,t,e,i){let r={},a=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];let m=a.get(f);m&&(t.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER)}function h(d){let f=[],m=d.index,_=d.attributes.position,S=0;if(_===void 0)return;if(m!==null){let A=m.array;S=m.version;for(let C=0,y=A.length;C<y;C+=3){let w=A[C+0],T=A[C+1],L=A[C+2];f.push(w,T,T,L,L,w)}}else{let A=_.array;S=_.version;for(let C=0,y=A.length/3-1;C<y;C+=3){let w=C+0,T=C+1,L=C+2;f.push(w,T,T,L,L,w)}}let g=new(_.count>=65535?lr:or)(f,1);g.version=S;let p=a.get(d);p&&t.remove(p),a.set(d,g)}function u(d){let f=a.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return a.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function rg(s,t,e){let i;function r(d){i=d}let a,o;function l(d){a=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(i,f,a,d*o),e.update(f,i,1)}function h(d,f,m){m!==0&&(s.drawElementsInstanced(i,f,a,d*o,m),e.update(f,i,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,m);let S=0;for(let g=0;g<m;g++)S+=f[g];e.update(S,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function ag(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,l){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=l*(a/3);break;case s.LINES:e.lines+=l*(a/2);break;case s.LINE_STRIP:e.lines+=l*(a-1);break;case s.LINE_LOOP:e.lines+=l*a;break;case s.POINTS:e.points+=l*a;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function og(s,t,e){let i=new WeakMap,r=new ye;function a(o,l,c){let h=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(l);if(f===void 0||f.count!==d){let E=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let m=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],A=l.morphAttributes.color||[],C=0;m===!0&&(C=1),_===!0&&(C=2),S===!0&&(C=3);let y=l.attributes.position.count*C,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*w*4*d),L=new ar(T,y,w,d);L.type=cn,L.needsUpdate=!0;let x=C*4;for(let F=0;F<d;F++){let H=g[F],k=p[F],K=A[F],V=y*w*4*F;for(let $=0;$<H.count;$++){let ot=$*x;m===!0&&(r.fromBufferAttribute(H,$),T[V+ot+0]=r.x,T[V+ot+1]=r.y,T[V+ot+2]=r.z,T[V+ot+3]=0),_===!0&&(r.fromBufferAttribute(k,$),T[V+ot+4]=r.x,T[V+ot+5]=r.y,T[V+ot+6]=r.z,T[V+ot+7]=0),S===!0&&(r.fromBufferAttribute(K,$),T[V+ot+8]=r.x,T[V+ot+9]=r.y,T[V+ot+10]=r.z,T[V+ot+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new pt(y,w)},i.set(l,f),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let S=0;S<h.length;S++)m+=h[S];let _=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function lg(s,t,e,i,r){let a=new WeakMap;function o(h){let u=r.render.frame,d=h.geometry,f=t.get(h,d);if(a.get(f)!==u&&(t.update(f),a.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==u&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,u))),h.isSkinnedMesh){let m=h.skeleton;a.get(m)!==u&&(m.update(),a.set(m,u))}return f}function l(){a=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:l}}var cg={[Ql]:"LINEAR_TONE_MAPPING",[tc]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[zi]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function hg(s,t,e,i,r,a){let o=new Ye(t,e,{type:s,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new ve;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ge(h,u),f=new ws(-1,1,1,-1,0,1),m=null,_=null,S=!1,g,p=null,A=[],C=!1;this.setSize=function(y,w){o.setSize(y,w),l!==null&&l.setSize(y,w),c!==null&&c.setSize(y,w);for(let T=0;T<A.length;T++){let L=A[T];L.setSize&&L.setSize(y,w)}},this.setEffects=function(y){A=y,C=A.length>0&&A[0].isRenderPass===!0;let w=o.width,T=o.height;A.length>0&&l===null&&(l=new Ye(w,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new Ye(w,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<A.length;L++){let x=A[L];x.setSize&&x.setSize(w,T)}},this.begin=function(y,w){if(S||y.toneMapping===Mn&&A.length===0)return!1;if(p=w,w!==null){let T=w.width,L=w.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return C===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return C},this.end=function(y,w){y.toneMapping=g,S=!0;let T=o,L=l;for(let x=0;x<A.length;x++){let E=A[x];E.enabled!==!1&&(E.render(y,L,T,w),E.needsSwap!==!1&&(T=L,L=L===l?c:l))}if(m!==y.outputColorSpace||_!==y.toneMapping){m=y.outputColorSpace,_=y.toneMapping,u.defines={},ae.getTransfer(m)===he&&(u.defines.SRGB_TRANSFER="");let x=cg[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(d,f),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var ef=new Xe,Lc=new di(1,1),nf=new ar,sf=new Oa,rf=new fr,Fu=[],Ou=[],Bu=new Float32Array(16),zu=new Float32Array(9),ku=new Float32Array(4);function Ds(s,t,e){let i=s[0];if(i<=0||i>0)return s;let r=t*e,a=Fu[r];if(a===void 0&&(a=new Float32Array(r),Fu[r]=a),t!==0){i.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,s[o].toArray(a,l)}return a}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function tl(s,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function mg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;ku.set(i),s.uniformMatrix2fv(this.addr,!1,ku),Ie(e,i)}}function gg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;zu.set(i),s.uniformMatrix3fv(this.addr,!1,zu),Ie(e,i)}}function _g(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,i))return;Bu.set(i),s.uniformMatrix4fv(this.addr,!1,Bu),Ie(e,i)}}function xg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function Sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function Ag(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(Lc.compareFunction=e.isReversedDepthBuffer()?Jo:Zo,a=Lc):a=ef,e.setTexture2D(t||a,r)}function Eg(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||sf,r)}function Cg(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||rf,r)}function Rg(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||nf,r)}function Ig(s){switch(s){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return vg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(s,t){s.uniform1fv(this.addr,t)}function Lg(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function Ng(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function Dg(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function Ug(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Fg(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Og(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bg(s,t){s.uniform1iv(this.addr,t)}function zg(s,t){s.uniform2iv(this.addr,t)}function kg(s,t){s.uniform3iv(this.addr,t)}function Vg(s,t){s.uniform4iv(this.addr,t)}function Gg(s,t){s.uniform1uiv(this.addr,t)}function Hg(s,t){s.uniform2uiv(this.addr,t)}function Wg(s,t){s.uniform3uiv(this.addr,t)}function Xg(s,t){s.uniform4uiv(this.addr,t)}function qg(s,t,e){let i=this.cache,r=t.length,a=tl(e,r);Re(i,a)||(s.uniform1iv(this.addr,a),Ie(i,a));let o;this.type===s.SAMPLER_2D_SHADOW?o=Lc:o=ef;for(let l=0;l!==r;++l)e.setTexture2D(t[l]||o,a[l])}function Yg(s,t,e){let i=this.cache,r=t.length,a=tl(e,r);Re(i,a)||(s.uniform1iv(this.addr,a),Ie(i,a));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||sf,a[o])}function Zg(s,t,e){let i=this.cache,r=t.length,a=tl(e,r);Re(i,a)||(s.uniform1iv(this.addr,a),Ie(i,a));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||rf,a[o])}function Jg(s,t,e){let i=this.cache,r=t.length,a=tl(e,r);Re(i,a)||(s.uniform1iv(this.addr,a),Ie(i,a));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||nf,a[o])}function $g(s){switch(s){case 5126:return Pg;case 35664:return Lg;case 35665:return Ng;case 35666:return Dg;case 35674:return Ug;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Hg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}var Nc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}},Dc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,o=r.length;a!==o;++a){let l=r[a];l.setValue(t,e[l.id],i)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Vu(s,t){s.seq.push(t),s.map[t.id]=t}function Kg(s,t,e){let i=s.name,r=i.length;for(Ic.lastIndex=0;;){let a=Ic.exec(i),o=Ic.lastIndex,l=a[1],c=a[2]==="]",h=a[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){Vu(e,h===void 0?new Nc(l,s,t):new Dc(l,s,t));break}else{let d=e.map[l];d===void 0&&(d=new Uc(l),Vu(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);Kg(l,c,this)}let r=[],a=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,o=e.length;a!==o;++a){let l=e[a],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function Gu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var jg=37297,Qg=0;function t_(s,t){let e=s.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=r;o<a;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var Hu=new Xt;function e_(s){ae._getMatrix(Hu,ae.workingColorSpace,s);let t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case sr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+t_(s.getShaderSource(t),l)}else return a}function n_(s,t){let e=e_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var i_={[Ql]:"Linear",[tc]:"Reinhard",[ec]:"Cineon",[zi]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function s_(s,t){let e=i_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ko=new B;function r_(){ae.getLuminanceCoefficients(Ko);let s=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function o_(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function l_(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=s.getActiveAttrib(t,r),o=a.name,l=1;a.type===s.FLOAT_MAT2&&(l=2),a.type===s.FLOAT_MAT3&&(l=3),a.type===s.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:l}}return e}function Hr(s){return s!==""}function Xu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(s){return s.replace(c_,u_)}var h_=new Map;function u_(s,t){let e=ee[t];if(e===void 0){let i=h_.get(t);if(i!==void 0)e=ee[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fc(e)}var f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(s){return s.replace(f_,d_)}function d_(s,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var p_={[Pr]:"SHADOWMAP_TYPE_PCF",[_i]:"SHADOWMAP_TYPE_VSM"};function m_(s){return p_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g_={[yi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function __(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":g_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var x_={[ki]:"ENVMAP_MODE_REFRACTION"};function y_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v_={[ao]:"ENVMAP_BLENDING_MULTIPLY",[ou]:"ENVMAP_BLENDING_MIX",[lu]:"ENVMAP_BLENDING_ADD"};function M_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":v_[s.combine]||"ENVMAP_BLENDING_NONE"}function S_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function b_(s,t,e,i){let r=s.getContext(),a=e.defines,o=e.vertexShader,l=e.fragmentShader,c=m_(e),h=__(e),u=y_(e),d=M_(e),f=S_(e),m=a_(e),_=o_(a),S=r.createProgram(),g,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Mn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Fc(o),o=Xu(o,e),o=qu(o,e),l=Fc(l),l=Xu(l,e),l=qu(l,e),o=Yu(o),l=Yu(l),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=A+g+o,y=A+p+l,w=Gu(r,r.VERTEX_SHADER,C),T=Gu(r,r.FRAGMENT_SHADER,y);r.attachShader(S,w),r.attachShader(S,T),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function L(H){if(s.debug.checkShaderErrors){let k=r.getProgramInfoLog(S)||"",K=r.getShaderInfoLog(w)||"",V=r.getShaderInfoLog(T)||"",$=k.trim(),ot=K.trim(),j=V.trim(),J=!0,st=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,w,T);else{let at=Wu(r,w,"vertex"),ut=Wu(r,T,"fragment");Jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+at+`
`+ut)}else $!==""?qt("WebGLProgram: Program Info Log:",$):(ot===""||j==="")&&(st=!1);st&&(H.diagnostics={runnable:J,programLog:$,vertexShader:{log:ot,prefix:g},fragmentShader:{log:j,prefix:p}})}r.deleteShader(w),r.deleteShader(T),x=new Ls(r,S),E=l_(r,S)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(S,jg)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}var T_=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Bc(t),e.set(t,i)),i}},Bc=class{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}};function w_(s){return s===Si||s===Br||s===zr}function A_(s,t,e,i,r,a){let o=new gs,l=new Oc,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,E,F,H,k,K){let V=H.fog,$=k.geometry,ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?H.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||ot,j),st=J&&J.mapping===Lr?J.image.height:null,at=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&qt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Dt=ut!==void 0?ut.length:0,It=0;$.morphAttributes.position!==void 0&&(It=1),$.morphAttributes.normal!==void 0&&(It=2),$.morphAttributes.color!==void 0&&(It=3);let Kt,$t,Qt,O;if(at){let pe=kn[at];Kt=pe.vertexShader,$t=pe.fragmentShader}else{Kt=x.vertexShader,$t=x.fragmentShader;let pe=l.getVertexShaderStage(x),le=l.getFragmentShaderStage(x);l.update(x,pe,le),Qt=pe.id,O=le.id}let D=s.getRenderTarget(),N=s.state.buffers.depth.getReversed(),P=k.isInstancedMesh===!0,z=k.isBatchedMesh===!0,it=!!x.map,xt=!!x.matcap,R=!!J,G=!!x.aoMap,U=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,Q=!!x.normalMap,ct=!!x.displacementMap,gt=!!x.emissiveMap,mt=!!x.metalnessMap,Y=!!x.roughnessMap,M=x.anisotropy>0,Et=x.clearcoat>0,Ft=x.dispersion>0,I=x.retroreflectivity>0,v=x.iridescence>0,q=x.sheen>0,tt=x.transmission>0,lt=M&&!!x.anisotropyMap,yt=Et&&!!x.clearcoatMap,vt=Et&&!!x.clearcoatNormalMap,ht=Et&&!!x.clearcoatRoughnessMap,ft=v&&!!x.iridescenceMap,Mt=v&&!!x.iridescenceThicknessMap,zt=q&&!!x.sheenColorMap,bt=q&&!!x.sheenRoughnessMap,St=!!x.specularMap,Ht=!!x.specularColorMap,Zt=!!x.specularIntensityMap,jt=tt&&!!x.transmissionMap,X=tt&&!!x.thicknessMap,Tt=!!x.gradientMap,dt=!!x.alphaMap,wt=x.alphaTest>0,Pt=!!x.alphaHash,_t=!!x.extensions,Wt=Mn;x.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Wt=s.toneMapping);let kt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Kt,fragmentShader:$t,defines:x.defines,customVertexShaderID:Qt,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:z,batchingColor:z&&k._colorsTexture!==null,instancing:P,instancingColor:P&&k.instanceColor!==null,instancingMorph:P&&k.morphTexture!==null,outputColorSpace:D===null?s.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:xt,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:st,aoMap:G,lightMap:U,bumpMap:Z,normalMap:Q,displacementMap:ct,emissiveMap:gt,normalMapObjectSpace:Q&&x.normalMapType===uu,normalMapTangentSpace:Q&&x.normalMapType===kr,packedNormalMap:Q&&x.normalMapType===kr&&w_(x.normalMap.format),metalnessMap:mt,roughnessMap:Y,anisotropy:M,anisotropyMap:lt,clearcoat:Et,clearcoatMap:yt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ht,dispersion:Ft,retroreflection:I,iridescence:v,iridescenceMap:ft,iridescenceThicknessMap:Mt,sheen:q,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:St,specularColorMap:Ht,specularIntensityMap:Zt,transmission:tt,transmissionMap:jt,thicknessMap:X,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:wt,alphaHash:Pt,combine:x.combine,mapUv:it&&_(x.map.channel),aoMapUv:G&&_(x.aoMap.channel),lightMapUv:U&&_(x.lightMap.channel),bumpMapUv:Z&&_(x.bumpMap.channel),normalMapUv:Q&&_(x.normalMap.channel),displacementMapUv:ct&&_(x.displacementMap.channel),emissiveMapUv:gt&&_(x.emissiveMap.channel),metalnessMapUv:mt&&_(x.metalnessMap.channel),roughnessMapUv:Y&&_(x.roughnessMap.channel),anisotropyMapUv:lt&&_(x.anisotropyMap.channel),clearcoatMapUv:yt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(x.sheenRoughnessMap.channel),specularMapUv:St&&_(x.specularMap.channel),specularColorMapUv:Ht&&_(x.specularColorMap.channel),specularIntensityMapUv:Zt&&_(x.specularIntensityMap.channel),transmissionMapUv:jt&&_(x.transmissionMap.channel),thicknessMapUv:X&&_(x.thicknessMap.channel),alphaMapUv:dt&&_(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Q||M),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(it||dt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&Q===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:N,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||z)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)E.push(F),E.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(E,x),A(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function A(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function C(x){let E=m[x.type],F;if(E){let H=kn[E];F=Ru.clone(H.uniforms)}else F=x.uniforms;return F}function y(x,E){let F=u.get(E);return F!==void 0?++F.usedTimes:(F=new b_(s,E,x,r),h.push(F),u.set(E,F)),F}function w(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function L(){l.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:C,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:L}}function E_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function i(o){s.delete(o)}function r(o,l,c){s.get(o)[l]=c}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:a}}function C_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ju(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $u(){let s=[],t=0,e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,_,S,g,p){let A=s[t];return A===void 0?(A={id:f.id,object:f,geometry:m,material:_,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:p},s[t]=A):(A.id=f.id,A.object=f,A.geometry=m,A.material=_,A.materialVariant=o(f),A.groupOrder=S,A.renderOrder=f.renderOrder,A.z=g,A.group=p),t++,A}function c(f,m,_,S,g,p,A){A.reversedDepth===!0&&(g=-g);let C=l(f,m,_,S,g,p);_.transmission>0?i.push(C):_.transparent===!0?r.push(C):e.push(C)}function h(f,m,_,S,g,p){let A=l(f,m,_,S,g,p);_.transmission>0?i.unshift(A):_.transparent===!0?r.unshift(A):e.unshift(A)}function u(f,m){e.length>1&&e.sort(f||C_),i.length>1&&i.sort(m||Ju),r.length>1&&r.sort(m||Ju)}function d(){for(let f=t,m=s.length;f<m;f++){let _=s[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:c,unshift:h,finish:d,sort:u}}function R_(){let s=new WeakMap;function t(i,r){let a=s.get(i),o;return a===void 0?(o=new $u,s.set(i,[o])):r>=a.length?(o=new $u,a.push(o)):o=a[r],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function I_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Yt};break;case"SpotLight":e={position:new B,direction:new B,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function P_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var L_=0;function N_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function D_(s){let t=new I_,e=P_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);let r=new B,a=new fe,o=new fe;function l(h){let u=0,d=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,_=0,S=0,g=0,p=0,A=0,C=0,y=0,w=0,T=0,L=0,x=0,E=0,F=0;h.sort(N_);for(let k=0,K=h.length;k<K;k++){let V=h[k],$=V.color,ot=V.intensity,j=V.distance,J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Si?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=$.r*ot,d+=$.g*ot,f+=$.b*ot;else if(V.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(V.sh.coefficients[st],ot);F++}else if(V.isSunLight){let st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let at=V.shadow,ut=e.get(V);ut.shadowIntensity=at.intensity,ut.shadowBias=at.bias,ut.shadowNormalBias=at.normalBias,ut.shadowRadius=at.radius,ut.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[_]=ut,i.sunShadowMap[_]=J;let Dt=at.getViewportCount();for(let It=0;It<Dt;It++)i.sunShadowMatrix[S+It]=at.getMatrix(It),i.sunShadowCascade[S+It]=at._cascadeData[It];S+=Dt,_++}i.sun[m]=st,m++}else if(V.isDirectionalLight){let st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let at=V.shadow,ut=e.get(V);ut.shadowIntensity=at.intensity,ut.shadowBias=at.bias,ut.shadowNormalBias=at.normalBias,ut.shadowRadius=at.radius,ut.shadowMapSize=at.mapSize,i.directionalShadow[g]=ut,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=V.shadow.matrix,w++}i.directional[g]=st,g++}else if(V.isSpotLight){let st=t.get(V);st.position.setFromMatrixPosition(V.matrixWorld),st.color.copy($).multiplyScalar(ot),st.distance=j,st.coneCos=Math.cos(V.angle),st.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),st.decay=V.decay,i.spot[A]=st;let at=V.shadow;if(V.map&&(i.spotLightMap[x]=V.map,x++,at.updateMatrices(V),V.castShadow&&E++),i.spotLightMatrix[A]=at.matrix,V.castShadow){let ut=e.get(V);ut.shadowIntensity=at.intensity,ut.shadowBias=at.bias,ut.shadowNormalBias=at.normalBias,ut.shadowRadius=at.radius,ut.shadowMapSize=at.mapSize,i.spotShadow[A]=ut,i.spotShadowMap[A]=J,L++}A++}else if(V.isRectAreaLight){let st=t.get(V);st.color.copy($).multiplyScalar(ot),st.halfWidth.set(V.width*.5,0,0),st.halfHeight.set(0,V.height*.5,0),i.rectArea[C]=st,C++}else if(V.isPointLight){let st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),st.distance=V.distance,st.decay=V.decay,V.castShadow){let at=V.shadow,ut=e.get(V);ut.shadowIntensity=at.intensity,ut.shadowBias=at.bias,ut.shadowNormalBias=at.normalBias,ut.shadowRadius=at.radius,ut.shadowMapSize=at.mapSize,ut.shadowCameraNear=at.camera.near,ut.shadowCameraFar=at.camera.far,i.pointShadow[p]=ut,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=V.shadow.matrix,T++}i.point[p]=st,p++}else if(V.isHemisphereLight){let st=t.get(V);st.skyColor.copy(V.color).multiplyScalar(ot),st.groundColor.copy(V.groundColor).multiplyScalar(ot),i.hemi[y]=st,y++}}C>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let H=i.hash;(H.sunLength!==m||H.directionalLength!==g||H.pointLength!==p||H.spotLength!==A||H.rectAreaLength!==C||H.hemiLength!==y||H.numSunShadows!==_||H.numDirectionalShadows!==w||H.numPointShadows!==T||H.numSpotShadows!==L||H.numSpotMaps!==x||H.numLightProbes!==F)&&(i.sun.length=m,i.directional.length=g,i.spot.length=A,i.rectArea.length=C,i.point.length=p,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=F,H.sunLength=m,H.directionalLength=g,H.pointLength=p,H.spotLength=A,H.rectAreaLength=C,H.hemiLength=y,H.numSunShadows=_,H.numDirectionalShadows=w,H.numPointShadows=T,H.numSpotShadows=L,H.numSpotMaps=x,H.numLightProbes=F,i.version=L_++)}function c(h,u){let d=0,f=0,m=0,_=0,S=0,g=0,p=u.matrixWorldInverse;for(let A=0,C=h.length;A<C;A++){let y=h[A];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(y.isSpotLight){let w=i.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(y.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function Ku(s){let t=new D_(s),e=[],i=[],r=[];function a(f){d.camera=f,e.length=0,i.length=0,r.length=0}function o(f){e.push(f)}function l(f){i.push(f)}function c(f){r.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:h,setupLightsView:u,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function U_(s){let t=new WeakMap;function e(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Ku(s),t.set(r,[l])):a>=o.length?(l=new Ku(s),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`,B_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],z_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ju=new fe,Gr=new B,Pc=new B;function k_(s,t,e){let i=new ys,r=new pt,a=new pt,o=new ye,l=new qa,c=new Ya,h={},u=e.maxTextureSize,d={[xi]:Ue,[Ue]:xi,[sn]:sn},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:F_,fragmentShader:O_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new ve;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ge(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let p=this.type;this.render=function(T,L,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Gh&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);let E=s.getRenderTarget(),F=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Bn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=p!==this.type;K&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach($=>$.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,$=T.length;V<$;V++){let ot=T[V],j=ot.shadow;if(j===void 0){qt("WebGLShadowMap:",ot,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let J=j.getFrameExtents();r.multiply(J),a.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/J.x),r.x=a.x*J.x,j.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/J.y),r.y=a.y*J.y,j.mapSize.y=a.y));let st=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=st,j.map===null||K===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===_i){if(ot.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ye(r.x,r.y,{format:Si,type:bn,minFilter:De,magFilter:De,generateMipmaps:!1}),j.map.texture.name=ot.name+".shadowMap",j.map.depthTexture=new di(r.x,r.y,cn),j.map.depthTexture.name=ot.name+".shadowMapDepth",j.map.depthTexture.format=In,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Le,j.map.depthTexture.magFilter=Le}else ot.isPointLight?(j.map=new jo(r.x),j.map.depthTexture=new Ba(r.x,Sn)):(j.map=new Ye(r.x,r.y),j.map.depthTexture=new di(r.x,r.y,Sn)),j.map.depthTexture.name=ot.name+".shadowMap",j.map.depthTexture.format=In,this.type===Pr?(j.map.depthTexture.compareFunction=st?Jo:Zo,j.map.depthTexture.minFilter=De,j.map.depthTexture.magFilter=De):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Le,j.map.depthTexture.magFilter=Le);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);let at=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ot.isPointLight!==!0&&j.updateMatrices(ot,x);for(let ut=0;ut<at;ut++){let Dt=j.getCamera(ut);if(ot.isPointLight){let It=j.camera,Kt=j.matrix,$t=ot.distance||It.far;$t!==It.far&&(It.far=$t,It.updateProjectionMatrix()),Gr.setFromMatrixPosition(ot.matrixWorld),It.position.copy(Gr),Pc.copy(It.position),Pc.add(B_[ut]),It.up.copy(z_[ut]),It.lookAt(Pc),It.updateMatrixWorld(),Kt.makeTranslation(-Gr.x,-Gr.y,-Gr.z),ju.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ju,It.coordinateSystem,It.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,ut),s.clear();else{ut===0&&(s.setRenderTarget(j.map),s.clear());let It=j.getViewport(ut);o.set(a.x*It.x,a.y*It.y,a.x*It.z,a.y*It.w),k.viewport(o)}i=j.getFrustum(ut),y(L,x,Dt,ot,this.type)}j.isPointLightShadow!==!0&&this.type===_i&&A(j,x),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,F,H)};function A(T,L){let x=t.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ye(r.x,r.y,{format:Si,type:bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(L,null,x,f,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(L,null,x,m,S,null)}function C(T,L,x,E){let F=null,H=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)F=H;else if(F=x.isPointLight===!0?c:l,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=F.uuid,K=L.uuid,V=h[k];V===void 0&&(V={},h[k]=V);let $=V[K];$===void 0&&($=F.clone(),V[K]=$,L.addEventListener("dispose",w)),F=$}if(F.visible=L.visible,F.wireframe=L.wireframe,E===_i?F.side=L.shadowSide!==null?L.shadowSide:L.side:F.side=L.shadowSide!==null?L.shadowSide:d[L.side],F.alphaMap=L.alphaMap,F.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,F.map=L.map,F.clipShadows=L.clipShadows,F.clippingPlanes=L.clippingPlanes,F.clipIntersection=L.clipIntersection,F.displacementMap=L.displacementMap,F.displacementScale=L.displacementScale,F.displacementBias=L.displacementBias,F.wireframeLinewidth=L.wireframeLinewidth,F.linewidth=L.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let k=s.properties.get(F);k.light=x}return F}function y(T,L,x,E,F){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===_i)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let K=t.update(T),V=T.material;if(Array.isArray(V)){let $=K.groups;for(let ot=0,j=$.length;ot<j;ot++){let J=$[ot],st=V[J.materialIndex];if(st&&st.visible){let at=C(T,st,E,F);T.onBeforeShadow(s,T,L,x,K,at,J),s.renderBufferDirect(x,null,K,at,T,J),T.onAfterShadow(s,T,L,x,K,at,J)}}}else if(V.visible){let $=C(T,V,E,F);T.onBeforeShadow(s,T,L,x,K,$,null),s.renderBufferDirect(x,null,K,$,T,null),T.onAfterShadow(s,T,L,x,K,$,null)}}let k=T.children;for(let K=0,V=k.length;K<V;K++)y(k[K],L,x,E,F)}function w(T){T.target.removeEventListener("dispose",w);for(let x in h){let E=h[x],F=T.target.uuid;F in E&&(E[F].dispose(),delete E[F])}}}function V_(s,t){function e(){let X=!1,Tt=new ye,dt=null,wt=new ye(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!X&&(s.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){X=Pt},setClear:function(Pt,_t,Wt,kt,pe){pe===!0&&(Pt*=kt,_t*=kt,Wt*=kt),Tt.set(Pt,_t,Wt,kt),wt.equals(Tt)===!1&&(s.clearColor(Pt,_t,Wt,kt),wt.copy(Tt))},reset:function(){X=!1,dt=null,wt.set(-1,0,0,0)}}}function i(){let X=!1,Tt=!1,dt=null,wt=null,Pt=null;return{setReversed:function(_t){if(Tt!==_t){let Wt=t.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;let kt=Pt;Pt=null,this.setClear(kt)}},getReversed:function(){return Tt},setTest:function(_t){_t?D(s.DEPTH_TEST):N(s.DEPTH_TEST)},setMask:function(_t){dt!==_t&&!X&&(s.depthMask(_t),dt=_t)},setFunc:function(_t){if(Tt&&(_t=bu[_t]),wt!==_t){switch(_t){case Ea:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case Ia:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case La:s.depthFunc(s.GREATER);break;case Na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Pt!==_t&&(Pt=_t,Tt&&(_t=1-_t),s.clearDepth(_t))},reset:function(){X=!1,dt=null,wt=null,Pt=null,Tt=!1}}}function r(){let X=!1,Tt=null,dt=null,wt=null,Pt=null,_t=null,Wt=null,kt=null,pe=null;return{setTest:function(le){X||(le?D(s.STENCIL_TEST):N(s.STENCIL_TEST))},setMask:function(le){Tt!==le&&!X&&(s.stencilMask(le),Tt=le)},setFunc:function(le,pn,An){(dt!==le||wt!==pn||Pt!==An)&&(s.stencilFunc(le,pn,An),dt=le,wt=pn,Pt=An)},setOp:function(le,pn,An){(_t!==le||Wt!==pn||kt!==An)&&(s.stencilOp(le,pn,An),_t=le,Wt=pn,kt=An)},setLocked:function(le){X=le},setClear:function(le){pe!==le&&(s.clearStencil(le),pe=le)},reset:function(){X=!1,Tt=null,dt=null,wt=null,Pt=null,_t=null,Wt=null,kt=null,pe=null}}}let a=new e,o=new i,l=new r,c=new WeakMap,h=new WeakMap,u={},d={},f={},m=new WeakMap,_=[],S=null,g=!1,p=null,A=null,C=null,y=null,w=null,T=null,L=null,x=new Yt(0,0,0),E=0,F=!1,H=null,k=null,K=null,V=null,$=null,ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(st)[1]),j=J>=1):st.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),j=J>=2);let at=null,ut={},Dt=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),Kt=new ye().fromArray(Dt),$t=new ye().fromArray(It);function Qt(X,Tt,dt,wt){let Pt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(X,_t),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<dt;Wt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(Tt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return _t}let O={};O[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),O[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),O[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),D(s.DEPTH_TEST),o.setFunc(hs),Z(!1),Q(Yl),D(s.CULL_FACE),G(Bn);function D(X){u[X]!==!0&&(s.enable(X),u[X]=!0)}function N(X){u[X]!==!1&&(s.disable(X),u[X]=!1)}function P(X,Tt){return f[X]!==Tt?(s.bindFramebuffer(X,Tt),f[X]=Tt,X===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Tt),X===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function z(X,Tt){let dt=_,wt=!1;if(X){dt=m.get(Tt),dt===void 0&&(dt=[],m.set(Tt,dt));let Pt=X.textures;if(dt.length!==Pt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Wt=Pt.length;_t<Wt;_t++)dt[_t]=s.COLOR_ATTACHMENT0+_t;dt.length=Pt.length,wt=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(dt)}function it(X){return S!==X?(s.useProgram(X),S=X,!0):!1}let xt={[Bi]:s.FUNC_ADD,[Wh]:s.FUNC_SUBTRACT,[Xh]:s.FUNC_REVERSE_SUBTRACT};xt[qh]=s.MIN,xt[Yh]=s.MAX;let R={[Zh]:s.ZERO,[Jh]:s.ONE,[$h]:s.SRC_COLOR,[Kl]:s.SRC_ALPHA,[nu]:s.SRC_ALPHA_SATURATE,[tu]:s.DST_COLOR,[jh]:s.DST_ALPHA,[Kh]:s.ONE_MINUS_SRC_COLOR,[jl]:s.ONE_MINUS_SRC_ALPHA,[eu]:s.ONE_MINUS_DST_COLOR,[Qh]:s.ONE_MINUS_DST_ALPHA,[iu]:s.CONSTANT_COLOR,[su]:s.ONE_MINUS_CONSTANT_COLOR,[ru]:s.CONSTANT_ALPHA,[au]:s.ONE_MINUS_CONSTANT_ALPHA};function G(X,Tt,dt,wt,Pt,_t,Wt,kt,pe,le){if(X===Bn){g===!0&&(N(s.BLEND),g=!1);return}if(g===!1&&(D(s.BLEND),g=!0),X!==Hh){if(X!==p||le!==F){if((A!==Bi||w!==Bi)&&(s.blendEquation(s.FUNC_ADD),A=Bi,w=Bi),le)switch(X){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zl:s.blendFunc(s.ONE,s.ONE);break;case Jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",X);break}else switch(X){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jl:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",X);break}C=null,y=null,T=null,L=null,x.set(0,0,0),E=0,p=X,F=le}return}Pt=Pt||Tt,_t=_t||dt,Wt=Wt||wt,(Tt!==A||Pt!==w)&&(s.blendEquationSeparate(xt[Tt],xt[Pt]),A=Tt,w=Pt),(dt!==C||wt!==y||_t!==T||Wt!==L)&&(s.blendFuncSeparate(R[dt],R[wt],R[_t],R[Wt]),C=dt,y=wt,T=_t,L=Wt),(kt.equals(x)===!1||pe!==E)&&(s.blendColor(kt.r,kt.g,kt.b,pe),x.copy(kt),E=pe),p=X,F=!1}function U(X,Tt){X.side===sn?N(s.CULL_FACE):D(s.CULL_FACE);let dt=X.side===Ue;Tt&&(dt=!dt),Z(dt),X.blending===Es&&X.transparent===!1?G(Bn):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),a.setMask(X.colorWrite);let wt=X.stencilWrite;l.setTest(wt),wt&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),gt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?D(s.SAMPLE_ALPHA_TO_COVERAGE):N(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){H!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),H=X)}function Q(X){X!==kh?(D(s.CULL_FACE),X!==k&&(X===Yl?s.cullFace(s.BACK):X===Vh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):N(s.CULL_FACE),k=X}function ct(X){X!==K&&(j&&s.lineWidth(X),K=X)}function gt(X,Tt,dt){X?(D(s.POLYGON_OFFSET_FILL),(V!==Tt||$!==dt)&&(V=Tt,$=dt,o.getReversed()&&(Tt=-Tt),s.polygonOffset(Tt,dt))):N(s.POLYGON_OFFSET_FILL)}function mt(X){X?D(s.SCISSOR_TEST):N(s.SCISSOR_TEST)}function Y(X){X===void 0&&(X=s.TEXTURE0+ot-1),at!==X&&(s.activeTexture(X),at=X)}function M(X,Tt,dt){dt===void 0&&(at===null?dt=s.TEXTURE0+ot-1:dt=at);let wt=ut[dt];wt===void 0&&(wt={type:void 0,texture:void 0},ut[dt]=wt),(wt.type!==X||wt.texture!==Tt)&&(at!==dt&&(s.activeTexture(dt),at=dt),s.bindTexture(X,Tt||O[X]),wt.type=X,wt.texture=Tt)}function Et(){let X=ut[at];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ft(){try{s.compressedTexImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function v(){try{s.texSubImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function q(){try{s.texSubImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function tt(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function lt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function yt(){try{s.texStorage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function vt(){try{s.texStorage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function ht(){try{s.texImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function ft(){try{s.texImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function Mt(X){return d[X]!==void 0?d[X]:s.getParameter(X)}function zt(X,Tt){d[X]!==Tt&&(s.pixelStorei(X,Tt),d[X]=Tt)}function bt(X){Kt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Kt.copy(X))}function St(X){$t.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),$t.copy(X))}function Ht(X,Tt){let dt=h.get(Tt);dt===void 0&&(dt=new WeakMap,h.set(Tt,dt));let wt=dt.get(X);wt===void 0&&(wt=s.getUniformBlockIndex(Tt,X.name),dt.set(X,wt))}function Zt(X,Tt){let wt=h.get(Tt).get(X);c.get(Tt)!==wt&&(s.uniformBlockBinding(Tt,wt,X.__bindingPointIndex),c.set(Tt,wt))}function jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},at=null,ut={},f={},m=new WeakMap,_=[],S=null,g=!1,p=null,A=null,C=null,y=null,w=null,T=null,L=null,x=new Yt(0,0,0),E=0,F=!1,H=null,k=null,K=null,V=null,$=null,Kt.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:D,disable:N,bindFramebuffer:P,drawBuffers:z,useProgram:it,setBlending:G,setMaterial:U,setFlipSided:Z,setCullFace:Q,setLineWidth:ct,setPolygonOffset:gt,setScissorTest:mt,activeTexture:Y,bindTexture:M,unbindTexture:Et,compressedTexImage2D:Ft,compressedTexImage3D:I,texImage2D:ht,texImage3D:ft,pixelStorei:zt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:Zt,texStorage2D:yt,texStorage3D:vt,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:tt,compressedTexSubImage3D:lt,scissor:bt,viewport:St,reset:jt}}function G_(s,t,e,i,r,a,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,u=new WeakMap,d=new Set,f,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,v){return _?new OffscreenCanvas(I,v):rr("canvas")}function g(I,v,q){let tt=1,lt=Ft(I);if((lt.width>q||lt.height>q)&&(tt=q/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let yt=Math.floor(tt*lt.width),vt=Math.floor(tt*lt.height);f===void 0&&(f=S(yt,vt));let ht=v?S(yt,vt):f;return ht.width=yt,ht.height=vt,ht.getContext("2d").drawImage(I,0,0,yt,vt),qt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+yt+"x"+vt+")."),ht}else return"data"in I&&qt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function p(I){return I.generateMipmaps}function A(I){s.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,v,q,tt,lt,yt=!1){if(I!==null){if(s[I]!==void 0)return s[I];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;tt&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=v;if(v===s.RED&&(q===s.FLOAT&&(ht=s.R32F),q===s.HALF_FLOAT&&(ht=s.R16F),q===s.UNSIGNED_BYTE&&(ht=s.R8),q===s.UNSIGNED_SHORT&&vt&&(ht=vt.R16_EXT),q===s.SHORT&&vt&&(ht=vt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.R8UI),q===s.UNSIGNED_SHORT&&(ht=s.R16UI),q===s.UNSIGNED_INT&&(ht=s.R32UI),q===s.BYTE&&(ht=s.R8I),q===s.SHORT&&(ht=s.R16I),q===s.INT&&(ht=s.R32I)),v===s.RG&&(q===s.FLOAT&&(ht=s.RG32F),q===s.HALF_FLOAT&&(ht=s.RG16F),q===s.UNSIGNED_BYTE&&(ht=s.RG8),q===s.UNSIGNED_SHORT&&vt&&(ht=vt.RG16_EXT),q===s.SHORT&&vt&&(ht=vt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RG8UI),q===s.UNSIGNED_SHORT&&(ht=s.RG16UI),q===s.UNSIGNED_INT&&(ht=s.RG32UI),q===s.BYTE&&(ht=s.RG8I),q===s.SHORT&&(ht=s.RG16I),q===s.INT&&(ht=s.RG32I)),v===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),q===s.UNSIGNED_INT&&(ht=s.RGB32UI),q===s.BYTE&&(ht=s.RGB8I),q===s.SHORT&&(ht=s.RGB16I),q===s.INT&&(ht=s.RGB32I)),v===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),q===s.UNSIGNED_INT&&(ht=s.RGBA32UI),q===s.BYTE&&(ht=s.RGBA8I),q===s.SHORT&&(ht=s.RGBA16I),q===s.INT&&(ht=s.RGBA32I)),v===s.RGB&&(q===s.UNSIGNED_SHORT&&vt&&(ht=vt.RGB16_EXT),q===s.SHORT&&vt&&(ht=vt.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),v===s.RGBA){let ft=yt?sr:ae.getTransfer(lt);q===s.FLOAT&&(ht=s.RGBA32F),q===s.HALF_FLOAT&&(ht=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ht=ft===he?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&vt&&(ht=vt.RGBA16_EXT),q===s.SHORT&&vt&&(ht=vt.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(I,v){let q;return I?v===null||v===Sn||v===Rs?q=s.DEPTH24_STENCIL8:v===cn?q=s.DEPTH32F_STENCIL8:v===Cs&&(q=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Sn||v===Rs?q=s.DEPTH_COMPONENT24:v===cn?q=s.DEPTH_COMPONENT32F:v===Cs&&(q=s.DEPTH_COMPONENT16),q}function T(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Le&&I.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function L(I){let v=I.target;v.removeEventListener("dispose",L),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(I){let v=I.target;v.removeEventListener("dispose",x),H(v)}function E(I){let v=i.get(I);if(v.__webglInit===void 0)return;let q=I.source,tt=m.get(q);if(tt){let lt=tt[v.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&F(I),Object.keys(tt).length===0&&m.delete(q)}i.remove(I)}function F(I){let v=i.get(I);s.deleteTexture(v.__webglTexture);let q=I.source,tt=m.get(q);delete tt[v.__cacheKey],o.memory.textures--}function H(I){let v=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let lt=0;lt<v.__webglFramebuffer[tt].length;lt++)s.deleteFramebuffer(v.__webglFramebuffer[tt][lt]);else s.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[tt]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=I.textures;for(let tt=0,lt=q.length;tt<lt;tt++){let yt=i.get(q[tt]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),i.remove(q[tt])}i.remove(I)}let k=0;function K(){k=0}function V(){return k}function $(I){k=I}function ot(){let I=k;return I>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,I}function j(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function J(I,v){let q=i.get(I);if(I.isVideoTexture&&M(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let tt=I.image;if(tt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{N(q,I,v);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+v)}function st(I,v){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){N(q,I,v);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+v)}function at(I,v){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){N(q,I,v);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+v)}function ut(I,v){let q=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){P(q,I,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+v)}let Dt={[hi]:s.REPEAT,[ln]:s.CLAMP_TO_EDGE,[us]:s.MIRRORED_REPEAT},It={[Le]:s.NEAREST,[cu]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},Kt={[du]:s.NEVER,[xu]:s.ALWAYS,[pu]:s.LESS,[Zo]:s.LEQUAL,[mu]:s.EQUAL,[Jo]:s.GEQUAL,[gu]:s.GREATER,[_u]:s.NOTEQUAL};function $t(I,v){if(v.type===cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===De||v.magFilter===co||v.magFilter===Nr||v.magFilter===vi||v.minFilter===De||v.minFilter===co||v.minFilter===Nr||v.minFilter===vi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Dt[v.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Dt[v.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Dt[v.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,It[v.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,It[v.minFilter]),v.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Le||v.minFilter!==Nr&&v.minFilter!==vi||v.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(I,v){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",L));let tt=v.source,lt=m.get(tt);lt===void 0&&(lt={},m.set(tt,lt));let yt=j(v);if(yt!==I.__cacheKey){lt[yt]===void 0&&(lt[yt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),lt[yt].usedTimes++;let vt=lt[I.__cacheKey];vt!==void 0&&(lt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&F(v)),I.__cacheKey=yt,I.__webglTexture=lt[yt].texture}return q}function O(I,v,q){return Math.floor(Math.floor(I/q)/v)}function D(I,v,q,tt){let yt=I.updateRanges;if(yt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,q,tt,v.data);else{yt.sort((zt,bt)=>zt.start-bt.start);let vt=0;for(let zt=1;zt<yt.length;zt++){let bt=yt[vt],St=yt[zt],Ht=bt.start+bt.count,Zt=O(St.start,v.width,4),jt=O(bt.start,v.width,4);St.start<=Ht+1&&Zt===jt&&O(St.start+St.count-1,v.width,4)===Zt?bt.count=Math.max(bt.count,St.start+St.count-bt.start):(++vt,yt[vt]=St)}yt.length=vt+1;let ht=e.getParameter(s.UNPACK_ROW_LENGTH),ft=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let zt=0,bt=yt.length;zt<bt;zt++){let St=yt[zt],Ht=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),jt=Ht%v.width,X=Math.floor(Ht/v.width),Tt=Zt,dt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,X),e.texSubImage2D(s.TEXTURE_2D,0,jt,X,Tt,dt,q,tt,v.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ht),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function N(I,v,q){let tt=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=s.TEXTURE_3D);let lt=Qt(I,v),yt=v.source;e.bindTexture(tt,I.__webglTexture,s.TEXTURE0+q);let vt=i.get(yt);if(yt.version!==vt.__version||lt===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let dt=ae.getPrimaries(ae.workingColorSpace),wt=v.colorSpace===Qn?null:ae.getPrimaries(v.colorSpace),Pt=v.colorSpace===Qn||dt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let ft=g(v.image,!1,r.maxTextureSize);ft=Et(v,ft);let Mt=a.convert(v.format,v.colorSpace),zt=a.convert(v.type),bt=y(v.internalFormat,Mt,zt,v.normalized,v.colorSpace,v.isVideoTexture);$t(tt,v);let St,Ht=v.mipmaps,Zt=v.isVideoTexture!==!0,jt=vt.__version===void 0||lt===!0,X=yt.dataReady,Tt=T(v,ft);if(v.isDepthTexture)bt=w(v.format===Mi,v.type),jt&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,bt,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,bt,ft.width,ft.height,0,Mt,zt,null));else if(v.isDataTexture)if(Ht.length>0){Zt&&jt&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,Ht[0].width,Ht[0].height);for(let dt=0,wt=Ht.length;dt<wt;dt++)St=Ht[dt],Zt?X&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(s.TEXTURE_2D,dt,bt,St.width,St.height,0,Mt,zt,St.data);v.generateMipmaps=!1}else Zt?(jt&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,ft.width,ft.height),X&&D(v,ft,Mt,zt)):e.texImage2D(s.TEXTURE_2D,0,bt,ft.width,ft.height,0,Mt,zt,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Zt&&jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,bt,Ht[0].width,Ht[0].height,ft.depth);for(let dt=0,wt=Ht.length;dt<wt;dt++)if(St=Ht[dt],v.format!==hn)if(Mt!==null)if(Zt){if(X)if(v.layerUpdates.size>0){let Pt=vc(St.width,St.height,v.format,v.type);for(let _t of v.layerUpdates){let Wt=St.data.subarray(_t*Pt/St.data.BYTES_PER_ELEMENT,(_t+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,_t,St.width,St.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,ft.depth,Mt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,bt,St.width,St.height,ft.depth,0,St.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,ft.depth,Mt,zt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,dt,bt,St.width,St.height,ft.depth,0,Mt,zt,St.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Zt&&jt&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,Ht[0].width,Ht[0].height);for(let dt=0,wt=Ht.length;dt<wt;dt++)St=Ht[dt],v.format!==hn?Mt!==null?Zt?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,dt,bt,St.width,St.height,0,St.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(s.TEXTURE_2D,dt,bt,St.width,St.height,0,Mt,zt,St.data)}else if(v.isDataArrayTexture)if(Zt){if(jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,bt,ft.width,ft.height,ft.depth),X)if(v.layerUpdates.size>0){let dt=vc(ft.width,ft.height,v.format,v.type);for(let wt of v.layerUpdates){let Pt=ft.data.subarray(wt*dt/ft.data.BYTES_PER_ELEMENT,(wt+1)*dt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,ft.width,ft.height,1,Mt,zt,Pt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,zt,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,ft.width,ft.height,ft.depth,0,Mt,zt,ft.data);else if(v.isData3DTexture)Zt?(jt&&e.texStorage3D(s.TEXTURE_3D,Tt,bt,ft.width,ft.height,ft.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,zt,ft.data)):e.texImage3D(s.TEXTURE_3D,0,bt,ft.width,ft.height,ft.depth,0,Mt,zt,ft.data);else if(v.isFramebufferTexture){if(jt)if(Zt)e.texStorage2D(s.TEXTURE_2D,Tt,bt,ft.width,ft.height);else{let dt=ft.width,wt=ft.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(s.TEXTURE_2D,Pt,bt,dt,wt,0,Mt,zt,null),dt>>=1,wt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let dt=s.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ft.parentNode!==dt){dt.appendChild(ft),d.add(v),dt.onpaint=wt=>{let Pt=wt.changedElements;for(let _t of d)Pt.includes(_t.image)&&(_t.needsUpdate=!0)},dt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ft);else{let Pt=s.RGBA,_t=s.RGBA,Wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pt,_t,Wt,ft)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Zt&&jt){let dt=Ft(Ht[0]);e.texStorage2D(s.TEXTURE_2D,Tt,bt,dt.width,dt.height)}for(let dt=0,wt=Ht.length;dt<wt;dt++)St=Ht[dt],Zt?X&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,Mt,zt,St):e.texImage2D(s.TEXTURE_2D,dt,bt,Mt,zt,St);v.generateMipmaps=!1}else if(Zt){if(jt){let dt=Ft(ft);e.texStorage2D(s.TEXTURE_2D,Tt,bt,dt.width,dt.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,zt,ft)}else e.texImage2D(s.TEXTURE_2D,0,bt,Mt,zt,ft);p(v)&&A(tt),vt.__version=yt.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function P(I,v,q){if(v.image.length!==6)return;let tt=Qt(I,v),lt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+q);let yt=i.get(lt);if(lt.version!==yt.__version||tt===!0){e.activeTexture(s.TEXTURE0+q);let vt=ae.getPrimaries(ae.workingColorSpace),ht=v.colorSpace===Qn?null:ae.getPrimaries(v.colorSpace),ft=v.colorSpace===Qn||vt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Mt=v.isCompressedTexture||v.image[0].isCompressedTexture,zt=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!Mt&&!zt?bt[_t]=g(v.image[_t],!0,r.maxCubemapSize):bt[_t]=zt?v.image[_t].image:v.image[_t],bt[_t]=Et(v,bt[_t]);let St=bt[0],Ht=a.convert(v.format,v.colorSpace),Zt=a.convert(v.type),jt=y(v.internalFormat,Ht,Zt,v.normalized,v.colorSpace),X=v.isVideoTexture!==!0,Tt=yt.__version===void 0||tt===!0,dt=lt.dataReady,wt=T(v,St);$t(s.TEXTURE_CUBE_MAP,v);let Pt;if(Mt){X&&Tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,jt,St.width,St.height);for(let _t=0;_t<6;_t++){Pt=bt[_t].mipmaps;for(let Wt=0;Wt<Pt.length;Wt++){let kt=Pt[Wt];v.format!==hn?Ht!==null?X?dt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,kt.width,kt.height,Ht,kt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,jt,kt.width,kt.height,0,kt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,kt.width,kt.height,Ht,Zt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,jt,kt.width,kt.height,0,Ht,Zt,kt.data)}}}else{if(Pt=v.mipmaps,X&&Tt){Pt.length>0&&wt++;let _t=Ft(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(zt){X?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Ht,Zt,bt[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,jt,bt[_t].width,bt[_t].height,0,Ht,Zt,bt[_t].data);for(let Wt=0;Wt<Pt.length;Wt++){let pe=Pt[Wt].image[_t].image;X?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,pe.width,pe.height,Ht,Zt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,jt,pe.width,pe.height,0,Ht,Zt,pe.data)}}else{X?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht,Zt,bt[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,jt,Ht,Zt,bt[_t]);for(let Wt=0;Wt<Pt.length;Wt++){let kt=Pt[Wt];X?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Ht,Zt,kt.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,jt,Ht,Zt,kt.image[_t])}}}p(v)&&A(s.TEXTURE_CUBE_MAP),yt.__version=lt.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function z(I,v,q,tt,lt,yt){let vt=a.convert(q.format,q.colorSpace),ht=a.convert(q.type),ft=y(q.internalFormat,vt,ht,q.normalized,q.colorSpace),Mt=i.get(v),zt=i.get(q);if(zt.__renderTarget=v,!Mt.__hasExternalTextures){let bt=Math.max(1,v.width>>yt),St=Math.max(1,v.height>>yt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,yt,ft,bt,St,v.depth,0,vt,ht,null):e.texImage2D(lt,yt,ft,bt,St,0,vt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Y(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,lt,zt.__webglTexture,0,mt(v)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,lt,zt.__webglTexture,yt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(I,v,q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),v.depthBuffer){let tt=v.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,yt=w(v.stencilBuffer,lt),vt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Y(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(v),yt,v.width,v.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(v),yt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,yt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,I)}else{let tt=v.textures;for(let lt=0;lt<tt.length;lt++){let yt=tt[lt],vt=a.convert(yt.format,yt.colorSpace),ht=a.convert(yt.type),ft=y(yt.internalFormat,vt,ht,yt.normalized,yt.colorSpace);Y(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(v),ft,v.width,v.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(v),ft,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ft,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(I,v,q){let tt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(v.depthTexture);if(lt.__renderTarget=v,(!lt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),tt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),lt.__webglTexture===void 0){lt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),$t(s.TEXTURE_CUBE_MAP,v.depthTexture);let Mt=a.convert(v.depthTexture.format),zt=a.convert(v.depthTexture.type),bt;v.depthTexture.format===In?bt=s.DEPTH_COMPONENT24:v.depthTexture.format===Mi&&(bt=s.DEPTH24_STENCIL8);for(let St=0;St<6;St++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,bt,v.width,v.height,0,Mt,zt,null)}}else J(v.depthTexture,0);let yt=lt.__webglTexture,vt=mt(v),ht=tt?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,ft=v.depthTexture.format===Mi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===In)Y(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,ht,yt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,ft,ht,yt,0);else if(v.depthTexture.format===Mi)Y(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,ht,yt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,ft,ht,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function R(I){let v=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let tt=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){let lt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),v.__depthDisposeCallback=lt}v.__boundDepthTexture=tt}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let tt=0;tt<6;tt++)xt(v.__webglFramebuffer[tt],I,tt);else{let tt=I.texture.mipmaps;tt&&tt.length>0?xt(v.__webglFramebuffer[0],I,0):xt(v.__webglFramebuffer,I,0)}else if(q){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=s.createRenderbuffer(),it(v.__webglDepthbuffer[tt],I,!1);else{let lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=v.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,yt)}}else{let tt=I.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),it(v.__webglDepthbuffer,I,!1);else{let lt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,yt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function G(I,v,q){let tt=i.get(I);v!==void 0&&z(tt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&R(I)}function U(I){let v=I.texture,q=i.get(I),tt=i.get(v);I.addEventListener("dispose",x);let lt=I.textures,yt=I.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=v.version,o.memory.textures++),yt){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let ft=0;ft<v.mipmaps.length;ft++)q.__webglFramebuffer[ht][ft]=s.createFramebuffer()}else q.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)q.__webglFramebuffer[ht]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ht=0,ft=lt.length;ht<ft;ht++){let Mt=i.get(lt[ht]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Y(I)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<lt.length;ht++){let ft=lt[ht];q.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);let Mt=a.convert(ft.format,ft.colorSpace),zt=a.convert(ft.type),bt=y(ft.internalFormat,Mt,zt,ft.normalized,ft.colorSpace,I.isXRRenderTarget===!0),St=mt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,bt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),it(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(yt){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),$t(s.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)z(q.__webglFramebuffer[ht][ft],I,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else z(q.__webglFramebuffer[ht],I,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(v)&&A(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ht=0,ft=lt.length;ht<ft;ht++){let Mt=lt[ht],zt=i.get(Mt),bt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,zt.__webglTexture),$t(bt,Mt),z(q.__webglFramebuffer,I,Mt,s.COLOR_ATTACHMENT0+ht,bt,0),p(Mt)&&A(bt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),$t(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)z(q.__webglFramebuffer[ft],I,v,s.COLOR_ATTACHMENT0,ht,ft);else z(q.__webglFramebuffer,I,v,s.COLOR_ATTACHMENT0,ht,0);p(v)&&A(ht),e.unbindTexture()}I.depthBuffer&&R(I)}function Z(I){let v=I.textures;for(let q=0,tt=v.length;q<tt;q++){let lt=v[q];if(p(lt)){let yt=C(I),vt=i.get(lt).__webglTexture;e.bindTexture(yt,vt),A(yt),e.unbindTexture()}}}let Q=[],ct=[];function gt(I){if(I.samples>0){if(Y(I)===!1){let v=I.textures,q=I.width,tt=I.height,lt=s.COLOR_BUFFER_BIT,yt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=i.get(I),ht=v.length>1;if(ht)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let ft=I.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let zt=i.get(v[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,q,tt,0,0,q,tt,lt,s.NEAREST),c===!0&&(Q.length=0,ct.length=0,Q.push(s.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Q.push(yt),ct.push(yt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let zt=i.get(v[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let v=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function mt(I){return Math.min(r.maxSamples,I.samples)}function Y(I){let v=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function M(I){let v=o.render.frame;u.get(I)!==v&&(u.set(I,v),I.update())}function Et(I,v){let q=I.colorSpace,tt=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==ir&&q!==Qn&&(ae.getTransfer(q)===he?(tt!==hn||lt!==Ze)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",q)),v}function Ft(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ot,this.resetTextureUnits=K,this.getTextureUnits=V,this.setTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=st,this.setTexture3D=at,this.setTextureCube=ut,this.rebindTextures=G,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Y,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function H_(s,t){function e(i,r=Qn){let a,o=ae.getTransfer(r);if(i===Ze)return s.UNSIGNED_BYTE;if(i===uo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===fo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ac)return s.BYTE;if(i===oc)return s.SHORT;if(i===Cs)return s.UNSIGNED_SHORT;if(i===ho)return s.INT;if(i===Sn)return s.UNSIGNED_INT;if(i===cn)return s.FLOAT;if(i===bn)return s.HALF_FLOAT;if(i===hc)return s.ALPHA;if(i===uc)return s.RGB;if(i===hn)return s.RGBA;if(i===In)return s.DEPTH_COMPONENT;if(i===Mi)return s.DEPTH_STENCIL;if(i===po)return s.RED;if(i===mo)return s.RED_INTEGER;if(i===Si)return s.RG;if(i===go)return s.RG_INTEGER;if(i===_o)return s.RGBA_INTEGER;if(i===Dr||i===Ur||i===Fr||i===Or)if(o===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Dr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Dr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xo||i===yo||i===vo||i===Mo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===xo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===So||i===bo||i===To||i===wo||i===Ao||i===Br||i===Eo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===So||i===bo)return o===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===To)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===wo)return a.COMPRESSED_R11_EAC;if(i===Ao)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return a.COMPRESSED_RG11_EAC;if(i===Eo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Co||i===Ro||i===Io||i===Po||i===Lo||i===No||i===Do||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Vo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Co)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Io)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===No)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vo)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Ho||i===Wo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Go)return o===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xo||i===qo||i===zr||i===Yo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new en({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Pn{constructor(t,e){super();let i=this,r=null,a=1,o=null,l="local-floor",c=1,h=null,u=null,d=null,f=null,m=null,_=null,S=typeof XRWebGLBinding<"u",g=new zc,p={},A=e.getContextAttributes(),C=null,y=null,w=[],T=[],L=new pt,x=null,E=null,F=new Ce;F.viewport=new ye;let H=new Ce;H.viewport=new ye;let k=[F,H],K=new so,V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let D=w[O];return D===void 0&&(D=new _s,w[O]=D),D.getTargetRaySpace()},this.getControllerGrip=function(O){let D=w[O];return D===void 0&&(D=new _s,w[O]=D),D.getGripSpace()},this.getHand=function(O){let D=w[O];return D===void 0&&(D=new _s,w[O]=D),D.getHandSpace()};function ot(O){let D=T.indexOf(O.inputSource);if(D===-1)return;let N=w[D];N!==void 0&&(N.update(O.inputSource,O.frame,h||o),N.dispatchEvent({type:O.type,data:O.inputSource}))}function j(){r.removeEventListener("select",ot),r.removeEventListener("selectstart",ot),r.removeEventListener("selectend",ot),r.removeEventListener("squeeze",ot),r.removeEventListener("squeezestart",ot),r.removeEventListener("squeezeend",ot),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let O=0;O<w.length;O++){let D=T[O];D!==null&&(T[O]=null,w[O].disconnect(D))}V=null,$=null,g.reset();for(let O in p)delete p[O];if(t.setRenderTarget(C),m=null,f=null,d=null,r=null,y=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),E!==null){let O=E.camera;O.fov=E.fov,O.zoom=E.zoom,O.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",ot),r.addEventListener("selectstart",ot),r.addEventListener("selectend",ot),r.addEventListener("squeeze",ot),r.addEventListener("squeezestart",ot),r.addEventListener("squeezeend",ot),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),A.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,P=null,z=null;A.depth&&(z=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=A.stencil?Mi:In,P=A.stencil?Rs:Sn);let it={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(it),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ye(f.textureWidth,f.textureHeight,{format:hn,type:Ze,depthTexture:new di(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let N={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,e,N),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ye(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(O){for(let D=0;D<O.removed.length;D++){let N=O.removed[D],P=T.indexOf(N);P>=0&&(T[P]=null,w[P].disconnect(N))}for(let D=0;D<O.added.length;D++){let N=O.added[D],P=T.indexOf(N);if(P===-1){for(let it=0;it<w.length;it++)if(it>=T.length){T.push(N),P=it;break}else if(T[it]===null){T[it]=N,P=it;break}if(P===-1)break}let z=w[P];z&&z.connect(N)}}let st=new B,at=new B;function ut(O,D,N){st.setFromMatrixPosition(D.matrixWorld),at.setFromMatrixPosition(N.matrixWorld);let P=st.distanceTo(at),z=D.projectionMatrix.elements,it=N.projectionMatrix.elements,xt=z[14]/(z[10]-1),R=z[14]/(z[10]+1),G=(z[9]+1)/z[5],U=(z[9]-1)/z[5],Z=(z[8]-1)/z[0],Q=(it[8]+1)/it[0],ct=xt*Z,gt=xt*Q,mt=P/(-Z+Q),Y=mt*-Z;if(D.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Y),O.translateZ(mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),z[10]===-1)O.projectionMatrix.copy(D.projectionMatrix),O.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let M=xt+mt,Et=R+mt,Ft=ct-Y,I=gt+(P-Y),v=G*R/Et*M,q=U*R/Et*M;O.projectionMatrix.makePerspective(Ft,I,v,q,M,Et),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Dt(O,D){D===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(D.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let D=O.near,N=O.far;g.texture!==null&&(g.depthNear>0&&(D=g.depthNear),g.depthFar>0&&(N=g.depthFar)),K.near=H.near=F.near=D,K.far=H.far=F.far=N,(V!==K.near||$!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),V=K.near,$=K.far),K.layers.mask=O.layers.mask|6,F.layers.mask=K.layers.mask&-5,H.layers.mask=K.layers.mask&-3;let P=O.parent,z=K.cameras;Dt(K,P);for(let it=0;it<z.length;it++)Dt(z[it],P);z.length===2?ut(K,F,H):K.projectionMatrix.copy(F.projectionMatrix),E===null&&O.isPerspectiveCamera&&(E={camera:O,fov:O.fov,zoom:O.zoom}),It(O,K,P)};function It(O,D,N){N===null?O.matrix.copy(D.matrixWorld):(O.matrix.copy(N.matrixWorld),O.matrix.invert(),O.matrix.multiply(D.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(D.projectionMatrix),O.projectionMatrixInverse.copy(D.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ps*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(O){return p[O]};let Kt=null;function $t(O,D){if(u=D.getViewerPose(h||o),_=D,u!==null){let N=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let P=!1;N.length!==K.cameras.length&&(K.cameras.length=0,P=!0);for(let R=0;R<N.length;R++){let G=N[R],U=null;if(m!==null)U=m.getViewport(G);else{let Q=d.getViewSubImage(f,G);U=Q.viewport,R===0&&(t.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(y))}let Z=k[R];Z===void 0&&(Z=new Ce,Z.layers.enable(R),Z.viewport=new ye,k[R]=Z),Z.matrix.fromArray(G.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(G.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(U.x,U.y,U.width,U.height),R===0&&(K.matrix.copy(Z.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),P===!0&&K.cameras.push(Z)}let z=r.enabledFeatures;if(z&&z.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let R=d.getDepthInformation(N[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(z&&z.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<N.length;R++){let G=N[R].camera;if(G){let U=p[G];U||(U=new dr,p[G]=U);let Z=d.getCameraImage(G);U.sourceTexture=Z}}}}for(let N=0;N<w.length;N++){let P=T[N],z=w[N];P!==null&&z!==void 0&&z.update(P,D,h||o)}Kt&&Kt(O,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),_=null}let Qt=new Qu;Qt.setAnimationLoop($t),this.setAnimationLoop=function(O){Kt=O},this.dispose=function(){}}},q_=new fe,af=new Xt;af.set(-1,0,0,0,1,0,0,0,1);function Y_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_c(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(a(g,p),_(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),S(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,A,C):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let A=t.get(p),C=A.envMap,y=A.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(af),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,A,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=C*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let A=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z_(s,t,e,i){let r={},a={},o=[],l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let T=w.program;i.uniformBlockBinding(y,T)}function h(y,w){let T=r[y.id];T===void 0&&(g(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",A));let L=w.program;i.updateUBOMapping(y,L);let x=t.render.frame;a[y.id]!==x&&(f(y),a[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let T=s.createBuffer(),L=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,L,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,T),T}function d(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=r[y.id],T=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let x=0,E=T.length;x<E;x++){let F=T[x];if(Array.isArray(F))for(let H=0,k=F.length;H<k;H++)m(F[H],x,H,L);else m(F,x,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,w,T,L){if(S(y,w,T,L)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let F=0;for(let H=0;H<E.length;H++){let k=E[H],K=p(k);_(k,y.__data,F),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function _(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function S(y,w,T,L){let x=y.value,E=w+"_"+T;if(L[E]===void 0)return typeof x=="number"||typeof x=="boolean"?L[E]=x:ArrayBuffer.isView(x)?L[E]=x.slice():L[E]=x.clone(),!0;{let F=L[E];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return L[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function g(y){let w=y.uniforms,T=0,L=16;for(let E=0,F=w.length;E<F;E++){let H=Array.isArray(w[E])?w[E]:[w[E]];for(let k=0,K=H.length;k<K;k++){let V=H[k],$=Array.isArray(V.value)?V.value:[V.value];for(let ot=0,j=$.length;ot<j;ot++){let J=$[ot],st=p(J),at=T%L,ut=at%st.boundary,Dt=at+ut;T+=ut,Dt!==0&&L-Dt<st.storage&&(T+=L-Dt),V.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=st.storage}}}let x=T%L;return x>0&&(T+=L-x),y.__size=T,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),w}function A(y){let w=y.target;w.removeEventListener("dispose",A);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function C(){for(let y in r)s.deleteBuffer(r[y]);o=[],r={},a={}}return{bind:c,update:h,dispose:C}}var J_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function $_(){return zn===null&&(zn=new hr(J_,16,16,Si,bn),zn.name="DFG_LUT",zn.minFilter=De,zn.magFilter=De,zn.wrapS=ln,zn.wrapT=ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Ns=class{constructor(t={}){let{canvas:e=vu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Ze}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let S=m,g=new Set([_o,go,mo]),p=new Set([Ze,Sn,Cs,Rs,uo,fo]),A=new Uint32Array(4),C=new Int32Array(4),y=new B,w=null,T=null,L=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,H=!1,k=null,K=null,V=null,$=null;this._outputColorSpace=Ee;let ot=0,j=0,J=null,st=-1,at=null,ut=new ye,Dt=new ye,It=null,Kt=new Yt(0),$t=0,Qt=e.width,O=e.height,D=1,N=null,P=null,z=new ye(0,0,Qt,O),it=new ye(0,0,Qt,O),xt=!1,R=new ys,G=!1,U=!1,Z=new fe,Q=new B,ct=new ye,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Y(){return J===null?D:1}let M=i;function Et(b,W){return e.getContext(b,W)}let Ft,I,v,q,tt,lt,yt,vt,ht,ft,Mt,zt,bt,St,Ht,Zt,jt,X,Tt,dt,wt,Pt,_t;try{let b={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",pn,!1),M===null){let W="webgl2";if(M=Et(W,b),M===null)throw Et(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(b){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Jt("WebGLRenderer: "+b.message),b}function Wt(){Ft=new ig(M),Ft.init(),wt=new H_(M,Ft),I=new Y0(M,Ft,t,wt),v=new V_(M,Ft),I.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),K=M.createFramebuffer(),V=M.createFramebuffer(),$=M.createFramebuffer(),q=new ag(M),tt=new E_,lt=new G_(M,Ft,v,tt,I,wt,q),yt=new ng(F),vt=new lp(M),Pt=new X0(M,vt),ht=new sg(M,vt,q,Pt),ft=new lg(M,ht,vt,Pt,q),X=new og(M,I,lt),Ht=new Z0(tt),Mt=new A_(F,yt,Ft,I,Pt,Ht),zt=new Y_(F,tt),bt=new R_,St=new U_(Ft),jt=new W0(F,yt,v,ft,_,c),Zt=new k_(F,ft,I),_t=new Z_(M,q,I,v),Tt=new q0(M,Ft,q),dt=new rg(M,Ft,q),q.programs=Mt.programs,F.capabilities=I,F.extensions=Ft,F.properties=tt,F.renderLists=bt,F.shadowMap=Zt,F.state=v,F.info=q}S!==Ze&&(E=new hg(S,e.width,e.height,l,r,a));let kt=new kc(F,M);this.xr=kt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(Qt,O,!1))},this.getSize=function(b){return b.set(Qt,O)},this.setSize=function(b,W,rt=!0){if(kt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=b,O=W,e.width=Math.floor(b*D),e.height=Math.floor(W*D),rt===!0&&(e.style.width=b+"px",e.style.height=W+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(Qt*D,O*D).floor()},this.setDrawingBufferSize=function(b,W,rt){Qt=b,O=W,D=rt,e.width=Math.floor(b*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,b,W)},this.setEffects=function(b){if(S===Ze){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let W=0;W<b.length;W++)if(b[W].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ut)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,W,rt,et){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,W,rt,et),v.viewport(ut.copy(z).multiplyScalar(D).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,W,rt,et){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,W,rt,et),v.scissor(Dt.copy(it).multiplyScalar(D).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){v.setScissorTest(xt=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){P=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,rt=!0){let et=0;if(b){let nt=!1;if(J!==null){let Rt=J.texture.format;nt=g.has(Rt)}if(nt){let Rt=J.texture.type,Ut=p.has(Rt),Ct=jt.getClearColor(),Ot=jt.getClearAlpha(),Vt=Ct.r,te=Ct.g,re=Ct.b;Ut?(A[0]=Vt,A[1]=te,A[2]=re,A[3]=Ot,M.clearBufferuiv(M.COLOR,0,A)):(C[0]=Vt,C[1]=te,C[2]=re,C[3]=Ot,M.clearBufferiv(M.COLOR,0,C))}else et|=M.COLOR_BUFFER_BIT}W&&(et|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&M.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),jt.dispose(),bt.dispose(),St.dispose(),tt.dispose(),yt.dispose(),ft.dispose(),Pt.dispose(),_t.dispose(),Mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Kc),kt.removeEventListener("sessionend",jc),Ti.stop()};function pe(b){b.preventDefault(),dc("WebGLRenderer: Context Lost."),H=!0}function le(){dc("WebGLRenderer: Context Restored."),H=!1;let b=q.autoReset,W=Zt.enabled,rt=Zt.autoUpdate,et=Zt.needsUpdate,nt=Zt.type;Wt(),q.autoReset=b,Zt.enabled=W,Zt.autoUpdate=rt,Zt.needsUpdate=et,Zt.type=nt}function pn(b){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function An(b){let W=b.target;W.removeEventListener("dispose",An),Af(W)}function Af(b){Ef(b),tt.remove(b)}function Ef(b){let W=tt.get(b).programs;W!==void 0&&(W.forEach(function(rt){Mt.releaseProgram(rt)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,rt,et,nt,Rt){W===null&&(W=gt);let Ut=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Ct=If(b,W,rt,et,nt);v.setMaterial(et,Ut);let Ot=rt.index,Vt=1;if(et.wireframe===!0){if(Ot=ht.getWireframeAttribute(rt),Ot===void 0)return;Vt=2}let te=rt.drawRange,re=rt.attributes.position,Bt=te.start*Vt,ce=(te.start+te.count)*Vt;Rt!==null&&(Bt=Math.max(Bt,Rt.start*Vt),ce=Math.min(ce,(Rt.start+Rt.count)*Vt)),Ot!==null?(Bt=Math.max(Bt,0),ce=Math.min(ce,Ot.count)):re!=null&&(Bt=Math.max(Bt,0),ce=Math.min(ce,re.count));let Te=ce-Bt;if(Te<0||Te===1/0)return;Pt.setup(nt,et,Ct,rt,Ot);let _e,de=Tt;if(Ot!==null&&(_e=vt.get(Ot),de=dt,de.setIndex(_e)),nt.isMesh)et.wireframe===!0?(v.setLineWidth(et.wireframeLinewidth*Y()),de.setMode(M.LINES)):de.setMode(M.TRIANGLES);else if(nt.isLine){let Fe=et.linewidth;Fe===void 0&&(Fe=1),v.setLineWidth(Fe*Y()),nt.isLineSegments?de.setMode(M.LINES):nt.isLineLoop?de.setMode(M.LINE_LOOP):de.setMode(M.LINE_STRIP)}else nt.isPoints?de.setMode(M.POINTS):nt.isSprite&&de.setMode(M.TRIANGLES);if(nt.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))de.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Fe=nt._multiDrawStarts,Nt=nt._multiDrawCounts,Ve=nt._multiDrawCount,oe=Ot?vt.get(Ot).bytesPerElement:1,an=tt.get(et).currentProgram.getUniforms();for(let En=0;En<Ve;En++)an.setValue(M,"_gl_DrawID",En),de.render(Fe[En]/oe,Nt[En])}else if(nt.isInstancedMesh)de.renderInstances(Bt,Te,nt.count);else if(rt.isInstancedBufferGeometry){let Fe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Nt=Math.min(rt.instanceCount,Fe);de.renderInstances(Bt,Te,Nt)}else de.render(Bt,Te)};function $c(b,W,rt,et){k!==null&&b.isNodeMaterial&&k.setObject(et,b),G===!0&&Ht.setState(b,rt,!1),b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Ue,b.needsUpdate=!0,na(b,W,et),b.side=xi,b.needsUpdate=!0,na(b,W,et),b.side=sn):na(b,W,et)}this.compile=function(b,W,rt=null){rt===null&&(rt=b),k!==null&&k.renderStart(b,W,rt),T=St.get(rt),T.init(W),x.push(T),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),b!==rt&&b.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),U=this.localClippingEnabled,G=Ht.init(this.clippingPlanes,U),G===!0&&Ht.setGlobalState(this.clippingPlanes,W),k!==null&&Zt.render(T.state.shadowsArray,rt,W);let et=new Set;return b.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){let Ct=Rt[Ut];$c(Ct,rt,W,nt),et.add(Ct)}else $c(Rt,rt,W,nt),et.add(Rt)}),T=x.pop(),k!==null&&k.renderEnd(),et},this.compileAsync=function(b,W,rt=null){let et=this.compile(b,W,rt);return new Promise(nt=>{function Rt(){if(et.forEach(function(Ut){let Ot=tt.get(Ut).currentProgram;(Ot===void 0||Ot.isReady())&&et.delete(Ut)}),et.size===0){nt(b);return}setTimeout(Rt,10)}Ft.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ol=null;function Cf(b){ol&&ol(b)}function Kc(){Ti.stop()}function jc(){Ti.start()}let Ti=new Qu;Ti.setAnimationLoop(Cf),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){ol=b,kt.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},kt.addEventListener("sessionstart",Kc),kt.addEventListener("sessionend",jc),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;k!==null&&k.renderStart(b,W);let rt=kt.enabled===!0&&kt.isPresenting===!0,et=E!==null&&(J===null||rt)&&E.begin(F,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(W),W=kt.getCamera()),b.isScene===!0&&b.onBeforeRender(F,b,W,J),T=St.get(b,x.length),T.init(W),T.state.textureUnits=lt.getTextureUnits(),x.push(T),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),R.setFromProjectionMatrix(Z,yn,W.reversedDepth),U=this.localClippingEnabled,G=Ht.init(this.clippingPlanes,U),w=bt.get(b,L.length),w.init(),L.push(w),kt.enabled===!0&&kt.isPresenting===!0){let Ut=F.xr.getDepthSensingMesh();Ut!==null&&ll(Ut,W,-1/0,F.sortObjects)}ll(b,W,0,F.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),F.sortObjects===!0&&w.sort(N,P),mt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,mt&&jt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&Ht.beginShadows();let nt=T.state.shadowsArray;if(Zt.render(nt,b,W),G===!0&&Ht.endShadows(),(et&&E.hasRenderPass())===!1){let Ut=w.opaque,Ct=w.transmissive;if(T.setupLights(),W.isArrayCamera){let Ot=W.cameras;if(Ct.length>0)for(let Vt=0,te=Ot.length;Vt<te;Vt++){let re=Ot[Vt];th(Ut,Ct,b,re)}mt&&jt.render(b);for(let Vt=0,te=Ot.length;Vt<te;Vt++){let re=Ot[Vt];Qc(w,b,re,re.viewport)}}else Ct.length>0&&th(Ut,Ct,b,W),mt&&jt.render(b),Qc(w,b,W)}J!==null&&j===0&&(lt.updateMultisampleRenderTarget(J),lt.updateRenderTargetMipmap(J)),et&&E.end(F),b.isScene===!0&&b.onAfterRender(F,b,W),Pt.resetDefaultState(),st=-1,at=null,x.pop(),x.length>0?(T=x[x.length-1],lt.setTextureUnits(T.state.textureUnits),G===!0&&Ht.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,k!==null&&k.renderEnd()};function ll(b,W,rt,et){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(R)){et&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);let Ut=ft.update(b),Ct=b.material;Ct.visible&&w.push(b,Ut,Ct,rt,ct.z,null,W)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(R))){let Ut=ft.update(b),Ct=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ct.copy(Ut.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Ct)){let Ot=Ut.groups;for(let Vt=0,te=Ot.length;Vt<te;Vt++){let re=Ot[Vt],Bt=Ct[re.materialIndex];Bt&&Bt.visible&&w.push(b,Ut,Bt,rt,ct.z,re,W)}}else Ct.visible&&w.push(b,Ut,Ct,rt,ct.z,null,W)}}let Rt=b.children;for(let Ut=0,Ct=Rt.length;Ut<Ct;Ut++)ll(Rt[Ut],W,rt,et)}function Qc(b,W,rt,et){let{opaque:nt,transmissive:Rt,transparent:Ut}=b;T.setupLightsView(rt),G===!0&&Ht.setGlobalState(F.clippingPlanes,rt),et&&v.viewport(ut.copy(et)),nt.length>0&&ea(nt,W,rt),Rt.length>0&&ea(Rt,W,rt),Ut.length>0&&ea(Ut,W,rt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function th(b,W,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[et.id]===void 0){let Bt=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[et.id]=new Ye(1,1,{generateMipmaps:!0,type:Bt?bn:Ze,minFilter:vi,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Rt=T.state.transmissionRenderTarget[et.id],Ut=et.viewport||ut;Rt.setSize(Ut.z*F.transmissionResolutionScale,Ut.w*F.transmissionResolutionScale);let Ct=F.getRenderTarget(),Ot=F.getActiveCubeFace(),Vt=F.getActiveMipmapLevel();F.setRenderTarget(Rt),F.getClearColor(Kt),$t=F.getClearAlpha(),$t<1&&F.setClearColor(16777215,.5),F.clear(),mt&&jt.render(rt);let te=F.toneMapping;F.toneMapping=Mn;let re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),T.setupLightsView(et),G===!0&&Ht.setGlobalState(F.clippingPlanes,et),ea(b,rt,et),lt.updateMultisampleRenderTarget(Rt),lt.updateRenderTargetMipmap(Rt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ce=0,Te=W.length;ce<Te;ce++){let _e=W[ce],{object:de,geometry:Fe,material:Nt,group:Ve}=_e;if(Nt.side===sn&&de.layers.test(et.layers)){let oe=Nt.side;Nt.side=Ue,Nt.needsUpdate=!0,eh(de,rt,et,Fe,Nt,Ve),Nt.side=oe,Nt.needsUpdate=!0,Bt=!0}}Bt===!0&&(lt.updateMultisampleRenderTarget(Rt),lt.updateRenderTargetMipmap(Rt))}F.setRenderTarget(Ct,Ot,Vt),F.setClearColor(Kt,$t),re!==void 0&&(et.viewport=re),F.toneMapping=te}function ea(b,W,rt){let et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,Rt=b.length;nt<Rt;nt++){let Ut=b[nt],{object:Ct,geometry:Ot,group:Vt}=Ut,te=Ut.material;te.allowOverride===!0&&et!==null&&(te=et),Ct.layers.test(rt.layers)&&eh(Ct,W,rt,Ot,te,Vt)}}function eh(b,W,rt,et,nt,Rt){k!==null&&nt.isNodeMaterial&&k.setObject(b,nt),b.onBeforeRender(F,W,rt,et,nt,Rt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),nt.onBeforeRender(F,W,rt,et,b,Rt),nt.transparent===!0&&nt.side===sn&&nt.forceSinglePass===!1?(nt.side=Ue,nt.needsUpdate=!0,F.renderBufferDirect(rt,W,et,nt,b,Rt),nt.side=xi,nt.needsUpdate=!0,F.renderBufferDirect(rt,W,et,nt,b,Rt),nt.side=sn):F.renderBufferDirect(rt,W,et,nt,b,Rt),b.onAfterRender(F,W,rt,et,nt,Rt)}function na(b,W,rt){W.isScene!==!0&&(W=gt);let et=tt.get(b),nt=T.state.lights,Rt=T.state.shadowsArray,Ut=nt.state.version,Ct=Mt.getParameters(b,nt.state,Rt,W,rt,T.state.lightProbeGridArray),Ot=Mt.getProgramCacheKey(Ct),Vt=et.programs;et.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;let te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;et.envMap=yt.get(b.envMap||et.environment,te),et.envMapRotation=et.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",An),Vt=new Map,et.programs=Vt);let re=Vt.get(Ot);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===Ut)return ih(b,Ct),re}else Ct.uniforms=Mt.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,rt,Ct),b.onBeforeCompile(Ct,F),re=Mt.acquireProgram(Ct,Ot),Vt.set(Ot,re),et.uniforms=Ct.uniforms;let Bt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=Ht.uniform),ih(b,Ct),et.needsLights=Lf(b),et.lightsStateVersion=Ut,et.needsLights&&(Bt.ambientLightColor.value=nt.state.ambient,Bt.lightProbe.value=nt.state.probe,Bt.sunLights.value=nt.state.sun,Bt.sunLightShadows.value=nt.state.sunShadow,Bt.directionalLights.value=nt.state.directional,Bt.directionalLightShadows.value=nt.state.directionalShadow,Bt.spotLights.value=nt.state.spot,Bt.spotLightShadows.value=nt.state.spotShadow,Bt.rectAreaLights.value=nt.state.rectArea,Bt.ltc_1.value=nt.state.rectAreaLTC1,Bt.ltc_2.value=nt.state.rectAreaLTC2,Bt.pointLights.value=nt.state.point,Bt.pointLightShadows.value=nt.state.pointShadow,Bt.hemisphereLights.value=nt.state.hemi,Bt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Bt.sunShadowCascade.value=nt.state.sunShadowCascade,Bt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Bt.spotLightMatrix.value=nt.state.spotLightMatrix,Bt.spotLightMap.value=nt.state.spotLightMap,Bt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=T.state.lightProbeGridArray.length>0,et.currentProgram=re,et.uniformsList=null,re}function nh(b){if(b.uniformsList===null){let W=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function ih(b,W){let rt=tt.get(b);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Rf(b,W){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let rt=0,et=b.length;rt<et;rt++){let nt=b[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(y))return nt}return null}function If(b,W,rt,et,nt){W.isScene!==!0&&(W=gt),lt.resetTextureUnits();let Rt=W.fog,Ut=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Ct=J===null?F.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ae.workingColorSpace,Ot=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Vt=yt.get(et.envMap||Ut,Ot),te=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Bt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Te=!!rt.morphAttributes.color,_e=Mn;et.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_e=F.toneMapping);let de=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Fe=de!==void 0?de.length:0,Nt=tt.get(et),Ve=T.state.lights;if(G===!0&&(U===!0||b!==at)){let me=b===at&&et.id===st;Ht.setState(et,b,me)}let oe=!1;et.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ve.state.version||Nt.outputColorSpace!==Ct||nt.isBatchedMesh&&Nt.batching===!1||!nt.isBatchedMesh&&Nt.batching===!0||nt.isBatchedMesh&&Nt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Nt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Nt.instancing===!1||!nt.isInstancedMesh&&Nt.instancing===!0||nt.isSkinnedMesh&&Nt.skinning===!1||!nt.isSkinnedMesh&&Nt.skinning===!0||nt.isInstancedMesh&&Nt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Nt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Nt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Nt.instancingMorph===!1&&nt.morphTexture!==null||Nt.envMap!==Vt||et.fog===!0&&Nt.fog!==Rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Ht.numPlanes||Nt.numIntersection!==Ht.numIntersection)||Nt.vertexAlphas!==te||Nt.vertexTangents!==re||Nt.morphTargets!==Bt||Nt.morphNormals!==ce||Nt.morphColors!==Te||Nt.toneMapping!==_e||Nt.morphTargetsCount!==Fe||!!Nt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Nt.__version=et.version);let an=Nt.currentProgram;oe===!0&&(an=na(et,W,nt),k&&et.isNodeMaterial&&k.onUpdateProgram(et,an,Nt));let En=!1,ei=!1,qi=!1,ue=an.getUniforms(),Se=Nt.uniforms;if(v.useProgram(an.program)&&(En=!0,ei=!0,qi=!0),et.id!==st&&(st=et.id,ei=!0),Nt.needsLights){let me=Rf(T.state.lightProbeGridArray,nt);Nt.lightProbeGrid!==me&&(Nt.lightProbeGrid=me,ei=!0)}if(En||at!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(M,"projectionMatrix",b.projectionMatrix),ue.setValue(M,"viewMatrix",b.matrixWorldInverse);let ii=ue.map.cameraPosition;ii!==void 0&&ii.setValue(M,Q.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&ue.setValue(M,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ue.setValue(M,"isOrthographic",b.isOrthographicCamera===!0),at!==b&&(at=b,ei=!0,qi=!0)}if(Nt.needsLights&&(Ve.state.sunShadowMap.length>0&&ue.setValue(M,"sunShadowMap",Ve.state.sunShadowMap,lt),Ve.state.directionalShadowMap.length>0&&ue.setValue(M,"directionalShadowMap",Ve.state.directionalShadowMap,lt),Ve.state.spotShadowMap.length>0&&ue.setValue(M,"spotShadowMap",Ve.state.spotShadowMap,lt),Ve.state.pointShadowMap.length>0&&ue.setValue(M,"pointShadowMap",Ve.state.pointShadowMap,lt)),nt.isSkinnedMesh){ue.setOptional(M,nt,"bindMatrix"),ue.setOptional(M,nt,"bindMatrixInverse");let me=nt.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(M,"boneTexture",me.boneTexture,lt))}nt.isBatchedMesh&&(ue.setOptional(M,nt,"batchingTexture"),ue.setValue(M,"batchingTexture",nt._matricesTexture,lt),ue.setOptional(M,nt,"batchingIdTexture"),ue.setValue(M,"batchingIdTexture",nt._indirectTexture,lt),ue.setOptional(M,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ue.setValue(M,"batchingColorTexture",nt._colorsTexture,lt));let ni=rt.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&X.update(nt,rt,an),(ei||Nt.receiveShadow!==nt.receiveShadow)&&(Nt.receiveShadow=nt.receiveShadow,ue.setValue(M,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Se.envMapIntensity.value=W.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=$_()),ei){if(ue.setValue(M,"toneMappingExposure",F.toneMappingExposure),Nt.needsLights&&Pf(Se,qi),Rt&&et.fog===!0&&zt.refreshFogUniforms(Se,Rt),zt.refreshMaterialUniforms(Se,et,D,O,T.state.transmissionRenderTarget[b.id]),Nt.needsLights&&Nt.lightProbeGrid){let me=Nt.lightProbeGrid;Se.probesSH.value=me.texture,Se.probesMin.value.copy(me.boundingBox.min),Se.probesMax.value.copy(me.boundingBox.max),Se.probesResolution.value.copy(me.resolution)}Ls.upload(M,nh(Nt),Se,lt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ls.upload(M,nh(Nt),Se,lt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ue.setValue(M,"center",nt.center),ue.setValue(M,"modelViewMatrix",nt.modelViewMatrix),ue.setValue(M,"normalMatrix",nt.normalMatrix),ue.setValue(M,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let me=et.uniformsGroups;for(let ii=0,Yi=me.length;ii<Yi;ii++){let rh=me[ii];_t.update(rh,an),_t.bind(rh,an)}}return an}function Pf(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.sunLights.needsUpdate=W,b.sunLightShadows.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Lf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,W,rt){let et=tt.get(b);et.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),tt.get(b.texture).__webglTexture=W,tt.get(b.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){let rt=tt.get(b);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,rt=0){J=b,ot=W,j=rt;let et=null,nt=!1,Rt=!1;if(b){let Ct=tt.get(b);if(Ct.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(M.FRAMEBUFFER,Ct.__webglFramebuffer),ut.copy(b.viewport),Dt.copy(b.scissor),It=b.scissorTest,v.viewport(ut),v.scissor(Dt),v.setScissorTest(It),st=-1;return}else if(Ct.__webglFramebuffer===void 0)lt.setupRenderTarget(b);else if(Ct.__hasExternalTextures)lt.rebindTextures(b,tt.get(b.texture).__webglTexture,tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let te=b.depthTexture;if(Ct.__boundDepthTexture!==te){if(te!==null&&tt.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(b)}}let Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);let Vt=tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?et=Vt[W][rt]:et=Vt[W],nt=!0):b.samples>0&&lt.useMultisampledRTT(b)===!1?et=tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?et=Vt[rt]:et=Vt,ut.copy(b.viewport),Dt.copy(b.scissor),It=b.scissorTest}else ut.copy(z).multiplyScalar(D).floor(),Dt.copy(it).multiplyScalar(D).floor(),It=xt;if(rt!==0&&(et=K),v.bindFramebuffer(M.FRAMEBUFFER,et)&&v.drawBuffers(b,et),v.viewport(ut),v.scissor(Dt),v.setScissorTest(It),nt){let Ct=tt.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ct.__webglTexture,rt)}else if(Rt){let Ct=W;for(let Ot=0;Ot<b.textures.length;Ot++){let Vt=tt.get(b.textures[Ot]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ot,Vt.__webglTexture,rt,Ct)}}else if(b!==null&&rt!==0){let Ct=tt.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ct.__webglTexture,rt)}st=-1};function sh(b){let W=tt.get(b);return(W.__readFormat!==b.format||W.__readType!==b.type)&&(W.__readFormat=b.format,W.__readType=b.type,W.__formatReadable=I.textureFormatReadable(b.format),W.__typeReadable=I.textureTypeReadable(b.type)),W}this.readRenderTargetPixels=function(b,W,rt,et,nt,Rt,Ut,Ct=0){if(!(b&&b.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){v.bindFramebuffer(M.FRAMEBUFFER,Ot);try{let Vt=b.textures[Ct],te=Vt.format,re=Vt.type;b.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ct);let Bt=sh(Vt);if(Bt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-et&&rt>=0&&rt<=b.height-nt&&M.readPixels(W,rt,et,nt,wt.convert(te),wt.convert(re),Rt)}finally{let Vt=J!==null?tt.get(J).__webglFramebuffer:null;v.bindFramebuffer(M.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,W,rt,et,nt,Rt,Ut,Ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(W>=0&&W<=b.width-et&&rt>=0&&rt<=b.height-nt){v.bindFramebuffer(M.FRAMEBUFFER,Ot);let Vt=b.textures[Ct],te=Vt.format,re=Vt.type;b.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ct);let Bt=sh(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,ce),M.bufferData(M.PIXEL_PACK_BUFFER,Rt.byteLength,M.STREAM_READ),M.readPixels(W,rt,et,nt,wt.convert(te),wt.convert(re),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let Te=J!==null?tt.get(J).__webglFramebuffer:null;v.bindFramebuffer(M.FRAMEBUFFER,Te);let _e=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Su(M,_e,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,ce),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Rt),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(ce),M.deleteSync(_e),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,rt=0){let et=Math.pow(2,-rt),nt=Math.floor(b.image.width*et),Rt=Math.floor(b.image.height*et),Ut=W!==null?W.x:0,Ct=W!==null?W.y:0;lt.setTexture2D(b,0),M.copyTexSubImage2D(M.TEXTURE_2D,rt,0,0,Ut,Ct,nt,Rt),v.unbindTexture()},this.copyTextureToTexture=function(b,W,rt=null,et=null,nt=0,Rt=0){let Ut,Ct,Ot,Vt,te,re,Bt,ce,Te,_e=b.isCompressedTexture?b.mipmaps[Rt]:b.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Ct=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,te=rt.min.y,re=rt.isBox3?rt.min.z:0;else{let Se=Math.pow(2,-nt);Ut=Math.floor(_e.width*Se),Ct=Math.floor(_e.height*Se),b.isDataArrayTexture?Ot=_e.depth:b.isData3DTexture?Ot=Math.floor(_e.depth*Se):Ot=1,Vt=0,te=0,re=0}et!==null?(Bt=et.x,ce=et.y,Te=et.z):(Bt=0,ce=0,Te=0);let de=wt.convert(W.format),Fe=wt.convert(W.type),Nt;W.isData3DTexture?(lt.setTexture3D(W,0),Nt=M.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(lt.setTexture2DArray(W,0),Nt=M.TEXTURE_2D_ARRAY):(lt.setTexture2D(W,0),Nt=M.TEXTURE_2D),v.activeTexture(M.TEXTURE0),v.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,W.flipY),v.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),v.pixelStorei(M.UNPACK_ALIGNMENT,W.unpackAlignment);let Ve=v.getParameter(M.UNPACK_ROW_LENGTH),oe=v.getParameter(M.UNPACK_IMAGE_HEIGHT),an=v.getParameter(M.UNPACK_SKIP_PIXELS),En=v.getParameter(M.UNPACK_SKIP_ROWS),ei=v.getParameter(M.UNPACK_SKIP_IMAGES);v.pixelStorei(M.UNPACK_ROW_LENGTH,_e.width),v.pixelStorei(M.UNPACK_IMAGE_HEIGHT,_e.height),v.pixelStorei(M.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(M.UNPACK_SKIP_ROWS,te),v.pixelStorei(M.UNPACK_SKIP_IMAGES,re);let qi=b.isDataArrayTexture||b.isData3DTexture,ue=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){let Se=tt.get(b),ni=tt.get(W),me=tt.get(Se.__renderTarget),ii=tt.get(ni.__renderTarget);v.bindFramebuffer(M.READ_FRAMEBUFFER,me.__webglFramebuffer),v.bindFramebuffer(M.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Yi=0;Yi<Ot;Yi++)qi&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,tt.get(b).__webglTexture,nt,re+Yi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,Rt,Te+Yi)),M.blitFramebuffer(Vt,te,Ut,Ct,Bt,ce,Ut,Ct,M.DEPTH_BUFFER_BIT,M.NEAREST);v.bindFramebuffer(M.READ_FRAMEBUFFER,null),v.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(nt!==0||b.isRenderTargetTexture||tt.has(b)){let Se=tt.get(b),ni=tt.get(W);v.bindFramebuffer(M.READ_FRAMEBUFFER,V),v.bindFramebuffer(M.DRAW_FRAMEBUFFER,$);for(let me=0;me<Ot;me++)qi?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Se.__webglTexture,nt,re+me):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Se.__webglTexture,nt),ue?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ni.__webglTexture,Rt,Te+me):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ni.__webglTexture,Rt),nt!==0?M.blitFramebuffer(Vt,te,Ut,Ct,Bt,ce,Ut,Ct,M.COLOR_BUFFER_BIT,M.NEAREST):ue?M.copyTexSubImage3D(Nt,Rt,Bt,ce,Te+me,Vt,te,Ut,Ct):M.copyTexSubImage2D(Nt,Rt,Bt,ce,Vt,te,Ut,Ct);v.bindFramebuffer(M.READ_FRAMEBUFFER,null),v.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?M.texSubImage3D(Nt,Rt,Bt,ce,Te,Ut,Ct,Ot,de,Fe,_e.data):W.isCompressedArrayTexture?M.compressedTexSubImage3D(Nt,Rt,Bt,ce,Te,Ut,Ct,Ot,de,_e.data):M.texSubImage3D(Nt,Rt,Bt,ce,Te,Ut,Ct,Ot,de,Fe,_e):b.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Rt,Bt,ce,Ut,Ct,de,Fe,_e.data):b.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Rt,Bt,ce,_e.width,_e.height,de,_e.data):M.texSubImage2D(M.TEXTURE_2D,Rt,Bt,ce,Ut,Ct,de,Fe,_e);v.pixelStorei(M.UNPACK_ROW_LENGTH,Ve),v.pixelStorei(M.UNPACK_IMAGE_HEIGHT,oe),v.pixelStorei(M.UNPACK_SKIP_PIXELS,an),v.pixelStorei(M.UNPACK_SKIP_ROWS,En),v.pixelStorei(M.UNPACK_SKIP_IMAGES,ei),Rt===0&&W.generateMipmaps&&M.generateMipmap(Nt),v.unbindTexture()},this.initRenderTarget=function(b){tt.get(b).__webglFramebuffer===void 0&&lt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?lt.setTextureCube(b,0):b.isData3DTexture?lt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?lt.setTexture2DArray(b,0):lt.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){ot=0,j=0,J=null,v.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Wr=new B;function un(s,t,e,i,r,a){let o=2*Math.PI*r/4,l=Math.max(a-2*r,0),c=Math.PI/4;Wr.copy(t),Wr[i]=0,Wr.normalize();let h=.5*o/(o+l),u=1-Wr.angleTo(s)/c;return Math.sign(Wr[e])===1?u*h:l/(o+l)+h+h*(1-u)}var Us=class s extends Un{constructor(t=1,e=1,i=1,r=2,a=.1){let o=r*2+1;if(a=Math.min(t/2,e/2,i/2,a),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:a},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new B,h=new B,u=new B(t,e,i).divideScalar(2).subScalar(a),d=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,_=d.length/6,S=new B,g=.5/o;for(let p=0,A=0;p<d.length;p+=3,A+=2)switch(c.fromArray(d,p),h.copy(c),h.x-=Math.sign(h.x)*g,h.y-=Math.sign(h.y)*g,h.z-=Math.sign(h.z)*g,h.normalize(),d[p+0]=u.x*Math.sign(c.x)+h.x*a,d[p+1]=u.y*Math.sign(c.y)+h.y*a,d[p+2]=u.z*Math.sign(c.z)+h.z*a,f[p+0]=h.x,f[p+1]=h.y,f[p+2]=h.z,Math.floor(p/_)){case 0:S.set(1,0,0),m[A+0]=un(S,h,"z","y",a,i),m[A+1]=1-un(S,h,"y","z",a,e);break;case 1:S.set(-1,0,0),m[A+0]=1-un(S,h,"z","y",a,i),m[A+1]=1-un(S,h,"y","z",a,e);break;case 2:S.set(0,1,0),m[A+0]=1-un(S,h,"x","z",a,t),m[A+1]=un(S,h,"z","x",a,i);break;case 3:S.set(0,-1,0),m[A+0]=1-un(S,h,"x","z",a,t),m[A+1]=1-un(S,h,"z","x",a,i);break;case 4:S.set(0,0,1),m[A+0]=1-un(S,h,"x","y",a,t),m[A+1]=1-un(S,h,"y","x",a,e);break;case 5:S.set(0,0,-1),m[A+0]=un(S,h,"x","y",a,t),m[A+1]=1-un(S,h,"y","x",a,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Os=class extends Jn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Un;t.deleteAttribute("uv");let e=new Di({side:Ue}),i=new Di,r=new Rr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let a=new ge(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new ur(t,i,6),l=new Ne;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),o.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),o.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),o.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),o.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),o.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),o.setMatrixAt(5,l.matrix),this.add(o);let c=new ge(t,Fs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new ge(t,Fs(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new ge(t,Fs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ge(t,Fs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new ge(t,Fs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new ge(t,Fs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Fs(s){return new Tr({color:0,emissive:16777215,emissiveIntensity:s})}function Xr(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),r=new Set(Object.keys(s[0].morphAttributes)),a={},o={},l=s[0].morphTargetsRelative,c=new ve,h=0;for(let u=0;u<s.length;++u){let d=s[u],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,m,u),h+=m}}if(e){let u=0,d=[];for(let f=0;f<s.length;++f){let m=s[f].index;for(let _=0;_<m.count;++_)d.push(m.getX(_)+u);u+=s[f].attributes.position.count}c.setIndex(d)}for(let u in a){let d=of(a[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){let m=[];for(let S=0;S<o[u].length;++S)m.push(o[u][S][f]);let _=of(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}}return c}function of(s){let t,e,i,r=-1,a=0;for(let h=0;h<s.length;++h){let u=s[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*e}let o=new t(a),l=new We(o,e,i),c=0;for(let h=0;h<s.length;++h){let u=s[h];if(u.isInterleavedBufferAttribute){let d=c/e;for(let f=0,m=u.count;f<m;f++)for(let _=0;_<e;_++){let S=u.getComponent(f,_);l.setComponent(f+d,_,S)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(l.gpuType=r),l}var qr=Ee,el=class s extends Fi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,r){let a=this,o=new Ar(a.manager);o.setPath(a.path),o.setRequestHeader(a.requestHeader),o.setWithCredentials(a.withCredentials),o.load(t,function(l){try{e(a.parse(l))}catch(c){r?r(c):console.error(c),a.manager.itemError(t)}},i,r)}parse(t){let e=this;function i(D,N){if(D.nodeType!==1)return;D.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let P=w(D),z=!1,it=null;switch(D.nodeName){case"svg":N=S(D,N);break;case"style":a(D);break;case"g":N=S(D,N);break;case"path":N=S(D,N),D.hasAttribute("d")&&(it=r(D));break;case"rect":N=S(D,N),it=c(D);break;case"polygon":N=S(D,N),it=h(D);break;case"polyline":N=S(D,N),it=u(D);break;case"circle":N=S(D,N),it=d(D);break;case"ellipse":N=S(D,N),it=f(D);break;case"line":N=S(D,N),it=m(D);break;case"defs":z=!0;break;case"use":N=S(D,N);let G=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),U=D.viewportElement.getElementById(G);U?i(U,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+G);break;default:}if(it){N.fill!==void 0&&N.fill!=="none"&&!N.fill.startsWith("url")&&it.color.setStyle(N.fill,qr),x(it,$t),$.push(it);let R=Object.assign({},N);R.strokeWidth=N.strokeWidth*K($t),it.userData={node:D,style:R,transform:$t.clone(),gradients:j}}let xt=D.childNodes;for(let R=0;R<xt.length;R++){let G=xt[R];z&&G.nodeName!=="style"&&G.nodeName!=="defs"||i(G,N)}P&&(J.pop(),J.length>0?$t.copy(J[J.length-1]):$t.identity())}function r(D){let N=new vn,P=new pt,z=new pt,it=new pt,xt=!0,R=!1,G=D.getAttribute("d");if(G===""||G==="none")return null;let U=G.match(/[a-df-z][^a-df-z]*/ig);for(let Z=0,Q=U.length;Z<Q;Z++){let ct=U[Z],gt=ct.charAt(0),mt=ct.slice(1).trim();xt===!0&&(R=!0,xt=!1);let Y;switch(gt){case"M":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2)P.x=Y[M+0],P.y=Y[M+1],z.x=P.x,z.y=P.y,M===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),M===0&&it.copy(P);break;case"H":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M++)P.x=Y[M],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"V":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M++)P.y=Y[M],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"L":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2)P.x=Y[M+0],P.y=Y[M+1],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"C":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=6)N.bezierCurveTo(Y[M+0],Y[M+1],Y[M+2],Y[M+3],Y[M+4],Y[M+5]),z.x=Y[M+2],z.y=Y[M+3],P.x=Y[M+4],P.y=Y[M+5],M===0&&R===!0&&it.copy(P);break;case"S":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=4)N.bezierCurveTo(g(P.x,z.x),g(P.y,z.y),Y[M+0],Y[M+1],Y[M+2],Y[M+3]),z.x=Y[M+0],z.y=Y[M+1],P.x=Y[M+2],P.y=Y[M+3],M===0&&R===!0&&it.copy(P);break;case"Q":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=4)N.quadraticCurveTo(Y[M+0],Y[M+1],Y[M+2],Y[M+3]),z.x=Y[M+0],z.y=Y[M+1],P.x=Y[M+2],P.y=Y[M+3],M===0&&R===!0&&it.copy(P);break;case"T":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2){let Ft=g(P.x,z.x),I=g(P.y,z.y);N.quadraticCurveTo(Ft,I,Y[M+0],Y[M+1]),z.x=Ft,z.y=I,P.x=Y[M+0],P.y=Y[M+1],M===0&&R===!0&&it.copy(P)}break;case"A":Y=p(mt,[3,4],7);for(let M=0,Et=Y.length;M<Et;M+=7){if(Y[M+5]==P.x&&Y[M+6]==P.y)continue;let Ft=P.clone();P.x=Y[M+5],P.y=Y[M+6],z.x=P.x,z.y=P.y,o(N,Y[M],Y[M+1],Y[M+2],Y[M+3],Y[M+4],Ft,P),M===0&&R===!0&&it.copy(P)}break;case"m":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2)P.x+=Y[M+0],P.y+=Y[M+1],z.x=P.x,z.y=P.y,M===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),M===0&&it.copy(P);break;case"h":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M++)P.x+=Y[M],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"v":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M++)P.y+=Y[M],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"l":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2)P.x+=Y[M+0],P.y+=Y[M+1],z.x=P.x,z.y=P.y,N.lineTo(P.x,P.y),M===0&&R===!0&&it.copy(P);break;case"c":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=6)N.bezierCurveTo(P.x+Y[M+0],P.y+Y[M+1],P.x+Y[M+2],P.y+Y[M+3],P.x+Y[M+4],P.y+Y[M+5]),z.x=P.x+Y[M+2],z.y=P.y+Y[M+3],P.x+=Y[M+4],P.y+=Y[M+5],M===0&&R===!0&&it.copy(P);break;case"s":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=4)N.bezierCurveTo(g(P.x,z.x),g(P.y,z.y),P.x+Y[M+0],P.y+Y[M+1],P.x+Y[M+2],P.y+Y[M+3]),z.x=P.x+Y[M+0],z.y=P.y+Y[M+1],P.x+=Y[M+2],P.y+=Y[M+3],M===0&&R===!0&&it.copy(P);break;case"q":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=4)N.quadraticCurveTo(P.x+Y[M+0],P.y+Y[M+1],P.x+Y[M+2],P.y+Y[M+3]),z.x=P.x+Y[M+0],z.y=P.y+Y[M+1],P.x+=Y[M+2],P.y+=Y[M+3],M===0&&R===!0&&it.copy(P);break;case"t":Y=p(mt);for(let M=0,Et=Y.length;M<Et;M+=2){let Ft=g(P.x,z.x),I=g(P.y,z.y);N.quadraticCurveTo(Ft,I,P.x+Y[M+0],P.y+Y[M+1]),z.x=Ft,z.y=I,P.x=P.x+Y[M+0],P.y=P.y+Y[M+1],M===0&&R===!0&&it.copy(P)}break;case"a":Y=p(mt,[3,4],7);for(let M=0,Et=Y.length;M<Et;M+=7){if(Y[M+5]==0&&Y[M+6]==0)continue;let Ft=P.clone();P.x+=Y[M+5],P.y+=Y[M+6],z.x=P.x,z.y=P.y,o(N,Y[M],Y[M+1],Y[M+2],Y[M+3],Y[M+4],Ft,P),M===0&&R===!0&&it.copy(P)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(P.copy(it),N.currentPath.currentPoint.copy(P),xt=!0);break;default:console.warn(ct)}R=!1}return N}function a(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let N=0;N<D.sheet.cssRules.length;N++){let P=D.sheet.cssRules[N];if(P.type!==1)continue;let z=P.selectorText.split(/,/gm).filter(Boolean).map(it=>it.trim());for(let it=0;it<z.length;it++){let xt=Object.fromEntries(Object.entries(P.style).filter(([,R])=>R!==""));ot[z[it]]=Object.assign(ot[z[it]]||{},xt)}}}function o(D,N,P,z,it,xt,R,G){if(N==0||P==0){D.lineTo(G.x,G.y);return}z=z*Math.PI/180,N=Math.abs(N),P=Math.abs(P);let U=(R.x-G.x)/2,Z=(R.y-G.y)/2,Q=Math.cos(z)*U+Math.sin(z)*Z,ct=-Math.sin(z)*U+Math.cos(z)*Z,gt=N*N,mt=P*P,Y=Q*Q,M=ct*ct,Et=Y/gt+M/mt;if(Et>1){let ft=Math.sqrt(Et);N=ft*N,P=ft*P,gt=N*N,mt=P*P}let Ft=gt*M+mt*Y,I=(gt*mt-Ft)/Ft,v=Math.sqrt(Math.max(0,I));it===xt&&(v=-v);let q=v*N*ct/P,tt=-v*P*Q/N,lt=Math.cos(z)*q-Math.sin(z)*tt+(R.x+G.x)/2,yt=Math.sin(z)*q+Math.cos(z)*tt+(R.y+G.y)/2,vt=l(1,0,(Q-q)/N,(ct-tt)/P),ht=l((Q-q)/N,(ct-tt)/P,(-Q-q)/N,(-ct-tt)/P)%(Math.PI*2);D.currentPath.absellipse(lt,yt,N,P,vt,vt+ht,xt===0,z)}function l(D,N,P,z){let it=D*P+N*z,xt=Math.sqrt(D*D+N*N)*Math.sqrt(P*P+z*z),R=Math.acos(Math.max(-1,Math.min(1,it/xt)));return D*z-N*P<0&&(R=-R),R}function c(D){let N=y(D.getAttribute("x")||0),P=y(D.getAttribute("y")||0),z=y(D.getAttribute("rx")||D.getAttribute("ry")||0),it=y(D.getAttribute("ry")||D.getAttribute("rx")||0),xt=y(D.getAttribute("width")),R=y(D.getAttribute("height")),G=1-.551915024494,U=new vn;return U.moveTo(N+z,P),U.lineTo(N+xt-z,P),(z!==0||it!==0)&&U.bezierCurveTo(N+xt-z*G,P,N+xt,P+it*G,N+xt,P+it),U.lineTo(N+xt,P+R-it),(z!==0||it!==0)&&U.bezierCurveTo(N+xt,P+R-it*G,N+xt-z*G,P+R,N+xt-z,P+R),U.lineTo(N+z,P+R),(z!==0||it!==0)&&U.bezierCurveTo(N+z*G,P+R,N,P+R-it*G,N,P+R-it),U.lineTo(N,P+it),(z!==0||it!==0)&&U.bezierCurveTo(N,P+it*G,N+z*G,P,N+z,P),U}function h(D){function N(xt,R,G){let U=y(R),Z=y(G);it===0?z.moveTo(U,Z):z.lineTo(U,Z),it++}let P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,z=new vn,it=0;return D.getAttribute("points").replace(P,N),z.currentPath.autoClose=!0,z}function u(D){function N(xt,R,G){let U=y(R),Z=y(G);it===0?z.moveTo(U,Z):z.lineTo(U,Z),it++}let P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,z=new vn,it=0;return D.getAttribute("points").replace(P,N),z.currentPath.autoClose=!1,z}function d(D){let N=y(D.getAttribute("cx")||0),P=y(D.getAttribute("cy")||0),z=y(D.getAttribute("r")||0),it=new Fn;it.absarc(N,P,z,0,Math.PI*2);let xt=new vn;return xt.subPaths.push(it),xt}function f(D){let N=y(D.getAttribute("cx")||0),P=y(D.getAttribute("cy")||0),z=y(D.getAttribute("rx")||0),it=y(D.getAttribute("ry")||0),xt=new Fn;xt.absellipse(N,P,z,it,0,Math.PI*2);let R=new vn;return R.subPaths.push(xt),R}function m(D){let N=y(D.getAttribute("x1")||0),P=y(D.getAttribute("y1")||0),z=y(D.getAttribute("x2")||0),it=y(D.getAttribute("y2")||0),xt=new vn;return xt.moveTo(N,P),xt.lineTo(z,it),xt.currentPath.autoClose=!1,xt}function _(D){let N="http://www.w3.org/1999/xlink",P=D.querySelectorAll("linearGradient, radialGradient"),z=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],it={};for(let R of P){let G=R.getAttribute("id");if(!G)continue;let U={type:R.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},Z=R.getAttributeNS(N,"href")||R.getAttribute("href")||"";Z.startsWith("#")&&(U.href=Z.substring(1));for(let ct of z)R.hasAttribute(ct)&&(U.attrs[ct]=R.getAttribute(ct));let Q=R.querySelectorAll("stop");if(Q.length>0){U.stops=[];for(let ct of Q){let gt=ct.getAttribute("stop-color");!gt&&ct.style&&(gt=ct.style["stop-color"]),gt||(gt="#000");let mt=ct.getAttribute("stop-opacity");(mt===null||mt==="")&&ct.style&&(mt=ct.style["stop-opacity"]),mt=mt===null||mt===""||mt===void 0?1:Math.max(0,Math.min(1,parseFloat(mt)));let Y=Math.max(0,Math.min(1,parseFloat(ct.getAttribute("offset")||"0")));U.stops.push({offset:Y,color:gt,opacity:mt})}}it[G]=U}function xt(R,G){let U=it[R];if(!U||G.has(R))return U;if(G.add(R),U.href&&it[U.href]){let Z=xt(U.href,G);if(Z){U.stops||(U.stops=Z.stops);for(let Q in Z.attrs)Q in U.attrs||(U.attrs[Q]=Z.attrs[Q])}}return U}for(let R in it)xt(R,new Set);for(let R in it){let ct=function(gt){return typeof gt!="string"?0:gt.endsWith("%")?parseFloat(gt)/100:y(gt)},G=it[R],U=G.attrs,Z=U.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",Q={type:G.type,gradientUnits:Z,spreadMethod:U.spreadMethod==="reflect"||U.spreadMethod==="repeat"?U.spreadMethod:"pad",gradientTransform:null,stops:(G.stops||[]).slice().sort((gt,mt)=>gt.offset-mt.offset)};if(U.gradientTransform&&(Q.gradientTransform=new Xt,L(U.gradientTransform,Q.gradientTransform)),G.type==="linearGradient")Q.x1=U.x1!==void 0?ct(U.x1):0,Q.y1=U.y1!==void 0?ct(U.y1):0,Q.x2=U.x2!==void 0?ct(U.x2):Z==="objectBoundingBox"?1:0,Q.y2=U.y2!==void 0?ct(U.y2):0;else{let gt=Z==="objectBoundingBox"?.5:0,mt=Z==="objectBoundingBox"?.5:0;Q.cx=U.cx!==void 0?ct(U.cx):gt,Q.cy=U.cy!==void 0?ct(U.cy):gt,Q.r=U.r!==void 0?ct(U.r):mt,Q.fx=U.fx!==void 0?ct(U.fx):Q.cx,Q.fy=U.fy!==void 0?ct(U.fy):Q.cy}j[R]=Q}}function S(D,N){N=Object.assign({},N);let P={};if(D.hasAttribute("class")){let R=D.getAttribute("class").split(/\s/).filter(Boolean).map(G=>G.trim());for(let G=0;G<R.length;G++)P=Object.assign(P,ot["."+R[G]])}D.hasAttribute("id")&&(P=Object.assign(P,ot["#"+D.getAttribute("id")]));function z(R,G,U){U===void 0&&(U=function(Q){return Q}),D.hasAttribute(R)&&(N[G]=U(D.getAttribute(R))),P[G]&&(N[G]=U(P[G])),D.style&&D.style[R]!==""&&(N[G]=U(D.style[R]))}function it(R){return Math.max(0,Math.min(1,y(R)))}function xt(R){return Math.max(0,y(R))}return z("fill","fill"),z("fill-opacity","fillOpacity",it),z("fill-rule","fillRule"),z("opacity","opacity",it),z("stroke","stroke"),z("stroke-opacity","strokeOpacity",it),z("stroke-width","strokeWidth",xt),z("stroke-linejoin","strokeLineJoin"),z("stroke-linecap","strokeLineCap"),z("stroke-miterlimit","strokeMiterLimit",xt),z("visibility","visibility"),N}function g(D,N){return D-(N-D)}function p(D,N,P){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let z={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},it=0,xt=1,R=2,G=3,U=it,Z=!0,Q="",ct="",gt=[];function mt(Ft,I,v){let q=new SyntaxError('Unexpected character "'+Ft+'" at index '+I+".");throw q.partial=v,q}function Y(){Q!==""&&(ct===""?gt.push(Number(Q)):gt.push(Number(Q)*Math.pow(10,Number(ct)))),Q="",ct=""}let M,Et=D.length;for(let Ft=0;Ft<Et;Ft++){if(M=D[Ft],Array.isArray(N)&&N.includes(gt.length%P)&&z.FLAGS.test(M)){U=xt,Q=M,Y();continue}if(U===it){if(z.WHITESPACE.test(M))continue;if(z.DIGIT.test(M)||z.SIGN.test(M)){U=xt,Q=M;continue}if(z.POINT.test(M)){U=R,Q=M;continue}z.COMMA.test(M)&&(Z&&mt(M,Ft,gt),Z=!0)}if(U===xt){if(z.DIGIT.test(M)){Q+=M;continue}if(z.POINT.test(M)){Q+=M,U=R;continue}if(z.EXP.test(M)){U=G;continue}z.SIGN.test(M)&&Q.length===1&&z.SIGN.test(Q[0])&&mt(M,Ft,gt)}if(U===R){if(z.DIGIT.test(M)){Q+=M;continue}if(z.EXP.test(M)){U=G;continue}z.POINT.test(M)&&Q[Q.length-1]==="."&&mt(M,Ft,gt)}if(U===G){if(z.DIGIT.test(M)){ct+=M;continue}if(z.SIGN.test(M)){if(ct===""){ct+=M;continue}ct.length===1&&z.SIGN.test(ct)&&mt(M,Ft,gt)}}z.WHITESPACE.test(M)?(Y(),U=it,Z=!1):z.COMMA.test(M)?(Y(),U=it,Z=!0):z.SIGN.test(M)?(Y(),U=xt,Q=M):z.POINT.test(M)?(Y(),U=R,Q=M):mt(M,Ft,gt)}return Y(),gt}let A=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(D){let N="px";if(typeof D=="string"||D instanceof String)for(let z=0,it=A.length;z<it;z++){let xt=A[z];if(D.endsWith(xt)){N=xt,D=D.substring(0,D.length-xt.length);break}}let P;return N==="px"&&e.defaultUnit!=="px"?P=C.in[e.defaultUnit]/e.defaultDPI:(P=C[N][e.defaultUnit],P<0&&(P=C[N].in*e.defaultDPI)),P*parseFloat(D)}function w(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let N=T(D);return J.length>0&&N.premultiply(J[J.length-1]),$t.copy(N),J.push(N),N}function T(D){let N=new Xt;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let P=y(D.getAttribute("x")||0),z=y(D.getAttribute("y")||0);N.makeTranslation(P,z)}return D.hasAttribute("transform")&&L(D.getAttribute("transform"),N),N}function L(D,N){let P=st,z=D.split(")");for(let it=z.length-1;it>=0;it--){let xt=z[it].trim();if(xt==="")continue;let R=xt.indexOf("("),G=xt.length;if(R>0&&R<G){let U=xt.slice(0,R),Z=p(xt.slice(R+1));switch(P.identity(),U){case"translate":if(Z.length>=1){let Q=Z[0],ct=0;Z.length>=2&&(ct=Z[1]),P.makeTranslation(Q,ct)}break;case"rotate":if(Z.length>=1){let Q=0,ct=0,gt=0;Q=Z[0]*Math.PI/180,Z.length>=3&&(ct=Z[1],gt=Z[2]),at.makeTranslation(-ct,-gt),ut.makeRotation(Q),Dt.multiplyMatrices(ut,at),at.makeTranslation(ct,gt),P.multiplyMatrices(at,Dt)}break;case"scale":if(Z.length>=1){let Q=Z[0],ct=Q;Z.length>=2&&(ct=Z[1]),P.makeScale(Q,ct)}break;case"skewX":Z.length===1&&P.set(1,Math.tan(Z[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Z.length===1&&P.set(1,0,0,Math.tan(Z[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Z.length===6&&P.set(Z[0],Z[2],Z[4],Z[1],Z[3],Z[5],0,0,1);break}N.premultiply(P)}}return N}function x(D,N){function P(R){Kt.set(R.x,R.y,1).applyMatrix3(N),R.set(Kt.x,Kt.y)}function z(R){let G=R.xRadius,U=R.yRadius,Z=Math.cos(R.aRotation),Q=Math.sin(R.aRotation),ct=new B(G*Z,G*Q,0),gt=new B(-U*Q,U*Z,0),mt=ct.applyMatrix3(N),Y=gt.applyMatrix3(N),M=st.set(mt.x,Y.x,0,mt.y,Y.y,0,0,0,1),Et=at.copy(M).invert(),v=ut.copy(Et).transpose().multiply(Et).elements,q=V(v[0],v[1],v[4]),tt=Math.sqrt(q.rt1),lt=Math.sqrt(q.rt2);if(R.xRadius=1/tt,R.yRadius=1/lt,R.aRotation=Math.atan2(q.sn,q.cs),!((R.aEndAngle-R.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let vt=at.set(tt,0,0,0,lt,0,0,0,1),ht=ut.set(q.cs,q.sn,0,-q.sn,q.cs,0,0,0,1),ft=vt.multiply(ht).multiply(M),Mt=zt=>{let{x:bt,y:St}=new B(Math.cos(zt),Math.sin(zt),0).applyMatrix3(ft);return Math.atan2(St,bt)};R.aStartAngle=Mt(R.aStartAngle),R.aEndAngle=Mt(R.aEndAngle),E(N)&&(R.aClockwise=!R.aClockwise)}}function it(R){let G=H(N),U=k(N);R.xRadius*=G,R.yRadius*=U;let Z=G>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);R.aRotation+=Z,E(N)&&(R.aStartAngle*=-1,R.aEndAngle*=-1,R.aClockwise=!R.aClockwise)}let xt=D.subPaths;for(let R=0,G=xt.length;R<G;R++){let Z=xt[R].curves;for(let Q=0;Q<Z.length;Q++){let ct=Z[Q];ct.isLineCurve?(P(ct.v1),P(ct.v2)):ct.isCubicBezierCurve?(P(ct.v0),P(ct.v1),P(ct.v2),P(ct.v3)):ct.isQuadraticBezierCurve?(P(ct.v0),P(ct.v1),P(ct.v2)):ct.isEllipseCurve&&(It.set(ct.aX,ct.aY),P(It),ct.aX=It.x,ct.aY=It.y,F(N)?z(ct):it(ct))}}}function E(D){let N=D.elements;return N[0]*N[4]-N[1]*N[3]<0}function F(D){let N=D.elements,P=N[0]*N[3]+N[1]*N[4];if(P===0)return!1;let z=H(D),it=k(D);return Math.abs(P/(z*it))>Number.EPSILON}function H(D){let N=D.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function k(D){let N=D.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function K(D){let N=D.elements,P=N[0]*N[4]-N[1]*N[3];return Math.sqrt(Math.abs(P))}function V(D,N,P){let z,it,xt,R,G,U=D+P,Z=D-P,Q=Math.sqrt(Z*Z+4*N*N);return U>0?(z=.5*(U+Q),G=1/z,it=D*G*P-N*G*N):U<0?it=.5*(U-Q):(z=.5*Q,it=-.5*Q),Z>0?xt=Z+Q:xt=Z-Q,Math.abs(xt)>2*Math.abs(N)?(G=-2*N/xt,R=1/Math.sqrt(1+G*G),xt=G*R):Math.abs(N)===0?(xt=1,R=0):(G=-.5*xt/N,xt=1/Math.sqrt(1+G*G),R=G*xt),Z>0&&(G=xt,xt=-R,R=G),{rt1:z,rt2:it,cs:xt,sn:R}}let $=[],ot={},j={},J=[],st=new Xt,at=new Xt,ut=new Xt,Dt=new Xt,It=new pt,Kt=new B,$t=new Xt,Qt=new DOMParser().parseFromString(t,"image/svg+xml");return _(Qt),i(Qt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:$,gradients:j,xml:Qt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let i=t.color,r=null,a=lf.exec(e.fill);if(a){let l=t.userData.gradients&&t.userData.gradients[a[1]];r=K_(l,t)}let o=new fi({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:sn,depthWrite:!1});return r!==null?o.map=r:o.color=i,o}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(lf.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new fi({color:new Yt().setStyle(e.stroke,qr),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:sn,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,i,r,a){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",a=a!==void 0?a:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:a}}static pointsToStroke(t,e,i,r){let a=[],o=[],l=[];if(s.pointsToStrokeWithBuffers(t,e,i,r,a,o,l)===0)return null;let c=new ve;return c.setAttribute("position",new se(a,3)),c.setAttribute("normal",new se(o,3)),c.setAttribute("uv",new se(l,2)),c}static pointsToStrokeWithBuffers(t,e,i,r,a,o,l,c){let h=new pt,u=new pt,d=new pt,f=new pt,m=new pt,_=new pt,S=new pt,g=new pt,p=new pt,A=new pt,C=new pt,y=new pt,w=new pt,T=new pt,L=new pt,x=new pt,E=new pt;i=i!==void 0?i:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,t=xt(t);let F=t.length;if(F<2)return 0;let H=t[0].equals(t[F-1]),k,K=t[0],V,$=e.strokeWidth/2,ot=1/(F-1),j=0,J,st,at,ut,Dt=!1,It=0,Kt=c*3,$t=c*2;Qt(t[0],t[1],h).multiplyScalar($),g.copy(t[0]).sub(h),p.copy(t[0]).add(h),A.copy(g),C.copy(p);for(let R=1;R<F;R++){k=t[R],R===F-1?H?V=t[1]:V=void 0:V=t[R+1];let G=h;if(Qt(K,k,G),d.copy(G).multiplyScalar($),y.copy(k).sub(d),w.copy(k).add(d),J=j+ot,st=!1,V!==void 0){Qt(k,V,u),d.copy(u).multiplyScalar($),T.copy(k).sub(d),L.copy(k).add(d),at=!0,d.subVectors(V,K),G.dot(d)<0&&(at=!1),R===1&&(Dt=at),d.subVectors(V,k),d.normalize();let U=Math.abs(G.dot(d));if(U>Number.EPSILON){let Z=$/U;d.multiplyScalar(-Z),f.subVectors(k,K),m.copy(f).setLength(Z).add(d),x.copy(m).negate();let Q=m.length(),ct=f.length();f.divideScalar(ct),_.subVectors(V,k);let gt=_.length();if(_.divideScalar(gt),f.dot(x)<ct&&_.dot(x)<gt&&(st=!0),E.copy(m).add(k),x.add(k),st){let mt=at?p:g,Y=(E.x-mt.x)*(x.y-mt.y)-(E.y-mt.y)*(x.x-mt.x);(at&&Y<0||!at&&Y>0)&&x.copy(mt)}switch(ut=!1,st?at?(L.copy(x),w.copy(x)):(T.copy(x),y.copy(x)):N(),e.strokeLineJoin){case"bevel":P(at,st,J);break;case"round":z(at,st),at?D(k,y,T,J,0):D(k,L,w,J,1);break;default:let mt=$*e.strokeMiterLimit/Q;if(mt<1)if(e.strokeLineJoin!=="miter-clip"){P(at,st,J);break}else z(at,st),at?(_.subVectors(E,y).multiplyScalar(mt).add(y),S.subVectors(E,T).multiplyScalar(mt).add(T),O(y,J,0),O(_,J,0),O(k,J,.5),O(k,J,.5),O(_,J,0),O(S,J,0),O(k,J,.5),O(S,J,0),O(T,J,0)):(_.subVectors(E,w).multiplyScalar(mt).add(w),S.subVectors(E,L).multiplyScalar(mt).add(L),O(w,J,1),O(_,J,1),O(k,J,.5),O(k,J,.5),O(_,J,1),O(S,J,1),O(k,J,.5),O(S,J,1),O(L,J,1));else st?(at?(O(p,j,1),O(g,j,0),O(E,J,0),O(p,j,1),O(E,J,0),O(x,J,1)):(O(p,j,1),O(g,j,0),O(E,J,1),O(g,j,0),O(x,J,0),O(E,J,1)),at?T.copy(E):L.copy(E)):at?(O(y,J,0),O(E,J,0),O(k,J,.5),O(k,J,.5),O(E,J,0),O(T,J,0)):(O(w,J,1),O(E,J,1),O(k,J,.5),O(k,J,.5),O(E,J,1),O(L,J,1)),ut=!0;break}}else N()}else N();!H&&R===F-1&&it(t[0],A,C,at,!0,j),j=J,K=k,g.copy(T),p.copy(L)}if(!H)it(k,y,w,at,!1,J);else if(st&&a){let R=E,G=x;Dt!==at&&(R=x,G=E),at?(ut||Dt)&&(G.toArray(a,0),G.toArray(a,9),ut&&R.toArray(a,3)):(ut||!Dt)&&(G.toArray(a,3),G.toArray(a,9),ut&&R.toArray(a,0))}if(a){let R=[new pt,new pt,new pt],G=c*3;for(let U=G;U<Kt;U+=9)R[0].set(a[U],a[U+1]),R[1].set(a[U+3],a[U+4]),R[2].set(a[U+6],a[U+7]),Rn.area(R)<0&&(a[U+3]=R[0].x,a[U+4]=R[0].y)}return It;function Qt(R,G,U){return U.subVectors(G,R),U.set(-U.y,U.x).normalize()}function O(R,G,U){a&&(a[Kt]=R.x,a[Kt+1]=R.y,a[Kt+2]=0,o&&(o[Kt]=0,o[Kt+1]=0,o[Kt+2]=1),Kt+=3,l&&(l[$t]=G,l[$t+1]=U,$t+=2)),It+=3}function D(R,G,U,Z,Q){h.copy(G).sub(R).normalize(),u.copy(U).sub(R).normalize();let ct=Math.PI,gt=h.dot(u);Math.abs(gt)<1&&(ct=Math.abs(Math.acos(gt))),ct/=i,d.copy(G);for(let mt=0,Y=i-1;mt<Y;mt++)f.copy(d).rotateAround(R,ct),O(d,Z,Q),O(f,Z,Q),O(R,Z,.5),d.copy(f);O(d,Z,Q),O(U,Z,Q),O(R,Z,.5)}function N(){O(p,j,1),O(g,j,0),O(y,J,0),O(p,j,1),O(y,J,0),O(w,J,1)}function P(R,G,U){G?R?(O(p,j,1),O(g,j,0),O(y,J,0),O(p,j,1),O(y,J,0),O(x,J,1),O(y,U,0),O(T,U,0),O(x,U,.5)):(O(p,j,1),O(g,j,0),O(w,J,1),O(g,j,0),O(x,J,0),O(w,J,1),O(w,U,1),O(x,U,0),O(L,U,1)):R?(O(y,U,0),O(T,U,0),O(k,U,.5)):(O(w,U,1),O(L,U,0),O(k,U,.5))}function z(R,G){G&&(R?(O(p,j,1),O(g,j,0),O(y,J,0),O(p,j,1),O(y,J,0),O(x,J,1),O(y,j,0),O(k,J,.5),O(x,J,1),O(k,J,.5),O(T,j,0),O(x,J,1)):(O(p,j,1),O(g,j,0),O(w,J,1),O(g,j,0),O(x,J,0),O(w,J,1),O(w,j,1),O(x,J,0),O(k,J,.5),O(k,J,.5),O(x,J,0),O(L,j,1)))}function it(R,G,U,Z,Q,ct){switch(e.strokeLineCap){case"round":Q?D(R,U,G,ct,.5):D(R,G,U,ct,.5);break;case"square":if(Q)h.subVectors(G,R),u.set(h.y,-h.x),d.addVectors(h,u).add(R),f.subVectors(u,h).add(R),Z?(d.toArray(a,3),f.toArray(a,0),f.toArray(a,9)):(d.toArray(a,3),l[7]===1?f.toArray(a,9):d.toArray(a,9),f.toArray(a,0));else{h.subVectors(U,R),u.set(h.y,-h.x),d.addVectors(h,u).add(R),f.subVectors(u,h).add(R);let gt=a.length;Z?(d.toArray(a,gt-3),f.toArray(a,gt-6),f.toArray(a,gt-12)):(f.toArray(a,gt-6),d.toArray(a,gt-3),f.toArray(a,gt-12))}break;default:break}}function xt(R){let G=!1;for(let Z=1,Q=R.length-1;Z<Q;Z++)if(R[Z].distanceTo(R[Z+1])<r){G=!0;break}if(!G)return R;let U=[];U.push(R[0]);for(let Z=1,Q=R.length-1;Z<Q;Z++)R[Z].distanceTo(R[Z+1])>=r&&U.push(R[Z]);return U.push(R[R.length-1]),U}}},lf=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function K_(s,t,e=256){if(!s||!Array.isArray(s.stops)||s.stops.length===0)return null;let i=t.userData.transform,r=s.gradientUnits==="objectBoundingBox",a=null;if(r&&(a=j_(t,i),a===null))return null;function o(d,f,m){m.set(d,f,1),s.gradientTransform&&m.applyMatrix3(s.gradientTransform),r&&m.set(a.minX+m.x*a.width,a.minY+m.y*a.height,1),i&&m.applyMatrix3(i)}let l=document.createElement("canvas"),c;if(s.type==="linearGradient"){l.width=e,l.height=1;let d=l.getContext("2d"),f=d.createLinearGradient(0,0,e,0);cf(f,s.stops),d.fillStyle=f,d.fillRect(0,0,e,1);let m=new B,_=new B;o(s.x1,s.y1,m),o(s.x2,s.y2,_);let S=_.x-m.x,g=_.y-m.y,p=S*S+g*g||1e-20,A=S/p,C=g/p,y=-(A*m.x+C*m.y);c=new Xt().set(A,C,y,0,0,.5,0,0,1)}else{let d=s.cx,f=s.cy,m=s.fx,_=s.fy,S=s.r;if(s.gradientTransform){let x=new B;x.set(d,f,1).applyMatrix3(s.gradientTransform),d=x.x,f=x.y,x.set(m,_,1).applyMatrix3(s.gradientTransform),m=x.x,_=x.y}if(r&&(d=a.minX+d*a.width,f=a.minY+f*a.height,m=a.minX+m*a.width,_=a.minY+_*a.height,S=S*Math.sqrt((a.width*a.width+a.height*a.height)/2)),S<=0)return null;l.width=e,l.height=e;let g=l.getContext("2d"),p=d-S,A=f-S,C=2*S,y=e/C;g.setTransform(y,0,0,y,-p*y,-A*y);let w=g.createRadialGradient(m,_,0,d,f,S);cf(w,s.stops),g.fillStyle=w,g.fillRect(p,A,C,C);let T=i?i.clone().invert():new Xt;c=new Xt().set(1/C,0,-p/C,0,1/C,-A/C,0,0,1).multiply(T)}let h=new Ii(l);h.colorSpace=qr,h.flipY=!1,h.matrixAutoUpdate=!1,h.matrix=c;let u=s.spreadMethod==="reflect"?us:s.spreadMethod==="repeat"?hi:ln;return h.wrapS=u,h.wrapT=u,h}function j_(s,t){let e=t?t.clone().invert():null,i=new pt,r=new As;for(let a of s.subPaths)for(let o of a.getPoints())i.copy(o),e&&i.applyMatrix3(e),r.expandByPoint(i);return r.isEmpty()?null:{minX:r.min.x,minY:r.min.y,width:r.max.x-r.min.x,height:r.max.y-r.min.y}}function cf(s,t){let e=new Yt;for(let i of t){let r=i.color;if(i.opacity<1){e.setStyle(i.color,qr);let a=/rgb\(([^)]+)\)/.exec(e.getStyle(qr));a&&(r=`rgba(${a[1]},${i.opacity})`)}s.addColorStop(Math.max(0,Math.min(1,i.offset)),r)}}var Yr=[{x:0,z:-2.08,yaw:0},{x:-2.55,z:0,yaw:Math.PI/2},{x:2.55,z:0,yaw:-Math.PI/2},{x:0,z:2.08,yaw:Math.PI}],hf=.96,Zr=1.46;var Q_=Object.freeze([{name:"\xD6zg\xFCn renkler",hex:null},{name:"Turkuaz",hex:"#137d84"},{name:"Mercan",hex:"#bb535f"},{name:"Alt\u0131n",hex:"#aa7416"},{name:"Mavi",hex:"#426bc1"},{name:"Pembe",hex:"#a04994"},{name:"Ye\u015Fil",hex:"#4d8056"},{name:"Gri",hex:"#6c7286"}]),uf=Object.freeze(["#ad86df","#8c54c7","#eb8b53","#43bea8","#edb32a","#55c7e8"]),wM=Object.freeze({face:1,color:0});function ff(s,t){return Q_[t]?.hex||uf[s]||uf[0]}var AM=Object.freeze([{id:"none",name:"Aksesuars\u0131z",price:0},{id:"glasses",name:"G\xF6zl\xFCk",price:0},{id:"bow",name:"Papyon",price:0},{id:"cap",name:"\u015Eapka",price:20},{id:"crown",name:"Ta\xE7",price:30}]);var Gc=new Map,Hc=new Map;function wn(s,t){return Gc.has(s)||Gc.set(s,t()),Gc.get(s)}function Gt(s,t=.4,e=0,i={}){let r=JSON.stringify([s,t,e,i]);return Hc.has(r)||Hc.set(r,new Ui({color:s,roughness:t,metalness:e,clearcoat:.24,clearcoatRoughness:.24,...i})),Hc.get(r)}function be(s,t,e=[0,0,0]){let i=new He;return i.name=t,i.position.set(...e),s.add(i),i}function $e(s,t,e,i=[0,0,0],r=[1,1,1]){let a=new ge(t,e);return a.position.set(...i),a.scale.set(...r),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function Lt(s,t,e,i){let r=Math.max(...i),a=r<.05?[12,8]:r<.18?[20,14]:[32,22];return $e(s,wn("sphere:"+a,()=>new Ni(1,...a)),t,e,i)}function ks(s,t,e,i,r=.07){return $e(s,wn("rounded:"+i+":"+r,()=>new Us(...i,5,r)),t,e)}function Tn(s,t,e,i=.022){return $e(s,wn("tube:"+e.flat()+":"+i,()=>new bs(new $n(e.map(r=>new B(...r))),32,i,10,!1)),t)}function Vs(s,t,e,i,r=.018){return $e(s,wn("torus:"+i+":"+r,()=>new Sr(i,r,12,48)),t,e)}function ti(s,t,e,i){let r="tapered:"+e.flat()+":"+i,a=wn(r,()=>{let o=new $n(e.map(m=>new B(...m))),l=40,c=14,h=o.computeFrenetFrames(l,!1),u=[],d=[];for(let m=0;m<=l;m++){let _=m/l,S=o.getPoint(_),g=_*(i.length-1),p=Math.min(i.length-2,Math.floor(g)),A=mc.lerp(i[p],i[p+1],g-p);for(let C=0;C<=c;C++){let y=C/c*Math.PI*2,w=h.normals[m].clone().multiplyScalar(Math.cos(y)*A).addScaledVector(h.binormals[m],Math.sin(y)*A);u.push(S.x+w.x,S.y+w.y,S.z+w.z)}}for(let m=0;m<l;m++)for(let _=0;_<c;_++){let S=m*(c+1)+_,g=S+c+1;d.push(S,g,S+1,g,g+1,S+1)}let f=new ve;return f.setAttribute("position",new se(u,3)),f.setIndex(d),f.computeVertexNormals(),f});return $e(s,a,t)}function Je(s){return s.userData.rest={position:s.position.toArray(),rotation:[s.rotation.x,s.rotation.y,s.rotation.z],scale:s.scale.toArray()},s}function tx(s,t){return Gt(ff(s,t),s===1?.27:s===5?.2:.43,s===1?.14:0,{sheen:s===0||s===2?.35:0,sheenColor:new Yt("#ffffff"),sheenRoughness:.65})}var il=()=>Gt("#21172f",.28),qe=()=>Gt("#fff0dc",.57),df=()=>Gt("#ed9bac",.5),ex=()=>Gt("#714270",.5);function nx(s,t,e=1,i=!1){let r=be(s,"Eye",t);if(r.scale.setScalar(e),r.userData.eyeScale=e,i){let o=Gt("#6ce7ff",.18,0,{emissive:"#27bbef",emissiveIntensity:.9}),l=Vs(r,o,[0,0,.02],.103,.023);l.scale.y=1.19,Lt(r,Gt("#071426",.18),[0,0,.02],[.079,.102,.023]),Lt(r,Gt("#c1f8ff",.16,0,{emissive:"#91ecff",emissiveIntensity:.6}),[.037,.053,.055],[.018,.021,.009])}else Lt(r,il(),[0,0,0],[.16,.187,.075]),Lt(r,Gt("#fffdf8",.26),[0,0,.019],[.147,.174,.076]),Lt(r,Gt("#8a47cb",.23),[.012,-.009,.086],[.105,.127,.033]),Lt(r,Gt("#51217c",.25),[.015,-.012,.114],[.08,.102,.022]),Lt(r,il(),[.017,-.012,.133],[.056,.079,.018]),Lt(r,Gt("#ffffff",.14),[-.021,.043,.153],[.027,.03,.008]),Lt(r,Gt("#fff5ff",.15),[.049,-.055,.148],[.012,.014,.006]);let a=be(s,"ClosedEye",t);return a.scale.setScalar(e),Tn(a,i?Gt("#72e9ff",.18,0,{emissive:"#25c2fa",emissiveIntensity:.8}):il(),[[-.145,.005,.105],[0,-.025,.145],[.145,.005,.105]],i?.018:.014),a.visible=!1,Je(r),Je(a),{eye:r,lid:a}}function Bs(s,t,e=1,i=ex()){return[-1,1].map(r=>{let a=be(s,"Brow"+r,[t[0]+r*.2*e,t[1],t[2]]);return Tn(a,i,[[-.1*e,-.01,0],[0,.03*e,.018],[.095*e,-.005,0]],.026*e),Je(a)})}function zs(s,t,e=.13,i=il(),r=!1){let a={neutral:be(s,"MouthNeutral",t),happy:be(s,"MouthHappy",t),sad:be(s,"MouthSad",t)};if(Tn(a.neutral,i,[[-e,0,0],[0,-.045,.019],[e,.005,0]],r?.017:.012),r)Tn(a.happy,i,[[-e*1.45,.012,.01],[0,-e*.58,.025],[e*1.45,.012,.01]],.019);else{let o=e*1.45,l=wn("happy-smile:"+e,()=>{let c=new On;return c.moveTo(-o,0),c.quadraticCurveTo(0,-o*.12,o,0),c.quadraticCurveTo(o*.75,-o*.86,0,-o*.82),c.quadraticCurveTo(-o*.75,-o*.86,-o,0),new Kn(c,{depth:.01,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:18})});$e(a.happy,l,i),Lt(a.happy,Gt("#e87491",.5),[0,-o*.63,.021],[o*.5,.024,.012]),Lt(a.happy,qe(),[0,-.025,.021],[o*.64,.014,.01])}Tn(a.sad,i,[[-e,-.035,0],[0,.018,.014],[e,-.035,0]],r?.017:.013),a.happy.visible=!1,a.sad.visible=!1;for(let o of Object.values(a))Je(o);return a}function Vn(s,t,e,i,r=!1,a=!1){let o=be(s,e<0?"ArmL":"ArmR",i),l=r?qe():t;if(a){let c=Gt("#bc8052",.25,.68);Lt(o,c,[0,-.025,0],[.105,.105,.105]),ks(o,qe(),[e*.015,-.17,.045],[.19,.25,.2],.08),Vs(o,t,[0,-.265,.065],.088,.018).rotation.x=Math.PI/2,Lt(o,Gt("#343443",.29,.24),[e*.02,-.33,.08],[.12,.1,.105]);for(let h=0;h<3;h++)Lt(o,Gt("#343443",.29,.24),[e*(-.055+h*.05),-.386,.12],[.029,.04,.033])}else{Lt(o,t,[0,-.14,.035],[.095,.19,.1]),Lt(o,l,[e*.015,-.285,.07],[.125,.12,.11]),Lt(o,l,[e*.102,-.253,.1],[.043,.059,.045]);for(let c=0;c<2;c++)Tn(o,Gt(r?"#c9a992":"#88536d",.6),[[e*(-.045+c*.047),-.332,.153],[e*(-.04+c*.044),-.35,.15]],.0035)}return Je(o)}function nl(s,t,e,i=t,r=!1,a=!1){return[-1,1].map(o=>{let l=be(s,o<0?"LegL":"LegR",[o*.2,-.02,0]);Lt(l,t,[0,a?-.065:-.11,0],[.135,a?.12:.16,.13]);let c=be(l,"Knee",[0,a?-.13:-.22,0]);return Lt(c,t,[0,a?-.075:-.11,0],[.108,a?.11:.16,.115]),Lt(c,i,[0,a?-.16:-.26,.075],[.165,.115,.21]),r?(Lt(c,Gt("#353442",.32,.18),[0,-.3,.11],[.18,.075,.21]),Lt(c,Gt("#bd7e50",.28,.6),[o*.105,-.015,.045],[.035,.065,.06])):i!==t&&Lt(c,qe(),[0,-.31,.095],[.166,.05,.2]),e==="seated"&&(l.rotation.x=-Math.PI/2,c.rotation.x=Math.PI/2),Je(c),Je(l)})}function ix(){return wn("smooth-cloud",()=>{let s=[[0,.68,0,.58,.49,.34],[-.38,.9,-.035,.31,.31,.31],[-.45,.57,-.015,.27,.27,.31],[0,1.12,-.035,.35,.35,.31],[.4,.82,-.025,.32,.32,.31]],t=.11,e=(p,A,C)=>{let y=10;for(let[w,T,L,x,E,F]of s){let H=(Math.hypot((p-w)/x,(A-T)/E,(C-L)/F)-1)*Math.min(x,E,F),k=Math.max(0,Math.min(1,.5+.5*(H-y)/t));y=H*(1-k)+y*k-t*k*(1-k)}return y},i=37,r=35,a=25,o=[-.8,.12,-.43],l=[1.6/i,1.42/r,.86/a],c=new Float32Array((i+1)*(r+1)*(a+1)),h=(p,A,C)=>p+(i+1)*(A+(r+1)*C);for(let p=0;p<=a;p++)for(let A=0;A<=r;A++)for(let C=0;C<=i;C++)c[h(C,A,p)]=e(o[0]+C*l[0],o[1]+A*l[1],o[2]+p*l[2]);let u=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],d=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],f=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],m=[],_=[],S=p=>new B(e(p.x+.001,p.y,p.z)-e(p.x-.001,p.y,p.z),e(p.x,p.y+.001,p.z)-e(p.x,p.y-.001,p.z),e(p.x,p.y,p.z+.001)-e(p.x,p.y,p.z-.001)).normalize();for(let p=0;p<a;p++)for(let A=0;A<r;A++)for(let C=0;C<i;C++){let y=u.map(T=>c[h(C+T[0],A+T[1],p+T[2])]);if(y.every(T=>T>=0)||y.every(T=>T<0))continue;let w=u.map(T=>new B(o[0]+(C+T[0])*l[0],o[1]+(A+T[1])*l[1],o[2]+(p+T[2])*l[2]));for(let T of d){let L=[];for(let[k,K]of f){let V=T[k],$=T[K];y[V]<0!=y[$]<0&&L.push(w[V].clone().lerp(w[$],y[V]/(y[V]-y[$])))}if(L.length<3)continue;let x=L.reduce((k,K)=>k.add(K),new B).multiplyScalar(1/L.length),E=S(x),F=L[0].clone().sub(x).normalize(),H=new B().crossVectors(E,F);L.sort((k,K)=>Math.atan2(k.clone().sub(x).dot(H),k.clone().sub(x).dot(F))-Math.atan2(K.clone().sub(x).dot(H),K.clone().sub(x).dot(F)));for(let k=1;k<L.length-1;k++)for(let K of[L[0],L[k],L[k+1]]){m.push(K.x,K.y,K.z);let V=S(K);_.push(V.x,V.y,V.z)}}}let g=new ve;return g.setAttribute("position",new se(m,3)),g.setAttribute("normal",new se(_,3)),g})}function sx(){return wn("star",()=>{let s=Array.from({length:10},(c,h)=>{let u=Math.PI/2+h*Math.PI/5,d=h%2?.43:.61;return new B(Math.cos(u)*d,Math.sin(u)*d,0)}),t=new $n(s,!0,"catmullrom",.5),e=t.getPoints(100).slice(0,-1),i=[],r=[],a=16,o=e.length;for(let c of[1,-1])for(let h=0;h<=a;h++){let u=h/a*Math.PI/2;for(let d of e)i.push(d.x*Math.sin(u),d.y*Math.sin(u),c*.28*Math.cos(u))}for(let c=0;c<2;c++)for(let h=0;h<a;h++)for(let u=0;u<o;u++){let d=c*(a+1)*o,f=d+h*o+u,m=d+(h+1)*o+u,_=d+(h+1)*o+(u+1)%o,S=d+h*o+(u+1)%o;c?r.push(f,_,m,f,S,_):r.push(f,m,_,f,_,S)}let l=new ve;return l.setAttribute("position",new se(i,3)),l.setIndex(r),l.computeVertexNormals(),l})}function pf(s,t,e){let i=new On;i.moveTo(-.2,0),i.quadraticCurveTo(-.18,.26,0,.48),i.quadraticCurveTo(.16,.28,.22,0),i.closePath();let r=wn("catEar",()=>new Kn(i,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.035,bevelSegments:4,steps:1})),a=$e(s,r,t,[e*.35,1.2,-.09]);a.rotation.z=-e*.2;let o=$e(s,r,Gt("#e6878d",.6),[e*.35,1.245,.045],[.64,.74,.15]);o.rotation.z=-e*.2;for(let l=0;l<3;l++){let c=Lt(s,qe(),[e*(.35+.025*l),1.3+.045*l,.079],[.032,.065,.012]);c.rotation.z=e*.25}}function mf(s,t={}){let e=s.children.filter(a=>a.isMesh);if(e.length<2)return;let i=e.map(a=>{a.updateMatrix();let o=(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(a.matrix);o.deleteAttribute("uv");let l=a.material.color,c=[];for(let h=0;h<o.attributes.position.count;h++)c.push(l.r,l.g,l.b);return o.setAttribute("color",new se(c,3)),o}),r=Xr(i);i.forEach(a=>a.dispose()),r.userData.owned=!0,e.forEach(a=>s.remove(a)),$e(s,r,Gt("#ffffff",.32,.02,{vertexColors:!0,...t}))}function gf(s){for(let e of[...s.children])e.isMesh||gf(e);let t=new Map;for(let e of[...s.children])if(e.isMesh){e.updateMatrix();let i=t.get(e.material)||[];i.push(e),t.set(e.material,i)}for(let[e,i]of t){if(i.length<2)continue;let r=i.map(o=>{let l=(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix);return l.deleteAttribute("uv"),l}),a=Xr(r);r.forEach(o=>o.dispose()),a.userData.owned=!0,i.forEach(o=>s.remove(o)),$e(s,a,e)}}function Gs(s){let t=new Set,e=new Set;s.traverse(i=>{i.isMesh&&i.geometry.userData.owned&&t.add(i.geometry),i.isMesh&&i.material.userData.instanceOwned&&e.add(i.material)}),t.forEach(i=>i.dispose()),e.forEach(i=>i.dispose())}function Wc(s=0,t=0,e="seated",i="none"){s=Number.isInteger(s)&&s>=0&&s<6?s:0,t=Number.isInteger(t)&&t>=0&&t<8?t:0;let r=new He;r.name=["Pof","Robot","Cat","Cyclops","Star","Jelly"][s],r.userData.face=s;let a=tx(s,t),o=be(r,"Head"),l=be(r,"Torso"),c=[],h=[],u=[],d=[],f=[],m,_=null,S=null,g=(p,A=1,C=!1)=>{let y=nx(o,p,A,C);return c.push(y.eye),h.push(y.lid),y.eye};if(s===0){$e(o,ix(),a),g([-.205,.75,.325],1.05),g([.205,.75,.325],1.02),d.push(...Bs(o,[0,1,.31],1,Gt("#7e4fae",.47))),m=zs(o,[0,.5,.36],.13);for(let p of[-1,1])Lt(o,df(),[p*.34,.56,.3],[.085,.045,.025]);u.push(Vn(r,a,-1,[-.51,.43,.015]),Vn(r,a,1,[.51,.43,.015])),f=nl(r,a,e,a,!1,!0);for(let p of f){let A=p.getObjectByName("Knee");Lt(A,qe(),[0,-.21,.09],[.167,.052,.2])}}else if(s===1){let p=Gt("#be8159",.24,.72),A=Gt("#fff0dc",.27,.04),C=Gt("#111522",.15,.2),y=Gt("#6ce7ff",.18,0,{emissive:"#29baf1",emissiveIntensity:.85});Lt(l,A,[0,.25,0],[.36,.37,.29]),Lt(l,a,[0,.27,.255],[.26,.26,.085]),Vs(l,p,[0,.27,.32],.25,.014),Lt(l,p,[0,.64,0],[.13,.1,.13]),Lt(o,A,[0,1.02,0],[.59,.47,.42]),Lt(o,a,[0,1.02,-.13],[.605,.4,.32]),Lt(o,p,[0,1.02,.316],[.51,.365,.105]),Lt(o,C,[0,1.025,.355],[.49,.346,.105]);for(let T of[-1,1])Lt(o,p,[T*.575,1.02,-.015],[.06,.24,.245]),Lt(o,a,[T*.615,1.02,-.015],[.045,.19,.2]),Lt(o,Gt("#674084",.25,.22),[T*.647,1.02,-.015],[.024,.135,.145]);g([-.205,1.04,.447],.94,!0),g([.205,1.04,.447],.94,!0),d.push(...Bs(o,[0,1.27,.414],.84,y)),m=zs(o,[0,.846,.447],.076,y,!0),S=be(o,"Antenna",[0,1.46,-.06]),ti(S,p,[[0,0,0],[.025,.1,0],[-.02,.2,0],[-.07,.23,0]],[.035,.026,.022]),Lt(S,p,[-.075,.24,0],[.072,.072,.072]),Lt(o,a,[0,1.46,-.06],[.11,.025,.085]);let w=be(l,"ChestLight",[0,.29,.349]);for(let T=0;T<5;T++){let L=T*Math.PI*2/5,x=Lt(w,Gt("#faf1ff",.18,0,{emissive:"#b881fa",emissiveIntensity:.65}),[Math.sin(L)*.072,Math.cos(L)*.072,0],[.028,.065,.009]);x.rotation.z=-L}ks(l,p,[0,.09,.28],[.1,.025,.015],.009),u.push(Vn(r,a,-1,[-.42,.48,0],!1,!0),Vn(r,a,1,[.42,.48,0],!1,!0)),f=nl(r,A,e,a,!0)}else if(s===2){let p=Gt("#ce795c",.52),A=Gt("#663675",.65);Lt(l,a,[0,.25,0],[.34,.43,.28]),Lt(l,qe(),[0,.2,.25],[.21,.31,.065]),Lt(o,a,[0,.99,0],[.54,.46,.34]),pf(o,a,-1),pf(o,a,1);for(let w of[-1,1]){Lt(o,a,[w*.38,.82,.16],[.25,.18,.24]),Lt(o,qe(),[w*.16,.78,.292],[.235,.14,.09]);for(let T=0;T<3;T++)Tn(o,qe(),[[w*.25,.79-T*.045,.355],[w*.47,.83-T*.065,.34],[w*.64,.83-T*.077,.29]],.004)}g([-.2,1.045,.302],.94),g([.2,1.045,.302],.94),d.push(...Bs(o,[0,1.265,.28],.93,Gt("#9a513f",.58))),Lt(o,df(),[0,.845,.397],[.048,.029,.026]),m=zs(o,[0,.725,.367],.075,Gt("#8b5550",.6));for(let[w,T,L]of[[0,1.36,0],[-.14,1.34,-.16],[.14,1.34,.16]]){let x=Lt(o,p,[w,T,.2],[.035,.095,.022]);x.rotation.z=L}S=be(o,"Forelock",[0,1.42,-.03]);for(let w=0;w<3;w++)ti(S,a,[[w*.04-.04,0,0],[.04+w*.02,.05,.05],[.1+w*.01,-.01,.13]],[.07,.05,.003]);let C=new On;C.moveTo(-.28,.02),C.quadraticCurveTo(0,-.32,.28,.02),C.quadraticCurveTo(0,-.09,-.28,.02);let y=wn("scarf",()=>new Kn(C,{depth:.025,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:3,steps:1}));$e(l,y,A,[0,.63,.235]),Lt(l,Gt("#e1b258",.3,.45),[0,.51,.297],[.048,.043,.021]),_=be(r,"Tail",[.05,.07,-.19]),ti(_,a,[[0,0,0],[.38,-.08,-.06],[.6,.17,-.015],[.57,.42,.055],[.4,.43,.11]],[.1,.115,.105,.12,.055]),Lt(_,qe(),[.4,.43,.11],[.12,.115,.11]),u.push(Vn(r,a,-1,[-.33,.43,.02],!0),Vn(r,a,1,[.33,.43,.02],!0)),f=nl(r,a,e,qe())}else if(s===3){let p=Gt("#31a898",.63),A=Gt("#f0ddb0",.38),C=Gt("#e2b95e",.28,.42),y=Gt("#774765",.6);Lt(l,a,[0,.27,0],[.48,.54,.34]),Lt(o,a,[0,.76,0],[.49,.62,.35]);for(let x of[-1,1]){ti(o,A,[[x*.33,1.16,-.01],[x*.47,1.33,-.02],[x*.48,1.51,-.025],[x*.35,1.61,-.02]],[.135,.115,.085,.008]),ti(o,C,[[x*.48,1.48,-.025],[x*.47,1.55,-.025],[x*.35,1.61,-.02]],[.085,.065,.004]);for(let E=0;E<3;E++){let F=Vs(o,Gt("#cab88f",.42),[x*(.4+E*.027),1.23+E*.073,-.018],.113-E*.012,.006);F.rotation.x=Math.PI/2,F.rotation.z=x*.25}}let w=g([0,.94,.31],1.65);for(let x of w.children){let E=x.material?.color?.getHexString();E==="8a47cb"&&(x.material=Gt("#c5872c",.28)),E==="51217c"&&(x.material=Gt("#73410e",.28))}d.push(...Bs(o,[0,1.28,.265],1.13,Gt("#218d82",.51))),m=zs(o,[0,.53,.35],.18);for(let x of[-1,1])Lt(m.happy,qe(),[x*.1,.013,.041],[.039,.061,.025]),Lt(o,qe(),[x*.12,.52,.387],[.035,.05,.026]);S=be(o,"TealTuft",[0,1.35,-.08]);for(let x=0;x<3;x++)ti(S,Gt("#268c85",.43),[[x*.07-.08,0,0],[x*.07-.1,.16,0],[x*.04-.03,.19,.13]],[.07,.06,.004]);for(let x=0;x<14;x++){let E=x%2?1:-1,F=E*(.32+x%3*.035),H=.2+x%6*.125;Lt(x%2?o:l,p,[F,H,.25],[.021+x%2*.013,.018,.012])}let T=Tn(l,y,[[-.39,.03,.27],[-.12,.23,.345],[.16,.43,.32],[.42,.64,.15]],.045);Tn(l,C,[[-.38,.052,.29],[-.1,.25,.369],[.18,.45,.344],[.4,.64,.19]],.005);let L=ks(l,C,[.22,.46,.352],[.12,.11,.024],.018);L.rotation.z=-.58,ks(l,y,[.22,.46,.37],[.073,.063,.015],.012).rotation.z=-.58,ks(l,y,[-.35,.03,.28],[.28,.31,.13],.07),Tn(l,C,[[-.45,.09,.35],[-.35,.02,.36],[-.25,.09,.35]],.007),u.push(Vn(r,a,-1,[-.46,.49,.01]),Vn(r,a,1,[.46,.49,.01]));for(let x of u)for(let E=0;E<2;E++)Lt(x,qe(),[(E-.5)*.095,-.34,.153],[.034,.043,.025]);f=nl(r,a,e);for(let x of f){let E=x.getObjectByName("Knee");for(let F=0;F<3;F++)Lt(E,qe(),[(F-1)*.1,-.28,.242],[.039,.052,.025])}}else if(s===4){$e(o,sx(),a,[0,.66,0]),g([-.19,.76,.236],.86),g([.19,.76,.236],.86),d.push(...Bs(o,[0,.995,.22],.84,Gt("#956032",.5))),m=zs(o,[0,.52,.284],.106,Gt("#885235",.5));for(let p of[-1,1])Lt(o,Gt("#ed9b61",.49),[p*.325,.58,.225],[.066,.041,.02]);S=be(o,"PurpleTuft",[0,1.28,0]),ti(S,Gt("#9c5dd5",.29),[[0,0,0],[.085,.03,.015],[.13,.15,.015],[.04,.27,.005],[-.07,.29,0]],[.09,.1,.085,.055,.003]),ti(S,Gt("#bc84ed",.3),[[.03,.025,.065],[.075,.1,.072],[.04,.2,.053]],[.012,.012,.001]),u.push(Vn(r,a,-1,[-.35,.59,.015]),Vn(r,a,1,[.35,.59,.015])),f=[-1,1].map(p=>{let A=be(r,p<0?"LegL":"LegR",[p*.29,.145,.015]);return Lt(A,a,[0,-.01,0],[.115,.12,.12]),Lt(A,a,[0,-.085,.055],[.175,.115,.205]),Je(A)})}else{let p=a.clone();p.userData.instanceOwned=!0,p.roughness=.16,p.clearcoat=.95,p.clearcoatRoughness=.16,p.sheen=.25,p.sheenColor=new Yt("#d4f8ff"),p.emissive=new Yt("#143746"),p.emissiveIntensity=.16,Lt(o,p,[0,.83,-.015],[.59,.51,.39]);for(let y=0;y<9;y++){let w=y*Math.PI*2/9;Lt(o,p,[Math.cos(w)*.48,.46,Math.sin(w)*.28],[.16,.105,.15])}let A=Gt("#b1edff",.24,0,{emissive:"#81cbe2",emissiveIntensity:.09});for(let y=0;y<7;y++)Lt(o,A,[(y-3)*.148,.43,.145],[.096,.025,.1]);g([-.2,.85,.344],.92),g([.2,.85,.344],.92),d.push(...Bs(o,[0,1.09,.305],.91,Gt("#347db9",.4))),m=zs(o,[0,.61,.38],.1,Gt("#2d6e8a",.4));for(let y of[-1,1])Lt(o,Gt("#e4a7cf",.45),[y*.32,.67,.31],[.07,.036,.019]);Lt(o,p,[0,.68,.392],[.024,.018,.018]);let C=[[-.36,.1],[-.23,.25],[-.08,.31],[.09,.29],[.23,.22],[.37,.08]];for(let y=0;y<6;y++){let[w,T]=C[y],L=y<3?-1:1,x=be(r,"Tentacle"+y,[w,.47,T-.12]);ti(x,p,[[0,0,0],[L*.035,-.23,.02],[L*.11,-.49,.06],[L*.29,-.55,.1],[L*.34,-.4,.15]],[.065,.072,.078,.085,.07]),Lt(x,p,[L*.34,-.4,.15],[.086,.095,.085]),u.push(Je(x))}S=be(o,"BellGlint",[0,1.13,.3]);for(let y=0;y<5;y++)Lt(S,Gt("#b7f4ff",.18,0,{emissive:"#b7efff",emissiveIntensity:.35}),[(y-2)*.08,Math.sin(y)*.05,-Math.abs(y-2)*.03],[.008,.013,.004])}if(s===0)for(let p of f)p.position.y+=.18;for(let p of f){let A=p.getObjectByName("Knee");if(Je(p),!!A){A.updateMatrix();for(let C of[...A.children])C.isMesh&&(C.applyMatrix4(A.matrix),p.add(C))}}return s!==1&&c.forEach(p=>mf(p,{roughness:.27,clearcoat:.38})),s!==5&&u.forEach(p=>mf(p,{roughness:s===1?.31:.48,metalness:s===1?.12:0})),Je(o),Je(l),_&&Je(_),S&&Je(S),r.userData.rig={face:s,pose:e,head:o,body:s===0||s===4?null:l,eyes:c,lids:h,arms:u,legs:f,brows:d,mouth:m,tail:_,accent:S,headRest:0},r.userData.pose=e,rx(r,i),gf(r),r}var Xc=(s,t,e="none")=>Wc(s,t,"seated",e);function rx(s,t){let e=s.userData.rig,i=e.head;if(!["glasses","bow","cap","crown"].includes(t))return;i.updateMatrixWorld(!0);let r=be(i,"Accessory"),a=Gt("#f2bd50",.28,.5),o=Gt("#7250bb",.48);if(t==="glasses"){let l=e.eyes.map(c=>i.worldToLocal(c.getWorldPosition(new B)));for(let[c,h]of l.entries()){let u=e.eyes[c].userData.eyeScale||1;Vs(r,Gt("#382c4c",.3),[h.x,h.y,h.z+.18],.175*u,.018).scale.y=1.12}l.length===2&&Tn(r,a,[[l[0].x+.14,l[0].y,l[0].z+.18],[0,(l[0].y+l[1].y)/2+.04,Math.max(l[0].z,l[1].z)+.18],[l[1].x-.14,l[1].y,l[1].z+.18]],.016)}else if(t==="bow"){let l=new ze().setFromObject(i).getCenter(new B),c=i.worldToLocal(l);c.y-=.38,c.z=.39;for(let h of[-1,1])Lt(r,o,[c.x+h*.085,c.y,c.z],[.1,.065,.035]);Lt(r,a,[c.x,c.y,c.z+.02],[.04,.04,.028])}else{let l=new ze().setFromObject(i),c=i.worldToLocal(new B(0,l.max.y,0));if(e.accent&&(e.face===1||e.face===4)&&(e.accent.visible=!1),t==="cap")Lt(r,o,[0,c.y-.04,0],[.34,.17,.3]),ks(r,o,[0,c.y-.09,.22],[.65,.045,.3],.05);else{Vs(r,a,[0,c.y-.09,0],.27,.045).rotation.x=Math.PI/2;for(let h=0;h<5;h++){let u=h*Math.PI*2/5,d=wn("crown-spike",()=>new vs(.065,.23,4));$e(r,d,a,[Math.cos(u)*.25,c.y+.015,Math.sin(u)*.25]),Lt(r,Gt("#db6eab",.22),[Math.cos(u)*.25,c.y+.14,Math.sin(u)*.25],[.035,.035,.035])}}}s.userData.accessory=t}var sl=Object.freeze({hello:1.85,celebrate:2.65,sad:2.15,win:2.8,lose:2.4,angry:1.8,surprise:1.5,impact:2.2}),yf=new WeakMap,vf=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),Mf=s=>(s=vf(s),s*s*s*(s*(s*6-15)+10)),rl=(s,t,e)=>Mf((s-t)/(e-t)),rn=(s,t,e,i,r)=>rl(s,t,e)*(1-rl(s,i,r)),qc=s=>[s?.x||0,s?.y||0,s?.z||0],Yc=(s,t)=>{s?.set?s.set(...t):s&&(s.x=t[0],s.y=t[1],s.z=t[2])},ax=s=>[s.head,s.body,...s.eyes||[],...s.lids||[],...s.arms||[],...s.legs||[],...s.brows||[],s.tail,s.accent,...Object.values(s.mouth||{})].filter(Boolean);function _f(s){return{position:qc(s.position),rotation:qc(s.rotation),scale:s.scale?qc(s.scale):[1,1,1],visible:s.visible!==!1}}function ox(s){let t=s?.userData?.rig;if(!t)return null;let e={rig:t,root:_f(s),nodes:new Map(ax(t).map(i=>[i,_f(i)]))};return yf.set(s,e),e}function Sf(s){let t=yf.get(s);return t?.rig===s?.userData?.rig?t:ox(s)}function Kr(s){let t=Sf(s);if(!t)return;let e=(i,r)=>{Yc(i.position,r.position),Yc(i.rotation,r.rotation),Yc(i.scale,r.scale),i.visible=r.visible};e(s,t.root);for(let[i,r]of t.nodes)e(i,r);Zc(t.rig,"neutral");for(let i of t.rig.lids||[])i.visible=!1}function Zc(s,t){let e=s.mouth||s.mouths;if(e)for(let i of["neutral","happy","sad"])e[i]&&(e[i].visible=i===t)}function ie(s,t=0,e=0,i=0){s?.rotation&&(s.rotation.x+=t,s.rotation.y+=e,s.rotation.z+=i)}function Ke(s,t=0,e=0,i=0){s?.position&&(s.position.x+=t,s.position.y+=e,s.position.z+=i)}function fn(s,t=1,e=1,i=1){s?.scale&&(s.scale.x*=t,s.scale.y*=e,s.scale.z*=i)}function Wi(s,t,e=1){(s.brows||[]).forEach((i,r)=>{let a=r%2===0?-1:1;t==="sad"?(ie(i,0,0,-a*.18*e),Ke(i,0,.008*e,0)):t==="angry"?(ie(i,0,0,a*.3*e),Ke(i,0,-.014*e,0)):t==="happy"&&(ie(i,0,0,a*.035*e),Ke(i,0,.025*e,0))})}function $r(s,t,e=null){let i=vf(t);(s.eyes||[]).forEach((r,a)=>{if(e!==null&&a!==e)return;let o=s.lids?.[a];o?(r.visible=i<.82,o.visible=i>=.82,fn(r,1,1-i*.24,1)):fn(r,1+i*.025,Math.max(.07,1-i*.93),1)})}function Xi(s,t,e=.026,i=.062,r=.11){return rl(s,t,t+i)*(1-rl(s,t+i+e,t+i+e+r))}function Hs(s,t){if(s<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++){let[i,r]=t[e],[a,o]=t[e-1];if(s<=i)return o+(r-o)*Mf((s-a)/(i-a))}return t.at(-1)[1]}function Jr(s,t,e,i){let r=(s-t)/e;return r>0&&r<1?4*i*r*(1-r):0}function Ae(s,t,e,i=0){let r=s.arms?.[t];if(!r)return;let a=t%2===0?-1:1;ie(r,i,0,a*e)}function lx(s,t,e){let i=[5.7,6.9,7.4,5.3,6.5,6.1],r=((t+e*.73)%i[e]+i[e])%i[e],a=Xi(r,1.27,e===2?.075:.026,e===2?.095:.062,e===2?.16:.11);e===3&&(a=Math.max(a,Xi(r,1.58))),$r(s,a);let o=Math.sin(t*1.24+e*.5)*.5+.5;switch(e){case 0:fn(s.body||s.head,1+o*.003,1+o*.009,1+o*.003),Ke(s.head,0,o*.002,0),Ae(s,0,o*.008),Ae(s,1,o*.008);break;case 1:{let l=rn(r,2.1,2.7,3.7,4.4);ie(s.head,l*-.018,l*.065,0),ie(s.accent,0,l*.12,l*.025);break}case 2:{let l=rn(r,3.1,3.4,4,4.6);ie(s.tail,0,l*.17,Math.sin(r*6)*l*.055),ie(s.head,0,l*-.026,l*.025),fn(s.body,1,1+o*.006,1);break}case 3:{let l=rn(r,2.3,2.9,3.5,4.2);ie(s.head,l*-.026,l*.05,l*-.025),ie(s.accent,0,0,l*.055),fn(s.body,1,1+o*.007,1);break}case 4:{let l=rn(r,2.2,2.6,3,3.7);ie(s.accent,l*.025,0,l*-.06),ie(s.head,0,l*.025,0),fn(s.body,1,1+o*.005,1);break}case 5:Ke(s.head,0,Math.sin(t*.9)*.009,0),(s.arms||[]).forEach((l,c)=>ie(l,Math.sin(t*1.15-c*.5)*.025,0,Math.sin(t*.95-c*.7)*.027));break}}function cx(s,t,e){let i=rn(t,.04,.38,1.15,1.8),r=Hs(t,[[0,0],[.22,.035],[.52,-.055],[.95,-.025],[1.72,0]]);$r(s,Xi(t,.12)),ie(s.head,r,i*.065,0),Wi(s,"happy",i*.45);let a=Hs(t,[[0,0],[.14,-.045],[.43,1.72],[.66,1.56],[.84,1.8],[1.02,1.58],[1.2,1.72],[1.72,0],[1.85,0]]);switch(e){case 0:Ae(s,1,a,-i*.14),Ae(s,0,i*.12),ie(s.head,0,0,-i*.055),fn(s.body,1,1+i*.012,1);break;case 1:Ae(s,1,a*.9,-i*.22),Ae(s,0,i*.07),ie(s.accent,0,0,Hs(t,[[0,0],[.5,-.1],[.85,.04],[1.25,0]]));break;case 2:Ae(s,1,a*.63,-i*.32),Ae(s,0,i*.07),ie(s.head,0,0,i*.085),ie(s.tail,0,Math.sin(t*5)*i*.2,i*.06),$r(s,Xi(t,.78,.045,.08,.14),0);break;case 3:Ae(s,1,a*1.04,-i*.1),Ae(s,0,i*.16),ie(s.head,0,Hs(t,[[0,0],[.22,-.055],[.64,.055],[1.5,0]]),0);break;case 4:Ae(s,0,i*1.03,-i*.12),Ae(s,1,a*.74,-i*.15),ie(s.accent,0,0,Math.sin(t*7)*i*.085),ie(s.head,0,0,i*-.045);break;case 5:(s.arms||[]).forEach((o,l)=>{let c=rn(t,.04+l*.055,.4+l*.04,1.03+l*.045,1.66+l*.025);ie(o,-c*.15,0,(l<(s.arms?.length||2)/2?-1:1)*c*(.3+Math.sin(t*6-l*.8)*.055))}),Ke(s.head,0,i*.012,0),ie(s.head,0,0,i*.045);break}}function xf(s,t,e,i,r){let a=rn(e,.16,.53,r-.72,r-.07),o=rn(e,0,.12,.17,.32),l=Jr(e,.66,.38,.14)+Jr(e,1.25,.38,.12);ie(s.head,o*.065-a*.08,0,0),Ke(s.head,0,-o*.012+a*.01,0),Wi(s,"happy",a),$r(s,Math.max(Xi(e,.17),Xi(e,.72,.18,.09,.18))),i!==1&&fn(s.body,1+o*.009,1-o*.018+a*.012,1+o*.006),s.pose!=="seated"&&Ke(t,0,Jr(e,.4,.44,.055)+Jr(e,1.02,.38,.035),0);let c=[1,1,.84,1.04,1,.6][i];i===5?(s.arms||[]).forEach((h,u)=>ie(h,-a*.18,0,(u<(s.arms?.length||2)/2?-1:1)*(a*.34+Math.sin(e*7-u*.65)*a*.065))):(Ae(s,0,(a*1.86+l)*c,-a*.11),Ae(s,1,(a*2.04+l*.88)*c,-a*.14)),i===1&&ie(s.head,0,Hs(e,[[0,0],[.8,-.055],[1.35,.055],[2.1,0]]),0),i===2&&ie(s.tail,0,Math.sin(e*7)*a*.3,a*.1),i===3&&ie(s.accent,0,0,Math.sin(e*7)*a*.05),i===4&&ie(s.accent,0,0,Math.sin(e*8)*a*.1),i===0&&ie(s.head,0,Math.sin(e*4)*a*.035,0),i===5&&Ke(s.head,0,a*.022,0)}function hx(s,t,e,i){let r=rn(t,.02,.5,i-.55,i-.03),a=rn(t,.25,.8,i-.65,i-.03);ie(s.head,r*.105,-a*.05,a*.035),Ke(s.head,0,-r*.014,0),Wi(s,"sad",r),e!==1&&fn(s.body,1+r*.004,1-r*.009,1),Ae(s,0,-r*.08,r*.055),Ae(s,1,-r*.1,r*.055),$r(s,Xi(t,.35,.12,.11,.2)),e===2&&ie(s.tail,0,-r*.18,-r*.08),e===3&&ie(s.accent,0,0,r*.075),e===4&&ie(s.accent,0,0,r*.12),e===5&&((s.arms||[]).forEach((o,l)=>ie(o,r*.045,0,(l<(s.arms?.length||2)/2?1:-1)*r*.08)),Ke(s.head,0,-r*.012,0))}function al(s,{time:t=0,face:e=s?.userData?.rig?.face??s?.userData?.face??0,mood:i="idle",elapsed:r=0,reduced:a=!1}={}){let o=Sf(s);if(!o)return!1;Kr(s);let l=o.rig;if(e=Number.isInteger(e)&&e>=0&&e<6?e:0,t=Number.isFinite(t)?Math.max(0,t):0,r=Number.isFinite(r)?Math.max(0,r):0,i==="idle"||!sl[i])return a||lx(l,t,e),!a;let c=i==="sad"||i==="lose"?"sad":i==="hello"?"neutral":"happy",h=sl[i];if(Zc(l,c),a)return Wi(l,c,.5),!1;if(r>=h)return Wi(l,c,.45),!1;if(l.mouth?.happy&&c==="happy"&&fn(l.mouth.happy,1,1+Math.sin(r*15)*.1,1),i==="angry"){let u=rn(r,0,.25,1.1,1.8);Zc(l,"sad"),Wi(l,"angry",u),ie(l.head,.08*u,Math.sin(r*15)*.035*u,0),Ae(l,0,.45*u),Ae(l,1,.45*u),l.pose!=="seated"&&Ke(s,0,Jr(r,.3,.25,.025),0)}else if(i==="surprise"){let u=rn(r,0,.18,.8,1.5);Wi(l,"happy",u),ie(l.head,-.1*u,0,0),fn(l.mouth.happy,.65,1+.7*u,1),Ae(l,0,.75*u),Ae(l,1,.75*u)}else if(i==="impact"){let u=Hs(r,[[0,0],[.35,0],[.7,Math.PI],[1.1,Math.PI],[1.55,Math.PI*2],[2.2,Math.PI*2]]),d=rn(r,.72,.88,1.02,1.25);xf(l,s,r,e,2.2),l.pose!=="seated"&&(ie(s,-d*.28,u,0),Ke(s,0,.08*d,.25*d),fn(l.body,1+.12*d,1-.08*d,1+.17*d))}else i==="hello"?cx(l,r,e):c==="angry"?(ie(n,0,0,side*.3*strength),Ke(n,0,-.014*strength,0)):c==="happy"?xf(l,s,r,e,h):hx(l,r,e,h);return!0}var Jc=class{constructor({reduced:t=()=>!1}={}){this.reduced=t,this.records=new Map,this.models=new Map,this.frame=null,this.lastFrame=0,this.dirty=!0,this.lost=!1,this.renderer=new Ns({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(1),this.renderer.setSize(384,384,!1),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=zi,this.renderer.toneMappingExposure=.94,this.renderer.setClearColor(0,0),this.scene=new Jn;let e=new Os,i=new bi(this.renderer);this.environment=i.fromScene(e,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.45,e.dispose(),i.dispose(),this.scene.add(new Oi("#fff3ff","#64506d",.65));let r=new jn("#fff1df",2.1);r.position.set(-3,5,6),this.scene.add(r);let a=new jn("#c9b4ff",1.15);a.position.set(4,3,-3),this.scene.add(a),this.camera=new Ce(31,1,.1,30),this.observer=new IntersectionObserver(o=>{for(let l of o){let c=this.records.get(l.target);c&&(c.visible=l.isIntersecting,c.dirty=!0)}this.request()},{threshold:.01}),this.resizeObserver=new ResizeObserver(()=>this.invalidate()),this.renderer.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.lost=!0,this.pause()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.invalidate()})}add(t){if(this.records.has(t)){let a=this.records.get(t),o=Number(t.dataset.character)||0,l=Number(t.dataset.colour)||0;(a.face!==o||a.colour!==l||a.accessory!==(t.dataset.accessory||"none"))&&(a.face=o,a.colour=l,a.accessory=t.dataset.accessory||"none",a.dirty=!0,this.request());return}let e=document.createElement("canvas");e.className="character-canvas",e.setAttribute("aria-hidden","true"),t.replaceChildren(e);let i=e.getContext("2d",{alpha:!0});if(!i)return;let r={art:t,canvas:e,ctx:i,face:Number(t.dataset.character)||0,colour:Number(t.dataset.colour)||0,accessory:t.dataset.accessory||"none",visible:!1,dirty:!0,mood:"idle",start:0,until:0,phase:Math.random()*15,last:0};this.records.set(t,r),this.observer.observe(t),this.resizeObserver.observe(t),this.request()}model(t,e,i="none"){let r=t+":"+e+":"+i,a=this.models.get(r);if(a)return this.models.delete(r),this.models.set(r,a),a;let o=Wc(t,e,"standing",i);o.updateMatrixWorld(!0);let l=new ze().setFromObject(o),c=l.getCenter(new B),h=l.getSize(new B),u=new ze().setFromObject(o.userData.rig.head),d=u.getCenter(new B),f=u.getSize(new B);for(d.y-=.04,a={root:o,center:c,radius:Math.max(h.y,h.x)*.5,headCenter:d,headRadius:Math.max(f.y*1.08,f.x)*.5},this.models.set(r,a);this.models.size>12;){let m=this.models.keys().next().value,_=this.models.get(m);this.models.delete(m),Gs(_.root)}return a}play(t,e="hello",i=null){this.add(t);let r=this.records.get(t);if(!r)return;let a=(sl[e]||1.85)*1e3,o=performance.now();r.mood=e,r.start=o-Math.max(0,a-(i??a)),r.until=o+(i??a),r.dirty=!0,t.dataset.emotion=e,clearTimeout(r.timer),r.timer=setTimeout(()=>{this.records.get(t)===r&&(r.mood="idle",delete t.dataset.emotion,r.dirty=!0,this.request())},Math.max(0,r.until-o)),this.request()}invalidate(){this.dirty=!0;for(let t of this.records.values())t.dirty=!0;this.request()}prune(){for(let[t,e]of this.records)t.isConnected||(clearTimeout(e.timer),this.observer.unobserve(t),this.resizeObserver.unobserve(t),this.records.delete(t))}request(){!this.frame&&!document.hidden&&!this.lost&&(this.frame=requestAnimationFrame(t=>this.tick(t)))}pause(){this.frame&&cancelAnimationFrame(this.frame),this.frame=null}tick(t){if(this.frame=null,document.hidden||this.lost)return;this.prune();let e=this.reduced(),i=document.querySelector("dialog[open]:modal"),r=!1;for(let a of this.records.values()){let{art:o}=a;if(!a.visible||!o.getClientRects().length||i&&!i.contains(o))continue;let l=o.getBoundingClientRect();if(l.bottom<=0||l.top>=innerHeight||l.width<1||l.height<1)continue;let c=!!o.closest("#scores,.home-portrait,.avatar-preview,#winnerPortrait"),h=a.mood!=="idle",u=!e&&(c||h);if(r||(r=u),!a.dirty&&!this.dirty&&(!u||t-a.last<(h?15:32)))continue;let d=Math.max(64,Math.min(384,Math.ceil(Math.max(l.width,l.height)*Math.min(devicePixelRatio||1,1.5))));(a.canvas.width!==d||a.canvas.height!==d)&&(a.canvas.width=a.canvas.height=d);let f=this.model(a.face,a.colour,a.accessory),m=f.root,_=!!o.closest("#scores,.home-portrait,.friend-entry,.leader-row,.mini-player"),S=_?f.headCenter:f.center,g=_?f.headRadius:f.radius;Kr(m),al(m,{time:t/1e3+a.phase,face:a.face,mood:a.mood,elapsed:Math.max(0,(t-a.start)/1e3),reduced:e}),this.scene.add(m);let p=g/Math.sin(this.camera.fov*Math.PI/360)*1.14;this.camera.position.copy(S).add(new B(.18,.12,1).normalize().multiplyScalar(p)),this.camera.lookAt(S),this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,d,d),this.renderer.setViewport(0,0,d,d),this.renderer.render(this.scene,this.camera),a.ctx.globalCompositeOperation="copy",a.ctx.drawImage(this.renderer.domElement,0,384-d,d,d,0,0,d,d),this.scene.remove(m),a.last=t,a.dirty=!1,o.dataset.modelReady||(o.dataset.modelReady="true",o.dataset.modelVersion="shared-3d-v1")}this.dirty=!1,this.lastFrame=t,r&&this.request()}dispose(){this.pause(),this.observer.disconnect(),this.resizeObserver.disconnect();for(let t of this.records.values())clearTimeout(t.timer);this.records.clear();for(let{root:t}of this.models.values())Gs(t);this.models.clear(),this.environment.dispose(),this.renderer.dispose()}};var jr=new Map,Qr=new Map,ux=()=>Tf("orb",()=>new Ni(1,24,18));function Tf(s,t){return jr.has(s)||jr.set(s,t()),jr.get(s)}function Ws(s,t=.48,e=0){let i=s+":"+t+":"+e;return Qr.has(i)||Qr.set(i,new Ui({color:s,roughness:t,metalness:e,clearcoat:.18,clearcoatRoughness:.3})),Qr.get(i)}function wf(s,t,e=[0,0,0]){let i=new He;return i.name=t,i.position.set(...e),s.add(i),i}function ta(s,t,e,i=[0,0,0],r=[1,1,1]){let a=new ge(t,e);return a.position.set(...i),a.scale.set(...r),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function fx(s,t,e,i){return ta(s,ux(),t,e,i)}function dn(s,t,e,i,r=.08){return ta(s,Tf("box:"+i.join(":")+":"+r,()=>new Us(...i,4,r)),t,e)}function dx(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createImageData(128,128),i=47;for(let a=0;a<128;a++)for(let o=0;o<128;o++){i=Math.imul(i,1664525)+1013904223>>>0;let l=155+i%17+(o%3===0?15:0)+(a%3===0?11:0),c=(a*128+o)*4;e.data.set([l,l,l,255],c)}t.putImageData(e,0,0);let r=new Ii(s);return r.wrapS=r.wrapT=hi,r.repeat.set(8,6),r}function px(){let s=new He,t=Ws("#59404b",.48),e=Ws("#c9a57b",.32,.5),i=Ws("#73598d",.92),r=Ws("#9672b0",.76);i.bumpMap||(i.bumpMap=dx(),i.bumpScale=.009,r.bumpMap=i.bumpMap,r.bumpScale=.006),dn(s,t,[0,Zr-.12,0],[3.7,.26,2.62],.2),dn(s,e,[0,Zr+.02,0],[3.57,.06,2.49],.16),dn(s,i,[0,Zr+.055,0],[3.42,.065,2.34],.15);for(let l of[-1.32,1.32])for(let c of[-.82,.82])dn(s,t,[l,.65,c],[.19,1.3,.19],.06),dn(s,e,[l,.13,c],[.2,.16,.2],.035);for(let l of Yr){let c=wf(s,"Chair",[l.x,0,l.z]);c.rotation.y=l.yaw,dn(c,t,[0,.8,0],[1.07,.17,1],.12),dn(c,r,[0,.9,0],[.97,.16,.9],.14),dn(c,t,[0,1.36,-.44],[1.08,1.08,.18],.16),dn(c,r,[0,1.4,-.32],[.89,.83,.11],.12);for(let h of[-.36,.36])for(let u of[-.32,.32])dn(c,t,[h,.39,u],[.12,.78,.12],.035);for(let h of[-1,1])fx(c,e,[h*.41,1.77,-.4],[.044,.045,.035]),dn(c,t,[h*.5,1.1,0],[.1,.12,.75],.04)}s.updateMatrixWorld(!0);let a=new Map;s.traverse(l=>{if(!l.isMesh)return;let c=a.get(l.material)||[];c.push((l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone()).applyMatrix4(l.matrixWorld)),a.set(l.material,c)});let o=new He;for(let[l,c]of a){let h=Xr(c);c.forEach(u=>u.dispose()),ta(o,h,l)}return o}var bf=class{constructor({onProject:t,onGreet:e,onError:i,onRestore:r,paths:a,colours:o}){this.onProject=t,this.onGreet=e,this.onError=i,this.onRestore=r,this.scene=new Jn,this.people=Array(4).fill(null),this.poses=new Map,this.visible=!1,this.angle=.55,this.angleTarget=.55,this.angularVelocity=0,this.lastTick=0,this.lastDraw=0,this.camera=new Ce(36,1.4,.1,50),this.target=new B(0,1,0),this.renderer=new Ns({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=zi,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_i,this.canvas=this.renderer.domElement,this.canvas.className="table-scene-canvas",this.canvas.setAttribute("aria-hidden","true");let l=new Os,c=new bi(this.renderer);this.environment=c.fromScene(l,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.55,l.dispose(),c.dispose();let h=new Oi("#f6e8ff","#554568",.7);this.scene.add(h);let u=new jn("#fff0db",2.3);u.position.set(-3.5,7,5),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.camera.left=-4,u.shadow.camera.right=4,u.shadow.camera.top=4,u.shadow.camera.bottom=-4,u.shadow.normalBias=.025,u.shadow.bias=-15e-5,u.shadow.radius=10,u.shadow.blurSamples=8,u.shadow.camera.near=.5,u.shadow.camera.far=20,this.scene.add(u);let d=new jn("#bfa5ff",1);d.position.set(3,4,-4),this.scene.add(d),this.scene.add(px());let f=ta(this.scene,new Li(20,20),new br({color:"#10081b",opacity:.13}),[0,-.012,0]);f.rotation.x=-Math.PI/2,f.receiveShadow=!0,f.castShadow=!1,this.tiles(a,o),this.raycaster=new Ir,this.bind(),this.idle=null}tiles(t,e){let i=Ws("#fff9ee",.45),r=new He;r.position.set(0,Zr+.14,0);for(let a=0;a<4;a++){let o=wf(r,"Tile",[(a%2-.5)*.46,.005,Math.floor(a/2)*.46-.23]);o.rotation.y=(a-1.5)*.08,dn(o,i,[0,0,0],[.4,.1,.4],.055);let l=new el().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="'+t[[0,2,4,5][a]]+'"/></svg>');for(let c of l.paths)for(let h of c.toShapes()){let u=new Kn(h,{depth:.12,bevelEnabled:!1,curveSegments:12}),d=ta(o,u,Ws(e[[0,2,3,5][a]],.52));d.rotation.x=-Math.PI/2,d.scale.setScalar(.007),d.position.set(-.14,.052,.14)}}this.scene.add(r)}bind(){this.canvas.style.touchAction="pan-y",this.canvas.addEventListener("pointerdown",t=>{this.angularVelocity=0,this.angleTarget=this.angle,this.pointer={id:t.pointerId,x:t.clientX,y:t.clientY,angle:this.angle,drag:!1,time:performance.now(),lastAngle:this.angle,velocity:0}}),this.canvas.addEventListener("pointermove",t=>{let e=this.pointer;if(!e||e.id!==t.pointerId)return;let i=t.clientX-e.x,r=t.clientY-e.y;if(!e.drag&&Math.abs(i)>8&&Math.abs(i)>Math.abs(r)*1.2&&(e.drag=!0,this.canvas.setPointerCapture(t.pointerId)),e.drag){t.preventDefault();let a=performance.now(),o=e.angle-i*.008;e.velocity=e.velocity*.45+(o-e.lastAngle)/Math.max(.008,(a-e.time)/1e3)*.55,e.lastAngle=o,e.time=a,this.angle=o,this.angleTarget=o,this.render()}}),this.canvas.addEventListener("pointerup",t=>{let e=this.pointer;if(this.pointer=null,!e)return;if(e.drag){this.reduced||(this.angularVelocity=Math.max(-3,Math.min(3,performance.now()-e.time>90?0:e.velocity)),this.angleTarget=this.angle+this.angularVelocity*.18,this.startMotion());return}let i=this.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new pt((t.clientX-i.left)/i.width*2-1,-(t.clientY-i.top)/i.height*2+1),this.camera);let r=this.raycaster.intersectObjects(this.people.filter(Boolean).map(a=>a.root),!0)[0];if(r){let a=r.object;for(;a&&a.userData.seat===void 0;)a=a.parent;a&&this.greet(a.userData.seat)}}),this.canvas.addEventListener("pointercancel",()=>this.pointer=null),this.canvas.addEventListener("webglcontextrestored",()=>{this.lost=!1,this.onRestore?.()}),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.lost=!0,this.pause(),this.onError?.()})}attach(t,e,i){this.host=t,this.reduced=i,t.prepend(this.canvas),this.visible=!0,this.setSeats(e),this.resize(),this.render(),i||this.startMotion()}setSeats(t){t.forEach((e,i)=>{let r=e?e.face+":"+e.colour+":"+(e.accessory||"none"):"";if(this.people[i]?.signature===r||(this.people[i]&&(this.scene.remove(this.people[i].root),Gs(this.people[i].root),this.poses.delete(i)),this.people[i]=null,!e))return;let a=Xc(e.face,e.colour,e.accessory),o=Yr[i];a.position.set(o.x,hf,o.z),a.rotation.y=o.yaw,a.userData.seat=i,this.scene.add(a),this.people[i]={root:a,signature:r}})}setMotion(t){this.reduced!==t&&(this.reduced=t,t?(this.pause(),this.visible=!0,this.render()):this.startMotion())}resize(){if(!this.host)return;let t=this.host.clientWidth,e=this.host.clientHeight;!t||!e||(this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.render())}positionCamera(){let t=new B(Math.sin(this.angle),.84,Math.cos(this.angle)).normalize(),e=[];for(let l of[-1.87,1.87])for(let c of[-1.33,1.33])for(let h of[0,1.55])e.push(new B(l,h,c));Yr.forEach((l,c)=>{for(let h of[-.58,.58])for(let[u,d]of[[.02,-.5],[.02,.5],[1.92,-.5],[1,.5]])e.push(new B(l.x+Math.cos(l.yaw)*h+Math.sin(l.yaw)*d,u,l.z-Math.sin(l.yaw)*h+Math.cos(l.yaw)*d));if(this.people[c])for(let h of[-.62,.62])for(let u of[1.45,2.82])e.push(new B(l.x+Math.cos(l.yaw)*h,u,l.z-Math.sin(l.yaw)*h))});let i=new B().crossVectors(new B(0,1,0),t).normalize(),r=new B().crossVectors(t,i).normalize(),a=Math.tan(this.camera.fov*Math.PI/360),o=5.4;for(let l of e){let c=l.clone().sub(this.target),h=c.dot(t);o=Math.max(o,h+Math.abs(c.dot(i))/(a*this.camera.aspect*.91),h+Math.abs(c.dot(r))/(a*.88))}this.camera.position.copy(this.target).addScaledVector(t,o),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(),this.distance=o}render(){if(!this.visible||!this.width||document.hidden||this.lost)return;this.positionCamera(),this.renderer.render(this.scene,this.camera),this.lastDraw=performance.now();let t=Yr.map((e,i)=>{let r=new B(e.x,this.people[i]?2.82:1.03,e.z).project(this.camera);return{index:i,x:(r.x+1)*.5*this.width,y:Math.max(7,Math.min(this.height-24,(1-r.y)*.5*this.height)),visible:r.z<1}});this.onProject?.(this.host,t),this.host.dataset.sceneReady="true",this.host.dataset.sceneDistance=this.distance.toFixed(2),this.host.dataset.sceneTriangles=String(this.renderer.info.render.triangles),this.host.dataset.sceneDraws=String(this.renderer.info.render.calls)}rotate(t){if(this.angleTarget+=t,this.reduced){this.angle=this.angleTarget,this.angularVelocity=0,this.render();return}this.startMotion()}startMotion(){this.frame||(this.lastTick=performance.now(),this.frame=requestAnimationFrame(t=>this.tick(t)))}react(t,e){this.people[t]&&(this.poses.set(t,{start:performance.now(),mood:e}),this.startMotion())}greet(t,e=!1){!this.people[t]||!this.visible||document.hidden||(e||this.onGreet?.(this.host,t),!this.reduced&&(this.poses.set(t,{start:performance.now(),idle:e}),this.startMotion()))}tick(t){if(this.frame=null,!this.visible||document.hidden)return;let e=Math.min(.032,Math.max(.001,(t-this.lastTick)/1e3));this.lastTick=t;let i=Math.abs(this.angleTarget-this.angle)>3e-4||Math.abs(this.angularVelocity)>.003;if(i&&!this.pointer?.drag){let a=e/3;for(let o=0;o<3;o++)this.angularVelocity+=(100*(this.angleTarget-this.angle)-20*this.angularVelocity)*a,this.angle+=this.angularVelocity*a;Math.abs(this.angleTarget-this.angle)<3e-4&&Math.abs(this.angularVelocity)<.003&&(this.angle=this.angleTarget,this.angularVelocity=0,i=!1)}let r=this.people?.some(Boolean)&&!this.reduced;for(let a=0;a<(this.people?.length||0);a++){let o=this.people[a];if(!o)continue;let l=this.poses.get(a),c=al(o.root,{time:t/1e3+a*1.17,face:o.root.userData.rig.face,mood:l&&!l.idle?l.mood||"hello":"idle",elapsed:l?(t-l.start)/1e3:0,reduced:this.reduced});l&&!c&&this.poses.delete(a)}(i||this.poses.size||t-this.lastDraw>=32||!r)&&this.render(),(i||this.poses.size||r)&&(this.frame=requestAnimationFrame(a=>this.tick(a)))}pause(){this.visible=!1,this.pointer=null,this.angleTarget=this.angle,this.angularVelocity=0,this.frame&&cancelAnimationFrame(this.frame),this.frame=null;for(let t of this.people.filter(Boolean))Kr(t.root);this.poses.clear()}dispose(){this.pause(),clearInterval(this.idle);for(let r of this.people.filter(Boolean))this.scene.remove(r.root),Gs(r.root);this.environment.dispose();let t=new Set(jr.values()),e=new Set(Qr.values());this.scene.traverse(r=>{r.isMesh&&(t.add(r.geometry),e.add(r.material))});for(let r of t)r.dispose();let i=new Set;for(let r of e)r.bumpMap&&i.add(r.bumpMap),r.dispose();for(let r of i)r.dispose();jr.clear(),Qr.clear(),this.renderer.dispose(),this.canvas.remove()}};export{Jc as CharacterPortraits,bf as TableScene,Xc as createSeatedCharacter};
