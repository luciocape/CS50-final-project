<template>
	<footer class="d-flex flex-column justify-content-start align-items-center gap-3 px-3 py-5">
		<Logo size="lg" class-name="py-3 px-4" />
		<nav class="d-flex justify-content-evenly w-100 text-center flex-wrap gap-3">
			<div v-for="section in footerNav" :key="section.id" class="">
				<h2 class="h3">{{ section.h2 }}</h2>
                <ul  class="navbar-nav gap-2">
                    <li class="nav-item fw-medium" v-for="link in section.links" :key="link.id">
                        <LinkComponent :type="link.name" :url="link.url" :is-view="link.isView" :class-name="link.className"/>
                    </li>
                </ul>
			</div>
		</nav>
	</footer>
</template>

<script setup>
import LinkComponent from './utils/linkComponent.vue';
import Logo from './utils/logo.vue';

name: "worldRecipesFooter";

const footerNav = [
    {
        h2: "Own an account",
        links: [
            {
                name: "login",
                url: "/login",
                isView: true,
                className: "btn btn-primary text-secondary w-75 py-1 rounded-pill fw-medium mt-1",
                id: 0,
            },
            {
                name: "register",
                url: "/register",
                isView: true,
                className: "btn register text-secondary w-75 py-1 rounded-pill fw-medium border border-primary",
                id: 1,
            },
        ],
        id: 0,
    },
    {
        h2: "Not Loged",
        links: [
            {
                name: "Home",
                url: "/",
                isView: true,
                className: "nav-link",
                id: 0,
            },
        ],
        id: 1,
    },
    {
        h2: "Loged",
        links: [
        {
                name: "Profile",
                url: "/profile",
                isView: true,
                className: "nav-link",
                id: 0,
            },
            {
                name: "Create",
                url: "/create",
                isView: true,
                className: "nav-link",
                id: 1,
            },
            {
                name: "Saved recipes",
                url: "/saved",
                isView: true,
                className: "nav-link",
                id: 2,
            },
            {
                name: "Buy recipe",
                url: "/buy",
                isView: true,
                className: "nav-link",
                id: 2,
            },
        ],
        
        id: 1,
    }
]
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";
footer{
    background: linear-gradient(180deg, $secondary 30%, $primary 100%);
    h2{
        color: var(--bs-bg)!important;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif!important;
    }
    .nav-link{
        font-size: 1.2rem;
        padding: 0;
    }
}
</style>
