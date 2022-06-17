import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 添加icode
  config.headers.icode = '1B1C9CC9E95F42F4'
  // 这个位置需要统一注入token
  if (store.getters.token) {
    // 如果存在token,注入token
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config // 必须返回配置
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    // 要根据success的成功决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // 提示错误信息
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
