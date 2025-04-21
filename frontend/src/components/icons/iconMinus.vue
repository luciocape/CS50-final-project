<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="props.size"
		:height="props.size"
		viewBox="0 0 42 42"
	>
		<path
			:fill="props.color"
			d="M39.5 21.5v-3c0-1.48-.43-2-2-2h-34c-1.48 0-2 .49-2 2v3c0 1.55.52 2 2 2h34c1.51 0 2-.48 2-2"
		/>
	</svg>
</template>

<script setup>
//import { ref } from 'vue';

name: "iconMinus";

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
