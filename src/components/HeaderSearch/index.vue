<template>
  <div class="header-search">
    <svg-icon icon="search" class="icons" @click="onShowSearch"></svg-icon>
    <el-select
      ref="headerSearchSelectRef"
      :class="[isShow ? 'header-show-search' : 'header-hiddle-search']"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters } from '@/utils/route'
import Fuse from 'fuse.js'
import { generateRoutes } from './components/FuseData'

// 控制 search显示
const isShow = ref(true)
const onShowSearch = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}

// search
const search = ref('')
const headerSearchSelectRef = ref()

// 搜索结果
const searchOptions = ref([])
// 搜索方法
const querySearch = query => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}

// 选中时的回调
const router = useRouter()
const onSelectChange = value => {
  search.value = value.title.join(' > ')
  router.push(value.path)
}

// 检索数据源
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})

console.log(searchPool.value)

// 检索库相关
const fuse = new Fuse(searchPool.value, {
  // 是否按优先级进行排序
  shouldSort: true,
  // 匹配长度超过这个值的才会被认为是匹配的
  minMatchCharLength: 1,
  // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
  // name：搜索的键
  // weight：对应的权重
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
})
</script>

<style lang="scss" scoped>
.header-search {
  display: flex;
  align-items: center;
  .icons {
    margin-right: 10px;
    font-size: 18px;
  }

  .header-show-search {
    width: 210px;
    transition: all 0.3s;
  }
  .header-hiddle-search {
    width: 0;
    overflow: hidden;
    background: transparent;
    transition: all 0.3s;
  }
}
</style>
