import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import './assets/css/index.css'
// import dplayer from 'dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css

// import VideoPlayer from 'vue-video-player/src'
// import 'vue-video-player/src/custom-theme.css'
// import 'video.js/dist/video-js.css'

// import { v4 as uuidv4 } from 'uuid'
//
// const uuid = uuidv4()

// @ts-ignore
// const websocket = new WebSocket('ws://localhost:8080/web/' + uuid)()
const app = createApp(App)
globalRegister(app)
app.use(store)
app.use(router)
app.mount('#app')
