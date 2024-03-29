import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clshd0l5d2e1z01wjvg7sd05x/master";

const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        id
        name
        icon {
          url
        }
        slug
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 50, orderBy: createdAt_DESC) {
        author
        demoUrl
        description
        free
        slug
        youtubeUrl
        id
        name
        sourceCode
        tags
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserCourseEnrollment = async (slug, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: {
          courseId: "` +
    slug +
    `"
          userEmail: "` +
    email +
    `"
        }
      ) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const saveUserCourseEnrollment = async (id, email) => {
  const query =
    `
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "` +
    id +
    `", courseList: {connect: {id: "` +
    id +
    `"}}, userEmail: "` +
    email +
    `"}
    ) {
      id
    }
    publishManyUserEnrollCourses {
      count
    }
  }
  
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserMembership = async (email) => {
  const query =
    gql`
    query MyQuery {
      memberships(where: { email: "` +
    email +
    `",  active: true }) {
        id
        email
        createdAt
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewMembership = async (email) => {
  const query =
    gql`
    mutation MyMutation {
      createMembership(data: { active: true, email: "` +
    email +
    `", paymentId: "12345" })
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategories,
  getCourseList,
  checkUserCourseEnrollment,
  saveUserCourseEnrollment,
  checkUserMembership,
  createNewMembership,
};
