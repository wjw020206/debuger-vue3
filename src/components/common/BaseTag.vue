<script setup lang="ts"></script>

<template>
  <span class="tag">
    <slot name="default" />
  </span>
</template>

<style scoped lang="scss">
.tag {
  @apply text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm;
}
</style>
