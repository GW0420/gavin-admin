<template>
  <svg-icon id="guide-full" :icon="isFullScreen ? 'exit-fullscreen' : 'fullscreen'" @click="onToggle"></svg-icon>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

// 是否全屏
const isFullScreen = ref(false)

// 监听变化
const change = () => {
  isFullScreen.value = screenfull.isFullScreen
}

// 切换事件
const onToggle = () => {
  screenfull.toggle()
}

// 设置监听器
onMounted(() => {
  screenfull.on('change', change)
})

onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped></style>
