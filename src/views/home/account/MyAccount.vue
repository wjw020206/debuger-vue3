<script setup lang="ts">
import EditorPersonDialog from '@/components/account/EditorPersonDialog.vue';
import BaseSwitch from '@/components/common/BaseSwitch.vue';

/**头像 */
const face = ref('/src/assets/images/common/avatar.jpg');
const errorHandler = () => true;
/**用户姓名 */
const userName = ref('Http');
/**加入时间 */
const addTime = ref('2023-10-11');
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

const dialogRef = ref<InstanceType<typeof EditorPersonDialog> | null>();
const switchRef = ref<InstanceType<typeof BaseSwitch> | null>();
const editorPerson = () => {
  dialogRef.value!.dialogVisible = true;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggle = (index: number) => {};
</script>

<template>
  <div class="flex h-full w-full">
    <div class="face-content flex-shrink-0">
      <div>
        <el-row>
          <el-col>
            <div>
              <el-avatar :size="150" :src="face" @error="errorHandler">
                <img src="@/assets/images/common/err_img.png" />
              </el-avatar>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="font-size: 28px">{{ userName }}</div>
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
        <base-button class="btn-editor-person" @click="editorPerson"
          >编辑个人资料</base-button
        >
        <div class="flex w-full mt-[10px]">
          <div class="add-time">{{ addTime }}加入</div>
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
        <account-question v-else-if="switchRef?.currentIndex === 1" />
        <account-answer v-else-if="switchRef?.currentIndex === 2" />
        <account-follow v-else-if="switchRef?.currentIndex === 3" />
      </div>
    </div>
  </div>
  <editor-person-dialog ref="dialogRef" />
</template>

<style scoped lang="scss">
.face-content {
  @apply h-[500px] w-[350px] flex items-center justify-center flex-col;
  border-width: 2px;
  border-radius: 25px;

  .cell {
    @apply w-[120px];
  }

  .btn-editor-person {
    @apply w-[259px] h-[38px];
    border-width: 0.8px;
    border-radius: 10px;
    border-color: #3b82f6;
    color: #3b82f6;
  }
  .add-time {
    color: #6c757d;
    font-size: 13px;
  }
  .number-style {
    @apply flex flex-col items-center;
  }
}
</style>
