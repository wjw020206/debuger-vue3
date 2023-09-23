<script setup lang="ts">
import registerFormFunciton from '@/composables/auth/register_form';

const { registerFieldList, registerFormData, registerOptions, handleSubimt } =
  registerFormFunciton();
</script>

<template>
  <div class="content">
    <!-- 左侧区域 -->
    <div class="left-section">
      <img src="@/assets/images/common/logo.png" class="logo" />
      <h1 class="title">加入Debuger社区</h1>
      <p class="text-[18px] mb-[15px] flex">
        <icon-thinking-problem
          theme="outline"
          size="24"
          fill="#3b82f6"
          class="mr-[5px]"
        />
        可以提出问题，摆脱困境
      </p>
      <p class="text-[18px] mb-[15px] flex">
        <icon-thumbs-up
          theme="outline"
          size="24"
          fill="#3b82f6"
          class="mr-[5px]"
        />
        解锁点赞和评论等新特权
      </p>
      <p class="text-[18px] mb-[15px] flex">
        <icon-star theme="outline" size="24" fill="#3b82f6" class="mr-[5px]" />
        收藏您最喜爱的答案或标签
      </p>
    </div>
    <!-- 右侧区域 -->
    <div class="right-section">
      <div class="form">
        <h1>用户注册</h1>
        <base-form
          :filedList="registerFieldList"
          :model="registerFormData"
          :options="registerOptions"
          @submit="handleSubimt"
        ></base-form>
      </div>

      <p class="bottom-tip">
        已有账户?
        <router-link to="/login" class="login">登录</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  @apply flex w-[640px] justify-between top-[50%] translate-y-[-50%] absolute;

  // 左侧区域样式
  & > .left-section {
    @apply flex flex-col;
    & > .logo {
      @apply h-[80px];
    }
    & > .title {
      @apply font-medium text-[24px] my-[20px];
    }
  }

  // 右侧区域样式
  & > .right-section {
    @apply flex flex-col;
    & > .form {
      @apply w-[300px] bg-white rounded-lg shadow-md px-[20px] py-[24px];
      & > h1 {
        @apply font-medium mb-[16px] text-[28px] text-center;
      }

      :deep(.el-form) {
        & > .el-form-item {
          @apply mb-[20px];

          & .submitBtn {
            @apply w-full h-[46px] text-[20px];
          }
        }
      }

      // 输入框样式
      :deep(.el-input__wrapper) {
        @apply h-[41.6px];
      }
    }

    // 底部提示文字
    & > .bottom-tip {
      @apply mt-[16px] text-[16px] text-center;
      & > .login {
        color: $primary-color;
      }
    }
  }
}
</style>
