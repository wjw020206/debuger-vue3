import userStorage from '@/utils/userStorage';
import axios, {
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig
} from 'axios';
import { ElMessage } from 'element-plus';

export default class Axios {
  private instance;

  constructor(config: AxiosRequestConfig) {
    // 创建请求实例
    this.instance = axios.create(config);

    this.interceptors();
  }

  /**
   * 请求方法
   */
  public request<T>(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const { data } = await this.instance.request<T>(config);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      })();
    }) as Promise<T>;
  }

  /**
   * 拦截器
   */
  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  /**
   * 请求拦截器
   */
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 设置请求体数据格式
        config.headers.Accept = 'application/json';
        // 设置请求token
        config.headers.Authorization = `Bearer ${userStorage().get(
          CacheEnum.TOKEN_NAME
        )}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * 响应拦截器
   */
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        ElMessage.error(
          error.response.data.message[error.response.data.message.length - 1]
            .message ?? error.message
        );
        return Promise.reject(error);
      }
    );
  }
}
