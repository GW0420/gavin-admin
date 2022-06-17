import { Login, UserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login(context, userInfo) {
      const { username, password } = userInfo
      const res = await Login({ username, password: md5(password) })
      context.commit('setToken', res.token)
      router.push('/')
      ElMessage.success('登录成功')
    },
    async getUserInfo(context) {
      const res = await UserInfo()
      context.commit('setUserInfo', res)
    },
    async logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
