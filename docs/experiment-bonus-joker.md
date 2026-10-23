# Experimental home, daily joker and bonus board

Stable baseline: `613c68b`, tag `stable-1.8.1-before-experiment-20261024`.
Experimental branch: `experiment/daily-joker-bonus-home`.
Stable Render service, Google Play releases, signing files and existing Firestore data are preserved.

Preview: `http://localhost:4188/`, server environment `RENKIO_EXPERIMENTAL=1` and isolated `QWIRKLE_DATA=.../work/experiment-data`. No production Firestore credential is used in this preview.

## Agreed rules

- Each player may play one joker per match. The joker can become any of 36 tile types, then stays that identity. It is additional to the six regular hand slots.
- One daily joker accrues per server calendar day, Europe/Berlin. Claims and balance live in the account profile, so the durable adapter persists them when the experiment is activated on a cloud-backed server. Preparing/changing/returning a joker does not charge it. A successful online move charges one; an invalid move does not. Practice provides one free training joker per match and never spends the account wallet.
- Joker value is zero. A six line receives a completion bonus equal to its non-joker value: five normal tiles and one joker score 5 + 5 = 10. A normal six still scores 12.
- New experimental games allow 1–6 matching opening tiles, include the center cell, and double the opening move's score. Existing games without `experimental: true` keep the old opening rule and scoring.
- 96 random bonus squares are sampled in four Chebyshev-distance rings, 6–11, 12–19, 20–27, 28–36 cells from center. Kinds are 2×, 3×, +2, +5, +8. The map is generated once and saved with the game, never regenerated on reconnection.
- Newly covered 2×/3× squares multiply each scored line containing that new tile. Multiple word multipliers in one line multiply together. Flat bonuses are added once per newly covered square after line scoring. Used squares never activate again, including when that line is extended later.

## Revert

Stop the experimental preview and switch to `main` (or the baseline tag). Stable package 1.8.1 and its APK/AAB remain unchanged. There is no production deployment or Play submission in this experiment. Do not erase live Firestore collections as part of a rollback. If activated later, preserve experimental matches with their explicit rules version instead of converting them into classic games.

## Validation

The original 70 tests remain passing. Six new tests cover opening, zero-valued transformed jokers, line/crossing bonuses, random board limits, daily claims across midnight/DST, and one joker per player. A real Firebase-authenticated isolated-server integration test verifies repeat-claim rejection, failed-move non-spending, wallet debit, six normal hand slots, and server restart restoration of joker identity, usage and bonus map. Browser checks cover responsive menu, all five navigation pages, daily claim/reload, and joker selection/placement/score preview/commit.
