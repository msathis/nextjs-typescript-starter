import gql from "graphql-tag";

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      company {
        name
        slug
      }
      slug
      remotes {
        type
        slug
      }
      cities {
        name
        country {
          name
        }
      }
    }
  }
`;
