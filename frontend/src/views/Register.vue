<template>
	<main class="d-flex justify-content-center">
		<AccountForm :inputs="inputs" form_title="Register"/>
	</main>
</template>

<script setup>
import AccountForm from '../components/ui/accountForm.vue';
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
		labelAlign: "start",
        id: 0
	},
    {
		inputType: "password",
		inputName: "password",
		label: "Password",
		labelAlign: "start",
        id: 1
	},
    {
		inputType: "password",
		inputName: "passwordConfirm",
		label: "Confirm password",
		labelAlign: "start",
        id: 2
	},
];
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
main {
	background: radial-gradient(circle, rgb(var(--bs-bg-rgb)) 5%, rgba(var(--bs-primary-rgb), 0.7) 100%);
}

</style>
