<template>
  <div class="release">
    <div class="head">
      <Head></Head>
    </div>
    <div class="context">
      <el-container>
        <el-header>
          <el-steps :active="active" :align-center="true">
            <el-step title="上传作品" :icon="UploadFilled"></el-step>
            <el-step title="编辑作品" :icon="Edit"></el-step>
            <el-step title="发布作品" :icon="Upload"></el-step>
          </el-steps>
        </el-header>
        <el-main>
          <uplo
            ref="kk"
            v-model="active"
            :data="data"
            :fa="active"
            v-show="active === 1 || active === 3"
          />
          <redac
            v-model="active"
            @data="data1"
            v-show="active === 2"
            @submit="submit"
          ></redac>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { Edit, Upload, UploadFilled } from '@element-plus/icons-vue'
import Head from '@/components/page-head'
import uplo from './src/Upload/Upload.vue'
import redac from '@/views/release/src/redact/redact.vue'
const active = ref(1)
const kk = ref({})
// const text = ref('')
// const value = ref('')
const data = reactive({
  text: '',
  value: ''
})
const submit = () => {
  for (const item in kk.value) {
    kk.value[item]()
  }
}
const data1 = (d) => {
  data.text = d.text
  data.value = d.value
}
</script>
<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  name: 'release'
})
</script>

<style scoped>
.release {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.head {
  width: 100%;
  margin-bottom: 30px;
}
.context {
  width: 85%;
  height: 100%;
  min-width: 1024px;
}
</style>
