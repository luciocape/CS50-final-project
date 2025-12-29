import usersModel from "../models/usersModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
// import jwt from "jsonwebtoken";

import { SALT_ROUNDS } from "../config.js";
import { ValidateUserInput } from "../middlewares/middlewares.js";

export async function register(req, res) {
	const { username, password, passwordConfirm } = req.body;
	console.log(username, password, passwordConfirm);
	let statusCode = 400;
	try {
		// Input validations
		ValidateUserInput.usernameLength(username);
		ValidateUserInput.passwordLength(password);
		ValidateUserInput.passwordConfirmMatch(password, passwordConfirm);
		const [error, user] = await usersModel
			.getUserByName(username)
			.catch((error) => [error, undefined]);
		console.log("user: ", user);
		if (user) throw new Error("The username is already on use");
		if (error) {
			statusCode = 500;
			throw new Error(error);
		}
		const id = crypto.randomUUID();
		const hashedPassword = await bcrypt.hash(
			password,
			parseInt(SALT_ROUNDS)
		);
		usersModel.createUser(id, username, hashedPassword);

		return res.status(201).json({
			error: null,
			user: {
				id,
				username,
				profile_picture: null,
				points: 10000,
				stars: 0,
			},
		});
	} catch (error) {
		console.error("Error in register controller:", error);
		return res
			.status(statusCode)
			.send({ error: error.message, user: null });
	}
}
export async function login(req, res) {
	const { username, password } = req.body;
	console.log(username, password);

	try {
		// Input validations
		ValidateUserInput.usernameLength(username);
		ValidateUserInput.passwordLength(password);
		const [error, user] = await usersModel
			.getUserByName(username)
			.catch((error) => [error, undefined]);
		console.log(user);
		if (!user) throw new Error("username does not exist");
		if (error) {
			statusCode = 500;
			throw new Error(error);
		}
		const passwordIsValid = await bcrypt.compare(password, user.password);
		if (!passwordIsValid) throw new Error("invalid password");
		const { password: _, ...publicUser } = user;

		return res.send({ error: null, user: publicUser });
	} catch (error) {
		console.error("Error in login controller:", error);
		return res.status(401).send({ error: error.message, user: null });
	}
}

// function recoverPassword(username){

// }
