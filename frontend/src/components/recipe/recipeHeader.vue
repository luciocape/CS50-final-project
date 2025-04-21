<template>
	<header class="mt-5 mb-2 p-4 d-flex justify-content-between">
		<div class="">
			<h1 class="m-0">{{ title }}</h1>
			<h2 class="m-0">{{ creator }}</h2>
			<Stars :stars="4" class="mb-3" />
			<div>
				<h3>Preparation Time</h3>
				<div class="d-flex gap-2">
					<IconClock />
					<span class="fw-medium">{{ time }}</span>
				</div>
			</div>
			<div>
				<h3>Ingredients</h3>
				<ul class="ps-4 ingredients">
					<li v-for="item in ingredientes" class="fw-medium">
						{{ item }}
					</li>
				</ul>
			</div>
		</div>
		<div class="img-header bg-primary rounded-3">
			<img src="." alt="alt" />
		</div>
	</header>
</template>

<script setup>
import Stars from "../utils/stars.vue";
import IconClock from "../icons/iconClock.vue";

//import { ref } from 'vue';

name: "recipeHeader";

//const props = defineProps({});
//const emits = defineEmits([]);
const title = "Title";
const creator = "Creator";
const time = "30min";
const ingredientes = ["tomato", "chicken", "rechicken", "retomato"];
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.ingredients {
	list-style: disc;
}
.img-header {
	min-width: 200px;
	width: 40%;
	max-height: 60vh;
	aspect-ratio: 1/2;
}
</style>
