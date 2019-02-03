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
      <ProductItem
        product={data.cms.product}
        images={data.cms.product.images}
      />
    </Main>
  );
};

export const query = graphql`
  query ProductTemplate($id: Int!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      product(id: $id) {
        id
        name
        images {
          aspectRatio
          width
          height
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

export default ProductTemplate;
