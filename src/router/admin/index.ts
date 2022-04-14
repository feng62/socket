import { RouteRecordRaw } from 'vue-router'

const admin: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/adminMain/pic'
  },
  {
    path: 'pic',
    name: 'visual',
    component: () => import('@/views/adminMain/cnps/visual.vue')
  },
  {
    path: 'user',
    name: 'userManage',
    component: () =>
      import('@/views/adminMain/cnps/manage/userManage/userManage.vue')
  },
  {
    path: 'work',
    name: 'workManage',
    component: () =>
      import('@/views/adminMain/cnps/manage/workManage/workManage.vue')
  },
  {
    path: 'workType',
    name: 'workTyperManage',
    component: () =>
      import('@/views/adminMain/cnps/manage/workTypeManage/workTypeManage.vue')
  },
  {
    path: 'adminManage',
    name: 'adminManage',
    component: () =>
      import('@/views/adminMain/cnps/manage/adminManage/adminManage.vue')
  }
]

export default admin
