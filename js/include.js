$('#topBar').append(`
   <div
        class="u-header__section u-header__section--hidden u-header__section--dark g-bg-black g-py-7">
        <div class="container">
          <div
            class="row flex-column flex-md-row align-items-center justify-content-md-end  g-font-weight-600 g-color-white g-font-size-13">
            <div class="col-auto mr-md-auto g-px-15 g-color-white">
              <i class="fa fa-map-pin g-valign-middle g-mr-5"></i>
              在线
            </div>

            <div class="col-auto g-px-15">
              <i class="fa fa-phone g-valign-middle g-mr-5"></i>
              <a href="tel:13477412617" style="color: #fff">347-741-2617</a>
            </div>
            <div class="col-auto g-px-15">
              <i class="fa fa-globe g-valign-middle g-mr-5"></i>
              <a href="https://www.google.com/maps/place/%E6%9C%AA%E6%9D%A5%E9%A2%86%E5%9F%9F+The+Future+Sphere/@40.7488988,-73.9410181,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259bf99fefe27:0xd753f77b894b9474!8m2!3d40.7488948!4d-73.9388294" target="_blank" style="color: #fff">28-07 Jackson Ave. 8FL Long Island City, NY 11101</a>
            </div>
            <div class="col-auto g-px-15">
              <a target="_blank" href="https://score.thefuturesphere.com"><i class="fas fa-user-graduate"></i>学生中心</a>
            </div>
          </div>
        </div>
      </div>
`);
$("#header").append(`
      <header
        class="u-header u-header--static--lg u-header--show-hide--lg u-header--change-appearance--lg"
        data-header-fix-moment="500" data-header-fix-effect="slide">
        <div class="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10"
          data-header-fix-moment-exclude="g-py-10"
          data-header-fix-moment-classes="u-shadow-v18 g-py-0">
          <nav class="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
            <div class="container">
              <!-- Responsive Toggle Button -->
              <button
                class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0"
                type="button" aria-label="Toggle navigation" aria-expanded="false"
                aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                <span class="hamburger hamburger--slider">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </span>
              </button>
              <!-- End Responsive Toggle Button -->

              <!-- Logo -->
              <a href="/" class="navbar-brand">
                <img
                  src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1578112543/FutureSphere/logo%E9%95%BF%E6%96%B9%E5%BD%A2%E9%80%8F%E6%98%8E%E8%83%8C%E6%99%AF.png"
                  alt="未来领域 Logo Future Sphere" height="50">
              </a>
              <!-- End Logo -->

              <!-- Navigation -->
              <div
                class="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg"
                id="navBar">
                <ul class="navbar-nav g-font-weight-600 ml-auto" style="align-items: center" id="header-menu">
                  <li class="nav-item g-mx-20--lg">
                    <a href="/" class="nav-link px-0">
                      首页
                    </a>
                  </li>
                  <li class="nav-item g-mx-20--lg">
                    <a href="/about.html" class="nav-link px-0">
                      关于我们
                    </a>
                  </li>
                   <li class="nav-item g-mx-20--lg">
                    <a href="/career-program.html" class="nav-link px-0">
                      就业保证计划
                    </a>
                  </li>
                  <li class="nav-item g-mx-20--lg">
                    <a href="/kid-python.html" class="nav-link px-0">
                      少儿编程兴趣班
                    </a>
                  </li>
                  <li class="nav-item g-mx-20--lg">
                    <a href="/contact.html" class="nav-link px-0">
                      联系我们
                    </a>
                  </li>
                  <li class="nav-item g-mx-20--lg">
                    <a href="/faq.html" class="nav-link px-0">
                      常见问题
                    </a>
                  </li>
                  <li class="hs-has-mega-menu nav-item g-mx-20--lg" data-animation-in="fadeIn"
                    data-animation-out="fadeOut" data-position="right">
                    <a id="mega-menu-label-5" class="nav-link g-px-0 g-color-blue" href="#"
                      aria-haspopup="true" aria-expanded="false">课程介绍
                      <i class="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-5"></i>
                    </a>

                    <!-- Mega Menu -->
                    <div
                      class="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-font-weight-400 g-brd-top g-brd-blue g-brd-top-2 g-bg-white g-pa-30 g-mt-17 g-mt-7--lg--scrolling animated hs-position-right fadeOut"
                      aria-labelledby="mega-menu-label-5" style="display: none;" id="mega-menu">
                      <div class="row">
                        <div class="col-lg-4">
                          <h4 class="h5 g-font-weight-600">五大旗舰课程</h4>
                          <ul class="list-unstyled mb-0">
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=SE100-web-design">SE100 网站设计</a>
                            </li>

                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=SE200-web-programming">SE200 网站编程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=SE300-backend-engineering">SE300 后端工程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=SE400-frontend-engineering">SE400 前端工程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=SE500-team-commercial-project">SE500 多人商业项目实战</a>
                            </li>
                          </ul>
                        </div>

                        <div class="col-lg-4">
                          <h4 class="h5 text-uppercase g-font-weight-600">三大核心路线</h4>
                          <ul class="list-unstyled mb-0">
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">软件工程师-前端 |
                                Front-End Software Engineer</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">软件工程师-后端 |
                                Back-End Software Engineer</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">软件工程师-全栈 |
                                Full-Stack Software Engineer</a>
                            </li>
                            </li>
                          </ul>
                        </div>

                        <div class="col-lg-4">
                          <h4 class="h5 text-uppercase g-font-weight-600">少儿编程兴趣班</h4>
                          <img
                          style="margin:20px 0;"
                            class="img-fluid g-rounded-10"
                            width="200px"
                            src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1581276236/FutureSphere/assets/1490568812513991.jpg"
                            alt="Image Description"
                          />
                          <a style="display:block;" href="/kid-python.html">了解更多</a>
                        </div>
                      </div>
                    </div>
                    <!-- End Mega Menu -->
                  </li>
                  <li class="nav-item">
                    <a href="/open-class.html" class="btn btn-md u-btn-3d u-btn-blue">报名公开课</a>

                  </li>

                </ul>
              </div>
              <!-- End Navigation -->
            </div>
          </nav>
        </div>
      </header>
`);

