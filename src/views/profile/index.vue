<template>
  <div class="profile">
    <el-row>
      <el-col :span="6">
        <ProjectCard class="project-card" :features="featureData"></ProjectCard>
      </el-col>
      <el-col :span="18">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
            <Feature></Feature>
          </el-tab-pane>
          <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
            <Chapter></Chapter>
          </el-tab-pane>
          <el-tab-pane :label="$t('msg.profile.author')" name="author">
            <Author></Author>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { feature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Chapter from './components/Chapter.vue'
import Author from './components/Author.vue'

const activeName = ref('feature')

/**
 * ProjectCard
 */
const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await feature()
}
getFeatureData()

// 监听语言切换
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped>
.profile {
  .project-card {
    margin-right: 25px;
  }
}
</style>
