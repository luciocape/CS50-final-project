<template>
	<ul class="d-flex mb-1">
		<li v-for="item in 5">
			<IconStar :class="shadowed ? 'shadowed' : ''" :size="props.size" color="rgb(0, 124, 146)" :filled="item - 1 < props.stars" />
		</li>
	</ul>
</template>

<script setup>
import IconStar from '../icons/iconStar.vue';

//import { ref } from 'vue';

name: "stars";

const props = defineProps({
    stars: {
        type: Number
    },
	size: {
		type: String,
		default: '20px'
	},
	shadowed: {
		type: Boolean,
		default: false
	}
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.shadowed{
	filter: drop-shadow(0 2px 3px var(--bs-secondary));
}
</style>
