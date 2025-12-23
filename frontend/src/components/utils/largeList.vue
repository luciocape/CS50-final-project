<template>
	<div
		v-if="items.length >= 1"
		class="position-relative items-list-container"
	>
		<span
			class="d-flex justify-content-center align-items-center number-of-items position-absolute rounded-circle p-2"
			>{{ items.length }}</span
		>
		<div class="items w-100 bg-body rounded-3 overflow-hidden">
			<ul
				class="border border-2 border-info list-group d-flex flex-column m-0 bg-body rounded-3"
			>
				<li
					class="list-group-item m-0 pt-1 w-100 d-flex"
					v-for="item in items"
				>
					<span class="text w-75 overflow-x-hidden">{{ item }}</span
					><IconTrash
						v-if="trashAllowed"
						@click="$emit( 'deleteItem', items.indexOf(item))"
						size="25px"
						color="rgb(0, 124, 146)"
						class="icon-trash"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
//import { ref } from 'vue';
import IconTrash from "../icons/iconTrash.vue";

name: "LargeList";

const props = defineProps({
	items: {
		type: Array,
		default: [],
	},
	trashAllowed: {
		type: Boolean,
		default: false,
	},
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.items-list-container {
	width: 45%;
	max-width: 200px;
	.number-of-items {
		width: 30px;
		height: 30px;
		right: -20px;
		box-shadow: 3px -3px 10px -3px rgba(var(--bs-secondary-rgb), 0.75);
		top: -10px;
		background: linear-gradient(var(--bs-bg) 0%, $primary 100%) !important;
		aspect-ratio: 1/1 !important;
		z-index: 199;
	}
	.items {
		height: 40px;
		&:hover {
			overflow: visible !important;
		}
		ul {
			height: fit-content;
			width: calc(100% + 17px);
			max-height: 250px;
			overflow-y: scroll;
			li {
				.text {
					display: inline-block;
				}
				.icon-trash {
					&:hover {
						cursor: pointer;
						scale: 1.1;
					}
				}
			}
		}
	}
}
</style>
