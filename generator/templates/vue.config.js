const vuxLoader = require('vux-loader')

module.exports = {
    configureWebpack: config => {
        config.devtool = 'source-map'
        vuxLoader.merge(config, {
            plugins: ['vux-ui', 'duplicate-style']
        })
    }
}
