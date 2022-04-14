import { IForm } from '@/dase-ui/form'

export const searchFormConfig: IForm = {
  show: true,
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: { span: 8 },
  formItems: [
    {
      fieId: 'a_id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id号码'
    },
    {
      fieId: 'a_name',
      type: 'input',
      label: '名字',
      placeholder: '请输入名字'
    },
    {
      fieId: 'a_account',
      type: 'input',
      label: '账号',
      placeholder: '请输入账号码'
    }
  ]
}
