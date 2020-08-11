
// 如果您需要同时在context，Vue实例，甚至Vuex中同时注入，您可以使用inject方法, 它是 plugin 导出函数的第二个参数。将内容注入 Vue 实例的方式与在 Vue 应用程序中进行注入类似。系统会自动将$添加到方法名的前面。
export default ({ app }, inject) => {
  /**
  * @param {String} content 提示内容
  * @param {String} title 标题
  * @param {String} variant  状态
  */
  inject('toast', (content, title, variant) => {
    this.$bvToast.toast(content, {
      title: title,
      variant: variant,
      solid: true
    })
  })
}
//使用实例
// this.$toast('注销成功', '提示', 'success')