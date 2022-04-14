<template>
  <div class="phone">
    <div class="inpu">
      <FgInput label="账号" v-model="dd.account"></FgInput>
      <FgInput label="密码" v-model="dd.password" type="password"> </FgInput>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { IAccount } from '@/views/login/type'
const store = useStore()
const dd = ref<IAccount>({
  account: '',
  password: ''
})
const router = useRouter()
const login = () => {
  store.dispatch('loginModule/loginAccount', { ...dd.value })
}
defineExpose({
  login
})
</script>

<script lang="ts">
import { defineComponent, ref, reactive, defineExpose } from 'vue'
import { useStore } from 'vuex'
import FgInput from '@/dase-ui/input/src/fg-input.vue'
export default defineComponent({
  name: 'phone'
})
</script>

<style scoped>
.img {
  width: 40px;
  height: 30px;
}
</style>
