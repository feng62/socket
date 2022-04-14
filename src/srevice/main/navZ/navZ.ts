import hyRequest from '../../index'
import { IDataType } from '@/srevice/type'

enum page {
  navZ = '/page/navZ'
}

export function navZZ() {
  const ss1 = hyRequest.post<IDataType>({
    url: page.navZ
  })
  return ss1
}
