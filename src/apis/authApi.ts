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
