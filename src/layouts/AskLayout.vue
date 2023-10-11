<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center h-screen bg-[#F1F2F3] relative">
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </RouterView>
  </div>
</template>

<style scoped lang="scss"></style>
