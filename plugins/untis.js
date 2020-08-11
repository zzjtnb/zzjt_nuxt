import util from '../utils/util'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.util = util
}
