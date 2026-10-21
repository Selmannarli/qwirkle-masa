# Open games (1.5)

Returning to the home screen closes the event stream and preserves the seat. It never calls the surrender endpoint. Online timers continue on the server while a player is away.

The home list combines account-owned active rooms from authenticated `POST /api/games` with the local practice save. Only the requesting account's seat token is returned; opponents' tokens and hands are excluded. Private rooms and public matches share the same resume behavior. A public search still reconnects to an existing public match; private games can coexist with it.

Room drafts and rack order are saved per room on this device. On resume, drafts are rebased against the current board and hand. Account-owned room discovery also works on a second signed-in device; local drafts and practice saves do not sync across devices. As before, the free server's storage is temporary.

Each player's cumulative timeout count is stored in the game and is never reset by a successful turn. On the third timeout that player is eliminated. Two-player games end immediately; larger games skip the eliminated seat until one player remains, or the ordinary game end condition occurs. Surrender is a separate confirmed settings action with the same elimination behavior.

The launcher source is `design/launcher.svg`, using the exact `SHAPE_PATHS[4]` path from the game. Extrusion and lighting preserve its asymmetry. The rendered PNG is used by both the web header and Android launcher. Updating the launcher itself requires installing the new APK.
