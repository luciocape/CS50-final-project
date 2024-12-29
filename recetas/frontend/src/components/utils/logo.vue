<template>
	<img src="../../../contenido/logo.png" alt="Logo Recetas" :class="props.className + ' ' + props.size"/>
</template>

<script setup>
// import { ref } from 'vue';

name: "Logo";

const props = defineProps({
    size: {
        type: String,
        default: "100px"
    },
    className: {
        type: String
    }
});
//const emits = defineEmits([]);
</script>

<style scoped lang="scss">
@import "../../assets/styles.scss";
.sm{
    width: 110px;
}
.md{
    width: 160px;
}
.lg{
    width: 250px;
}
@media screen and (width < 768px){
    .sm{
        width: 100px;
    }
    .md{
        width: 140px;
    }
    .lg{
        width: 230px;
    }
    
}
</style>
