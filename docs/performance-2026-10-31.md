# Connection and persistence optimization — 2026-10-31

Changes: coalesce pending durable snapshots (acknowledgements still wait for the requested generation), respect SSE socket backpressure, reuse seat payloads, deduplicate in-flight reads only, remove duplicate reconnect subscriptions, ignore callbacks from replaced streams, align fallback polling with the 15-second authoritative heartbeat, skip unchanged profile/friend/lobby rendering and avoid serializing board/history on cosmetic packets. Hidden pages skip clock/character work.

Verification: 245 tests passed, including slow sockets, failed save recovery, concurrent durable writes, reconnect/finished-match synchronization, private hands and render-change detection. Real Firebase anonymous-account economy/restart and social authorization integrations passed. Local browser: create/join/start, select/place/commit tile, score and turn update passed.

Isolated local benchmark: 90 two-seat rooms, 180 fixture profiles, 2,000 fixture messages; 20 independent simultaneous durable actions. Completion fell from 359.75 ms to 47.12 ms. Health probe maximum during writes fell from 216.50 ms to 28.41 ms. Ordinary state-read p95 was essentially unchanged (40.02 vs 39.91 ms). These are local disk/server measurements, not a promise of internet latency or device frame rate. Raw results are retained outside the repository in the work directory. Production data was not used for this benchmark.

Native runtime unchanged; client-bundle manifest includes the new network module so installed Android clients receive the complete atomic update. Free Render cold starts and users' network latency remain external limits.
