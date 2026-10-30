# Social navigation update — 30 October 2026

- Android Back now distinguishes home from hub pages in the existing installed shell. Messages, friends, leaderboard and more return to home first; a subsequent Back on home opens the native exit prompt. No new native binary is required.
- Preserved existing game/practice return-to-home behavior and game persistence. A native Back in game chat returns home; the visible chat back arrow still returns to the board.
- Redesigned persistent conversation list and direct conversation with a fixed heading/composer and one scrolling message log. Older-history loading preserves the scroll anchor. Dates and short previews separate content clearly.
- Friends use a fixed ID/add area and a separate scrolling list, with consistent avatar/name/action sizes and last-seen summaries.
- Day-theme surfaces and English labels checked and corrected. Authorized conversation responses now supply the actual avatar for chats opened directly from a notification.

## Checks actually completed
- 237 automated tests passed; 9 targeted social/bundle checks passed after the final avatar-response addition.
- Existing installed Android debug APK automatically received the client update.
- Real Android key events verified messages, friends, leaderboard and more return to home, and the next Back opens a confirmation window without finishing the activity.
- Isolated local fixture: 28 friends, 125 messages in one thread, additional conversation previews. Verified list scrolling, fixed controls, message sending, long names/text at 360×740 and 320×640, and desktop 1280×720. Turkish/night and English/day inspected. No production friends or conversations seeded.
- Live 64-file snapshot matches committed source byte-for-byte; actual Android ClientStore installation/hash verification and restart passed. Final client revision: 5b253cff4aa3401f454bd88e2167c2141767dbf8bf492886f767c9b23d82d8cd.
- Native tests use an emulator; physical-device keyboards were not independently inspected. Browser input focus hides the bottom navigation to leave more room for conversation.
