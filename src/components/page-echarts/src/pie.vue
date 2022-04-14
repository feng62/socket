<template>
  <div class="pic">
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
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.picData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
<script lang="ts">
import { defineComponent, computed, defineProps } from 'vue'
export default defineComponent({
  name: 'pic'
})
</script>

<style scoped></style>
