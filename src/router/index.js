import account from './routes/account.js';
import index from './routes/index.js';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        account,
        index,
    ]
});