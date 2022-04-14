import hyRequest from '../index'

import { IDataType } from '../type'

enum FriendAPI {
  getList = '/info/Friend'
}

export function getFriendList(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: FriendAPI.getList,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
