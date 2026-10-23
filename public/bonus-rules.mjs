export const BONUS_TYPES=['2x','3x','+2','+5','+8'];
export function makeBonusBoard(random=Math.random){
 const cells={},used=[];
 for(const [lo,hi]of [[6,11],[12,19],[20,27],[28,36]])for(let i=0;i<24;i++){
  for(let attempt=0;attempt<300;attempt++){
   const x=Math.floor(random()*(hi*2+1))-hi,y=Math.floor(random()*(hi*2+1))-hi,d=Math.max(Math.abs(x),Math.abs(y));
   if(d<lo||d>hi||used.some(p=>Math.abs(p.x-x)+Math.abs(p.y-y)<3))continue;
   cells[x+','+y]={type:BONUS_TYPES[Math.floor(random()*BONUS_TYPES.length)]};used.push({x,y});break;
  }
 }
 return cells;
}
export function linePoints(tiles){const value=tiles.reduce((n,t)=>n+(t.joker?0:1),0);return value*(tiles.length===6?2:1)}
export function scoreLines(lines,tiles,options={}){
 let base=0,total=0;const details=[];
 const scoring=lines.length?lines:tiles.map(t=>[t]);
 for(const row of scoring){let points=linePoints(row),multiplier=1;base+=points;
  if(options.experimental)for(const t of tiles){if(!row.some(r=>r.x===t.x&&r.y===t.y))continue;const b=options.bonusCells?.[t.x+','+t.y];if(b&&!b.used&&(b.type==='2x'||b.type==='3x'))multiplier*=Number(b.type[0]);}
  total+=points*multiplier;if(multiplier>1)details.push({type:'line',points,multiplier});
 }
 if(options.experimental)for(const t of tiles){const b=options.bonusCells?.[t.x+','+t.y];if(b&&!b.used&&/^\+(2|5|8)$/.test(b.type)){total+=Number(b.type.slice(1));details.push({type:b.type,x:t.x,y:t.y});}}
 const opening=!!options.experimental&&options.openingBonus;
 if(opening){total*=2;details.push({type:'opening',multiplier:2});}
 return {score:total,baseScore:base,bonuses:details};
}
