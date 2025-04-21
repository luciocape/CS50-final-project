<template>
	<div class="card receta p-4 border-0 rounded-3">
		<!-- :style="`backround-image:url(${props.imagen_src})`" -->
		<div
			class="d-flex justify-content-between align-items-end card-top bg-primary rounded-4 p-2"
		>
			<!-- <ul
				class="d-flex gap-1 align-items-center justify-content-start mb-0"
			>
				<li v-for="star in 5">
					<IconStar color="#007C92" :filled="star - 1 < 4" />
				</li>
			</ul> -->
			<Stars :stars="4" class="stars" />
			<span class="fw-bold price pe-2 price">Price</span>
		</div>
		<div class="card-body d-flex flex-column gap-2 pb-0">
			<div>
				<h4 class="card-title fw-bold h3">Title</h4>
				<h5>creator</h5>
			</div>

			<div class="d-flex gap-2 justify-content-start">
				<div
					v-for="item in 2"
					class="bg-secondary fw-medium rounded-pill text-primary px-2 py-1"
				>
					categoria
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import IconStar from "../icons/iconStar.vue";
import Stars from "../utils/stars.vue";

//import { ref } from 'vue';

name: "recipeCard";

const props = defineProps({
	imagen_src: {
		type: String,
	},
	img_alt: {
		type: String,
	},
	title: {
		type: String,
	},
	creator: {
		type: String,
	},
	stars: {
		type: Number,
	},
	price: {
		type: String,
	},
	categories: {
		type: Array,
	},
});
console.log("title:" + props.title);
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.receta {
	width: 28%;
	min-width: 240px !important;
	box-shadow: 2px 4px 4px -1px rgba(0, 0, 0, 0.25),
		-2px -2px 10px -4px rgba(0, 0, 0, 0.25);

	h4,
	h5 {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
		margin: 0;
	}
	.card-top {
		aspect-ratio: 17/10;
		min-height: 120px;
		.price {
			font-size: 1.2rem;
			color: var(--bs-bg);
			text-shadow: 0 2px 3px rgba(var(--bs-secondary-rgb), 0.7);
		}
		.stars {
			filter: drop-shadow(0 2px 3px var(--bs-secondary));
		}
	}
}
</style>
