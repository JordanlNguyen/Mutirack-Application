# Schema Change: startDate + startTime → startDateTime (ISO-8601)

## Summary
Changed the `practiceSession` table from two separate columns (`startDate` and `startTime`) to a single `startDateTime` column that stores the full ISO-8601 timestamp.

### Database Change
```sql
-- OLD
CREATE TABLE practiceSession(
    startDate DATE NOT NULL,
    startTime DATETIME NOT NULL,
    ...
)

-- NEW
CREATE TABLE practiceSession(
    startDateTime TEXT NOT NULL,  -- Stores ISO-8601: "2026-02-12T10:43:35.000Z"
    ...
)
```

---

## Files That MUST Be Updated

### 1. **[Frontend] MobileApp/app/src/services.jsx** (CRITICAL - 3 locations)

**Location 1 - Line 95 (Sync response handling)**
```javascript
// OLD
const { id, userId, startDate, startTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;

// NEW
const { id, userId, startDateTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;
```

**Location 2 - Line 96 (Upsert call)**
```javascript
// OLD
await db.upsertPracticeSession(id, userId, startDate, startTime, Number(duration), notes, deletedAt, createdAt, updatedAt);

// NEW
await db.upsertPracticeSession(id, userId, startDateTime, Number(duration), notes, deletedAt, createdAt, updatedAt);
```

**Location 3 - Line 253-262 (addSession method)**
```javascript
// OLD
const { userId, piecesPracticed, startDate, startTime, duration, notes } = session;
try {
    const SessionUUID = Crypto.randomUUID();
    const insertQuery = `INSERT INTO practiceSession (id, userId, startDate, startTime, duration, notes, createdAt, updatedAt) VALUES ($id, $userId, $startDate, $startTime, $duration, $notes, datetime('now'), datetime('now'))`;
    ...
    await db.runWriteQuery(insertQuery, {
        $id: SessionUUID,
        $userId: userId,
        $startDate: startDate,
        $startTime: startTime,
        ...
    });

// NEW
const { userId, piecesPracticed, startDateTime, duration, notes } = session;
try {
    const SessionUUID = Crypto.randomUUID();
    const insertQuery = `INSERT INTO practiceSession (id, userId, startDateTime, duration, notes, createdAt, updatedAt) VALUES ($id, $userId, $startDateTime, $duration, $notes, datetime('now'), datetime('now'))`;
    ...
    await db.runWriteQuery(insertQuery, {
        $id: SessionUUID,
        $userId: userId,
        $startDateTime: startDateTime,
        ...
    });
```

**Location 4 - Line 291-294 (Query for 7-day sessions)**
```javascript
// OLD
const result = await db.runGetQuery(`
    SELECT startDate, SUM(duration) as totalDuration 
    FROM practiceSession 
    WHERE userId = $userId AND startDate >= date('now', '-6 days') 
    GROUP BY startDate
`, { $userId: userId });

// NEW
const result = await db.runGetQuery(`
    SELECT startDateTime, SUM(duration) as totalDuration 
    FROM practiceSession 
    WHERE userId = $userId AND datetime(startDateTime) >= datetime('now', '-6 days') 
    GROUP BY DATE(startDateTime)
`, { $userId: userId });
```

---

### 2. **[Frontend] MobileApp/app/(tabs)/practice.jsx** (CRITICAL - Multiple locations)

**State Declaration (Line 13-14)**
```javascript
// OLD
const [startTime, setStartTime] = useState("not started");
const [startDate, setStartDate] = useState("not started");

// NEW
const [startDateTime, setStartDateTime] = useState("not started");
```

**startTimer Function (Line 22-29)**
```javascript
// OLD
const startTimer = () => {
    const { time, date } = getTime();
    if (startTime === "not started") {
      setStartTime(time);
      setStartDate(date);
    }
};

// NEW
const startTimer = () => {
    if (startDateTime === "not started") {
      const now = new Date().toISOString();
      setStartDateTime(now);
    }
};
```

