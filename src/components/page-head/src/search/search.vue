<template>
  <div class="search">
    <div class="clear" v-if="qing">
      <span
        class="span"
        style="font-size: 12px; margin: 5px; color: red"
        @click="sou"
        >清楚全部</span
      >
    </div>
    <template v-for="item in data" :key="item">
      <div class="title">
        <p v-html="item" @click="cha(item)"></p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import LocalCache from '@/utils/cache'
const emits = defineEmits(['update:modeValue'])
const props = defineProps({
  data: Object,
  qing: Boolean,
  modelValue: String
})
const router = useRouter()
const sou = () => {
  const sd = []
  LocalCache.setCache('cacheRecords', sd)
}
const cha = (item) => {
  let searchData = ''
  if (!props.qing) {
    new RegExp('(.*)<span style="color: red">(.*)</span>(.*)')
      .exec(item)
      .forEach((item, index, array) => {
        if (item != array[0]) searchData += item
      })
  } else {
    searchData = item
  }
  window.open('/search?q=' + searchData, '_blank')
}
</script>
<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue'
export default defineComponent({
  name: 'search'
})
</script>

<style scoped>
.search {
  color: white;
}
.clear {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
}
.title {
  width: 100%;
  height: 30px;
  padding-left: 15px;
}
</style>
