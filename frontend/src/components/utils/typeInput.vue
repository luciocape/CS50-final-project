<template>
    <input v-if="props.inputType !== 'textarea' && props.inputType !== 'submit' && props.inputType !== 'addItem'" :type="props.inputType" :name="props.name" :id="props.name" class="no-submit form-control border-3 border-primary rounded-4" :class="inputType">
    <textarea v-else-if="props.inputType === 'textarea'" name="" id="" class="form-control border-3 rounded-4 border-primary"></textarea>
    <input v-else-if="props.inputType === 'submit'" type="submit" class="submit btn btn-primary px-3 py-2 border-0 m-0 m-auto fw-medium" :value="props.value" :class="inputClass">
    <div v-else-if="props.inputType === 'addItem'" class="fw-medium d-flex align-items-center gap-1 text-secondary">
        <IconPlus size="20px" color="rgb(0, 124, 146)"/> Add ingredient
    </div>
</template>

<script setup>
import IconPlus from '../icons/iconPlus.vue';

//import { ref } from 'vue';

name: 'typeInput'

const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    inputClass: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String
    }
});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.no-submit, textarea{
    background-color: var(--bs-bg)!important;
}
textarea{
    min-height: 80px!important;
    max-height: 140px;
}
.search{
    border-radius: 50rem!important;
    box-shadow: inset 0 -3px 10px rgba(var(--bs-secondary-rgb), 0.75);
    height: 3.3rem;
    &:focus{
        box-shadow: inset 0 -3px 10px rgba(var(--bs-primary-rgb), 0.75)!important;
    }
}
.submit{
    color: var(--bs-bg)!important;
}
</style>