import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/SettingsLayout.vue'),
  children: [
    {
      name: 'profile',
      path: 'settings/profile',
      component: () => import('@/views/home/settings/ProfileView.vue')
    },
    {
      name: 'settings',
      path: 'settings',
      component: () => import('@/views/home/settings/SettingsView.vue')
    }
  ]
} as RouteRecordRaw;