**Reset Function (Line 61)**
```javascript
// OLD
setStartTime("not started");

// NEW
setStartDateTime("not started");
```

**finishSession Function (Line 77-78)**
```javascript
// OLD
startTime: startTime,
startDate: startDate,

// NEW
startDateTime: startDateTime,
```

**Component Props (Line 110)**
```javascript
// OLD
startTime={startTime}

// NEW
startDateTime={startDateTime}
```

**TimerSection Component (Line 181, 190, 207)**
```javascript
// OLD
const TimerSection = ({ hour, minute, second, startTime, resetTimer, stopTimer, startTimer }) => {
    return (
        ...
        <Text>Start Time : {startTime}</Text>
        ...
        <Pressable onPress={startTimer}>

// NEW
const TimerSection = ({ hour, minute, second, startDateTime, resetTimer, stopTimer, startTimer }) => {
    return (
        ...
        <Text>Start Time : {startDateTime}</Text>
        ...
        <Pressable onPress={startTimer}>
```

---

### 3. **[Frontend] MobileApp/app/(screens)/overview.jsx** (CRITICAL - 2 locations)

**Route Params (Line 18)**
```javascript
// OLD
const { duration, startTime, startDate, piecesID } = useLocalSearchParams();

// NEW
const { duration, startDateTime, piecesID } = useLocalSearchParams();
```

**Display Section (Line 60-64)**
```javascript
// OLD
<Text style={localStyle.infoLabel}>Date</Text>
<Text style={localStyle.infoValue}>{startDate}</Text>

<Text style={localStyle.infoLabel}>Time</Text>
<Text style={localStyle.infoValue}>{startTime}</Text>

// NEW
<Text style={localStyle.infoLabel}>Start Time</Text>
<Text style={localStyle.infoValue}>{new Date(startDateTime).toLocaleString()}</Text>
```

**Submit Function (Line 111-113)**
```javascript
// OLD
const startDateTimeISO = new Date(`${startDate}T${startTime}`).toISOString();

await services.addSession({userId, piecesPracticed, startDate, startTime, duration, notes, startDateTimeISO});

// NEW
await services.addSession({userId, piecesPracticed, startDateTime, duration, notes});
```

---

### 4. **[Frontend] MobileApp/app/(screens)/manualAdd.jsx** (CRITICAL - 2 locations)

**Variable Creation (Line 62-70)**
```javascript
// OLD
const startTime = `${String(hour24).padStart(2, "0")}:${paddedMinute}:00`;
const startDate = `${startYear}-${paddedMonth}-${paddedDay}`;
const startDateTimeISO = new Date(`${startDate}T${startTime}`).toISOString();

return (
    ...
    await services.addSession({
        ...
        startDate,
        startTime,
        ...
    });

// NEW
const startDateTime = new Date(`${startYear}-${paddedMonth}-${paddedDay}T${String(hour24).padStart(2, "0")}:${paddedMinute}:00`).toISOString();

return (
    ...
    await services.addSession({
        ...
        startDateTime,
        ...
    });
```

---

### 5. **[Frontend] MobileApp/app/(tabs)/sessions.jsx** (UPDATE - 2 locations)

**Sort Function (Line 43)**
```javascript
// OLD
return new Date(b.startDate) - new Date(a.startDate);

// NEW
return new Date(b.startDateTime) - new Date(a.startDateTime);
```

**Section Grouping (Line 49)**
```javascript
// OLD
const date = new Date(session.startDate);

// NEW
const date = new Date(session.startDateTime);
```

**Display (Line 100)**
```javascript
// OLD
<View style={localStyle.sessionDateContainer}><Text style={localStyle.sessionDateText}>{item.startDate}</Text></View>

// NEW
<View style={localStyle.sessionDateContainer}><Text style={localStyle.sessionDateText}>{new Date(item.startDateTime).toLocaleDateString()}</Text></View>
```

---

### 6. **[Frontend] MobileApp/app/(tabs)/index.jsx** (UPDATE - 1 location)

