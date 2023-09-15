<script setup lang="ts"></script>

<template>
  <RouterView v-slot="{ Component, route }">
    <template v-if="Component">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </RouterView>
</template>

<style scoped lang="scss"></style>
