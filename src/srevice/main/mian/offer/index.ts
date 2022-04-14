import hyRequest from '../../../index'
import { IDataType } from '@/srevice/type'

enum Work {
  like = '/info/like',
  isLile = '/info/isLike',
  collect = '/info/collect',
  isCollect = '/info/isCollect'
}

export function Like(me, work, like) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.like,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      u_id: me,
      w_id: work,
      like: like
    }
  })
  return ss1
}
export function isLikeWork(me, work) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.isLile,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      u_id: me,
      w_id: work
    }
  })
  return ss1
}
export function CollectWork(me, work, like) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.collect,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      u_id: me,
      w_id: work,
      like: like
    }
  })
  return ss1
}
export function isCollectWork(me, work) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.isCollect,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      u_id: me,
      w_id: work
    }
  })
  return ss1
}

export function download(u_id, w_id, account) {
  const ss1 = hyRequest.get<IDataType>({
    url: `/page/download/${u_id}/${w_id}/${account}`,
    responseType: 'blob'
  })
  return ss1
}
