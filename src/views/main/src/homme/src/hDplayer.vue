<template>
  <div class="hDplayer">
    <div class="dplayer" ref="videoRef" id="klkl"></div>
  </div>
</template>

<script lang="ts" setup>
import DPlayer from 'dplayer'

const props = defineProps({
  item: Object
})

const videoRef = ref<HTMLElement>()

let db = null
watchEffect(
  () => {
    db = new DPlayer({
      container: videoRef.value,
      mutex: true,
      theme: '#b7daff',
      loop: true,
      lang: 'zh-cn',
      screenshot: true,
      hotkey: false,
      preload: 'auto',
      volume: 0,
      playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3],
      logo: '',
      video: {
        url: props.item.video,
        defaultQuality: 0,
        pic: props.item.image
      },
      highlight: [
        {
          text: '10M',
          time: 6
        },
        {
          text: '20M',
          time: 12
        }
      ]
    })
    db.play()
    db.volume(0, true, false)
  },
  {
    flush: 'post'
  }
)
</script>
<script lang="ts">
import { defineComponent, watchEffect, ref, defineProps } from 'vue'
export default defineComponent({
  name: 'hDplayer'
})
</script>

<style scoped>
.hDplayer {
  width: 100%;
  height: 165px;
}
.dplayer {
  width: 100%;
  height: 100%;
}
.dplayer .dplayer-controller {
  display: none;
}
</style>
