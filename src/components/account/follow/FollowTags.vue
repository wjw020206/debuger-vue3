<script setup lang="ts">
import { getFavoriteTags, removeFavoriteTagApi } from '@/apis/userApi';

const tagList = ref<Array<TagModel>>([]);

/** 获取所有标签 */
const getAll = async () => {
  const { favoriteTags } = await getFavoriteTags();
  tagList.value = favoriteTags;
};

onMounted(() => {
  getAll();
});

/** 删除关注的标签 */
const removeFavoriteTag = async (tagId: number) => {
  await removeFavoriteTagApi(tagId);
  getAll();
};
</script>

<template>
  <template v-if="tagList.length !== 0">
    <div
      v-for="(tag, index) in tagList"
      :key="index"
      class="flex p-[16px] border-b last-of-type:border-none gap-[24px] items-center"
    >
      <div class="flex flex-col gap-[8px]">
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm self-baseline"
        >
          {{ tag.title }}
        </base-tag>
        <p class="content">{{ tag.content }}</p>
      </div>
      <base-button
        class="py-[4px] px-[8px] btn"
        @click="removeFavoriteTag(tag.id)"
        >已关注</base-button
      >
    </div>
  </template>
  <div class="p-[16px]" v-else>暂无数据</div>
</template>

<style scoped lang="scss">
.btn {
  @apply text-white;
  background-color: $primary-color;
}

.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
