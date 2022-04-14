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
    }
  ]
}
// {
//   fieId: 'createAt',
//     type: 'datepicker',
//   label: '创建时间',
//   placeholder: '请输入电话号码',
//   otherOptions: {
//   startPlaceholder: '开始时间',
//     endPlaceholder: '结束时间',
//     type: 'daterange'
// }
