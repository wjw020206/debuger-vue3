<script setup lang="ts">
import { getUserList } from '@/apis/userApi';
import BasePagination from '@/components/common/BasePagination.vue';
import dayjs from 'dayjs';

const method = ref<'letter' | 'latest'>('latest');

watch(method, async () => {
  await getAll();
  // 页面滚动
  window.scrollTo({
    top: 0
  });
});

/** 当前页 */
const currentPage = ref(1);

/** 搜索用户的值 */
const search = ref('');

/** 用户列表 */
const userList = ref<Pagination<User>>();

/** 获取所有标签 */
const getAll = async () => {
  const data = await getUserList(currentPage.value, search.value, method.value);
  userList.value = data;
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
    <h1 class="text-[24px] font-medium mb-[24px]">用户</h1>
    <!-- 搜索区域 -->
    <div class="flex justify-between h-[40px] mb-[24px]">
      <!-- 文本框 -->
      <base-input
        v-model="search"
        placeholder="搜索用户"
        class="search-input"
        @input="getAll"
      />
      <!-- 筛选按钮 -->
      <div class="border border-slate-400 flex cursor-pointer rounded-sm">
        <div
          class="filter"
          :class="{ active: method === 'latest' }"
          @click="method = 'latest'"
        >
          新用户
        </div>
        <div
          class="filter"
          :class="{ active: method === 'letter' }"
          @click="method = 'letter'"
        >
          首字母
        </div>
      </div>
    </div>
    <!-- 用户展示区 -->
    <div class="grid grid-cols-4 gap-[20px]">
      <div
        class="h-[80px] rounded-sm p-[6px] flex flex-col"
        v-for="(user, index) in userList?.data"
        :key="index"
      >
        <div class="flex w-full h-full items-center">
          <!-- 头像 -->
          <img :src="user.avatar" class="w-[48px] h-[48px]" />
          <!-- 用户注册信息 -->
          <div class="flex flex-col ml-[10px]">
            <div class="flex flex-col justify-between">
              <!-- 昵称 -->
              <a href="#" class="text-[#0074cc]">{{ user.nickname }}</a>

              <!-- 注册时间 -->
              <time class="text-[12px] text-[#6a737c]"
                >注册日期：{{
                  dayjs(user.createAt).format('YYYY年MM月DD日')
                }}</time
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
      <base-pagination
        :total="userList?.meta.total ?? 0"
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
