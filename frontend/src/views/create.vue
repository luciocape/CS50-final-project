<template>
    <main class="pt-5">
        <form class=" d-flex flex-column create-form p-3 border border-5 border-primary m-0 m-auto rounded-4" action="">
            <div class="form-inputs w-100 d-flex flex-column align-items-center justify-content-start gap-2">
                <div v-show="step === 0" class="w-100 pb-2" :class="input.id !== 3 ? ' border-bottom border-2 border-secondary line-shadow' : ''" v-for="input in descriptionInputs" :key="input.id">
                    <FormInput :label="input.label" label-align="start" :input-type="input.type" :placeholder="input.placeholder"></FormInput>
                </div>
                <div class="w-100" v-show="steps === step" v-for="steps in step">
                    <h2 class="text-center text-secondary h1">Step {{ steps }}</h2>
                    <div class="w-100 pb-2" :class="input.id + 1 !== stepsInputs.length ? ' border-bottom border-2 border-secondary line-shadow' : ''" v-for="input in stepsInputs" :key="input.id">
                        <FormInput :label="input.label" label-align="start" :input-type="input.type"></FormInput>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between w-100">
                <button v-if="step > 0" @click.prevent="step--, console.log(step)" class="button-shadow btn btn-outline-primary text-secondary fw-bold m-auto ms-0 mt-3 px-4" >Back</button>
                <div class="d-flex gap-3 m-auto me-0">
                    <button @click.prevent="step++, console.log(step)" v-if="step < 10" class="button-shadow btn btn-primary text-secondary fw-bold m-auto me-0 mt-3 px-4">Next</button>
                    <button v-if="step > 2" class="button-shadow button-finish btn text-secondary  fw-bold m-auto me-0 mt-3 px-3 py-1 border-4 border-primary" >Finish</button>
                </div>
            </div>
        </form>
    </main>
</template>

<script setup>
import FormInput from '../components/utils/formInput.vue';

import { ref } from 'vue';

name: 'Create'
const step = ref(0);
//const props = defineProps({});
//const emits = defineEmits([]);
const descriptionInputs = [
    {
        label: 'Recipe name',
        type: 'text',
        placeholder: 'Pato a la naranja',
        id: 0,
    },
    {
        label: 'Preparation time',
        type: 'time',
        placeholder: '10',
        id: 1,
    },
    {
        label: 'Ingredients',
        type: 'addItem',
        placeholder: 'Add ingredient',
        id: 2,
    },
    {
        label: 'Photo',
        type: 'file',
        placeholder: 'Upload a photo',
        id: 3,
    },
]
const stepsInputs = [
    {
        label: 'Title',
        type: 'text',
        placeholder: '',
        id: 0,
    },
    {
        label: 'Description',
        type: 'textarea',
        placeholder: '',
        id: 1,
    },
    {
        label: 'Photo',
        type: 'file',
        placeholder: 'Upload a photo',
        id: 2,
    }
]

</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
main{
    background: radial-gradient(circle, rgba(var(--bs-primary-rgb)) 0%, rgb(var(--bs-bg-rgb)) 80%);
    .create-form {
        max-width: 670px;
        margin-top: 5vh!important;
        width: 80%;
        min-width: 270px;
        min-height: 400px;
        background:  linear-gradient(130deg, $primary 0%, var(--bs-bg) 100%);
        box-shadow: 0 0 10px 0 $primary;
        .form-inputs{
            min-height: 295px;
            .line-shadow{
                box-shadow: 0 10px 15px -13px $secondary;
            }
        }
        .button-shadow{
            box-shadow: 0 4px 6px 0 rgba(0, 124, 146, 0.4);
        }
        .button-finish{
            &:hover{
                transition: .3s;
                background: $primary;
                box-shadow: 0 0 10px 0 $primary;
            }
        }
    }
}
</style>