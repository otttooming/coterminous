export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  hello?: Maybe<string>;

  productsListing?: Maybe<ProductsListing>;
}

export interface ProductsListing {
  cursor?: Maybe<string>;

  pageInfo?: Maybe<PageInfo>;

  edges?: Maybe<(Maybe<ProductNode>)[]>;
}

export interface PageInfo {
  hasNextPage: boolean;

  hasPreviousPage: boolean;

  startCursor?: Maybe<string>;

  endCursor?: Maybe<string>;

  totalPages?: Maybe<number>;

  total?: Maybe<number>;
}

export interface ProductNode {
  node?: Maybe<Product>;
}

export interface Product {
  name?: Maybe<string>;

  createdAt?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface ProductsListingQueryArgs {
  cursor?: Maybe<string>;

  first?: Maybe<number>;
}
