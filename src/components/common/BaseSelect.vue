<script setup lang="ts">
interface Props {
  options: Array<{
    label: string;
    value: string;
  }>;
}
withDefaults(defineProps<Props>(), {
  options: () => []
});
</script>

<template>
  <el-select v-bind="$attrs" class="base-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<style lang="scss" scoped>
.base-select {
  :deep(.el-input__wrapper) {
    @apply rounded-md border border-slate-400 text-[16px] shadow-none;
    &.is-focus {
      @apply border border-solid border-[#6bbbf7];
      box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px !important;
    }
    & > .el-input__inner {
      @apply text-black;
    }
  }
}
</style>
