<template>
  <!-- 一级菜单 -->
  <el-menu :uniqueOpened="true" background-color="#304156" text-color="#fff" active-text-color="#ffd04b" router>
    <!-- 子集 menu 菜单 -->
    <SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

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
