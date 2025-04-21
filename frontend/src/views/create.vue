<template>
    <main>
        <form class="create-form p-3 border border-5 border-primary m-0 m-auto mt-5 rounded-4 d-flex flex-column align-items-start justify-content-center" action="">
            <div class="m-auto mb-0 d-flex">
                
            </div>
        </form>
    </main>
</template>

<script setup>
//import { ref } from 'vue';

name: 'Create'

//const props = defineProps({});
//const emits = defineEmits([]);

</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
.create-form {
    max-width: 650px;
    width: 80%;
    min-width: 270px;
    min-height: 400px;
    background:  linear-gradient(130deg, $primary 0%, var(--bs-bg) 100%);
    box-shadow: 0 0 10px 0 $primary;
}
</style>