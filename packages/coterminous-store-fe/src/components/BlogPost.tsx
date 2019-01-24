import * as React from 'react';
import { graphql } from 'gatsby';

export default ({ data }: any) => {
  return (
    <div>
      <h1>a</h1>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
    # cms {
    #   productsListing {
    #     edges {
    #       node {
    #         name
    #         slug
    #       }
    #     }
    #   }
    # }
  }
`;
