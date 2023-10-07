<script setup lang="ts"></script>

<template>
  <div class="w-[268px]">
    <div class="flex flex-col">
      <div class="flex justify-between items-center py-[8px] border-b">
        <h2 class="font-bold">关注标签</h2>
        <RouterLink to="/" class="text-[#0074cc]">管理</RouterLink>
      </div>
      <!-- 标签容器 -->
      <div class="flex gap-[1px] flex-wrap">
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >typescript</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >HTML</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >CSS</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Vuejs</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Nestjs</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >javascript</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >React</span
        >
        <span
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Nodejs</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
