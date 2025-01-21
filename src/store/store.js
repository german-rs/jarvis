import { createStore } from 'vuex'

export default createStore({
  state: {
    messages: [],
    isLoading: false,
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    setLoading(state, value) {
      state.isLoading = value
    },
  },
  actions: {
    sendMessage({ commit }, message) {
      commit('addMessage', { type: 'user', content: message })
    },
    receiveMessage({ commit }, message) {
      commit('addMessage', { type: 'response', content: message })
    },
    setLoading({ commit }, value) {
      commit('setLoading', value)
    },
  },
})
