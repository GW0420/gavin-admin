<template>
  <div class="tags-view-container">
    <router-link
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :style="{
        backgroundColor: isActive(tag) ? $store.getters.cssVar.menuBg : '',
        borderColor: isActive(tag) ? $store.getters.cssVar.menuBg : ''
      }"
      v-for="(tag, index) in $store.getters.tagsViewList"
      :key="tag.fullPath"
      :to="{ path: tag.fullPath }"
    >
      <div class="tags-title">
        {{ tag.meta.title }}
        <el-icon class="icon"
          ><CircleClose v-show="!isActive(tag)" @click.prevent.stop="onCloseClick(index)"
        /></el-icon>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

/**
 * 是否被选中
 */
const route = useRoute()
const isActive = tag => {
  return tag.path === route.path
}

/**
 * 关闭 tag 的点击事件
 */
const onCloseClick = index => {}
</script>

<style lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
  }
  .tags-title {
    display: inline-flex;
    align-items: center;
    .icon {
      height: 30px;
      margin-left: 2px;
    }
  }
}
</style>
