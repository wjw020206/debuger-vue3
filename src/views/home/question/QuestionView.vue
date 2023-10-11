<script setup lang="ts"></script>

<template>
  <main class="w-full flex gap-[20px]">
    <div
      class="w-[748px]"
      :class="{ 'w-full': $route.path === '/question/detail' }"
    >
      <action-box class="mb-[16px]" v-if="$route.path !== '/question/detail'" />
      <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
          <component :is="Component" :key="route.fullPath" />
        </template>
      </RouterView>
    </div>
    <!-- 标签管理 -->
    <tags-manager v-if="$route.path !== '/question/detail'" />
  </main>
</template>

<style scoped lang="scss"></style>
