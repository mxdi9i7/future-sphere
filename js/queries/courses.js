export const getCourseQuery = slug => `query MyQuery {course(filter: {slug: {eq: "${slug}"}}) {
    title
<<<<<<< HEAD
<<<<<<< HEAD
    briefintro
    desc
    goal
    content
=======
=======
>>>>>>> parent of 00a277a... aupdates
    syllabus {
        title
        desc
    }
>>>>>>> parent of 00a277a... aupdates
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
