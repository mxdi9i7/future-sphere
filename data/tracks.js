export const techStacks = {
  HTML: {
    title: "HTML",
    desc:
      "超文本标记语言是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582090930/FutureSphere/assets/1200px-HTML5_logo_and_wordmark.svg.png"
  },
  CSS: {
    title: "CSS",
    desc:
      "CSS不能单独使用，必须与HTML或XML一起协同工作，为HTML或XML起装饰作用。本文主要介绍用于装饰HTML网页的CSS技术。其中HTML负责确定网页中有哪些内容，CSS确定以何种外观(大小、粗细、颜色、对齐和位置)展现这些元素。CSS可以用于设定页面布局、设定页面元素样式、设定适用于所有网页的全局样式。CSS可以零散地直接添加在要应用样式的网页元素上，也可以集中化内置于网页、链接式引入网页以及导入式引入网页。",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582091339/FutureSphere/assets/css3.png"
  },
  Javascript: {
    title: "Javascript",
    desc:
      "JavaScript是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等。",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582410422/FutureSphere/assets/images.png"
  },
  NodeJS: {
    title: "Node.js",
    desc:
      "Node.js 是能够在服务器端运行 JavaScript 的开放源代码、跨平台 JavaScript 运行环境。Node.js大部分基本模块都用JavaScript语言编写。在Node.js出现之前，JavaScript通常作为客户端程序设计语言使用，以JavaScript写出的程序常在用户的浏览器上运行。Node.js的出现使JavaScript也能用于服务端编程。Node.js含有一系列内置模块，使得程序可以脱离Apache HTTP Server或IIS，作为独立服务器运行。",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582140764/FutureSphere/assets/nodejs-development-services.png"
  },
  MongoDB: {
    title: "MongoDB",
    desc:
      "MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582140764/FutureSphere/assets/mongodb.png"
  },
  React: {
    title: "React",
    desc:
      "React，是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。",
    image:
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582140764/FutureSphere/assets/1200px-React-icon.svg.png"
  }
};
const tracksData = [
  {
    title: "前端工程师",
    courses: ["se100", "se200", "se400"],
    timeline: "2个月",
    description:
      "使用 HTML、CSS、JavaScript 等专业技能和工具将产品UI设计稿实现成网站产品，涵盖用户PC端、移动端网页，处理视觉和交互问题。",
    id: "frontend-engineer",
    thumbnail: [
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1578255852/FutureSphere/assets/0_th2x89zHuZmHGsLJ.png",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908106/FutureSphere/assets/792484_cc98_3-thumb.jpg",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908104/FutureSphere/assets/Free_Courses_to_learn_JavaScript-thumb.jpg"
    ],
    numbers: {
      averageSalary: 89000,
      missingPositions: 170000,
      timeToTrain: 2,
      employmentRate: 100
    },
    techStacks: [techStacks.HTML, techStacks.CSS, techStacks.Javascript],
    highlight1: {
      title: "网站设计",
      desc:
        "网站设计是成为软件工程师的第一步。未来领域的网站设计课程从HTML、CSS开始，覆盖网站设计的所有基础元素，包括设计、排版等知识。我们首先学习HTML的基础元素，如：图片、超链接、文本、排版、网站空间结构等。然后深入CSS的设计样式表来对网站进行视觉效果上的优化和提升。学完CSS后我们会开始探索Bootstrap以及各种高级前端模组，学习如何在一天内快速搭建一个排版合理、美轮美奂的网站。课程的最后会学到现代化响应式设计（mobile first)，以及如何部署网站和Git版本管理。这套课程可以让你快速成为一名网站设计师（Web Designer），帮助中小企业设计和维护网站。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908106/FutureSphere/assets/792484_cc98_3-thumb.jpg"
    },
    highlight2: {
      title: "网站编程",
      desc:
        "网站编程主要关注在学习时下最热门的JavaScript语言、浏览器元素的操作、以及用户界面交互的功能上。我们首先会学习JavaScript的数据结构以及一些常用的运算和函数组合。接着我们会继续探索如何运用JS来编写高效的循环、函数等工作中常见的程序。学完循环和函数后我们会继续深入学习如何用JavaScript来操纵浏览器DOM，已达成各种常见的用户交互功能，比如下拉菜单、轮播图、弹出框等功能。课程的最后会重点讲解如何发出和处理网络请求以及处理网页上的表单，如登录、注册、付款等常见场景。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908104/FutureSphere/assets/Free_Courses_to_learn_JavaScript-thumb.jpg"
    }
  },
  {
    title: "后端工程师",
    courses: ["se100", "se200", "se300"],
    timeline: "2个月",
    description:
      "网站的后端涉及搭建服务器、保存和获取数据，以及用于连接前端的接口。后端工程师关心的是如何提升网站的速度、性能和响应性。",
    id: "backend-engineer",
    thumbnail: [
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1578255852/FutureSphere/assets/0_th2x89zHuZmHGsLJ_2.png",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577909200/FutureSphere/assets/Nodejs-e1550234793136-cropped.png",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582140764/FutureSphere/assets/unnamed.png"
    ],
    numbers: {
      averageSalary: 112000,
      missingPositions: 170000,
      timeToTrain: 2,
      employmentRate: 100
    },
    techStacks: [techStacks.Javascript, techStacks.NodeJS, techStacks.MongoDB],
    highlight1: {
      title: "服务器搭建",
      desc:
        "课程使用JavaScript语言学习如何运用Node.js开发服务器以及配套的API服务。对后端开发感兴趣的同学可以学习到如何设计软件应用中最常用的比如登录、注册、修改信息、发帖、付款、收藏、点赞、评论等功能。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577909200/FutureSphere/assets/Nodejs-e1550234793136-cropped.png"
    },
    highlight2: {
      title: "数据库搭建",
      desc:
        "服务器结合数据库模型进行数据的增删查改。这节课还会教你如何编写、维护、并设计一个大型团队可以分享使用的API文档，以及如何在Amazon Web Services（AWS） 云端平台里部署你的服务器和数据库。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1582140764/FutureSphere/assets/unnamed.png"
    }
  },
  {
    title: "全栈工程师",
    courses: ["se100", "se200", "se300", "se400"],
    timeline: "4个月",
    description:
      "全栈工程师的技术涵盖了前端和后端的所有工作，可以作为团队里独当一面的角色。",
    id: "fullstack-engineer",
    thumbnail: [
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1578255553/FutureSphere/assets/fullstack.png",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908104/FutureSphere/assets/1_TmkeYmFJsoUH4S7u3ri3-w-thumb.jpg",
      "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577909200/FutureSphere/assets/Nodejs-e1550234793136-cropped.png"
    ],
    numbers: {
      averageSalary: 125000,
      missingPositions: 170000,
      timeToTrain: 4,
      employmentRate: 100
    },
    techStacks: [techStacks.Javascript, techStacks.React, techStacks.NodeJS],
    highlight1: {
      title: "前端开发",
      desc:
        "Web前端开发技术主要包括三个要素：HTML、css和JavaScript。前端开发不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且要学会运用各种工具进行辅助开发以及理论层面的知识，包括代码的可维护性、组件的易用性、分层语义模板和浏览器分级支持等。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577908104/FutureSphere/assets/1_TmkeYmFJsoUH4S7u3ri3-w-thumb.jpg"
    },
    highlight2: {
      title: "后端开发",
      desc:
        "后端开发即“服务器端”开发，主要涉及软件系统“后端”的东西。比如，用于托管网站和保存数据的服务器、放置在后端服务器与浏览器及 App 之间的中间件，它们都属于后端。简单地说，那些你在屏幕上看不到但又被用来为前端提供支持的东西就是后端。",
      image:
        "https://res.cloudinary.com/dtgh01qqo/image/upload/v1577909200/FutureSphere/assets/Nodejs-e1550234793136-cropped.png"
    }
  }
];

export default tracksData;
