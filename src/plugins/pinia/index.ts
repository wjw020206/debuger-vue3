import { createPinia } from 'pinia';
import type { App } from 'vue';

const pinia = createPinia();

const setup = (app: App) => {
  app.use(pinia);
};

export { setup };
