<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import {
  emailRegExp,
  passwordRegExp,
  verificationCodeRegExp
} from '@/utils/validators';

interface RuleForm {
  email: string;
  verificationCode: string;
  password: string;
  passwordTwo: string;
}

// 表单实例
const ruleFormRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  email: '',
  verificationCode: '',
  password: '',
  passwordTwo: ''
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
  verificationCode: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        } else if (!verificationCodeRegExp.test(value)) {
          callback(new Error('验证码格式错误'));
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
        } else if (value.length < 8 || value.length > 20) {
          callback(new Error('密码长度需为8到20位'));
        } else if (!passwordRegExp.test(value)) {
          callback(new Error('密码至少包含一个大小写字母、数字、特殊字符'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ],
  passwordTwo: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else if (value !== formData.password) {
          callback(new Error('两次密码输入不一致'));
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
  formEl.validate(valid => {
    if (valid) {
      console.log(formData);
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

  <!-- 忘记密码表单 -->
  <div class="form-box">
    <h1>重置密码</h1>
    <el-form ref="ruleFormRef" :model="formData" :rules="rules">
      <el-form-item prop="email">
        <base-input placeholder="邮箱" v-model="formData.email" />
      </el-form-item>
      <el-form-item prop="verificationCode">
        <base-input
          placeholder="验证码"
          v-model="formData.verificationCode"
          :is-suffix="true"
        >
          <template #suffix>
            <base-button :is-send-sms="true">获取验证码</base-button>
          </template>
        </base-input>
      </el-form-item>
      <el-form-item prop="password">
        <base-input
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
          showPassword
        />
      </el-form-item>
      <el-form-item prop="passwordTwo">
        <base-input
          type="password"
          v-model="formData.passwordTwo"
          placeholder="请再次输入密码"
          showPassword
        />
      </el-form-item>
      <base-button :is-submit="true" @click="submitForm(ruleFormRef)"
        >提交</base-button
      >
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.logo {
  @apply h-[75px] mt-[75px];
}
.form-box {
  @apply flex flex-col w-[450px] px-[24px] py-[24px] shadow-md bg-white mt-[30px] rounded-lg;

  // 标题样式
  & > h1 {
    @apply text-[28px] font-medium mb-[16px] text-center;
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
</style>
