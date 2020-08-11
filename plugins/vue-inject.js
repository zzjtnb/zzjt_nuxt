import Vue from 'vue'
import util from '../utils/util'

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
    const h = this.$createElement
    const vNodesMsg = h(
      'p',
      { class: ['text-center'] },
      [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', '链接已复制,去分享给好友吧!'),
        h('b-spinner', { props: { type: 'grow', small: true } })
      ]
    )
    const vNodesTitle = h(
      'div',
      [
        h('strong', { class: 'mr-auto' }, 'Notice!'),
      ]
    )
    this.$toast([vNodesMsg], {
      title: [vNodesTitle],
      solid: true,
      variant: 'success'
    })

  } else {
    const h = this.$createElement
    const vNodesMsg = h(
      'p',
      { class: ['text-center'] },
      [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', '链接复制失败,可能因为浏览器不兼容!'),
        h('b-spinner', { props: { type: 'grow', small: true } })
      ]
    )
    const vNodesTitle = h(
      'div',
      [
        h('strong', { class: 'mr-auto' }, 'Notice!'),
      ]
    )
    this.$toast([vNodesMsg], {
      title: [vNodesTitle],
      solid: true,
      variant: 'danger'
    })

  }
}
