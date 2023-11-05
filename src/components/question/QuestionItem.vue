<script setup lang="ts">
defineProps<{
  question: QuestionModel;
}>();
</script>

<template>
  <div class="p-[16px] flex border-y-[0.8px] border-y-[#e3e6e8] my-[-0.8px]">
    <div class="info flex">
      <!-- 投票 -->
      <div
        class="num-card flex flex-col items-center w-[48px] h-[45px] mr-[8px]"
      >
        <span class="text-[16px]">{{ question.vote }}</span>
        <span class="text-[14px]">投票</span>
      </div>

      <!-- 回答 -->
      <div
        class="num-card flex flex-col items-center w-[48px] h-[45px] mr-[8px]"
      >
        <span class="text-[16px]">{{ question.answerCount }}</span>
        <span class="text-[14px]">回答</span>
      </div>

      <!-- 阅读 -->
      <div
        class="num-card flex flex-col items-center w-[48px] h-[45px] mr-[8px]"
      >
        <span class="text-[16px]">{{ question.read }}</span>
        <span class="text-[14px]">阅读</span>
      </div>
    </div>

    <!-- 问题内容 -->
    <div class="question w-full">
      <router-link
        :to="{
          path: `/question/detail`
        }"
        >{{ question.title }}</router-link
      >
      <div class="flex items-end justify-between">
        <!-- 标签区域 -->
        <div class="flex gap-[1px]">
          <base-tag
            class="tag"
            v-for="(tag, index) in question.tags"
            :key="index"
            >{{ tag.title }}</base-tag
          >
        </div>

        <!-- 回答者与作者显示区域 -->
        <span class="text-[14px]">
          <a href="#" class="text-[#0074cc]">CodePencil</a>
          <span class="ml-[5px] text-[#6a737c]">今天 10:25 回答</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  @apply text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm;
}
</style>
