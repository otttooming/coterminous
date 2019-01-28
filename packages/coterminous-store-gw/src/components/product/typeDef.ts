import { gql } from 'apollo-server-koa';
import { PageInfo } from '../../common/fragments';

const Product = gql`
  ${PageInfo}

  type ProductList {
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
    slug: String
    createdAt: String
    images: [ProductImages]
  }

  # input ProductListQuery {
  #   cursor: String
  #   perPage: Int
  # }

  extend type Query {
    productList(page: Int, first: Int, before: String): ProductList
  }
`;

export default Product;
