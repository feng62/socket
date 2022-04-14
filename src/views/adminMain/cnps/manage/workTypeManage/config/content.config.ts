export const contentConfig = {
  userData: [
    { prop: 'wt_id', label: '作品Id', width: '80' },
    { prop: 'type', label: '作品类型', minWidth: '100' },
    { prop: 'state', label: '作品数量', minWidth: '100' },
    { prop: 'icon', label: '图标', minWidth: '100' },
    { prop: 'router', label: '路由', minWidth: '100' },
    {
      label: '操作',
      width: '150',
      slotName: 'handler',
      fixed: 'right'
    }
  ]
}
