<template>
	<main class="pt-5">
		<form
			@submit="onsubmit($event)"
			class="d-flex flex-column create-form p-3 border border-5 border-primary m-0 m-auto rounded-4"
			action=""
		>
			<div
				class="form-inputs w-100 d-flex flex-column align-items-center justify-content-start gap-2"
			>
				<div
					v-for="input in descriptionInputs"
					:key="input.id"
					v-show="step === 0"
					class="w-100 pb-2"
					:class="
						input.id !== 3
							? ' border-bottom border-2 border-secondary line-shadow'
							: ''
					"
				>
					<FormInput
						:label="input.label"
						label-align="start"
						:input-type="input.type"
						:name="input.name"
						:options="input.options"
						:placeholder="input.placeholder"
					></FormInput>
				</div>
				<div
					class="w-100"
					v-show="steps === step"
					v-for="steps in step"
				>
					<h2 class="text-center text-secondary h1">
						Step {{ steps }}
					</h2>
					<div
						class="w-100 pb-2"
						:class="
							input.id + 1 !== stepsInputs.length
								? ' border-bottom border-2 border-secondary line-shadow'
								: ''
						"
						v-for="input in stepsInputs"
						:key="input.id"
					>
						<FormInput
							:label="input.label"
							label-align="start"
							:input-type="input.type"
							:name="input.name + '_step' + steps"
						></FormInput>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-between w-100">
				<button
					v-if="step > 0"
					@click.prevent="step--"
					class="button-shadow btn btn-outline-primary text-secondary fw-bold m-auto ms-0 mt-3 px-4"
				>
					Back
				</button>
				<div class="d-flex gap-3 m-auto me-0">
					<button
						@click.prevent="step++"
						v-if="step < 10"
						class="button-shadow btn btn-primary text-secondary fw-bold m-auto me-0 mt-3 px-4"
					>
						Next
					</button>
					<input
						v-if="step > 2"
						class="button-shadow button-finish btn text-secondary fw-bold m-auto me-0 mt-3 px-3 py-1 border-4 border-primary"
						type="submit"
						value="Finish"
					/>
				</div>
			</div>
		</form>
	</main>
</template>

<script setup>
import FormInput from "../components/utils/formInput.vue";
import options from "@/assets/options.json";

import { provide, ref } from "vue";

name: "Create";
const step = ref(0);
const ingredients = ref([]);
provide("ingredients", ingredients);
//const props = defineProps({});
//const emits = defineEmits([]);
const descriptionInputs = [
	{
		label: "Recipe name",
		name: "title",
		type: "text",
		placeholder: "Pato a la naranja",
		id: 0,
	},
	{
		label: "Preparation time",
		name: "prep_time",
		type: "time",
		placeholder: "10",
		id: 1,
	},
	{
		label: "Flavor",
		name: "flavor",
		type: "select",
		options: options.flavors,
		placeholder: "Sweet",
		id: 2,
	},
	{
		label: "Ingredients",
		name: "ingredients",
		type: "addItem",
		placeholder: "Add ingredient",
		id: 2,
	},
	{
		label: "Cover photo",
		name: "photo_cover",
		type: "file",
		placeholder: "Upload a photo",
		id: 3,
	},
];
const stepsInputs = [
	{
		label: "Title",
		name: "title",
		type: "text",
		placeholder: "",
		id: 0,
	},
	{
		label: "Description",
		name: "description",
		type: "textarea",
		placeholder: "",
		id: 1,
	},
	{
		label: "Photo",
		name: "photo",
		type: "file",
		placeholder: "Upload a photo",
		id: 2,
	},
];

const onsubmit = async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const photoCover = formData.get("photo_cover");
	if (ingredients.value.length < 2) {
		alert("You need to add 2 ingredients at least");
		return;
	}
	if (
		!(
			photoCover &&
			photoCover.size > 0 &&
			["image/jpeg", "image/png", "image/webp"].includes(photoCover.type)
		)
	) {
		alert(
			"Photo for cover is missing or invalid. Please upload a valid image file (jpg, png, webp)."
		);
		return;
	}
	const body = createFormData(formData);
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/recipes/create`,
		{
			method: "POST",
			body,
		}
	);
	console.log(await response.json());
};

const createFormData = (formData) => {
	const formDataBody = new FormData();
	for (let input of descriptionInputs) {
		const key = input.name;
		let value;
		if (!(key === "ingredients")) {
			value = formData.get(input.name);
		} else {
			value = JSON.stringify(Object.values(ingredients.value));
		}
		formDataBody.append(key, value);
	}
	const steps = [];
	for (let stepNumber = 1; stepNumber <= step.value; stepNumber++) {
		const stepPhoto = formData.get(`photo_step${stepNumber}`);
		if (!validateFile(stepPhoto, stepNumber)) return;
		formDataBody.append("photo_steps", stepPhoto);

		const stepTitle = formData.get(`title_step${stepNumber}`);
		const stepDescription = formData.get(`description_step${stepNumber}`);
		steps.push({ title: stepTitle, description: stepDescription });
	}
	formDataBody.append(`steps`, JSON.stringify(steps));

	return formDataBody;
};
const validateFile = (photoStep, i) => {
	if (
		!(
			photoStep &&
			photoStep.size > 0 &&
			["image/jpeg", "image/png", "image/webp"].includes(photoStep.type)
		)
	) {
		alert(
			`Photo for step ${i} is missing or invalid. Please upload a valid image file (jpg, png, webp).`
		);
		return false;
	}
	return true;
};
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
main {
	background: radial-gradient(
		circle,
		rgba(var(--bs-primary-rgb)) 0%,
		rgb(var(--bs-bg-rgb)) 80%
	);
	.create-form {
		max-width: 670px;
		margin-top: 5vh !important;
		width: 80%;
		min-width: 270px;
		min-height: 400px;
		background: linear-gradient(130deg, $primary 0%, var(--bs-bg) 100%);
		box-shadow: 18px 14px 20px -15px rgb(36, 97, 38);
		.form-inputs {
			min-height: 295px;
			.line-shadow {
				box-shadow: 0 10px 15px -13px $secondary;
			}
		}
		.button-shadow {
			box-shadow: 0 4px 6px 0 rgba(0, 124, 146, 0.4);
		}
		.button-finish {
			&:hover {
				transition: 0.3s;
				background: $primary;
				box-shadow: 0 0 10px 0 $primary;
			}
		}
	}
}
</style>
