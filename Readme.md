# VuePress 开发静态博客

## 预览

**点击 [静态博客](https://moyanxiaoq.github.io/) 查看线上效果**

## 本地运行

```sh
git clone https://github.com/moyanxiaoq/vue-press-blog.git

cd vue-press-blog

yarn
# npm install

yarn dev
# npm run dev
```

## 评论和订阅功能需要自定义的参数

**.vuepress/config.js**

```js
comment: {
  owner: '', // github 用户名
  repo: '', // 仓库地址
  clientId: '', 
  clientSecret: '',
},

newsletter: {
  // ...
  endpoint: ''
},
```

