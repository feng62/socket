<template>
  <div class="page-search">
    <fg-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header" v-if="searchFormConfig.show">高级检索</h1>
      </template>
      <template #footer>
        <div class="but" v-if="searchFormConfig.show">
          <el-button @click="c">重置</el-button
          ><el-button @click="x" type="primary">搜索</el-button>
        </div>
      </template>
    </fg-form>
  </div>
</template>

<script lang="ts" setup>
import FgForm from '@/dase-ui/form'
const props = defineProps({
  searchFormConfig: Object,
  modelValue: Object
})
const formData = ref({})
const emits = defineEmits(['update:modelValue', 'update:data'])
const x = () => {
  console.log(formData.value)
  if (formData.value.time != undefined) {
    formData.value.time1 = formData.value.time[0]
    formData.value.time2 = formData.value.time[1]
    delete formData.value.time
  }
  emits('update:modelValue', formData.value)
}
const c = () => {
  formData.value = {}
}
const childMethod = () => {
  formData.value = props.modelValue
}
const yes = () => {
  emits('update:data', formData.value)
}
defineExpose({
  childMethod,
  yes,
  c
})
</script>
<script lang="ts">
import {
  defineComponent,
  defineProps,
  ref,
  defineEmits,
  defineExpose
} from 'vue'
export default defineComponent({
  name: 'page-search'
})
</script>

<style scoped>
.page-search {
  padding-top: 30px;
}
.but {
  margin-right: 50px;
  float: right;
}
</style>
