<template>
  <div class="workTypeManage">
    <el-button @click="insert">新建</el-button>
    <div class="content">
      <page-content
        :contentConfig="contentConfig"
        :listData="listData.list"
        @handleEditClick="handleEditClick"
        @handleDeleteClick="handleDeleteClick"
      ></page-content>
    </div>
    <el-dialog v-model="dialogEditVisible" title="编辑菜单">
      <div class="edit">
        <page-search
          ref="ddd"
          :searchFormConfig="searchFormConfig"
          v-model="formData"
          @update:data="xx"
        ></page-search>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogEditVisible = false">取消</el-button>
          <el-button type="primary" @click="yes">{{ but.title }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { contentConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import {
  workTypeData,
  workTypeUpdate,
  workTypeInsert
} from '@/srevice/adminMain'
import FgForm from '@/dase-ui/form'
import PageSearch from '@/components/page-search/src/page-search.vue'

const ddd = ref<HTMLElement>()
const dialogEditVisible = ref(false)
const formData = ref()
const but = ref({ title: '', sb: '' })
const handleEditClick = (data) => {
  formData.value = data
  but.value = { title: '确定', sb: 'Edit' }
  const time = setInterval(() => {
    if (ddd.value != undefined) {
      clearInterval(time)
      ddd.value.childMethod()
    }
  }, 1)
  dialogEditVisible.value = true
}
const handleDeleteClick = (data) => {
  console.log(data)
}
const insert = () => {
  but.value = { title: '添加', sb: 'Insert' }
  const time = setInterval(() => {
    if (ddd.value != undefined) {
      clearInterval(time)
      ddd.value.c()
    }
  }, 1)
  dialogEditVisible.value = true
}
const yes = async () => {
  if (but.value.sb === 'Edit') {
    const time = setInterval(() => {
      if (ddd.value != undefined) {
        clearInterval(time)
        ddd.value.yes()
      }
    }, 1)
  } else if (but.value.sb === 'Insert') {
    console.log('Insert')
    const time = setInterval(() => {
      if (ddd.value != undefined) {
        clearInterval(time)
        ddd.value.yes()
      }
    }, 1)
    console.log(formData.value)
  }
  dialogEditVisible.value = false
}
const xx = async (r) => {
  if (but.value.sb === 'Edit') {
    const ss = (await workTypeUpdate(r)).message
    console.log(ss)
  } else if (but.value.sb === 'Insert') {
    const ss = (await workTypeInsert(r)).message
    console.log(ss)
  }
  x({})
  ddd.value.c()
}
const listData = ref({})
const x = async (r) => {
  listData.value = (await workTypeData(r)).data
}
x({})
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'workTypeManage'
})
</script>

<style scoped>
.workTypeManage {
  height: calc(100vh - 100px);
  background-color: #fff;
}
.content {
  padding: 30px;
}
.edit {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
