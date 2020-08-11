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
  // nuxtServerInit({ commit }, { app }) {
  //   commit('SET_TOKEN', app.$cookies.get('TOKEN_KEY'))
  // },
  SetToken({ commit }) {
    commit('SET_TOKEN')
    this.$toast('登录成功', '提示', 'success')
    // location.reload();
  },
  Cancellation({ commit }) {
    commit('REMOVE_TOKEN')
    this.$toast('注销成功', '提示', 'success')
    location.reload();
  },
}
