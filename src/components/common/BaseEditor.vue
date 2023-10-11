<script setup lang="ts">
const text = ref('');
</script>

<template>
  <div>
    <v-md-editor
      v-model="text"
      height="313px"
      left-toolbar="h bold italic strikethrough | code link quote image | ul ol table hr"
      right-toolbar="clear | preview sync-scroll"
    />
  </div>
</template>

<style scoped lang="scss">
:deep(.v-md-editor) {
  @apply border shadow-none;
}
</style>
