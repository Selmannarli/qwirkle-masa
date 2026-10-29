# Renkio 1.11.1 — lobby, conversations and creature sculpts

Rollback: `backup/before-lobby-v3-20261029` points to the previous release. Existing
game rules, score effects, native signing identity and free hosting are retained.

- A player keeps one waiting lobby; ongoing matches remain separate. Practice is
  absent from active matches and offers Resume / Start again at entry.
- Daily claims follow 10, 20, 30, 40, 50 gems, then repeat. Calendar eligibility
  remains server-controlled in Europe/Berlin; missing a day does not reset progress.
- Direct conversations survive different two-person matches. Existing retained
  room messages migrate once. Three- and four-person rooms keep room chat.
- Direct messages are separate Firestore documents, private to their participants,
  paginated with a timestamp/ID cursor, rate limited and receipt-idempotent.
  Reports, blocking and account deletion cover direct messages. Notification links
  open the conversation without reconnecting to a completed match.
- The active player's card carries a clockwise-depleting perimeter clock. The play
  button shows m:ss. New bonus fields start at distance four instead of six.
- Day colours, reward progress and redundant profile actions have been revised.
- Android checks and safely activates an update on startup. The first launch asks
  Android for notification permission; declining remains respected. Existing shells
  can also activate the web update once per launch on the home screen.
- Organic heads are authored continuous sculpts, exported offline as indexed,
  quantized meshes. Pof has a new body, the star has become a small dragon, robot
  housing and organic contours were revised. One model library serves all views.
- Anatomy-specific accessories are fitted offline. BVH intersection avoids costly
  repeated triangle searches; the shipped client never remeshes a sculpt on touch.
- The button visit has ledge, descent, walking, punch/kick and return phases rather
  than playing one punch pose throughout a translation. Waiting players can exchange
  waves. Existing glass knock and Renkio impact timing retain higher priority.

Checks: full regression suite (205 passed before the added pagination test), new
conversation/reward checks, accessory clearance and expression surface checks;
two browser accounts exchanging persistent messages; mobile practice, shuffle,
turn-clock layout, English/day view; visitor cancellation retains two original
portrait canvases and restores source visibility. Native release/lint build and
the actual 56-file atomic ClientStore installer are also checked.

The procedural animation is not motion capture. Reciprocal waves are implemented;
physical two-character high fives and a complete bespoke film-quality animation
library are not part of this release. No third-party monster model was imported.
