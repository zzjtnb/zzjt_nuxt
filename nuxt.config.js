const base = require('./api/base');
module.exports = {
  telemetry: false,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // this htmlAttrs you need
    htmlAttrs: { lang: 'zh-CN' },
    title: '争逐',
    titleTemplate: '争逐 - %s',
    meta: [
      { charset: 'utf-8' },
      { hid: 'Author', name: 'Author', content: '争逐' },
      { hid: 'keywords', name: 'keywords', content: "Java,Vue,HTML,CSS,编程,博客,知识,系统,争逐,政治,经济,军事,历史,天文,地理,人文,哲学" },
      { hid: 'description', name: 'description', content: '纵观天下之势,发展强国之道' },
      { hid: 'Copyright', name: 'Copyright', content: '争逐版权所有' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00c58e',
    height: '3px',
    background: "#FFF",
    continuous: true
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/custom.scss',
    '@/assets/scss/reset.css'
  ],
  /*
** Style resources
*/
  styleResources: {
    scss: "./assets/scss/variables.scss"
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/axios",
    '~plugins/check-before-each.js', // 全局路由守卫插件
    '~/plugins/untis',
    { src: '@/plugins/vue-mavon-editor', ssr: false },
    { src: '~/plugins/vue-inject', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Simple usage
    'cookie-universal-nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: ['LayoutPlugin', 'NavbarPlugin', 'ButtonPlugin', 'OverlayPlugin', 'ToastPlugin', 'CardPlugin', 'PaginationNavPlugin', 'FormPlugin', 'FormGroupPlugin', 'FormInputPlugin', 'AlertPlugin', 'LinkPlugin', 'IconsPlugin'],
  },


  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/github': {
      target: base.base.github, // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/github': '', //将 /api 替换掉
      },
    },
    'first': {
      target: base.base.first, // 代理地址
      changeOrigin: true,
      pathRewrite: {
        'first': '', //将 /api 替换掉
      },
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    /**
     * 公共代码抽离和代码分割，避免单个js文件过大
     */
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 10000,
            maxSize: 25000,
            priority: 100
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 3,
            maxInitialRequests: 5,
            minSize: 10000,
            maxSize: 25000,
            priority: 60
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true
          },

        }
      }
    },
    // 开启打包分析
    // analyze: true,
  },
  server: {
    port: 8080, // default: 3000
    host: 'localhost' // default: localhost
  }
}
