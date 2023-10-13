<script setup lang="ts">
const intro = ref('');
</script>

<template>
  <div class="content">
    {{ intro }}
    <div v-if="intro === ''">个人简介什么都没有哦</div>
  </div>
</template>

<style scoped lang="scss">
.content {
  @apply w-[500px] h-[300px];
  border: 1px solid #e5e7eb;
  border-radius: 25px;
  padding: 24px;
}
</style>
