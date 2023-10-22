<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import {
  emailRegExp,
  passwordRegExp,
  verificationCodeRegExp
} from '@/utils/validators';
import { register } from '@/apis/authApi';
import router from '@/plugins/router';

interface RuleForm {
  nickname: string;
  email: string;
  verificationCode: string;
  password: string;
  passwordConfirmation: string;
}

// 表单实例
const ruleFormRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  nickname: '',
  email: '',
  verificationCode: '',
  password: '',
  passwordConfirmation: ''
});

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
  nickname: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('昵称不能为空'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ],
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
  passwordConfirmation: [
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
  formEl.validate(async valid => {
    if (valid) {
      const { password, nickname, email } = formData;
      await register({
        password,
        nickname,
        email
      });
      ElMessage.success('注册成功');
      router.push({ name: 'login' });
    } else {
      return false;
    }
  });
};
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
        <el-form ref="ruleFormRef" :model="formData" :rules="rules">
          <el-form-item prop="nickname">
            <base-input placeholder="昵称" v-model="formData.nickname" />
          </el-form-item>
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
          <el-form-item prop="passwordConfirmation">
            <base-input
              type="password"
              v-model="formData.passwordConfirmation"
              placeholder="请再次输入密码"
              showPassword
            />
          </el-form-item>
          <base-button :is-submit="true" @click="submitForm(ruleFormRef)"
            >注册</base-button
          >
        </el-form>
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
    @apply flex flex-col mt-[80px];
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
      // 提交按钮样式
      & .submit-btn {
        @apply w-full h-[46px] text-[20px] mt-[10px];
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
