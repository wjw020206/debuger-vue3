<script setup lang="ts">
import { getTagList } from '@/apis/tagApi';
import { getFavoriteTags } from '@/apis/userApi';
import useStorage from '@/utils/useStorage';

const tagList = ref<Array<TagModel>>([]);

onMounted(async () => {
  if (useStorage().get(CacheEnum.TOKEN_NAME)) {
    const { favoriteTags } = await getFavoriteTags();
    tagList.value = favoriteTags;
  } else {
    const { data } = await getTagList(1, '', 'popular');
    tagList.value = data.slice(0, 20);
  }
});
</script>

<template>
  <div class="w-[268px]" v-if="useStorage().get(CacheEnum.TOKEN_NAME)">
    <div class="flex flex-col">
      <div class="flex justify-between items-center py-[8px] border-b">
        <h2 class="font-bold">关注标签</h2>
        <RouterLink :to="{ name: 'followTags' }" class="text-[#0074cc]"
          >管理</RouterLink
        >
      </div>
      <!-- 标签容器 -->
      <div class="flex gap-[1px] flex-wrap">
        <template v-if="tagList.length !== 0">
          <base-tag
            class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
            v-for="(tag, index) in tagList"
            :key="index"
          >
            {{ tag.title }}
          </base-tag>
        </template>
        <template v-else>
          <p class="text-[#aaa]">暂无关注的标签</p>
        </template>
      </div>
    </div>
  </div>
  <div class="w-[268px]" v-else>
    <div class="flex flex-col">
      <div class="flex justify-between items-center py-[8px] border-b">
        <h2 class="font-bold">热门标签</h2>
        <RouterLink
          :to="{ name: 'tags' }"
          class="text-[#0074cc] flex items-center cursor-pointer"
          >全部
          <el-icon :size="18">
            <park-right />
          </el-icon>
        </RouterLink>
      </div>
      <!-- 标签容器 -->
      <div class="flex gap-[1px] flex-wrap">
        <base-tag
          class="text-[14px] bg-blue-200 px-[6px] mr-[4px] mt-[4px] text-blue-600 cursor-pointer rounded-sm"
          v-for="(tag, index) in tagList"
          :key="index"
        >
          {{ tag.title }}
        </base-tag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
