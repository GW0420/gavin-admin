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

const app = createApp(App)
installElement(app)
installIcon(app)

app.use(store)
app.use(router)
app.mount('#app')
