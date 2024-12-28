<script setup>
import Logo from "./utils/logo.vue";
import linkComponent from "./utils/linkComponent.vue";
name: "worldRecipesHeader";

const nav = [
	{
		name: "Home",
		url: "/",
		isView: true,
		id: 0,
	},
	{
		name: "Sobre nosotros",
		url: "/#about",
		isView: false,
		id: 1,
	},
	{
		name: "Contacto",
		url: "/#contacto",
		isView: false,
		id: 2,
	},
	{
		name: "Pricing",
		url: "/pricing",
		isView: true,
		id: 2,
	},
	{
		name: "Log in",
		url: "/login",
		isView: true,
		id: 3,
	},
	{
		name: "Register",
		url: "/register",
		isView: true,
		id: 4,
	},
];
</script>

<template>
	<nav
		class="nav-header navbar navbar-expand-md navbar-white shadow position-sticky top-0 pe-3"
		aria-label="Fourth navbar example"
	>
		<div class="container-fluid d-flex">
			<a class="navbar-brand space-left m-0" href="/">
				<Logo color="#5A45A6" size="md" logo_align="start" />
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
						<router-link
							v-if="
								link.name == 'Register' || link.name == 'Log in'
							"
							:to="link.url"
							class="nav-link"
						>
							<linkComponent
								:type="
									link.name === 'Log in'
										? 'login'
										: 'register'
                                    
								"
							/>
						</router-link>
						<router-link
							v-else-if="link.isView"
							:to="link.url"
							class="nav-link text-black"
						>
							{{ link.name }}
						</router-link>
						<a
							v-else
							class="nav-link text-black"
							aria-current="page"
							:href="link.url"
							>{{ link.name }}</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="scss"></style>
