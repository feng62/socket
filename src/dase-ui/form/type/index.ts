type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  fieId: string
  type: IFormType
  label: string
  otherOptions?: any
  options?: any[]
  placeholder: string
  disabled?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  colLayout?: any
  itemStyle?: any
  show?: boolean
}
