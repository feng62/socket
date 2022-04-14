<template>
  <div class="videoPaly">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="{
        playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0],
        autoplay: true,
        muted: false,
        loop: true,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '15:7',
        fluid: true,
        sources: [
          {
            type: 'video/mp4',
            src: item.video
          }
        ],
        poster: item.image,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }"
    ></video-player>
  </div>
</template>

<script lang="ts" setup>
// import { options } from './config'
import { reactive } from 'vue'

const props = defineProps({
  item: Object
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'videoPaly'
})
</script>

<style scoped></style>
