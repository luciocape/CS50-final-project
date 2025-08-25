const usersModel = require("../models/usersModel");
const recipesModel = require("../models/recipesModel");

//users tables
usersModel.createUsersTable();
usersModel.createBoughtTable();
usersModel.createSavedTable();
// usersModel.dropTable();

//recipes tables
recipesModel.createRecipesTable();
recipesModel.createStepsTable();
// recipesModel.dropTable();