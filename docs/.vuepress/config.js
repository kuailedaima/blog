module.exports = {
  title: '博客', // 网站标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  themeConfig: {
    logo: '/dh_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '百度', link: 'https://www.baidu.com' },
      { text: '前端', link: '/blogs/fontend/' },
      { text: '后端', link: '/blogs/backend/' },
      // 支持嵌套,形成下拉式的导航菜单
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: '英文', link: '/language/english/' }
        ],
      }
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    // sidebar: 'auto',
    sidebar: {
      // 对象的默认路径
      '/blogs/fontend/': [
        '', // 侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)
        'myHtml', // 侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)
        ['myJs', 'JS自定义标题']
      ]
    },
    // sidebarDepth: 2,
    search: true,  // 设置是否使用导航栏上的搜索框
    searchMaxSuggestions: 10  // 搜索框显示的搜索结果数量

  }
}
