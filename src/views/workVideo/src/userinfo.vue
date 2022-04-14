<template>
  <div class="userInfo">
    <a :href="'/personal/' + item.user.u_id" target="_blank">
      <div class="pic">
        <img :src="item.user.head" />
      </div>
    </a>
    <div class="info ts">
      <p class="name ts">{{ item.user.name }}</p>
      <p class="name1">
        <span class="fen ts">粉丝</span>
        <span class="shu ts">1w</span>
        <span class="fen ts">关注</span>
        <span class="shu ts">15</span>
      </p>
    </div>
    <div class="gaun ts">
      <el-button
        v-if="ff"
        :color="stat.color"
        :style="'color:' + stat.textColor"
        @click="dian"
        >{{ stat.title }}</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { attention, isAttention } from '@/srevice/workVideo/index'

const store = useStore()
const props = defineProps({
  item: Object
})
const stat = ref({
  title: '关注',
  textColor: 'white',
  color: '#fe2c55'
})
const ff = ref(true)
if (store.state.user.u_id == props.item.user.u_id) {
  ff.value = false
}
const dddd = async () => {
  const aa = (await isAttention(store.state.user.u_id, props.item.user.u_id))
    .data.state
  if (aa) {
    stat.value.title = '已关注'
    stat.value.textColor = '#404147'
    stat.value.color = '#e7e7ec'
  } else {
    stat.value.title = '关注'
    stat.value.textColor = 'white'
    stat.value.color = '#fe2c55'
  }
}
dddd()
const dian = async () => {
  console.log(stat.value)
  if (stat.value.title === '关注') {
    stat.value.title = '已关注'
    stat.value.textColor = '#404147'
    stat.value.color = '#e7e7ec'
    const aa = await attention(
      store.state.user.u_id,
      props.item.user.u_id,
      // @ts-ignore
      true
    )
  } else {
    stat.value.title = '关注'
    stat.value.textColor = 'white'
    stat.value.color = '#fe2c55'
    const aa = await attention(
      store.state.user.u_id,
      props.item.user.u_id,
      // @ts-ignore
      false
    )
  }
}
</script>
<script lang="ts">
import { defineComponent, defineProps, ref } from 'vue'
export default defineComponent({
  name: 'userInfo'
})
</script>

<style scoped>
.userInfo {
  width: 60%;
  height: 80px;
  display: flex;
  margin: 30px;
  align-items: center;
}
.pic {
  min-width: 60px;
  min-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(68, 32, 32, 0.36);
}
.pic img {
  width: 100%;
  height: 100%;
}
.info {
  min-width: 100px;
  flex: 1;
  height: 40px;
  margin: 0 8px;
}
.gaun {
}
.name {
  font-size: 14px;
  font-weight: 500;
}
.fen {
  font-size: 12px;
  font-weight: 400;
}
.shu {
  color: #2f3035;
  font-size: 12px;
  font-weight: 600;
}
.ts {
  color: var(--text);
}
</style>
