<template>
	<div
		class="time fw-medium d-flex align-items-center justify-content-between gap-1 btn btn-secondary bg-secondary py-2 py-md-1 px-2 w-100 flex-wrap"
	>
		<IconClock color="#CCFFF9" />
		<span class="flex-fill">
			{{ `${hours} : ${minutes === 0 ? "0" : ""}${minutes} ` }}
		</span>
		<div
			class="d-flex flex-row  flex-md-column justify-content-center align-items-center flex-fill gap-1 gap-md-0"
		>
			<IconPlus @click="increaseTime()" size="16px" color="#CCFFF9" />
			<IconMinus @click="decreaseTime()" size="16px" color="#CCFFF9" />
		</div>
	</div>
</template>

<script setup>
import IconClock from "../icons/iconClock.vue";

import { ref } from "vue";
import IconPlus from "../icons/iconPlus.vue";
import IconMinus from "../icons/iconMinus.vue";

name: "prepTime";

//const props = defineProps({});
//const emits = defineEmits([]);

const hours = ref(0);
const minutes = ref(10);

const increaseTime = () => {
	if (minutes.value === 50) {
		if (hours.value === 3) {
			return;
		}
		minutes.value = 0;
		hours.value += 1;
	} else {
		minutes.value += 10;
	}
	return;
};
const decreaseTime = () => {
	if (hours.value === 0 && minutes.value === 10) {
		return;
	}
	if (minutes.value === 0) {
		minutes.value = 50;
		hours.value -= 1;
	} else {
		minutes.value -= 10;
	}
	return;
};
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.time {
	color: var(--bs-bg);
}
</style>
