import request from '@/utils/request'

/**
 * 登录
 */

export const Login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 用户信息
 */
export const UserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
