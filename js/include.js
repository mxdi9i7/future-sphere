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
                <ul class="navbar-nav text-uppercase g-font-weight-600 ml-auto">
                  <li class="nav-item g-mx-20--lg">
                    <a href="/" class="nav-link px-0">
                      首页
                    </a>
                  </li>
                  <li class="nav-item g-mx-20--lg">
                    <a href="/team.html" class="nav-link px-0">
                      关于我们
                    </a>
                  </li>
                  <li class="hs-has-mega-menu nav-item g-mx-20--lg" data-animation-in="fadeIn"
                    data-animation-out="fadeOut" data-position="right">
                    <a id="mega-menu-label-5" class="nav-link g-px-0 g-color-blue" href="#"
                      aria-haspopup="true" aria-expanded="false">核心课程 
                      <i class="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-5"></i>
                    </a>

                    <!-- Mega Menu -->
                    <div
                      class="hs-mega-menu u-shadow-v11 g-text-transform-none g-font-weight-400 g-brd-top g-brd-blue g-brd-top-2 g-bg-white g-pa-30 g-mt-17 g-mt-7--lg--scrolling animated hs-position-right fadeOut"
                      aria-labelledby="mega-menu-label-1" style="display: none;">
                      <div class="row">
                        <div>
                          <ul class="list-unstyled mb-0">
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=web-programming-1">网站开发基础</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=web-programming-2">网站开发进阶</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=web-programming-3">后段工程开发</a>
                            </li>
                            <li class="g-brd-bottom g-brd-gray-light-v4 g-py-10">
                              <a class="g-color-main g-color-main--hover" href="/course.html?course=web-programming-4">前端工程开发</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- End Mega Menu -->
                  </li>
                </ul>
              </div>
              <!-- End Navigation -->
            </div>
          </nav>
        </div>
      </header>
`);

$("#footer").append(`
  <footer id="contact-section" class="container">
          <div class="row g-pt-80">
            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">首页
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">为什么要学编程？</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">讲师团队</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">
                少儿兴趣课程
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">网站编程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">服务器编程</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">App编程</a>
                </li>
              </ul>
              <!-- End Links -->
            </div>

            <div class="col-sm-6 col-lg-3 g-mb-50">
              <h3 class="text-uppercase g-color-black g-font-weight-600 g-font-size-13 mb-3">零基础转行
              </h3>

              <!-- Links -->
              <ul class="list-unstyled">
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">前端软件工程师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">后端软件工程师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">全栈软件工程师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">UI设计师</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">多人项目实践</a>
                </li>
                <li class="g-py-6">
                  <a class="u-link-v5 g-color-gray-dark-v5" href="#">求职辅导</a>
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
                  class="form-control g-placeholder-text g-font-size-13 g-brd-gray-light-v2 g-brd-blue--focus g-rounded-30 g-pl-25 g-pr-40 g-py-15"
                  type="email" placeholder="订阅我们的最新资讯">
                <span class="input-group-addon g-pos-abs g-top-0 g-right-0 h-100 g-brd-left-none">
                  <button
                    class="btn w-100 h-100 g-bg-transparent g-color-black g-color-blue--hover g-font-size-12 g-brd-none g-pa-10"
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
                  <a class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-blue--hover g-font-size-13 rounded-circle"
                    href="https://www.facebook.com/htmlstream">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-blue--hover g-font-size-13 rounded-circle"
                    href="https://twitter.com/htmlstream">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-blue--hover g-font-size-13 rounded-circle"
                    href="https://github.com/htmlstream">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item g-mx-2">
                  <a class="u-icon-v3 g-width-35 g-height-35 g-color-black g-bg-secondary g-color-white--hover g-bg-blue--hover g-font-size-13 rounded-circle"
                    href="https://dribbble.com/htmlstream">
                    <i class="fa fa-dribbble"></i>
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
