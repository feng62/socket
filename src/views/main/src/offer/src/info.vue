<template>
  <div class="info">
    <a :href="'/personal/' + item.user.u_id" target="_blank">
      <h4>{{ '@' + item.user.name }}</h4>
    </a>
    <p>{{ item.title }}</p>
    <a :href="'/video/' + item.w_id" class="sa" target="_blank">
      <h4>详情</h4>
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  item: Object
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'info'
})
</script>

<style scoped>
.info {
  position: absolute;
  bottom: 72px;
  left: 30px;
  width: 92%;
  height: 50px;
  /*background: #ad3434;*/
  z-index: 90;
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
p {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
}
.sa {
  float: right;
}
</style>
