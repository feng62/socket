<template>
  <li class="liItem">
    <div class="te">
      <a :href="'/video/' + item.w_id" target="_blank">
        <div class="image" @mouseenter="shang" @mouseleave="leave">
          <img v-if="!ist" :src="item.image" alt="" />
          <div class="info" ref="info" v-if="!ist">
            <div class="sv">
              <svg
                t="1643282475995"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1826"
                width="200"
                height="200"
              >
                <path
                  d="M511.913993 928.016126c-28.898371 0-57.968755-12.729044-86.695112-41.455401L106.30472 564.034268C68.117588 516.38636 31.994625 471.318663 31.994625 383.935495c0-141.223585 114.905426-255.956996 255.956996-255.956996 53.15236 0 104.068537 16.169326 147.244079 46.615824 14.449185 10.148833 17.889467 30.102469 7.740635 44.551655-10.148833 14.449185-30.102469 17.889467-44.551655 7.740635-32.338653-22.877877-70.525785-34.918864-110.433059-34.918864-105.960692 0-191.967747 86.179069-191.967747 191.967747 0 61.409037 20.297665 90.135394 59.172854 138.643373l315.645893 318.742147c15.997312 15.997312 28.898371 22.361834 41.283387 22.533848 12.729044 0.172014 24.942046-6.192508 41.455401-22.705863l316.677977-319.946246c25.974131-28.210314 57.968755-75.858223 57.968755-137.439274 0-105.960692-86.179069-191.967747-191.967747-191.967747-47.991937 0-94.091718 17.889467-129.526625 50.22812l-133.998992 134.171006c-12.55703 12.55703-32.682681 12.55703-45.239711 0s-12.55703-32.682681 0-45.239711l135.031077-135.203091c48.335965-44.207626 109.745003-67.945574 173.734252-67.945574 141.223585 0 255.956996 114.905426 255.956996 255.956996 0 82.394759-41.111372 144.319839-75.686209 181.646901L598.781119 886.388712C569.882748 915.287082 540.984378 928.016126 511.913993 928.016126z"
                  p-id="1827"
                ></path>
              </svg>
            </div>
            <div class="shu">36.5w</div>
          </div>
          <div class="videoo" v-if="ist">
            <h-dplayer :item="item"></h-dplayer>
          </div>
        </div>
      </a>
      <div class="title">
        <p>{{ item.title }}</p>
      </div>
      <a :href="'/personal/' + item.user.u_id" target="_blank">
        <div class="user">
          <div class="pic">
            <img :src="item.user.head" alt="" />
          </div>
          <span class="tt">{{ item.user.name }}</span>
        </div>
      </a>
    </div>
  </li>
</template>

<script lang="ts" setup>
import HDplayer from '@/views/main/src/homme/src/hDplayer.vue'

const props = defineProps({
  item: Object
})

const info = ref<HTMLElement>()
const ist = ref(false)
const shang = () => {
  ist.value = true
}
const leave = () => {
  ist.value = false
}
</script>
<script lang="ts">
import { defineComponent, ref, defineProps } from 'vue'
export default defineComponent({
  name: 'liItem'
})
</script>

<style scoped>
.title > p,
.tt {
  color: white;
}
a {
  text-decoration: none;
}
.te {
  width: 248px;
  height: 234px;
  overflow: hidden;
  position: relative;
}
.image {
  height: 70%;
  display: flex;
  justify-content: center;
}
.image > img {
  height: 100%;
}
.info {
  width: 100%;
  height: 30px;
  position: absolute;
  top: 130px;
  display: flex;
  align-items: center;
  color: white;
}
.sv {
  margin: 0 10px;
}
svg {
  fill: white;
  width: 30px;
  height: 30px;
}
.videoo {
  width: 100%;
  height: 165px;
  position: absolute;
  top: 0;
  left: 0;
}
.title {
  margin: 5px 0 0 10px;
}
.user {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.pic {
  width: 30px;
  height: 30px;
  margin: 5px 0 0 10px;
}
.pic > img {
  width: 100%;
}
.xxx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 165px;
  z-index: 66;
}
</style>
