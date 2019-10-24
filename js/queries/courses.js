export const getCourseQuery = (slug) => `query MyQuery {course(filter: {slug: {eq: "${slug}"}}) {
    desc
    title
    instructor {
        name
    }
  }}`;
