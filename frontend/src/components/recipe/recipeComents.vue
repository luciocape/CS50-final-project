<template>
	<section>
        <h2 class="mb-4">Comments</h2>
		<div class="mb-5" v-if="allowComment">
			<div class="d-flex gap-2 mb-2 align-items-center">
				<IconProfile size="45px" />Tu
			</div>
			<Stars />
			<!-- <TypeInput input-type="textarea" name="comment"/> -->
			<form action="">
				<textarea
					autofocus
					class="px-1 pb-2 pt-3 border-top-0 border-start-0 border-end-0 border-3 border-bottom border-dark-subtle w-100"
				></textarea>
				<TypeInput input-type="submit" value="Comment" />
			</form>
		</div>
		<div class="d-flex flex-column gap-4">
			<div>
				<div class="d-flex gap-2 mb-2 align-items-center">
					<IconProfile size="45px" />Nombre
				</div>
				<Stars />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur rerum error in, dolores laudantium corporis hic
					voluptate eaque beatae accusantium, quis necessitatibus amet
					consectetur similique cum. Quod natus in voluptatum.
				</p>
			</div>
			<button
				class="btn btn-secondary rounded-pill fw-medium py-2 px-3 load-btn m-0 m-auto"
			>
				Load more
			</button>
		</div>
	</section>
</template>

<script setup>
import IconProfile from "../icons/iconProfile.vue";
import Stars from "../utils/stars.vue";
import TypeInput from "../utils/typeInput.vue";

//import { ref } from 'vue';

name: "recipeComents";

const props = defineProps({
	allowComment: {
		type: Boolean,
		default: true,
	},
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
section {
    margin-bottom: min(25vh, 150px)!important;
	textarea {
		field-sizing: content;
		max-height: 120px;
		&:focus {
			outline: none;
			border-bottom: 3px solid $secondary !important;
			background-color: rgba(128, 128, 128, 0.05) !important;
		}
	}
	.load-btn {
		color: var(--bs-bg) !important;
		box-shadow: 0 0 15px -2px var(--bs-secondary);
		transition: 0.3s;
		&:hover {
			box-shadow: 0 0 0px var(--bs-primary);
		}
	}
}
</style>
