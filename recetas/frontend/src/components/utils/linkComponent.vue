<template>
	<RouterLink v-if="props.isView === true" :to="props.url" :class="props.type === 'login' ? 'btn-primary' + className : props.type === 'register' ? 'btn-outline-primary' + className : className">{{ text }}</RouterLink>
    <a v-else :href="props.url" :class="props.className">{{ props.type }}</a>
</template>

<script setup>
name: "SesionBtn";
const props = defineProps({
	url:{
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: "#2482D9"
	},
    type:{
        type: String,
        default: 'login'
    },
    className:{
        type: String,
        default: 'btn px-4 py-1 rounded-pill fw-medium'
    },
    isView:{
        type: Boolean,
        default: false
    }
});
const text = props.type === 'login' ? 'Log in' : 'Register';
</script>

<style scoped lang="scss">
a{
	width: fit-content;
    background-color: #5A45A6;
    border: 2px solid #5A45A6;
    color: #efdfff;
    &.register{
        background-color: rgba(90, 69, 166, 0.6);
    }
}
</style>
