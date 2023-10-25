<script setup lang="ts">
import BaseDialog from '@/components/common/BaseDialog.vue';
import { emailRegExp, verificationCodeRegExp } from '@/utils/validators';
import type { FormInstance, FormRules } from 'element-plus';

interface RuleForm {
  verificationCode: string;
  email: string;
}

const dialogRef = ref<InstanceType<typeof BaseDialog> | null>(null);
const formRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  verificationCode: '',
  email: ''
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
  formEl.validate(valid => {
    if (valid) {
      console.log(formData);
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
    title="修改邮箱"
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
        <el-form-item label="新邮箱" prop="email">
          <base-input v-model="formData.email" />
          <span class="text-[#6c757d] text-[13px]"
            >我们将发送验证码短信到该邮箱</span
          >
        </el-form-item>
        <el-form-item prop="verificationCode" label="验证码">
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
