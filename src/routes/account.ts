import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/MyAccountLayout.vue'),
  children: [
    {
      name: 'MyAccount',
      path: '/my-account',
      component: () => import('@/views/home/account/MyAccount.vue')
    }
  ]
} as RouteRecordRaw;
