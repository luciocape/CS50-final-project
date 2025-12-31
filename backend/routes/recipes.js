import express from "express";
const router = express.Router();

import { getAllRecipes, createRecipe, getRecipeById } from "../controllers/recipesController.js";
import upload from "../middlewares/uploadMiddleware.js";

const procesarArchivos = upload.fields([
    { name: 'photo_cover', maxCount: 1 },  // Esperamos 1 portada
    { name: 'photo_steps', maxCount: 10 }  // Esperamos hasta 10 fotos de pasos
]);

router.post("/create", procesarArchivos, createRecipe);

router.get("/get-all", (req, res) => {
    
});

router.get("/:recipe_id", (req, res) => {
    // Return title, stars, time, country, flavours, ingredients, img, steps, coments.
});

export default router;