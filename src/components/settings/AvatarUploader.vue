<script setup lang="ts">
import { uploadImage } from '@/apis/userApi';
import { ElMessage, type UploadProps } from 'element-plus';
import imageCompression from 'browser-image-compression';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const newFile = reactive(new FormData());

/**
 * 获取文件的扩展名
 * @param filename 文件名
 * @returns 扩展名
 */
const getFileExtension = (filename: string) => {
  const index = filename.lastIndexOf('.');
  return index !== -1 ? filename.substring(index) : '';
};

/**
 * 头像上传前回调
 * @param rawFile 文件
 */
const beforeAvatarUpload: UploadProps['beforeUpload'] = async rawFile => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(rawFile.type)) {
    ElMessage.error('头像仅支持png和jpg格式');
    return false;
  }

  if (newFile.get('file')) {
    newFile.delete('file');
  }

  try {
    const compressedFile = await imageCompression(rawFile, {
      maxSizeMB: 1
    });
    const extension = getFileExtension(rawFile.name);
    newFile.append('file', compressedFile, `file${extension}`);
    return true;
  } catch (error) {
    ElMessage.error('上传失败');
    return false;
  }
};

/**
 * 上传头像
 */
const uploadHandle = async () => {
  const newData = newFile;
  const { path } = await uploadImage(newData);

  emit('update:modelValue', `\\${path}`);
};
</script>

<template>
  <div class="flex">
    <img :src="modelValue" class="w-[96px] h-[96px] block rounded-[50%]" />
    <el-upload
      class="avatar-uploader"
      action=""
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
      :http-request="uploadHandle"
      accept="image/jpeg,image/png"
    >
      <template #trigger>
        <div class="upload-btn">上传图片</div>
      </template>
      <template #tip>支持 jpg/jpeg/png 格式</template>
    </el-upload>
  </div>
</template>

<style lang="scss" scoped>
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  width: 80px;
  height: 80px;
  color: #000;
  text-align: center;
  border: 1px dashed #000;
  border-radius: 50%;
}

.avatar-uploader {
  @apply ml-[16px] flex flex-col justify-center;
  :deep(.el-upload--text) {
    @apply justify-start;
  }
}

.upload-btn {
  @apply w-[74px] h-[30px] text-[14px] flex border border-[#3b82f6] rounded-sm justify-center items-center text-[#3b82f6];
  &:hover {
    background-color: $primary-color;
    color: #fff;
  }
}
</style>
