import request from '@/utils/request'

/**
 * 用户头像
 */
export const feature = () => {
  return request({
    url: '/user/feature',
    method: 'GET'
  })
}
