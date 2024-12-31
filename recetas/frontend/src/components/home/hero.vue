<template>
    <section class="hero p-4 ">
        <h1 class="text-center mb-4 text-secondary">World recipes</h1>
        <div class="m-auto m-0 container">
            <TypeInput input-type="search" name="inputSearch"/>
            <Filters/>
        </div>
    </section>
</template>

<script setup>
import Filters from '../ui/filters.vue';
import TypeInput from '../utils/typeInput.vue';

//import { ref } from 'vue';

name: 'Hero'

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.hero{
    background: linear-gradient(0deg, white 0%, rgba(var(--bs-primary-rgb), 0.35) 100%);
}
</style>