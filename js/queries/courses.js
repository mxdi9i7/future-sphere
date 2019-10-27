export const getCourseQuery = (slug) => `query MyQuery {course(filter: {slug: {eq: "${slug}"}}) {
    desc
    title
    syllabus {
        title
        desc
    }
    hero {
        url
    }
    tuition
    schedule {
        title
        start
        end
        dayOfTheWeek
        hours
    }
    instructor {
        name
        avatar {
            url
        }
        desc
        email
        teaches {
            slug
            title
        }
    }
    faq {
        question
        answer
    }
    slug
  }}`;
