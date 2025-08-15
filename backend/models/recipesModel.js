const db = require("../db/connect");

const recipesModel = {
	createTable: () => {
		const query = `
        CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        creator_name TEXT NOT NULL,
        title TEXT NOT NULL,
        stars FLOAT DEFAULT 0.0,
        photo BLOB,
        ingredients TEXT NOT NULL,
        price INTEGER
        prep_time INTEGER DEFAULT 10000,
        country TEXT,
        flavours TEXT,
        comments TEXT
        )`;
		db.run(query, (error) => {
			if (error) {
				console.error("Error while creating recipes table", error);
			}
		});
	},
	createStepsTable: () => {
		const creation = `
        CREATE TABLE IF NOT EXISTS recipe_steps (
        id INTEGER PRIMARY KEY,
		description TEXT NOT NULL,
		photo BLOB
		recipe_id INTEGER FOREING KEY
        )`;
		db.run(creation, (error) => {
			if (error) {
				console.error(
					"Error while creating recipe_steps table",
					error
				);
			}
		});
	},
	addRecipe: (name, password) => {
		const insertion = `INSERT INTO recipes (name, password) VALUES (?, ?)`;
		db.run(insertion, [name, password], function (error) {
			if (error) {
				console.error("Error while adding user:", error.message);
			}
		});
	},
	getAllRecipes: (limit) => {
		const query = `SELECT (title, creator_name, price, stars, prep_time, country, flavours) FROM recipes ORDER BY stars LIMIT ?`;
		db.all(query, limit, (error, rows) => {
			if (error) {
				console.error(
					"Error while getting all recipes:",
					error.message
				);
			} else {
				return rows;
			}
		});
	},
	getRecipeById: (id) => {
		const query = `Select * FROM recipes WHERE id = ?`;
		db.all(query, id, (error, rows) => {
			if (error) {
				console.error("Error while getting recipe:", error);
			} else {
				return rows;
			}
		});
	},
	
};

module.exports = recipesModel;
