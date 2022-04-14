<template>
  <div class="home">
    <div class="intro">
      <div class="like">
        <div class="likel ts">
          <div>
            <p>关注</p>
            <p>{{ gaun }}</p>
          </div>
          <div>
            <p>粉丝</p>
            <p>{{ fen }}</p>
          </div>
          <div>
            <p>获赞</p>
            <p>{{ zan }}</p>
          </div>
          <el-button
            v-if="ff"
            :color="stat.color"
            :style="'color:' + stat.textColor"
            @click="dian"
            >{{ stat.title }}</el-button
          >
        </div>
      </div>
      <div class="content ts">
        <h3>{{ userData.data.user.name }}</h3>
        <p>
          账号：<span> {{ userData.data.user.account }} </span>
        </p>
        <p>
          简介：<span> {{ userData.data.user.about }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {
  fetchUser,
  likeCount,
  collectCount,
  friendCount
} from '@/srevice/sign/sign'
import { attention, isAttention } from '@/srevice/workVideo'

const route = useRoute()
const store = useStore()
const userData = ref<any>({
  data: { user: { name: '', account: '', about: '' } }
})
const stat = ref({
  title: '关注',
  textColor: 'white',
  color: '#fe2c55'
})
const ff = ref(true)
if (store.state.user.u_id == route.params.u_id) {
  ff.value = false
}
const dian = async () => {
  console.log(stat.value)
  if (stat.value.title === '关注') {
    stat.value.title = '已关注'
    stat.value.textColor = '#404147'
    stat.value.color = '#e7e7ec'
    const aa = await attention(
      store.state.user.u_id,
      route.params.u_id,
      // @ts-ignore
      true
    )
  } else {
    stat.value.title = '关注'
    stat.value.textColor = 'white'
    stat.value.color = '#fe2c55'
    const aa = await attention(
      store.state.user.u_id,
      route.params.u_id,
      // @ts-ignore
      false
    )
  }
}
const zan = ref(0)
const gaun = ref(0)
const fen = ref(0)
const nn = async () => {
  const aa = (await isAttention(store.state.user.u_id, route.params.u_id)).data
    .state
  if (aa) {
    stat.value.title = '已关注'
    stat.value.textColor = '#404147'
    stat.value.color = '#e7e7ec'
  } else {
    stat.value.title = '关注'
    stat.value.textColor = 'white'
    stat.value.color = '#fe2c55'
  }
  userData.value = await fetchUser(route.params)
  zan.value = (
    await likeCount({ me: route.params.u_id, w_id: null })
  ).data.count
  gaun.value = (
    await friendCount({ me: route.params.u_id, who: null })
  ).data.count
  fen.value = (
    await friendCount({ me: null, who: route.params.u_id })
  ).data.count
}
nn()
</script>

<style scoped>
.home {
  width: 70%;
  min-width: 570px;
  height: 300px;
  background-color: var(--color);
}

.intro {
  width: 500px;
  height: 300px;
  min-width: 500px;
  margin: 0 0 0 56px;
}

.like {
  display: flex;
  width: 107%;
  justify-content: flex-end;
}

.likel {
  display: flex;
  flex-direction: row;
}

.likel > div {
  padding: 0 20px;
}
.ts {
  color: var(--text);
}
</style>
