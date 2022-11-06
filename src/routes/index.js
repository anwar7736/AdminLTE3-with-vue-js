import {createRouter, createWebHistory} from 'vue-router';
import store from '../store';
import Login from '../pages/backend/auth/LoginPage.vue';
import Register from '../pages/backend/auth/RegisterPage.vue';
import Home from '../pages/backend/HomePage.vue';
import Product from '../pages/backend/ProductPage.vue';
import Cart from '../pages/backend/CartList.vue';
import Email from '../pages/backend/auth/password/EmailPage.vue';
import Reset from '../pages/backend/auth/password/ResetPage.vue';

const routes = [
    {
        path: '/', 
        component : Login,
        meta: {
            guest: true,
            title: 'Admin Login'
        }
    },
    {
        path: '/cart-list', 
        name: 'cart-list',
        component: Cart,
        meta: {
            title: 'Product List'
        }
    },
    {
        path: '/products', 
        component : Product,
        meta: {
            title: 'Product List'
        }
    },
    {
        path: '/home', 
        component : Home,
        meta: {
            auth: true,
            title: 'Admin Dashboard'
        }
    },
    {
        path: '/register', 
        component : Register,
        meta: {
            guest: true,
            title: 'Register'
        }
    },
    {
        path: '/email-verification', 
        component : Email,
        meta: {
            guest: true,
            title: 'Email Verification'
        }
    },
    {
        path: '/reset-password', 
        component : Reset,
        meta: {
            guest: true,
            title: 'Reset Password'
        }
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, from) => {
    console.log(to, from);
    //Unauthentic
    if(to.meta.auth && !store.getters.GET_AUTH_STATUS)
    {
         return {
             path: '/'
         }
    }
    //Authentic
    else if(to.meta.guest && store.getters.GET_AUTH_STATUS)
    {
         return {
             path: '/home'
         }
    }
   
  })
export default router;