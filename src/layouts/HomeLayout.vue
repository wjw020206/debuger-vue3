<script setup lang="ts"></script>

<template>
  <div class="main">
    <base-header />
    <router-view v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply flex flex-col items-center h-screen bg-[#FFF];
}
</style>
