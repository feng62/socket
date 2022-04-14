import hyRequest from '../index'

import { IAccount } from './type'
import { IDataType } from '../type'

enum LoginAPI {
  Code = 'use/Code',
  VCode = 'use/VCode',
  QRCode = 'use/QRCode',
  verify = 'use/user',
  user = 'use/use',
  like = 'page/likeCount',
  collect = 'page/collectCount',
  friend = 'page/friendCount'
}

export function Code() {
  const ss1 = hyRequest.get<IDataType<IAccount>>({
    url: LoginAPI.Code
  })
  return ss1
}

export function VCode() {
  const ss1 = hyRequest.get({
    url: LoginAPI.VCode,
    responseType: 'blob'
  })
  return ss1
}
export function QRCode(v: any) {
  console.log(v)
  const ss1 = hyRequest.get({
    url: LoginAPI.QRCode,
    responseType: 'blob',
    headers: {
      'content-type': 'application/json'
    },
    params: v
  })
  return ss1
}

export function verify(value: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.verify,
    headers: {
      'content-type': 'application/json'
    },
    data: value
  })
  return ss1
}
export function fetchUser(value: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.user,
    headers: {
      'content-type': 'application/json'
    },
    data: value
  })
  return ss1
}

export function likeCount(value: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.like,
    headers: {
      'content-type': 'application/json'
    },
    data: value
  })
  return ss1
}
export function collectCount(value: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.collect,
    headers: {
      'content-type': 'application/json'
    },
    data: value
  })
  return ss1
}
export function friendCount(value: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: LoginAPI.friend,
    headers: {
      'content-type': 'application/json'
    },
    data: value
  })
  return ss1
}
