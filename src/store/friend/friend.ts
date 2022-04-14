import { Module } from 'vuex'

import { IRootState } from '@/store/type'
import { getFriendList } from '@/srevice/friend/friend'
import { IFriendState } from '@/store/friend/type'
import store from '@/store'
const friendModule: Module<IFriendState, IRootState> = {
  namespaced: true,
  state() {
    return {
      friendList: [],
      friendMessage: {}
    }
  },
  getters: {
    userUnread(state) {
      return (user) => {
        let i = 0
        if (state.friendMessage[user.u_id]) {
          for (const itemKey in state.friendMessage[user.u_id]) {
            if (state.friendMessage[user.u_id][itemKey].unread === 1) {
              i++
            }
          }
        }
        return i
      }
    },
    allUnread(state) {
      let i = 0
      // @ts-ignore
      state.friendMessage = Array.from(state.friendMessage)
      // @ts-ignore
      state.friendMessage.forEach((item) => {
        if (item) {
          for (const itemKey in item) {
            if (item[itemKey].unread === 1) {
              i++
            }
          }
        }
      })
      return i
    }
  },
  mutations: {
    AddFriend(state, data) {
      state.friendList = data.list.map((item) => {
        item.state = 'grayscale(100%)'
        return item
      })
    },
    friendList(state, data) {
      // @ts-ignore
      state.friendList.map((item) => {
        if (item.u_id == data.t.user) {
          return (item.state = data.t.state)
        }
        return item
      })
      // console.log(state.friendList)
    },
    myOnlineFriend(state, data) {
      if (!state.friendList) {
        store.commit('friendModule/myOnlineFriend', data)
      }
      setTimeout(() => {
        for (const dataKey of data.t) {
          // @ts-ignore
          state.friendList.forEach((item) => {
            if (item.u_id == dataKey.user) {
              // @ts-ignore
              item.state = dataKey.state
            }
          })
        }
      }, 500)
    },
    addMessage(state, data) {
      let s: any = data.from
      // @ts-ignore
      // console.log(store.state.user.u_id)
      // @ts-ignore
      if (store.state.user.u_id === data.from) {
        s = data.to
      }
      if (state.friendMessage[s] == undefined) {
        // console.log(s)
        const list = s
        // @ts-ignore
        state.friendMessage[list] = []
      }
      state.friendMessage[s].push(data)
    },
    readMessage(state, user) {
      for (const itemKey in state.friendMessage[user.u_id]) {
        if (state.friendMessage[user.u_id][itemKey].unread === 1) {
          state.friendMessage[user.u_id][itemKey].unread = 0
        }
      }
    }
  },
  actions: {
    async friendList({ commit, getters, state }, payload: any) {
      // console.log(payload)
      const friend = await getFriendList(payload)
      // console.log(friend)
      commit('AddFriend', friend.data)
    }
  }
}

export default friendModule
