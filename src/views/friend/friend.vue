<template>
  <div class="friend">
    <div class="head">
      <Head></Head>
    </div>
    <div class="news">
      <div class="name">
        <h1>{{ name.name }}</h1>
      </div>
      <div class="content">
        <FriendList @user="user"></FriendList>
      </div>
      <div class="matter">
        <div class="text">
          <friendMessage :use="name"></friendMessage>
        </div>
        <div class="send">
          <!--          <input type="text" />-->
          <textarea ref="message" cols="150" rows="7"></textarea>
          <button @click="send">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Head from '@/components/page-head'
import FriendList from './src/friendList.vue'
import friendMessage from '@/views/friend/src/message/friendMessage.vue'
import { useStore } from 'vuex'
const name = ref({})
const message = ref<any>()
const user = (item) => {
  console.log(item)
  name.value = item
}
const store = useStore()
const send = () => {
  let ddd = {
    from: store.state.loginModule.user.u_id,
    // @ts-ignore
    to: name.value.u_id,
    message: message.value.value,
    type: 'sb'
  }
  // @ts-ignore
  if (name.value.u_id == undefined) {
    alert('聊天人不能位空')
    return
  }
  // @ts-ignore
  if (name.value.state === 'grayscale(100%)') {
    alert('聊天人不在线')
    return
  }
  store.state.loginModule.stomp.send(JSON.stringify(ddd))
  ddd['unread'] = 0
  ddd['time'] = new Date()
  store.commit('friendModule/addMessage', ddd)
}
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'friend'
})
</script>

<style scoped>
.friend {
  width: 100%;
  height: 100%;
}
.content {
  width: 300px;
  height: calc(100% - 70px);
  background-color: var(--color);
}
.news {
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.name {
  width: 100%;
  height: 70px;
  color: var(--text);
  background-color: var(--color);
}
.name > h1 {
  text-align: center;
}
.matter {
  width: calc(100% - 300px);
  height: calc(100% - 70px);
  box-shadow: -25px 20px 50px 5px black;
}
.text {
  width: 100%;
  height: calc(100% - 150px);
  background-color: var(--color);
}
.send {
  width: 100%;
  height: 150px;
  background-color: var(--color);
}
</style>
