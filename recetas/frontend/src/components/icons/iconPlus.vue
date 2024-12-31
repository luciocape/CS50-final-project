<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="props.size"
		:height="props.size"
		viewBox="0 0 12 16"
	>
		<path
			fill-rule="evenodd"
			d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"
			:fill="props.color"
		/>
	</svg>
</template>

<script setup>
//import { ref } from 'vue';

name: "iconPlus";

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
