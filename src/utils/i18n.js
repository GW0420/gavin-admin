/**
 * 国际化内容转换
 * @params title
 */

import i18n from '@/i18n'

export const generateTitle = title => {
  return i18n.global.t('msg.route.' + title)
}
