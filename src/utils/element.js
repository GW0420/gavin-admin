/**
 * element-plus 全局引入引入
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/**
 * element-plus图标全局导入
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app) {
  app.use(ElementPlus)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
