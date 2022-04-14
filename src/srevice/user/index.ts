import hyRequest from '../index'
import { IDataType } from '../type'

enum User {
  lifework = '/page/useLike/',
  MyWork = 'page/MyWork',
  UseCollect = '/page/useCollect'
}

export function useLike(v) {
  const ss1 = hyRequest.post<IDataType>({
    url: User.lifework + v.u_id,
    headers: {
      'content-type': 'application/json'
    }
  })
  return ss1
}

export function myWork(v) {
  const ss1 = hyRequest.post<IDataType>({
    url: User.MyWork,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}

export function useCollect(v) {
  const ss1 = hyRequest.post<IDataType>({
    url: User.UseCollect,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
