<template>
  <div class="mail">
    <FgInput label="邮箱" v-model="dd.account"></FgInput>
    <FgInput label="验证码" v-model="dd.password">
      <template #btn>
        <div class="fa">
          <a href="#">发送验证码</a>
        </div>
      </template>
    </FgInput>
  </div>
</template>

<script lang="ts" setup>
const dd = reactive({
  account: '',
  password: ''
})

const login = async () => {
  console.log(dd)
}
defineExpose({
  login
})
</script>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  defineProps,
  defineEmits,
  defineExpose
} from 'vue'
import FgInput from '@/dase-ui/input/src/fg-input.vue'

export default defineComponent({
  name: 'mail'
})
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #3c9bed;
}
.fa {
  margin-top: 15px;
}
</style>
