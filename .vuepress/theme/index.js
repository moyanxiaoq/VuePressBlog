module.exports = {
  extend: '@vuepress/theme-blog',
  plugins: [
    ['@vuepress/back-to-top', true],
    ['vuepress-plugin-baidu-autopush', {}],
    ['vuepress-plugin-code-copy', true],// 暂时没起作用
    // see: https://vssue.js.org/guide/vuepress.html#usage
    ['@vssue/vuepress-plugin-vssue', { // 暂时未配置
        platform: 'github',
        owner: 'moyanxiaoq',
        repo: 'xxxxxxxx',
        clientId: 'xxxxxxxxxxx',
        clientSecret: 'xxxxxxxxxxxxxxxxxxxxxx',
      }
    ],
    // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
    ['copyright', { // 暂时没起作用
        noCopy: false, // 允许复制内容
        minLength: 10, // 如果长度超过 100 个字符
        authorName: "https://moyanxiaoq.github.io/",
        // clipboardComponent: "请注明文章出处, [快乐学习与分享](https://moyanxiaoq.github.io/)"
      }
    ],
    // See: https://vuepress.github.io/zh/plugins/medium-zoom/#%E5%AE%89%E8%A3%85
    ['vuepress-plugin-medium-zoom', 
      {
        selector: 'img',
        delay: 1000,
        options: {
          margin: 16,
          background: '#ccc',
          scrollOffset: 0,
        }
      }
    ],
    ['vuepress-plugin-nprogress', {}],
    // See: https://vuepress.github.io/zh/plugins/container/#vuepress-plugin-container
    ['vuepress-plugin-container', {
        type: 'right',
        defaultTitle: '',
      }
    ],
    ['vuepress-plugin-container', {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      }
    ],
    // 这是 VuePress 默认主题使用这个插件的方式
    ['vuepress-plugin-container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      }
    ],
    ['vuepress-plugin-container', 
      {
        type: 'czq',
        defaultTitle: '',
      }
    ],
  ],
}