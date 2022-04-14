<template>
  <div class="Upload">
    <el-upload
      ref="upload"
      class="upload-demo"
      drag
      action="http://localhost:8081/api/info/Video"
      :headers="token"
      :on-success="success"
      :on-progress="uploadVideoProcess"
      :show-file-list="true"
      :disabled="uploading"
      :limit="1"
      :on-exceed="handleExceed"
      :auto-upload="false"
      :data="data"
    >
      <el-icon v-if="!uploading" class="el-icon--upload"
        ><upload-filled
      /></el-icon>
      <div v-if="!uploading" class="el-upload__text">
        <em>点击上传 或直接将视频文件拖入此区域</em><br />
        为了更好的观看体验，超过40秒的视频建议上传横版视频
      </div>
      <el-progress
        v-if="uploading"
        type="circle"
        :percentage="percentage"
        style="margin-top: 30px"
      >
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">{{
          percentage >= 100 ? '上传成功！' : '上传ing···'
        }}</span>
      </el-progress>
      <template #tip>
        <div class="el-upload__tip">
          <template v-for="item in config" :key="item.title">
            <tag v-bind="item"></tag>
          </template>
        </div>
        <div class="but">
          <el-button
            v-show="fa == 1"
            color="#409eff"
            style="color: white"
            @click="bian"
            >下一步</el-button
          >
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { UploadFilled } from '@element-plus/icons-vue'
import tag from './src/tag.vue'
import { config } from './config/config'
import { ElMessage } from 'element-plus'

const upload = ref<any>()
const store = useStore()
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Number,
  data: Object,
  fa: Number
})

const user = computed(() => store.state.user)
const token = ref({ AccessToken: window.localStorage.getItem('token') })
const percentage = ref(0)
const uploading = ref(false)
const data = reactive({
  u_id: user.value.u_id,
  text: props.data.text,
  value: props.data.value
})
const uploadVideoProcess = (event, file, fileList) => {
  uploading.value = true
  percentage.value = event.percent
}
const success = (res) => {
  console.log('成功了', res.data)
}
const handleExceed = (files) => {
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const submitUpload = () => {
  data.text = props.data.text
  data.value = props.data.value

  upload.value.submit()
}

const bian = () => {
  if (upload.value.uploadFiles.length === 1) {
    emits('update:modelValue', 2)
  } else {
    ElMessage.error('请上传作品')
  }
}
defineExpose({
  submitUpload
})
</script>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  defineEmits,
  defineProps,
  defineExpose,
  computed
} from 'vue'
export default defineComponent({
  name: 'Upload'
})
</script>

<style scoped>
.Upload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.el-upload__tip {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.but {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 20px 40px 0 0;
}
</style>
