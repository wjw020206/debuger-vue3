import { checkAccount, checkPasswordIsNull } from '@/utils/validators';

/**
 * 登录表单项
 */
const loginFieldList: Form.FieldItem[] = [
  {
    field: 'account',
    placeholder: '手机号或邮箱',
    rules: [
      {
        validator: checkAccount,
        trigger: 'change'
      }
    ]
  },
  {
    field: 'password',
    type: 'password',
    placeholder: '密码',
    rules: [
      {
        validator: checkPasswordIsNull,
        trigger: 'change'
      }
    ]
  }
];

/**
 * 登录表单数据
 */
const loginFormData = ref<Record<string, any>>({
  account: '',
  password: ''
});

/**
 * 登录表单按钮选项
 */
const loginOptions = ref<Form.Options>({
  submitButtonText: '登录',
  showSubmitButton: true
});

/**
 * 登录表单相关方法
 */
export default function loginFormFunciton() {
  /**
   * 表单提交
   */
  const handleSubimt = () => {
    console.log(loginFormData.value);
  };
  return { loginFieldList, loginFormData, handleSubimt, loginOptions };
}
