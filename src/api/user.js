import request from '@/utils/request'

/**
 * Feature
 */
export const feature = () => {
  return request({
    url: '/user/feature',
    method: 'GET'
  })
}

/**
 *  Chapter
 */
export const chapter = () => {
  return request({
    url: '/user/chapter',
    method: 'GET'
  })
}
