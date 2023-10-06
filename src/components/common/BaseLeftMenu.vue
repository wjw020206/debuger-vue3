<script setup lang="ts"></script>

<template>
  <aside class="flex flex-col w-[91.66px] border-r border-[#d6d9dc]">
    <router-link
      to="/"
      class="link"
      :class="{ active: $route.name === 'question' }"
      >问题</router-link
    >
    <router-link
      to="/tags"
      class="link"
      :class="{ active: $route.name === 'tags' }"
      >标签</router-link
    >
    <router-link
      to="/users"
      class="link"
      :class="{ active: $route.name === 'users' }"
      >用户</router-link
    >
  </aside>
</template>

<style scoped lang="scss">
.link {
  @apply pl-[8px] py-[4px];
  &.active {
    @apply bg-[#f1f2f3] font-semibold relative;
    &::after {
      content: '';
      @apply absolute w-[3px] h-full top-0 right-[-1px];
      background-color: $primary-color;
    }
  }
}
</style>
