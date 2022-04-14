<template>
  <div
    class="relate"
    style="
      flex: 1 1 0%;
      display: flex;
      flex-direction: row-reverse;
      overflow-y: scroll;
      height: 100%;
    "
  >
    <div class="listImg">
      <ul class="list" @mousewheel="dd">
        <template
          v-for="item in $store.state.mainModule.relateWorkList"
          :key="item.video"
        >
          <li-item :item="item"></li-item>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LiItem from '@/views/main/src/homme/src/liItem.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
store.dispatch('mainModule/getRelateWorkList', store.state.user.u_id)
console.log()
let i = 0
const dd = (e) => {
  // console.log(e.deltaY < 0 ? '上' : '下')
  if (e.deltaY > 0) {
    i++
    if (i === 8) {
      store.dispatch('mainModule/getRelateWorkList', store.state.user.u_id)
      i = 0
    }
  }
}
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'relate'
})
</script>

<style scoped>
.homme {
  width: 100%;
  height: 100%;
}
.listImg {
  margin: 20px;
  display: flex;
}
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
}
.list > li {
  min-width: 247px;
  margin: 10px;
}
.te {
  width: 248px;
  height: 234px;
  overflow: hidden;
}
.image {
  height: 70%;
  display: flex;
  justify-content: center;
}
img {
  height: 100%;
}
@media (min-width: 1255px) {
  .te {
    width: 254px;
  }
}
@media (min-width: 1255px) {
  .te {
    width: 246px;
  }
}
</style>
