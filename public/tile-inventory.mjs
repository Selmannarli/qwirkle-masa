/** Public inventory: no opponent hand or bag data is read. */
export function remainingTiles(board,hand){
 const counts=Array.from({length:6},()=>Array(6).fill(3));
 for(const tile of [...Object.values(board),...hand])if(!tile?.joker&&Number.isInteger(tile?.c)&&Number.isInteger(tile?.s)&&counts[tile.c]?.[tile.s]>0)counts[tile.c][tile.s]--;
 return counts;
}
