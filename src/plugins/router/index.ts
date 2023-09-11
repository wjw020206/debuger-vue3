import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import guard from './guard';
import type { App } from 'vue';

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 设置路由守卫
guard(router);

const setup = (app: App) => {
  app.use(router);
};

export { setup };
export default router;
