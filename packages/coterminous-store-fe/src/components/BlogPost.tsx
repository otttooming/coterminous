import * as React from 'react';
import { graphql } from 'gatsby';
import Main from '../layouts/Main';
import Header from './header/Header';

export default ({ data }: any) => {
  return (
    <Main renderHeader={<Header />}>
      <h1>a</h1>
    </Main>
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
