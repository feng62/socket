import hyRequest from '../index'

import { IDataType } from '../type'

enum Head {
  fuzzySearch = '/use/fuzzySearch'
}

export function fuzzySearch(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: Head.fuzzySearch,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
