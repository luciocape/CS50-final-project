<script setup>
import worldRecipesFooter from './components/worldRecipesFooter.vue';
import worldRecipesHeader from './components/worldRecipesHeader.vue';
</script>

<template>
    <worldRecipesHeader />
    <router-view/>
    <worldRecipesFooter />
</template>

<style scoped>
</style>
