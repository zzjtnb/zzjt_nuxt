import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);
// Vue.prototype.$markdown = function (value) {
//   return mavonEditor.markdownIt.render(value)
// }

// export default ({
//   app
// }, inject) => {
//   // Set the function directly on the context.app object
//   // app.markdown = function (value) {
//   //   return mavonEditor.markdownIt.render(value)
//   // }
//   inject('markdown', function (value) {
//     return mavonEditor.markdownIt.render(value)
//   })
// }
