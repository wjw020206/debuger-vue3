import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/layouts/MyAccountLayout.vue'),
  children: [
    {
      name: 'MyAccount',
      path: '/my-account',
      component: () => import('@/views/home/account/MyAccount.vue'),
      children: [
        {
          name: 'myHome',
          path: '',
          component: () => import('@/components/account/AccountHomepage.vue')
        },
        {
          name: 'myAnswer',
          path: 'answer',
          component: () => import('@/components/account/AccountAnswer.vue')
        },
        {
          name: 'myQuestion',
          path: 'question',
          component: () => import('@/components/account/AccountQuestion.vue')
        },
        {
          name: 'myFollow',
          path: 'follow',
          component: () => import('@/components/account/AccountFollow.vue'),
          children: [
            {
              name: 'followTags',
              path: 'tags',
              component: () =>
                import('@/components/account/follow/FollowTags.vue')
            },
            {
              name: 'followQuestions',
              path: 'question',
              component: () =>
                import('@/components/account/follow/FollowQuestions.vue')
            },
            {
              name: 'followPerson',
              path: 'person',
              component: () =>
                import('@/components/account/follow/FollowPerson.vue')
            },
            {
              name: 'followFans',
              path: 'fans',
              component: () => import('@/components/account/follow/MyFans.vue')
            }
          ]
        }
      ]
    }
  ]
} as RouteRecordRaw;
