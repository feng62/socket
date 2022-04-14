import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from './main'
import admin from './admin'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/views/sign/sign.vue')
  },
  {
    path: '/main',
    name: 'mainn',
    component: () => import('@/views/main/main.vue'),
    children: main
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('@/views/friend/friend.vue')
  },
  {
    path: '/release',
    name: 'release',
    component: () => import('@/views/release/release.vue')
  },
  {
    path: '/personal/:u_id',
    name: 'personal',
    component: () => import('@/views/user/personal/index.vue')
  },
  {
    path: '/video/:w_id',
    name: 'video',
    component: () => import('@/views/workVideo/workVideo.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/admin.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/search.vue')
  },
  {
    path: '/adminMain',
    name: 'adminMain',
    component: () => import('@/views/adminMain/adminMain.vue'),
    children: admin
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       return '/login'
//     }
//   }
// })

export default router
