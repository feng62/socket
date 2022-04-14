<template>
  <div
    class="friendItme"
    :style="'filter:' + item.state"
    @click="userInfo(item)"
  >
    <div class="photo">
      <img :src="item.head" alt="" />
    </div>
    <div class="content">
      <p>
        <span>{{ item.name }}</span>
      </p>
      {{ userUnread == 0 ? '' : userUnread }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
  item: {
    type: Object
  }
})
const Emit = defineEmits(['user'])

const userInfo = (itme) => {
  Emit('user', itme)
  store.commit('friendModule/readMessage', props.item)
}
const userUnread = computed(() =>
  store.getters['friendModule/userUnread'](props.item)
)
</script>
<script lang="ts">
import { defineComponent, defineProps, defineEmits, computed } from 'vue'
export default defineComponent({
  name: 'friendItme'
})
</script>

<style scoped>
.friendItme {
  width: 250px;
  height: 50px;
  background-color: var(--color);
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
}
.photo {
  width: 45px;
  height: 45px;
  background-color: #d0f1b7;
  border-radius: 50%;
}
.photo img {
  width: 100%;
}
.content {
  margin-left: 20px;
  color: var(--text);
}
</style>
