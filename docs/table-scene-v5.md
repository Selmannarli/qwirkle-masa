# Actual 3D table correction

The previous table was a flat furniture image with seated character cutouts. That composition is retired. `public/table.mjs` now mounts one actual WebGL scene from `client/table-scene.mjs`, built into `public/table-engine.mjs` with Three.js 0.186.1. The bundle includes the Three.js MIT license and needs no CDN. Build with `npm run build:table`.

Furniture, four chairs, six articulated character types, game tiles, lighting and shadows use the same world space and camera. The camera can orbit by horizontal dragging or the rotate button. Seat positions, orientations and cushion height are shared in `public/table-layout.mjs`; characters face the table and sit at the cushion height. No character sprite, image plane or furniture photograph is used inside this scene. Existing character portraits elsewhere in the app are unchanged.

Only one renderer exists; its canvas moves between the home and lobby table. It pauses when hidden, offscreen or in a match. Device pixel ratio is capped at 1.5, animated draws are capped at roughly 30 fps, rigid geometry is merged, and removed character buffers are disposed. Reduced motion disables greetings. Context loss shows an accessible seat-list fallback; restored contexts can resume. Vertical phone scrolling is preserved while horizontal drags rotate the table.

The rejected furniture and seated-sheet assets remain in Git for rollback but are excluded from the Android client snapshot. The new bundle remains below the existing updater limit, so no new APK is required.

Verification: 120 automated tests pass, including real volumetric geometry, finite normals, seated axes, independent joints, buffer cleanup and updater contents. A four-occupant local table was inspected from multiple camera angles on the mobile preview; browser error logs were empty. This corrects the table composition, not the gameplay or scoring.

References: https://threejs.org/docs/ and the installed official Three.js source and MIT license.
