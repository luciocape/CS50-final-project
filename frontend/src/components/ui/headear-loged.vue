<template>
    <header class="pt-3 d-flex flex-column justify-content-center align-items-center bg-secondary bg-opacity-50" :style="`background-image:url('${props.img_src}'')`">
        <slot></slot>
    </header>
</template>

<script setup>
//import { ref } from 'vue';

name: 'header-loaded'

const props = defineProps({
img_src: {
    type: String
}
});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
header{
    height: 45vh;
    min-height: fit-content;
    background-size: cover;
    background-position: center;
}
</style>\