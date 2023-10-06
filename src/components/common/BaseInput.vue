<script setup lang="ts">
interface Props {
  isSuffix?: boolean;
  isPrefix?: boolean;
}
withDefaults(defineProps<Props>(), {
  isSuffix: false,
  isPrefix: false
});
</script>

<template>
  <el-input v-bind="$attrs" :class="{ 'suffix-style': isSuffix }">
    <template #suffix v-if="isSuffix">
      <slot name="suffix" />
    </template>
    <template #prefix v-if="isPrefix">
      <slot name="prefix" />
    </template>
  </el-input>
</template>

<style scoped lang="scss">
.el-input {
  :deep(.el-input__wrapper) {
    @apply rounded-md border border-slate-400 text-[16px] shadow-none;
    &.is-focus {
      @apply border border-solid border-[#6bbbf7];
      box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
    }
    & > .el-input__inner {
      @apply text-black;
    }
  }
}

// 后缀样式
.suffix-style {
  :deep(.el-input__wrapper) {
    @apply pr-0;
  }

  :deep(.el-input__suffix) {
    @apply h-full;
  }
}
</style>
