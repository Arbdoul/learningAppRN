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

export default {
  getCategories,
};
