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
  <el-input
    v-bind="$attrs"
    :class="{ 'suffix-style': isSuffix }"
    class="base-input"
  >
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

.base-input {
  --el-input-border-color: #94a3b8;
  box-shadow: none;
  :deep(.el-textarea__inner) {
    @apply text-black text-[16px];
    &:focus {
      @apply border border-solid border-[#6bbbf7];
      box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
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
