import './style.css';
import router from './router/index.js';
import { createApp } from 'vue';
import root from './app/Root.vue';

const App = createApp(root);

App.use(router);

router.isReady()
    .then(() => {
        App.mount('#app');
    });