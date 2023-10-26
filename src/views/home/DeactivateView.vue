<script setup lang="ts">
import { deleteUser } from '@/apis/userApi';
import router from '@/plugins/router';
import useStorage from '@/utils/useStorage';
import { ElMessage } from 'element-plus';

const deleteUserHandle = async () => {
  await deleteUser();
  ElMessage.success('注销账号成功');
  useStorage().remove(CacheEnum.TOKEN_NAME);
  router.push({ name: 'newest' });
};
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="w-[380px] flex flex-col items-center">
      <router-link to="/" class="mt-[22px] mb-[24px]">
        <img src="@/assets/images/common/logo.png" class="block w-[170px]" />
      </router-link>

      <div
        class="w-full border-[2px] rounded-md p-[24px] flex flex-col items-center"
      >
        <h1 class="text-[28px] text-center font-medium mb-[16px]">账号注销</h1>
        <div
          class="p-[16px] w-[306px] h-[104px] bg-[#f8d7da] rounded-md border-[2px] border-[#f1aeb5]"
        >
          <span class="text-[16px] font-bold">重要提示：</span>
          <span>账号注销后无法找回，您确认要注销吗？</span>
        </div>
        <base-button class="cancel-btn" @click="deleteUserHandle"
          >开始注销</base-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cancel-btn {
  @apply w-[306px] h-[46px] mt-[16px] text-[20px] text-white rounded-md;
  background-color: $primary-color;
}
</style>
