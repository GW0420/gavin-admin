<template>
  <div class="project-card">
    <PanThumb
      image="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      :width="'100px'"
      :height="'100px'"
      :hoverable="false"
    >
      <div>hello</div>
      <div>{{ $store.getters.userInfo.title }}</div>
    </PanThumb>
  </div>
</template>

<script setup>
import PanThumb from '@/components/PanThumb'
import { useStore } from 'vuex'

const store = useStore()
</script>

<style lang="scss" scoped></style>
