<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";
import { createPinia } from 'pinia';
import { createPiniaMiddleware } from './plugins/piniaMiddleware';
import piniaPersistedstate from 'pinia-plugin-persistedstate';
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815

const pinia = createPinia();
pinia.use(createPiniaMiddleware());
pinia.use(piniaPersistedstate);

const app = createApp(App);
<<<<<<< HEAD
app.use(pinia);
app.use(router);
app.mount('#app');
=======
const pinia = createPinia();

app.use(pinia);
app.mount('#app');

createApp(App).use(createPinia()).use(router).mount('#app')
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815
