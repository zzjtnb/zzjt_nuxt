export const state = () => ({
  token: ''
})
export const mutations = {
  SET_TOKEN: (state, value) => {
    state.token = value
  },
  REMOVE_TOKEN: (state) => {
    state.token = null
  }
}
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({
    commit
  }, {
    app
  }) {
    commit('SET_token', app.$cookies.get('TOKEN_KEY'))
  },
  Cancellation({
    commit
  }) {
    commit('REMOVE_TOKEN')
    location.reload();
  },
}
