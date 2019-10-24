import { getCourseQuery } from '/js/queries/courses.js';
const apiEndpoint = 'https://graphql.datocms.com/preview';
const token = '7d620000536448fe182e5cfab7e4aa';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const loadCourseDetail = (e) => {
  const slug = encodeURIComponent(window.location.search.split('=')[1]);

  const options = {
    method: 'post',
    headers,
    body: JSON.stringify({
      operationName: 'MyQuery',
      query: getCourseQuery(slug),
      variables: null,
    }),
  };
  fetch(apiEndpoint, options).then((res) => res.json()).then((data) => {
    console.log(data);
  });
};

$(document).ready(() => {
  loadCourseDetail();
});
