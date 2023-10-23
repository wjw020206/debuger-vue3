import { getUserInfoApi } from '@/apis/userApi';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<User>();

  /**
   * 获取用户个人信息
   */
  const getUserInfo = async () => {
    userInfo.value = await getUserInfoApi();
  };

  return { userInfo, getUserInfo };
});
