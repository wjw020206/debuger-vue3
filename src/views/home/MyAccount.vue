<script setup lang="ts">
const face = ref('/src/assets/images/common/avatar.jpg');
const errorHandler = () => true;
const mailbox = ref();
const name = ref();
</script>

<template>
  <div class="content-on">
    <div class="flex flex-start h-full">
      <div>
        <el-row>
          <el-col>
            <div>
              <el-avatar
                :size="175"
                :src="face"
                shape="square"
                @error="errorHandler"
              >
                <img src="@/assets/images/common/err_img.png" />
              </el-avatar>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="flex flex-col ml-[40px] w-full">
        <div class="flex items-center w-[500px]">
          <div class="cell mr-[10px]">姓名:</div>
          <base-input v-model="name" />
        </div>
        <div class="flex mt-[15px] items-center">
          <div class="cell">邮箱:</div>
          <base-input v-model="mailbox" />
        </div>
        <div class="flex flex-col mt-[20px]">
          <div class="cell">个性签名:</div>
          <div class="mt-[10px]">
            <base-input class="signature" size="large" type="textarea" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-on {
  @apply w-full h-[300px] p-[50px];
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.16);

  .cell {
    @apply w-[120px];
  }
}
</style>
