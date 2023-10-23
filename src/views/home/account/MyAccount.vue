<script setup lang="ts">
import BaseSwitch from '@/components/common/BaseSwitch.vue';
import dayjs from 'dayjs';

const { userInfo } = useUserStore();

/**获赞数 */
const praise = ref(0);

const switchList = ref([
  {
    text: '主页'
  },
  { text: '回答' },
  { text: '提问' },
  { text: '关注' }
]);

const switchRef = ref<InstanceType<typeof BaseSwitch> | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggle = (index: number) => {};
</script>

<template>
  <div class="flex h-full w-full">
    <div class="face-content flex-shrink-0">
      <el-avatar :size="150" :src="userInfo?.avatar" />
      <div style="font-size: 28px">{{ userInfo?.nickname }}</div>
      <div class="flex gap-[50px] mt-[10px] mb-[20px]">
        <div class="number-style">
          <div>{{ praise }}</div>
          <div style="color: #6c757d">获赞数</div>
        </div>
        <div class="number-style">
          <div>{{ praise }}</div>
          <div style="color: #6c757d">关注数</div>
        </div>
        <div class="number-style">
          <div>{{ praise }}</div>
          <div style="color: #6c757d">粉丝数</div>
        </div>
      </div>
      <div class="flex flex-col w-[259px] mt-[10px]">
        <base-button
          class="btn-editor-person"
          @click="$router.push({ name: 'profile' })"
          >编辑个人资料</base-button
        >
        <div class="flex w-full mt-[10px]">
          <div class="add-time">
            {{ dayjs(userInfo?.createAt).format('YYYY-MM-DD') }}加入
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="flex justify-center">
        <base-switch
          :switchList="switchList"
          @change="toggle"
          ref="switchRef"
        />
      </div>
      <div class="content mt-[20px] ml-[20px]">
        <account-homepage v-if="switchRef?.currentIndex === 0" />
        <account-answer v-else-if="switchRef?.currentIndex === 1" />
        <account-question v-else-if="switchRef?.currentIndex === 2" />
        <account-follow v-else-if="switchRef?.currentIndex === 3" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.face-content {
  @apply h-[500px] w-[350px] flex items-center justify-center flex-col rounded-md;
  border-width: 2px;
  .btn-editor-person {
    @apply w-[259px] h-[38px] rounded-md;
    border-width: 0.8px;
    border-color: #3b82f6;
    color: #3b82f6;
  }
  .add-time {
    color: #6c757d;
    font-size: 16px;
  }
  .number-style {
    @apply flex flex-col items-center;
  }
}
</style>
