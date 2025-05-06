<template>
	<section class="d-flex justify-content-center align-items-center gap-5 gap-md-3 gap-lg-5 flex-wrap px-1">
		<RecipeCard
			v-for="card in cards"
			:key="card.id"
			title="cdcdcscsfvfdvs"
		/>
	</section>
</template>

<script setup>
import RecipeCard from "../ui/recipeCard.vue";

//import { ref } from 'vue';

name: "recipeCards";

//const props = defineProps({});
//const emits = defineEmits([]);

const cards = [
	{
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 0,
	},
    {
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 1,
	},
    {
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 2,
	},
    {
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 3,
	},
    {
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 4,
	},
    {
		title: "Pan",
		price: "Free",
		creator: "Lucio",
		categories: ["Argentina", "Salty"],
		stars: 4,
		imgSrc: "",
		imgAlt: "",
		id: 5,
	},
];
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>
