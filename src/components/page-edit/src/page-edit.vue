<template>
  <div class="page-edit">
    <fg-form
      v-bind="searchFormConfig"
      :modelValue="formData"
      @update:modelValue="a"
    >
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
const emits = defineEmits(['update:modelValue'])
const x = () => {
  formData.value = props.modelValue
  emits('update:modelValue', formData.value)
}
const a = (event) => {
  formData.value = event
  emits('update:modelValue', formData.value)
}
const x1 = () => {
  formData.value = {}
}
defineExpose({
  x,
  x1
})
</script>
<script lang="ts">
import {
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  defineExpose
} from 'vue'
export default defineComponent({
  name: 'page-edit'
})
</script>

<style scoped></style>
