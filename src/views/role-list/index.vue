<template>
  <div class="roleList">角色列表</div>
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
