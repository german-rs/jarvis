import { createStore } from 'vuex'

export default createStore({
  state: {
    messages: [],
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
  },
  actions: {
    sendMessage({ commit }, message) {
      commit('addMessage', { type: 'user', content: message })
    },
    receiveMessage({ commit }, message) {
      commit('addMessage', { type: 'response', content: message })
    },
  },
})
