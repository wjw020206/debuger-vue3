<script setup lang="ts">
import { updatePassword } from '@/apis/userApi';
import BaseDialog from '@/components/common/BaseDialog.vue';
import { verificationCodeRegExp, passwordRegExp } from '@/utils/validators';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';

const { userInfo } = useUserStore();

interface RuleForm {
  verificationCode: string;
  password: string;
  passwordTwo: string;
}

const dialogRef = ref<InstanceType<typeof BaseDialog> | null>(null);
const formRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  verificationCode: '',
  password: '',
  passwordTwo: ''
});

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
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

const showDialog = () => {
  dialogRef.value?.showDialog();
};

/**
 * 提交表单
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (valid) {
      await updatePassword(formData.password);
      ElMessage.success('修改密码成功');
      dialogRef.value?.hideDialog();
    } else {
      return false;
    }
  });
};

const closeHandle = () => {
  formRef.value?.resetFields();
};

defineExpose({
  showDialog
});
</script>

<template>
  <base-dialog
    title="修改密码"
    ref="dialogRef"
    width="500"
    @confirmHandle="submitForm(formRef)"
    @close="closeHandle"
  >
    <template #default>
      <el-form
        :model="formData"
        label-position="top"
        ref="formRef"
        :rules="rules"
      >
        <el-form-item label="邮箱">
          <base-input disabled v-model="userInfo!.email" />
          <span class="text-[#6c757d] text-[13px]"
            >我们将发送验证码短信到该邮箱</span
          >
        </el-form-item>
        <el-form-item prop="verificationCode">
          <base-input
            placeholder="邮箱验证码"
            v-model="formData.verificationCode"
            :is-suffix="true"
          >
            <template #suffix>
              <base-button :is-send-sms="true">获取验证码</base-button>
            </template>
          </base-input>
        </el-form-item>
        <el-form-item prop="password" label="新密码">
          <base-input
            v-model="formData.password"
            type="password"
            placeholder="请输入新密码"
            showPassword
          />
        </el-form-item>
        <el-form-item prop="passwordTwo">
          <base-input
            type="password"
            v-model="formData.passwordTwo"
            placeholder="请重复输入新密码"
            showPassword
          />
        </el-form-item>
      </el-form>
    </template>
  </base-dialog>
</template>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  @apply h-[38px];
}

:deep(.el-form-item__label) {
  @apply text-[16px] text-[#000];
}
</style>