**Line 44 - Date extraction**
```javascript
// OLD
const sessionDate = session.startDate.split('T')[0]; // Extract YYYY-MM-DD

// NEW
const sessionDate = session.startDateTime.split('T')[0]; // Extract YYYY-MM-DD
```

---

### 7. **[Backend] Backend/services/sync.js** (CRITICAL - Multiple locations)

**Line 10 - Destructuring**
```javascript
// OLD
const { id, userId, duration, startDate, startTime, notes, deletedAt, createdAt, updatedAt } = session;

// NEW
const { id, userId, duration, startDateTime, notes, deletedAt, createdAt, updatedAt } = session;
```

**Line 13 - Date Combination (REMOVE)**
```javascript
// OLD
const startDateISO = new Date(`${startDate}T${startTime || '00:00:00'}`).toISOString();

// NEW
// Remove this line - startDateTime is already ISO-8601
```

**Line 22-23 & 32-33 - Prisma Upsert**
```javascript
// OLD
await prisma.practiceSession.upsert({
    where: { id },
    update: { 
        duration, 
        startDate: startDateISO,
        startTime: startDateISO,  // ← This was wrong
        ...
    },
    create: { 
        id, 
        userId, 
        duration, 
        startDate: startDateISO,
        startTime: startDateISO,  // ← This was wrong
        ...
    }
});

// NEW
await prisma.practiceSession.upsert({
    where: { id },
    update: { 
        duration, 
        startDateTime: convertToISO(startDateTime),
        ...
    },
    create: { 
        id, 
        userId, 
        duration, 
        startDateTime: convertToISO(startDateTime),
        ...
    }
});
```

---

### 8. **[Backend] Backend/prisma/schema.prisma** (CRITICAL - Must Update Schema)

**Model Definition**
```prisma
// OLD
model practiceSession {
  id         String   @id @default(uuid())
  userId     String
  duration   Int
  startDate  DateTime
  startTime  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  deletedAt  DateTime?
  notes      String?

  user            User              @relation(fields: [userId], references: [id])
  practicedPieces practicedPiece[]
}

// NEW
model practiceSession {
  id            String   @id @default(uuid())
  userId        String
  duration      Int
  startDateTime DateTime
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  deletedAt     DateTime?
  notes         String?

  user            User              @relation(fields: [userId], references: [id])
  practicedPieces practicedPiece[]
}
```

**Then run:**
```bash
cd Backend
npx prisma migrate dev --name consolidate_start_datetime
npx prisma generate
```

---

## Summary of Changes

| Layer | Change | Impact |
|-------|--------|--------|
| **SQLite Schema** | Remove `startDate` (DATE) and `startTime` (DATETIME) → Add `startDateTime` (TEXT) | ✅ Done |
| **Prisma Schema** | Remove `startDate` and `startTime` (DateTime) → Add `startDateTime` (DateTime) | ⏳ TODO |
| **Frontend Services** | Update destructuring, SQL queries, upsert calls | ⏳ TODO |
| **Frontend UI** | Update state variables, prop passing, display formatting | ⏳ TODO |
| **Backend Sync** | Update destructuring, remove date combination logic, update Prisma upsert | ⏳ TODO |

---

## Testing Checklist
- [ ] SQLite database initializes with new schema
- [ ] Adding a new session stores ISO-8601 timestamp
- [ ] Syncing to cloud works with single startDateTime field
- [ ] Sessions display correctly with parsed dates
- [ ] 7-day query still returns correct data
- [ ] Manual add functionality still works
- [ ] Sessions sort correctly by date
- [ ] Analytics/overview show correct start times

---

## Migration Path
1. Update `databaseModule.tsx` (✅ DONE)
2. Update `services.jsx` (TS backend)
3. Update `practice.jsx` (UI state)
4. Update `overview.jsx` (Session review)
5. Update `manualAdd.jsx` (Manual entry)
6. Update `sessions.jsx` (Session list)
7. Update `index.jsx` (Analytics)
8. Update `Backend/prisma/schema.prisma`
9. Update `Backend/services/sync.js`
10. Run Prisma migration
11. Test end-to-end sync
