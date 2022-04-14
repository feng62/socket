<template>
  <div class="myLikeWork"><use-work-item :item="item"></use-work-item></div>
</template>

<script lang="ts" setup>
import UseWorkItem from '@/views/user/personal/work/useWork/useWorkItem.vue'
import { useRoute } from 'vue-router'
import { useLike } from '@/srevice/user'
const route = useRoute()
const item = ref([])
const nn = async () => {
  item.value = (await useLike(route.params)).data.list
}
nn()
</script>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'myLikeWork'
})
</script>

<style scoped>
.myLikeWork {
  width: 650px;
}
</style>
