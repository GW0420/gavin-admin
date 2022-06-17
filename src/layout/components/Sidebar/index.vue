<template>
  <div class="sidebar">
    <div class="title">gavin-admin</div>
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
  .title {
    padding: 20px;
  }
}
</style>
