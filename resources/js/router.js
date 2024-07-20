import { createRouter, createWebHistory } from 'vue-router';
import Home from './Pages/Home.vue';
import Login from './Pages/Login.vue';
import Signup from './Pages/Signup.vue';
import Dashboard from './Pages/Dashboard.vue';
import CreateUser from './Pages/createUser.vue'; // Import CreateUser
import EditUser from './Pages/editUser.vue'; // Import EditUser

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard },
    { path: '/create', component: CreateUser }, // Add route for CreateUser
    { path: '/edit/:id', component: EditUser } // Add route for EditUser
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
