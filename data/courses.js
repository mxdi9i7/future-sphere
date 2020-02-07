const coursesData = [
  {
    title: 'SE100 网站设计',
    highlights: [ '5人小班', '在职高级工程师授课', '课后项目', '期末考核' ],
    hours: 16,
    timeCost: '3-4周',
    hero: {
      url:
        'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581038018/FutureSphere/courses/2811725-637115052559897819-16x9.jpg',
    },
    description: '软件开发的入门课，学习如何设计、排版一个精致的商业级网站，学习如何使用Git来管理项目的进度以及如何部署这个网站，学习如何在手机、平板、电脑上布局、排版网站。',
    slug: 'SE100-web-design',
    id: 'se100',
    thumbnail:
      'https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908106/FutureSphere/assets/792484_cc98_3-thumb.jpg',
    syllabus: [
      {
        title: '第一课：什么是HTML，网页标签',
        desc: '理解网页是如何编辑而成的，学习并运用各种网页的基础标签来做出一个简单的HTML网页',
      },
      {
        title: '第二课：HTML进阶标签',
        desc: '深入学习HTML的其他高级标签，学习如何灵活管理页面上的大量标签，学习如何用HTML做排版设计，学习如何在页面中插入脚本。',
      },
      {
        title: '第三课：CSS入门+基础用法',
        desc: '学习如何利用CSS样式表来设计排版你的页面。',
      },
      {
        title: '第四课：CSS进阶',
        desc: '学习如何使用复杂的CSS高级属性来排版你的页面',
      },
      {
        title: '第五课：Bootstrap',
        desc: '学习如何使用全世界最热门的前端框架：Bootstrap来快速搭建一个网站。以及学习网页的竖版Grid概念。',
      },
      {
        title: '第六课：Git + 网站部署及维护',
        desc: '学习如何使用复杂的CSS高级属性来排版你的页面',
      },
      {
        title: '第七课：Mobile First + 响应式设计',
        desc: '学习如何设计一个响应式的网站并使之兼容各大主流浏览器以及手机操作系统的内核，复习往期内容准备期末考试',
      },
      {
        title: '第八课：期末考试',
        desc: '检验学生所学知识，对不熟不懂知识进行再练习',
      },
    ],
    instructor: {
      name: 'Peter',
      desc: '世界500强药企高级软件工程师',
      github: 'https://github.com/mxdi9i7',
      email: 'peter@bctc.io',
      avatar: {
        url:
          'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581044895/FutureSphere/courses/f0ZbT2ln_400x400_2.jpg',
      },
    },
  },
  {
    title: 'SE200 网站编程',
    highlights: [ '5人小班', '在职高级工程师授课', '课后项目', '期末考核' ],
    hours: 16,
    timeCost: '3-4周',
    hero: {
      url:
        'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581111411/FutureSphere/assets/The-Top-10-Javascript-Frameworks-730x410.jpg',
    },
    description: '学习时下最热门的JavaScript语言、浏览器元素的操作、以及用户界面交互的功能。探索如何运用JS来编写高效的循环、函数等工作中常见的程序。',
    slug: 'SE200-web-programming',
    id: 'se200',
    thumbnail:
      'https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908104/FutureSphere/assets/Free_Courses_to_learn_JavaScript-thumb.jpg',
    syllabus: [
      {
        title: '第一课：JavaScript 数据结构',
        desc: '学习Javascript的数据基础结构，理解每种数据结构的特性和用法。',
      },
      {
        title: '第二课：JS运算+常用函数',
        desc: '深入学习Javascript的基础用法，包括JS Arithmetic，运用数据进行简单的计算以及运用常见的字符串和数学函数。',
      },
      {
        title: '第三课：JS对象+数组常用函数',
        desc: '学习如何处理数组和对象数据。',
      },
      {
        title: 'JS日期+对象和数组Recap',
        desc: '学习如何运用JS日期对象和对应函数',
      },
      {
        title: '第五课：Loop',
        desc: '学习如何编写循环程序。',
      },
      {
        title: '第六课：JS Function + OOP',
        desc: '学习如何用JavaScript创建函数以及面对象编程。',
      },
      {
        title: '第七课：JS DOM操作 + 网络请求 + JSON',
        desc: '学生可以通过JavaScript来请求某个服务器提供的数据端口以获取JSON数据，并渲染在DOM里。',
      },
      {
        title: '第八课：期末考试',
        desc: '检验学生所学知识，对不熟不懂知识进行再练习',
      },
    ],
    instructor: {
      name: 'Peter',
      desc: '世界500强药企高级软件工程师',
      github: 'https://github.com/mxdi9i7',
      email: 'peter@bctc.io',
      avatar: {
        url:
          'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581044895/FutureSphere/courses/f0ZbT2ln_400x400_2.jpg',
      },
    },
  },
  {
    title: 'SE300 后端工程',
    highlights: [ '5人小班', '在职高级工程师授课', '课后项目', '期末考核' ],
    hours: 16,
    timeCost: '3-4周',
    hero: {
      url:
        'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581111997/FutureSphere/assets/Frontend-vs-Backend-Web-Development-feature.webp',
    },
    description: '学习服务器的搭建和数据库的设计，以及设计常见、实用的软件后台。学习如何编写、维护、并设计一个大型团队可以分享使用的API文档，以及如何在Amazon Web Services（AWS） 云端平台里部署你的服务器和数据库。',
    slug: 'SE300-backend-engineering',
    id: 'se300',
    thumbnail:
      'https://res.cloudinary.com/dtgh01qqo/image/upload/v1578255852/FutureSphere/assets/0_th2x89zHuZmHGsLJ_2.png',
    syllabus: [
      {
        title: '第一课：Node.js 基础项目结构',
        desc: '学习了解Node.js的项目结构，学习MVC结构。',
      },
      {
        title: '第二课：Node.js 包、库及管理工具',
        desc: '了解 NPM/Yarn等包管理工具，并安装一些常用的包。学习如何自己打包一个库并部署到NPM。',
      },
      {
        title: '第三课：Node.js 路由设计+中间件',
        desc: '学习Express中间件的概念，以及设计一个Express+Node 的API路由。',
      },
      {
        title: '第四课：连接数据库',
        desc: '学习并运用MongoDB链接Node。',
      },
      {
        title: '第五课：增删查改',
        desc: '学习如何编写增删查改操作，并结合数据库更新。',
      },
      {
        title: '第六课：API设计文档+登录注册功能',
        desc: '学习如何用POSTMAN来测试你的API并设计部署你的API文档，学习使用Session、JWT来设计你的登录注册功能。',
      },
      {
        title: '第七课：服务器以及数据库部署和监控',
        desc: '学习如何部署Node.js服务器，如何部署MongoDB服务器',
      },
      {
        title: '第八课：期末考试',
        desc: '检验学生所学知识，对不熟不懂知识进行再练习',
      },
    ],
    instructor: {
      name: 'Peter',
      desc: '世界500强药企高级软件工程师',
      github: 'https://github.com/mxdi9i7',
      email: 'peter@bctc.io',
      avatar: {
        url:
          'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581044895/FutureSphere/courses/f0ZbT2ln_400x400_2.jpg',
      },
    },
  },
  {
    title: 'SE400 前端工程',
    highlights: [ '5人小班', '在职高级工程师授课', '课后项目', '期末考核' ],
    hours: 16,
    timeCost: '3-4周',
    hero: {
      url:
        'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581112755/FutureSphere/assets/FrontEnd.png',
    },
    description: '前端工程师必学课程，开发复杂的前端模块化组件，设计数据驱动的软件架构',
    slug: 'SE400-frontend-engineering',
    id: 'se400',
    thumbnail:
      'https://res.cloudinary.com/dtgh01qqo/image/upload/v1578255852/FutureSphere/assets/0_th2x89zHuZmHGsLJ.png',
    syllabus: [
      {
        title: '第一课：React原理+项目结构',
        desc: '学习了解React.js的项目结构，以及React的原理。',
      },
      {
        title: '第二课：组件和生命周期',
        desc: '学习Class component 和Functional Components 的区别，并了解this在二者中的区别。',
      },
      {
        title: '第三课：状态State + 属性Props + Hooks',
        desc: '学习如何运用React的State和Props。',
      },
      {
        title: '第四课：事件+表单处理',
        desc: '学习如何处理事件以及表单。',
      },
      {
        title: '第五课：条件渲染，网络请求和循环列表',
        desc: '学习如何有条件地渲染React Markup以及如何处理网络请求并循环数据结果。',
      },
      {
        title: '第六课：Redux和状态管理',
        desc: '学习如何用Redux来管理大型React项目里的数据和状态。',
      },
      {
        title: '第七课：部署React App',
        desc: '学习如何部署React服务器。',
      },
      {
        title: '第八课：期末考试',
        desc: '检验学生所学知识，对不熟不懂知识进行再练习',
      },
    ],
    instructor: {
      name: 'Peter',
      desc: '世界500强药企高级软件工程师',
      github: 'https://github.com/mxdi9i7',
      email: 'peter@bctc.io',
      avatar: {
        url:
          'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581044895/FutureSphere/courses/f0ZbT2ln_400x400_2.jpg',
      },
    },
  },
  {
    title: 'SE500 多人项目实战',
    highlights: [ '5人小班', '在职高级工程师授课', '课后项目', '期末考核' ],
    hours: 16,
    timeCost: '3-4周',
    hero: {
      url:
        'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581113206/FutureSphere/assets/Teamwork-Training-How-to-Get-Your-Employees-to-Work-Better-Together-640x302.png',
    },
    description: '大型商业项目的开发经验、面试的谈资、充实的简历、资深工程师带你Code Review、为学员提供OPT挂靠与项目工作证明、体验小团队创业氛围。',
    slug: 'SE500-team-commercial-project',
    id: 'se100',
    thumbnail:
      'https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908103/FutureSphere/assets/teamwork-and-team-building-thumb.jpg',
    syllabus: [
      {
        title: '第一课：',
        desc: '',
      },
    ],
    instructor: {
      name: 'Peter',
      desc: '世界500强药企高级软件工程师',
      github: 'https://github.com/mxdi9i7',
      email: 'peter@bctc.io',
      avatar: {
        url:
          'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581044895/FutureSphere/courses/f0ZbT2ln_400x400_2.jpg',
      },
    },
  },
  
];

export default coursesData;
