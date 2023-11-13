<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-[24px]">
    <div class="flex-1 rounded-md border-[2px]">
      <div
        class="flex py-[8px] px-[16px] text-[#3b82f6] text-[16px] border-b justify-center"
      >
        <div class="flex cursor-pointer h-[30px]">
          <router-link
            :to="{ name: 'followTags' }"
            class="btn"
            :class="{ active: $route.path === '/my-account/follow/tags' }"
            >关注标签</router-link
          >
          <router-link
            :to="{ name: 'followQuestions' }"
            class="btn"
            :class="{ active: $route.path === '/my-account/follow/question' }"
            >关注的问题</router-link
          >
          <router-link
            :to="{ name: 'followPerson' }"
            class="btn"
            :class="{
              active: $route.path === '/my-account/follow/person'
            }"
            >关注的人</router-link
          >
          <router-link
            :to="{ name: 'followFans' }"
            class="btn"
            :class="{ active: $route.path === '/my-account/follow/fans' }"
            >我的粉丝</router-link
          >
        </div>
      </div>
      <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
          <component :is="Component" :key="route.fullPath" />
        </template>
      </RouterView>
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

  &.active {
    @apply text-white;
    background: $primary-color;
  }
}
</style>
