<template>
  <div class="myCollectWork"><use-work-item :item="item"></use-work-item></div>
</template>

<script lang="ts" setup>
import UseWorkItem from '@/views/user/personal/work/useWork/useWorkItem.vue'
import { useRoute } from 'vue-router'
import { useCollect } from '@/srevice/user'

const route = useRoute()
const item = ref({})
const nn = async () => {
  item.value = (await useCollect({ me: route.params.u_id })).data.list
}
nn()
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'myCollectWork'
})
</script>

<style scoped>
.myCollectWork {
  width: 650px;
}
</style>
