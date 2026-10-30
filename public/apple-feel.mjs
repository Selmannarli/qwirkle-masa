const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function applePull(dx,dy){
 const power=clamp(Math.hypot(dx,dy)/70,0,1);
 return {power,x:clamp(-dx*.35,-24,24)||0,y:clamp(dy*.35,-24,24),vx:clamp(dx/58*3.8,-4.5,4.5),vy:clamp(dy/70*3.4,-3.6,3.6)};
}
export function appleRebound(impact,vx,seconds){
 const t=Math.max(0,seconds);
 return {x:impact.x+(vx<0?1:-1)*80*t,y:impact.y-80*t+460*t*t};
}
