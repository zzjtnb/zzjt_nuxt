export default function ({ store, app }) {
  app.router.beforeEach((to, from, next) => {
    // console.log(store.state.common.isNotIndex);
    if (to.path == "/") {
      store.commit('common/SET_ISINDEX', false)
    } else {
      store.commit('common/SET_ISINDEX', true)
    }
    // 如果是账号设置，或者我的钱包页面模块，就判断用户是否登录了
    if (to.path.indexOf('setting') !== -1 || to.path.indexOf('wallet') !== -1) {
      // console.log('[store]', store.state.userId) 用户id
      // console.log('[app]', app.$cookies.get('token')) 登录后返回的token

      if (!(store.state.userId || app.$cookies.get('token'))) {
        return next('/account/login')
      }
    }

    // 其他页面模块，放行
    next()
  })
}
