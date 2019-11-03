export const getCourseQuery = (slug) => `query MyQuery {course(filter: {slug: {eq: "${slug}"}}) {
    desc
    title
    highlights {
        title
        desc
        image {
            url
        }
    }
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
