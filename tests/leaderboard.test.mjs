import test from 'node:test';import assert from 'node:assert/strict';import {friendLeaderboard} from '../leaderboard.mjs';
test('leaderboard includes self and accepted friends only, with zero-match players and existing totals',()=>{
 const social={profiles:Object.fromEntries(['me','friend','new','pending','stranger'].map(id=>[id,{name:id}])),friends:[{from:'friend',to:'me',status:'accepted'},{from:'me',to:'new',status:'accepted'},{from:'me',to:'pending',status:'pending'}],matches:[{players:[{id:'friend',score:20,won:true},{id:'stranger',score:10,won:false}]},{players:[{id:'me',score:8,won:true},{id:'friend',score:8,won:true}]},{players:[{id:'stranger',score:9999,won:true}]}]};
 const rows=friendLeaderboard(social,'me');assert.deepEqual(rows.map(r=>r.id),['friend','me','new']);assert.deepEqual(rows.map(({score,wins,games})=>({score,wins,games})),[{score:28,wins:1,games:2},{score:8,wins:0,games:1},{score:0,wins:0,games:0}]);
 social.friends=social.friends.filter(e=>e.from!=='friend');assert.deepEqual(friendLeaderboard(social,'me').map(r=>r.id),['me','new']);assert.deepEqual(friendLeaderboard(social,'stranger').map(r=>r.id),['stranger']);
});
