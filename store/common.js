// 多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了
// 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
export const state = () => ({
  isIndex: true,
  isFixed: '',
  isMobile: false,
  overlay: false,
  query: {
    pageNum: 1,
    per_page: 16,
  },
})
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
export const mutations = {
  SET_IS_FIXED: (state, value) => { //这里的state对应着上面这个state
    state.isFixed = value
  },
  SET_IS_INDEX: (state, value) => {
    state.isIndex = value
  },
  SET_IS_MOBILE: (state, value) => {
    state.isMobile = value
  },
  SET_OVERLAY: (state, value) => {
    state.overlay = value
  },
  SET_QUERY_PAGE_NUM: (state, value) => {
    // state.query = JSON.parse(JSON.stringify(value));
    state.query.pageNum = value
  },
}
export const actions = {
  SetIsFixed({ commit }, value) {
    commit('SET_IS_FIXED', value)
  },
  SetIsIndex({ commit }, value) {
    commit('SET_IS_INDEX', value)
  },
  SetIsMobile({ commit }, value) {
    commit('SET_IS_MOBILE', value)
  },
  SetQueryPageNumber({ commit }, value) {
    commit('SET_QUERY_PAGE_NUM', value)
  },
}
