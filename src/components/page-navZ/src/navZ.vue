<template>
  <div class="nav-z">
    <button @click="kuan">dfsdfsdf</button>
    <div class="nnav">
      <template v-for="itme in mode.list" :key="itme.wt_id">
        <a :href="'/cai/' + itme.wt_id">
          <div :class="{ navItme: true, ss: iskuan }">
            <span id="nav-ico">{{ itme.icon }}</span>
            <div class="nav" @click="work(itme.wt_id)">{{ itme.wt_type }}</div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, RouteRecordRaw } from 'vue-router'
import { navZZ } from '@/srevice/main/navZ/navZ'
import home from '@/views/main/src/homme/homme.vue'

const mode = ref({})
const router = useRouter()
onBeforeMount(async () => {
  mode.value = (await navZZ()).data
})
const iskuan = ref(true)
const kuan = () => {
  iskuan.value = !iskuan.value
}

const work = (v: any) => {
  console.log(v)
}
</script>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'navZ'
})
</script>

<style scoped>
a {
  text-decoration: none;
}
.nav-z {
  width: 100%;
  height: calc(100% - 10%);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.nav-z::-webkit-scrollbar {
  display: none;
}
.nnav {
  height: 20px;
  /*padding: 10px 0;*/
}
.nav {
  white-space: nowrap;
  text-align: center;
  font-size: 1em;
}
.navItme {
  height: 60px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  /*justify-content: center;*/
  margin: 8px 18px 0px;
  align-items: center;
  color: #77777f;
}
.navItme:hover {
  color: white;
}

#nav-ico {
  margin: 0 10px;
}
@media (min-width: 1240px) {
  .navItme {
    flex-direction: row;
    margin: 8px 10px 0px;
  }
}

.ss {
  align-items: center;
  flex-direction: column;
  margin: 8px 30px 0px 0;
}
</style>
