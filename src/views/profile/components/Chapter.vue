<template>
  <el-timeline>
    <el-timeline-item v-for="item in chapterData" :key="item.id" :timestamp="item.timestamp" placement="top">
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { ref } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'
import { chapter } from '@/api/user'

// 初始化文章接口数据
const chapterData = ref([])
const getChapterData = async () => {
  chapterData.value = await chapter()
}
getChapterData()

// 监听语言变化
watchSwitchLang(getChapterData)
</script>

<style lang="scss" scoped></style>
