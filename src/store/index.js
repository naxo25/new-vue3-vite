import APP_CONFIG from '../../config/default.json'
import auth from '../api/auth.js'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 0,
      users: {}
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    async handleChangeAuthState ({ state }) {
      const user = await auth
      state.users = user
    }
  }
})