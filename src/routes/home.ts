import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/HomeLayout.vue'),
  children: [
    {
      name: 'home',
      path: '',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      name: 'tags',
      path: 'tags',
      component: () => import('@/views/home/TagsView.vue')
    },
    {
      name: 'users',
      path: 'users',
      component: () => import('@/views/home/UsersView.vue')
    }
  ]
} as RouteRecordRaw;
