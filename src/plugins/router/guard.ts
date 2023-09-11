import type { RouteLocationNormalized, Router } from 'vue-router';

export default (router: Router) => {
  router.beforeEach(beforeEach);
};

// 前置路由守卫
const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {};
