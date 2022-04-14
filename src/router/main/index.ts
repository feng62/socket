import { RouteRecordRaw } from 'vue-router'

const main: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'offer',
    component: () => import('@/views/main/src/offer/offer.vue')
  },
  {
    path: 'home',
    name: 'homme',
    component: () => import('@/views/main/src/homme/homme.vue')
  },
  {
    path: 'relate',
    name: 'relate',
    component: () => import('@/views/main/src/relate/relate.vue')
  },
  {
    path: '/cai/:wt_id',
    name: 'cai',
    component: () => import('@/views/main/src/homme/homme.vue')
  }
]

export default main
