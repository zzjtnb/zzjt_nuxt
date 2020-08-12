export const state = () => ({
  blogList: {}
})
export const mutations = {
  SET_BLOG_LIST: (state, value) => {
    state.blogList = value
  },
  GET_BLOG_LIST: (state) => {
    // state.blogList = null
  }
}
export const actions = {
  SetBlogList({ commit }, value) {
    commit('SET_BLOG_LIST', value)
  },

}
