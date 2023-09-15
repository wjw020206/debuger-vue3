import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    // api按需导入
    AutoImport({
      // 定义element-plus api按需加载
      resolvers: [ElementPlusResolver()],
      // 导入vue以及其他 api按需加载
      imports: ['vue', 'vue-router', 'pinia'],
      // 目录文件按需加载
      dirs: ['src/enums/**/*', 'src/stores/**/*'],
      vueTemplate: true,
      // 类型文件输出目录
      dts: 'src/types/auto-imports.d.ts'
    }),
    // 自动导入组件
    Components({
      resolvers: [
        // Element plus组件自动导入
        ElementPlusResolver(),
        // Vue组件自动导入
        VueUseComponentsResolver(),
        // 针对iconpark图标按需导入
        componentName => {
          if (componentName.startsWith('Icon')) {
            return {
              name: componentName.slice(4),
              from: '@icon-park/vue-next'
            };
          }
        }
      ],
      extensions: ['vue', 'ts'],
      dirs: ['src/components', 'src/layouts'],
      // 类型文件输出目录
      dts: 'src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/var.scss";'
      }
    }
  }
});
