<script setup lang="ts">
interface SwitchItem {
  name?: string;
  text: string;
  path?: string | Array<string>;
}

interface Props {
  switchList: Array<SwitchItem>;
  // 是否路由切换
  isRouter?: boolean;
}

withDefaults(defineProps<Props>(), {
  isRouter: false
});

const emit = defineEmits<{
  change: [index: number];
}>();

// 当前选中项的下标
const currentIndex = ref(0);

/**
 * 当前选中项切换
 * @param { number } index 当前选中项的下标
 */
const currentIndexChange = (index: number) => {
  currentIndex.value = index;
  emit('change', index);
};

defineExpose({
  currentIndex
});
</script>

<template>
  <div class="flex">
    <template v-if="isRouter">
      <router-link
        v-for="(item, index) in switchList"
        :to="{ name: item.name }"
        :key="index"
        class="text"
        :class="{
          active:
            $route.name === item.name ||
            (Array.isArray(item.path)
              ? item.path.includes($route.path)
              : item.path === $route.path)
        }"
      >
        {{ item.text }}
      </router-link>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in switchList"
        @click="currentIndexChange(index)"
        :key="index"
        class="text"
        :class="{ active: currentIndex === index }"
      >
        {{ item.text }}
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.text {
  @apply py-[6px] px-[12px] cursor-pointer;
}
.active {
  @apply font-semibold relative;
  &::after {
    content: '';
    @apply absolute h-[3px] w-full bottom-0 right-[-1px];
    background-color: $primary-color;
  }
}
</style>
