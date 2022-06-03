import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-plus
import installElement from '@/utils/element'

const app = createApp(App)
installElement(app)

app.use(store)
app.use(router)
app.mount('#app')
