<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary"> {{ $t('msg.excel.importExcel') }}</el-button>
        <el-button type="success" @click="handleShowExcel">
          {{ $t('msg.excel.exportExcel') }}
        </el-button>
      </div>
    </el-card>
    <el-card>
      <el-table v-loading="loading" element-loading-text="Loading..." :data="userList" border style="width: 100%">
        <el-table-column label="#" type="index" />
        <el-table-column
          v-for="item in userColumns"
          :key="item.id"
          :prop="item.prop"
          :label="$t(`msg.excel.${item.label}`)"
        >
          <template #default="{ row }">
            <div v-if="item.prop === 'avatar'">
              <el-image class="avatar" :src="row.avatar"></el-image>
            </div>
            <div v-if="item.prop === 'role'">
              <div v-if="row.role && row.role.length > 0">
                <el-tag v-for="item in row.role" :key="item.id" size="mini">{{ item.title }}</el-tag>
              </div>
              <div v-else>
                <el-tag size="mini">{{ $t('msg.excel.openTime') }}</el-tag>
              </div>
            </div>
            <div v-if="item.prop === 'openTime'">
              {{ dateFilter(row.openTime) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.action')" fixed="right" width="260">
          <template #default="{ row }">
            <el-button type="primary" size="mini" @click="handleUserShow(row)">{{ $t('msg.excel.show') }}</el-button>
            <el-button type="info" size="mini" @click="handleUserRole(row)">{{ $t('msg.excel.showRole') }}</el-button>
            <el-button type="danger" size="mini" @click="handleUserRemove(row)">{{ $t('msg.excel.remove') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pager.page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="pager.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pager.total"
      >
      </el-pagination>
    </el-card>
    <ExportToExcel v-model:showExcelModel="showExcelModel"></ExportToExcel>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { UserList, UserDelete } from '@/api/rbac'
import { watchSwitchLang } from '@/utils/i18n'
import { dateFilter } from '@/filter'
import { useI18n } from 'vue-i18n'
import { ElMessageBox, ElMessage } from 'element-plus'
import ExportToExcel from './components/Export2Excel'

/**
 * excel导入导出
 */
const showExcelModel = ref(false)
const handleShowExcel = () => {
  showExcelModel.value = true
}

/**
 * 用户列表相关
 */
const loading = ref(false)
const userList = ref([])
const pager = reactive({
  page: 1,
  size: 10,
  total: 0
})

// 分页事件
const handleCurrentChange = currentPage => {
  pager.page = currentPage
  getUserList()
}
const handleSizeChange = currentSize => {
  pager.size = currentSize
  getUserList()
}

// table表格
const userColumns = [
  {
    id: 1,
    prop: 'username',
    label: 'name'
  },
  {
    id: 2,
    prop: 'mobile',
    label: 'mobile'
  },
  {
    id: 3,
    prop: 'avatar',
    label: 'avatar'
  },
  {
    id: 4,
    prop: 'role',
    label: 'role'
  },
  {
    id: 5,
    prop: 'openTime',
    label: 'openTime'
  }
]

// 初始化接口数据
const getUserList = async () => {
  loading.value = true
  let params = { page: pager.page, size: pager.size }
  const data = await UserList(params)
  pager.page = data?.page
  pager.size = data?.size
  pager.total = data?.total
  userList.value = data?.list
  loading.value = false
}

onMounted(() => {
  getUserList()
})

// 监听语言变化
watchSwitchLang(getUserList)

/**
 * 点击按钮事件
 */
const i18n = useI18n()
const handleUserRemove = row => {
  ElMessageBox.confirm(i18n.t('msg.excel.dialogTitle1') + row.username + i18n.t('msg.excel.dialogTitle2'), {
    type: 'warning'
  }).then(async () => {
    await UserDelete(row._id)
    ElMessage.success(i18n.t('msg.excel.removeSuccess'))
    // 重新渲染数据
    getUserList()
  })
}
</script>

<style lang="scss" scoped>
.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .el-tag {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    margin-bottom: 20px;
    float: right;
  }
}
</style>
