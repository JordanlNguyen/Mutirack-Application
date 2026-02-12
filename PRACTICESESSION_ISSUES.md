# PracticeSession Issues Found

## CRITICAL ISSUES - Must Fix Immediately

### 1. **[Frontend] MobileApp/app/src/services.jsx - Line 95-96** ⚠️ BREAKING
**Issue:** Sync response handler still destructures `startDate` and `startTime` instead of `startDateTime`

```javascript
// WRONG - Line 95-96
const { id, userId, startDate, startTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;
await db.upsertPracticeSession(id, userId, startDate, startTime, Number(duration), notes, deletedAt, createdAt, updatedAt);

// CORRECT
const { id, userId, startDateTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;
await db.upsertPracticeSession(id, userId, startDateTime, Number(duration), notes, deletedAt, createdAt, updatedAt);
```

**Impact:** When backend sends synced data with `startDateTime`, the frontend tries to destructure `startDate` and `startTime` (which don't exist), so they become `undefined`. Then passes them to `upsertPracticeSession()` which expects different parameters.

---

### 2. **[Frontend] MobileApp/app/src/services.jsx - Line 253-262** ⚠️ BREAKING
**Issue:** `addSession()` method still uses old `startDate` and `startTime` structure

```javascript
// WRONG - Line 253
const { userId, piecesPracticed, startDate, startTime, duration, notes } = session;

// WRONG - Line 256
const insertQuery = `INSERT INTO practiceSession (id, userId, startDate, startTime, duration, notes, createdAt, updatedAt) VALUES ($id, $userId, $startDate, $startTime, $duration, $notes, datetime('now'), datetime('now'))`;

// WRONG - Line 261-262
$startDate: startDate,
$startTime: startTime,

// CORRECT
const { userId, piecesPracticed, startDateTime, duration, notes } = session;
const insertQuery = `INSERT INTO practiceSession (id, userId, startDateTime, duration, notes, createdAt, updatedAt) VALUES ($id, $userId, $startDateTime, $duration, $notes, datetime('now'), datetime('now'))`;
$startDateTime: startDateTime,
```

**Impact:** When adding a session, it tries to insert into `startDate` and `startTime` columns that no longer exist in SQLite table (now uses `startDateTime`). Query will fail.

---

### 3. **[Frontend] MobileApp/app/src/services.jsx - Line 291-294** ⚠️ BREAKING
**Issue:** 7-day session duration query still references old column names

```javascript
// WRONG - Line 291-294
const result = await db.runGetQuery(`
    SELECT startDate, SUM(duration) as totalDuration 
    FROM practiceSession 
    WHERE userId = $userId AND startDate >= date('now', '-6 days') 
    GROUP BY startDate
`, { $userId: userId });

// CORRECT
const result = await db.runGetQuery(`
    SELECT startDateTime, SUM(duration) as totalDuration 
    FROM practiceSession 
    WHERE userId = $userId AND datetime(startDateTime) >= datetime('now', '-6 days') 
    GROUP BY DATE(startDateTime)
`, { $userId: userId });
```

**Impact:** Query tries to select from `startDate` column that doesn't exist. Query fails, breaks analytics.

---

## Summary Table

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| services.jsx | 95-96 | Destructures old fields in sync response | 🔴 CRITICAL | ❌ NOT FIXED |
| services.jsx | 253-262 | addSession() uses old column names in INSERT | 🔴 CRITICAL | ❌ NOT FIXED |
| services.jsx | 291-294 | 7-day query uses old column names | 🔴 CRITICAL | ❌ NOT FIXED |
| databaseModule.tsx | 52-59 | SQLite table schema uses new `startDateTime` | ✅ OK | ✅ FIXED |
| Backend/services/sync.js | 10, 18-33 | Destructures and uses `startDateTime` | ✅ OK | ✅ FIXED |

---

## What Will Break If Not Fixed

1. ❌ **Adding new sessions** - Will crash trying to insert into non-existent columns
2. ❌ **Cloud sync** - Will crash trying to parse missing `startDate`/`startTime` from backend
3. ❌ **Analytics** - Will crash trying to query 7-day data
4. ❌ **Manual add** - Will fail when trying to save sessions
5. ❌ **Overview screen** - Can't save completed sessions

---

## Files Still Referencing Old Schema

✅ = Updated  
❌ = NOT Updated

- ✅ databaseModule.tsx - Uses `startDateTime`
- ✅ Backend/services/sync.js - Uses `startDateTime`
- ❌ services.jsx - Still uses `startDate` and `startTime` (3 locations)
- ⏳ Other files (practice.jsx, overview.jsx, etc.) - Need to verify they're passing correct data

---

## Recommended Fix Order

1. Fix `addSession()` method (Line 253-262) - Most critical, breaks session creation
2. Fix sync response handler (Line 95-96) - Breaks cloud sync
3. Fix 7-day query (Line 291-294) - Breaks analytics
4. Test entire flow end-to-end
