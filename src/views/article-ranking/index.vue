<template>
  <div class="article-ranking-container">
    <el-card class="header">
      <div class="dynamic-box">
        <span class="title">{{ $t('msg.article.dynamicTitle') }}</span>
        <el-checkbox-group v-model="selectDynamicLabel">
          <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index">{{
            item.label
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>

    <el-card>
      <el-table ref="tableRef" v-loading="loading" element-loading-text="Loading..." :data="articleListData" border>
        <el-table-column
          v-for="item in tableColumns"
          :key="item.id"
          :label="$t(`msg.article.${item.prop}`)"
          :prop="item.prop"
          :width="item.width"
        >
          <template #default="{ row }" v-if="item.prop === 'publicDate'">
            {{ relativeTime(row.publicDate) }}
          </template>
          <template #default="{ row }" v-else-if="item.prop === 'action'">
            <el-button type="primary" size="mini" @click="onShowClick(row)">{{ $t('msg.article.show') }}</el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{ $t('msg.article.remove') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :current-page="pager.page"
        :page-sizes="[5, 10, 50, 100, 200]"
        :page-size="pager.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pager.total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArticleList, DeleteArticle } from '@/api/article'
import { watchSwitchLang } from '@/utils/i18n'
import { relativeTime } from '@/filter'
import { dynamicData, selectDynamicLabel, tableColumns } from './component/Dynamic'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox } from 'element-plus'

// 数据相关
const articleListData = ref([])
const router = useRouter()
const i18n = useI18n()
const loading = ref(false)
const pager = reactive({
  page: 1,
  size: 10,
  total: 0
})

// 分页事件
const handleSizeChange = size => {
  pager.size = size
  getArticleList()
}
const handleCurrentChange = page => {
  pager.page = page
  getArticleList()
}

// 查看
const onShowClick = row => {
  router.push(`/article/${row._id}`)
}
// 删除
const onRemoveClick = async row => {
  ElMessageBox.confirm(i18n.t('msg.article.dialogTitle1') + row.title + i18n.t('msg.article.dialogTitle2'), {
    type: 'warning'
  }).then(async () => {
    await DeleteArticle(row._id)
    ElMessage.success(i18n.t('msg.article.removeSuccess'))
    // 重新渲染数据
    getArticleList()
  })
}

// 初始化接口数据
const getArticleList = async () => {
  loading.value = true
  let params = { page: pager.page, size: pager.size }
  const data = await ArticleList(params)
  articleListData.value = data?.list
  pager.total = data?.total
  loading.value = false
}
getArticleList()

// 监听语言变化
watchSwitchLang(getArticleList)
</script>

<style lang="scss" scoped>
.article-ranking-container {
  .header {
    margin-bottom: 20px;
    .dynamic-box {
      display: flex;
      align-items: center;
      .title {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .el-table__row {
    cursor: pointer;
  }
  .pagination {
    float: right;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
