<script setup lang="ts">
import BaseDialog from '@/components/common/BaseDialog.vue';
import { verificationCodeRegExp } from '@/utils/validators';
import type { FormInstance, FormRules } from 'element-plus';
import ChangeNewEmailDialog from '@/components/settings/ChangeNewEmailDialog.vue';

interface Props {
  changeNewEmailDialogRef: InstanceType<typeof ChangeNewEmailDialog> | null;
}

const props = withDefaults(defineProps<Props>(), {
  changeNewEmailDialogRef: null
});

interface RuleForm {
  verificationCode: string;
}

const dialogRef = ref<InstanceType<typeof BaseDialog> | null>(null);
const formRef = ref<FormInstance>();

// 表单数据
const formData = reactive<RuleForm>({
  verificationCode: ''
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
      props.changeNewEmailDialogRef?.showDialog();
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
        <el-form-item label="邮箱">
          <base-input disabled :value="useUserStore().userInfo?.email" />
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
