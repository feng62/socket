import { IForm } from '@/dase-ui/form/type'

export const searchFormConfig: IForm = {
  show: false,
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: { span: 15 },
  formItems: [
    {
      fieId: 'wt_id',
      type: 'input',
      label: 'id',
      placeholder: '',
      disabled: true
    },
    {
      fieId: 'type',
      type: 'input',
      label: '名字',
      placeholder: ''
    },
    {
      fieId: 'icon',
      type: 'input',
      label: '账号',
      placeholder: ''
    },
    {
      fieId: 'router',
      type: 'input',
      label: '路由',
      placeholder: ''
    }
  ]
}
