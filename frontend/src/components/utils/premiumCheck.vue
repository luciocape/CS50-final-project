<template>
	<div class="premium-check form-check form-switch d-flex flex-column justify-content-center align-items-center p-0 w-100">
        <label class="form-check-label fw-medium text-secondary" for="flexSwitchCheckDefault"
            >Premium</label
        >
		<input
			class="form-check-input m-0 m-auto border-2 border-secondary"
			type="checkbox"
			role="switch"
			id="flexSwitchCheckDefault"
		/>
	</div>
</template>

<script setup>
//import { ref } from 'vue';

name: "premiumCheck";

//const props = defineProps({});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
input{
    width: 3em!important;
    height: 1.2em!important;
	&:checked{
		background-color: rgba(var(--bs-secondary-rgb), 0.8)!important;
	}
}
</style>
