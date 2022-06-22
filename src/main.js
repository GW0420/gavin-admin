import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载静态资源
import '@/assets/styles/index.scss'
// 路由守卫
import '@/router/permission'
// element-plus
import installElement from '@/utils/element'
// 加载本地svg-icon图标
import installIcon from '@/assets/icons/index'
// vue-i18n
import i18n from '@/i18n'
// installDirective
import installDirective from '@/directives'

const app = createApp(App)
installElement(app)
installIcon(app)
installDirective(app)

app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
