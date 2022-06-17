<template>
  <div class="navbar">
    <div class="breads">面包屑</div>
    <div class="right-menu">
      <el-dropdown trigger="click" @command="handleCommand">
        <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-icon><Setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="email">邮箱: 1160192842@qq.com</el-dropdown-item>
            <el-dropdown-item command="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const handleCommand = type => {
  if (type === 'logout') {
    store.dispatch('user/logout')
  }
}
</script>

<style lang="scss">
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
