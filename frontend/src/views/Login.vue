<template>
	<main class="d-flex">
		<AccountForm :inputs="inputs"/>
	</main>
</template>

<script setup>
import AccountForm from "../components/ui/accountForm.vue";
import FormInput from "../components/utils/formInput.vue";

//import { ref } from 'vue';

name: "Login";

//const props = defineProps({});
//const emits = defineEmits([]);

const inputs = [
	{
		inputType: "text",
		inputName: "username",
		label: "Username",
		labelAlign: "start",
		id: 0,
	},
	{
		inputType: "password",
		inputName: "password",
		label: "Password",
		labelAlign: "start",
		id: 1,
	},
];
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
main {
	background: radial-gradient(circle, rgb(var(--bs-bg-rgb)) 5%, rgba(var(--bs-primary-rgb),0.7) 100%);
}
</style>
