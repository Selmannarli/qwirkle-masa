// Account-safe choices shared by the editor, server and both character renderers.
// IDs are durable preference values; clips may be improved without losing a pick.
const option=(id,name,clip,duration)=>Object.freeze({id,name,clip,duration});
export const ANIMATION_OPTIONS=Object.freeze({
 greeting:Object.freeze([
  option('wave','Tek elle selam','greetWave',2.25),
  option('bothHands','İki elle selam','greetBoth',2.40),
  option('nod','Başla selam','greetNod',1.85),
  option('bow','Eğilerek selam','greetBow',2.35),
  option('cheer','Neşeli selam','greetCheer',2.50)
 ]),
 win:Object.freeze([
  option('victory','Zafer pozu','winVictory',2.90),
  option('dance','Zafer dansı','winDance',3.20),
  option('hop','Sevinç sıçrayışı','winHop',2.80)
 ]),
 loss:Object.freeze([
  option('sad','Üzüntü','lossSad',2.60),
  option('slump','Küskünlük','lossSlump',2.90),
  option('angry','Öfke','lossAngry',2.70),
  option('stomp','Hınzır öfke','lossStomp',2.80)
 ])
});
export const DEFAULT_ANIMATION_PREFERENCES=Object.freeze({greeting:'wave',win:'victory',loss:'sad'});
export function normalizeAnimationPreferences(value){
 const source=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
 return Object.fromEntries(Object.keys(ANIMATION_OPTIONS).map(group=>[group,ANIMATION_OPTIONS[group].some(o=>o.id===source[group])?source[group]:DEFAULT_ANIMATION_PREFERENCES[group]]));
}
export function resolveAnimationMood(mood,preferences){
 // Old profiles keep their familiar base clips until a preference is saved.
 if(!preferences||typeof preferences!=='object')return mood;
 const group=mood==='hello'?'greeting':mood==='win'?'win':mood==='lose'?'loss':null;
 if(!group)return mood;
 const selected=normalizeAnimationPreferences(preferences)[group];
 return ANIMATION_OPTIONS[group].find(o=>o.id===selected).clip;
}
export const VISITOR_TIMING=Object.freeze({duration:2400,takeoff:550,arrival:1300,strike:1300,contact:1580,return:1950});
export const SOCIAL_TIMING=Object.freeze({duration:2400,contact:1050,holdStart:960,holdEnd:1180});
export const ANIMATION_DURATIONS=Object.freeze(Object.assign(
 Object.fromEntries(Object.values(ANIMATION_OPTIONS).flat().map(o=>[o.clip,o.duration])),
 {visitorTakeoff:.55,visitorFly:.75,visitorStrike:.65,visitorReturn:.45,playfulOffer:3.2,playfulReply:3.2,highFiveLeft:2.4,highFiveRight:2.4}
));
export const ANIMATION_PRIORITIES=Object.freeze(Object.fromEntries(Object.keys(ANIMATION_DURATIONS).map(clip=>[clip,clip.startsWith('greet')?10:clip.startsWith('win')||clip.startsWith('loss')?80:clip.startsWith('visitor')?15:5])));
export const ANIMATION_CONTACT_CLIPS=Object.freeze(['visitorStrike','highFiveLeft','highFiveRight']);
export function animationEmotion(mood){if(typeof mood!=='string')return 'neutral';return mood==='appleHit'||mood==='sad'||mood==='lose'||mood.startsWith('loss')?'sad':['hello','knock'].includes(mood)?'neutral':'happy'}