$('#footer').append(`
  <footer id="contact-section" class="container">
          <div class="row g-pt-80">
            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">站内导航
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/">首页</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/about.html">关于我们</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/career-program.html">就业保证计划</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/contact.html">联系我们</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="./faq.html">常见问题</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="./open-class.html">报名公开课</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">
                三大核心路线
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/tracks/frontend-engineer">前端工程师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/tracks/backend-engineer">后端工程师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/tracks/fullstack-engineer">全栈工程师</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">五大旗舰课程
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course.html?course=SE100-web-design">SE100 网站设计</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course.html?course=SE200-web-programming">SE200 网站编程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course.html?course=SE300-backend-engineering">SE300 后端工程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course.html?course=SE400-frontend-engineering">SE400 前端工程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course.html?course=SE500-team-commercial-project">SE500 多人商业项目实战</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">

            <div id="mc_embed_signup"><h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">邮箱订阅</h3>
              <form action="https://thefuturesphere.us4.list-manage.com/subscribe/post?u=945333b726d217fae0a64f87a&amp;id=0cb33029f5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate input-group g-pos-rel g-mb-50 g-mb-30--sm" target="_blank" novalidate>

                  <input type="email" value="" name="EMAIL" placeholder="订阅我们的最新资讯" class="required email form-control g-placeholder-text g-font-size-13 g-brd-gray-light-v2 g-brd-blue--focus g-rounded-30 g-pl-25 g-pr-40 g-py-15" id="mce-EMAIL">
                  <span class="input-group-addon g-pos-abs g-top-0 g-right-0 h-100 g-brd-left-none">
                    <button class="btn w-100 h-100 g-bg-transparent g-color-black g-color-blue--hover g-font-size-12 g-brd-none g-pa-10" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button ">
                      <i class="fa fa-long-arrow-right"></i>
                    </button>
                  </span>
              </form>
              <!-- End Forms -->
            </div>
<!--End mc_embed_signup-->

              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">关注我们
              </h3>

                <div class="shortcode-html">
                  <img class="img-fluid" src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1577918606/FutureSphere/qr_code.png" alt="QR Code" height:"50">
                </div>

            </div>
          </div>

          <hr class="g-brd-secondary-light-v1 my-0">

          <!-- Copyright -->
          <div class="row align-items-center g-py-35">
            <div class="col-4">
              <a class="g-text-underline--none--hover" href="index.html">
                <img class="g-width-120"
                  src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1571288541/FutureSphere/logo-cn.png"
                  alt="未来领域 Logo">
              </a>
            </div>
            <div class="col-8 text-right">
              <p class="g-font-size-13 mb-0">© 2020 未来领域 &trade;. 版权所有.</p>
            </div>
          </div>
          <!-- End Copyright -->
        </footer>
        <script>
  function initFreshChat() {
    window.fcWidget.init({
      token: "133112d9-59a4-4c05-8d2e-c04ee61ccd1e",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){
    var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
</script>
`);
