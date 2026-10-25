export function friendLeaderboard(social,owner){
 const ids=new Set([owner]);
 for(const edge of social.friends||[])if(edge.status==='accepted'&&(edge.from===owner||edge.to===owner))ids.add(edge.from===owner?edge.to:edge.from);
 const totals=new Map();
 for(const id of ids){const profile=social.profiles[id];if(profile)totals.set(id,{id,name:profile.name,avatar:profile.avatar,score:0,wins:0,games:0})}
 for(const match of social.matches||[])for(const player of match.players){const row=totals.get(player.id);if(!row)continue;row.score+=player.score;row.wins+=Number(player.won&&match.players.filter(p=>p.won).length===1);row.games++}
 return [...totals.values()].sort((a,b)=>b.wins-a.wins||b.score-a.score||a.id.localeCompare(b.id));
}
