import Vue from 'vue'
import Vuex from 'vuex'
import Logger from "vuex/dist/logger"
Vue.use(Vuex)
import replyModal from "../store/modules/replyModal"
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    replyModal
  },
  plugins:[Logger()]
})
