<script setup lang="ts">
const tagName = ref('');
</script>

<template>
  <div class="w-full">
    <!-- 标题区域 -->
    <h1 class="text-[24px] font-medium mb-[8px]">标签</h1>
    <!-- 描述区域 -->
    <p class="text-[#6c757d] mb-[24px]">
      标签不仅能组织和归类你的内容，还能关联相似的内容。正确的使用标签将让你的内容被更多人发现和解决。
    </p>
    <!-- 搜索区域 -->
    <div class="flex justify-between h-[40px] mb-[24px]">
      <!-- 文本框 -->
      <base-input
        v-model="tagName"
        placeholder="搜索标签"
        class="search-input"
      />
      <!-- 筛选按钮 -->
      <div class="border border-slate-400 flex cursor-pointer rounded-sm">
        <div
          class="text-[16px] flex items-center py-[6px] px-[12px] bg-blue-500 text-white"
        >
          热门
        </div>
        <div
          class="text-[16px] flex items-center py-[6px] px-[12px] border-x border-slate-400 hover:bg-blue-500 hover:text-white"
        >
          首字母
        </div>
        <div
          class="text-[16px] flex items-center py-[6px] px-[12px] hover:bg-blue-500 hover:text-white"
        >
          最新
        </div>
      </div>
    </div>
    <!-- 标签展示区 -->
    <div class="grid grid-cols-4 gap-[20px]">
      <div
        class="border border-[#d6d9dc] h-[177px] rounded-md p-[16px] flex flex-col overflow-hidden"
        v-for="i in 36"
        :key="i"
      >
        <div>
          <!-- 标签名 -->
          <base-tag>javascript</base-tag>
          <!-- 标签描述 -->
          <p
            class="mt-[8px] text-[14px] whitespace-normal break-words mb-[8px]"
          >
            JavaScript
            是一门弱类型的动态脚本语言，支持多种编程范式，包括面向对象和函数式编程，被广泛用于
            Web...
          </p>
          <!-- 内容数量显示以及关注标签按钮 -->
          <div class="flex">
            <p class="text-[#6c757d]">2048篇内容</p>
            <a href="javascript:;" class="ml-[8px] text-blue-400">关注标签</a>
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
