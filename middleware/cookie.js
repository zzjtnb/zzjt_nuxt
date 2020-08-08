export default function ({
  store,
  app,
  redirect,

}) {
  store.state.token.token = app.$cookies.get('TOKEN_KEY')
}
