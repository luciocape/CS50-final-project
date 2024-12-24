// Importa el módulo vue-router y los componentes que quieres usar
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
// import { meta } from 'eslint-plugin-vue'
import { checkToken, refreshToken } from './helpers/backendConection'

// Define un array de objetos con las rutas
const routes = [
    {
        path: '/', // la ruta base
        name: 'Home', // el nombre de la ruta
        component: Home // el componente que se renderiza
        // meta: { analytics: true }
    },
    {
        path: '/recipe', // otra ruta
        name: 'Recipe',
        component: () => import('@/views/Recipe.vue')
        // meta: { analytics: true }
    },
    {
        path: '/saved', // otra ruta
        name: 'Saved',
        component: () => import('@/views/Saved.vue')
        // meta: { analytics: true }
    },
    {
        path: '/creator', // otra ruta
        name: 'Creator',
        component: () => import('@/views/Creator.vue')
        // meta: { analytics: true }
    },
    {
        path: '/login', // otra ruta
        name: 'LogIn',
        component: () => import('@/views/LogIn.vue')
        // meta: { analytics: true }
    },
    {
        path: '/register', // otra ruta
        name: 'Register',
        component: () => import('@/views/Register.vue')
        // meta: { analytics: true }
    },
    {
        path: '/:catchAll(.*)', // otra ruta
        name: 'NotFound',
        component: () => import('@/views/404.vue')
        // meta: { analytics: true }
    }
]

// Crea una instancia del router y pasa las rutas como opción
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // usa el modo history para evitar el hash (#) en la URL
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path !== from.path) {
            return { left: 0, top: 0, behavior: 'instant' }
        }
    }
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.auth) {
        const access_token = localStorage.getItem('access_token')
        const refresh_token = localStorage.getItem('refresh_token')
        if (!access_token) {
            next({ name: 'LogIn' })
            return
        } else {
            try {
                const isValid = await checkToken(access_token) // Your token validation function
                if (isValid) {
                    next()
                } else {
                    const isRefreshed = await refreshToken(refresh_token)
                    if (isRefreshed) {
                        next()
                    } else {
                        localStorage.removeItem('access_token')
                        localStorage.removeItem('refresh_token')
                        next({ name: 'LogIn' })
                    }
                }
            } catch (error) {
                console.error('Error checking token:', error)
                next({ name: 'LogIn' })
            }
        }
    } else {
        next()
    }
})

export default router
