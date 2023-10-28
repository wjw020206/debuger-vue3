<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>();

interface RuleForm {
  title: string;
  content: string;
  tags: string[];
}

const formData = reactive<RuleForm>({
  title: '',
  content: '',
  tags: []
});

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
  title: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('标题不能为空'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ],
  content: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('问题描述不能为空'));
        } else if (value.length <= 20) {
          callback(new Error('问题描述不能低于20个字符'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ],
  tags: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value.length === 0) {
          callback(new Error('问题标签不能为空'));
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
      console.log(formData);
    } else {
      return false;
    }
  });
};
</script>

<template>
  <el-form
    class="w-full flex flex-col pb-[80px]"
    :model="formData"
    :rules="rules"
    ref="ruleFormRef"
  >
    <!-- 标题 -->
    <h1 class="text-[27px] font-semibold">发布一个公开问题</h1>
    <!-- 表单区域 -->
    <div class="flex flex-col w-[850px] mt-[16px]">
      <!-- 发布问题步骤 -->
      <div
        class="bg-[#ebf4fb] flex flex-col p-[24px] border border-[#a6ceed] rounded-sm mb-[16px]"
      >
        <h2 class="text-[21px] text-[#3b4045] mb-[15px]">如何发布一个问题？</h2>
        <p class="text-[15px] text-[#3b4045] font-semibold">步骤</p>
        <ul class="ml-[34px]">
          <li class="list-disc">用一行标题总结您的问题</li>
          <li class="list-disc">更详细地描述您的问题</li>
          <li class="list-disc">描述您尝试过的内容以及预期发生的情况</li>
          <li class="list-disc">添加“标签”，有助于向社区成员展示您的问题</li>
          <li class="list-disc">查看您的问题并将其发布</li>
        </ul>
      </div>
      <!-- 标题输入区 -->
      <div class="flex flex-col p-[24px] border border-[#e3e6e8] mb-[16px]">
        <h3 class="text-[18px] text-[#0c0d0e] font-semibold">标题</h3>
        <p class="text-[#3b4045] text-[14px] my-[8px]">
          标题要具体，想象你正在向另一个人提问
        </p>
        <el-form-item prop="title">
          <base-input placeholder="请输入标题" v-model="formData.title" />
        </el-form-item>
      </div>
      <!-- 问题细节输入区 -->
      <div class="flex flex-col p-[24px] border border-[#e3e6e8]">
        <h3 class="text-[18px] text-[#0c0d0e] font-semibold">问题具体描述</h3>
        <p class="text-[#3b4045] text-[14px] my-[8px]">
          介绍问题并扩展您在标题中输入的字符，不能低于20个字符
        </p>
        <el-form-item prop="content">
          <base-editor v-model="formData.content" class="w-full" />
        </el-form-item>
      </div>
      <!-- 标签 -->
      <div class="flex flex-col p-[24px] border border-[#e3e6e8] mt-[16px]">
        <h3 class="text-[18px] text-[#0c0d0e] font-semibold">标签</h3>
        <p class="text-[#3b4045] text-[14px] my-[8px]">
          最多添加5个标签来描述您的问题。开始键入以查看建议
        </p>
        <el-form-item prop="tags">
          <dynamic-tags v-model="formData.tags" />
        </el-form-item>
      </div>
      <base-button
        class="release"
        color="#3b82f6"
        @click="submitForm(ruleFormRef)"
        >发布您的问题</base-button
      >
    </div>
  </el-form>
</template>

<style scoped lang="scss">
.next {
  @apply w-[60px] h-[36px] text-[13px] mt-[8px];
}
.release {
  @apply w-[100px] h-[37px] mt-[12px];
}
</style>
