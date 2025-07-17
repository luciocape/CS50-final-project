const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("db/database.db", (error) => {
	if (error) {
		console.error("Database connection failed:", error.message);
	}
});

module.exports = db;
