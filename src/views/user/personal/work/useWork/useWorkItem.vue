<template>
  <div class="useWorkItem">
    <ul>
      <template v-for="it in item" :key="it.image">
        <li>
          <a :href="'/video/' + it.w_id" target="_blank">
            <img :src="it.image" alt="" />
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: Object
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'useWorkItem'
})
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 196px;
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 20px 20px 0 0;
}
img {
  height: 100%;
}
</style>
