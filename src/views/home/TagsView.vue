<script setup lang="ts">
import { getTagList } from '@/apis/tagApi';
import {
  getFavoriteTags,
  removeFavoriteTagApi,
  addFavoriteTagApi
} from '@/apis/userApi';
import BasePagination from '@/components/common/BasePagination.vue';
import useStorage from '@/utils/useStorage';

const method = ref<'popular' | 'letter' | 'latest'>('popular');

watch(method, async () => {
  await getAll();
  // 页面滚动
  window.scrollTo({
    top: 0
  });
});

/** 当前页 */
const currentPage = ref(1);

/** 搜索标签的值 */
const search = ref('');

/** 标签列表 */
const tagList = ref<Pagination<TagModel>>();

/** 关注的标签列表 */
const favoriteTagList = ref<Array<TagModel>>();

/** 是否关注标签 */
const isFavoriteTag = (tagId: number) => {
  return favoriteTagList.value?.find(tag => {
    return tag.id === tagId;
  });
};

/** 删除关注的标签 */
const removeFavoriteTag = async (tagId: number) => {
  await removeFavoriteTagApi(tagId);
  getAll();
};

/** 添加关注的标签 */
const addFavoriteTag = async (tagId: number) => {
  await addFavoriteTagApi(tagId);
  getAll();
};

/** 获取所有标签 */
const getAll = async () => {
  const data = await getTagList(currentPage.value, search.value, method.value);
  tagList.value = data;
  if (useStorage().get(CacheEnum.TOKEN_NAME)) {
    const { favoriteTags } = await getFavoriteTags();
    favoriteTagList.value = favoriteTags;
  }
};

/** 分页切换事件 */
const handleCurrentChange = async (value: number) => {
  currentPage.value = value;
  await getAll();
  // 页面滚动
  window.scrollTo({
    top: 0
  });
};

onMounted(async () => {
  await getAll();
});
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
        v-model="search"
        placeholder="搜索标签"
        class="search-input"
        @input="getAll"
      />
      <!-- 筛选按钮 -->
      <div class="border border-slate-400 flex cursor-pointer rounded-sm">
        <div
          class="filter"
          :class="{ active: method === 'popular' }"
          @click="method = 'popular'"
        >
          热门
        </div>
        <div
          class="filter"
          :class="{ active: method === 'letter' }"
          @click="method = 'letter'"
        >
          首字母
        </div>
        <div
          class="filter"
          :class="{ active: method === 'latest' }"
          @click="method = 'latest'"
        >
          最新
        </div>
      </div>
    </div>
    <!-- 标签展示区 -->
    <div class="grid grid-cols-4 gap-[20px]">
      <div
        class="border border-[#d6d9dc] h-[177px] rounded-md p-[16px] flex flex-col overflow-hidden"
        v-for="(tag, index) in tagList?.data"
        :key="index"
        :class="{ 'bg-[#FDFBF1]': isFavoriteTag(tag.id) }"
      >
        <div>
          <!-- 标签名 -->
          <base-tag>{{ tag.title }}</base-tag>
          <!-- 标签描述 -->
          <p
            class="mt-[8px] text-[14px] whitespace-normal break-words h-[84px] mb-[8px] content"
          >
            {{ tag.content }}
          </p>
          <!-- 内容数量显示以及关注标签按钮 -->
          <div class="flex">
            <p class="text-[#6c757d]">{{ tag.questions.length }}篇内容</p>
            <a
              href="javascript:;"
              class="ml-[8px] text-blue-400"
              v-if="isFavoriteTag(tag.id)"
              @click="removeFavoriteTag(tag.id)"
              >已关注</a
            >
            <a
              href="javascript:;"
              class="ml-[8px] text-blue-400"
              v-else
              @click="addFavoriteTag(tag.id)"
              >关注标签</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center py-[24px]">
      <base-pagination
        :total="tagList?.meta.total ?? 0"
        :current-page="currentPage"
        :page-size="36"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-input {
  @apply w-[220px];
}

.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.filter {
  @apply text-[16px] flex items-center py-[6px] px-[12px];
  &:hover {
    @apply bg-blue-400 text-white;
  }
  &.active {
    @apply bg-blue-500 text-white;
  }
}
</style>
