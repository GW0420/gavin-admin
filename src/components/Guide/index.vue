<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <svg-icon id="guide-start" icon="guide" class="icons" @click="onGuideClick" />
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './component/step'

const i18n = useI18n()
let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    animate: false,
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})

const onGuideClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style scoped>
.icons {
  font-size: 20px;
}
</style>
