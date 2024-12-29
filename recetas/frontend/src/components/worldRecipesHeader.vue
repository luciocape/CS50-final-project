<template>
	<nav
		class="nav-header navbar navbar-expand-lg navbar-white shadow position-sticky top-0 pe-3"
		aria-label="Fourth navbar example"
	>
		<div class="container-fluid d-flex">
			<a class="navbar-brand space-left m-0" href="/">
				<Logo color="#5A45A6" size="md" class-name="py-2 px-3" />
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarsExample04"
				aria-controls="navbarsExample04"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				class="collapse navbar-collapse justify-content-end align-items-center gap-3"
				id="navbarsExample04"
			>
				<ul class="navbar-nav mb-2 mb-md-0 gap-3 align-items-center">
					<li
						v-for="link in nav"
						:key="link.id"
						class="nav-item fw-medium"
					>
						<linkComponent
							:type="link.name"
							:class-name="link.className"
							:url="link.url"
							:is-view="link.isView"
						/>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
import Logo from "./utils/logo.vue";
import linkComponent from "./utils/linkComponent.vue";
name: "worldRecipesHeader";

const nav = [
	{
		name: "Home",
		url: "/",
		isView: true,
		className: "nav-link active",
		id: 0,
	},
	{
		name: "Sobre nosotros",
		url: "/#about",
		isView: false,
		className: "nav-link",
		id: 1,
	},
	{
		name: "Contacto",
		url: "/#contacto",
		isView: false,
		className: "nav-link",
		id: 2,
	},
	{
		name: "Pricing",
		url: "/pricing",
		isView: true,
		className: "nav-link",
		id: 2,
	},
	{
		name: "login",
		url: "/login",
		isView: true,
		className: "btn btn-primary text-secondary px-4 py-1 rounded-pill fw-medium",
		id: 3,
	},
	{
		name: "register",
		url: "/register",
		isView: true,
		className: "btn register text-secondary px-4 py-1 rounded-pill fw-medium border border-primary",
		id: 4,
	},
];
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
</style>
