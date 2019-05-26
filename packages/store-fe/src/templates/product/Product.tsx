import * as React from 'react';
import { graphql } from 'gatsby';
import Main from '../../layouts/Main';
import Header from '../../components/header/Header';
import ProductItem from '../../components/productItem/ProductItem';
import { ProductTemplateQuery } from '../../generated-models';

interface Props {
  data: ProductTemplateQuery;
}

const ProductTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Main renderHeader={<Header />}>
      {/* <ProductItem
        product={data.cms.product}
        images={data.cms.product.images}
      /> */}
      {data.cms.product.name}
    </Main>
  );
};

export const query = graphql`
  query ProductTemplate($id: ID!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      product(id: $id) {
        id
        name
        galleryImages {
          edges {
            node {
              srcSet
            }
          }
        }
      }
    }
  }
`;

export default ProductTemplate;
