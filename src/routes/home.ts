import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/HomeLayout.vue'),
  children: [
    {
      name: 'question',
      path: '/question',
      component: () => import('@/views/home/question/QuestionView.vue'),
      children: [
        {
          name: 'newest',
          path: '',
          component: () => import('@/views/home/question/NewestView.vue')
        },
        {
          name: 'push-me',
          path: 'push-me',
          component: () => import('@/views/home/question/PushMe.vue')
        },
        {
          name: 'unanswered',
          path: 'unanswered',
          component: () => import('@/views/home/question/UnansweredView.vue')
        },
        {
          name: 'detail',
          path: 'detail',
          component: () => import('@/views/home/question/QuestionDetail.vue')
        }
      ]
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
