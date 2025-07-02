<template>
    <input v-if="props.inputType !== 'textarea' && props.inputType !== 'submit' && props.inputType !== 'addItem'" :type="props.inputType" :name="props.name" :id="props.name" :placeholder="props.placeholder" class="no-submit form-control border-3 border-primary rounded-4" :class="inputType">
    <textarea v-else-if="props.inputType === 'textarea'" name="" id="" :placeholder="props.placeholder" class="form-control border-3 rounded-4 border-primary"></textarea>
    <input v-else-if="props.inputType === 'submit'" type="submit" class="submit btn btn-primary px-3 py-2 border-0 m-0 m-auto fw-medium" :value="props.value" :class="inputClass">
    <div v-else-if="props.inputType === 'addItem'" class="add-item fw-medium d-flex align-items-center gap-1 text-secondary">
        <div v-if="!addingItem" class="add-item-button d-flex align-items-center">
            <IconPlus size="20px" color="rgb(0, 124, 146)" class="plus" @click="handNewItem()"/> <span v-if="true">{{ props.placeholder }}</span>
        </div>
        <TypeInput class="item-input" v-else/>
        <LargeList :trash-allowed="true" :items="items" @delete-item="deleteItem"/>
    </div>
</template>

<script setup>
import IconPlus from '../icons/iconPlus.vue';

import { ref } from 'vue';
import IconTrash from '../icons/iconTrash.vue';
import LargeList from './largeList.vue';

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
    placeholder: {
        type: String,
        default: ''
    },
    name: {
        type: String,
    },
    value: {
        type: String
    }
});
//const emits = defineEmits([]);
const items = ref([]);
const addingItem = ref(false);
const handNewItem = () => {
    addingItem.value = true;
    setTimeout(() => {
        const itemInput = document.querySelector(".item-input");
        itemInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const newItem = itemInput.value.trim();
                if (newItem) {
                    items.value.push(newItem);
                }
                addingItem.value = false;
            }
        });
    }, 100);
};
const deleteItem = (index) => {
    items.value.splice(index, 1);
}
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
.add-item{
    .item-input{
        min-width: 115px;
        width: 30%;
    }
    .add-item-button{
        height: 42px;
        min-width: 115px;
        width: 30%;
        .plus{
            cursor: pointer;
        }
    }   
}
</style>