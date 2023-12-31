import { http } from '@/plugins/axios';

/**
 * 登录
 */
export async function login(data: { email: string; password: string }) {
  return await http.request<{ token: string }>({
    url: '/auth/login',
    method: 'post',
    data
  });
}

/**
 * 注册
 */
export async function register(data: {
  nickname: string;
  email: string;
  password: string;
}) {
  return await http.request({
    url: '/auth/register',
    method: 'post',
    data
  });
}

/**
 * 获取当前用户资料
 */
export async function getUserInfoApi() {
  return await http.request<User>({
    url: '/user/current',
    method: 'get'
  });
}

/**
 * 更新用户资料
 */
export async function updateUser(data: UserUpdate) {
  await http.request({
    url: '/user/update',
    method: 'patch',
    data
  });
  await useUserStore().getUserInfo();
}

/**
 * 更新用户密码
 */
export async function updatePassword(password: string) {
  await http.request({
    url: '/user/password',
    method: 'patch',
    data: {
      password
    }
  });
}

/**
 * 更新用户邮箱
 */
export async function updateEmail(email: string) {
  await http.request({
    url: '/user/email',
    method: 'patch',
    data: {
      email
    }
  });
  await useUserStore().getUserInfo();
}

/**
 * 删除用户
 */
export async function deleteUser() {
  await http.request({
    url: '/user/delete',
    method: 'delete'
  });
}

/**
 * 图片上传
 */
export async function uploadImage(file: FormData) {
  return await http.request<ImageType>({
    url: '/upload/image',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: file
  });
}

/**
 * 获取用户列表
 */
export async function getUserList(
  page = 1,
  search?: string,
  method: 'letter' | 'latest' = 'latest'
) {
  return await http.request<Pagination<User>>({
    url: '/user',
    method: 'get',
    params: {
      page,
      search,
      method
    }
  });
}

/**
 * 获取用户关注的标签
 */
export async function getFavoriteTags() {
  return await http.request<FavoriteTags>({
    url: '/user/favorite-tags',
    method: 'get'
  });
}

/**
 * 添加关注标签
 */
export async function addFavoriteTagApi(tagId: number) {
  return await http.request({
    url: '/user/add-favorite-tags',
    method: 'post',
    data: {
      tagId
    }
  });
}

/**
 * 删除关注标签
 */
export async function removeFavoriteTagApi(tagId: number) {
  return await http.request({
    url: '/user/remove-favorite-tags',
    method: 'delete',
    data: {
      tagId
    }
  });
}
