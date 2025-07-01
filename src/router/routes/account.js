import AccountRoot from '@/pages/account/Root.vue';
import AccountLogin from '@/pages/account/children/Login.vue';
import AccountSignup from '@/pages/account/children/Signup.vue';

export default {
    path: '/account',
    component: AccountRoot,
    children: [
        {
            meta: {},
            path: 'login',
            name: 'account.login',
            component: AccountLogin,
        },
        {
            meta: {},
            path: 'signup',
            name: 'account.signup',
            component: AccountSignup,
        }
    ]
};