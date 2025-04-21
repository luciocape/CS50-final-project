<template>
    <main>
        <HeadearLoged>
            <h1 class="text-secondary">Saved recipes</h1>
        </HeadearLoged>
        <div class="w-100 bg-primary rounded-bottom-5 py-1 mb-5">
            <Filters/>
        </div>
        <RecipeCards/>
    </main>
</template>

<script setup>
import RecipeCards from '../components/home/recipeCards.vue';
import Filters from '../components/ui/filters.vue';
import HeadearLoged from '../components/ui/headear-loged.vue';

//import { ref } from 'vue';

name: 'Saved'

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
</style>