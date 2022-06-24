<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="showRoleDialog" @close="handleRoleCancel">
    <el-tree
      v-loading="loading"
      element-loading-text="Loading..."
      ref="treeRef"
      :data="permissionList"
      show-checkbox
      check-strictly
      node-key="id"
      default-expand-all
      :props="defaultProps"
    >
    </el-tree>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleRoleCancel">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="handleRoleConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { PermissionList, RoleSinglePermission, DistributePermission } from '@/api/rbac'
import { watchSwitchLang } from '@/utils/i18n'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const props = defineProps({
  showRoleDialog: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:showRoleDialog'])

// 属性结构配置
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}

//  获取所有权限列表
const permissionList = ref([])
const getPermissionList = async () => {
  const data = await PermissionList()
  permissionList.value = data
}
getPermissionList()

// 监听语言变化
watchSwitchLang(getPermissionList)

//  获取指定角色的权限, 渲染 el-tree当前角色选中项
const treeRef = ref(null)
const loading = ref(false)
const getRoleSinglePermission = async () => {
  loading.value = true
  const checkedKeys = await RoleSinglePermission(props.roleId)
  treeRef.value.setCheckedKeys(checkedKeys)
  loading.value = false
}

// 监听 roleId变化
watch(
  () => props.roleId,
  val => {
    if (!val) return
    getRoleSinglePermission()
  }
)

// 确定
const i18n = useI18n()
const handleRoleConfirm = async () => {
  // 为角色分配权限
  await DistributePermission({
    roleId: props.roleId,
    permissions: treeRef.value.getCheckedKeys()
  })
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  handleRoleCancel()
}
// 关闭
const handleRoleCancel = () => {
  emits('update:showRoleDialog', false)
}
</script>
