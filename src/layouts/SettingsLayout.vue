<script setup lang="ts"></script>

<template>
  <div class="main">
    <base-header />
    <div
      class="absolute top-[57px] left-0 bottom-0 right-0 flex justify-center"
    >
      <div class="w-[1140px] h-full pt-[24px] flex flex-col gap-[20px]">
        <h1 class="text-[32px]">个人设置</h1>
        <div class="flex gap-[24px] flex-1">
          <div class="flex flex-col h-full">
            <router-link
              :to="{ name: 'settings' }"
              class="link"
              :class="{ active: $route.name === 'settings' }"
            >
              账号设置
            </router-link>
            <router-link
              :to="{ name: 'profile' }"
              class="link"
              :class="{ active: $route.name === 'profile' }"
            >
              个人资料
            </router-link>
          </div>
          <RouterView v-slot="{ Component, route }">
            <template v-if="Component">
              <component :is="Component" :key="route.fullPath" />
            </template>
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply flex flex-col items-center h-screen bg-[#ffffff] relative;
}

.link {
  @apply w-[166px] h-[40px] text-[16px] px-[16px] py-[8px] rounded-md cursor-pointer;
  &.active {
    @apply text-white;
    background-color: $primary-color;
  }
}
</style>
