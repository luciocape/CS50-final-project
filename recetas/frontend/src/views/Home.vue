<template>
    <main>
        <Hero/>
        <RecipeCards/>
    </main>
</template>

<script setup>
import RecipeCards from '../components/ui/recipeCard.vue';
import Hero from '../components/home/hero.vue';
import Recipe from './Recipe.vue';

//import { ref } from 'vue';

name: 'Home'

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
</style>