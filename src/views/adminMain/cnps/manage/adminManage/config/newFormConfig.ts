import { IForm } from '@/dase-ui/form'

export const newFormConfig: IForm = {
  show: true,
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: { span: 10 },
  formItems: [
    {
      fieId: 'a_id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id号码',
      disabled: true
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
    },
    {
      fieId: 'a_password',
      type: 'input',
      label: '密码',
      placeholder: '请输入账密码'
    },
    {
      fieId: 'a_phone',
      type: 'input',
      label: '电话',
      placeholder: '请输入账号码'
    },
    {
      fieId: 'a_email',
      type: 'input',
      label: '邮箱',
      placeholder: '请输入账号码'
    },
    {
      fieId: 'g_id',
      type: 'select',
      label: '权限',
      placeholder: '选择作品类型',
      options: []
    }
  ]
}
