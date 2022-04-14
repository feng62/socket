<template>
  <div class="adminManage">
    <div class="search">
      <page-search
        :searchFormConfig="searchFormConfig"
        @update:modelValue="x"
      ></page-search>
    </div>

    <div class="content">
      <el-button @click="newStaff">新建</el-button>
      <page-content
        :contentConfig="contentConfig"
        :listData="listData.list"
        @handleEditClick="handleEditClick"
      >
      </page-content>
    </div>
    <el-dialog v-model="dialogEditVisible" title="编辑菜单">
      <page-edit
        ref="edit"
        :searchFormConfig="editFormConfig"
        v-model="formData"
      ></page-edit>
      <template #footer>
        <el-button @click="xiu">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="newStaffIs" title="编辑菜单">
      <page-edit
        ref="editNew"
        :searchFormConfig="newFormConfig1"
        v-model="newFormData"
      ></page-edit>
      <template #footer>
        <el-button @click="found">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageEdit from '@/components/page-edit'
import { IForm } from '@/dase-ui/form'
import { searchFormConfig } from './config/searchFormConfig'
import { editFormConfig } from './config/editFormConfig'
import { newFormConfig } from './config/newFormConfig'
import { contentConfig } from './config/content.config'
import { getAdmi, updataAdmi, getGrade, insertAdmi } from '@/srevice/adminMain'

const formData = ref({})
const newFormData = ref({})
const newFormConfig1 = ref<IForm>(newFormConfig)
const editNew = ref<HTMLElement>()
const options = ref<any>({})
const x1 = async (r) => {
  options.value = (await getGrade(r)).data.list
  newFormConfig1.value.formItems[6].options = options
  console.log(options.value)
  console.log(newFormConfig1.value)
}
x1({})
const edit = ref<HTMLElement>()
const dialogEditVisible = ref(false)
const newStaffIs = ref(false)
const listData = ref([])
const x = async (r) => {
  listData.value = (await getAdmi(r)).data
}
x({})
const newStaff = () => {
  newStaffIs.value = true
  const time = setInterval(() => {
    if (editNew.value != undefined) {
      clearInterval(time)
      editNew.value.x1()
    }
  }, 1)
}
const found = async () => {
  await insertAdmi(newFormData.value)
  x({})
  newStaffIs.value = false
}
const xiu = async () => {
  await updataAdmi(formData.value)
  x({})
  dialogEditVisible.value = false
}
const handleEditClick = (value) => {
  dialogEditVisible.value = true
  console.log('value', value)
  formData.value = value
  const time = setInterval(() => {
    if (edit.value != undefined) {
      clearInterval(time)
      edit.value.x()
    }
  }, 1)
}
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'adminManage'
})
</script>

<style scoped>
.adminManage {
  height: calc(100vh - 100px);
}
.search {
  height: 180px;
  background-color: #fff;
}
.content {
  margin-top: 30px;
  height: 100px;
  background-color: #fff;
}
</style>
