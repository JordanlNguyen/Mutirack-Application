# Phase 1 - Local App and Storage
- In this phrase, I will be creating the base UI with basic features including
    - session and note tracking
    - session editing
    - session deletion
    - and session views (in times)

## storage approach
this phase will include a local storage option using SQLite where database will store practice sessions and pieces that user has been practicing

### table relations
![Diagram](./practice_session_entity_relation.drawio.pdf)

once a created, a practice session will have properties describing the time of the practice session. Pieces hold the foriegn key of a practice session.

## Practice Sessions
- A practice session should contain the following
    1. times
    - a. duration of practice
    - b. start time
    - c. end time
    - d. pause time = (startTime - endTime) - duration
    2. music information
    - piece(s) practiced
    - notes about practice sessions
