import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import Favorites from '../components/Favorites.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;



  