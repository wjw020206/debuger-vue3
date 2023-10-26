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
