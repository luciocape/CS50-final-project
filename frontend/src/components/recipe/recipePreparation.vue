<template>
    <section class="mt-5">
        <h2 class="text-center">Preparation</h2>
        <div class="d-flex justify-content-between step p-4">
            <div class="text">
                <h3>Paso 1:</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellendus ut, dolore sapiente fuga voluptatum sint et nemo eligendi quia atque placeat magni quis quo provident animi consequatur distinctio asperiores.</p>
            </div>
            <div class="bg-primary img rounded-2"></div>
        </div>
    </section>
</template>

<script setup>
//import { ref } from 'vue';

name: 'recipePreparation';

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.step{
    .text{
        width: 60%;
    }
    .img{
        min-width: 250px;
        width: 36%;
        aspect-ratio: 3/2;
    }
}
</style>