import store from '../store/index.js';
import { createRouter, createWebHistory } from 'vue-router';
// Routes
import account from './routes/account.js';
import boards from './routes/boards.js';
import home from './routes/home.js';
import index from './routes/index.js';

// Create Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        account,
        boards,
        home,
        index,
    ]
});

// Navigation guard
router.beforeEach((to, from) => {
    return true;
});

router.beforeResolve(to => {
    return true;
});

router.afterEach((to, from, failure) => {

});

export default router;