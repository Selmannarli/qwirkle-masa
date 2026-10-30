# Renkio 1.13.0 release verification — 30 October 2026

## Preserved history and migration
- Existing Git commits, tags and historical release packages retained at the user's request. No history rewrite or release withdrawal performed.
- Active canonical checkout is `outputs/renkio`; repository is `Selmannarli/renkio`.
- New free Firebase project `renkio`, live service `https://renkio.onrender.com`.
- 148 Auth accounts imported with original UIDs; 329 source documents compared after migration. Do not copy the frozen source over subsequent live changes.
- Legacy Firebase authentication remains a private, temporary identity-recovery dependency for existing Android installations.
- Android package and upload certificate unchanged. Installed update preserved the existing emulator guest's player identity.
- Removed repeated startup balance migration so restarts do not reset real balances.

## Changes in this release
- Gift cards in persistent conversations; persistent read state and monotonic live snapshots/reconnection recovery.
- Central apple pull control, bounded elastic drag, visible power feedback and cooldown state.
- Short aim guide. Missed apples fall out of the viewport; confirmed head hits rebound and fall, preserving authoritative collision results.
- Idle character actions remain silent; deliberate apple and impact sounds retained.

## Completed checks
- Full Node suite: 236 passed, 0 failed. Covers engine/full match, scoring, timeouts, economy, social, rooms, messages, avatar fits/motion, apple authority and state ordering.
- Real Firebase anonymous identities: rewards, both purchases, private hints, joker consumption, invalid-move retention and persistence after restart.
- Real Firebase social flow: recipient-only acceptance, invite authorization, private payloads, game/archive and removal.
- Native Android in-place migration from the old installed build: same player ID after update.
- Android/browser live crossplay: both joined one room; turn action and revision visible on both; opponent hand private.
- Emulator offline practice: module worker, player move, bot response, six-tile hand and responsive layout.
- New-project FCM: registration, delivery and rendered notification verified on the emulator only.
- Live 63-file client bundle matches committed bytes; SHA-256 values independently checked. Actual Android ClientStore accepted the bundle and retained its revision after restart.
- Signed APK/AAB built with release lint. Existing upload certificate SHA-256 preserved: 0cd4385003fa6f21278132b734897d114203db48fb273862265bacf35dbcd11f.
- APK/AAB archive names and decompressed contents scanned for the retired brand: no matches in these new packages.
- Browser checks: 360×740 Turkish/night home and practice; pass confirmation, apple drag, shuffle and zoom. 320×640 English/day home and character editor, accessory selection/autosave; 390×844 English/day character animation preview. These are the views actually inspected, not a claim to inspect every possible screen combination.

## Limits
- Emulator and browser checks are not physical-device or large-concurrency load testing. No zero-defect guarantee.
- Historical artifacts and old checkouts remain by explicit instruction. Old Firebase identity source is retained privately for installed-app recovery.
- Google Play review/submission status must be checked separately; building or uploading a package alone is not publication.
