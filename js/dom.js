<<<<<<< HEAD
const renderContentToCourse = data => {
  $("#title").text(data.title);
  $("#title2").text(data.title);
  $("#briefintro").text(data.briefintro);
  $("#desc").text(data.desc);
  $("#goal").text(data.goal);
  $("#content").text(data.content);
  $("#hero").css("background-image", `url("${data.hero.url}")`);
  $("#tuition").text(`$${data.tuition}`);
  $("#tuition2").text(`$${data.tuition}`);
  $("#installment").text(`$${Math.round((data.tuition * 1.15) / 6)}/月`);
=======
const renderContentToCourse = (data) => {
  $('#title').text(data.title);
  $('#hero').css('background-image', `url("${data.hero.url}")`);
  $('#desc').text(data.desc);
  $('#instructorName').text(data.instructor.name);
  $('#instructorDesc').text(data.instructor.desc);
  $('#instructorGithub').text(data.instructor.github);
  $('#instructorEmail').text(data.instructor.email);
  $('#instructorAvatar').attr('src', data.instructor.avatar.url);
  $('#instructorAvatar').attr('alt', data.instructor.name + ' 讲师介绍');
  renderSyllabus(data.syllabus);
};

const renderSyllabus = (syllabus) => {
  syllabus.forEach((data, i) => {
    $('#accordion-07').append(`
        <div class="card rounded-0 g-brd-none">
            <div id="accordion-07-heading-0${i}" class="u-accordion__header g-pa-0"
                role="tab">
                <h5
                    class="mb-0 text-uppercase g-font-size-default g-font-weight-700 g-pa-20a mb-0">
                    <a class="d-flex g-text-underline--none--hover"
                        href="#accordion-07-body-0${i}" data-toggle="collapse"
                        data-parent="#accordion-07" aria-expanded="true"
                        aria-controls="accordion-07-body-0${1}">
                        <span
                            class="u-accordion__control-icon g-brd-right g-brd-gray-light-v4 text-center g-pa-20">
                            <i class="fa fa-plus"></i>
                            <i class="fa fa-minus"></i>
                        </span>
                        <span class="g-pa-20">
                            ${data.title}
                        </span>
                    </a>
                </h5>
            </div>
            <div id="accordion-07-body-0${i}" class="collapse" role="tabpanel"
                aria-labelledby="accordion-07-heading-0${i}"
                data-parent="#accordion-07">
                <div
                    class="u-accordion__body g-bg-gray-light-v5 g-px-50 g-py-30">
                    ${data.desc}
                </div>
            </div>
        </div>
        `);
  });
>>>>>>> parent of 00a277a... aupdates
};

export { renderContentToCourse };
