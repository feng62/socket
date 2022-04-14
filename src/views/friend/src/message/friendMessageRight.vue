<template>
  <div class="friendMessageRight">
    <div class="content">
      <div class="photo">
        <img :src="$store.state.user.head" alt="" />
      </div>
      <!--      <span class="message">{{ item.message }}</span>-->
      <p class="mas">{{ item.message }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object
  }
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'friendMessageRight'
})
</script>

<style scoped>
.friendMessageRight {
  min-width: 500px;
  padding: 50px 0;
  clear: both;
}
.content {
  position: relative;
}
p {
  position: absolute;
  right: 50px;
  top: 0;
  float: right;
}
.mas {
  margin: 0 0.4rem;
  padding: 0.5rem;
  background: #298cff;
  position: relative;
  border-radius: 0.2rem;
  max-width: 50rem;
  min-height: 0.8rem;
  color: white;
}
.photo {
  width: 36px;
  height: 36px;
  background-color: #74fa8b;
  position: absolute;
  right: 5px;
  border-radius: 50%;
}
img {
  width: 100%;
}
</style>
