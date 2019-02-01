import * as React from 'react';
import { graphql } from 'gatsby';
import Main from '../../layouts/Main';
import Header from '../../components/header/Header';
import ProductItem from '../../components/productItem/ProductItem';

export default ({ data }: any) => {
  return (
    <Main renderHeader={<Header />}>
      <ProductItem
        product={data.cms.product}
        // images={data.cms.product.images}
      />
    </Main>
  );
};

export const query = graphql`
  query($id: Int!) {
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
    cms {
      product(id: $id) {
        id
        name
        images {
          aspectRatio
          sizes {
            url
            width
            height
          }
        }
      }
    }
  }
`;
