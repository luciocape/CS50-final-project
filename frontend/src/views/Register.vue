<template>
	<main class="d-flex justify-content-center">
		<form class="contenedor-register">
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
			<FormInput input-type="submit" value="Register"/>
		</form>
	</main>
</template>

<script setup>
import FormInput from '../components/utils/formInput.vue';

//import { ref } from 'vue';

name: "Register";

//const props = defineProps({});
//const emits = defineEmits([]);
const inputs = [
	{
		inputType: "text",
		inputName: "username",
		label: "Username",
		labelAlign: "center",
        id: 0
	},
    {
		inputType: "password",
		inputName: "password",
		label: "Password",
		labelAlign: "center",
        id: 1
	},
    {
		inputType: "password",
		inputName: "confirm_password",
		label: "Confirm password",
		labelAlign: "center",
        id: 2
	},
];
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
.contenedor-register {
    margin-top: 15vh;
    width: 32vw;
	min-width: 280px;
}
</style>
