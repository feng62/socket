<template>
  <div class="account">
    <el-form label-width="50px" style="max-width: 300px">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.a_account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          :show-password="true"
          v-model="formLabelAlign.a_password"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { adminLogin } from '@/srevice/admin'
const route = useRouter()
const formLabelAlign = reactive({
  a_account: '',
  a_password: ''
})

const deng = async () => {
  const dd = (await adminLogin(formLabelAlign)).data
  if (dd.admin.a_account === formLabelAlign.a_account) {
    window.localStorage.setItem('A_token', dd.token)
    route.push('adminMain')
  }
}
defineExpose({
  deng
})
</script>
<script lang="ts">
import { defineComponent, ref, reactive, defineExpose } from 'vue'
export default defineComponent({
  name: 'account'
})
</script>

<style scoped>
.account {
  width: 100%;
  height: 99px;
}
</style>
