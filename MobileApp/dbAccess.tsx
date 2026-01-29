import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

db.transaction(tx => {
  // Check columns
  tx.executeSql(
    'PRAGMA table_info(users);', 
    [], 
    (_, { rows }) => console.log(rows._array)
  );

  // Add a column safely
  tx.executeSql(
    'ALTER TABLE users ADD COLUMN age INTEGER;',
    [],
    () => console.log('Column added!'),
    (_, error) => console.log('Error adding column:', error)
  );
});
