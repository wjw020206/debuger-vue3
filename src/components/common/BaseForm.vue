<script setup lang="ts">
import type { FormInstance } from 'element-plus';

// 表单的数据
const formData = ref<Record<string, any>>({});

// 表单实例
const formRef = ref<FormInstance>();

const props = defineProps<{
  // 传入的表单字段列表
  filedList: Form.FieldItem[];

  // 传入的表单数据
  model?: Record<string, any>;

  // 传入的表单配置项
  options?: Form.Options;
}>();

// 设置option的默认值，如果传入自定义的配置合并option配置项
const _options: ComputedRef<Form.Options> = computed(() => {
  const option = {
    labelPosition: 'right',
    disabled: false,
    submitButtonText: '提交',
    resetButtonText: '重置',
    cancelButtonText: '取消'
  };

  return Object.assign(option, props?.options);
});

interface EmitEvent {
  (e: 'submit', params?: any): void;
  (e: 'reset'): void;
  (e: 'cancel'): void;
}

const emit = defineEmits<EmitEvent>();

defineExpose({
  formRef
});

// 根据fieldList初始化model
watch(
  () => props.model,
  () => {
    props.filedList.map((item: Form.FieldItem) => {
      const value = item.type === 'checkbox' ? [] : '';
      props.model
        ? (formData.value = props.model)
        : (formData.value[item.field] = item.value || value);
    });
  },
  {
    immediate: true
  }
);

/**
 * 提交按钮
 */
const onSubmit = (formEl?: FormInstance) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      emit('submit', formData.value);
    } else {
      return false;
    }
  });
};

/**
 * 输入框回车事件
 */
const handleKeyUp = (enterable?: boolean) => {
  if (!enterable) return;
  onSubmit();
};

/**
 * 重置表单
 */
const resetForm = (formEl?: FormInstance) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-form @submit.prevent :model="formData" v-bind="_options" ref="formRef">
    <template v-for="(item, index) in filedList" :key="index">
      <!-- 单选框 -->
      <el-form-item
        :label="item.label"
        :rules="item.rules"
        :prop="[item.field]"
        v-if="item.type === 'radio'"
      >
        <el-radio-group
          v-model="formData[item.field]"
          :disabled="item.disabled"
        >
          <el-radio
            v-for="val in item.options?.data"
            :label="val[item.options?.valueKey || 'value']"
            :key="val[item.options?.valueKey || 'value']"
          >
            {{ val[item.options?.labelKey || 'label'] }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 复选框 -->
      <el-form-item
        :label="item.label"
        v-else-if="item.type === 'checkbox'"
        :rules="item.rules"
        :prop="[item.field]"
      >
        <el-checkbox-group
          v-model="formData[item.field]"
          :disabled="item.disabled"
        >
          <el-checkbox
            v-for="c in item.options?.data"
            :key="c[item.options?.valueKey || 'value']"
            :label="c[item.options?.valueKey || 'value']"
          >
            {{ c[item.options?.labelKey || 'label'] }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <!-- 下拉框 -->
      <el-form-item
        :label="item.label"
        :rules="item.rules"
        :prop="[item.field]"
        v-else-if="item.type === 'select'"
      >
        <el-select
          v-model="formData[item.field]"
          :placeholder="item.options?.palceholder || '请选择'"
          :clearable="item.clearable"
        >
          <el-option
            v-for="s in item.options?.data"
            :key="s[item.options?.valueKey || 'value']"
            :label="s[item.options?.labelKey || 'label']"
            :value="s[item.options?.valueKey || 'value']"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 普通文本框 -->
      <el-form-item
        :label="item.label"
        :rules="item.rules"
        :prop="[item.field]"
        v-else
      >
        <el-input
          v-model="formData[item.field]"
          :readonly="item.readonly"
          :type="item.type ?? 'text'"
          :placeholder="item.placeholder || item.label"
          :disabled="item.disabled"
          :showPassword="item.showPassword"
          :clearable="item.clearable"
          @keyup.enter="handleKeyUp(item.enterable)"
        />
      </el-form-item>
    </template>

    <!-- 自定义按钮上部区域内容 -->
    <slot name="customize-btn-top" />

    <!-- 表单按钮 -->
    <el-form-item>
      <slot name="buttons" :model="formData" :formRef="formRef">
        <el-button
          class="submitBtn"
          v-if="_options.showSubmitButton"
          @click="onSubmit(formRef)"
          >{{ _options.submitButtonText }}</el-button
        >
        <el-button v-if="_options.showResetButton" @click="resetForm(formRef)">
          {{ _options.resetButtonText }}
        </el-button>
        <el-button v-if="_options.showCancelButton" @click="emit('cancel')">
          {{ _options.cancelButtonText }}
        </el-button>
      </slot>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.el-input {
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
}

// 提交按钮样式
.submitBtn {
  @apply hover:bg-blue-600 text-white rounded-md;
  background-color: $primary-color;
}
</style>
