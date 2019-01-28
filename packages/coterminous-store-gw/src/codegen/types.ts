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

  productList?: Maybe<ProductList>;
}

export interface ProductList {
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

  cursor?: Maybe<string>;
}

export interface Product {
  id?: Maybe<number>;

  name?: Maybe<string>;

  slug?: Maybe<string>;

  createdAt?: Maybe<string>;

  images?: Maybe<(Maybe<ProductImages>)[]>;
}

export interface ProductImages {
  width?: Maybe<number>;

  height?: Maybe<number>;

  aspectRatio?: Maybe<number>;

  sizes?: Maybe<(Maybe<ProductImageSizes>)[]>;
}

export interface ProductImageSizes {
  url?: Maybe<string>;

  width?: Maybe<number>;

  height?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface ProductListQueryArgs {
  page?: Maybe<number>;

  first?: Maybe<number>;

  before?: Maybe<string>;
}
