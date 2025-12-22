import express from "express";
const router = express.Router();
import { register } from "../controllers/authControllers.js";

router.post("/register", (req, res) => {
	register(req, res);
});

// router.get("/login", (req, res) => {
// 	login(req, res);
// });

export default router;
