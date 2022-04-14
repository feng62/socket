export const contentConfig = {
  userData: [
    { prop: 'a_id', label: '用户Id', minWidth: '100' },
    { prop: 'a_name', label: '用户名', minWidth: '100' },
    { prop: 'a_account', label: '账号', minWidth: '100' },
    { prop: 'a_phone', label: '电话', minWidth: '100' },
    { prop: 'a_email', label: '邮箱', minWidth: '100', slotName: 'image' },
    { prop: 'g_class', label: '权限', minWidth: '100' },
    {
      label: '操作',
      width: '150',
      slotName: 'handler',
      fixed: 'right'
    }
  ]
}
