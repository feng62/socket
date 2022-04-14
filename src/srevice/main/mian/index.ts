import hyRequest from '../../index'
import { IDataType } from '@/srevice/type'

enum work {
  offer = '/page/offer',
  relateWork = '/page/relateWork'
}

export function offer(v: any) {
  console.log(v)
  const ss1 = hyRequest.post<IDataType>({
    url: work.offer,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function relateWork(v: any) {
  console.log(v)
  const ss1 = hyRequest.post<IDataType>({
    url: work.relateWork,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      u_id: v
    }
  })
  return ss1
}
