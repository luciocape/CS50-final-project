console.log("Iniciado");
const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

function start() {
	const app = express();
	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());
	
	const port = 3000;
	
	app.use(
		cors({
			origin: ["*"],
			methods: ["POST", "GET", "DELETE"],
			allowedHeaders: ["Content-Type", "Authorization"],
			credentials: true,
		})
	);
	app.get("/api", (req, res) => {
		res.send("Hello, world!");
	});

	app.use("/api/user", userRoutes);
	app.use("/api/auth", authRoutes);
	app.use("/api/recipes", recipeRoutes);
	
	app.listen(port, () => {
		console.log(`Servidor escuchando en el puerto ${port}`);
	});
}

start();