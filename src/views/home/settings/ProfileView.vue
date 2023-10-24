<script setup lang="ts">
import { updateUser } from '@/apis/userApi';
import AvatarUploader from '@/components/settings/AvatarUploader.vue';
import router from '@/plugins/router';

const { userInfo } = useUserStore();
const formData = reactive<UserUpdate>({
  nickname: userInfo?.nickname,
  avatar: userInfo?.avatar,
  birthday: userInfo?.birthday,
  gender: userInfo?.gender,
  website: userInfo?.website,
  introduction: userInfo?.introduction
});

const options = [
  {
    label: '男',
    value: '男'
  },
  {
    label: '女',
    value: '女'
  },
  {
    label: '保密',
    value: '保密'
  }
];

/**
 * 提交用户资料
 */
const submitHandle = async () => {
  await updateUser(formData);
  router.push({ name: 'MyAccount' });
};
</script>

<template>
  <div class="flex flex-col w-[734px]">
    <el-form v-model="formData" label-position="top">
      <div class="border-[2px] rounded-md mb-[24px]">
        <h1 class="py-[8px] px-[16px] font-bold text-[16px] border-b">
          基本信息
        </h1>
        <div class="p-[16px]">
          <div class="flex justify-between">
            <div class="w-[339px]">
              <el-form-item prop="nickname" label="昵称">
                <base-input v-model="formData.nickname" class="input" />
              </el-form-item>
            </div>
            <div class="w-[339px]">
              <el-form-item prop="birthday" label="生日(不公开)">
                <base-date-picker
                  v-model="formData.birthday"
                  class="date-picker"
                  style="height: 39.6px; width: 339px"
                />
              </el-form-item>
            </div>
          </div>
          <el-form-item prop="nickname" label="个人头像">
            <avatar-uploader v-model="formData.avatar" />
          </el-form-item>
          <div class="flex justify-between">
            <el-form-item prop="gender" label="性别">
              <base-select
                :options="options"
                v-model="formData.gender"
                class="w-[339px] input"
              />
            </el-form-item>
            <div class="w-[339px]">
              <el-form-item prop="birthday" label="个人网站">
                <base-input
                  v-model="formData.website"
                  class="input"
                  placeholder="https://example.com"
                />
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
      <div class="border-[2px] rounded-md mb-[24px]">
        <h1 class="py-[8px] px-[16px] font-bold text-[16px] border-b">
          自我介绍
        </h1>
        <div class="p-[16px]">
          <el-form-item prop="nickname" label="个人简介">
            <base-input
              v-model="formData.introduction"
              type="textarea"
              class="input"
              placeholder="个人简介"
            />
          </el-form-item>
        </div>
      </div>
      <div class="p-[16px] border-[2px] rounded-md mb-[24px]">
        <base-button class="submit-btn" @click="submitHandle">提交</base-button>
      </div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.input {
  :deep(.el-input__inner) {
    @apply h-[36px];
  }
}

:deep(.el-form-item__label) {
  @apply text-[16px] text-[#000];
}

.submit-btn {
  @apply w-full h-[38px];
  background-color: $primary-color;
}
</style>
