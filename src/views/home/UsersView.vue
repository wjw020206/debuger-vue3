<script setup lang="ts"></script>

<template>
  <div class="w-full">
    <!-- 标题区域 -->
    <h1 class="text-[24px] font-medium mb-[24px]">用户</h1>
    <!-- 搜索区域 -->
    <div class="flex justify-between h-[40px] mb-[24px]">
      <!-- 文本框 -->
      <base-input type="text" placeholder="搜索用户" class="search-input" />
      <!-- 筛选按钮 -->
      <div class="border border-slate-400 flex cursor-pointer rounded-sm">
        <div
          class="text-[16px] flex items-center py-[6px] px-[12px] border-r border-slate-400 bg-blue-500 text-white"
        >
          新用户
        </div>
        <div
          class="text-[16px] flex items-center py-[6px] px-[12px] hover:bg-blue-500 hover:text-white"
        >
          首字母
        </div>
      </div>
    </div>
    <!-- 用户展示区 -->
    <div class="grid grid-cols-4 gap-[20px]">
      <div
        class="h-[80px] rounded-sm p-[6px] flex flex-col"
        v-for="i in 36"
        :key="i"
      >
        <div class="flex w-full h-full items-center">
          <!-- 头像 -->
          <img
            src="@/assets/images/common/avatar.jpg"
            class="w-[48px] h-[48px]"
          />
          <!-- 用户注册信息 -->
          <div class="flex flex-col ml-[10px]">
            <div class="flex flex-col justify-between">
              <!-- 昵称 -->
              <a href="#" class="text-[#0074cc]">CodePencil</a>

              <!-- 注册时间 -->
              <time class="text-[12px] text-[#6a737c]"
                >注册日期：2023年6月8日</time
              >
            </div>
            <!-- 关注的标签 -->
            <div class="flex text-[#0074cc] text-[12px]">
              <a href="#">javascript</a>，<a href="#">html</a>，
              <a href="#">css</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center py-[24px]">
      <base-pagination />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-input {
  @apply w-[220px];
}
</style>
