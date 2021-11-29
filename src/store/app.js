/* eslint-disable no-param-reassign */
export default {
  namespaced: true,

  state: {
    appState: 'loading',
    appStateDetails: '',
  },

  getters: {
    appState(state) {
      return state.appState
    },

    appStateDetails(state) {
      return state.appStateDetails
    },
  },

  mutations: {
    setAppState(state, { appState, details }) {
      state.appState = appState
      state.appStateDetails = details
    },
  },
}
