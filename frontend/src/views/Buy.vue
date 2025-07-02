<template>
	<main class="container mt-5">
		<div class="d-flex gap-2 align-items-center mb-4 bg-secondary bg-opacity-75 rounded-5 p-1 text-white" style="max-width: 200px;">
			<div class="rounded-circle bg-primary" style="width: 60px; height: 60px;"></div>
			<div class="d-flex flex-column align-items-start">
				<span class="h5 font-times mb-1">Your balance</span>
				<span class="h3 font-times m-0">$15000</span>
			</div>
		</div>
		<section class="d-grid">
			<div class="row gap-4">
				<div
					class="col recipe-img d-flex flex-column justify-content-center align-items-center gap-2"
				>
					<div class="bg-primary w-100 first"></div>
					<div class="d-flex gap-2 w-100">
						<div
							v-for="img in 3"
							class="bg-secondary food flex-fill"
						></div>
					</div>
				</div>
				<article
					class="col d-flex flex-column gap-3 text-secondary buying-data rounded-4 border border-2 border-secondary mx-3 p-4 "
				>
					<div
						class="d-flex justify-content-end fw-semibold font-times"
					>
						<span>100 vendidos</span>
					</div>
					<div class="d-flex flex-column gap-2">
						<header>
							<h2 class="font-times h4">Fernando Alonso</h2>
							<h1 class="h2">Pato a la mostasa</h1>
							<Stars size="27px" :shadowed="true" stars="4" />
						</header>
						<div>
							<div class="font-times display-5">$2000</div>
							<div
								class="fw-medium font-times h5 d-flex align-items-center gap-2 m-0"
							>
								<IconClock color="rgb(0, 124, 146)" />30min
							</div>
							<h3 class="h3 font-times">Ingredients</h3>
							<LargeList :items="items" />
						</div>
					</div>
					<button class="w-100 py-2 btn btn-secondary buy-button font-times">
						Buy
					</button>
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
import LargeList from "../components/utils/largeList.vue";

//import { ref } from 'vue';

name: "Buy";

const items = [
	"1 Pato",
	"1 Mostaza",
	"1 Cucharada de miel",
	"1 Cucharada de aceite de oliva",
	"1 Cucharada de salsa de soja",
	"1 Cucharada de mostaza",
	"1 Cucharada de miel",
];

//const props = defineProps({});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
section {
	.recipe-img {
		min-width: 300px;
		height: 70vh;
		.first {
			height: 100%;
			max-height: 300px;
			border-radius: 10px;
		}
		.food {
			aspect-ratio: 3/2;
			max-height: 250px;
			border-radius: 10px;
		}
	}
	.buying-data {
		min-width: 300px;
		min-height: 300px;
		background-color: #22ed7049;
		.price {
			font-family: "Cookie", cursive;
		}
		.buy-button{
			font-size: 1.5rem;
		}
	}
}
</style>
