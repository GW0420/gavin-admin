import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'

// 语言包
import 'dayjs/locale/zh-cn'
import store from '@/store'

// 日期处理
export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}

// 相对时间处理
dayjs.extend(rt)
export const relativeTime = val => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs()
    .locale(store.getters.language === 'zh' ? 'zh-cn' : 'en')
    .to(dayjs(val))
}
