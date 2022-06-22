import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const UserList = data => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}
