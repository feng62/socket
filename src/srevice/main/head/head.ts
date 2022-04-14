import hyRequest from '../../index'
import { IDataType } from '@/srevice/type'

enum info {
  loginOut = '/use/loginOut'
}

export function LoginOut() {
  const ss1 = hyRequest.post<IDataType>({
    url: info.loginOut
  })
  return ss1
}
