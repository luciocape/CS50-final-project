import express from "express";
const router = express.Router();
import { register, login } from "../controllers/authControllers.js";

router.post("/register", async (req, res) => {
	await register(req, res);
});

router.post("/login", async (req, res) => {
	await login(req, res);
});

export default router;
