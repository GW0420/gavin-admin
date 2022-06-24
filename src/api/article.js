import request from '@/utils/request'

/**
 * 获取列表数据
 */
export const ArticleList = data => {
  return request({
    url: '/article/list',
    method: 'GET',
    params: data
  })
}
