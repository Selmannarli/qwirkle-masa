// The picker and both 3D views share absolute body colours, never hue offsets.
export const CHARACTER_TINTS=Object.freeze([
 {name:'Özgün renkler',hex:null},
 {name:'Turkuaz',hex:'#137d84'},
 {name:'Mercan',hex:'#bb535f'},
 {name:'Altın',hex:'#aa7416'},
 {name:'Mavi',hex:'#426bc1'},
 {name:'Pembe',hex:'#a04994'},
 {name:'Yeşil',hex:'#4d8056'},
 {name:'Gri',hex:'#6c7286'}
]);
export const CHARACTER_BASES=Object.freeze(['#ad86df','#8c54c7','#eb8b53','#43bea8','#edb32a','#55c7e8']);
export const MIKO_AVATAR=Object.freeze({face:1,color:0});
export function characterBodyColour(face,colour){return CHARACTER_TINTS[colour]?.hex||CHARACTER_BASES[face]||CHARACTER_BASES[0]}

export const ACCESSORIES=Object.freeze([{id:'none',name:'Aksesuarsız',price:0},{id:'glasses',name:'Gözlük',price:0,slot:'face'},{id:'bow',name:'Papyon',price:0,slot:'neck'},{id:'cap',name:'Şapka',price:20,slot:'head'},{id:'crown',name:'Taç',price:30,slot:'head'}]);
export const accessoryById=id=>ACCESSORIES.find(a=>a.id===id);

export function accessoryList(value){const source=Array.isArray(value)?value:typeof value==='string'?value.split(','):[];const slots=new Map();for(const id of source){const item=accessoryById(id);if(item?.slot)slots.set(item.slot,id)}return [...slots.values()].sort()}
export function toggleAccessory(current,id){const items=accessoryList(current),item=accessoryById(id);if(!item?.slot)return [];return items.includes(id)?items.filter(n=>n!==id):accessoryList([...items.filter(n=>accessoryById(n).slot!==item.slot),id])}
export const ACCESSORY_PATHS={glasses:'<circle cx="10" cy="18" r="7"/><circle cx="30" cy="18" r="7"/><path d="M17 17q3-3 6 0M3 16 1 11m36 5 2-5"/>',bow:'<path d="M17 17 4 11v18l13-6m6-6 13-6v18l-13-6Z"/><rect x="17" y="16" width="6" height="8" rx="2"/>',cap:'<path d="M7 23v-7a13 13 0 0 1 26 0v7Z"/><path d="M7 23h26l5 4H4l3-4ZM20 4v17"/>',crown:'<path d="m5 12 8 7 7-13 7 13 8-7-4 20H9L5 12Z"/><path d="M10 27h20"/>'};

export const HERO_TIMING=Object.freeze({duration:4800,impact:1780});
