<template>
    <input :type="props.inputType" :name="props.name" :id="props.name" class="form-control border-3 border-primary" :class="inputType">
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
input{
    background-color: var(--bs-bg)!important;
}
.search{
    border-radius: 50rem!important;
    box-shadow: inset 0 -3px 10px rgba(var(--bs-secondary-rgb), 0.75);
    height: 3.3rem;
    &:focus{
        box-shadow: inset 0 -3px 10px rgba(var(--bs-primary-rgb), 0.75)!important;
    }
}
</style>