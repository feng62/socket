<template>
  <div class="head">
    <slot name="logo"></slot>
    <div class="search">
      <HeadSearch></HeadSearch>
    </div>
    <div class="bar">
      <div class="darTest">
        <div class="dartex" style="display: none">
          <ul>
            <a href="/main/home"><li>首页</li></a>
            <a href="/main"><li>推荐</li></a>
            <a href="/main/relate"><li>关注</li></a>
          </ul>
        </div>
      </div>
      <div class="fabu" style="display: block">
        <div class="fabu-img" ref="fabuImg"></div>
        <a href="/release">
          <div class="fabuT" @mouseover.stop="dsds" @mouseleave.stop="ddd">
            发布视频
          </div>
        </a>
      </div>
      <div class="enter" v-if="deng">
        <div class="test">
          <a href="/friend" target="_blank">
            <span></span><span>{{ allUnread }}</span>
          </a>
        </div>
        <div class="photo">
          <div class="pic" @click="personal">
            <img
              :src="$store.state.loginModule.user.head"
              alt=""
            /><span></span>
            <div class="intro">
              <div class="vb"></div>
              <li @click.stop="personal">个人中心</li>
              <li @click.stop="loginOut">退出登录</li>
            </div>
          </div>
          <div class="name">
            <span class="name">{{ $store.state.loginModule.user.name }}</span>
          </div>
          <div class="listan">
            <svg
              width="32"
              height="32"
              fill="#4F5168"
              xmlns="http://www.w3.org/2000/svg"
              class="tI80-Ts9 mwTN0H3T _2XfniFUM"
              viewBox="0 0 36 36"
            >
              <path
                d="M9 24.85c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 24.85zM9 18.1c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 18.1zM9 11.35c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 11.35z"
                fill="#2F3035"
              ></path>
            </svg>
            <div class="listb">
              <ul>
                <a href="/main/home"><li>首页</li></a>
                <a href="/main"><li>推荐</li></a>
                <a href="/main/relate"><li>关注</li></a>
              </ul>
            </div>
            <div class="lis"></div>
          </div>
        </div>
      </div>
      <div v-else class="listS">
        <div class="but">
          <a href="/login">登录</a>
        </div>
        <div class="listan">
          <svg
            width="32"
            height="32"
            fill="#4F5168"
            xmlns="http://www.w3.org/2000/svg"
            class="tI80-Ts9 mwTN0H3T _2XfniFUM"
            viewBox="0 0 36 36"
          >
            <path
              d="M9 24.85c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 24.85zM9 18.1c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 18.1zM9 11.35c0-.746.604-1.35 1.35-1.35h15.3a1.35 1.35 0 110 2.7h-15.3A1.35 1.35 0 019 11.35z"
              fill="#2F3035"
            ></path>
          </svg>
          <div class="listb">
            <ul>
              <li>首页</li>
              <li>推荐</li>
              <li>关注</li>
            </ul>
          </div>
          <div class="lis"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { LoginOut } from '@/srevice/main/head/head'
import HeadSearch from './search/head-search.vue'

const use = {}
const router = useRouter()
const store = useStore()
const deng = ref(false)
const item = localStorage.getItem('token')
const user = localStorage.getItem('user')
if (item) {
  deng.value = true
  use['token'] = item
  use['user'] = JSON.parse(user)
  store.commit('loginModule/chengToken', use)
  if (store.state.stomp === undefined) {
    store.dispatch('loginModule/connect') //链接websocket
  }
}

const loginOut = async () => {
  const data = await LoginOut()
  console.log(data)
  if (data.message === '退出成功' || data.message === '登陆过期！') {
    await router.push({
      path: '/login'
    })
  }
  localStorage.clear()
}
const personal = () => {
  const resolve = router.resolve({
    path: '/personal/' + JSON.parse(user).u_id
  })
  window.open(resolve.href, '_blank') //
}
const allUnread = computed(() => store.getters['friendModule/allUnread'])
const fabuImg = ref<any>()

