import { addRecipe } from "../models/recipesModel.js";

export function createRecipe(req, res) {
	const { title, prep_time, country, flavor, ingredients, steps } = req.body;
	try {
		// Parseamos los que enviamos como JSON.stringify
		// Usamos un condicional por si acaso vienen vacíos
		// IA
		const stepsParsed = steps ? JSON.parse(steps) : [];

		const photo_cover_name = req.files["photo_cover"]
			? req.files["photo_cover"][0].filename
			: null;

		// Aquí creamos un array con solo los nombres (strings)
		let photo_steps_names = [];
		if (req.files["photo_steps"]) {
			photo_steps_names = req.files["photo_steps"].map(
				(file) => file.filename
			);
		}

		const id = crypto.randomUUID();

		addRecipe(id, user_id, title, photo_cover_name, ingredients, price, prep_time, country, flavor);
	} catch (error) {
		res.status(500).send({ error: `Internal error: ${error}` });
	}
}

export function getAllRecipes() {}

export function getRecipeById(recipe_id) {
	// Return title, stars, time, country, flavours, ingredients, img, steps, coments.
}
