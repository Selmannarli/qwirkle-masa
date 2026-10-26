# Godot character rebuild

The rejected generated sprite sheet is retired. The six characters are now actual procedural 3D models built in Godot 4.5: smooth primitive/custom meshes, rounded boxes, capped spline tubes, separate eyes and eyelids, limb pivots and native AnimationPlayer tracks. No generated raster artwork or automatic background removal is used in this asset set.

The editable project is `art/character-studio/project.godot`. Run it to preview; 1–6 changes character, Space replays the gesture. Models, materials, camera framing and animation tracks are constructed by `studio.gd`. The runtime game continues using its existing engine and multiplayer protocol; Godot produces the character animation assets offline.

## Rendering and validation

`scripts/render-characters.ps1 -Godot <Godot console executable> -Python <Python executable>` renders 32 RGBA PNG frames per character using a transparent 512 × 512 SubViewport and 8× MSAA. The explicit camera framing is fixed across each animation. `RENKIO_ART_OUTPUT` can override the render folder when running the project directly with `-- --render`.

`scripts/pack_godot_characters.py` refuses empty, clipped or dirty frames. It checks real alpha, a minimum 40-pixel source margin, no isolated one/two-pixel residue components at inspection scale, and matching first/last poses. It does not try to hide bad borders with UI clipping. The successful build has at least 58 pixels of clear space on every source frame.

Each character receives its own lossless WebP atlas, eight columns and four rows, with 192 × 192 cells. The six audited asset hashes, exact sizes and margins are in `art/character-studio/quality-report.json`. Tests verify that production files match those audited hashes and dimensions. Old generated atlases remain in Git history/source for rollback, but are excluded from new Android client snapshots and are not referenced by the new interface.

## Interface

The hero preview has no clipping box. Choice cards use square artwork slots, separate short labels and a subtle selection state. Character silhouettes, moving limbs and labels do not share a cropped atlas cell. The dialog adapts to short screens; measured at 320 × 640 with no page overflow or internal dialog scrolling. The eight existing colour choices and account IDs are preserved. Tapping portraits plays their gesture, pencils edit the character, and player names retain profile navigation.

## Research

Reviewed [Brawl Stars' official presentation](https://supercell.com/en/games/brawlstars/), [Fall Guys' official presentation](https://www.fallguys.com/?lang=en-US), and [Brawlhalla's character roster](https://www.brawlhalla.com/legends) for silhouette recognition, expressive faces and breathing room. Their assets are not used. Godot's [transparent viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html) and [offline rendering](https://docs.godotengine.org/en/stable/tutorials/animation/creating_movies.html) documentation guided the render pipeline.

The soft placement sounds from the previous update remain unchanged.
