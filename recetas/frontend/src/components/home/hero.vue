<template>
    <section class="hero">
        <h1>World recipes</h1>
        <div class="w-75">
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
</style>