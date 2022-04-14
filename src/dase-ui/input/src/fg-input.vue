<template>
  <div class="fg-input">
    <label>{{ labelY }}</label>
    <span class="required" v-if="required">*</span>
    <input
      :type="props.type"
      :style="style"
      :value="props.modelValue"
      @input="add"
      :placeholder="label"
    />
    <div class="a">
      <slot name="btn"> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  labelY: {
    type: String
  },
  label: {
    type: String
  },
  required: {
    type: Boolean,
    default: () => false
  },
  style: {
    type: Object
  },
  type: {
    type: String,
    default: () => 'text'
  },
  modelValue: {
    type: String
  }
})
// props.modelValue :any = computed(()=>value)
const emit = defineEmits(['update:modelValue'])
const add = (e: any) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.fg-input {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
label {
  margin-right: 10px;
  font-size: 23px;
}
input {
  width: 400px;
  height: 40px;
  border: none;
  border-bottom: 1px solid gray;
  padding-left: 10px;
  font-size: 23px;
  outline: none;
  margin-top: 30px;
}
.a {
  position: absolute;
  top: 20%;
  right: 5%;
}
.required {
  color: red;
}
</style>
