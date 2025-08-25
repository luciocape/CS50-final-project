const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authControllers");

router.post("/register", (req, res) => {
	const { username, password } = req.body;
	register(username, password);
});

router.get("/login", (req, res) => {
	const { username, password } = req.body;
	login(username, password);
});

module.exports = router;
