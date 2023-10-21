import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers';

export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isBuild = command === 'build';

  // 读取env配置文件
  const env = loadEnv(mode, process.cwd());

  return {
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
          // 图标自动导入
          IconsResolver({
            prefix: false,
            enabledCollections: ['icon-park-outline'],
            alias: {
              park: 'icon-park-outline'
            }
          })
        ],
        extensions: ['vue', 'ts'],
        dirs: ['src/components', 'src/layouts'],
        // 类型文件输出目录
        dts: 'src/types/components.d.ts'
      }),
      Icons({
        autoInstall: true,
        compiler: 'vue3'
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
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true
        }
      }
    }
  };
});
