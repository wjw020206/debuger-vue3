<script setup lang="ts">
const switchList = [
  {
    name: 'newest',
    text: '最新'
  },
  {
    name: 'push-me',
    text: '为我推送'
  },
  {
    name: 'unanswered',
    text: '待回答'
  }
];
</script>

<template>
  <div class="flex w-full justify-between">
    <h1 class="font-medium text-[24px]">问答</h1>
    <base-switch :switchList="switchList" :isRouter="true"></base-switch>
    <base-button
      :is-submit="true"
      class="ask-questions"
      @click="$router.push({ name: 'askQuestion' })"
    >
      提问题
    </base-button>
  </div>
</template>

<style scoped lang="scss">
:deep(.ask-questions) {
  @apply rounded-md w-[72px] h-[36px] text-[16px] border-none;
}
</style>
