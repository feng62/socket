<template>
  <div class="userManage">
    <div class="search">
      <page-search
        :searchFormConfig="searchFormConfig"
        @update:modelValue="x"
      ></page-search>
    </div>
    <div class="content">
      <page-content :contentConfig="contentConfig" :listData="listData.list">
        <template #image="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.head"
          ></el-image>
        </template>
      </page-content>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { searchFormConfig } from './config/config'
import { contentConfig } from './config/content.config'
import { userList } from '@/srevice/adminMain'
const listData = ref({})
const x = async (r) => {
  listData.value = (await userList(r)).data
}
x({})
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'userManage'
})
</script>

<style scoped>
.userManage {
  height: 100vh;
}
.search {
  width: 100%;
  height: 200px;
  background-color: #fff;
  margin-bottom: 20px;
}
.content {
  width: 100%;
  height: 900px;
  background-color: #fff;
}
</style>
