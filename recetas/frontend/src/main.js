import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './assets/styles.scss'
import router from './router.js'
import App from './App.vue'
const app = createApp(App);
app.use(router);
app.mount("#app");
