# Opening-screen update — 30 October 2026

- First paint is a Renkio opening screen with logo, indeterminate progress and a loading label.
- Native update checks/application happen behind this screen. The game is revealed only after the update handshake and initial account/home/font/character preparation. An applied snapshot can reload the WebView while the opening remains active.
- Removed the up-to-date success toast. Update progress uses “Güncelleniyor…” / “Updating…”.
- Notification deep links open after preparation, so they cannot move the app away from home during snapshot activation.
- Network preparation has a bounded wait; cached offline play remains available. A stalled/failed bootstrap exposes retry instead of remaining an endless spinner.
- No native runtime change is required; existing installed APKs receive this client update.

## Verification
- 240 automated tests passed, including both preparation/update completion orders and cached/offline completion. Six focused opening/client-bundle checks passed after the offline launch guard.
- Browser first-load and a deliberately delayed update fixture were visually inspected. The overlay remained during the delayed update; the ready menu then appeared with enabled controls and no up-to-date message.
- Actual installed Android emulator: opening observed, update/preparation completed, ready game revealed without the success toast. Repeated with Wi-Fi and mobile data disabled; cached opening completed. Network restored afterward.
- During WebView reload, diagnostic JavaScript calls can be cancelled; the device test now retries such samples rather than treating a cancelled sample as an app failure.
- Live 65-file bundle matched committed bytes. Actual Android ClientStore verified all hashes, installed the snapshot and retained the revision after restart. Revision: 2332336c8682ebeec41de83a3b9e7ea265af74089c33672869f2d25cd05d87d9.
- Native validation used an emulator, not a physical phone.
