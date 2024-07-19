import { createRouter, createWebHistory } from 'vue-router';
import Home from './Pages/Home.vue';
import Login from './Pages/Login.vue';
import Signup from './Pages/Signup.vue';
import Dashboard from './Pages/Dashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;