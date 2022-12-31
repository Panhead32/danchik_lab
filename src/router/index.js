import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EntityView from '@/views/EntityView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: () => (HomeView),
  },
  { path: '/entity', component: EntityView, meta: { title: 'Choose your entity' } },
  {
    path: '/entity/:entityName', component: EntityView, props: true, meta: { title: 'Current entity' },
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
