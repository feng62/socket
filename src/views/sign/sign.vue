<template>
  <div class="sign">
    <div class="logo">
      <h1>LOGO</h1>
      <hr />
    </div>
    <div class="zhu">
      <p><span id="zhu">注册</span><span>注册新账号</span></p>
      <template v-for="itme in sign" :key="itme.title">
        <fg-input v-bind="itme" v-model="fData[`${itme.field}`]"></fg-input>
        <div class="zz"></div>
      </template>
      <fg-input labelY="验证码" :required="true" v-model="reg">
        <template #btn>
          <div class="VCode" @click="VCOde">
            <img ref="Vcode" alt="" />
          </div>
        </template>
      </fg-input>
      <div class="zz"></div>
      <div class="btn">
        <button @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Code, VCode, verify } from '@/srevice/sign/sign'
const Vcode = ref<any>()
watchEffect(
  () => {
    VCOde()
  },
  {
    flush: 'post'
  }
)
const VCOde = async () => {
  let d = await VCode()
  let binaryData = []
  binaryData.push(d)
  Vcode.value.src = window.URL.createObjectURL(new Blob(binaryData)) //后端字节图片
}
const boo = {}
const fData = ref<any>(boo)
const reg = ref<any>()
const register = async () => {
  const ss1 = await Code()
  const ff = {
    account: fData.value.account,
    password: fData.value.password,
    email: fData.value.Email,
    name: fData.value.name
  }
  if (reg.value) {
    if (ss1.data.code.toUpperCase() === reg.value.toUpperCase()) {
      let s = await verify(ff)
      if (s.message === '添加成功') {
        localStorage.setItem('token', s.data.token)
      }
      return
    }
  }
}
</script>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import FgInput from '@/dase-ui/input/src/fg-input.vue'
import sign from './config'

export default defineComponent({
  name: 'sign',
  components: { FgInput }
})
</script>

<style scoped>
.sign {
  width: 100%;
  height: 100%;
}
h1 {
  margin-left: 30%;
}
.zhu {
  margin-left: 30%;
  width: 500px;
}
#zhu {
  font-size: 30px;
  font-weight: 900;
  margin-right: 30px;
}
.zz {
  margin-top: 30px;
}
.btn {
  display: flex;
  justify-content: center;
}
button {
  width: 100px;
  height: 30px;
}
.VCode {
  width: 150px;
  height: 50px;
  border: 1px solid black;
}
.VCode > img {
  height: 100%;
  width: 100%;
}
</style>
