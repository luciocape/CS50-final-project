<template>
	<form class="contenedor-login p-4 rounded-4 m-0 m-auto">
		<h1 class="mb-3 text-center">{{ form_title }}</h1>
		<div class="d-flex flex-column gap-2 mb-2">
			<FormInput
				v-for="item in inputs"
				:key="item.id"
				:input-type="item.inputType"
				:name="item.inputName"
				:label="item.label"
				:label-align="item.labelAlign"
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
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.contenedor-login {
	width: 34vw;
	min-width: 300px;
	min-height: 70vh;
	background-color: rgba(62, 248, 124, 0.486);
	backdrop-filter: blur(25px);
	box-shadow: 0 0 15px rgba(200, 255, 217, 0.7);
}
@media screen and ( 768px < width < 992px ) {
	.contenedor-login {
		width: 47vw;
	}
	
}
@media screen and ( width < 768px ) {
	.contenedor-login {
		width: 65vw;
		min-height: 60vh;
	}
	
}
</style>
