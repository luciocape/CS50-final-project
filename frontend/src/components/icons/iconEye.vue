<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="props.size"
		:height="props.size"
		viewBox="0 0 24 24"
	>
		<path
			:fill="props.color"
			d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
		/>
	</svg>
</template>

<script setup>
//import { ref } from 'vue';

name: "iconEye";

const props = defineProps({
	size: {
		type: String,
		default: "25px",
	},
	color: {
		type: String,
		default: "black",
	},
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>
