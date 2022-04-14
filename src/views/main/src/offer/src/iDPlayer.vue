<template>
  <div class="dplayer" style="height: 638px">
    <info :item="item"></info>
    <info-but :item="item" @s="s" @x="x" ref="infoBut"></info-but>
    <div ref="videoRef" class="dplayer" id="ll" />
  </div>
</template>

<script lang="ts" setup>
import info from '@/views/main/src/offer/src/info.vue'
import InfoBut from '@/views/main/src/offer/src/infoBut.vue'
import { useStore } from 'vuex'
import { isLikeWork, isCollectWork } from '@/srevice/main/mian/offer'
import DPlayer from 'dplayer'

const props = defineProps({
  item: Object,
  o: Number,
  index: Number
})
const store = useStore()
const videoRef = ref<any>()
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

const infoBut = ref<HTMLElement>()
watchEffect(
  async () => {
    if (props.index === props.o) {
      if (window.localStorage.getItem('token')) {
        const is = (await isLikeWork(store.state.user.u_id, props.item.w_id))
          .data.state
        infoBut.value.isLike(is)
        const coll = (
          await isCollectWork(store.state.user.u_id, props.item.w_id)
        ).data.state
        infoBut.value.isCollect(coll)
      }
      db.seek(0)
      db.play()
    }
  },
  {
    flush: 'post'
  }
)
const emits = defineEmits(['s', 'x'])
const s = () => {
  emits('s')
}
const x = () => {
  emits('x')
}
</script>
<script lang="ts">
import {
  defineComponent,
  defineProps,
  ref,
  watchEffect,
  defineEmits
} from 'vue'
export default defineComponent({
  name: 'dplayer'
})
</script>

<style scoped>
.dplayer {
  width: 100%;
  height: 97%;
  margin-bottom: 30px;
  position: relative;
  border-radius: 3px;
}
.logo {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #ffffff;
  z-index: 10;
  top: 30px;
  left: 30px;
}
</style>
