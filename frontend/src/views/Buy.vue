<template>
	<main class="container mt-5">
		<section class="d-grid">
			<div class="row gap-4">
				<div
					class="col recipe-img d-flex flex-column justify-content-center align-items-center gap-2"
				>
					<div class="bg-primary w-100 food"></div>
					<div class="d-flex gap-2 w-100">
						<div
							v-for="img in 3"
							class="bg-secondary food flex-fill"
						></div>
					</div>
				</div>
				<article
					class="col text-secondary buying-data rounded-4 border border-2 border-secondary mx-3 p-4"
				>
					<div class="d-flex justify-content-end fw-semibold font-times">
						<span>100 vendidos</span>
					</div>
					<h2 class="font-times h4">Fernando Alonso</h2>
					<h1 class="">Pato a la mostasa</h1>
					<Stars size="27px" :shadowed="true" stars="4" />
					<div class="font-cookie display-4">$2000</div>
					<div
						class="fw-medium font-cookie h3 d-flex align-items-center gap-2"
					>
						<IconClock color="rgb(0, 124, 146)" />30min
					</div>
				</article>
			</div>
		</section>
		<RecipeComents :allow-comment="false" />
	</main>
</template>

<script setup>
import Stars from "../components/utils/stars.vue";
import RecipeComents from "../components/recipe/recipeComents.vue";
import IconClock from "../components/icons/iconClock.vue";

//import { ref } from 'vue';

name: "Buy";

//const props = defineProps({});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
section {
	.recipe-img {
		min-width: 300px;
		.food {
			aspect-ratio: 3/2;
			max-height: 250px;
		}
	}
	.buying-data {
		min-width: 300px;
		min-height: 300px;
		background-color: #22ed7049;
		.price {
			font-family: "Cookie", cursive;
		}
	}
}
</style>
