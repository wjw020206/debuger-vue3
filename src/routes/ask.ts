import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/AskQuestionLayout.vue'),
  children: [
    {
      name: 'askQuestion',
      path: 'ask-question',
      component: () => import('@/views/home/AskQuestion.vue')
    }
  ]
} as RouteRecordRaw;
