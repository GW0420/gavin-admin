import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from './storage'

/**
 * 获取时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export const isCheckTimeout = () => {
  // 当前时间戳
  const currentTime = Date.now()
  // 缓存时间戳
  const timeStamp = getItem(TIME_STAMP)
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
