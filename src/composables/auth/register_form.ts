import validatorsFunction from '@/utils/validators';

/**
 * 注册表单数据
 */
const registerFormData = ref<Record<string, any>>({
  nickname: '',
  account: '',
  password: '',
  password2: ''
});

const { checkAccount, checkNicknameIsNull, checkPassword, checkPassword2 } =
  validatorsFunction(registerFormData);
/**
 * 注册表单项
 */
const registerFieldList: Form.FieldItem[] = [
  {
    field: 'nickname',
    placeholder: '昵称',
    rules: [
      {
        validator: checkNicknameIsNull,
        trigger: 'change'
      }
    ]
  },
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
    showPassword: true,
    rules: [
      {
        validator: checkPassword,
        trigger: 'change'
      }
    ]
  },
  {
    field: 'password2',
    type: 'password',
    placeholder: '请再次输入密码',
    showPassword: true,
    rules: [
      {
        validator: checkPassword2,
        trigger: 'change'
      }
    ]
  }
];

/**
 * 注册表单按钮选项
 */
const registerOptions = ref<Form.Options>({
  submitButtonText: '注册',
  showSubmitButton: true
});

/**
 * 注册表单相关方法
 */
export default function registerFormFunciton() {
  /**
   * 表单提交
   */
  const handleSubimt = () => {
    console.log(registerFormData.value);
  };
  return {
    registerFieldList,
    registerFormData,
    handleSubimt,
    registerOptions
  };
}
