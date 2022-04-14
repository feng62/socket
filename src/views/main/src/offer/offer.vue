<template>
  <div class="offer">
    <div class="tedt">
      <div
        class="test"
        style="transform: translate3d(0px, -12px, 0px)"
        ref="test"
        @mousewheel.prevent="dd"
      >
        <template
          v-for="(item, index) in $store.state.mainModule.offerWorkList"
          :key="item.video"
        >
          <iDPlayer :item="item" :index="index" :o="o" @s="s" @x="x"></iDPlayer>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import iDPlayer from '@/views/main/src/offer/src/iDPlayer.vue'
import { offer } from '@/srevice/main/mian'

const test = ref<HTMLElement>()
const store = useStore()
store.dispatch('mainModule/getOfferList', {})
let i = -12
const o = ref(0)
const dd = (e) => {
  // console.log(e.deltaY < 0 ? '上' : '下')
  if (e.deltaY < 0) {
    s()
  } else {
    x()
  }
}
const s = () => {
  if (i > -50) return
  i += 668
  // console.log(i)
  test.value.setAttribute(
    'style',
    'transform: translate3d(0px, ' + i + 'px, 0px);'
  )
  o.value -= 1
}
const x = () => {
  i -= 668
  // console.log(i)
  test.value.setAttribute(
    'style',
    'transform: translate3d(0px, ' + i + 'px, 0px);'
  )
  o.value += 1
  if (store.state.mainModule.offerWorkList.length - 5 === o.value) {
    store.dispatch('mainModule/getOfferList', {})
  }
}
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'offer'
})
</script>

<style scoped>
.offer {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
}
.tedt {
  width: 96%;
  position: absolute;
}
.test {
  width: 100%;
  /*width: 50%;*/
  padding: 30px 30px 15px 30px;
  background: var(--color);
  transition-duration: 250ms;
}
::-webkit-scrollbar {
  width: 0px;
}

/*::-webkit-scrollbar-thumb {*/
/*  background-color: #b2b2b2;*/
/*  border-radius: 3px;*/
/*}*/
/*::-webkit-scrollbar-track {*/
/*  background: #ffffff;*/
/*}*/
</style>
