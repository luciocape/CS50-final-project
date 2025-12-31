<template>
	<input
		v-if="
			!['textarea', 'submit', 'addItem', 'select', 'file'].includes(
				props.inputType
			)
		"
		:required="props.inputRequired"
		:type="props.inputType"
		:name="props.name"
		:id="props.name"
		:placeholder="props.placeholder"
		class="no-submit border-2 form-control mb-1 rounded-4 m-auto bg-body bg-opacity-50"
		:class="inputType + ' ' + inputClass"
	/>
	<input
		v-else-if="props.inputType === 'file'"
		:required="props.inputRequired"
		type="file"
		accept=".jpg, .png, .webp"
		:name="props.name"
		:id="props.name"
		:placeholder="props.placeholder"
		class="no-submit border-2 form-control mb-1 rounded-4 m-auto bg-body bg-opacity-50"
		:class="inputType + ' ' + inputClass"
	/>
	<textarea
		v-else-if="props.inputType === 'textarea'"
		:required="props.inputRequired"
		:name="props.name"
		:id="props.name"
		:placeholder="props.placeholder"
		class="form-control rounded-4 border-2 bg-body bg-opacity-50"
	></textarea>
	<input
		v-else-if="props.inputType === 'submit'"
		type="submit"
		class="submit btn btn-primary px-3 py-2 border-0 m-0 m-auto fw-medium"
		:value="props.value"
		:class="inputClass"
	/>
	<select
		v-else-if="props.inputType === 'select'"
		:required="props.inputRequired"
		:name="props.name"
		:id="props.name"
		class="px-2 overflow-x-hidden w-100 border-2 fw-medium form-select mb-1 rounded-4 bg-body bg-opacity-50"
	>
		<option v-for="option in props.options" :value="option" class="">
			{{ option }}
		</option>
	</select>
	<div
		v-else-if="props.inputType === 'addItem'"
		class="add-item fw-medium d-flex align-items-center justify-content-start gap-2 gap-sm-3 gap-md-4 text-secondary"
	>
		<div
			v-if="!addingItem"
			class="add-item-button d-flex align-items-center"
		>
			<IconPlus
				size="20px"
				color="rgb(0, 124, 146)"
				class="plus"
				@click="handNewItem()"
			/>
			<span v-if="true">{{ props.placeholder }}</span>
		</div>
		<TypeInput class="item-input" v-else />
		<LargeList
			:trash-allowed="true"
			:items="ingredients"
			@delete-item="deleteItem"
		/>
	</div>
</template>

<script setup>
import IconPlus from "../icons/iconPlus.vue";

import { inject, ref } from "vue";
import IconTrash from "../icons/iconTrash.vue";
import LargeList from "./largeList.vue";

name: "typeInput";
const props = defineProps({
	inputType: {
		type: String,
		default: "text",
	},
	options: {
		type: Array,
		default: [],
	},
	inputClass: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "",
	},
	name: {
		type: String,
	},
	value: {
		type: String,
	},
	inputRequired:{
		type: Boolean,
	}
});
//const emits = defineEmits([]);

const ingredients = inject("ingredients");
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
					ingredients.value.push(newItem);
				}
				addingItem.value = false;
			}
		});
	}, 100);
};
const deleteItem = (index) => {
	ingredients.value.splice(index, 1);
};
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
// .blured {
//     background: rgba(255, 255, 255, 0.7)!important;
//     backdrop-filter: blur(10px)!important;

// }
.no-submit,
textarea {
	backdrop-filter: blur(15px) !important;
	min-width: 200px;
	z-index: 100;
}
textarea {
	min-height: 80px !important;
	max-height: 140px;
}
.search {
	border-radius: 50rem !important;
	box-shadow: inset 0 -3px 8px rgba(var(--bs-secondary-rgb), 0.6);
	height: 3.4rem;
	width: 75% !important;
	// &:focus{
	// box-shadow: inset 0 -3px 10px rgba(var(--bs-primary-rgb), 0.75)!important;
	// }
}
.submit {
	color: var(--bs-bg) !important;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
select {
	color: var(--bs-bg);
	padding-top: 10px;
	padding-bottom: 10px;
}
.add-item {
	.item-input {
		min-width: 115px;
	}
	.add-item-button {
		height: 42px;
		max-width: max-content;
		.plus {
			cursor: pointer;
		}
	}
}
</style>
