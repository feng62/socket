<template>
  <div class="FVideo">
    <!--    <video ref="ll" controls autoplay loop muted height="500" @timeupdate="dd">
      <source
        class="dd"
        :src="BASE_URL1 + '/ReallyShare/user/1/work/1/cat.mp4'"
        type="video/mp4"
      />
    </video>-->
    <!--    <vue3-video-play-->
    <!--      v-bind="options"-->
    <!--      @play="onPlay"-->
    <!--      @pause="onPause"-->
    <!--      @timeupdate="onTimeupdate"-->
    <!--      @canplay="onCanplay"-->
    <!--    />-->
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    >
    </video-player>
  </div>
</template>

<script lang="ts" setup>
import { BASE_URL1 } from '@/srevice/request/config'
/*const options = reactive({
  width: '800px', //播放器高度
  height: '450px', //播放器高度
  color: '#b5eef3', //主题色
  // muted: false, //静音
  // webFullScreen: false,
  currentTime: 60,
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0', '16'], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 1, //默认音量大小
  control: true, //是否显示控制器
  title: '', //视频名称
  src: 'http://localhost:8080/ReallyShare/user/1/work/1/cat.mp4', //视频源
  poster: '', //封面
  controlBtns: [
    'audioTrack',
    'quality',
    'speedRate',
    'volume',
    'setting',
    'pip',
    'pageFullScreen',
    'fullScreen'
  ]
})
const onPlay = (ev) => {
  console.log(ev)
}
const onPause = (ev) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}*/

const playerOptions = reactive({
  playbackRates: [0.5, 1.0, 1.5, 2.0],
  //如果true,浏览器准备好时开始回放。
  autoplay: true,
  // 默认情况下将会消除任何音频。
  muted: false,
  // 导致视频一结束就重新开始。
  loop: true,
  // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
  preload: 'auto',
  language: 'zh-CN',
  // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
  aspectRatio: '9:16',
  // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
  fluid: true,
  sources: [
    {
      //类型
      type: 'video/mp4',
      //url地址
      src: 'http://localhost:8080/ReallyShare/user/1/work/1/cat.mp4'
    }
  ],
  //你的封面地址
  poster: '',
  //允许覆盖Video.js无法播放媒体源时显示的默认信息。
  notSupportedMessage: '此视频暂无法播放，请稍后再试',
  controlBar: {
    timeDivider: true,
    durationDisplay: true,
    remainingTimeDisplay: false,
    //全屏按钮
    fullscreenToggle: true
  }
})
</script>
<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
export default defineComponent({
  name: 'FVideo'
})
</script>

<style scoped>
.FVideo {
  width: 100%;
  height: 100%;
}
.video-player {
}
</style>
