<template>
  <div class="login">
    <div class="deng">
      <div>
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: bian === tab }"
          @click="butt(tab)"
        >
          {{ tab === 'phone' ? '账号登录' : '邮箱登录' }}
        </button>
      </div>
      <div class="fa">
        <keep-alive>
          <component :is="gg" v-model="dd" ref="loginfo"></component>
        </keep-alive>
        <div class="wang">
          <a href="/sign" target="_blank">账号注册</a>
          <a href="javascript:;">忘记密码？</a>
        </div>
        <button class="btn" @click="login">登录</button>
      </div>
    </div>
    <div class="image">
      <img ref="QRCodee" alt="" />
      <div v-if="dang" class="dang">
        <svg
          t="1645701646197"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1864"
          width="200"
          height="200"
        >
          <path
            d="M512 0C228.430769 0 0 228.430769 0 512s228.430769 512 512 512 512-228.430769 512-512S795.569231 0 512 0z m0 945.230769C271.753846 945.230769 78.769231 752.246154 78.769231 512S271.753846 78.769231 512 78.769231s433.230769 192.984615 433.230769 433.230769-192.984615 433.230769-433.230769 433.230769z"
            p-id="1865"
          ></path>
          <path
            d="M716.8 330.830769l-208.738462 248.123077c-15.753846 15.753846-43.323077 19.692308-59.076923 7.876923L299.323077 472.615385c-15.753846-11.815385-43.323077-7.876923-55.138462 7.876923-11.815385 15.753846-7.876923 43.323077 7.876923 55.138461l149.661539 114.215385c19.692308 15.753846 47.261538 23.630769 74.830769 23.630769 35.446154 0 70.892308-15.753846 94.523077-43.323077l208.738462-248.123077c15.753846-15.753846 11.815385-43.323077-3.938462-55.138461-19.692308-15.753846-43.323077-15.753846-59.076923 3.938461z"
            p-id="1866"
          ></path>
        </svg>
        <span>扫码成功</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QRCode } from '@/srevice/sign/sign'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import router from '@/router'

const router1 = useRouter()
const store = useStore()
const dang = ref(false)
const uuid = uuidv4()
let uuidd = ''
uuid.split('-').forEach((item) => {
  uuidd += item
})
new WebSocket('ws://localhost:8080/web/' + uuidd).onmessage = function (msg) {
  const data = JSON.parse(msg.data)
  if (data.state === '扫描成功') {
    dang.value = true
    console.log('data.state:' + data.state)
  }
  if (data.state === '确认登陆') {
    store.commit('loginModule/chengToken', data.data)
    localStorage.setItem('token', data.data.token)
    localStorage.setItem('user', JSON.stringify(data.data.user))
    console.log('确认登陆')
    router1.push({
      path: '/main'
    })
  }
}
const bian = ref('phone')
const gg = computed(() => bian.value)
const tabs = ['phone', 'mail']
const butt = (tab: any) => {
  bian.value = tab
}
const loginfo = ref<any>()
const login = () => {
  loginfo.value.login()
}

const QRCodee = ref<any>()
watchEffect(
  () => {
    VCOde()
  },
  {
    flush: 'post'
  }
)
const VCOde = async () => {
  let d = await QRCode({ name: uuidd })
  let binaryData = []
  binaryData.push(d)
  QRCodee.value.src = window.URL.createObjectURL(new Blob(binaryData)) //后端字节图片
}
</script>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
  onMounted,
  getCurrentInstance
} from 'vue'
import Phone from '@/views/login/phone.vue'
import Mail from '@/views/login/mail.vue'
export default defineComponent({
  name: 'login',
  components: { Phone, Mail }
})
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  /*background: #000;*/
  position: relative;
}
.image img {
  width: 100%;
}
.image .dang {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.icon {
  width: 30px;
  height: 30px;
  z-index: 20;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./img/img.png') no-repeat 100% 100%;
}
.deng {
  width: 500px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
.deng > div {
  width: 100%;
}
button {
  width: 50%;
  height: 50px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px 10px 0 0;
}
button :active {
  background-color: gray;
}
.fa {
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #bbb8b8;
}
.btn {
  width: 300px;
  height: 50px;
  background-color: #3c9bed;
  border-radius: 10px;
  color: white;
  margin-top: 30px;
}
.wang {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  margin-top: 30px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #3c9bed;
}
.active {
  background-color: #c5c4c4;
}
</style>
