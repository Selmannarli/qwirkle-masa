# Living profiles and table games

27 October 2026. Changes are additive to the existing Renkio rules and table scene.

## Profiles
Six portrait-specific native idle timelines use eye-registered eyelids and small character actions. They do not switch the complete neutral atlas cell to fake a blink. Pof breathes, Robot pulses its chest light, Cat blinks slowly, Cyclops looks curious, Star glints, Jelly floats. Timelines pause offscreen, in a hidden document and for reduced motion. Committed score/timeout reactions take priority. Removed portraits cancel their timelines and are unobserved.

## Social table
Empty chair buttons open the existing friend invitation screen. The home and waiting-room table have a Table games entry. Rock–paper–scissors can invite everyone or one chosen seat. Invitees explicitly accept or decline; only the creator can cancel a live round. Choices cannot be changed and remain private until every accepted participant chooses. Two distinct hands resolve normally; one or three distinct hands draw. Table games award no gems and do not modify Renkio scores or turn order.

State lives in the durable room and is delivered through each player's existing authenticated event stream. `tableGameView` filters every outbound update. Waiting for invitations expires after two minutes; choosing after one minute. Departures and main match start clear/finish the round. Results dismiss per participant and expire after 45 seconds. Reconnects preserve each player's own choice. Start cooldown and room membership checks apply to all actions.

## Audit repairs
The hub transition had deferred navigation side effects. Friend profile/removal dialogs, More → Practice and More → Daily reward now complete dependent navigation synchronously. The persistent Add friend form restores its icon and enabled state after a request, clearing only a successful input. Drafts, board controls, scoring, game persistence and chat behavior are preserved.

## Validation
130 automated tests, including a live HTTP/SSE mini-game test for hidden choices, authorization, reconnects, cancellation, expiry and main-game start. Mobile browser checks covered chair invitations, three-player invitation/choice/result flow, preview and in-game idle animation, and More → Practice navigation. Blink positioning was inspected on the enlarged Star portrait. Native animation playback was confirmed on in-game Star and Robot profiles.
