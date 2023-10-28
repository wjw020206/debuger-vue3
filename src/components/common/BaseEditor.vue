<script setup lang="ts"></script>

<template>
  <div>
    <v-md-editor
      v-bind="$attrs"
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
