<template>
    <input v-if="props.inputType !== 'textarea' && props.inputType !== 'submit' && props.inputType !== 'addItem'" :type="props.inputType" :name="props.name" :id="props.name" :placeholder="props.placeholder" class="no-submit form-control border-3 border-primary rounded-4" :class="inputType">
    <textarea v-else-if="props.inputType === 'textarea'" name="" id="" :placeholder="props.placeholder" class="form-control border-3 rounded-4 border-primary"></textarea>
    <input v-else-if="props.inputType === 'submit'" type="submit" class="submit btn btn-primary px-3 py-2 border-0 m-0 m-auto fw-medium" :value="props.value" :class="inputClass">
    <div v-else-if="props.inputType === 'addItem'" class="add-item fw-medium d-flex align-items-center gap-1 text-secondary">
        <div v-if="!addingItem" class="add-item-button d-flex align-items-center">
            <IconPlus size="20px" color="rgb(0, 124, 146)" class="plus" @click="handNewItem()"/> <span v-if="true">{{ props.placeholder }}</span>
        </div>
        <TypeInput class="item-input" v-else/>
        <div v-if="items.length >= 1" class="position-relative items-list-container">
            <span class="d-flex justify-content-center align-items-center number-of-items position-absolute rounded-circle p-2">{{ items.length }}</span>
            <div  class=" items w-100 bg-body rounded-3 ms-3 overflow-hidden">
                <ul  class="border border-2 border-info list-group d-flex flex-column m-0 bg-body rounded-3 ">
                    <li class="list-group-item m-0 pt-1 w-100 d-flex" v-for="item in items"><span class="text w-75 overflow-x-hidden">{{ item }}</span><IconTrash @click="deleteItem(items.indexOf(item))" size="25px" color="rgb(0, 124, 146)" class="icon-trash"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconPlus from '../icons/iconPlus.vue';

import { ref } from 'vue';
import IconTrash from '../icons/iconTrash.vue';

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
.icon-trash{
    &:hover{
        cursor: pointer;
        scale: 1.1
    }
}
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
    .items-list-container{
        width: 45%;
        max-width: 200px;
        .number-of-items{
            width: 30px;
            height: 30px;
            right: -20px;
            box-shadow: 3px -3px 10px -3px rgba(var(--bs-secondary-rgb), 0.75);
            top: -10px;
            background: linear-gradient(var(--bs-bg) 0%, $primary 100%)!important;
            aspect-ratio: 1/1!important;
            z-index: 199;
        }
        .items{
            height: 40px;
            &:hover{
                overflow: visible!important;
            }
            ul{
                height: fit-content;
                width: calc(100% + 17px);
                max-height: 250px; 
                overflow-y: scroll;
                li{
                    .text{
                        display: inline-block;
                    }
                }
            }
        }
    }
}
</style>