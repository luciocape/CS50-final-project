<template>
    <div class="w-100 d-flex flex-column gap-2" :class="`text-${props.labelAlign}`">
        <label v-if="props.inputType != 'submit'" :for="props.name" class="fw-medium lead">{{ props.label }}</label>
        <TypeInput :name="props.name" :input-type="props.inputType" :value="props.value" :input-class="inputClass"/>
    </div>
</template>

<script setup>
import TypeInput from './typeInput.vue';

//import { ref } from 'vue';

name: 'FormInput'

const props = defineProps({
    name: {
        type: String
    },
    label: {
        type: String
    },
    inputType: {
        type: String
    },
    labelAlign:{
        type: String,
        default: 'center'
    },
    inputClass: {
        type: String,
        default: ''
    },
    value: {
        type: String
    }
});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>