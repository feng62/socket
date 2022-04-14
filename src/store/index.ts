import { createStore } from 'vuex'
import loginModule from '@/store/login/login'
import friendModule from '@/store/friend/friend'
import mainModule from '@/store/main/main'
import headModule from '@/store/head'
import { IRootState } from '@/store/type'

export default createStore<IRootState>({
  state: {
    user: {},
    sex: ''
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    friendModule,
    mainModule,
    headModule
  }
})
