# vue-cli-plugin-walterhu-mobile

A full Vue Cli 3 template for developing mobile app, support element-ui, vux and axios.etc.

## 开始

```
$ vue add walterhu-mobile
$ vue invoke walterhu-mobile
```

## 生成了什么？

```
✔  Successfully invoked generator for plugin: vue-cli-plugin-walterhu-mobile
   The following files have been updated / added:

     vue.config.js
     package.json
     src/App.vue
     ...
```

## 关于vux报错问题
```
WARNING Compiled with 2 warnings 14:47:58

warning in ./node_modules/vux/src/plugins/locale/index.js

"export 'default' (imported as 'querystring') was not found in '../../tools/querystring'

warning in ./node_modules/vux/index.js

"export 'default' (reexported as 'querystring') was not found in './src/tools/querystring/index.js'
```

解决方法: 测试发现可以只注释以下六行代码即可(都是在node_modules/vux/index.js文件中)解决Vue Cli3遇到的问题:
```
// import querystring from './src/tools/querystring/index.js'
// import LocalePlugin from './src/plugins/locale/index.js'
// import Range from './src/components/range/index.vue'
export {
 // LocalePlugin,
// querystring,
 // Range,
}
```
