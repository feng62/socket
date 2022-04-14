<template>
  <div class="redact">
    <div class="context1">
      <h1>发布作品</h1>
    </div>
    <div class="context2 contex">
      <h3>作品描述</h3>
      <div class="text">
        <el-input
          v-model="data1.text"
          :rows="4"
          type="textarea"
          :maxlength="500"
          :show-word-limit="true"
          resize="none"
          :input-style="{ background: 'rgba(46,50,56,0.04)' }"
          placeholder="视频标题"
        />
      </div>
    </div>
    <div class="context3 contex">
      <h3>视频类型</h3>
      <div class="type">
        <el-select v-model="data1.value" placeholder="视频类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="context4 contex">
      <el-button color="#409eff" style="color: white" @click="fabu1"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navZZ } from '@/srevice/main/navZ/navZ'

const mode = ref<any>([])
const options = ref<any>([{ value: 1, label: 1 }])
const emits = defineEmits(['next', 'submit', 'update:modelValue', 'data'])
const props = defineProps({
  modelValue: Number
})

onBeforeMount(async () => {
  mode.value = (await navZZ()).data.list
  options.value = mode.value.map((item, idx) => ({
    value: item.wt_type,
    label: item.wt_type + ' ' + item.icon
  }))
})
const data1 = reactive({
  text: '',
  value: ''
})
const fabu1 = () => {
  emits('data', data1)
  emits('submit')
  emits('update:modelValue', 3)
}
</script>
<script lang="ts">
import {
  defineComponent,
  defineEmits,
  ref,
  reactive,
  onBeforeMount,
  defineProps
} from 'vue'
export default defineComponent({
  name: 'redact'
})
</script>

<style scoped>
.redact {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contex {
  width: 50%;
  height: 200px;
  margin: 10px;
  margin: 10px 0 0 20px;
}
.text {
  width: 400px;
  margin-top: 30px;
}
.type {
  margin-top: 30px;
}
.context3 {
  height: 150px;
}
.context4 {
  height: 50px;
  display: flex;
  justify-content: right;
}
</style>
