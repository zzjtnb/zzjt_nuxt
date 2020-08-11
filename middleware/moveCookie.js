export default ({ app }) => {
  app.$cookies.remove('TOKEN_KEY', {
    // this will allow you to remove a cookie
    // from a different path
    path: '/blog/1'
  })
}