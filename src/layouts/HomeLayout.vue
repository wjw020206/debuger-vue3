<script setup lang="ts"></script>

<template>
  <div class="main">
    <base-header />
    <div
      class="absolute top-[57px] left-0 bottom-0 right-0 flex justify-center"
    >
      <div class="w-[1140px] h-full pt-[24px] flex gap-[20px]">
        <base-left-menu />
        <RouterView v-slot="{ Component, route }">
          <template v-if="Component">
            <component :is="Component" :key="route.fullPath" />
          </template>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply flex flex-col items-center h-screen bg-[#FFF] relative;
}
</style>
