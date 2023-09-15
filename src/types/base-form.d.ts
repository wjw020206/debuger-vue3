declare namespace Form {
  type ItemType =
    | 'password'
    | 'text'
    | 'textarea'
    | 'radio'
    | 'checkbox'
    | 'select';

  // 表单字段选项配置
  interface IFieldOptions {
    labelKey?: string;
    valueKey?: string;
    palceholder?: string;
    data: Record<string, any>[];
  }

  // 表单配置选项
  interface Options {
    labelWidth?: string | number;
    labelPosition?: 'left' | 'right' | 'top';
    disabled?: boolean;
    showSubmitButton?: boolean;
    showResetButton?: boolean;
    showCancelButton?: boolean;
    submitButtonText?: string;
    resetButtonText?: string;
    cancelButtonText?: string;
  }

  // 表单字段的配置项
  interface FieldItem {
    label?: string;
    labelWidth?: string | number;
    field: string;
    type?: ItemType;
    value?: any;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    options?: IFieldOptions;
    rules?: import('element-plus').FormItemRule[];
    // 是否可清空
    clearable?: boolean;
    // 是否显示切换密码图标
    showPassword?: boolean;
    // 当为输入框时，是否启用回车触发提交功能
    enterable?: boolean;
  }
}
