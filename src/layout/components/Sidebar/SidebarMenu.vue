<template>
  <!-- 一级菜单 -->
  <el-menu background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
    <!-- 子集 menu 菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1"
        ><el-icon><Eleme /></el-icon>item one</el-menu-item
      >
      <el-menu-item index="1-2"
        ><el-icon><Eleme /></el-icon>item one</el-menu-item
      >
      <el-menu-item index="1-3"
        ><el-icon><Eleme /></el-icon>item three</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Promotion /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(routes.value)
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
