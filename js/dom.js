const renderContentToCourse = data => {
  $('#title').text(data.title);
  $('#hero').css('background-image', `url("${data.hero.url}")`);
  $('#desc').text(data.description);
  $('#instructorName').text(data.instructor.name);
  $('#instructorDesc').text(data.instructor.desc);
  $('#instructorGithub').text(data.instructor.github);
  $('#instructorEmail').text(data.instructor.email);
  $('#instructorAvatar').attr('src', data.instructor.avatar.url);
  $('#instructorAvatar').attr('alt', data.instructor.desc + ' 讲师介绍');
  renderSyllabus(data.syllabus);
  renderHighlights(data.highlights);
};

const renderTeaches = teaches => {};
const renderSyllabus = syllabus => {
  syllabus.forEach((data, i) => {
    $('#syllabus').append(`
          <li
            class="g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-blue-left g-rounded-3 g-pa-20 g-mb-7">
            <div class="d-flex justify-content-start">
                <h5 class="g-font-weight-600 g-color-black">${data.title}</h5>
            </div>
            <p class="mb-0">${data.desc}</p>
        </li>
        `);
  });
};

const renderHighlights = highlights => {
  highlights.forEach((data, i) => {
    $('#highlights').append(`
              <div class="col-lg-4">
                <div class="media">
                    <div class="d-flex mr-4">
                        <img src="${data.image.url}" height="60px" />
                    </div>
                    <div class="media-body">
                        <h3 class="h5 g-color-black mb-20">${data.title}</h3>
                        <p class="g-color-gray-dark-v4">${data.desc}</p>
                    </div>
                </div>
            </div>
        `);
  });
};

export { renderContentToCourse };
