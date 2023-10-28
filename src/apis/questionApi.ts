import { http } from '@/plugins/axios';

/**
 * 获取问题列表
 */
export async function getQuestionList(page = 1) {
  return await http.request<Pagination<QuestionModel>>({
    url: '/question',
    method: 'get',
    params: {
      page
    }
  });
}
