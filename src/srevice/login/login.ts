import hyRequest from '../index'

import { IDataType } from '../type'

enum LoginAPI {
  login = '/use/login'
}

export function Login(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.login,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
