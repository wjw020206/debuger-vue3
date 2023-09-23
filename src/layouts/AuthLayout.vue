<script setup lang="ts"></script>

<template>
  <div class="main">
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </RouterView>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply flex flex-col items-center h-screen bg-[#F1F2F3] relative;
}
</style>
