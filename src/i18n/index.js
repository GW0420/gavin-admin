import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  // 使用 Composition Api模式， 需要将其设置为false
  legacy: false,
  // 全局注册 $t函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
