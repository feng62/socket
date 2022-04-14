import hyRequest from '../index'

import { IDataType } from '../type'

enum admin {
  getList = '/use/AdminLogin'
}

export function adminLogin(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.getList,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
