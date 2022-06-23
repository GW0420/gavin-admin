<template>
  <div class="">
    <el-card>
      <el-table :data="roleList" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120"> </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
        <el-table-column :label="$t('msg.role.action')" prop="action" width="260">
          <el-button type="primary" size="mini">
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RoleList } from '@/api/rbac'
import { watchSwitchLang } from '@/utils/i18n'

const roleList = ref([])
const getRoleList = async () => {
  roleList.value = await RoleList()
}

onMounted(() => {
  getRoleList()
})

// 监听语言变化
watchSwitchLang(getRoleList)
</script>

<style lang="scss" scoped></style>
