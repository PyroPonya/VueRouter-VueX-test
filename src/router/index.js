import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/one',
    name: 'componentOne',
    component: () => import('../components/componentOne.vue'),
    alias: '/',
  },
  {
    path: '/two/:id',
    name: 'componentTwo',
    component: () => import('../components/componentTwo.vue'),
    props: true,
  },
  {
    path: '/three/:id',
    name: 'componentThree',
    component: () => import('../components/componentThree.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
