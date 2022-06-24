<template>
  <div class="article-ranking-container">
    <el-card>
      <el-table ref="tableRef" v-loading="loading" element-loading-text="Loading..." :data="articleListData" border>
        <el-table-column
          v-for="item in articleListColumns"
          :key="item.id"
          :label="$t(`msg.article.${item.prop}`)"
          :prop="item.prop"
          :width="item.width"
        >
          <template #default="{ row }" v-if="item.prop === 'publicDate'">
            {{ relativeTime(row.publicDate) }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.article.action')">
          <el-button type="primary" size="mini" @click="onShowClick(row)">{{ $t('msg.article.show') }}</el-button>
          <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{ $t('msg.article.remove') }}</el-button>
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
import { ArticleList } from '@/api/article'
import { watchSwitchLang } from '@/utils/i18n'
import { relativeTime } from '@/filter'

// 数据相关
const articleListData = ref([])
const loading = ref(false)
const pager = reactive({
  page: 1,
  size: 10,
  total: 0
})
const articleListColumns = ref([
  {
    id: 1,
    prop: 'ranking',
    width: '200'
  },
  {
    id: 2,
    prop: 'title'
  },
  {
    id: 3,
    prop: 'author'
  },
  {
    id: 4,
    prop: 'publicDate'
  },
  {
    id: 5,
    prop: 'desc',
    width: 500
  }
])

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
const onShowClick = () => {}
// 删除
const onRemoveClick = () => {}

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
