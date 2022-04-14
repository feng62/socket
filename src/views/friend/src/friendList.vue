<template>
  <div class="friend">
    <template
      v-for="item in $store.state.friendModule.friendList"
      :key="item.u_id"
    >
      <friend-itme :item="item" @user="user"></friend-itme>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

import FriendItme from './friendItme.vue'
const store = useStore()
store.dispatch('friendModule/friendList', store.state.loginModule.user.u_id)
const Emit = defineEmits(['user'])
const user = (item) => {
  Emit('user', item)
}
</script>

<script lang="ts">
import { defineComponent, defineEmits } from 'vue'
export default defineComponent({
  name: 'friendList'
})
</script>
<style scoped>
.friend {
  margin-left: 30px;
}
</style>
