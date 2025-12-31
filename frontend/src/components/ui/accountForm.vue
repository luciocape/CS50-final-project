<template>
	<form
		@submit="handleFormSubmit($event)"
		class="contenedor-login p-4 pb-5 rounded-4 m-0 m-auto border border-2 border-primary"
	>
		<h1 class="mb-3 text-center">{{ form_title }}</h1>
		<div class="d-flex flex-column gap-2 mb-2">
			<FormInput
				v-for="item in inputs"
				:key="item.id"
				:input-type="item.inputType"
				:name="item.inputName"
				:label="item.label"
				:label-align="item.labelAlign"
				input-class="blured"
			/>
		</div>
		<FormInput input-type="submit" value="Login" input-class="w-100" />
	</form>
</template>

<script setup>
import FormInput from "../utils/formInput.vue";
//import { ref } from 'vue';

name: "accountForm";

const props = defineProps({
	inputs: {
		type: Array,
		required: true,
	},
	form_title: {
		type: String,
		default: "Login",
	},
});
//const emits = defineEmits([]);
const handleFormSubmit = async (e) => {
	if (props.form_title.toLowerCase() === "login") {
		await login(e);
	} else if (props.form_title.toLowerCase() === "register") {
		await register(e);
	}
};
const login = async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = JSON.stringify(Object.fromEntries(formData.entries()));
	// console.log(data);
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/auth/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		}
	);
	localStorage.setItem("user", response)
	console.log(await response.json());
};
const register = async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = JSON.stringify(Object.fromEntries(formData.entries()));
	// console.log(data);
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/auth/register`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		}
	);
	console.log(await response.json());
};
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.contenedor-login {
	width: 34vw;
	min-width: 300px;
	min-height: 400px;
	max-height: max-content;
	background: radial-gradient(
		at top right,
		rgba(var(--bs-secondary-rgb), 0.4),
		rgba(var(--bs-primary-rgb), 0.7)
	);
	backdrop-filter: blur(25px);
	box-shadow: 0 0 15px rgba(200, 255, 217, 0.7);
}
@media screen and (768px < width < 992px) {
	.contenedor-login {
		width: 47vw;
	}
}
@media screen and (width < 768px) {
	.contenedor-login {
		width: 65vw;
	}
}
</style>
