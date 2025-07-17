const db = require("../db/connect");

const usersModel = {
	createTable: () => {
		const query = `
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        profile_picture BLOB,
        points INTEGER DEFAULT 10000,
        stars FLOAT DEFAULT 0.0
        )`;
		db.run(query, (error) => {
			if (error) {
				console.error("Error while creating users table", error);
			}
		});
	},
	addUser: (name, password) => {
		const insertion = `INSERT INTO users (name, password) VALUES (?, ?)`;
		db.run(insertion, [name, password], function (error) {
			if (error) {
				console.error("Error while adding user:", error.message);
			}
		});
	},
	getAllUsers: (limit) => {
		const query = `SELECT (name, picture, stars) FROM users LIMIT ?`;
		db.all(query, limit, (error, rows) => {
			if (error) {
				console.error("Error while getting all users:", error.message);
			} else {
				return rows;
			}
		});
	},
	getUserByName: (name) => {
		const query = `Select * FROM users WHERE name = ?`;
		db.all(query, name, (error, rows) => {
			if (error) {
				console.error("Error while getting user:", error);
			} else {
				return rows;
			}
		});
	},
	// updateUser
};

module.exports = usersModel;
