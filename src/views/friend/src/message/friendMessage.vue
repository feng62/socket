<template>
  <div class="friendMessage">
    <template
      v-for="item in $store.state.friendModule.friendMessage[use.u_id]"
      :key="item.time"
    >
      <friend-message-left
        v-if="item.to == d"
        :item="item"
        :use="use"
      ></friend-message-left>
      <friend-message-right
        v-else-if="item.from == d"
        :item="item"
      ></friend-message-right>
    </template>
  </div>
</template>

<script lang="ts" setup>
import friendMessageLeft from '@/views/friend/src/message/friendMessageLeft.vue'
import friendMessageRight from '@/views/friend/src/message/friendMessageRight.vue'
import { useStore } from 'vuex'
const props = defineProps({
  use: {
    type: Object
  }
})
const store = useStore()
const d = computed(() => store.state.user.u_id)
const messageList = computed(() => store.state.friendModule.friendMessage[2])

watch(props.use, () => {
  console.log(props.use)
  console.log(messageList)
})
</script>
<script lang="ts">
import { defineComponent, defineProps, computed, watch } from 'vue'
export default defineComponent({
  name: 'friendMessage'
})
</script>

<style scoped>
.friendMessage {
  min-width: 800px;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 200px;
}
</style>
