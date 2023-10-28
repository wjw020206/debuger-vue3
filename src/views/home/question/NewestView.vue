<script setup lang="ts">
import { getQuestionList } from '@/apis/questionApi';

const questionList = ref<Pagination<QuestionModel>>();

onMounted(async () => {
  const data = await getQuestionList();
  questionList.value = data;
});
</script>

<template>
  <question-item
    v-for="(question, index) in questionList?.data"
    :key="index"
    :question="question"
  />
</template>

<style scoped lang="scss"></style>
