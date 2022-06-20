<template>
  <div class="navbar">
    <div class="breads">
      <Hamburger></Hamburger>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right-menu">
      <ThemeSelect></ThemeSelect>
      <LangSelect></LangSelect>
      <el-dropdown trigger="click" @command="handleCommand">
        <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-icon><Setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">{{ $t('msg.navBar.home') }}</el-dropdown-item>
            <el-dropdown-item command="email">{{ $t('msg.navBar.email') }}: gavin@qq.com</el-dropdown-item>
            <el-dropdown-item command="logout">{{ $t('msg.navBar.logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import ThemeSelect from '@/components/ThemeSelect'

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
  .breads {
    display: flex;
    align-items: center;
  }
  .right-menu {
    display: flex;
    align-items: center;
  }
}
</style>
