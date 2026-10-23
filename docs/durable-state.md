# Durable state setup

The game supports a no-cost Firebase Spark Firestore database. Server-only collections: `renkio_rooms`, `renkio_profiles`, `renkio_matches`, `renkio_friends`, `renkio_invites`. Direct client access must be denied using firestore.rules. Firebase Authentication remains unchanged.

Create a dedicated service account in qwirkle-v-selman with the Cloud Datastore User role. Do not use a project Owner/Editor key. Creating this new persistent server credential requires the user's explicit approval. Store its JSON only in Render's secret environment value FIREBASE_ADMIN_JSON, never in Git or client assets. Billing stays disabled.

The server loads remote state before accepting connections. Remote load failures abort startup, avoiding an empty-server overwrite. Only changed entity documents are written; read-only friend polls do not create extra writes. Saved games preserve hidden hands and seat tokens inside server-only Firestore documents. Normal browser APIs expose only the requesting player's hand.

Without the secret the server uses local files for development, which are not durable on free Render. Do not claim durable production storage until activation and verification on a fresh deployment.

Deployment verification: authenticated players establish a friendship and a game, restart/redeploy the server, and confirm the same relationship, room, private hand, short tag and turn remain available. Remove only explicitly disposable test accounts/data after the test.

Activation authorized by the user on 23 October 2026. Dedicated service account renkio-state with Cloud Datastore User was created. The default Firestore database already exists in eur3 on Spark. Existing legacy lobbies/rooms/users rules were reviewed; unmatched new Renkio collections are already denied to clients, so no live rules replacement was needed. A real Firestore test verified fresh-store restoration and removed only its isolated temporary verification documents.

Production verification completed on 23 October 2026: Render deployment dep-dbdt8e8n74is73er08sg serves e161585 with durable=true. Two disposable Firebase anonymous identities established friendship using five-digit tags and started an untimed game. After a real Render service restart, both tags, friendship, open game, match ID and private hand were unchanged. Only these two temporary accounts and their associated game were then removed through the account deletion API. No paid resources were enabled.
