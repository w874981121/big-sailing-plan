const path = require('path')
module.exports = {
    // 选项
    // 基本路径
    publicPath: process.env.NODE_ENV === "production" ? "/navigation/" : "./",

    // 构建时的输出目录
    outputDir: "dist",

    // 放置静态资源的目录
    assetsDir: "static",

    // html 的输出路径
    indexPath: "index.html",

    //文件名哈希
    filenameHashing: true,

    // 是否在保存的时候使用 `eslint-loader` 进行检查。

    lintOnSave: false,

    // 是否使用带有浏览器内编译器的完整构建版本

    runtimeCompiler: false,

    // babel-loader 默认会跳过 node_modules 依赖。

    transpileDependencies: [ /* string or regex */ ],

    // 是否为生产环境构建生成 source map？

    productionSourceMap: false,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。

    // crossorigin: "",

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。

    integrity: false,

    // 调整内部的 webpack 配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'static'), // 静态资绝对路径   ”~@“
            }
        }

    },

    chainWebpack: (config) => {
        config
            .module
            .rule("images")
            .test(/\.(jpg|png|gif)$/)
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 10,
                // 以下配置项用于配置file-loader
                // 根据环境使用cdn或相对路径
                publicPath: process.env.NODE_ENV === 'production' ? '/navigation/static/img/' : './',
                // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
                outputPath: process.env.NODE_ENV === 'production' ? 'static/img' : '',
                // 配置打包后图片文件名
                name: '[name].[ext]',
            })
            .end();
    },

    // 配置 webpack-dev-server 行为。

    devServer: {
        disableHostCheck: true,
        open: process.platform === 'darwin',

        host: '0.0.0.0',

        port: 80,

        https: true,

        hotOnly: false,

        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

        proxy: {
            '/api': {
                target: "https://www.zhihu.com",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": "/api"
                }

            },

        },

    },
}