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

/**
 * 用户删除
 */
export const UserDelete = id => {
  return request({
    url: `/user-manage/detele/${id}`,
    method: 'GET'
  })
}
