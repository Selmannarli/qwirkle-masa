# Android web updates

Android opens the last verified complete client snapshot in private application storage. The APK assets are used only if no complete snapshot exists. A background HTTPS request to `/api/client-bundle` downloads a complete immutable revision; SHA-256 checks cover every file and the revision. Installation stages all files before atomically changing the active pointer. Failed downloads leave the pointer unchanged. A running page pins its snapshot so files from two releases cannot mix.

At application startup the shell checks and activates a verified update on the home screen. It never reloads an active match or matchmaking request. Older shells also receive a once-per-launch check through the web client. A saved revision that cannot safely activate remains available on the next launch. The settings refresh button is no longer shown. Account and game storage stay at the original HTTPS origin.

When adding a root-level public file, add it to CLIENT_FILES in client-bundle.mjs. Asset filenames matching the supported image/font/text extensions are included automatically, except the obsolete hero image. Keep format 1 backward compatible; incompatible native capabilities require a new APK.

Checks: npm test; compile ClientStore.java with tests/ClientStoreCheck.java and run ClientStoreCheck against a writable test directory. The latter covers process recreation, offline restart, partial/corrupt updates, traversal rejection and atomic activation.
