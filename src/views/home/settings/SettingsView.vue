<script setup lang="ts">
import ChangePasswordDialog from '@/components/settings/ChangePasswordDialog.vue';
import ChangeEmailDialog from '@/components/settings/ChangeEmailDialog.vue';
import ChangeNewEmailDialog from '@/components/settings/ChangeNewEmailDialog.vue';

const changePasswordDialogRef = ref<InstanceType<
  typeof ChangePasswordDialog
> | null>(null);
const changeEmailDialogRef = ref<InstanceType<typeof ChangeEmailDialog> | null>(
  null
);
const changeNewEmailDialogRef = ref<InstanceType<
  typeof ChangeNewEmailDialog
> | null>(null);
</script>

<template>
  <div class="flex flex-col w-[734px]">
    <div class="border-[2px] rounded-md mb-[24px]">
      <h1 class="py-[8px] px-[16px] font-bold text-[16px] border-b">
        社区账号
      </h1>
      <div class="p-[16px]">
        <div class="text-[#6c757d] text-[16px] mb-[16px]">社区安全信息管理</div>
        <base-divider />
        <div class="flex">
          <div class="w-[24%] p-[8px]">邮箱</div>
          <div class="w-[60%] p-[8px] text-[#6c757d]">
            {{ useUserStore().userInfo?.email }}
          </div>
          <div
            class="text-center p-[8px] w-[16%] text-[#3b82f6] cursor-pointer"
            @click="changeEmailDialogRef?.showDialog"
          >
            编辑
          </div>
        </div>
        <base-divider />
        <div class="flex">
          <div class="w-[24%] p-[8px]">密码</div>
          <div class="w-[60%] p-[8px] text-[#6c757d]">****************</div>
          <div
            class="text-center p-[8px] w-[16%] text-[#3b82f6] cursor-pointer"
            @click="changePasswordDialogRef?.showDialog"
          >
            编辑
          </div>
        </div>
      </div>
    </div>
    <div class="border-[2px] rounded-md mb-[24px]">
      <h1 class="py-[8px] px-[16px] font-bold text-[16px] border-b">
        更多选项
      </h1>
      <div class="p-[16px]">
        <div class="text-[#6c757d] text-[16px]">
          不想继续使用或需要删除多余的账号？<router-link
            :to="{ name: 'deactivate' }"
            class="text-[#3b82f6] cursor-pointer"
            >申请注销</router-link
          >
        </div>
      </div>
    </div>
  </div>

  <change-password-dialog ref="changePasswordDialogRef" />
  <change-email-dialog
    ref="changeEmailDialogRef"
    :changeNewEmailDialogRef="changeNewEmailDialogRef"
  />
  <change-new-email-dialog ref="changeNewEmailDialogRef" />
</template>

<style lang="scss" scoped></style>
