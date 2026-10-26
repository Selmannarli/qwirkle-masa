// Pure intensity model shared by sound, canvas and controls.
export function moveEnergy(count,score,valid=true){
 if(!valid||!count)return 0;
 return score>=16||count>=5?3:score>=8||count>=3?2:1;
}
export class GameFeel{
 constructor({sound,preferences,button}){this.sound=sound;this.preferences=preferences;this.button=button;this.until=0;this.level=0;const fire=document.createElement('span');fire.className='commit-fire';fire.setAttribute('aria-hidden','true');button.append(fire)}
 preview(count,score,valid){const level=moveEnergy(count,score,valid);this.level=level;this.button.dataset.heat=String(level);if(!level){this.until=0;this.button.classList.remove('heat-kick')}}
 place(count,score,valid){this.preview(count,score,valid);this.sound.placement(count,score,valid);this.until=performance.now()+2200;if(!this.preferences.reduced){this.button.classList.remove('heat-kick');void this.button.offsetWidth;this.button.classList.add('heat-kick')}}
 celebrate(score,qwirkles){this.sound.reward(score,qwirkles);}
}
