export default function ({ store, app }) {
  app.router.beforeEach((to, from, next) => {
    if (to.path == "/") {
      // store.dispatch('common/SetIsIndex', true)
      // store.dispatch('common/SetIsFixed', 'top')
    } else {
      // store.dispatch('common/SetIsIndex', false)
      // store.dispatch('common/SetIsFixed', '')
    }
    // 其他页面模块，放行
    next()
  })
}
