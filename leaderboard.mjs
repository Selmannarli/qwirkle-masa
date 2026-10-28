export function friendLeaderboard(social,owner,period='all',now=Date.now()){
 const calendar=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}),day=at=>calendar.format(new Date(at));const date=new Date(day(now)+'T00:00:00Z');let since='';if(period==='week'){date.setUTCDate(date.getUTCDate()-(date.getUTCDay()+6)%7);since=date.toISOString().slice(0,10)}else if(period==='month')since=day(now).slice(0,7)+'-01';
 const ids=new Set([owner]);
 for(const edge of social.friends||[])if(edge.status==='accepted'&&(edge.from===owner||edge.to===owner))ids.add(edge.from===owner?edge.to:edge.from);
 const totals=new Map();
 for(const id of ids){const profile=social.profiles[id];if(profile)totals.set(id,{id,name:profile.name,avatar:profile.avatar,score:0,wins:0,games:0})}
 for(const match of (social.matches||[]).filter(m=>period==='all'||Number.isFinite(m.at)&&day(m.at)>=since))for(const player of match.players){const row=totals.get(player.id);if(!row)continue;row.score+=player.score;row.wins+=Number(player.won&&match.players.filter(p=>p.won).length===1);row.games++}
 return [...totals.values()].sort((a,b)=>b.wins-a.wins||b.score-a.score||a.id.localeCompare(b.id));
}
