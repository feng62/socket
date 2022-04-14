<template>
  <div class="wPlayer">
    <div class="video">
      <div class="svideo">
        <div ref="videoRef" class="dplayer" />
      </div>
      <div class="xinfo">
        <div class="title ts">{{ item.title }}</div>
        <div class="state">
          <div class="xin">
            <label :for="item.id">
              <input type="checkbox" ref="like" :id="item.id" class="w" />
              <svg
                t="1643082157367"
                class="icon zzz"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="200"
                height="200"
                @click="dian"
              >
                <path
                  d="M32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512L562.592 892.8a96 96 0 0 1-124.416-1.952l-308.16-270.688A278.976 278.976 0 0 1 32 407.584z"
                  p-id="1822"
                  id="heart"
                ></path>
              </svg>
              <span id="s1"> </span>
            </label>
          </div>
          <div class="xing">
            <label :for="item.id + 'sout'">
              <input
                type="checkbox"
                ref="collect"
                :id="item.id + 'sout'"
                class="g"
              />
              <svg
                t="1643177104799"
                class="icon coll"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1968"
                width="200"
                height="200"
                @click="dia"
              >
                <path
                  d="M509.606998 104.904235c-24.043602 0-45.922912 13.226233-56.177464 33.95637L356.189863 336.302419l-223.674269 32.54216c-22.983457 3.304256-42.100864 18.718317-49.481971 39.659255-7.381108 21.048385-1.812275 44.23241 14.431687 60.033281l163.916257 160.125931-38.011732 222.016513c-3.868097 22.408359 6.03239 44.819788 25.458835 57.94676 10.69662 7.116071 23.204491 10.784624 35.757388 10.784624 10.298554 0 20.663622-2.475378 30.055526-7.337105l194.987926-102.7205L704.662463 912.072815c9.369392 4.861728 19.712971 7.337105 29.990035 7.337105 12.57541 0 25.082258-3.668553 35.778878-10.784624 19.426445-13.126972 29.305443-35.538401 25.460882-57.94676l-38.012755-222.016513 163.937746-160.125931c16.22145-15.812127 21.810748-38.984896 14.408151-60.033281-7.402597-20.940938-26.51898-36.353976-49.503461-39.659255L663.04767 336.302419l-97.240695-197.441814C555.619962 118.131491 533.695626 104.904235 509.606998 104.904235L509.606998 104.904235z"
                  p-id="1969"
                  id="coll"
                ></path>
              </svg>
              <span id="s2"></span>
            </label>
          </div>
          <div class="download">
            <div @click="xiaVideo">
              <svg
                t="1647271333268"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1879"
                width="200"
                height="200"
              >
                <path
                  d="M828.975746 894.125047 190.189132 894.125047c-70.550823 0-127.753639-57.18542-127.753639-127.752616L62.435493 606.674243c0-17.634636 14.308891-31.933293 31.93227-31.933293l63.889099 0c17.634636 0 31.93227 14.298658 31.93227 31.933293l0 95.821369c0 35.282574 28.596292 63.877843 63.87682 63.877843L765.098927 766.373455c35.281551 0 63.87682-28.595268 63.87682-63.877843l0-95.821369c0-17.634636 14.298658-31.933293 31.943526-31.933293l63.877843 0c17.634636 0 31.933293 14.298658 31.933293 31.933293l0 159.699212C956.729385 836.939627 899.538849 894.125047 828.975746 894.125047L828.975746 894.125047zM249.938957 267.509636c12.921287-12.919241 33.884738-12.919241 46.807049 0l148.97087 148.971893L445.716876 94.89323c0-17.634636 14.300704-31.94762 31.933293-31.94762l63.875796 0c17.637706 0 31.945573 14.312984 31.945573 31.94762l0 321.588299 148.97087-148.971893c12.921287-12.919241 33.875528-12.919241 46.796816 0l46.814212 46.818305c12.921287 12.922311 12.921287 33.874505 0 46.807049L552.261471 624.930025c-1.140986 1.137916-21.664416 13.68365-42.315758 13.69286-20.87647 0.010233-41.878806-12.541641-43.020816-13.69286L203.121676 361.13499c-12.922311-12.933567-12.922311-33.884738 0-46.807049L249.938957 267.509636 249.938957 267.509636z"
                  p-id="1880"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import DPlayer from 'dplayer'
import {
  CollectWork,
  download,
  isCollectWork,
  isLikeWork,
  Like
} from '@/srevice/main/mian/offer'

