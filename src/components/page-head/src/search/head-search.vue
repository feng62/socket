<template>
  <div class="head-search">
    <div class="inpu">
      <svg
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="_3b4gSaMs"
        viewBox="0 0 18 18"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.875 1.5a6.375 6.375 0 103.642 11.608l3.063 3.063a1.125 1.125 0 001.59-1.591l-3.062-3.063A6.375 6.375 0 007.875 1.5zM3.75 7.875a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z"
          fill="#4F5168"
        ></path>
      </svg>
      <input
        ref="inp"
        id="sou"
        type="text"
        placeholder="搜索你感兴趣"
        v-model="searchDataValue"
        @focus="jiao"
        @blur="sou"
        @input="fuzzySearch"
      /><button class="butS">
        <span class="sou" @click="cha">搜索</span>
      </button>
    </div>
    <div class="search" v-if="searchIsShow">
      <search v-model="searchDataValue" :data="data1" :qing="qing"></search>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'
import search from './search.vue'
const store = useStore()
const searchDataValue = ref('')
const searchIsShow = ref(true)
const data = ref([])
const data1 = ref([])
const qing = ref(false)
const inp = ref<HTMLElement>()
const ss = computed(() => store.state.headModule.fuzzySearchData)
const sou = (event) => {
  setTimeout(() => {
    searchIsShow.value = !event.isTrusted

    qing.value = true
    data1.value = LocalCache.getCache('cacheRecords')
    if (LocalCache.getCache('cacheRecords').length < 1) {
      qing.value = false
    }
  }, 150)
}
const jiao = (event) => {
  searchIsShow.value = event.isTrusted
  fuzzySearch(event)
}
const cha = () => {
  window.open('/search?q=' + inp.value.value, '_blank')
}
const fuzzySearch = async (event) => {
  data.value = []
  data1.value = []
  if (event.target.value.trim() != '') {
    await store.dispatch('headModule/fuzzySearchDataAction', {
      title: event.target.value.trim()
    })
    store.state.headModule.fuzzySearchData.forEach((item, index) => {
      if (index <= 9) {
        data.value.push(item.title)
      }
    })
    data1.value = unique(data.value, event.target.value.trim())
    qing.value = false
  } else {
    qing.value = true
    data1.value = LocalCache.getCache('cacheRecords')
    if (LocalCache.getCache('cacheRecords').length < 1) {
      qing.value = false
    }
  }
}
const cacheRecord = (value) => {
  let records = []
  const tmp = LocalCache.getCache('cacheRecords')
  if (tmp) {
    if (tmp.length <= 9) {
      records = tmp
      records.splice(0, 0, value)
    }
  }
  records = records.filter((value, index) => {
    return index < 10
  })
  LocalCache.setCache(
    'cacheRecords',
    records.filter(function (item, index, arr) {
      return arr.indexOf(item, 0) === index
    })
  )
}
function unique(arr, title) {
  return arr
    .filter(function (item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index
    })
    .map((item) => {
      return item.replace(
        new RegExp(title),
        '<span style="color: red">' + title + '</span>'
      )
    })
    .filter((value, index) => {
      return index < 10
    })
}
</script>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'head-search'
})
</script>

<style scoped>
.head-search {
  position: relative;
}
.inpu {
  width: 350px;
  height: 30px;
  background: #eff0f3;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 0 4px;
  border-radius: 5px;
}
.inpu > input {
  width: 270px;
  border: 0;
  caret-color: red;
  background: #eff0f3;
  margin-left: 8px;
  margin-right: 3px;
  font-size: 10px;
}
.sou {
  padding-left: 13px;
}
.inpu > input:focus {
  outline: 0;
  /*background-color: transparent;*/
}
.butS {
  border: none;
  background-color: transparent;
  padding-right: 10px;
}
.search {
  position: absolute;
  top: 25px;
  width: 350px;
  max-height: 500px;
  background-color: #3d3d3d;
  z-index: 999;
  border-radius: 5px;
}
</style>
