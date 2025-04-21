<template>
	<ul class="d-flex mb-1">
		<li v-for="item in 5">
			<IconStar  size="20px" color="rgb(0, 124, 146)" :filled="item - 1 < props.stars" />
		</li>
	</ul>
</template>

<script setup>
import IconStar from '../icons/iconStar.vue';

//import { ref } from 'vue';

name: "stars";

const props = defineProps({
    stars: {
        type: String
    }
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";

</style>
