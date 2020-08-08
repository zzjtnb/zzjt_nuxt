// import Vue from 'vue'
// const vm = new Vue({})
// vm.$bvToast.toast(`This is toast number`, {
//   title: 'BootstrapVue Toast',
//   variant: 'success',
//   solid: true,
//   autoHideDelay: 2000,
// })
import util from '../utils/util'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.util = util
}
