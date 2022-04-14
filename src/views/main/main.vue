<template>
  <div class="main">
    <div class="navZ">
      <div class="logo"></div>
      <nav-z></nav-z>
    </div>
    <div class="navY">
      <div class="head">
        <Head></Head>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import navZ from '@/components/page-navZ'
import Head from '@/components/page-head'
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'mainn'
})
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  min-width: 789px;
  display: flex;
  flex-wrap: nowrap;
  background-color: var(--color);
}
.navZ {
  width: 8%;
  height: 100%;
  background-color: #060716;
  position: relative;
  min-width: 70px;
}
.navY {
  width: 92%;
  height: 100%;
  background-color: var(--color);
}
.head {
  width: 100%;
  height: 70px;
  background-color: var(--color);

  border-bottom: 2px #23242e solid;
}
.logo {
  width: 100%;
  height: 70px;
  background-color: #060716;
}
.content {
  width: 100%;
  height: calc(100% - 70px);
  background-color: var(--color);
}
</style>
