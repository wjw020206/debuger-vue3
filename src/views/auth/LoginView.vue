<script setup lang="ts">
import loginFormFunciton from '@/composables/auth/login_form';

const { loginFieldList, loginFormData, handleSubimt, loginOptions } =
  loginFormFunciton();
</script>

<template>
  <!-- logo -->
  <router-link :to="{ path: '/' }">
    <img src="@/assets/images/common/logo.png" class="logo" title="debuger" />
  </router-link>

  <!-- 注册表单 -->
  <div class="form-box">
    <h1>用户登录</h1>

    <base-form
      :filedList="loginFieldList"
      :model="loginFormData"
      :options="loginOptions"
      @submit="handleSubimt"
    >
      <template #customize-btn-top>
        <div class="flex mb-[16px]">
          <router-link to="/forgot" class="forget-password"
            >忘记密码？</router-link
          >
        </div>
      </template>
    </base-form>
  </div>

  <p class="bottom-tip">
    还没有账户?
    <router-link to="/register" class="register">注册</router-link>
  </p>
</template>

<style scoped lang="scss">
.logo {
  @apply h-[75px] mt-[75px];
}
// 表单区域样式
.form-box {
  @apply w-[475px] bg-white mt-[30px] rounded-lg flex-col items-center px-[87.5px] py-[24px] shadow-md;
  & > h1 {
    @apply text-[28px] font-medium mb-[16px] text-center rounded-md;
  }

  // 忘记密码
  .forget-password {
    @apply ml-auto text-[16px];
    color: $primary-color;
  }

  // 输入框样式
  :deep(.el-input__wrapper) {
    @apply h-[41.6px];
  }

  // 登录按钮样式
  :deep(.submitBtn) {
    @apply w-full h-[46px] text-[20px];
  }

  :deep(.el-form-item) {
    &:last-of-type {
      @apply mb-0;
    }
  }
}

// 底部提示文字
.bottom-tip {
  @apply mt-[16px] text-[16px];
  & > .register {
    color: $primary-color;
  }
}
</style>
