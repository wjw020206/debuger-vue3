import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/AuthLayout.vue'),
  children: [
    {
      name: 'login',
      path: 'login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      name: 'register',
      path: 'register',
      component: () => import('@/views/auth/RegisterView.vue')
    },
    {
      name: 'forgot',
      path: 'forgot',
      component: () => import('@/views/auth/ForgotView.vue')
    }
  ]
} as RouteRecordRaw;
