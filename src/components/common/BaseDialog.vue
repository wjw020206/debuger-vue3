<script setup lang="ts">
const emit = defineEmits(['confirmHandle', 'closeHandle']);
const dialogVisible = ref(false);

/**确定回调 */
const confirmHandle = () => {
  emit('confirmHandle');
};

/**显示对话框 */
const showDialog = () => {
  dialogVisible.value = true;
};

/**隐藏对话框 */
const hideDialog = () => {
  dialogVisible.value = false;
};

defineExpose({
  showDialog,
  hideDialog
});
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      @close="$emit('closeHandle')"
      v-bind="$attrs"
    >
      <template #default>
        <slot name="default" />
      </template>
      <template #footer>
        <base-button class="btn-chancel" @click="dialogVisible = false"
          >取消</base-button
        >
        <base-button class="btn-confirm" @click="confirmHandle"
          >确定</base-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.btn-chancel {
  @apply w-[100px] h-[36px] text-white;
  background: rgba(0, 0, 0, 0.18);
}

.btn-confirm {
  @extend .btn-chancel;
  background: $primary-color;
}

:deep(.el-dialog__header) {
  @apply border-b m-[0];
}
</style>
