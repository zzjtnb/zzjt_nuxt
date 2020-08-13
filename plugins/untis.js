import util from '../utils/util'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  inject('utils', util)
}
//使用实例
// this.$utils.isMobile()