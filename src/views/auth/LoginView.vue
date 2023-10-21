<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { emailRegExp } from '@/utils/validators';
import { login } from '@/apis/authApi';
import userStorage from '@/utils/userStorage';
import { CacheEnum } from '@/enums/CacheEnum';
import router from '@/plugins/router';

interface RuleForm {
  email: string;
  password: string;
}

// 表单实例
const ruleFormRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  email: '',
  password: ''
});

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
  email: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('邮箱不能为空'));
        } else if (!emailRegExp.test(value)) {
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ],
  password: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ]
});

/**
 * 提交表单
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (valid) {
      const { token } = await login(formData);
      userStorage().set(CacheEnum.TOKEN_NAME, token);
      ElMessage.success('登录成功');
      router.push({ name: 'question' });
    } else {
      return false;
    }
  });
};
</script>

<template>
  <!-- logo -->
  <router-link :to="{ path: '/' }">
    <img src="@/assets/images/common/logo.png" class="logo" title="debuger" />
  </router-link>

  <!-- 注册表单 -->
  <div class="form-box">
    <h1>用户登录</h1>
    <el-form ref="ruleFormRef" :model="formData" :rules="rules">
      <el-form-item prop="email">
        <base-input placeholder="邮箱" v-model="formData.email" />
      </el-form-item>
      <el-form-item prop="password">
        <base-input
          type="password"
          v-model="formData.password"
          placeholder="密码"
          showPassword
          @keyup.enter="submitForm(ruleFormRef)"
        />
      </el-form-item>
      <div class="flex mb-[16px]">
        <router-link to="/forgot" class="forget-password"
          >忘记密码？</router-link
        >
      </div>
      <base-button :is-submit="true" @click="submitForm(ruleFormRef)"
        >登录</base-button
      >
    </el-form>
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
  :deep(.submit-btn) {
    @apply w-full h-[46px] text-[20px];
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
