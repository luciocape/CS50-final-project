<template>
	<main class="container-lg mt-5">
		<section class="d-flex justify-content-center gap-4">
			<div class="recipe-img d-flex flex-column justify-content-center align-items-center gap-2">
				<div class="bg-primary food w-75"></div>
				<div class="d-flex w-75 gap-2">
					<div v-for="img in 3" class="bg-secondary food flex-fill"></div>
				</div>
			</div>
			<article class="bg-secondary buying-data"></article>
		</section>
		<RecipeComents :allow-comment="false" />
	</main>
</template>

<script setup>
import RecipeComents from "../components/recipe/recipeComents.vue";

//import { ref } from 'vue';

name: "Buy";

//const props = defineProps({});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
.recipe-img {
	width: 40%;
	.food {
		aspect-ratio: 1/1;
	}
}
.buying-data {
	width: 40%;
	min-height: 300px;
}
</style>
