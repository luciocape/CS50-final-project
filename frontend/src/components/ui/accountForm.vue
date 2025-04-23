<template>
	<form class="contenedor-login p-4 rounded-4">
		<h1 class="mb-4 text-center">{{ form_title }}</h1>
		<div class="d-flex flex-column gap-3 mb-2">
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
		margin-top: 15vh;
		width: 32vw;
		min-width: 280px;
		max-height: 70vh;
		background-color: rgba(62, 248, 124, 0.486);
		backdrop-filter: blur(25px);
		box-shadow: 0 0 15px rgba(200, 255, 217, 0.7);
	}
</style>
