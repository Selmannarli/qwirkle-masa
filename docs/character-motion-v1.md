# Character gestures and soft placement audio

The six existing character IDs and eight colour options are unchanged. The production sprite atlas is `public/assets/characters-motion-v1.webp` (1254 × 1254, six rows and six columns, 605758 bytes). Each frame is 209 × 209 pixels. It was produced with the built-in image_gen tool using `public/assets/characters-3d-v2.webp` as the design reference. The original static atlas remains available for rollback.

| Character | Gesture | Duration |
|---|---|---|
| Pof | Mitten-hand wave | 1150 ms |
| Robot | Salute | 1100 ms |
| Kedi | Slow blink | 900 ms |
| Tepegöz | Foot lift | 1150 ms |
| Yıldız | Wink and lean | 1050 ms |
| Denizanası | Tentacle wave | 1300 ms |

`public/motion.mjs` contains the shared MotionDirector and data-driven gesture definitions. It uses native Web Animations timelines, runs only on interaction, caps concurrent timelines at eight, replaces a previous gesture on a repeated tap, cleans up removed portraits and stops on page hiding or reduced motion. Sprite artwork is preloaded; a tap before loading finishes starts only after the artwork is ready, provided its portrait is still present. No permanent animation loop is created. `MotionDirector.play(element,keyframes,{duration})` also accepts future button, panel and interface motion.

Home portraits animate in place. The pencil opens character editing. Game and friend-list portraits animate; player names retain profile navigation and host-removal actions. The picker previews a gesture when a character or colour is selected, and tapping the preview replays it. Colour changes and animation selection are not saved until Save.

The placement bank was rebuilt by `scripts/sound_design.py` with a 6 ms rounded attack, lower fundamentals, muted noise and reduced upper harmonics. Placement sample peaks are 0.241–0.254; runtime placement volume is 0.32–0.44. Higher scores still select richer notes without sharp volume changes. Launch and all four celebration samples are byte-for-byte unchanged. Drag-drop feedback and the synthesized fallback were softened as well. Sample rate, bank format and file path remain compatible with the existing Android updater.

The whole client snapshot is about 3.56 MB, below the existing Android updater's 12 MB limit, so this change needs no new native APK. Godot migration was not needed for these gestures. [Native browser animation reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate), [Godot web-export considerations](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html).

## Final image generation prompt

+Animation sprite atlas for an EXISTING mobile game. The attached image is the exact character design reference: preserve these SIX mascots' identity, facial proportions, purple/lavender materials, white eyes/muzzle and lighting. Create ONE SQUARE 2048x2048 high quality sprite sheet, precisely SIX COLUMNS by SIX ROWS =36 equal square cells. No text, no grid borders, no interface. TRUE transparent background, no floor or background glow. Every character stays fully inside its own cell with 15% empty padding, same scale and fixed body center/baseline across all six frames in its row. Each ROW is ONE character repeating six animation poses left to right. This is a game animation asset, NOT a selection poster. Only change the specified moving parts; keep torso anchored, camera identical, no outfit changes. Row1: reference cloud puff Pof, cheerful small mitten-hand wave: neutral, hand halfway up, hand up tilted left, hand up tilted right, hand halfway down, neutral. Row2: reference box robot, small friendly salute: neutral, forearm raising, hand touching forehead, hand opening outward, forearm lowering, neutral. Row3: reference fluffy cat, slow double-eye blink: eyes open, eyelids quarter closed, eyelids three-quarter closed, eyes fully closed smiling, eyelids half open, eyes open. Row4: reference one-eyed horned monster, playful foot lift: neutral, slight weight shift, left foot raised, foot held and happy, foot lowers, neutral. Row5: reference puffy five-point star, wink and tip: neutral with both eyes open, slight lean, left eye half closed, left eye closed with small smile, eye reopening, neutral. Row6: reference glossy jellyfish, tentacle wave: neutral, left tentacles curl inward, all tentacles curl upward, right tentacles curl inward, tentacles relax, neutral. Maintain the same charming polished 3D toy render quality as reference. Six exactly equal columns and six exactly equal rows with no gutters. Never put two characters in a cell. Every row must have six poses including first and last neutral pose. Clear readable coherent silhouettes for 32px thumbnail as well as128px portrait. No characters cropped at any frame.
