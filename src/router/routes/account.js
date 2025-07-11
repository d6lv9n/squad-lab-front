import AccountRoot from '@/pages/account/Root.vue';
import AccountLogin from '@/pages/account/children/Login.vue';
import AccountSignup from '@/pages/account/children/Signup.vue';

export default {
    path: '/account',
    component: AccountRoot,
    children: [
        {
            meta: {
                guestOnly: true,
                userOnly: false,
            },
            path: 'login',
            name: 'account.login',
            component: AccountLogin,
        },
        {
            meta: {
                guestOnly: true,
                userOnly: false,
            },
            path: 'signup',
            name: 'account.signup',
            component: AccountSignup,
        }
    ]
};