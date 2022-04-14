<template>
  <div class="NotFound">
    <Head></Head>
    <h1>404</h1>
  </div>
</template>

<script lang="ts" setup>
import Head from '@/components/page-head/src/head.vue'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NotFound'
})
</script>

<style scoped></style>
