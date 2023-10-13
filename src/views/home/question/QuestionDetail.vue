<script setup lang="ts">
const text = ref(
  'TS 作为 JS 的超集能否提高 JS 的性能或者降低生产出错的概率 ？是否值得去坚持使用 ？最近项目初始化的时候用 Vite 选的就是 TS 但项目有很多稀奇古怪的需求，导致 TS 各种报错提示什么的，有点拖慢进度，所以内心有些动摇了，TS 是否值得坚定的使用下去 ？规范问题不用太担心，我自己是强迫症，代码不会乱七八糟，我就怕性能和隐性的报错，请大佬指教，我自己用的是 React'
);

const text2 =
  ref(`TS 不能提高性能，但是可以提高软件的健壮性。如果把 TS 用好肯定是可以降低缺陷概率的。TS 提供的类型约束能力会约束代码编写的习惯，养成书写正确代码的习惯，但并不能百分百保证。另外，TS 提供的语言服务工具，也可以在 Editor/IDE 中提供代码提示和自动完成，起到提示和约束正确性的作用。

但是使用任何工具都是两面性，TS 需要严格的类型定义来支持（如果都是 Any 那就不需要 TS 了），而定义严格的类型需要充分分析数据结构、降低代码的灵活性，这些都需要花精力去适应，但也正是这些地方会带来代码质量的提升。

所以大型项目，代码复杂，更需要工具来保证代码健壮性的情况下，建议使用 TypeScript。而逻辑简单的小型程序，使用 TS 会显得繁琐，可以直接用 JavaScript。`);
</script>

<template>
  <div class="flex-1 flex flex-col pb-[80px]">
    <div
      class="flex flex-col border-b-[0.8px] border-b-[#e3e6e8] pb-[8px] pl-[32px]"
    >
      <div class="flex justify-between gap-[12px]">
        <h1 class="text-[27px] mb-[8px]">
          Typescript 能否提高性能或者稳定性 ？
        </h1>
        <base-button :is-submit="true" class="ask-questions"
          >提问题</base-button
        >
      </div>
      <div class="flex gap-[16px] items-center">
        <span class="text-status"
          >提问: <span class="text-black">1天前</span></span
        >
        <span class="text-status"
          >修改: <span class="text-black">今天</span></span
        >
        <span class="text-status"
          >被点击: <span class="text-black">48次</span></span
        >
      </div>
    </div>
    <!-- 问题 -->
    <div class="w-[748px] relative">
      <v-md-preview :text="text" class="w-full"></v-md-preview>
      <div class="flex flex-col px-[32px] gap-[24px]">
        <!-- 标签 -->
        <div class="flex flex-wrap gap-[3px]">
          <base-tag>TypeScript</base-tag>
        </div>

        <!-- 收藏/回复 -->
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-[20px]">
            <base-button class="collect-btn">
              <el-icon size="18" class="mr-[5px]">
                <park-folder-focus-one />
              </el-icon>
              收藏
            </base-button>
            <span class="cursor-pointer">回复</span>
          </div>
          <!-- 个人信息 -->
          <base-user-info />
        </div>

        <div
          class="bg-[#F8F9FA] p-[16px] w-full rounded-md flex flex-col gap-[16px]"
        >
          <div>
            <div>
              <span class="font-bold text-[#3b82f6]">CodePencil</span>：<span
                class="text-[14px]"
                >666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮666干的漂亮</span
              >
            </div>

            <span class="text-[14px] text-[#6c757d]">
              <span class="cursor-pointer">回复</span>
              发布于：2023年10月11日</span
            >
          </div>
          <div>
            <div>
              <span class="font-bold text-[#3b82f6]">WJava</span>：<span
                class="text-[14px]"
              >
                <span class="text-[#3b82f6]"> @CodePencil </span>
                你好CodePencil，我可以请教你一个编程问题吗？</span
              >
            </div>
            <span class="text-[14px] text-[#6c757d]">
              <span class="cursor-pointer">回复</span>
              发布于：2023年10月11日</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 回答 -->
    <div class="w-[748px] mt-[20px]">
      <div class="py-[8px] px-[32px] flex justify-between items-center">
        <h1 class="font-bold text-[16px]">1个回答</h1>
        <div class="flex border border-[#3b82f6] rounded-sm">
          <base-button text class="filter-btn">得票</base-button>
          <base-button text class="filter-btn">最新</base-button>
        </div>
      </div>
      <article class="w-[748px] relative">
        <v-md-preview :text="text2" class="w-full"></v-md-preview>
        <div class="flex flex-col px-[32px] gap-[24px]">
          <div class="flex gap-[20px] items-end justify-between">
            <span class="cursor-pointer">回复</span>
            <!-- 个人信息 -->
            <base-user-info />
          </div>
        </div>
      </article>
    </div>

    <div class="flex flex-col w-[748px] px-[32px] mt-[32px]">
      <h1 class="font-bold mb-[8px]">撰写回答</h1>
      <base-editor />
      <div class="flex flex-row-reverse mt-[16px]">
        <base-button color="#3b82f6" class="submit-answer" disabled
          >提交回答</base-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ask-questions {
  @apply rounded-sm w-[72px] h-[36px] text-[16px] border-none;
}
.text-status {
  @apply text-[#6a737c] text-[13px];
}
:deep(.github-markdown-body) {
  @apply pb-[0];
}
.collect-btn {
  @apply w-[64px] h-[30px] border gap-[10px];
  color: $primary-color;
  border-color: $primary-color;
  &:hover {
    background-color: $primary-color;
    color: #fff;
  }
}
.icon {
  @apply mr-[5px] cursor-pointer;
  color: $primary-color;
}
.filter-btn {
  @apply m-0;
  color: $primary-color;
  border-radius: 0px !important;
  &:hover {
    background-color: $primary-color !important;
    color: #fff;
  }
}
.submit-answer {
  @apply w-[89px] h-[37px] text-white;
}
</style>
