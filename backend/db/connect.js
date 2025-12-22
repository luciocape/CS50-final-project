import sqlite3 from "sqlite3"

sqlite3.verbose();

const db = new sqlite3.Database("db/database.db", (error) => {
	if (error) {
		console.error("Database connection failed:", error.message);
	}
});

export default db;
