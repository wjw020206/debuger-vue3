<script setup lang="ts">
import useStorage from '@/utils/useStorage';

const { get } = useStorage();
const searchValue = ref('');
</script>

<template>
  <header class="h-[57px] w-screen">
    <div
      class="fixed z-[999] right-0 left-0 top-0 flex justify-center shadow-md py-[8px] bg-[#fff]"
    >
      <div class="flex w-[1140px] h-[40px] items-center gap-[30px]">
        <!-- logo -->
        <router-link to="/" class="shrink-0">
          <img
            src="@/assets/images/common/logo.png"
            class="h-[30px]"
            title="debuger"
          />
        </router-link>
        <!-- 搜索框 -->
        <base-input class="h-full" v-model="searchValue" :is-prefix="true">
          <template #prefix>
            <el-icon size="20" color="#333">
              <park-search />
            </el-icon>
          </template>
        </base-input>
        <template v-if="get(CacheEnum.TOKEN_NAME) !== null">
          <img
            :src="useUserStore().userInfo?.avatar"
            class="w-[30px] h-[30px] cursor-pointer"
            @click="$router.push({ name: 'myHome' })"
          />
          <el-icon size="30" color="#000" class="cursor-pointer">
            <park-folder-focus-one />
          </el-icon>
        </template>
        <div class="flex" v-else>
          <base-button color="#3b82f6" @click="$router.push({ name: 'login' })"
            >登录</base-button
          >
          <base-button
            color="#3b82f6"
            @click="$router.push({ name: 'register' })"
            >注册</base-button
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
