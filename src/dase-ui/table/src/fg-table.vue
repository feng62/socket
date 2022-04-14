<template>
  <div class="fg-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="item in contentConfig.userData" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  contentConfig: Object,
  listData: Object
})
</script>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
  name: 'fg-table'
})
</script>

<style scoped></style>
