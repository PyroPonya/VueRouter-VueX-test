import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/one',
    name: 'componentOne',
    component: () => import('../components/componentOne.vue'),
    alias: '/',
  },
  {
    path: '/two',
    name: 'componentTwo',
    component: () => import('../components/componentTwo.vue'),
  },
  {
    path: '/three',
    name: 'componentThree',
    component: () => import('../components/componentThree.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
