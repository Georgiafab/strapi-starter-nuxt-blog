export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  env: {
    strapiBaseUri: process.env.API_URL || "https://strapi-starter-nuxt-blog.herokuapp.com/"
  },

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#27a6e6" },
  /*
   ** Global CSS
   */
  css: [
    // "uikit/dist/css/uikit.min.css",
    // "uikit/dist/css/uikit.css",
    "@assets/css/main.css"
  ],

  generate: {
    //- 为动态路由添加静态化
    //- 静态化站点的时候动态路由是无法被感知到的
    //- 所以可以预测性的在这里配置
    routes: [
      '/articles/2',
      '/articles/1',
      '/categories/1',
      "/categories/2",
      // "/index"
    ],
    subFolders:false,  //不会为每个路由创建一个目录并生成index.html文件
    devtools:true
  },
  // publicPath:'./',
  // router: {
  //   base: './'
  // },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/element.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  globalName:"imyfone",
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/apollo", "@nuxtjs/markdownit",'@nuxtjs/axios','@nuxtjs/proxy'],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: (process.env.API_URL || "https://strapi-starter-nuxt-blog.herokuapp.com") + "/graphql"
      }
    }
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9000',
      pathRewrite: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        '^/api' : '/'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      },
      plugins: [
        [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
      ] 
    }
  }
};
