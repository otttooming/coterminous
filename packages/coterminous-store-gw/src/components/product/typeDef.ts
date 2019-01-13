import { gql } from 'apollo-server-koa';
import { PageInfo } from '../../common/fragments';

const Product = gql`
  ${PageInfo}

  type ProductsListing {
    pageInfo: PageInfo
    edges: [ProductNode]
  }

  type ProductNode {
    node: Product
    cursor: String
  }

  type Product {
    name: String
    createdAt: String
  }

  # input ProductsListingQuery {
  #   cursor: String
  #   perPage: Int
  # }

  extend type Query {
    productsListing(page: Int, first: Int, before: String): ProductsListing
  }
`;

export default Product;
