import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IHeadState } from './type'
import { fuzzySearch } from '@/srevice/head/head'

const headModule: Module<IHeadState, IRootState> = {
  namespaced: true,
  state() {
    return {
      fuzzySearchData: [],
      searchData: []
    }
  },
  getters: {},
  mutations: {
    addFuzzySearchDataAction(state, list) {
      state.fuzzySearchData = list
    }
  },
  actions: {
    async fuzzySearchDataAction({ commit }, v) {
      const data = (await fuzzySearch(v)).data.list
      commit('addFuzzySearchDataAction', data)
    }
  }
}

export default headModule
