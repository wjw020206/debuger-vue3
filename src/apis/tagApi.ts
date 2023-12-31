import { http } from '@/plugins/axios';

/**
 * 获取标签列表
 */
export async function getTagList(
  page = 1,
  search?: string,
  method: 'popular' | 'letter' | 'latest' = 'popular'
) {
  return await http.request<Pagination<TagModel>>({
    url: '/tag',
    method: 'get',
    params: {
      page,
      search,
      method
    }
  });
}
