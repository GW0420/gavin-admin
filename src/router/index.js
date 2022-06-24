import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import layout from '@/layout'
import ArticleCreaterRouter from './modules/ArticleCreate'
import ArticleRankingRouter from './modules/ArticleRanking'
import PermissionListRouter from './modules/PermissionList'
import RoleListRouter from './modules/RoleList'
import UserManageRouter from './modules/UserManage'

/**
 * 私有路由表
 */
export const privateRoutes = [
  UserManageRouter,
  RoleListRouter,
  PermissionListRouter,
  ArticleRankingRouter,
  ArticleCreaterRouter
]

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

/**
 * 初始化路由表
 */
export function resetRouter() {
  if (store.getters.userInfo && store.getters.userInfo.permission && store.getters.userInfo.permission.menus) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach(menu => {
      router.removeRoute(menu)
    })
  }
}
