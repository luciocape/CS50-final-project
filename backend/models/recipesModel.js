import db from "../db/connect.js";

const recipesModel = {
	createRecipesTable: () => {
		const query = `
        CREATE TABLE IF NOT EXISTS recipes (
        id TEXT PRIMARY KEY,
		user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        stars FLOAT DEFAULT 0.0,
        photo_cover_name TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        price INTEGER,
        prep_time INTEGER DEFAULT 10000,
        country TEXT,
        flavor TEXT,
        comments TEXT,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
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
        id TEXT PRIMARY KEY,
		step_number NUMBER NOT NULL,
		title TEXT NOT NULL,
		description TEXT NOT NULL,
		photo_name,
		recipe_id TEXT NOT NULL,
		FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
        );`;
		db.run(creation, (error) => {
			if (error) {
				console.error("Error while creating recipe_steps table", error);
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
	addRecipe: (id, user_id, title, photo_cover_name, ingredients, price, prep_time, country, flavor) => {
		const insertion = `INSERT INTO recipes (id, user_id, title, photo_cover_name, ingredients, price, prep_time, country, flavor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
		db.run(insertion, [id, user_id, title, photo_cover_name, ingredients, price, prep_time, country, flavor], function (error) {
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

export default recipesModel;
