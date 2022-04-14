<template>
  <div class="adminMain">
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Menu from '@/views/adminMain/cnps/menu.vue'

// const router = useRouter()
// router.addRoute('adminMain', {
//   path: '/adminManage',
//   name: 'adminManage',
//   component: () =>
//     import('@/views/adminMain/cnps/manage/adminManage/adminManage.vue')
// })
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'adminMain'
})
</script>

<style scoped>
.el-aside {
  background: #0c2135;
  height: 100vh !important;
}
.el-col {
  max-width: 100% !important;
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
.el-submenu {
  background-color: #001529 !important;
}
.el-menu-item {
  padding-left: 50px !important;
  background-color: #0c2135 !important;
}
.el-sub-menu__title {
  width: 200px !important;
}
.el-sub-menu__icon-arrow {
  width: 30px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
