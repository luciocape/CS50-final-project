import usersModel from "../models/usersModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
// import jwt from "jsonwebtoken";

import { SALT_ROUNDS } from "../config.js";
import { ValidateUserInput } from "../middlewares/middlewares.js";

export async function register(req, res) {
	const { username, password, passwordConfirm } = req.body;
	console.log(username, password, passwordConfirm);

	try {
		// Input validations
		ValidateUserInput.username(username);
		ValidateUserInput.password(password);
		ValidateUserInput.passwordConfirmMatch(password, passwordConfirm);
		const user = usersModel.getUserByName(username);
		if (user) throw new Error("The username is already on use");

		const id = crypto.randomUUID();
		const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
		usersModel.createUser(id, username, hashedPassword);

		return res.status(201).json({ token: "fake token" })
	} catch (error) {
		return res.status(400).send({error: error.message});
	}
}
export async function login(req, res) {
	const { username, password } = req.body;

	try {
		ValidateUserInput.username(username);
		ValidateUserInput.password(password);
		const user = usersModel.getUserByName(username);
		if (!user) throw new Error("username does not exist");

		const passwordIsValid = await bcrypt.compare(password, user.password);
		if (!passwordIsValid) throw new Error("invalid password");
		return res.send({ user })

	} catch (error){
		return res.status(401).send({error: error.message});
	}
}

// function recoverPassword(username){

// }