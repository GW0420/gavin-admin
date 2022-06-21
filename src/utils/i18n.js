import i18n from '@/i18n'
import store from '@/store'
import { watch } from 'vue'

/**
 * 国际化内容转换
 * @params title
 */

export const generateTitle = title => {
  return i18n.global.t('msg.route.' + title)
}

/**
 * cbs 所有的回掉
 */
export const watchSwitchLang = (...cbs) => {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach(cb => cb(store.getters.language))
    }
  )
}
