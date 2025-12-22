import db from "../db/connect.js";

const usersModel = {
	createUsersTable: () => {
		const creation = `
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        profile_picture BLOB,
        points INTEGER DEFAULT 10000,
        stars FLOAT DEFAULT 0.0
        )`;
		db.run(creation, (error) => {
			if (error) {
				console.error("Error while creating users table", error);
			}
		});
	},
	createSavedTable: () => {
		const creation = `
        CREATE TABLE IF NOT EXISTS saved_recipes (
        user_id INTEGER FOREING KEY,
		recipe_id INTEGER FOREING KEY
        )`;
		db.run(creation, (error) => {
			if (error) {
				console.error(
					"Error while creating saved_recipes table",
					error
				);
			}
		});
	},
	createBoughtTable: () => {
		const creation = `
        CREATE TABLE IF NOT EXISTS bought_recipes (
        user_id INTEGER FOREING KEY,
		recipe_id INTEGER FOREING KEY
        )`;
		db.run(creation, (error) => {
			if (error) {
				console.error(
					"Error while creating bought_recipes table:",
					error.message
				);
			}
		});
	},
	// dropTable: () => {
	// 	const dropTable = `DROP TABLE recipe_steps;`;
	// 	db.run(dropTable, (error) => {
	// 		if (error) {
	// 			console.error("Error while deleting a table", error)
	// 		}
	// 	})
	// },
	createUser: (name, password) => {
		const insertion = `INSERT INTO users (name, password) VALUES (?, ?)`;
		db.run(insertion, [name, password], function (error) {
			if (error) {
				console.error("Error while adding user:", error.message);
			}
		});
	},
	deleteUser: (name) => {
		const deletion = `DELETE FROM users WHERE name = ?`;
		db.run(deletion, name, (error) => {
			if (error) {
				console.error("Error while deleting an user:", error.message);
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
		// return new Promise((resolve, reject) => {
			const query = `Select * FROM users WHERE name = ?`;
			db.all(query, name, (error, rows) => {
				if (error) {
					console.log(error)
					throw new Error("Error while getting user by name:", error);
				} else {
					return rows;
				}
			});
		// });
	},
	// updateUser
};

usersModel.createUsersTable();
usersModel.createBoughtTable();
usersModel.createSavedTable();

export default usersModel;
