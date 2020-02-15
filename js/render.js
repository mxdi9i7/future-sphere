import coursesData from '../data/courses.js';
import tracksData from '../data/tracks.js';
import instructorData from '../data/instructors.js';
import faqs from '../data/faq.js';

const renderCourseData = async () => {
  console.log(coursesData);
  for (let i = 0; i < coursesData.length; i++) {
    const data = coursesData[i];
    $('#courses').append(`
        <div class="col-sm-12 col-md-6 col-lg-4 g-mb-30">
          <article class="text-center g-bg-white">

          <div class="g-pos-rel">
            <img alt="Image Description" class="w-100" src="${data.thumbnail}">

            <div class="u-ribbon-v1 g-width-55 g-bg-primary g-font-weight-600 g-font-size-17 g-top-10 g-right-10 rounded p-0">
              <span class="d-block g-color-white g-py-15">${data.timeCost}</span>
              <span class="d-block g-bg-white g-color-primary g-line-height-0_8 g-rounded-bottom-3 g-py-15">
          <small class="g-font-size-12">${data.hours}课时</small>
          </span>
            </div>
          </div>
          <div class="u-shadow-v24 g-pa-30 text-left">
            <header class="g-mb-15">
          <span class="d-inline-block g-color-gray-dark-v5
          g-font-weight-600 g-font-size-10 text-uppercase">${data.highlights[0]}
          |</span>
              <span class="d-inline-block g-color-gray-dark-v5
          g-font-weight-600 g-font-size-10 text-uppercase">${data.highlights[1]} |
          </span>
              <span class="d-inline-block g-color-gray-dark-v5
          g-font-weight-600 g-font-size-10 text-uppercase">${data.highlights[2]}
          </span>
            </header>
            <h3 class="h4 g-mb-10">
              <a class="g-color-main g-color-primary--hover
          g-text-underline--none--hover" href="#">${data.title}</a>
            </h3>
            <p>${data.description}</p>

            <footer class="d-flex align-items-center">
              <div class="d-block">
                <a class="btn btn-md u-btn-primary u-btn-3d g-font-weight-600 g-font-size-11 text-uppercase"
                    href="/course.html?course=${data.slug}">了解课程</a>
              </div>
            </footer>
          </div>
          </article>
          </div>
        `);
  }
};

const renderTracksData = () => {
  tracksData.forEach(data => {
    $('#tracks').append(`
      <div class="col-lg-4 g-mb-30">

        <article class="u-block-hover">
          <figure class="u-bg-overlay g-bg-black-gradient-opacity-v1--after" style="min-height:350px; width: 100%">
            <img alt="Image Description"
              class="img-fluid u-block-hover__main--zoom-v1"
              style="height:100%;width:auto"
              src="${data.thumbnail}">
          </figure>

          <span class="g-pos-abs g-top-20 g-left-20">
            <a class="btn btn-sm g-bg-white g-color-black
              text-uppercase rounded-0" href="#">${data.courses[0]}</a>
            <a class="btn btn-sm g-bg-white g-color-black
              text-uppercase rounded-0" href="#">${data.courses[1]}</a>
            <a class="btn btn-sm g-bg-white g-color-black text-uppercase rounded-0"
              href="#">${data.courses[2]}</a>
              <a class="${data.courses[3]
                ? 'btn btn-sm g-bg-white g-color-black text-uppercase rounded-0'
                : ''}"
              href="#">${data.courses[3] || ''}</a>
          </span>

          <header class="g-color-white g-pos-abs g-right-20 g-bottom-20 g-left-20">
            <span class="text-uppercase small">
              <i class="h5 icon-calendar g-color-primary g-pos-rel g-top-2 g-mr-5"></i>
              学习时间：${data.timeline}
            </span>

            <h3 class="text-uppercase g-font-weight-600 g-mt-5 g-mb-10">
              <a class="g-color-white g-color-white--hover" href="#">${data.title}</a>
            </h3>

            <div class="g-mb-20">
              <p>${data.description}</p>
            </div>

            <a class="btn u-btn-primary text-uppercase g-font-size-12 rounded-0 g-pa-15"
              href="/tracks/${data.id}">了解更多</a>
          </header>
        </article>
      </div>
    `);
  });
};

const renderInstructors = () => {
  instructorData.forEach(data => {
    $('#instructors').append(`
    <div class="col-sm-4 g-mb-60">
      <figure class="text-center">
        <div
          class="d-block mx-auto rounded-circle g-max-width-200 g-bg-white g-pa-5 g-mb-15">
          <img class="rounded-circle g-max-width-190"
            src="${data.thumbnail}" alt="Image Description">
        </div>
        <div class="g-mb-15">
          <h4 class="h4 g-color-white g-mb-5">${data.name}</h4>
          <em
            class="g-font-style-bolder g-font-size-11 text-uppercase g-color-primary">${data.position}</em>
            <br />
            <em
            class="g-font-style-normal g-font-size-11 text-uppercase g-color-white">${data.title}</em>
        </div>
        <p class="g-color-white">${data.description}</p>
      </figure>
    </div>
    `);
  });
};

const renderFAQ = () => {
  faqs.forEach((data, i) => {
    $('#accordion').append(`
        <div class="card g-brd-none rounded g-mb-20">
          <div
              id="accordion-heading-0${i + 1}"
              class="g-pa-0"
              role="tab"
          >
              <h5 class="mb-0">
                  <a
                      class="collapsed d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20"
                      href="#accordion-body-0${i + 1}"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      aria-expanded="false"
                      aria-controls="accordion-body-0${i + 1}"
                  >
                      ${data.question}
                      <span
                          class="u-accordion__control-icon g-color-primary"
                      >
                          <i class="fa fa-angle-down"></i>
                          <i class="fa fa-angle-up"></i>
                      </span>
                  </a>
              </h5>
          </div>
          <div
              id="accordion-body-0${i + 1}"
              class="collapse"
              role="tabpanel"
              aria-labelledby="accordion-heading-0${i + 1}"
              data-parent="#accordion"
          >
              <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                 ${data.answer}
              </div>
          </div>
      </div>
    `);
  });
};

renderCourseData();
renderTracksData();
renderInstructors();
renderFAQ();
