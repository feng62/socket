<template>
  <div class="visual">
    <div class="c">
      <h2>作品分类数量</h2>
      <hr />
      <Pic :picData="picData"></Pic>
    </div>
    <div class="cc">
      <Map :picData="mapData"></Map>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Pic, Map } from '@/components/page-echarts'
import { picc, map } from '@/srevice/adminMain'

const picData = ref([])
const mapData = ref([])

const x = async () => {
  picData.value = (await picc()).data.list
  mapData.value = (await map()).data
  console.log(mapData.value)
}
x()
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'visual'
})
</script>

<style scoped>
.visual {
  width: 100%;
  height: 100%;
  background-color: #eff1f4;
  display: flex;
}
.c {
  width: 30%;
  height: 400px;
  background-color: #fff;
  box-shadow: 5px 5px 5px gray;
  border-radius: 3px;
  margin: 30px;
}
.cc {
  width: 60%;
  height: 400px;
  background-color: #fff;
  box-shadow: 5px 5px 5px gray;
  border-radius: 3px;
  margin: 30px;
}
h2 {
  padding: 20px;
}
</style>
