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

/**
 * 删除文章
 */
export const DeleteArticle = articleId => {
  return request({
    url: `/article/delete/${articleId}`
  })
}

/**
 * 获取文章详情
 */
export const ArticleDetail = articleId => {
  return request({
    url: `/article/${articleId}`
  })
}
