<template>
  <div class="search">
    <div class="head">
      <Head></Head>
    </div>
    <div class="searchWorkData" @mousewheel="dd">
      <ul class="WorkData">
        <template v-for="item in Item" :key="item.u_id">
          <ItemWorkData :item="item"></ItemWorkData>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Head from '@/components/page-head'
import ItemWorkData from '@/views/search/cnps/itemVideo.vue'
import { searchWork } from '@/srevice/workVideo/index'

const router = useRouter()
const Item = ref([])
const q = router.currentRoute.value.query.q
const searchWorkData = async (qq, pageIndex) => {
  const data = (await searchWork(qq, pageIndex, 10)).data
  console.log(data)
  Item.value = [...Item.value, ...data.list]
  console.log(Item.value)
}
let i = 0
let ii = 0
const dd = (e) => {
  if (e.deltaY > 0) {
    i++
    ii++
    if (i === 10) {
      searchWorkData(q, ii)
      i = 0
    }
  }
}
searchWorkData(q, 0)
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'search'
})
</script>

<style scoped>
.search {
  padding-top: 70px;
}
.head {
  position: fixed;
  top: 0;
  z-index: 99;
}
.WorkData::-webkit-scrollbar {
  width: 10px;
}
.searchWorkData {
  width: 80%;
  margin: 0 auto;
}
.WorkData {
  list-style: none;
}
.WorkData li {
  margin-bottom: 10px;
}
</style>
