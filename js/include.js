$('#topBar').append(`
   <div
        class="u-header__section u-header__section--hidden u-header__section--dark g-bg-black g-py-7">
        <div class="container">
          <div
            class="row flex-column flex-md-row align-items-center justify-content-md-end text-uppercase g-font-weight-600 g-color-white g-font-size-13">
            <div class="col-auto mr-md-auto g-px-15 g-color-primary">
              <i class="fa fa-map-pin g-valign-middle g-mr-5"></i>
              在线
            </div>

            <div class="col-auto g-px-15">
              <i class="fa fa-phone g-valign-middle g-mr-5"></i>
              <a href="tel:16466397087">646-639-7087</a>
            </div>

            <div class="col-auto g-px-15">
              <i class="fa fa-globe g-valign-middle g-mr-5"></i>
              <span>28-07 Jackson Ave. Long Island City, NY 11101</span>
            </div>

            <div class="col-auto g-px-15">
              <ul class="list-inline mb-0 g-mx-minus-3">
                <li class="list-inline-item g-valign-middle g-mx-3">
                  <a class="d-block g-color-gray-light-v1 g-color-gray-light-v1--hover" href="/contact.html">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
`);
$("#header").append(`
      <header id="js-header"
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
                  src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1571288541/FutureSphere/logo-cn.png"
                  alt="未来领域 Logo Future Sphere" height="50">
              </a>
              <!-- End Logo -->

              <!-- Navigation -->
              <div
                class="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg"
                id="navBar">
                <ul class="navbar-nav text-uppercase g-font-weight-600 ml-auto" style="align-items: center">
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
                  <li class="hs-has-mega-menu nav-item g-mx-20--lg" data-animation-in="fadeIn"
                    data-animation-out="fadeOut" data-position="right">
                    <a id="mega-menu-label-5" class="nav-link g-px-0 g-color-primary" href="#"
                      aria-haspopup="true" aria-expanded="false">课程介绍
                      <i class="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-5"></i>
                    </a>

                    <!-- Mega Menu -->
                    <div
                      class="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-font-weight-400 g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-17 g-mt-7--lg--scrolling animated hs-position-right fadeOut"
                      aria-labelledby="mega-menu-label-5" style="display: none;">
                      <div class="row">
                        <div class="col-lg-4">
                          <h4 class="h5 text-uppercase g-font-weight-600">五大旗舰课程</h4>
                          <ul class="list-unstyled mb-0">
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=web-programming-1">SE100 网站设计</a>
                            </li>

                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">SE200 网站编程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">SE300 后端工程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">SE400 前端工程</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">SE500 多人商业项目实战</a>
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
                          <h4 class="h5 text-uppercase g-font-weight-600">其他课程</h4>
                          <ul class="list-unstyled mb-0">
                          <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">少儿编程兴趣班</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">钢琴陪练/考级</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">动画设计</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">成人英文教育</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">精英SAT培训</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="#">学科辅导</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- End Mega Menu -->
                  </li>
                  <li class="nav-item">
                    <a href="/open-class.html" class="btn btn-md u-btn-3d u-btn-primary">报名公开课</a>

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
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">首页
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">关于我们</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">报名公开课</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">参观教室</a>
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
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course/se100-web-design">SE100 网站设计</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course/se200-web-programming">SE200 网站编程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course/se300-backend-engineering">SE300 后端工程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course/se400-frontend-engineering">SE400 前端工程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="/course/se500-team-commercial-project">SE500 多人商业项目实战</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">
                邮箱订阅
              </h3>

              <!-- Forms -->
              <form class="input-group g-pos-rel g-mb-50 g-mb-30--sm">
                <input
                  class="form-control g-placeholder-text g-font-size-13 g-brd-gray-light-v2 g-brd-primary--focus g-rounded-30 g-pl-25 g-pr-40 g-py-15"
                  type="email" placeholder="订阅我们的最新资讯">
                <span class="input-group-addon g-pos-abs g-top-0 g-right-0 h-100 g-brd-left-none">
                  <button
                    class="btn w-100 h-100 g-bg-transparent g-color-black g-color-primary--hover g-font-size-12 g-brd-none g-pa-10"
                    type="submit">
                    <i class="fa fa-long-arrow-right"></i>
                  </button>
                </span>
              </form>
              <!-- End Forms -->

              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">关注我们
              </h3>

              <!-- Social Icons -->
              <ul class="list-inline mb-0">
                <li class="list-inline-item g-mx-2">
                  <a target="_blank" class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-primary--hover g-font-size-13 rounded-circle"
                    href="https://www.facebook.com/%E6%9C%AA%E6%9D%A5%E9%A2%86%E5%9F%9F-102553791245784">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a target="_blank" class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-primary--hover g-font-size-13 rounded-circle"
                    href="https://www.linkedin.com/company/future-sphere/">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a target="_blank" class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-primary--hover g-font-size-13 rounded-circle"
                    href="https://github.com/future-sphere">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a target="_blank" class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-primary--hover g-font-size-13 rounded-circle"
                    href="https://www.youtube.com/channel/UC48B4o5vBb2u9dCEktRWeyg">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
              <!-- End Social Icons -->
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
`);
