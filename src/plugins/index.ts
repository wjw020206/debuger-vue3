import type { App } from 'vue';
import { setup as pinia } from './pinia';
import { setup as router } from './router';

const modules = [pinia, router];

// 注册插件
export default function register(app: App) {
  modules.map(setup => setup(app));
}