const dsds = () => {
  let q = 0
  console.log(fabuImg.value)
  const time = setInterval(() => {
    fabuImg.value.setAttribute('style', 'background-position:0 -' + q + 'px;')
    q += 34.75
    if (q > 278) {
      q = 0
      clearInterval(time)
    }
  }, 22)
}
const ddd = () => {
  fabuImg.value.setAttribute('style', 'background-position:0 0px;')
}
</script>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'navZ'
})
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
a > span {
  color: white;
}
.test {
  width: 100px;
  height: 100%;
  background-color: var(--color);
}
.head {
  width: 100%;
  height: 70px;
  background-color: var(--color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 725px;
}

.bar {
  width: calc(100% - 500px);
  height: 100%;
  background-color: var(--color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.enter {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.photo {
  width: 103px;
  height: 100%;
  background-color: var(--color);
  color: #77777f;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.pic {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--color);
  line-height: 35px;
  margin-top: 20px;
}
.pic > img {
  width: 100%;
}
.search {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro {
  background-color: var(--color);
  list-style: none;
  position: absolute;
  width: 100px;
  left: -60px;
  bottom: -120px;
  font-size: 16px;
  border-radius: 10px;
  z-index: 99;
  cursor: pointer;
  display: none;
}
.intro > li {
  height: 60px;
  line-height: 60px;
}

.vb {
  width: 20px;
  height: 20px;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  right: 12px;
  top: -15px;
}
.pic:hover .intro {
  display: block !important;
}
.pic:hover .vb {
  display: block !important;
}
.name {
  display: none;
  width: 50px;
  position: absolute;
  color: #ffffff;
  top: 13px;
  left: 20px;
}
.but {
  width: 35px;
  height: 35px;
  background-color: crimson;
  margin: 20px 10px 0 0;
  border-radius: 50%;
  font-size: 12px;
}
.but > a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.test {
  display: flex;
  justify-content: center;
  align-items: center;
}
.test > a {
  color: black;
  text-decoration: none;
}
.darTest {
  width: 50%;
  height: 100%;
  display: flex;
}
.darTest > ul {
  display: flex;
}
.darTest li {
  text-align: center;
  width: 50px;
  height: 20px;
  list-style: none;
  padding: 25px 43px;
}
.fabu {
  width: 150px;
  height: 41px;
  background: #9a7272;
  display: none;
  position: relative;
  margin: 10px 10px 0px 0px;
}
.fabu-img {
  width: 40px;
  height: 40px;
  background-image: url('http://localhost:8080/ReallyShare/project/image/1.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  margin-top: -3px;
}
.fabuT {
  width: 100%;
  height: 100%;
  min-width: 137px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
}
.listS {
  display: flex;
}
.listan {
  width: 30px;
  height: 30px;
  background: var(--color);
}
.dartex {
  width: 100%;
  height: 100%;
}
.listan {
  width: 35px;
  height: 35px;
  background-color: #eff0f3;
  margin: 20px 10px 0 0;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  position: relative;
}

.listb li {
  list-style: none;
  line-height: 50px;
}
.lis {
  width: 33px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 0;
  background: transparent;
  display: none;
}
.listb {
  background: #fff;
  position: absolute;
  top: 45px;
  right: 0;
  font-size: 16px;
  width: 100px;
  height: 150px;
  border-radius: 5px;
  display: none;
  z-index: 99;
}
.listan:hover .listb {
  display: block;
}
.listan:hover .lis {
  display: block;
}
@media (min-width: 1240px) {
  .dartex {
    display: block !important;
  }
  .darTest ul {
    display: flex;
  }
  .but {
    width: 150px;
    height: 50%;
    background-color: crimson;
    margin: 20px 30px 0 0;
    border-radius: 5px;
  }
  .listan {
    display: none;
  }
  .fabu {
    width: 130px;
  }
  .name {
    display: block;
  }
  .test {
    width: 43px;
    min-width: 0;
  }
}
</style>
