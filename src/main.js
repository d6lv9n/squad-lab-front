import router from './router/index.js';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const root = createApp(App);

root.use(router);

router.isReady()
    .then(() => {
        root.mount('#app');
    });