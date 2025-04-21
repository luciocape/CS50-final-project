<template>
    <section class="d-flex flex-column">
        <h2 class="text-center mb-4">More recipes from nombre</h2>
        <div class="d-flex p-2 justify-content-start justify-content-md-center gap-4 overflow-x-scroll mb-4 recipe-cards">
            <RecipeCard/><RecipeCard/><RecipeCard/>
        </div>
        <a href="" class="btn btn-primary fw-medium py-2 px-3 profile-btn m-0 m-auto">Go to the profile</a>
    </section>
</template>

<script setup>
import RecipeCard from '../ui/recipeCard.vue';

//import { ref } from 'vue';

name: 'moreRecipes'

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.profile-btn{
    color: var(--bs-bg)!important;
    box-shadow: 0 0 15px -2px var(--bs-primary);
    transition: 0.3s;
    &:hover{
    box-shadow: 0 0 0px var(--bs-primary);
    }
}
.recipe-cards{
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>