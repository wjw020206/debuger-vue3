import axios, {
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig
} from 'axios';

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
  public request(config: AxiosRequestConfig) {
    return this.instance.request(config);
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
        return Promise.reject(error);
      }
    );
  }
}
