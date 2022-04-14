<template>
  <div class="map">
    <h2>这周作品发布</h2>
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script lang="ts" setup>
import BaseEchart from '@/dase-ui/echart'

const props = defineProps({
  picData: Object
})

const options = computed(() => {
  return {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.picData.typeData
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.picData.timeData
    },
    yAxis: {
      type: 'value'
    },
    series: props.picData.series
  }
})
</script>
<script lang="ts">
import { defineComponent, computed, defineProps } from 'vue'
export default defineComponent({
  name: 'map1'
})
</script>

<style scoped></style>
