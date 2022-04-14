import { IForm } from '@/dase-ui/form/type'

export const searchFormConfig: IForm = {
  show: true,
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: { span: 8 },
  formItems: [
    {
      fieId: 'u_id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id号码'
    },
    {
      fieId: 'name',
      type: 'input',
      label: '名字',
      placeholder: '请输入名字'
    },
    {
      fieId: 'account',
      type: 'input',
      label: '账号',
      placeholder: '请输入账号码'
    },
    {
      fieId: 'type',
      type: 'select',
      label: '作品类型',
      placeholder: '选择作品类型',
      options: []
    },
    {
      fieId: 'time',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
