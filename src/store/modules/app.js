import { LANG } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
import { TAGS_VIEW } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || []
  }),
  mutations: {
    // 伸缩菜单
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    // 设置语言
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    // 添加 tags
    addTagsViewList(state, tag) {
      const isFind = state.tagsViewList.find(item => {
        return item.path === tag.path
      })
      // 处理重复
      if (!isFind) {
        state.tagsViewList.push(tag)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    // 国际化 tags
    changeTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem(TAGS_VIEW, state.tagsViewList)
    },
    // 删除 tags
    removeTagsView(state, paylod) {
      if (paylod.type === 'index') {
        state.tagsViewList.splice(paylod.index, 1)
        return
      } else if (paylod.type === 'other') {
        state.tagsViewList.splice(paylod.index + 1, state.tagsViewList.length - paylod.index + 1)
        state.tagsViewList.splice(0, paylod.index)
      } else if (paylod.type === 'right') {
        state.tagsViewList.splice(paylod.index + 1, state.tagsViewList.length - paylod.index + 1)
      }
      setItem(TAGS_VIEW, state.tagsViewList)
    }
  },
  actions: {}
}
