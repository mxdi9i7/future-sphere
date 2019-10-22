$('#header').append(`
     <header id="js-header" class="u-header u-header--static">
        <div class="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
          <nav class="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
            <div class="container">
              <!-- Responsive Toggle Button -->
              <button
                class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-minus-3 g-right-0"
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
              <a href="../../index.html" class="navbar-brand d-flex">
                <svg width="86px" height="32px" viewBox="0 0 86 32" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-78.000000, -19.000000)">
                      <g transform="translate(78.000000, 19.000000)">
                        <path class="g-fill-primary"
                          d="M0,0 L19.2941176,0 L19.2941176,0 C23.7123956,-8.11624501e-16 27.2941176,3.581722 27.2941176,8 L27.2941176,27.2941176 L8,27.2941176 L8,27.2941176 C3.581722,27.2941176 5.41083001e-16,23.7123956 0,19.2941176 L0,0 Z">
                        </path>
                        <path class="g-fill-white"
                          d="M21.036662,24.8752523 L20.5338647,22.6659916 L20.3510293,22.6659916 C19.8533083,23.4481246 19.1448284,24.0626484 18.2255681,24.5095816 C17.3063079,24.9565147 16.2575544,25.1799779 15.0792761,25.1799779 C13.0376043,25.1799779 11.5139914,24.672107 10.5083918,23.6563498 C9.50279224,22.6405927 9,21.1017437 9,19.0397567 L9,8.02392554 L12.6109986,8.02392554 L12.6109986,18.4150692 C12.6109986,19.7050808 12.8750915,20.6725749 13.4032852,21.3175807 C13.9314789,21.9625865 14.7593086,22.2850846 15.886799,22.2850846 C17.3901196,22.2850846 18.4947389,21.8356188 19.2006901,20.9366737 C19.9066413,20.0377286 20.2596117,18.5318912 20.2596117,16.4191164 L20.2596117,8.02392554 L23.855374,8.02392554 L23.855374,24.8752523 L21.036662,24.8752523 Z">
                        </path>
                        <path class="g-fill-main"
                          d="M44.4764678,24.4705882 L40.8807055,24.4705882 L40.8807055,14.1099172 C40.8807055,12.809748 40.6191519,11.8397145 40.096037,11.1997875 C39.5729221,10.5598605 38.7425531,10.2399018 37.6049051,10.2399018 C36.0914269,10.2399018 34.9842682,10.6868282 34.2833958,11.5806945 C33.5825234,12.4745608 33.2320924,13.9727801 33.2320924,16.0753974 L33.2320924,24.4705882 L29.6515664,24.4705882 L29.6515664,7.61926145 L32.4550421,7.61926145 L32.9578394,9.8285222 L33.1406747,9.8285222 C33.6485533,9.02607405 34.3697301,8.40647149 35.3042266,7.96969592 C36.2387232,7.53292034 37.27478,7.31453583 38.412428,7.31453583 C42.4551414,7.31453583 44.4764678,9.3714132 44.4764678,13.4852296 L44.4764678,24.4705882 Z M53.7357283,24.4705882 L50.1552023,24.4705882 L50.1552023,7.61926145 L53.7357283,7.61926145 L53.7357283,24.4705882 Z M49.9418944,3.15503112 C49.9418944,2.51510412 50.1171098,2.0224693 50.467546,1.67711187 C50.8179823,1.33175444 51.3182351,1.15907831 51.9683197,1.15907831 C52.5980892,1.15907831 53.0881846,1.33175444 53.4386208,1.67711187 C53.7890571,2.0224693 53.9642725,2.51510412 53.9642725,3.15503112 C53.9642725,3.76448541 53.7890571,4.24442346 53.4386208,4.59485968 C53.0881846,4.94529589 52.5980892,5.12051137 51.9683197,5.12051137 C51.3182351,5.12051137 50.8179823,4.94529589 50.467546,4.59485968 C50.1171098,4.24442346 49.9418944,3.76448541 49.9418944,3.15503112 Z M68.0077253,10.3313195 L63.8939294,10.3313195 L63.8939294,24.4705882 L60.2981671,24.4705882 L60.2981671,10.3313195 L57.525164,10.3313195 L57.525164,8.65532856 L60.2981671,7.55831633 L60.2981671,6.4613041 C60.2981671,4.47042009 60.7654084,2.99505497 61.699905,2.03516447 C62.6344015,1.07527397 64.0615189,0.595335915 65.9812999,0.595335915 C67.2408388,0.595335915 68.4800439,0.803563007 69.6989525,1.22002344 L68.7543031,3.93208145 C67.8705943,3.64766945 67.0275286,3.50546559 66.2250804,3.50546559 C65.4124747,3.50546559 64.820805,3.75686171 64.4500537,4.25966149 C64.0793023,4.76246128 63.8939294,5.51664965 63.8939294,6.52224922 L63.8939294,7.61926145 L68.0077253,7.61926145 L68.0077253,10.3313195 Z M69.0089215,7.61926145 L72.9094094,7.61926145 L76.3375727,17.1724096 C76.8556088,18.5335242 77.2009611,19.813359 77.3736398,21.0119524 L77.49553,21.0119524 C77.5869482,20.453286 77.7545456,19.7752783 77.9983273,18.9779089 C78.242109,18.1805396 79.5321012,14.3943616 81.8683427,7.61926145 L85.738358,7.61926145 L78.5315971,26.7103215 C77.2212704,30.2146837 75.0374253,31.9668385 71.9799963,31.9668385 C71.1877057,31.9668385 70.4157419,31.8805004 69.6640816,31.7078217 L69.6640816,28.8738734 C70.2024329,28.9957643 70.8169567,29.0567088 71.5076716,29.0567088 C73.2344587,29.0567088 74.4482703,28.056203 75.1491427,26.0551615 L75.7738303,24.4705882 L69.0089215,7.61926145 Z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <!-- End Logo -->

              <!-- Navigation -->
              <div
                class="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg"
                id="navBar">
                <ul class="navbar-nav text-uppercase g-pos-rel g-font-weight-600 ml-auto">
                  <!-- Intro -->
                  <li class="nav-item  g-mx-10--lg g-mx-15--xl">
                    <a href="../../index.html" class="nav-link g-py-7 g-px-0">Intro</a>
                  </li>
                  <!-- End Intro -->

                  <!-- Home -->
                  <li class="hs-has-mega-menu nav-item active g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%"
                    data-position="left">
                    <a id="mega-menu-home" class="nav-link g-py-7 g-px-0" href="#"
                      aria-haspopup="true" aria-expanded="false">Home
                      <i class="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7"></i></a>

                    <!-- Mega Menu -->
                    <div
                      class="w-100 hs-mega-menu u-shadow-v11 font-weight-normal g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-mt-18 g-mt-8--lg--scrolling"
                      aria-labelledby="mega-menu-home">
                      <div class="row align-items-stretch no-gutters">
                        <!-- Home (col) -->
                        <div class="col-lg-6">
                          <ul class="list-unstyled">
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-default.html"
                                class="nav-link">Default</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-incredible.html"
                                class="nav-link">Incredible</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-studio.html"
                                class="nav-link">Studio</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-allure.html"
                                class="nav-link">Allure</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-inspire.html"
                                class="nav-link">Inspire</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-portfolio.html"
                                class="nav-link">Portfolio</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-creative.html"
                                class="nav-link">Creative</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-projects.html"
                                class="nav-link">Projects</a>
                            </li>
                          </ul>
                        </div>
                        <!-- End Home (col) -->

                        <!-- Home (col) -->
                        <div class="col-lg-6 g-brd-left--lg g-brd-gray-light-v5">
                          <ul class="list-unstyled">
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-discover.html"
                                class="nav-link">Discover</a>
                            </li>
                            <li class="dropdown-item active">
                              <a href="../../unify-main/home/home-brave.html"
                                class="nav-link">Brave</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-business.html"
                                class="nav-link">Business</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-corporate.html"
                                class="nav-link">Corporate</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-web-agency.html"
                                class="nav-link">Web Agency</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-aspire.html"
                                class="nav-link">Aspire</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-showcase.html"
                                class="nav-link">Showcase</a>
                            </li>
                            <li class="dropdown-item ">
                              <a href="../../unify-main/home/home-news.html"
                                class="nav-link">News</a>
                            </li>
                          </ul>
                        </div>
                        <!-- End Home (col) -->
                      </div>
                    </div>
                    <!-- End Mega Menu -->
                  </li>
                  <!-- End Home -->

                  <!-- Pages -->
                  <li class="hs-has-sub-menu nav-item  g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn" data-animation-out="fadeOut">
                    <a id="nav-link-pages" class="nav-link g-py-7 g-px-0" href="#"
                      aria-haspopup="true" aria-expanded="false"
                      aria-controls="nav-submenu-pages">Pages</a>

                    <ul
                      class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling"
                      id="nav-submenu-pages" aria-labelledby="nav-link-pages">
                      <!-- Pages - About -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--about" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--about">About</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--about" aria-labelledby="nav-link--pages--about">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-1.html">About 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-2.html">About 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-3.html">About 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-4.html">About 4</a>
                          </li>

                          <li class="dropdown-divider"></li>

                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-me-1.html">About me 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-me-2.html">About me 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-about-me-3.html">About me 3</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - About -->

                      <!-- Pages - Portfolios -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--portfolio" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--portfolio">Portfolios</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--portfolio"
                          aria-labelledby="nav-link--pages--portfolio">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-case-study-1.html">Case
                              Studies 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-case-study-2.html">Case
                              Studies 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-1.html">Single
                              item 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-2.html">Single
                              item 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-3.html">Single
                              item 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-4.html">Single
                              item 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-5.html">Single
                              item 5</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-6.html">Single
                              item 6</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-7.html">Single
                              item 7</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-8.html">Single
                              item 8</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-portfolio-single-item-9.html">Single
                              item 9</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Portfolios -->

                      <!-- Pages - Login &amp; Signup -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--login-signup" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--login-signup">Login &amp; Signup</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--login-signup"
                          aria-labelledby="nav-link--pages--login-signup">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-and-signup-1.html">Login &amp;
                              Signup</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-1.html">Signup 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-2.html">Signup 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-3.html">Signup 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-4.html">Signup 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-5.html">Signup 5</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-6.html">Signup 6</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-7.html">Signup 7</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-8.html">Signup 8</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-9.html">Signup 9</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-10.html">Signup 10</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-11.html">Signup 11</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-signup-12.html">Signup 12</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-1.html">login 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-2.html">Login 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-3.html">Login 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-4.html">Login 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-5.html">Login 5</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-6.html">Login 6</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-7.html">Login 7</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-8.html">Login 8</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-9.html">Login 9</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-10.html">Login 10</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-11.html">Login 11</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-login-12.html">Login 12</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Login &amp; Signup -->

                      <!-- Pages - Services -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--services" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--services">Services</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--services"
                          aria-labelledby="nav-link--pages--services">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-services-1.html">Services 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-services-2.html">Services 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-services-3.html">Services 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-services-4.html">Services 4</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Services -->

                      <!-- Pages - Search results -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--search-result" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--search-result">Search results</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--search-result"
                          aria-labelledby="nav-link--pages--search-result">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-search-results-grid-veiw-1.html">Grid
                              View</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-search-results-grid-veiw-left-sidebar-1.html">Grid
                              View <span class="g-opacity-0_5">(with Sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-search-results-list-veiw-1.html">List
                              View 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-search-results-list-veiw-2.html">List
                              View 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-search-results-list-veiw-left-sidebar-1.html">List
                              View <span class="g-opacity-0_5">(with Sidebar)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Search results -->

                      <!-- Pages - Profiles -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--profile" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--profile">Profiles</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--profile"
                          aria-labelledby="nav-link--pages--profile">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-main-1.html">Main</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-profile-1.html">User</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-projects-1.html">Projects</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-comments-1.html">Comments</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-history-1.html">History</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-reviews-1.html">Reviews</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-settings-1.html">Settings</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-users-1.html">Contacts 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-users-1-full-width.html">Contacts
                              1 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-users-2.html">Contacts 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-profile-users-2-full-width.html">Contacts
                              2 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Profiles -->

                      <!-- Pages - Сontacts -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--contacts" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--contacts">Сontacts</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--contacts"
                          aria-labelledby="nav-link--pages--contacts">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-1.html">Сontacts 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-2.html">Сontacts 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-3.html">Сontacts 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-4.html">Сontacts 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-5.html">Сontacts 5</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-6.html">Сontacts 6</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-7.html">Сontacts 7</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-contacts-8.html">Сontacts 8</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Сontacts -->

                      <!-- Pages - Jobs -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--jobs" class="nav-link" href="#" aria-haspopup="true"
                          aria-expanded="false" aria-controls="nav-submenu--pages--jobs">Jobs</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--jobs" aria-labelledby="nav-link--pages--jobs">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-jobs-1.html">Jobs</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-jobs-description-right-sidebar-1.html">Jobs
                              Description</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - Jobs -->

                      <!-- Pages - Pricing -->
                      <li class="dropdown-item ">
                        <a class="nav-link"
                          href="../../unify-main/pages/page-pricing-1.html">Pricing</a>
                      </li>
                      <!-- End Pages - Pricing -->

                      <!-- Pages - FAQ -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--faq" class="nav-link" href="#" aria-haspopup="true"
                          aria-expanded="false" aria-controls="nav-submenu--pages--faq">FAQ</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--faq" aria-labelledby="nav-link--pages--faq">
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../unify-main/pages/page-faq-1.html">FAQ
                              1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../unify-main/pages/page-faq-2.html">FAQ
                              2</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Pages - FAQ -->

                      <!-- Pages - Others -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--others" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--others">Others</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--others" aria-labelledby="nav-link--pages--others">
                          <!-- Clients -->
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-clients-1.html">Clients</a>
                          </li>
                          <!-- End Clients -->

                          <!-- Terms -->
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-terms-1.html">Terms</a>
                          </li>
                          <!-- End Terms -->

                          <!-- Сookies -->
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-cookies-1.html">Сookies</a>
                          </li>
                          <!-- End Сookies -->

                          <!-- Invoice -->
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/pages/page-invoice-1.html">Invoice</a>
                          </li>
                          <!-- End Invoice -->

                          <!-- 404 -->
                          <li class="dropdown-item hs-has-sub-menu ">
                            <a id="nav-link--pages--404" class="nav-link" href="#"
                              aria-haspopup="true" aria-expanded="false"
                              aria-controls="nav-submenu--pages--404">404</a>

                            <ul
                              class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 "
                              id="nav-submenu--pages--404" aria-labelledby="nav-link--pages--404">
                              <li class="dropdown-item ">
                                <a class="nav-link" href="../../specialty-pages/404/404-1.html">404
                                  1</a>
                              </li>
                              <li class="dropdown-item ">
                                <a class="nav-link" href="../../specialty-pages/404/404-2.html">404
                                  2</a>
                              </li>
                            </ul>
                          </li>
                          <!-- End 404 -->

                          <!-- Coming Soon -->
                          <li class="dropdown-item hs-has-sub-menu ">
                            <a id="nav-link--pages--coming-soon" class="nav-link" href="#"
                              aria-haspopup="true" aria-expanded="false"
                              aria-controls="nav-submenu--pages--coming-soon">Coming Soon</a>

                            <ul
                              class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 "
                              id="nav-submenu--pages--coming-soon"
                              aria-labelledby="nav-link--pages--coming-soon">
                              <li class="dropdown-item ">
                                <a class="nav-link"
                                  href="../../specialty-pages/coming-soon/page-coming-soon-1.html">Coming
                                  Soon</a>
                              </li>
                            </ul>
                          </li>
                          <!-- End Coming Soon -->
                        </ul>
                      </li>
                      <!-- End Pages - Others -->
                    </ul>
                  </li>
                  <!-- End Pages -->

                  <!-- Blog -->
                  <li class="nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn" data-animation-out="fadeOut">
                    <a id="nav-link--blog" class="nav-link g-py-7 g-px-0" href="#"
                      aria-haspopup="true" aria-expanded="false"
                      aria-controls="nav-submenu--blog">Blog</a>

                    <ul
                      class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling"
                      id="nav-submenu--blog" aria-labelledby="nav-link--blog">
                      <!-- Blog - Minimal -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--minimal" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--minimal">Minimal</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--minimal"
                          aria-labelledby="nav-link--pages--blog--minimal">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-1.html">Minimal 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-1-left-sidebar.html">Minimal
                              1 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-1-right-sidebar.html">Minimal
                              1 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-2.html">Minimal 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-2-left-sidebar.html">Minimal
                              2 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-2-right-sidebar.html">Minimal
                              2 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-3.html">Minimal 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-3-left-sidebar.html">Minimal
                              3 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-3-right-sidebar.html">Minimal
                              3 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-4.html">Minimal 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-4-left-sidebar.html">Minimal
                              4 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-minimal-4-right-sidebar.html">Minimal
                              4 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Minimal -->

                      <!-- Blog - Grid Background -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--grid-bg" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--grid-bg">Grid Background</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--grid-bg"
                          aria-labelledby="nav-link--pages--blog--grid-bg">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-2.html">Column
                              2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-left-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-right-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-3.html">Column
                              3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-3-fullwidth.html">Column
                              3 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-4.html">Column
                              4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-background-overlay-4-fullwidth.html">Column
                              4 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Grid Background -->

                      <!-- Blog - Grid Classic -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--grid-classic" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--grid-classic">Grid Classic</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--grid-classic"
                          aria-labelledby="nav-link--pages--blog--grid-classic">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-2.html">Column 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-left-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-right-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-3.html">Column 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-3-fullwidth.html">Column
                              3 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-4.html">Column 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-classic-4-fullwidth.html">Column
                              4 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Grid Classic -->

                      <!-- Blog - Grid Modern -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--grid-modern" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--grid-modern">Grid Modern</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--grid-modern"
                          aria-labelledby="nav-link--pages--blog--grid-modern">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-modern-1.html">Modern 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-modern-2.html">Modern 2</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Grid Modern -->

                      <!-- Blog - Grid Overlap -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--grid-overlap" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--grid-overlap">Grid Overlap</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--grid-overlap"
                          aria-labelledby="nav-link--pages--blog--grid-overlap">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-2.html">Column 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-left-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(left sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-right-sidebar.html">Column
                              2 <span class="g-opacity-0_5">(right sidebar)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-3.html">Column 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-3-fullwidth.html">Column
                              3 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-grid-overlap-4-fullwidth.html">Column
                              4 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Grid Overlap -->

                      <!-- Blog - Masonry -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--masonry" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--masonry">Masonry</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--masonry"
                          aria-labelledby="nav-link--pages--blog--masonry">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-masonry-col-2.html">Column 2</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-masonry-col-3.html">Column 3</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-masonry-col-3-fullwidth.html">Column
                              3 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-masonry-col-4.html">Column 4</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-masonry-col-4-fullwidth.html">Column
                              4 <span class="g-opacity-0_5">(full width)</span></a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Masonry -->

                      <!-- Blog - Single items -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--pages--blog--single-item" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--pages--blog--single-item">Single items</a>

                        <!-- Submenu (level 2) -->
                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--pages--blog--single-item"
                          aria-labelledby="nav-link--pages--blog--single-item">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-single-item-1.html">Single item 1</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/blog/blog-single-item-2.html">Single item 2</a>
                          </li>
                        </ul>
                        <!-- End Submenu (level 2) -->
                      </li>
                      <!-- End Blog - Single items -->
                    </ul>
                  </li>
                  <!-- End Blog -->

                  <!-- Features -->
                  <li class="nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn" data-animation-out="fadeOut">
                    <a id="nav-link--features" class="nav-link g-py-7 g-px-0" href="#"
                      aria-haspopup="true" aria-expanded="false"
                      aria-controls="nav-submenu--features">Features</a>

                    <ul
                      class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling"
                      id="nav-submenu--features" aria-labelledby="nav-link--features">
                      <!-- Features - Headers -->
                      <li class="dropdown-item ">
                        <a class="nav-link"
                          href="../../unify-main/shortcodes/headers/index.html">Headers</a>
                      </li>
                      <!-- End Features - Headers -->

                      <!-- Features - Promo blocks -->
                      <li class="dropdown-item ">
                        <a class="nav-link"
                          href="../../unify-main/shortcodes/promo/index.html">Promo Blocks</a>
                      </li>
                      <!-- End Features - Promo blocks -->

                      <!-- Features - Sliders -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--features--sliders" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--features--sliders">Sliders</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--features--sliders"
                          aria-labelledby="nav-link--features--sliders">
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../revolution-slider/index.html">Revolution
                              sliders</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../master-slider/index.html">Master
                              sliders</a>
                          </li>
                        </ul>
                      </li>
                      <!-- End Features - Sliders -->

                      <!-- Features - Pop-ups -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--features--pop-ups" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--features--pop-ups">Pop-ups</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--features--pop-ups"
                          aria-labelledby="nav-link--features--pop-ups">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-base-lightbox.html">Lightbox</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-base-modals.html">Modals</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-blocks-gallery-grid.html">Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <!-- End Features - Pop-ups -->

                      <!-- Features - Maps -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--features--maps" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--features--maps">Maps</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--features--maps"
                          aria-labelledby="nav-link--features--maps">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-base-google-maps.html">Google
                              Maps</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-base-maps-with-pins.html">Maps
                              With Pins</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/shortcode-base-vector-maps.html">Vector
                              Maps</a>
                          </li>
                        </ul>
                      </li>
                      <!-- End Features - Maps -->

                      <!-- Features - Footers -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--features--footers" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--features--footers">Footers</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                          id="nav-submenu--features--footers"
                          aria-labelledby="nav-link--features--footers">
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/footers/shortcode-blocks-footer-classic.html">Classic
                              Footers</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/footers/shortcode-blocks-footer-contact-forms.html">Contact
                              Forms</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/footers/shortcode-blocks-footer-maps.html">Footers
                              Maps</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link"
                              href="../../unify-main/shortcodes/footers/shortcode-blocks-footer-modern.html">Modern
                              Footers</a>
                          </li>
                        </ul>
                      </li>
                      <!-- End Features - Footers -->
                    </ul>
                  </li>
                  <!-- End Features -->

                  <!-- Shortcodes -->
                  <li class="nav-item  g-mx-10--lg g-mx-15--xl">
                    <a href="../../unify-main/shortcodes/index.html"
                      class="nav-link g-py-7 g-px-0">Shortcodes</a>
                  </li>
                  <!-- End Shortcodes -->

                  <!-- Demos -->
                  <li class="nav-item hs-has-sub-menu  g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn" data-animation-out="fadeOut">
                    <a id="nav-link-demos" class="nav-link g-py-7 g-px-0" href="#"
                      aria-haspopup="true" aria-expanded="false"
                      aria-controls="nav-submenu-demos">Demos</a>

                    <ul
                      class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling"
                      id="nav-submenu-demos" aria-labelledby="nav-link-demos">
                      <!-- Demos - One Pages -->
                      <li class="dropdown-item hs-has-sub-menu ">
                        <a id="nav-link--demos--one-page" class="nav-link" href="#"
                          aria-haspopup="true" aria-expanded="false"
                          aria-controls="nav-submenu--demos--one-page">One Pages</a>

                        <ul
                          class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2 hs-reversed"
                          id="nav-submenu--demos--one-page"
                          aria-labelledby="nav-link--demos--one-page">
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/accounting/index.html"
                              target="_blank">Accounting</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/agency/index.html"
                              target="_blank">Agency</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/app/index.html"
                              target="_blank">App</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/architecture/index.html"
                              target="_blank">Architecture</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/business/index.html"
                              target="_blank">Business</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/charity/index.html"
                              target="_blank">Charity</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/consulting/index.html"
                              target="_blank">Сonsulting</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/construction/index.html"
                              target="_blank">Construction</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/courses/index.html"
                              target="_blank">Courses</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/corporate/index.html"
                              target="_blank">Corporate</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/event/index.html"
                              target="_blank">Event</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/gym/index.html"
                              target="_blank">GYM</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/lawyer/index.html"
                              target="_blank">Lawyer</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/music/index.html"
                              target="_blank">Music</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/photography/index.html"
                              target="_blank">Photography</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/real-estate/index.html"
                              target="_blank">Real Estate</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/restaurant/index.html"
                              target="_blank">Restaurant</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/shipping/index.html"
                              target="_blank">Shipping</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/spa/index.html"
                              target="_blank">Spa</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/travel/index.html"
                              target="_blank">Travel</a>
                          </li>
                          <li class="dropdown-item ">
                            <a class="nav-link" href="../../one-pages/wedding/index.html"
                              target="_blank">Wedding</a>
                          </li>
                        </ul>
                      </li>
                      <!-- End Demos - One Pages -->

                      <!-- Demos - Admin Template -->
                      <li class="dropdown-item ">
                        <a class="nav-link" href="../../admin-template/dashboards/dashboard-v1.html"
                          target="_blank">Admin Template <span
                            class="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">New</span></a>
                      </li>
                      <!-- End Demos - Admin Template -->

                      <!-- Demos - E-Commerce -->
                      <li class="dropdown-item ">
                        <a class="nav-link" href="../../e-commerce/home-page-1.html"
                          target="_blank">E-Commerce <span class="g-opacity-0_5">(44
                            Pages)</span></a>
                      </li>
                      <!-- End Demos - E-Commerce -->

                      <!-- Demos - University -->
                      <li class="dropdown-item ">
                        <a class="nav-link" href="../../multipage/education/home-page-1.html"
                          target="_blank">University <span class="g-opacity-0_5">(13
                            Pages)</span></a>
                      </li>
                      <!-- End Demos - University -->

                      <!-- Demos - Marketing -->
                      <li class="dropdown-item ">
                        <a class="nav-link" href="../../multipage/marketing/home-page-1.html"
                          target="_blank">Marketing <span class="g-opacity-0_5">(10
                            Pages)</span></a>
                      </li>
                      <!-- End Demos - Marketing -->

                      <!-- Demos - Real Estate -->
                      <li class="dropdown-item ">
                        <a class="nav-link" href="../../multipage/real-estate/home-page-1.html"
                          target="_blank">Real Estate <span class="g-opacity-0_5">(13
                            Pages)</span></a>
                      </li>
                      <!-- End Demos - Real Estate -->

                      <!-- Demos - Blogs & Magazines -->
                      <li class="dropdown-item ">
                        <a class="nav-link"
                          href="../../multipage/blog-magazine/classic/bm-classic-home-page-1.html"
                          target="_blank">Blogs &amp; Magazines <span class="g-opacity-0_5">(6
                            Pages)</span></a>
                      </li>
                      <!-- End Demos - Blogs & Magazines -->
                    </ul>
                  </li>
                  <!-- End Demos -->
                </ul>
              </div>
              <!-- End Navigation -->

              <div
                class="d-inline-block g-hidden-md-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg">
                <a class="btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15"
                  href="https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream"
                  target="_blank">Purchase now</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
`)