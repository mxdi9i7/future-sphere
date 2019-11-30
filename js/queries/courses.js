export const getCourseQuery = slug => `query MyQuery {course(filter: {slug: {eq: "${slug}"}}) {
    title
    briefintro
    desc
    goal
    content
    hero {
        url
    }
    class1{
        name
        startdate
        deadline
        seatleft
    }
    class2{
        name
        startdate
        deadline
        seatleft
    }
    tuition
    slug
  }}`;
