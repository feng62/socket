<template>
  <div class="">
    <el-row>
      <el-col>
        <!--            <div class="logo">-->
        <!--              <img class="img" src="~@/assets/img/favicon.ico" alt="logo" />-->
        <!--            </div>-->
        <el-menu
          active-text-color="#ffd04b"
          background-color="#001529"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
          <template v-for="item in asid" :key="item.title">
            <el-sub-menu :index="item.index">
              <template #title>{{ item.title }}</template>
              <el-menu-item-group>
                <template v-for="it in item.context" :key="it">
                  <el-menu-item :index="it.index" :route="it.router">{{
                    it.title
                  }}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { aside } from '../config/config'
const asid = ref({})
asid.value = aside
if (asid.value[2] === undefined) {
  asid.value.push({
    index: '3',
    title: '权限管理',
    context: [
      {
        index: '3-1',
        title: '管理员管理',
        router: 'adminManage'
      }
    ]
  })
}
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: ''
})
</script>

<style scoped></style>
