import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/HomeLayout.vue'),
  children: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home/HomeView.vue')
    }
  ]
} as RouteRecordRaw;
