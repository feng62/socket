import hyRequest from '../index'

import { IDataType } from '../type'

enum admin {
  Pic = '/admin/pic',
  map = '/admin/map',
  userList = '/admin/userManage',
  workData = '/admin/workManage',
  workTypeData = '/admin/workTypeManage',
  workTypeUpdate = 'admin/workTypeUpdate',
  workTypeInsert = 'admin/workTypeInsert',
  getAdmi = 'admin/getAdmi',
  updataAdmi = 'admin/updataAdmi',
  getGrade = 'admin/getGrade',
  insertAdmi = 'admin/insertAdmi'
}

export function picc() {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.Pic,
    headers: {
      'content-type': 'application/json'
    }
  })
  return ss1
}

export function map() {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.map,
    headers: {
      'content-type': 'application/json'
    }
  })
  return ss1
}

export function userList(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.userList,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function workData(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.workData,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}

export function workTypeData(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.workTypeData,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}

export function workTypeUpdate(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.workTypeUpdate,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}

export function workTypeInsert(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.workTypeInsert,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function getAdmi(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.getAdmi,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function updataAdmi(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.updataAdmi,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function getGrade(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.getGrade,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
export function insertAdmi(v: any) {
  const ss1 = hyRequest.post<IDataType>({
    url: admin.insertAdmi,
    headers: {
      'content-type': 'application/json'
    },
    data: v
  })
  return ss1
}
