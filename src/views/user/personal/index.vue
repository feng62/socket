<template>
  <div class="personal">
    <div class="head">
      <Head></Head>
    </div>
    <div class="Pbody">
      <div
        class="backdrop"
        :style="{
          backgroundImage:
            'url(http://localhost:8080/img/%E6%B5%B7%E7%90%B4%E7%83%9F.png)',
          backgroundSize: cover
        }"
      >
        <div class="photo">
          <img :src="userData.data.user.head" alt="" />
        </div>
      </div>
      <div class="Mbody">
        <PageHome></PageHome>
        <div class="work">
          <work></work>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Head from '@/components/page-head'
import PageHome from '@/components/page-home'
import work from './work/work.vue'
import { useRoute } from 'vue-router'
import { fetchUser } from '@/srevice/sign/sign'

const route = useRoute()
const userData = ref<any>({
  data: { user: { name: '', account: '', about: '', head: '' } }
})
const nn = async () => {
  userData.value = await fetchUser(route.params)
}
nn()
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'personal'
})
</script>

<style scoped>
.personal {
  width: 100%;
  height: 100%;
  background: var(--color);
}
.head {
  position: fixed;
  top: 0;
  z-index: 20;
}
.Pbody {
  width: 100%;
  height: 90%;
  background-color: #161722;
}
.backdrop {
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: 0 -184px;
  position: relative;
}
.photo {
  width: 126px;
  height: 126px;
  /*background-color: #544545;*/
  position: absolute;
  bottom: -30px;
  left: 200px;
  border-radius: 50%;
}
.photo > img {
  width: 100%;
}
.Mbody {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color);
}
.work {
  width: 100%;
  height: 100%;
  padding-left: 20px;
}

@media (min-width: 1240px) {
  .Mbody {
    flex-direction: row;
  }
  .work {
    padding: 0;
    box-shadow: 20px 0px 20px 20px black;
  }
}
</style>
