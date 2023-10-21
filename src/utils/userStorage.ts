export default () => {
  /**
   * 设置缓存
   */
  function set(key: string, data: any) {
    localStorage.setItem(key.toString(), JSON.stringify(data));
  }

  /**
   * 获取缓存
   */
  function get(key: string) {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache = JSON.parse(cacheStore);
      return cache;
    }
    return null;
  }

  /**
   * 删除缓存
   */
  function remove(key: string) {
    localStorage.removeItem(key);
  }

  return { set, get, remove };
};
