import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce4d588c = () => interopDefault(import('..\\pages\\music\\index.vue' /* webpackChunkName: "pages/music/index" */))
const _0449deae = () => interopDefault(import('..\\pages\\software\\index.vue' /* webpackChunkName: "pages/software/index" */))
const _37ba2863 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _920c08b8 = () => interopDefault(import('..\\pages\\video\\index.vue' /* webpackChunkName: "pages/video/index" */))
const _8299af40 = () => interopDefault(import('..\\pages\\blog\\add\\index.vue' /* webpackChunkName: "pages/blog/add/index" */))
const _ca5ed2be = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _940c1aca = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages/user/register" */))
const _53c62ae2 = () => interopDefault(import('..\\pages\\test\\test1\\test2\\index.vue' /* webpackChunkName: "pages/test/test1/test2/index" */))
const _7bb07ac7 = () => interopDefault(import('..\\pages\\blog\\details\\_id.vue' /* webpackChunkName: "pages/blog/details/_id" */))
const _066d6d71 = () => interopDefault(import('..\\pages\\blog\\edit\\_id.vue' /* webpackChunkName: "pages/blog/edit/_id" */))
const _a930ac44 = () => interopDefault(import('..\\pages\\lawyer\\id\\_id.vue' /* webpackChunkName: "pages/lawyer/id/_id" */))
const _3677230a = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _c3c36816 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/music",
    component: _ce4d588c,
    name: "music"
  }, {
    path: "/software",
    component: _0449deae,
    name: "software"
  }, {
    path: "/test",
    component: _37ba2863,
    name: "test"
  }, {
    path: "/video",
    component: _920c08b8,
    name: "video"
  }, {
    path: "/blog/add",
    component: _8299af40,
    name: "blog-add"
  }, {
    path: "/user/login",
    component: _ca5ed2be,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _940c1aca,
    name: "user-register"
  }, {
    path: "/test/test1/test2",
    component: _53c62ae2,
    name: "test-test1-test2"
  }, {
    path: "/blog/details/:id?",
    component: _7bb07ac7,
    name: "blog-details-id"
  }, {
    path: "/blog/edit/:id?",
    component: _066d6d71,
    name: "blog-edit-id"
  }, {
    path: "/lawyer/id/:id?",
    component: _a930ac44,
    name: "lawyer-id-id"
  }, {
    path: "/blog/:id?",
    component: _3677230a,
    name: "blog-id"
  }, {
    path: "/",
    component: _c3c36816,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
