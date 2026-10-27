# Renkio visual and sound update · 27 October 2026

The flat table composition described below was rejected and replaced by the real 3D scene documented in `table-scene-v5.md`. Character portraits outside the table remain expression sprites.

## Shipped behaviour

- A wand directly below the bag discloses three compact boost choices. Wild tile and hint use their existing inventories. +30 seconds is free once per player per match and absent from untimed games. The server verifies ownership, turn, expiry and prior use before changing the shared deadline. It never changes hands, points or turns.
- Pass turn and Exchange tiles share the same control styling. Recall and Shuffle remain adjacent; six rack tiles stay in one row.
- Settings supports Turkish and English. Rules, controls, dialogs, errors, accessibility labels, quick messages, dates, account flows, privacy pages and recipient-device push notifications have English copy. Nicknames and free-form chat are preserved. The language preference survives restarting the app.
- The home and waiting-room table shows four chairs with the actual seated occupants and their chosen character/colour. A waiting table retains its existing session. Table tiles use the game's shared SVG geometry.
- Six new high-resolution character expression sheets: idle, celebration, disappointment and greeting. There are also six seated poses in two strips. Expressions and smooth body motion react to committed scoring, Renkio lines, opponent scores of at least 12, timeouts and match results. A reaction survives a UI redraw, expires once, and does not replay on a time extension or reconnect. Tapping a character replays its greeting.
- 23 original stereo effects share one palette: muted ceramic/felt tile contacts, short tactile UI sounds, gentle notifications, harmonic boosts and progressively richer score finales. A low-pass output filter, compressor, conservative master gain and bounded priority-based voice pool keep repeated input under control. Zoom and pan stay silent. Native foreground beeps are replaced by the same sound bank as the web game; notification haptics retain the user's existing setting.

## Art/runtime boundary

The new visual assets were created with the built-in imagegen tool, not a purchased character pack. These are **prerendered 3D-style expression sprites**, not new real-time 3D meshes or a skeletal animation rig. Browser-native Web Animations handle motion and a small state manager handles reactions. The game has not been ported to Godot, Rive or Spline. The earlier Godot character source remains available for rollback; it is not used by the new character artwork.

The table is a prerendered furniture image with separate, live character and tile layers. Seated characters have their own artwork; they are not stretched standing poses. Original RGBA sheets were converted to WebP without changing their layout. A mild alpha floor at display time suppresses almost-transparent export dust. All 24 expression cells were inspected and audited for visible clipping at their boundaries. The cat sheet was regenerated to correct a clipped greeting pose. See `character-art-v4.json` for dimensions, hashes and cell checks.

## Research and decisions

- [Spline character animation](https://spline.design/solutions/character-animation-and-3d-avatars) and [state-based animation](https://docs.spline.design/interaction-states-events-and-actions/concepts/how-state-based-animation-works): use distinct emotional states instead of assigning the same generic bounce to every event.
- [Rive's state-machine documentation](https://github.com/rive-app/help-center/blob/master/editor/state-machine.md?plain=1): separate state lifetime from transitions and presentation. The runtime here is our own small implementation, not the Rive library.
- [Brawl Stars](https://supercell.com/en/games/brawlstars/) and [Fall Guys](https://www.fallguys.com/?lang=en-US): visual references for recognisable silhouettes, large faces and expressive reactions. No artwork from these games is included.

## Production assets

`public/assets/character-{pof,robot,cat,cyclops,star,jelly}-v4.webp` are the six expression sheets. `seated-a.webp` contains Pof/Robot/Cat; `seated-b.webp` contains Cyclops/Star/Jelly. `table-v2.webp` is the empty table. `renkio-sound-bank-v3.txt` packages the stereo PCM effects for the existing Android updater. Prompt recipes are recorded in `character-art-prompts-v4.md`.

## Verification

Automated checks cover the existing game, private hands, multiplayer lifecycle, friends, scoring, board controls, updater budget and audio headroom, plus the new time boost, character reaction lifetime, asset hashes, English copy coverage and notification localisation. Manual browser checks include 390×844, 320×640 and 760×360 layouts, a four-occupant test table, timed/untimed boost menus, a real +30-second action, free practice hints, score previews and committed character celebration.

This is a content update for the existing Android client. It does not create a new APK/AAB or a Play Console release. Existing saved matches, profiles and friends use the same storage; new fields are additive.
