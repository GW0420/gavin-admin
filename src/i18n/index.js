import { createI18n } from 'vue-i18n'
import { getItem } from '@/utils/storage'
import { LANG } from '@/constant'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

// 创建locale语言变量
const locale = getItem(LANG) || 'zh'

const i18n = createI18n({
  // 使用 Composition Api模式， 需要将其设置为false
  legacy: false,
  // 全局注册 $t函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
