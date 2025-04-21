<template>
    <main>
        <HeadearLoged class="mb-5">
            <div class="rounded-circle bg-secondary">
                <IconProfile size="130px" color="#22ed70"/>
            </div>
            <h1 class="h2 mb-0">Nombre</h1>
            <Stars :stars="star"/>
        </HeadearLoged>
        <RecipeCards/>
    </main>
</template>

<script setup>
import HeadearLoged from '../components/ui/headear-loged.vue';
import IconProfile from '../components/icons/iconProfile.vue';
import RecipeCards from '../components/home/recipeCards.vue';
import IconStar from '../components/icons/iconStar.vue';
import Stars from '../components/utils/stars.vue';

name: 'Creator'

const star = 4
</script>

<style scoped lang="scss">
h1{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
