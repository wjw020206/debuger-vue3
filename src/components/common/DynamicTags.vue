<script setup lang="ts">
import type { ElInput } from 'element-plus';

/** 输入框实例 */
const InputRef = ref<InstanceType<typeof ElInput>>();

/** 文本框输入的内容 */
const inputValue = ref('');

/** 是否显示文本框 */
const inputVisible = ref(false);

/** 显示输入框 */
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

/** 自定义标签 */
const dynamicTags = ref<string[]>([]);

/** 删除标签 */
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

/** 确认输入*/
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>

<template>
  <div class="flex gap-[5px]">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="w-[80px] !h-[24px] !text-[13px]"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <base-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="add-tag-input"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <base-button v-else @click="showInput" class="add-tag">
      + 添加标签
    </base-button>
  </div>
</template>

<style scoped lang="scss">
.add-tag {
  @apply w-[80px] h-[24px] text-[13px];
}

.add-tag-input {
  @apply w-[80px] h-[24px];
}
</style>
