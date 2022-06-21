<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <el-tooltip :content="$t('msg.theme.themeChange')">
      <svg-icon id="guide-theme" icon="change-theme" class="icons"></svg-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{ $t('msg.theme.themeColorChange') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <SelectColor v-model:SelectVisible="SelectVisible"></SelectColor>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor'

// 颜色选择弹框
const SelectVisible = ref(false)
const handleSetTheme = value => {
  SelectVisible.value = true
}
</script>

<style lang="scss" scoped>
.icons {
  font-size: 25px;
}
</style>
