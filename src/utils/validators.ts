/**
 * 检查账号
 * @param rule 规则
 * @param value 属性值
 * @param callback 回调方法
 */
export const checkAccount = (rule: any, value: any, callback: any) => {
  /**
   * 手机号正则校验
   */
  const phoneRegExp =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
  /**
   * 邮箱正则校验
   */
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value === '') {
    callback(new Error('手机号或邮箱不能为空'));
  } else {
    if (phoneRegExp.test(value) || emailRegExp.test(value)) {
      callback();
    } else {
      callback(new Error('手机号或邮箱格式不正确'));
    }
  }
};

/**
 * 检查密码
 * @param rule 规则
 * @param value 属性值
 * @param callback 回调方法
 */
export const checkPassword = (rule: any, value: any, callback: any) => {
  /**
   * 密码正则校验规则
   */
  const passwordRegExp =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;
  if (value === '') {
    callback(new Error('密码不能为空'));
  } else if (value.length < 8 || value.length > 20) {
    callback(new Error('密码长度需为8到20位'));
  } else if (passwordRegExp.test(value)) {
    callback();
  } else {
    callback(new Error('密码需包含至少一个大小写字母、一个数字和一个特殊字符'));
  }
};

/**
 * 检查密码是否为空
 * @param rule 规则
 * @param value 属性值
 * @param callback 回调方法
 * @param title 提示文本
 */
export const checkPasswordIsNull = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(`密码不能为空`));
  } else {
    callback();
  }
};
