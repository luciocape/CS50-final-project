<template>
	<div class="container-lg">
		<recipeHeader />
		<main>
			<RecipePreparation />
            <RecipeComents/>
			<MoreRecipes/>
		</main>
	</div>
</template>

<script setup>
// import HeadearLoged from "../components/ui/headear-loged.vue";
import RecipePreparation from "../components/recipe/recipePreparation.vue";
import recipeHeader from "../components/recipe/recipeHeader.vue";
import RecipeComents from "../components/recipe/recipeComents.vue";
import MoreRecipes from "../components/recipe/moreRecipes.vue";
//import { ref } from 'vue';

name: "Recipe";

//const props = defineProps({});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
</style>
