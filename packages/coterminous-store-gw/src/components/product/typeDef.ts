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

  type ProductImageSizes {
    url: String
    width: Int
    height: Int
  }

  type ProductImages {
    width: Int
    height: Int
    aspectRatio: Float
    sizes: [ProductImageSizes]
  }

  type Product {
    id: Int
    name: String
    createdAt: String
    images: [ProductImages]
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
