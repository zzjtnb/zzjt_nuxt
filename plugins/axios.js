// import Vue from 'vue'
// const vm = new Vue({})
// vm.$bvToast.toast(`This is toast number`, {
//   title: 'BootstrapVue Toast',
//   variant: 'success',
//   solid: true,
//   autoHideDelay: 2000,
// })
export default function (app) {
  let axios = app.$axios;
  // let token = app.store.state.token.token;
  let token = ''
  // request拦截器，我这里设置了一个token，当然你可以不要
  if (token) {
    axios.setToken(token);
  };
  axios.onRequest(config => {
    // console.log(config);
  })
}
