<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

// 引入element-plus中文、英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// 定义store变量
const store = useStore()
// 定义语言切换变量
const locale = computed(() => (store.getters.language === 'zh' ? zhCn : en))
</script>
<style lang="less"></style>
