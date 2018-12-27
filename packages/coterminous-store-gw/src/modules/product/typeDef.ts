import { gql } from 'apollo-server-koa';

const Product = gql`
  type ProductsListing {
    cursor: Int!
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
    productsListing(cursor: Int): ProductsListing
  }
`;

export default Product;
