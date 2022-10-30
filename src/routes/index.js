import {createRouter, createWebHistory} from 'vue-router';
import Login from '../pages/backend/auth/LoginPage.vue';
import Register from '../pages/backend/auth/RegisterPage.vue';
import Home from '../pages/backend/HomePage.vue';

const routes = [
    {path: '/', component : Login},
    {path: '/home', component : Home},
    {path: '/register', component : Register},
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;