import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataObject: '45'
  },
  mutations: {
    SET_dataObject(state, data) {
      state.dataObject = data
    }
  },
  actions: {
    loadData({ commit }, location ) {
      var data;
      axios.get(`http://api.weatherstack.com/current?access_key=f5a7fb81fc1b4be2b556542abcf136f4&%20query=${location}`)
      .then((response) => {
        data = response.data
        console.log(response)
        if(response.status == '200') {
          if (response.data.error)  alert('wrong input')
          else commit('SET_dataObject', data)
        }
        
        else console.log('wrong input')
      })
      .catch(error => console.log(error))
      
    }
  },
  modules: {
  },
  getters: {
    get_dataObject: state => {
      return state.dataObject
    }
  }
})
