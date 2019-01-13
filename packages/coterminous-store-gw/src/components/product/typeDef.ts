import { gql } from 'apollo-server-koa';
import { PageInfo } from '../../common/fragments';

const Product = gql`
  ${PageInfo}

  type ProductsListing {
    cursor: String
    pageInfo: PageInfo
    edges: [ProductNode]
  }

  type ProductNode {
    node: Product
  }

  type Product {
    name: String
    createdAt: String
  }

  extend type Query {
    productsListing(cursor: String): ProductsListing
  }
`;

export default Product;
