import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    async login(context, userInfo) {
      const { username, password } = userInfo
      const res = await login({ username, password: md5(password) })
      context.commit('setToken', res.token)
      // 登录后操作
      router.push('/')
      ElMessage.success('登录成功')
    }
  }
}
