<template>
	<select
		name=""
		id=""
		class="px-2 overflow-x-hidden w-100 bg-transparent border-0 fw-medium"
	>
		<option v-for="option in props.options" :value="option">
			{{ option }}
		</option>
	</select>
</template>

<script setup>
//import { ref } from 'vue';

name: "filterSelect";

const props = defineProps({
	options: {
		type: Array,
	},
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
select {
	color: var(--bs-bg);
	padding-top: 10px;
	padding-bottom: 10px;
}
</style>
