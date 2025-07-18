const sqlite3 = require("sqlite3").verbose();
const usersModel = require("../models/usersModel");
const recipesModel = require("../models/recipesModel");

const db = new sqlite3.Database("db/database.db", (error) => {
	if (error) {
		console.error("Database connection failed:", error.message);
	}
});
usersModel.createTable();
recipesModel.createTable();

module.exports = db;
