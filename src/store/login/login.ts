import { Module } from 'vuex'
import router from '@/router'

import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'
import { IAccount } from '@/views/login/type'
import { Login } from '@/srevice/login/login'
import store from '@/store'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      user: '',
      stomp: null,
      friendUser: {}
    }
  },
  mutations: {
    chengToken(state, data) {
      state.token = data.token
      state.user = data.user
      store.state.user = data.user
    },
    chatMessage(state, data) {
      const dat = JSON.parse(data).t
      dat.unread = 1
      dat.time = new Date()
      store.commit('friendModule/addMessage', dat)
    }
  },
  actions: {
    async loginAccount({ commit }, payload: IAccount) {
      const data = await Login(payload)
      if (data.message === '登陆成功') {
        commit('chengToken', data.data)
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', JSON.stringify(data.data.user))
        await router.push({
          path: '/main'
        })
      }
    },
    async connect({ state, commit }) {
      // @ts-ignore
      state.stomp = new WebSocket('ws://localhost:8080/web/' + state.user.u_id)
      // state.stomp.onopen = () => {
      //   console.log('连接成功')
      // }
      state.stomp.onmessage = await function (msg) {
        if (JSON.parse(msg.data).code === 1) {
          store.commit('friendModule/friendList', JSON.parse(msg.data))
        } else if (JSON.parse(msg.data).code === 0) {
          commit('chatMessage', msg.data)
        } else if (JSON.parse(msg.data).code === 2) {
          store.commit('friendModule/myOnlineFriend', JSON.parse(msg.data))
        }
      }
    }
  }
}

export default loginModule
