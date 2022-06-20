<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
        <span class="redirect" v-if="index == '0'" @click="handleLink(item)">{{ generateTitle(item.meta.title) }}</span>
        <span v-else>{{ generateTitle(item.meta.title) }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { generateTitle } from '@/utils/i18n'
/**
 * 动态导航数据
 */
const route = useRoute()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => {
    return item.meta && item.meta.title
  })
}

/**
 * 动态导航路由跳转
 */
const router = useRouter()
const handleLink = item => {
  router.push(item.path)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 10px;
  .redirect {
    cursor: pointer;
    color: #4d9ce6;
    font-weight: bold;
  }
}
</style>