const store = useStore()
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

    if (window.localStorage.getItem('token')) {
      const is = (await isLikeWork(store.state.user.u_id, props.item.w_id)).data
        .state
      isLike(is)
      const coll = (await isCollectWork(store.state.user.u_id, props.item.w_id))
        .data.state
      isCollect(coll)
    }
  },
  {
    flush: 'post'
  }
)
const like = ref<HTMLElement>()
const collect = ref<HTMLElement>()

const isLike = (is) => {
  // @ts-ignore
  like.value.checked = is
}
const isCollect = (is) => {
  // @ts-ignore
  collect.value.checked = is
}

let time: any = null
let ti: any = null
const dian = () => {
  clearTimeout(time)
  time = setTimeout(async () => {
    const li = await Like(
      store.state.user.u_id,
      props.item.w_id,
      // @ts-ignore
      like.value.checked
    )
  }, 1000)
}
const dia = () => {
  clearTimeout(ti)
  ti = setTimeout(async () => {
    const coll = await CollectWork(
      store.state.user.u_id,
      props.item.w_id,
      // @ts-ignore
      collect.value.checked
    )
  }, 1000)
}

const xiaVideo = async () => {
  const blob = new Blob([
    await download(
      props.item.user.u_id,
      props.item.w_id,
      props.item.user.account
    )
  ])
  if ('download' in document.createElement('a')) {
    const elink = document.createElement('a')
    elink.download = '下载.mp4'
    elink.style.display = 'none'
    elink.href = URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    // 释放URL对象
    URL.revokeObjectURL(elink.href)
    document.body.removeChild(elink)
  } else {
    navigator.msSaveBlob(blob, '下载.mp4')
  }
}
</script>
<script lang="ts">
import { defineComponent, defineProps, ref, watchEffect } from 'vue'
export default defineComponent({
  name: 'wPlayer'
})
</script>

<style scoped>
.wPlayer {
  display: flex;
  justify-content: flex-end;
}
.dplayer {
  height: 538px;
}
.video {
  width: 90%;
  margin: 40px 30px 0 0;
}
.state {
  margin: 15px 0;
  display: flex;
}
.icon {
  width: 30px;
  height: 30px;
}
.title {
  margin: 15px 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}
.download {
  margin-left: 30px;
}
.download path {
  fill: white;
}
.xin {
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  --c: red;
}
.xing {
  margin-left: 30px;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  --v: #f1ae0b;
}
.zzz {
  position: relative;
  z-index: 10;
}
.coll {
  position: relative;
  z-index: 10;
}
#heart {
  fill: aliceblue;
  stroke: var(--c);
  stroke-width: 60px;
  stroke-dasharray: 3075;
  stroke-dashoffset: 3075;
  stroke-linecap: round;
}
#coll {
  fill: aliceblue;
  stroke: var(--v);
}
#s1 {
  display: block;
  width: 15%;
  height: 15%;
  background: var(--c);
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  box-shadow: 0 -20px 0 var(--c), 0 20px 0 var(--c), -20px 0 0 var(--c),
    20px 0 0 var(--c), -15px -15px 0 var(--c), 15px -15px 0 var(--c),
    15px 15px 0 var(--c), -15px 15px 0 var(--c);
}
#s2 {
  display: block;
  width: 15%;
  height: 15%;
  background: var(--v);
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  box-shadow: 0 -20px 0 var(--v), 0 20px 0 var(--v), -20px 0 0 var(--v),
    20px 0 0 var(--v), -15px -15px 0 var(--v), 15px -15px 0 var(--v),
    15px 15px 0 var(--v), -15px 15px 0 var(--v);
}
.w,
.g {
  position: absolute;
  top: 33%;
  left: 33%;
}
.w:checked + .zzz #heart {
  animation: aa 1s linear forwards;
}
.w:checked ~ #s1 {
  animation: dd 0.5s ease-in-out forwards;
  animation-duration: 0.8s;
}
.w:checked + .zzz {
  animation: cc 1s ease-in-out forwards;
}

.g:checked + .coll #coll {
  animation: cll 0.6s linear forwards;
}
.g:checked ~ #s2 {
  animation: dd 0.5s ease-in-out forwards;
  animation-duration: 0.8s;
}
.g:checked + .coll {
  animation: cc 1s ease-in-out forwards;
}
@keyframes aa {
  0% {
    stroke-dashoffset: 3075;
  }
  80% {
    fill: #eee;
    stroke-dashoffset: 0;
  }
  100% {
    fill: var(--c);
    stroke-dashoffset: 3075;
  }
}
@keyframes cll {
  0% {
    stroke-dashoffset: 3075;
  }
  80% {
    fill: #eee;
    stroke-dashoffset: 0;
  }
  100% {
    fill: var(--v);
    stroke-dashoffset: 3075;
  }
}
@keyframes dd {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
}
@keyframes cc {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.ts {
  color: var(--text);
}
</style>
