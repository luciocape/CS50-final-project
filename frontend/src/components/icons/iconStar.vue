<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="props.size"
		:height="props.size"
		viewBox="0 0 24 24"
	>
		<path
			:fill="props.filled ? props.color : 'transparent' "
			:stroke="props.color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M2.335 10.337a.5.5 0 0 1 .28-.864l6.004-.712a.5.5 0 0 0 .396-.287l2.532-5.49a.5.5 0 0 1 .908 0l2.532 5.49a.5.5 0 0 0 .395.287l6.004.712a.5.5 0 0 1 .28.864l-4.438 4.105a.5.5 0 0 0-.15.464l1.177 5.93a.5.5 0 0 1-.735.534l-5.275-2.953a.5.5 0 0 0-.488 0l-5.276 2.952a.5.5 0 0 1-.735-.533l1.178-5.93a.5.5 0 0 0-.15-.464z"
		/>
	</svg>
</template>

<script setup>
//import { ref } from 'vue';

name: "iconStar";

const props = defineProps({
	size: {
		type: String,
		default: "25px",
	},
	color: {
		type: String,
		default: "black",
	},
    filled: {
        type: Boolean
    }
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
</style>
