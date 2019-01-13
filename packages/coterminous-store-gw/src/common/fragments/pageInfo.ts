import gql from 'graphql-tag';

export const PageInfo = gql`
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
    totalPages: Int
    total: Int
  }
`;
