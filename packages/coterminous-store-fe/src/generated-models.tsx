export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type ProductsListingVariables = {
  page?: number | null;
};

export type ProductsListingQuery = {
  __typename?: 'Query';

  productsListing: ProductsListingProductsListing | null;
};

export type ProductsListingProductsListing = {
  __typename?: 'ProductsListing';

  edges: ProductsListingEdges[] | null;
};

export type ProductsListingEdges = {
  __typename?: 'ProductNode';

  node: ProductsListingNode | null;
};

export type ProductsListingNode = {
  __typename?: 'Product';

  name: string | null;

  createdAt: string | null;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const ProductsListingDocument = gql`
  query productsListing($page: Int) {
    productsListing(page: $page) {
      edges {
        node {
          name
          createdAt
        }
      }
    }
  }
`;
export class ProductsListingComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<ProductsListingQuery, ProductsListingVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<ProductsListingQuery, ProductsListingVariables>
        query={ProductsListingDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ProductsListingProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ProductsListingQuery, ProductsListingVariables>
> &
  TChildProps;
export function ProductsListingHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ProductsListingQuery,
        ProductsListingVariables,
        ProductsListingProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ProductsListingQuery,
    ProductsListingVariables,
    ProductsListingProps<TChildProps>
  >(ProductsListingDocument, operationOptions);
}
