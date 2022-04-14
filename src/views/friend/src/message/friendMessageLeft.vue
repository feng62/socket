<template>
  <div class="friendMessageLeft">
    <div class="content">
      <div class="photo">
        <img :src="use.head" alt="" />
      </div>
      <!--      <span class="message"></span>-->
      <p class="mas">{{ item.message }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object
  },
  use: Object
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'friendMessageLeft'
})
</script>

<style scoped>
.friendMessageLeft {
  min-width: 500px;
  padding: 50px 0;
  clear: both;
}
.content {
  position: relative;
}
p {
  position: absolute;
  left: 50px;
  float: left;
}
.mas {
  margin: 0 0.4rem;
  padding: 0.5rem;
  background: #fff;
  position: relative;
  border-radius: 0.2rem;
  max-width: 30rem;
  min-height: 0.8rem;
}
.photo {
  width: 36px;
  height: 36px;
  background-color: #6eefd9;
  position: absolute;
  left: 5px;
  border-radius: 50%;
}
img {
  width: 100%;
}
</style>
