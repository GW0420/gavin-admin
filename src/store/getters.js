import variables from '@/assets/styles/variables.module.scss'
/**
 * 快捷访问
 */
const getters = {
  /**
   * token
   */
  token: state => state.user.token,
  /**
   * @return true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  /**
   * SidebarMenu 快捷导航
   */
  cssVar: state => variables,
  /**
   * 菜单伸缩功能
   */
  sidebarOpened: state => state.app.sidebarOpened,
  /**
   * 国际化
   */
  language: state => state.app.language,
  /**
   * 主题色
   */
  mainColor: state => state.theme.mainColor
}

export default getters
