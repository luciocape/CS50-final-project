import usersModel from "../models/usersModel.js";
import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "../config.js";
import { ValidateUserInput } from "../middlewares/middlewares.js";

export async function register(req, res) {
	const { username, password, passwordConfirm } = req.body;
	console.log(username, password, passwordConfirm);

	try {
		ValidateUserInput.username(username);
		console.log("username validado");
		ValidateUserInput.password(password);
		console.log("password validado");
		// console.log("user: ", usersModel.getUserByName(username))
		if (usersModel.getUserByName(username)) {
			return res
				.status(400)
				.json({ error: "The username is already on use" });
		} else {
			const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
			usersModel.createUser(username, hashedPassword);
			return res.status(201).json({ token: "fake token" })
		}
	} catch (error) {
		return res.status(400).send({error: error.message});
	}
}
// export function login(req, res) {}

// function recoverPassword(username){

// }