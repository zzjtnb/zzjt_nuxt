// 多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了
// 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
export const state = () => ({
  isNotIndex: true,
  isMobile: true,
  overlay: false,
  query: {
    pageNum: 1,
    per_page: 16,
  }
})
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
export const mutations = {
  SET_ISINDEX: (state, value) => { //这里的state对应着上面这个state
    state.isNotIndex = value
  },
  SET_ISMOBILE: (state, value) => {
    state.isMobile = value
  },
  SET_OVERLAY: (state, value) => {
    state.overlay = value
  },
  SET_QUERY: (state, value) => {
    state.query.pageNum = value.pageNum
    state.query.per_page = value.per_page
  }
}
