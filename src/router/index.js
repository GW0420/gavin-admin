import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
