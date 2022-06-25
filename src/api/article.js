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

/**
 * 创建文章
 */
export const CreateArticle = data => {
  return request({
    url: '/article/create',
    method: 'POST',
    data
  })
}

/**
 * 编辑文章详情
 */
export const ArticleEdit = data => {
  return request({
    url: '/article/edit',
    method: 'POST',
    data
  })
}
