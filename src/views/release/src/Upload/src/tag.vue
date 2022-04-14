<template>
  <div class="tag">
    <div class="txt1">{{ title }}</div>
    <div class="txt2">{{ context }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  context: String
})
const x = () => {
  console.log('asdasd')
}
function testLog() {
  console.log('11')
  return '22'
}
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'tag'
})
</script>

<style scoped>
.tag {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px dashed #d9d9d9;
  padding: 15px 0 0 15px;
  margin: 5px;
}
.txt1 {
  font-size: 16px;
  font-weight: 900;
  color: black;
}
.tag:hover {
  border: 1px dashed #409eff;
}
</style>
