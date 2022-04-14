export interface IDataType<T = any> {
  success: boolean
  code: number
  message: string
  data: T
  body?: T
}
