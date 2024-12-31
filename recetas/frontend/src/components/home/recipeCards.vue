<template>
    <RecipeCard v-for="item in cards" :key="item.id" :title="item.title" :price="item.price" :creator="item.creator" :categories="item.categories" :stars="item.stars" />
</template>

<script setup>
import RecipeCard from '../ui/recipeCard.vue';

//import { ref } from 'vue';

name: "recipeCards";

//const props = defineProps({});
//const emits = defineEmits([]);

const cards = [
    {
        title: 'Pan',
        price: 'Free',
        creator: 'Lucio',
        categories: ['Argentina', 'Salty'],
        stars: 4,
        imgSrc: '',
        imgAlt: '',
        id: 0
    },
    // {
    //     title: '',
    //     price: 'Free',
    //     creator: '',
    //     categories: ['', ''],
    //     stars: 5,
    //     imgSrc: '',
    //     imgAlt: '',
    //     id: 1
    // },
    // {
    //     title: '',
    //     price: 'Free',
    //     creator: '',
    //     categories: ['', ''],
    //     stars: 5,
    //     imgSrc: '',
    //     imgAlt: '',
    //     id: 2
    // },
    // {
    //     title: '',
    //     price: 'Free',
    //     creator: '',
    //     categories: ['', ''],
    //     stars: 3,
    //     imgSrc: '',
    //     imgAlt: '',
    //     id: 3
    // },
    // {
    //     title: '',
    //     price: '',
    //     creator: '',
    //     categories: ['', ''],
    //     stars: 0,
    //     imgSrc: '',
    //     imgAlt: '',
    //     id: 4
    // },
    // {
    //     title: '',
    //     price: '',
    //     creator: '',
    //     categories: ['', ''],
    //     stars: 0,
    //     imgSrc: '',
    //     imgAlt: '',
    //     id: 5
    // },
]
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>
