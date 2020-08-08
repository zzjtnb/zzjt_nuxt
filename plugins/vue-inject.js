import Vue from 'vue'
import util from '../utils/util'
import { BToast } from 'bootstrap-vue'
Vue.component('b-toast', BToast)
import { BSpinner } from 'bootstrap-vue'
Vue.component('b-spinner', BSpinner)

Vue.prototype.$myInjectedFunction = (string) => console.log('This is an example', string)
/**
 * 分享文章
 */

Vue.prototype.$share = function (message) {

  if (!message) {
    message = window.location
  } else {
    // let arr = (window.location + '').split('#')
    // message = arr[0] + '#' + message
    message = window.location.origin + message
  }
  if (util.copy(message)) {
    // Use a shorter name for this.$createElement
    const h = this.$createElement
    // Create the message
    const vNodesMsg = h(
      'p',
      { class: ['text-center'] },
      [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', '链接已复制,去分享给好友吧!'),
        h('b-spinner', { props: { type: 'grow', small: true } })
      ]
    )
    // Create the title
    const vNodesTitle = h(
      'div',
      [
        h('strong', { class: 'mr-auto' }, 'Notice!'),
      ]
    )
    // Pass the VNodes as an array for message and title
    this.$bvToast.toast([vNodesMsg], {
      title: [vNodesTitle],
      solid: true,
      variant: 'success'
    })
    // this.$toast('haha', '链接已复制,去分享给好友吧!')
    // Vue.prototype.$confirm('链接已复制,去分享给好友吧!!', '分享', {
    //   showCancelButton: false,
    //   showClose: false,
    //   type: 'success'
    // })
  } else {
    // Use a shorter name for this.$createElement
    const h = this.$createElement
    // Create the message
    const vNodesMsg = h(
      'p',
      { class: ['text-center'] },
      [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', '链接复制失败,可能因为浏览器不兼容!'),
        h('b-spinner', { props: { type: 'grow', small: true } })
      ]
    )
    // Create the title
    const vNodesTitle = h(
      'div',
      [
        h('strong', { class: 'mr-auto' }, 'Notice!'),
      ]
    )
    // Pass the VNodes as an array for message and title
    this.$bvToast.toast([vNodesMsg], {
      title: [vNodesTitle],
      solid: true,
      variant: 'danger'
    })
    // Vue.prototype.$confirm('链接复制失败,可能因为浏览器不兼容', '分享', {
    //   showCancelButton: false,
    //   showClose: false,
    //   type: 'warning'
    // })
  }
}
