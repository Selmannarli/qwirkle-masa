# Quieter home and character refinements

27 October 2026.

- The colour picker and both 3D views now share `character-style.mjs`. Explicit swatches are absolute body colours; the multicolour first choice keeps each character's original art colours. Colour changes retain the previous rendered frame while the next one draws.
- The reserved `miko` identity always uses the original Robot, including scorecards, profile dialogs, history and result portraits. Human profiles keep their own avatar settings.
- No placeholder table is shown before a real waiting room exists. Creating a table or inviting a friend creates that room; a persisted waiting room can still be resumed from home.
- Prominent table-game launchers were removed. Clicking another seated character opens a compact player panel with a small rock–paper–scissors entry. The selected seat is preselected and resolved by room/seat identity. Incoming challenges use a small marker on the creator's table nameplate.
- The larger trophy reward banner and seven-day progress row are restored. The reward remains 10 gems. Header tiles are grouped more closely.
- Six quiet, short character motifs play on interaction and explicit reactions. They follow the sound preference, are throttled, and never loop during idle.

Validation: palette/Miko/voice regression tests plus the full suite. Browser checks include no-room home, room creation, hidden-game player entry with the correct target, blue body colour and Miko profile/scorecard identity.
