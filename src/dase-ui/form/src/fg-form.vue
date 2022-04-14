<template>
  <div class="fg-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.fieId">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :disabled="item.disabled"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.fieId}`]"
                  @update:modelValue="handleValueChange($event, item.fieId)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.fieId}`]"
                  @update:modelValue="handleValueChange($event, item.fieId)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  value-format="YYYY-MM-DD"
                  :model-value="modelValue[`${item.fieId}`]"
                  @update:modelValue="handleValueChange($event, item.fieId)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IFormItem } from '../type'
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Object,
  formItems: Array as IFormItem[],
  itemStyle: Object,
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920px 4涓�        lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
const handleValueChange = (value: any, field: string) => {
  console.log(value, field)
  emits('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>
<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue'
export default defineComponent({
  name: 'fg-form'
})
</script>

<style scoped></style>
