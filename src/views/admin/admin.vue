<template>
  <div class="admin">
    <div class="login">
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="账号登录"
          ><Account ref="account"></Account>
        </el-tab-pane>
        <el-tab-pane label="邮箱登录"></el-tab-pane>
      </el-tabs>
      <el-button type="primary" class="login-but" @click="dd">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Account from '@/views/admin/login/account.vue'

const account = ref<HTMLElement>()

const dd = () => {
  account.value.deng()
}
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'admin'
})
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 300px;
  height: 170px;
  background: #6be099;
}
.login-but {
  margin: 20px 0 0 0;
  width: 100%;
}
</style>
