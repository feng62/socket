<template>
  <li class="itemWorkData">
    <info :item="item"></info>
    <div ref="videoRef" class="dplayer" />
  </li>
</template>

<script lang="ts" setup>
import DPlayer from 'dplayer'
import Info from '@/views/main/src/offer/src/info.vue'
const props = defineProps({
  item: Object
})

const videoRef = ref<HTMLElement>()

let db = null
watchEffect(
  async () => {
    db = new DPlayer({
      container: videoRef.value,
      mutex: true,
      theme: '#b7daff',
      loop: true,
      lang: 'zh-cn',
      screenshot: true,
      hotkey: false,
      preload: 'auto',
      volume: 0.7,
      playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3],
      logo: '',
      video: {
        url: props.item.video,
        defaultQuality: 0,
        pic: props.item.image
      }
    })
  },
  {
    flush: 'post'
  }
)
</script>
<script lang="ts">
import { defineComponent, defineProps, ref, watchEffect } from 'vue'
export default defineComponent({
  name: 'itemWorkData'
})
</script>

<style scoped>
.dplayer {
  height: 500px;
}
li {
  width: 800px;
  height: 500px;
  position: relative;
}
</style>
