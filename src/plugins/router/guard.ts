import useStorage from '@/utils/useStorage';
import type { RouteLocationNormalized, Router } from 'vue-router';

export default (router: Router) => {
  router.beforeEach(beforeEach);
};

// 前置路由守卫
const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  // 如果有token则获取用户个人信息
  if (useStorage().get(CacheEnum.TOKEN_NAME) !== null) {
    useUserStore().getUserInfo();
  }
};
