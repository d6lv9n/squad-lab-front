import './style.css';
// import store from './store/index.js';
import router from './router/index.js';
import { createApp } from 'vue';
import AppRoot from './app/Root.vue';
import axios from 'axios';

// Axios configuration
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
window.axios = axios;

// Create Vue app
const App = createApp(AppRoot);

// Integrate plugins with Vue app
// App.use(store);
App.use(router);

router.isReady()
    .then(() => {
        App.mount('#app');
    });