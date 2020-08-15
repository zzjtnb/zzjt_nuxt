const base = require('./api/base');
const axios = require('axios')
module.exports = {
  telemetry: false,
  mode: 'universal',
  /**
    * Headers of the page
    */
  head: {
    htmlAttrs: { lang: 'zh-Hans-CN' }, title: '争逐', titleTemplate: '争逐 - %s',
    meta: [
      { charset: 'utf-8' }, { hid: 'Author', name: 'Author', content: '争逐' }, { hid: 'keywords', name: 'keywords', content: "Java,Vue,HTML,CSS,编程,博客,知识,系统,争逐,政治,经济,军事,历史,天文,地理,人文,哲学" }, { hid: 'description', name: 'description', content: '纵观天下之势,发展强国之道' }, { hid: 'Copyright', name: 'Copyright', content: '争逐版权所有' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
    * Customize the progress-bar color
    */
  loading: { color: '#00c58e', height: '3px', background: "#FFF", continuous: true },
  /**
    * Global CSS
    */
  css: ['@/assets/scss/custom.scss', '@/assets/scss/reset.css', '@/assets/scss/main.scss'],
  /**
    * Style resources
    */
  styleResources: { scss: "./assets/scss/variables.scss" },
  /**
    * Plugins to load before mounting the App
    */
  plugins: [
    "~/plugins/axios",
    '~/plugins/untis',
    '~plugins/filters', // 全局过滤器
    '~plugins/checkBeforeEach.js', // 全局路由守卫插件
    { src: '@/plugins/vueMavonEditor', ssr: false },
    { src: '~/plugins/vueInject', ssr: false },
    { src: '~/plugins/toast', ssr: false }
  ],
  /**
    * Nuxt.js dev-modules
    */
  buildModules: ['@nuxt/typescript-build'],
  /**
    * Nuxt.js modules
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
    //https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: ['LayoutPlugin', 'NavbarPlugin', 'ButtonPlugin', 'OverlayPlugin', 'ToastPlugin', 'CardPlugin', 'PaginationNavPlugin', 'FormPlugin', 'FormGroupPlugin', 'FormInputPlugin', 'FormSelectPlugin', 'AlertPlugin', 'LinkPlugin', 'BadgePlugin', 'VBHoverPlugin', 'ModalPlugin', 'ProgressPlugin', 'ListGroupPlugin'],
    components: ['BIcon', 'BIconstack', 'BIconBookmarkFill', 'BIconCircle', 'BIconCircleFill', 'BIconTrashFill', 'BIconPencilSquare', 'BIconShareFill', 'BIconClockHistory', 'BIconClock', 'BIconChevronBarUp', 'BIconChevronBarDown', 'BIconCalendar2', 'BIconFileText']
  },
  /**
    * Axios module configuration
    * See https://axios.nuxtjs.org/options
    */
  axios: {
    proxy: true // Can be also an object with default options
  },
  sitemap: {
    path: '/sitemap.xml', // sitemap名稱，不用改
    hostname: 'https://zzjtnb.com/', // 網址
    cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    generate: true, // 允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: [
      '/admin/**',
      '/blog/Tools',
      '/user/account',
      '/test/**',
    ],
    // 靜態頁面路徑
    routes: async () => {
      let baseURL = process.env.BASE_URL || 'http://localhost:3000';
      const { data } = await axios.get(`${baseURL}/api/sitemap`)
      return data.map((v) => {
        return {
          url: `/blog/details/${v.id}`,
          changefreq: 'daily',// 可能變更的頻率
          priority: 0.5, // 網頁的重要程度，0.1 - 1
          lastmod: v.date
        }
      })
    }
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

  /**
    * Build configuration
    */
  build: {
    /**
      * You can extend webpack config here
      */
    extend(config, ctx) {
    },
    /**
     * 公共代码抽离和代码分割，避免单个js文件过大
     */
    // 开启打包分析
    // analyze: true,
  }
}
