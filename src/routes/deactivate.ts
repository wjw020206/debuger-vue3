import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/user',
  children: [
    {
      name: 'deactivate',
      path: 'deactivate',
      component: () => import('@/views/home/DeactivateView.vue')
    }
  ]
} as RouteRecordRaw;
