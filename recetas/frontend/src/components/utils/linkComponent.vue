<template>
	<RouterLink v-if="props.isView === true" :to="props.url" :class="props.className">{{ text }}</RouterLink>
    <a v-else :href="props.url" :class="props.className" >{{ props.type }}</a>
</template>

<script setup>
name: "SesionBtn";
const props = defineProps({
	url:{
		type: String,
		required: true,
	},
    type:{
        type: String,
        default: 'login'
    },
    className:{
        type: String,
    },
    isView:{
        type: Boolean,
        default: false
    }
});
const text = props.type === 'login' ? 'Log in' : props.type === 'register' ? 'Register' : props.type;
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.register{
    background-color: rgba(var(--bs-primary-rgb), 0.25)!important;
    transition: 0.2s;
    &:hover{
        background-color: $primary!important;
    }
}
</style>
