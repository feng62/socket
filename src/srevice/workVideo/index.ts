import hyRequest from '../index'
import { IDataType } from '@/srevice/type'

enum Work {
  oneWork = '/page/video/',
  attention = '/info/Attention',
  isAttention = '/info/isAttention',
  searchWork = '/page/searchWorkData'
}

export function oneWork(n: number) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.oneWork + n
  })
  return ss1
}

export function attention(me, work, like) {
  console.log(me, work, like)
  const ss1 = hyRequest.post<IDataType>({
    url: Work.attention,
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
export function isAttention(me, work) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.isAttention,
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

export function searchWork(title, pageIndex, Page) {
  const ss1 = hyRequest.post<IDataType>({
    url: Work.searchWork,
    headers: {
      'content-type': 'application/json'
    },
    data: {
      title: title,
      whichPage: pageIndex,
      Page: 10
    }
  })
  return ss1
}
