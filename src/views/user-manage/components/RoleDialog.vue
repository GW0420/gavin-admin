<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="showRoleModel" @close="closed">
    <el-checkbox-group v-model="roleSingleList">
      <el-checkbox v-for="item in roleList" :key="item.id" :label="item.title"></el-checkbox>
    </el-checkbox-group>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue'
import { RoleList, UserSingleRoles, UpdateRole } from '@/api/rbac'
import { watchSwitchLang } from '@/utils/i18n'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  showRoleModel: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:showRoleModel', 'updateRoleList'])

/**
 确定按钮点击事件
*/
const i18n = useI18n()
const onConfirm = async () => {
  const roles = roleSingleList.value.map(title => {
    return roleList.value.find(role => role.title == title)
  })
  await UpdateRole(props.userId, roles)
  emits('updateRoleList')
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

/**
 * 关闭
 */
const closed = () => {
  emits('update:showRoleModel', false)
}

/**
 * 角色列表
 */
// 所有角色
const roleList = ref([])
// 初始化角色列表接口数据
const getRoleList = async () => {
  const data = await RoleList()
  roleList.value = data
}
getRoleList()

// 当前用户角色
const roleSingleList = ref([])
const getUserSingleRoles = async () => {
  const data = await UserSingleRoles(props.userId)
  roleSingleList.value = data.role.map(item => item.title)
}
// 根据userId,监听当前用户角色是否有值
watch(
  () => props.userId,
  val => {
    if (val) {
      getUserSingleRoles()
    }
  }
)

// 监听语言变化
watchSwitchLang(getRoleList)
</script>

<style lang="scss" scoped></style>
