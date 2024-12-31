<template>
	<div class="card" style="width: 18rem">
        <!-- :style="`backround-image:${props.imagen_src}`" -->
        <div  class="d-flex justify-content-between bg-primary">
            <ul class="d-flex gap-1 align-items-center justify-content-start"><li v-for="star in 5"><IconStar :filled="(star - 1) < props.stars"/></li></ul>
            <span class="fw-bold price">{{ props.price }}</span>
        </div>
		<div class="card-body">
			<h4 class="card-title">{{ props.title }}</h4>
            <h5>{{ props.creator }}</h5>
            <div class="d-flex gap-1">
                <div v-for="item in categories" class="bg-secondary rounded-pill text-primary">{{ item }}</div>
            </div>
		</div>
	</div>
</template>

<script setup>
import IconStar from '../icons/iconStar.vue';

//import { ref } from 'vue';

name: "recipeCard";

const props = defineProps({
    imagen_src: {
        type: String
    },
    img_alt:{
        type: String
    },
	title: {
		type: String,
	},
	creator: {
		type: String,
	},
	stars: {
		type: Number,
	},
	price: {
		type: String,
	},
	categories: {
		type: Array,
	},
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
// @import "../../assets/styles.scss";
</style>
