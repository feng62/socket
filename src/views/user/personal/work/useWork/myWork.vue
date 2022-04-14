<template>
  <div class="myWork"><use-work-item :item="item"></use-work-item></div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import UseWorkItem from '@/views/user/personal/work/useWork/useWorkItem.vue'
import { myWork } from '@/srevice/user'

const route = useRoute()
const item = ref({})
const nn = async () => {
  item.value = (await myWork(route.params)).data.list
  console.log(item.value)
}
nn()
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'myWork'
})
</script>

<style scoped>
.myWork {
  width: 650px;
}
</style>
