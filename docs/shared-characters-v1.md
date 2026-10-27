# Shared articulated characters

27 October 2026. The live portrait sheet/overlay system has been replaced with genuine 3D characters. `client/characters.mjs` is the only model source for both seated table characters and standing/profile cameras. The v4 images remain in the repository as art references, but are excluded from the mobile update payload and never used by the live portrait renderer.

The six identities retain their reference features: smooth lavender cloud, round robot visor and flower chest, orange striped cat and scarf, curved-horn cyclops with satchel, puffy yellow star with purple tuft and small boots, and scalloped jelly with curled tentacles. Standing and seated variants have identical heads/materials, with changed leg placement. Articulated shoulders and feet remain attached in all tested gesture phases.

`client/character-motion.mjs` samples deterministic rig poses from authored rests. It animates actual head, eye/lid, mouth, brow, arm, leg, tail and accent geometry. Each character has a different idle and greeting. Winning uses a broad smile, raised arms and overlapping anticipation/settle; losing uses a frown and lowered head/arms. Reduced motion renders static facial emotion. The table uses the same animator.

`client/portrait-scene.mjs` multiplexes a single WebGL renderer into ordinary small DOM canvases, following Three.js's multiple-canvas technique (https://threejs.org/manual/pages/multiple-scenes.html). It avoids one GPU context per avatar, limits resolution/model cache, updates small idle portraits at 30Hz and active gestures at display cadence, and stops hidden/offscreen work. Portrait cameras frame the same model more tightly in small scorecards; character selection shows the complete body.

## Outcome repair
The result dialog used to show the winner's portrait but play a sad clip when the viewer had lost. `gameOutcomes` now assigns win/lose/draw to the displayed player. Final outcomes override the last score or timeout event. Explicit winners and eliminated players are respected; ambiguous duplicate names never guess the wrong actor. The result dialog always uses the displayed player's outcome, and victory sound/confetti occurs only for the local winner.

## Validation
Automated tests cover shared head geometry across poses/colours, finite meshes, connected shoulders/feet across gesture samples, deterministic seeking/reset, seated hips, real mouth visibility, reduced motion, resignation/timeout/ties, reconnect and reaction lifetime. Browser checks covered enlarged win/lose poses, same-model table/profile views, a lost practice result (Miko happy, own character lose), and a won three-player local match. Fast hub entrance animations now update synchronously and do not block quick follow-up taps.
