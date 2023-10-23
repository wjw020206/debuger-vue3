<script setup lang="ts"></script>

<template>
  <div>
    <el-date-picker v-bind="$attrs" type="date" />
  </div>
</template>

<style lang="scss" scoped>
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
</style>
