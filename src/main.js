import './style.css';
import router from './router/index.js';
import { createApp } from 'vue';
import Root from './app/Root.vue';

const App = createApp(Root);

App.use(router);

router.isReady()
    .then(() => {
        App.mount('#app');
    });