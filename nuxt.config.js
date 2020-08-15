const axios = require('axios')
require('dotenv').config()
// 通过process.env即可使用
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config();
// }
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
module.exports = {
  telemetry: false,
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
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
    // '@nuxtjs/dotenv',
    '@nuxtjs/dotenv', // 指定打包时使用的dotenv
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
    //开发模式下开启debug
    // debug: process.env.NODE_ENV == "production" ? false : true,
    // Can be also an object with default options
    proxy: true,
    proxyHeaders: false,
  },
  proxy: {
    '/github': {
      target: process.env.GITHUB_URL, // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/github': '', //将 /github 替换掉
      },
    },
    '/first': {
      target: process.env.FIRST_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/first': '',
      },
    },
    '/miui': {//设置跨域变量代号(当 查询带请求带有比如this.$axios.$get('/miui/xxx')就启动跨域
      target: process.env.MIUI_URL, //你想要代理的目标源链接
      changeOrigin: true, //开启代理
      pathRewrite: {
        '^/miui': '',
      },
    },

  },
  sitemap: {
    path: '/sitemap.xml', // sitemap名稱，不用改
    hostname: 'https://zzjtnb.com/', // 網址
    cacheTime: 1000 * 60 * 15,// 站點路由更新頻率，(15 Minutes),只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    generate: true, // 允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: [
      '/admin/**',
      '/test/**',
      '/blog/Tools',
      '/user/account',
    ],
    sitemaps: [
      {
        path: '/sitemap-blog.xml',
        // 排除不要的頁面路由
        exclude: [
          '/admin/**',
          '/test/**',
          '/blog/Tools',
          '/user/account',

        ],
        // 靜態頁面路徑
        routes: async () => {
          let baseURL = process.env.BASE_URL || 'http://localhost:3000';
          const { data } = await axios.get(`${baseURL}/api/blog/sitemap`)
          // console.log(data);
          // attributes: {
          //   title: '一些前端工具站点', img: null, categories: '资料', }
          return data.map((v) => {
            return {
              url: `/blog/details/${v.id}`,//相对于前4个标签的父标签
              changefreq: 'daily',// 页面内容更新频率。
              priority: 0.5, // 網頁的重要程度，0.1 - 1
              lastmod: v.date//页面最后修改时间
            }
          })
        }
      },
    ],

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
