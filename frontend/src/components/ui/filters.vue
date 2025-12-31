<template>
	<ul class="w-100 d-flex align-items-center justify-content-center mt-2 gap-2 gap-sm-3 gap-md-4">
		<li class="bg-secondary rounded-2"><PrepTime /></li>
		<li class="bg-secondary rounded-2"><FilterSelect :options="optionsCountry"/></li>
        <li class="bg-secondary rounded-2"><FilterSelect :options="optionsFlavor"/></li>
        <li><PremiumCheck/></li>
	</ul>
</template>

<script setup>
import FilterSelect from "../utils/filterSelect.vue";
import PremiumCheck from "../utils/premiumCheck.vue";
import PrepTime from "../utils/prepTime.vue";
import options from "@/assets/options.json";

//import { ref } from 'vue';

name: "Filters";

//const props = defineProps({});
//const emits = defineEmits([]);

const optionsCountry = options.countries;
const optionsFlavor = options.flavors;
</script>

<style scoped lang="scss">
// @import "../assets/styles.scss";
li{
    width: 120px;
}
</style>
