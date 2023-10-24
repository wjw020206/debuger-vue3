<script setup lang="ts">
const { userInfo } = useUserStore();
</script>

<template>
  <div class="flex flex-col gap-[24px]">
    <div class="flex gap-[24px]">
      <div class="card" v-if="userInfo?.introduction">
        {{ userInfo.introduction }}
      </div>
      <div class="card" v-else>个人简介什么都没有</div>
      <div class="card"></div>
    </div>
    <div class="flex-1 rounded-md border-[2px]">
      <h1 class="py-[8px] px-[16px] text-[#000] text-[16px] font-bold border-b">
        个人动态
      </h1>
      <div class="p-[16px]">暂无动态</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply h-[200px] border-[2px] rounded-md flex-1 p-[16px] text-[16px];
}
</style>
