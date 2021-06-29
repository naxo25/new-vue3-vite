import APP_CONFIG from '../../config/default.json'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    handleChangeAuthState () {
      alert(APP_CONFIG);
    }
  }
})