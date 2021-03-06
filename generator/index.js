module.exports = (api, options, rootOptions) => {
    const helpers = require('./helpers')(api)
    // 1. 添加删除需要的包文件
    api.extendPackage({
        dependencies: {
            'element-ui': '^2.4.5',
            'vux': '^2.9.2',
            'vue-meta': '^1.5.4',
            "store": "^2.0.12"
        },
        devDependencies: {
            'sass-loader': '^7.0.3',
            'node-sass': '^4.9.2',
            'babel-plugin-component': '^1.1.1',
            "axios": "^0.18.0",
            'less': '^3.8.1',
            'less-loader': '^4.1.0',
            'vue-loader': '14.2.3',
            'vue-template-compiler': '^2.5.17',
            'vux-loader': '^1.2.9'
        }
    })
    // 2. 在main.js中添加引入文件
    const mainfile = 'src/main.js'
    api.injectImports(mainfile, `import './plugins/element.js'`)
    api.injectImports(mainfile, `import './plugins/axios.js'`)
    api.injectImports(mainfile, `import './plugins/vux.js'`)
    api.injectImports(mainfile, `import '@/assets/fonts/iconfont.js'`)

    // 3. 添加/更新模板文件
    // api.render('./template',options)
    api.render({
        './public/index.html': './templates/public/index.html',
        './public/favicon.ico': './templates/public/favicon.ico',
        './public/img/404.jpg': './templates/public/img/404.jpg',
        './vue.config.js': './templates/vue.config.js',
        './src/App.vue': './templates/src/App.vue',
        './src/webconfig.js': './templates/src/webconfig.js',
        './src/assets/fonts/iconfont.css': './templates/src/assets/fonts/iconfont.css',
        './src/assets/fonts/iconfont.eot': './templates/src/assets/fonts/iconfont.eot',
        './src/assets/fonts/iconfont.js': './templates/src/assets/fonts/iconfont.js',
        './src/assets/fonts/iconfont.svg': './templates/src/assets/fonts/iconfont.svg',
        './src/assets/fonts/iconfont.ttf': './templates/src/assets/fonts/iconfont.ttf',
        './src/assets/fonts/iconfont.woff': './templates/src/assets/fonts/iconfont.woff',
        './src/components/sticky.js': './templates/src/components/sticky.js',
        './src/components/NotFound.vue': './templates/src/components/NotFound.vue',
        './src/layouts/MobileLayout.vue': './templates/src/layouts/MobileLayout.vue',
        './src/plugins/element.js': './templates/src/plugins/element.js',
        './src/plugins/axios.js': './templates/src/plugins/axios.js',
        './src/plugins/vux.js': './templates/src/plugins/vux.js',
        './src/router/index.js': './templates/src/router/index.js',
        './src/store/mutation-types.js': './templates/src/store/mutation-types.js',
        './src/store/index.js': './templates/src/store/index.js',
        './src/store/modules/vux.js': './templates/src/store/modules/vux.js',
        './src/utils/StoreUtils.js': './templates/src/utils/StoreUtils.js'
    }, options)

    // 4. 当所有的对话都完成之后，将你的插件注入到
    api.onCreateComplete(() => {
        // update the main.js file
        // helpers.updateMain(src => {
        //     let vueImportIndex = src.findIndex(line => line.match(/^import Vue/));
        //
        //     let axiosImportIndex = src.findIndex(line => line.match(/\/plugins\/axios/));
        //     if (axiosImportIndex < 0) {
        //         src.splice(++vueImportIndex, 0, "import './plugins/axios'");
        //     }
        //     return src;
        // });
        // update babel.config.js fie
        helpers.updateBabelConfig(cfg => {
            const pluginComponent = ['component', {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            }]
            cfg.plugins = cfg.plugins || []
            cfg.plugins.push(pluginComponent)
            return cfg
        })
    })
}
