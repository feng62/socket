import { Module } from 'vuex'

import { IRootState } from '@/store/type'
import { IMainModule } from '@/store/main/type'
import { offer, relateWork } from '@/srevice/main/mian'

const mainModule: Module<any, IRootState> = {
  namespaced: true,
  state() {
    return {
      offerWorkList: [],
      relateWorkList: []
    }
  },
  mutations: {
    addOfferList(state, list) {
      list.forEach((item: any) => {
        // @ts-ignore
        state.offerWorkList.push(item)
      })
    },
    addList(state, list) {
      list.forEach((item: any) => {
        // @ts-ignore
        state.offerWorkList[item.wt_id].push(item)
      })
    },
    addRelateWorkList(state, list) {
      list.forEach((item: any) => {
        // @ts-ignore
        state.relateWorkList.push(item)
      })
    }
  },
  actions: {
    async getOfferList({ commit, dispatch }, v) {
      commit('addOfferList', (await offer(v)).data.list)
    },
    async getRelateWorkList({ commit, dispatch }, v) {
      commit('addRelateWorkList', (await relateWork(v)).data.list)
    }
  }
}

export default mainModule
