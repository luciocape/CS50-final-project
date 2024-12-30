<template>
    <input :type="props.inputType" :name="props.name" :id="props.name">
</template>

<script setup>
//import { ref } from 'vue';

name: 'typeInput'

const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>