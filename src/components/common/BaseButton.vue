<script setup lang="ts">
interface Props {
  isSubmit?: boolean;
  isSendSms?: boolean;
}
withDefaults(defineProps<Props>(), {
  isSubmit: false,
  isSendSms: false
});
</script>

<template>
  <el-button
    v-bind="$attrs"
    :color="isSubmit ? '#3b82f6' : ''"
    :class="{ 'submit-btn': isSubmit, 'send-sms-btn': isSendSms }"
  >
    <slot name="default" />
  </el-button>
</template>

<style scoped lang="scss">
// 提交按钮样式
.submit-btn {
  @apply text-white rounded-md;
}

// 获取验证码按钮样式
.send-sms-btn {
  @apply h-full w-full m-0 border-none text-[16px];
  color: $primary-color;
}
</style>
