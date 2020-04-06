module.exports = {
  base: '/',
  title: '快乐学习与分享', // Title for the site. This will be displayed in the navbar.
  description: '学习笔记 资源分享 破解软件 开发教程',
  lange: 'zh-CN',
  theme: require.resolve('./theme/'),
  markdown: {
    lineNumbers: true
  },
  // plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '博客',
        link: '/posts/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '随笔',
        link: '/others/',
      },
    ],
    directories: [
      {
        id: 'home',
        dirname: '_posts',
        path: '/',
        layout: 'IndexHome'
      },
      {
        id: 'post',
        dirname: '_posts',
        path: '/posts/',
        itemPermalink: '/posts/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 2,
        }
      },
      {
        id: 'others',
        dirname: '_others',
        path: '/others/',
        itemPermalink: '/posts/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 2,
        }
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/moyanxiaoq/vue-press-blog',
        }
      ],
      copyright: [
        {
          text: '快乐学习与分享 | Copyright © 2020-chenzhiq',
          link: 'https://github.com/moyanxiaoq/vue-press-blog',
        },
      ]
    },
    comment: {
      service: 'vssue',
      owner: 'moyanxiaoq',
      repo: 'vue-press-blog', 
      clientId: '',
      clientSecret: '',
    },

    

    smoothScroll: true
  }
}