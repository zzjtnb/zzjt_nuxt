// require('dotenv').config()
// // 通过process.env即可使用
// console.log(process.env.GITHUB) // http://your_server.com/api

const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Require API routes
const api = require('./api')
// Import API Routes
app.use('/api', api)


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server

  app.listen(8080)
  consola.ready({
    message: `Server listening on :${8080}`,
    badge: true
  })
  // app.listen(port, host)
  // consola.ready({
  //   message: `Server listening on http://${host}:${port}`,
  //   badge: true
  // })
}
start()
