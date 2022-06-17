<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="sidebar-name" v-if="$store.getters.sidebarOpened">gavin-admin</span>
    </div>
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang="scss" scoped>
.sidebar {
  text-align: center;
  box-sizing: border-box;
  .sidebar-title {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sidebar-name {
    margin-left: 10px;
    color: #bfcbd9;
  }
}
</style>
