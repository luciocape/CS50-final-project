<template>
    <div class="w-100 d-flex flex-column gap-2" :class="`text-${props.labelAlign}`">
        <label v-if="props.inputType != 'submit'" :for="props.name" class="fw-medium lead">{{ props.label }}</label>
        <div class="d-flex position-relative">
            <TypeInput :name="props.name" :input-type="showPassword ? 'text' : props.inputType" :value="props.value" :input-class="inputClass" :placeholder="props.placeholder"/>
            <IconEye v-if="props.inputType === 'password' && showPassword" @click="showPassword = !showPassword" class="eye-icon position-absolute end-0 align-self-center mb-1 me-3" size="20px" />
            <IconEyeClosed v-else-if="props.inputType === 'password'" @click="showPassword = !showPassword" class="eye-icon position-absolute end-0 align-self-center mb-1 me-3" size="20px" />
        </div>
    </div>
</template>

<script setup>
import IconEye from '../icons/iconEye.vue';
import IconEyeClosed from '../icons/iconEyeClosed.vue';
import TypeInput from './typeInput.vue';

import { ref } from 'vue';

name: 'FormInput'

const props = defineProps({
    name: {
        type: String
    },
    label: {
        type: String
    },
    placeholder: {
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

const showPassword = ref(false)
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.eye-icon {
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
    }
}
</style>