import usersModel from "../models/usersModel.js"
import recipesModel from "../models/recipesModel.js"

//users tables
usersModel.createUsersTable();
usersModel.createBoughtTable();
usersModel.createSavedTable();
// usersModel.dropTable();

//recipes tables
recipesModel.createRecipesTable();
recipesModel.createStepsTable();
// recipesModel.dropTable();