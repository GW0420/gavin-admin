<template>
  <div class="">
    <el-card>
      <el-table
        :data="permissionList"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="permissionName" :label="$t('msg.permission.name')" width="180"> </el-table-column>
        <el-table-column prop="permissionMark" :label="$t('msg.permission.mark')" width="180"> </el-table-column>
        <el-table-column prop="permissionDesc" :label="$t('msg.permission.desc')"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PermissionList } from '@/api/rbac'
import { watchSwitchLang } from '@/utils/i18n'

const permissionList = ref([])

// 权限列表接口数据
const getPermissionList = async () => {
  const data = await PermissionList()
  permissionList.value = data
}
getPermissionList()

// 监听语言变化
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped></style>
