# Social, timing and character update — 2026-10-28

Rollback source: `backup/before-social-season-update-20261028`.

- Final rack penalty: −1 per remaining normal tile, once on game end. Wild tiles retain their zero-point value. Finishing bonus remains +6. Stored scores and outcomes use the settled totals.
- Light mode is optional; night is the default. English layouts share the same responsive controls. The rack remains six tiles in one row.
- Clock moves into the play button. +30 seconds costs one gem and is available once per turn, including a compact final-ten-seconds action beneath the owner card. No extensions on 12-hour or untimed games. The server validates the deadline before payment. Clients must explicitly acknowledge the new price.
- RPS starts no clock after the first hand. A second hand starts the three-second window for remaining players; two-player rounds finish when both choose.
- Friend-only leaderboards have calendar week, month and all-time filters, using Europe/Berlin calendar dates.
- Friend profiles contain an expandable gift form for wild tiles/hints; only the canonical admin can grant gems. Receipts prevent repeat transfers. Removing a friend remains inside their profile; closing the profile returns to Friends.
- One migration sets existing non-bot accounts to 500 gems and canonical Selman to 700,000. The previous balances are preserved in the private migration audit. Admin purchases do not decrement gems; nickname changes never grant privileges.
- Character proportions and shared surface fits are preserved. Softer original colours, larger irises and a robot heart refine the toy-like style. Horizontal dragging rotates the large profile preview. New sunglasses, silk bow and pom-pom cap; each slot also has a 50,000-gem collection item.
- Waiting actors have bounded yawn/look/foot gestures. A rare fixed-size visit follows the screen edge, nudges the play control visually, then returns; it never submits a move. Visits cancel on a turn, chat, modal, game outcome or view change. No retired frame-exit system is re-enabled.
- Own portrait taps are relayed to the other seats; the current actor's final-ten-seconds glass taps are visible on all clients.

Validation: 201-test suite; payment/idempotency/admin permissions, calendar filters, RPS timing, online private-hand views and final penalties; 360px/English/light layouts; live practice +30 payment (500 → 499), disabled second use; wardrobe/rotation across all six actors; tile shuffle while a visit is active and clean return with the two original portrait canvases intact. The actual 56-file bundle passes Android ClientStore installation/hash/restart validation. No native permissions or paid infrastructure added.

References reviewed: [Three.js animation system](https://threejs.org/manual/pages/animation-system.html), [Kenney asset licensing](https://kenney.nl/support). No film characters or third-party character assets are copied into this update.
