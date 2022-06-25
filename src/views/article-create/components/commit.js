import { CreateArticle, ArticleEdit } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
const t = i18n.global.t

// 提交方法
export const commitArticle = async data => {
  const res = await CreateArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
  return res
}

// 编辑方法
export const editArticle = async data => {
  const res = await ArticleEdit(data)
  ElMessage.success(t('msg.article.editorSuccess'))
  return res
}
