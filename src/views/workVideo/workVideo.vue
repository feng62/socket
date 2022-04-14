<template>
  <div class="workVideo">
    <div class="head">
      <div class="h">
        <Head></Head>
      </div>
    </div>
    <div class="work">
      <div class="vplay">
        <w-player :item="work"></w-player>
      </div>
      <div class="info">
        <user-info :item="work"></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Head from '@/components/page-head/src/head.vue'
import WPlayer from '@/views/workVideo/src/wPlayer.vue'
import { oneWork } from '@/srevice/workVideo'
import UserInfo from '@/views/workVideo/src/userinfo.vue'
const route = useRoute()

const work = ref({})
const nn = async () => {
  work.value = (await oneWork(route.params.w_id)).data
}
nn()
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'workVideo'
})
</script>

<style scoped>
.head {
  width: 100%;
  height: 60px;
}
.h {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.work {
  display: flex;
  background-color: var(--color);
}
.vplay {
  width: 70%;
  background-color: var(--color);
  margin: 3px;
}
.info {
  width: 30%;
  height: 300px;
  background-color: var(--color);
  margin: 3px;
  min-width: 250px;
}
</style>
