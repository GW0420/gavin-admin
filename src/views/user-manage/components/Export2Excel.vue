<template>
  <el-dialog :title="$t('msg.excel.title')" :model-value="showExcelModel" @close="closed" width="30%">
    <el-input :placeholder="$t('msg.excel.placeholder')" v-model="excelName"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" :loading="loading" @click="onConfirmExport">{{ $t('msg.excel.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { UserAllList } from '@/api/rbac'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFilter } from '@/filter'

defineProps({
  showExcelModel: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:showExcelModel'])

//指定默认文件名称
const i18n = useI18n()
const excelName = ref('')
let exportDefaultName = i18n.t('msg.excel.defaultName')
excelName.value = exportDefaultName

// 监听语言变化
watchSwitchLang(() => {
  exportDefaultName = i18n.t('msg.excel.defaultName')
  excelName.value = exportDefaultName
})

/**
 * 导出按钮点击事件
 */
const loading = ref(false)
const allUser = ref([])
const onConfirmExport = async () => {
  // loading状态
  loading.value = true
  // 所有用户数据
  const { list } = await UserAllList()
  allUser.value = list
  // 导入工具包
  const excel = await import('@/utils/Export2Excel')
  // 转化后的二位数组
  const data = formatJson(USER_RELATIONS, allUser.value)
  // 导出实现
  excel.export_json_to_excel({
    // excel 表头
    header: Object.keys(USER_RELATIONS),
    // excel 数据（二维数组结构）
    data,
    // 文件名称
    filename: excelName.value || exportDefaultName,
    // 是否自动列宽
    autoWidth: true,
    // 文件类型
    bookType: 'xlsx'
  })
  // 关闭loading状态
  loading.value = false
  closed()
}

// 该方法负责将数组转化成二维数组
const formatJson = (headers, rows) => {
  // 首先遍历数组
  // [{ username: 'gavin'},{},{}]  => [[’gavin'],[],[]]
  return rows.map(item => {
    return Object.keys(headers).map(key => {
      // 角色特殊处理
      if (headers[key] === 'role') {
        const roles = item[headers[key]]

        return JSON.stringify(roles.map(role => role.title))
      }
      // 时间特殊处理
      if (headers[key] === 'openTime') {
        return dateFilter(item[headers[key]])
      }
      return item[headers[key]]
    })
  })
}

/**
 * 关闭
 */
const closed = () => {
  loading.value = false
  emits('update:showExcelModel', false)
}
</script>
