<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <div class="sidebar">
      <sidebar class="sidebar-content" :style="{ background: variables.menuBg }"></sidebar>
    </div>
    <div class="main-container">
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
    width: 210px;
    .sidebar-content {
      height: 1000%;
    }
  }
  .main-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(100vw - $sideBarWidth);
    height: 100%;
    .fix-header {
      width: 100%;
      height: 50px;
      // line-height: 50px;
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
