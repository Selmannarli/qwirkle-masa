// Canonical model coordinates. Each item gets its own fit on each anatomy;
// future item IDs can override these entries without changing other headwear.
const fit=(parent,at,size,rotation=[0,0,0])=>({parent,at,size,rotation});
export const CHARACTER_ACCESSORY_FITS=[
 {glasses:{side:.61,back:-.035,depth:.143,bridge:.028},bow:fit('body',[0,.40,0],[.80,.82,1]),cap:fit('head',[.10,1.25,-.035],[.31,.20,.27],[0,0,-.055]),crown:fit('head',[.08,1.255,-.025],[.27,.20,.23])},
 {glasses:{side:.555,back:-.045,depth:.125,bridge:.018},bow:fit('body',[0,.53,0],[.75,.72,1]),cap:fit('head',[0,1.41,-.02],[.42,.19,.30]),crown:fit('head',[0,1.40,-.01],[.36,.22,.26])},
 {glasses:{side:.515,back:-.005,depth:.142,bridge:.022},bow:fit('body',[0,.575,0],[.76,.76,1]),cap:fit('head',[0,1.405,.025],[.19,.15,.22]),crown:fit('head',[0,1.405,.015],[.16,.18,.17])},
 {glasses:{side:.485,back:-.02,depth:.130,bridge:.022},bow:fit('body',[0,.45,0],[.92,.88,1]),cap:fit('head',[0,1.355,-.03],[.29,.18,.25]),crown:fit('head',[0,1.35,-.015],[.245,.20,.22])},
 {glasses:{side:.435,back:-.005,depth:.135,bridge:.014},bow:fit('body',[0,.43,0],[.78,.76,1]),cap:fit('head',[0,1.17,-.035],[.22,.19,.20]),crown:fit('head',[0,1.16,-.02],[.19,.20,.17])},
 {glasses:{side:.535,back:-.04,depth:.135,bridge:.025},bow:fit('head',[0,.56,0],[.70,.70,1]),cap:fit('head',[0,1.29,-.035],[.29,.18,.235]),crown:fit('head',[0,1.29,-.025],[.26,.20,.205])}
];
export function accessoryFit(face,id,slot){
 const profile=CHARACTER_ACCESSORY_FITS[face]||CHARACTER_ACCESSORY_FITS[0];
 return structuredClone(profile[id]||profile[slot==='neck'?'bow':slot==='face'?'glasses':'cap']);
}
export const REAR_PROFILES=[
 {name:'cloud-cushion',parent:'body',at:[0,.24,-.20],size:[.24,.17,.12],softness:.025},
 {name:'robot-chassis',parent:'body',at:[0,.25,-.235],size:[.42,.29,.12],softness:0},
 {name:'cat-haunch',parent:'body',at:[0,.18,-.17],size:[.26,.22,.16],softness:.035},
 {name:'cyclops-rump',parent:'body',at:[0,.20,-.20],size:[.34,.28,.16],softness:.035},
 {name:'dragon-rump',parent:'body',at:[0,.22,-.20],size:[.23,.17,.12],softness:.025},
 {name:'jelly-bell',parent:'head',at:[0,.83,-.315],size:[.23,.17,.085],softness:.045}
];

