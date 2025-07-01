import Root from '@/pages/account/Root.vue';
import Login from '@/pages/account/children/Login.vue';
import Signup from '@/pages/account/children/Signup.vue';

export default {
    path: '/account',
    component: Root,
    children: [
        {
            meta: {},
            path: 'login',
            name: 'account.login',
            component: Login,
        },
        {
            meta: {},
            path: 'signup',
            name: 'account.signup',
            component: Signup,
        }
    ]
};