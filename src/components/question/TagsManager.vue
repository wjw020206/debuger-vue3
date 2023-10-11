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
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >typescript</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >HTML</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >CSS</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Vuejs</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Nestjs</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >javascript</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >React</base-tag
        >
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          >Nodejs</base-tag
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
