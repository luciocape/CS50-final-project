import express from "express";
import cors from "cors";

import { PORT } from "./config.js";
import db from "./db/connect.js";
import "./helpers/createTables.js"

// import recipeRoutes from "./routes/recipes"
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users"

console.log("Iniciando");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:5173"],
		methods: ["POST", "GET", "DELETE", "PUT", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);
app.get("/api", (req, res) => {
	res.send("Hello, world!");
});

// app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/recipes", recipeRoutes);

// db.close((error) => {
// 	if (error) {
// 		console.error("Error while closing db connection:", error);
// 	}
// });

//Done with AI
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

process.on('SIGTERM', () => {
    db.close((error) => {
        if (error) console.error("Error closing db:", error);
        server.close();
    });
});