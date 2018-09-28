module.exports = (api, options, rootOptions) => {
    const helpers = require('./helpers')(api)
    // 1. 添加删除需要的包文件
    api.extendPackage({
        dependencies: {
            'element-ui': '^2.4.5',
            'vux': '^2.9.2'
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
    const mainfile='src/main.js
    api.injectImports(mainfile, `import './plugins/element.js'`)
    api.injectImports(mainfile, `import './plugins/axios.js'`)

    // 3. 添加/更新模板文件
    ap.render('./template',options)
    // api.render({
    //     './src/element-variables.scss': './templates/src/element-variables.scss',
    //     './src/plugins/element.js': './templates/src/plugins/element.js',
    //     './src/App.vue': './templates/src/App.vue',
    //     './src/plugins/axios.js': './templates/src/plugins/axios.js',
    // }, options)

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
