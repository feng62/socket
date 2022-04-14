import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import {
  ElUpload,
  ElIcon,
  ElSteps,
  ElStep,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElProgress,
  ElInput,
  ElSelectV2,
  ElSelect,
  ElOption,
  ElButton,
  ElImage,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElDialog
} from 'element-plus'

const components = [
  ElUpload,
  ElIcon,
  ElSteps,
  ElStep,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElProgress,
  ElInput,
  ElSelectV2,
  ElSelect,
  ElOption,
  ElButton,
  ElImage,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElDialog
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
