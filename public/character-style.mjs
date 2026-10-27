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

export const ACCESSORIES=Object.freeze([{id:'none',name:'Aksesuarsız',price:0},{id:'glasses',name:'Gözlük',price:0},{id:'bow',name:'Papyon',price:0},{id:'cap',name:'Şapka',price:20},{id:'crown',name:'Taç',price:30}]);
export const accessoryById=id=>ACCESSORIES.find(a=>a.id===id);
