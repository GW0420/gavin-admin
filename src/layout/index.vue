<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <div class="sidebar">
      <sidebar
        :class="['sidebar-content', $store.getters.sidebarOpened ? 'openSideBar' : 'hideSideBar']"
        :style="{ background: variables.menuBg }"
      ></sidebar>
    </div>
    <div :class="['main-container', $store.getters.sidebarOpened ? 'openSideBar' : 'hideSideBar']">
      <!-- 顶部导航 -->
      <div class="fix-header">
        <navbar></navbar>
      </div>
      <!-- 内容区 -->
      <div class="main">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import variables from '../assets/styles/variables.module.scss'
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    transition: all 0.3s;
    .sidebar-content {
      height: 100%;
      &.openSideBar {
        width: 210px;
      }
      &.hideSideBar {
        width: 54px;
      }
    }
  }
  .main-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    transition: all 0.3s;
    &.openSideBar {
      width: calc(100% - 210px);
    }
    &.hideSideBar {
      width: calc(100% - 54px);
    }
    .fix-header {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0 1px 4px #00152914;
    }
    .main {
      width: 100%;
      height: calc(100% - 50px);
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
