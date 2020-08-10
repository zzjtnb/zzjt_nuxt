const middleware = {}

middleware['cookie'] = require('..\\middleware\\cookie.js')
middleware['cookie'] = middleware['cookie'].default || middleware['cookie']

middleware['visits'] = require('..\\middleware\\visits.js')
middleware['visits'] = middleware['visits'].default || middleware['visits']

export default middleware
