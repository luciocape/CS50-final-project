const usersModel = require("../models/usersModel");

function register(username, password) {
    if (usersModel.getUserByName(username)) {
		return "The username is already on use";
	} else{
        usersModel.createUser(username, password)
    }
}
function login(username, password) {}

// function recoverPassword(username){

// }

module.exports = { login, register /*recoverPassword*/ };
