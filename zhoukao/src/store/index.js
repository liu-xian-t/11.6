import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存放数据
    list:[],
  },
  mutations: {
      collect(state,item){
        state.list.push(item)
        window.console.log(state.list)
      },
      uncollect(state,id){
        var findI=state.list.findIndex((item)=>{
          return item.id==id
        })
        if(findI!=-1){
          state.list.splice(findI,1)
        }
      }
    
  },
  actions: {
  },
  modules: {
  }
})
