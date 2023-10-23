<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-[24px]">
    <div class="flex-1 rounded-md border-[2px]">
      <div
        class="flex py-[8px] px-[16px] text-[#3b82f6] text-[16px] border-b justify-center"
      >
        <div class="flex cursor-pointer h-[30px]">
          <div class="btn">关注标签</div>
          <div class="btn">关注的问题</div>
          <div class="btn">关注的收藏夹</div>
          <div class="btn">关注的人</div>
          <div class="btn">我的粉丝</div>
        </div>
      </div>
      <div class="p-[16px]">暂无数据</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply h-[200px] border-[2px] rounded-md flex-1 p-[16px] text-[16px];
}

.btn {
  @apply py-[4px] px-[8px] border border-[#6c757d] flex items-center;
  &:first-of-type {
    @apply rounded-l-md;
  }
  &:last-of-type {
    @apply rounded-r-md;
  }

  &:hover {
    @apply text-white;
    background: $primary-color;
  }
}
</style>
