const props = defineProps<{
  // 自定义类名
  className?: string;
  // 表单数据
  data?: object;
  // 验证规则
  rules?: object;
  // 相关字段
  fieldList?: array;
  // 标签宽度
  labelWidth: string;
  refObj: object;
}>();
