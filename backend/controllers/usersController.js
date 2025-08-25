const usersModel = require("../models/usersModel");

function getAllUsers() {
	//return user_id, username, profile picture, stars
	console.log(usersModel.getAllUsers());
}

function getUserById(user_id) {
	//return recipes, profile picture, stars
}

function getUserPoints(user_id) {}

function addProfilePicture(picture) {}
function buyRecipe(recipe_id) {}

function getAllSavedRecipes() {}

function saveRecipe(recipe_id) {}

module.exports = {
	getAllUsers,
	getUserById,
	getUserPoints,
	addProfilePicture,
	buyRecipe,
	getAllSavedRecipes,
	saveRecipe,
};
