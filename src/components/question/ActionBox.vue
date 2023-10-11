<script setup lang="ts"></script>

<template>
  <div class="flex w-full justify-between">
    <h1 class="font-medium text-[24px]">问答</h1>
    <div class="flex">
      <router-link
        :to="{ name: 'newest' }"
        class="text"
        :class="{ active: $route.name === 'newest' }"
        >最新</router-link
      >
      <router-link
        :to="{ name: 'push-me' }"
        class="text"
        :class="{ active: $route.name === 'push-me' }"
        >为我推送</router-link
      >
      <router-link
        :to="{ name: 'unanswered' }"
        class="text"
        :class="{ active: $route.name === 'unanswered' }"
        >待回答</router-link
      >
    </div>
    <base-button :is-submit="true" class="ask-questions"> 提问题 </base-button>
  </div>
</template>

<style scoped lang="scss">
:deep(.ask-questions) {
  @apply rounded-md w-[72px] h-[36px] text-[16px] border-none;
}

.text {
  @apply py-[6px] px-[12px] cursor-pointer;
}

.active {
  @apply font-semibold relative;
  &::after {
    content: '';
    @apply absolute h-[3px] w-full bottom-0 right-[-1px];
    background-color: $primary-color;
  }
}
</style>
