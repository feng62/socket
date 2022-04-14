<template>
  <div class="workManage">
    <div class="search">
      <page-search
        :searchFormConfig="config"
        @update:modelValue="x"
      ></page-search>
    </div>
    <div class="content">
      <page-content :contentConfig="contentConfig" :listData="listData.list">
        <template #image="scope">
          <a :href="scope.row.video" target="_blank">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.image"
            ></el-image>
          </a>
        </template>
      </page-content>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { workData } from '@/srevice/adminMain'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { navZZ } from '@/srevice/main/navZ/navZ'
import PageContent from '@/components/page-content'
const config = ref()
const mode = ref()
const options = ref()
const x1 = async () => {
  mode.value = (await navZZ()).data.list
  options.value = mode.value.map((item, idx) => ({
    value: item.wt_type,
    title: item.wt_type + ' ' + item.icon
  }))
  config.value = searchFormConfig
  config.value.formItems[3].options = options.value
}
x1()
const listData = ref({})
const x = async (r) => {
  listData.value = (await workData(r)).data
  console.log(listData.value)
}
x({})
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'workManage'
})
</script>

<style scoped>
.workManage {
  height: calc(100vh - 100px);
}
.search {
  height: 280px;
  background-color: #fff;
}
.content {
  margin-top: 30px;
  height: 100px;
}
</style>
