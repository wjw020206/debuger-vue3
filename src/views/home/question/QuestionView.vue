<script setup lang="ts"></script>

<template>
  <main class="w-full flex gap-[20px]">
    <div class="w-[748px]">
      <action-box class="mb-[16px]" />
      <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
          <component :is="Component" :key="route.fullPath" />
        </template>
      </RouterView>
    </div>
    <!-- 标签管理 -->
    <tags-manager />
  </main>
</template>

<style scoped lang="scss"></style>
