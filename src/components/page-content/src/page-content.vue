<template>
  <div class="page-content">
    <fg-table :contentConfig="contentConfig" :listData="listData">
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            :icon="Edit"
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            :icon="Delete"
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </fg-table>
  </div>
</template>

<script lang="ts" setup>
import FgTable from '@/dase-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'
const emits = defineEmits(['handleEditClick', 'handleDeleteClick'])
const props = defineProps({
  contentConfig: Object,
  listData: Object
})
const otherPropSlots = props.contentConfig.userData.filter((item: any) => {
  if (item.slotName === 'handler') return false
  return true
})
const handleEditClick = (data) => {
  emits('handleEditClick', data)
}
const handleDeleteClick = (data) => {
  emits('handleDeleteClick', data)
}
</script>
<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue'
export default defineComponent({
  name: 'page-content'
})
</script>

<style scoped></style>
