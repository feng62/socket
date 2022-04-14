<template>
  <div class="work">
    <div class="head-work">
      <el-tabs type="card" class="demo-tabs">
        <el-tab-pane label="作品"><myWork></myWork></el-tab-pane>
        <el-tab-pane label="喜欢"><myLikeWork></myLikeWork></el-tab-pane>
        <el-tab-pane label="收藏"><myCollectWork></myCollectWork></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import myWork from '@/views/user/personal/work/useWork/myWork.vue'
import myLikeWork from '@/views/user/personal/work/useWork/myLikeWork.vue'
import myCollectWork from '@/views/user/personal/work/useWork/myCollectWork.vue'
</script>

<style>
.work {
  background: var(--color);
}
.head-work {
  display: flex;
  flex-direction: row;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #2457ad;
  font-size: 32px;
  font-weight: 600;
}
.el-tabs__item.is-active {
  color: var(--text);
}
#tab-0:hover {
  color: var(--text);
}
#tab-1:hover {
  color: var(--text);
}
#tab-2:hover {
  color: var(--text);
}
</style>
