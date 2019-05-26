export type Maybe<T> = T | null;

export interface StringQueryOperatorInput {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;
}

export interface NodeFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
  elemMatch?: Maybe<NodeFilterInput>;
}

export interface InternalFilterInput {
  content?: Maybe<StringQueryOperatorInput>;

  contentDigest?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  fieldOwners?: Maybe<StringQueryOperatorInput>;

  ignoreType?: Maybe<BooleanQueryOperatorInput>;

  mediaType?: Maybe<StringQueryOperatorInput>;

  owner?: Maybe<StringQueryOperatorInput>;

  type?: Maybe<StringQueryOperatorInput>;
}

export interface BooleanQueryOperatorInput {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageContextFilterInput {
  id?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  resolve?: Maybe<StringQueryOperatorInput>;

  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;

  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;

  nodeAPIs?: Maybe<StringQueryOperatorInput>;

  ssrAPIs?: Maybe<StringQueryOperatorInput>;

  pluginFilepath?: Maybe<StringQueryOperatorInput>;

  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginPluginOptionsFilterInput {
  fieldName?: Maybe<StringQueryOperatorInput>;

  url?: Maybe<StringQueryOperatorInput>;

  typeName?: Maybe<StringQueryOperatorInput>;

  refetchInterval?: Maybe<IntQueryOperatorInput>;

  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;

  path?: Maybe<StringQueryOperatorInput>;

  pathCheck?: Maybe<BooleanQueryOperatorInput>;
}

export interface IntQueryOperatorInput {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsOptionsFilterInput {
  emitWarning?: Maybe<BooleanQueryOperatorInput>;

  failOnError?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPackageJsonFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;

  main?: Maybe<StringQueryOperatorInput>;

  license?: Maybe<StringQueryOperatorInput>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;

  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;

  keywords?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  path?: Maybe<StringQueryOperatorInput>;

  jsonName?: Maybe<StringQueryOperatorInput>;

  internalComponentName?: Maybe<StringQueryOperatorInput>;

  component?: Maybe<StringQueryOperatorInput>;

  componentChunkName?: Maybe<StringQueryOperatorInput>;

  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;

  context?: Maybe<SitePageContextFilterInput>;

  pluginCreator?: Maybe<SitePluginFilterInput>;

  pluginCreatorId?: Maybe<StringQueryOperatorInput>;

  componentPath?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageSortInput {
  fields?: Maybe<(Maybe<SitePageFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SitePluginSortInput {
  fields?: Maybe<(Maybe<SitePluginFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SiteSiteMetadataFilterInput {
  siteName?: Maybe<StringQueryOperatorInput>;
}

export interface DateQueryOperatorInput {
  eq?: Maybe<Date>;

  ne?: Maybe<Date>;

  gt?: Maybe<Date>;

  gte?: Maybe<Date>;

  lt?: Maybe<Date>;

  lte?: Maybe<Date>;

  in?: Maybe<(Maybe<Date>)[]>;

  nin?: Maybe<(Maybe<Date>)[]>;
}

export interface SiteFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;

  port?: Maybe<IntQueryOperatorInput>;

  host?: Maybe<StringQueryOperatorInput>;

  pathPrefix?: Maybe<StringQueryOperatorInput>;

  polyfill?: Maybe<BooleanQueryOperatorInput>;

  buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface SiteSortInput {
  fields?: Maybe<(Maybe<SiteFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface GraphQlSourceFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  typeName?: Maybe<StringQueryOperatorInput>;

  fieldName?: Maybe<StringQueryOperatorInput>;
}

export interface GraphQlSourceSortInput {
  fields?: Maybe<(Maybe<GraphQlSourceFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}
/** Arguments for filtering the CartToCouponConnection connection */
export interface GraphCmsCartToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Filter the connection based on input */
export interface GraphCmsDateQueryInput {
  after?: Maybe<GraphCmsDateInput>;

  before?: Maybe<GraphCmsDateInput>;
  /** Column to query against */
  column?: Maybe<GraphCmsPostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<string>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<number>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<number>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<boolean>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<number>;
  /** Month number (from 1 to 12) */
  month?: Maybe<number>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<GraphCmsRelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<number>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Date values */
export interface GraphCmsDateInput {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<number>;
  /** Month number (from 1 to 12) */
  month?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Options for ordering the connection */
export interface GraphCmsWcConnectionOrderbyInput {
  field: GraphCmsWcConnectionOrderbyEnum;

  order?: Maybe<GraphCmsOrderEnum>;
}
/** Arguments for filtering the CouponToProductCategoryConnection connection */
export interface GraphCmsCouponToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the ProductCategoryToProductCategoryConnection connection */
export interface GraphCmsProductCategoryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the ProductCategoryToProductConnection connection */
export interface GraphCmsProductCategoryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToProductCategoryConnection connection */
export interface GraphCmsProductToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the ProductToProductConnection connection */
export interface GraphCmsProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToMediaItemConnection connection */
export interface GraphCmsProductToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Options for ordering the connection */
export interface GraphCmsPostObjectsConnectionOrderbyInput {
  field: GraphCmsPostObjectsConnectionOrderbyEnum;

  order?: Maybe<GraphCmsOrderEnum>;
}
/** Arguments for filtering the UserToCommentConnection connection */
export interface GraphCmsUserToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the CommentToCommentConnection connection */
export interface GraphCmsCommentToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the UserToMediaItemConnection connection */
export interface GraphCmsUserToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the UserToPageConnection connection */
export interface GraphCmsUserToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the PageToPageConnection connection */
export interface GraphCmsPageToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the PageToCommentConnection connection */
export interface GraphCmsPageToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the PageToRevisionConnection connection */
export interface GraphCmsPageToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the CategoryToCategoryConnection connection */
export interface GraphCmsCategoryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the CategoryToPostConnection connection */
export interface GraphCmsCategoryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the TagToPostConnection connection */
export interface GraphCmsTagToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the ProductTagToProductConnection connection */
export interface GraphCmsProductTagToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductConnection connection */
export interface GraphCmsPaHindToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductVariationConnection connection */
export interface GraphCmsPaHindToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductConnection connection */
export interface GraphCmsPaHulkToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductVariationConnection connection */
export interface GraphCmsPaHulkToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductConnection connection */
export interface GraphCmsPaKasutusaegToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductVariationConnection connection */
export interface GraphCmsPaKasutusaegToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductConnection connection */
export interface GraphCmsPaKogusToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductVariationConnection connection */
export interface GraphCmsPaKogusToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductConnection connection */
export interface GraphCmsPaKontuurToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductVariationConnection connection */
export interface GraphCmsPaKontuurToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductConnection connection */
export interface GraphCmsPaKoostisainedToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductVariationConnection connection */
export interface GraphCmsPaKoostisainedToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductConnection connection */
export interface GraphCmsPaLaadimisaegToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductVariationConnection connection */
export interface GraphCmsPaLaadimisaegToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductConnection connection */
export interface GraphCmsPaMaterjalToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductVariationConnection connection */
export interface GraphCmsPaMaterjalToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductConnection connection */
export interface GraphCmsPaMuratasaToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductVariationConnection connection */
export interface GraphCmsPaMuratasaToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductConnection connection */
export interface GraphCmsPaOhutusToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductVariationConnection connection */
export interface GraphCmsPaOhutusToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductConnection connection */
export interface GraphCmsPaPatareidToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductVariationConnection connection */
export interface GraphCmsPaPatareidToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductConnection connection */
export interface GraphCmsPaSuurusToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductVariationConnection connection */
export interface GraphCmsPaSuurusToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductConnection connection */
export interface GraphCmsPaVariantToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductVariationConnection connection */
export interface GraphCmsPaVariantToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductConnection connection */
export interface GraphCmsPaVarvToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductVariationConnection connection */
export interface GraphCmsPaVarvToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductConnection connection */
export interface GraphCmsPaVeekindlusToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductVariationConnection connection */
export interface GraphCmsPaVeekindlusToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the UserToPostConnection connection */
export interface GraphCmsUserToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the UserToRevisionConnection connection */
export interface GraphCmsUserToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the PostToCategoryConnection connection */
export interface GraphCmsPostToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the PostToCommentConnection connection */
export interface GraphCmsPostToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the PostToRevisionConnection connection */
export interface GraphCmsPostToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the PostToTagConnection connection */
export interface GraphCmsPostToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the MediaItemToCommentConnection connection */
export interface GraphCmsMediaItemToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the ProductToProductTagConnection connection */
export interface GraphCmsProductToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the ProductToProductVariationConnection connection */
export interface GraphCmsProductToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToProductConnection connection */
export interface GraphCmsCouponToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToCustomerConnection connection */
export interface GraphCmsCouponToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<GraphCmsCustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<GraphCmsUserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the OrderToRefundConnection connection */
export interface GraphCmsOrderToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<(Maybe<number>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<(Maybe<string>)[]>;
}
/** Arguments for filtering the CustomerToOrderConnection connection */
export interface GraphCmsCustomerToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<number>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<(Maybe<GraphCmsOrderStatusEnum>)[]>;
}
/** Arguments for filtering the CustomerToRefundConnection connection */
export interface GraphCmsCustomerToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<(Maybe<number>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<(Maybe<string>)[]>;
}
/** Arguments for filtering the CartToCartItemConnection connection */
export interface GraphCmsCartToCartItemConnectionWhereArgs {
  /** Limit results to cart item that require shipping */
  needShipping?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface GraphCmsRootQueryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToCommentConnection connection */
export interface GraphCmsRootQueryToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<string>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Comment author URL. */
  authorUrl?: Maybe<string>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Include comments of a given type. */
  commentType?: Maybe<string>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<(Maybe<string>)[]>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<string>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<(Maybe<string>)[]>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<string>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<(Maybe<string>)[]>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<(Maybe<string>)[]>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<string>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<number>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCmsCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<number>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<string>;
  /** Comment status to limit results by. */
  status?: Maybe<string>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToCouponConnection connection */
export interface GraphCmsRootQueryToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToCustomerConnection connection */
export interface GraphCmsRootQueryToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<GraphCmsOrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<GraphCmsCustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<GraphCmsUserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface GraphCmsRootQueryToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the MenuToMenuItemConnection connection */
export interface GraphCmsMenuToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCmsMenuLocationEnum>;
}
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface GraphCmsMenuItemToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCmsMenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface GraphCmsRootQueryToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCmsMenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface GraphCmsRootQueryToMenuConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCmsMenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToOrderConnection connection */
export interface GraphCmsRootQueryToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<number>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<(Maybe<GraphCmsOrderStatusEnum>)[]>;
}
/** Arguments for filtering the RootQueryToPaHindConnection connection */
export interface GraphCmsRootQueryToPaHindConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaHulkConnection connection */
export interface GraphCmsRootQueryToPaHulkConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaKasutusaegConnection connection */
export interface GraphCmsRootQueryToPaKasutusaegConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaKogusConnection connection */
export interface GraphCmsRootQueryToPaKogusConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaKontuurConnection connection */
export interface GraphCmsRootQueryToPaKontuurConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaKoostisainedConnection connection */
export interface GraphCmsRootQueryToPaKoostisainedConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaLaadimisaegConnection connection */
export interface GraphCmsRootQueryToPaLaadimisaegConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaMaterjalConnection connection */
export interface GraphCmsRootQueryToPaMaterjalConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaMuratasaConnection connection */
export interface GraphCmsRootQueryToPaMuratasaConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaOhutusConnection connection */
export interface GraphCmsRootQueryToPaOhutusConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaPatareidConnection connection */
export interface GraphCmsRootQueryToPaPatareidConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaSuurusConnection connection */
export interface GraphCmsRootQueryToPaSuurusConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaVariantConnection connection */
export interface GraphCmsRootQueryToPaVariantConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaVarvConnection connection */
export interface GraphCmsRootQueryToPaVarvConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPaVeekindlusConnection connection */
export interface GraphCmsRootQueryToPaVeekindlusConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToPageConnection connection */
export interface GraphCmsRootQueryToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToPostConnection connection */
export interface GraphCmsRootQueryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;

  stati?: Maybe<(Maybe<GraphCmsPostStatusEnum>)[]>;

  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToProductCategoryConnection connection */
export interface GraphCmsRootQueryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToProductTagConnection connection */
export interface GraphCmsRootQueryToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToProductTypeConnection connection */
export interface GraphCmsRootQueryToProductTypeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToProductConnection connection */
export interface GraphCmsRootQueryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<string>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<string>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<string>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to featured products. */
  featured?: Maybe<boolean>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<number>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<number>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<boolean>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<string>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<number>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<string>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<string>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<string>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<(Maybe<GraphCmsStockStatusEnum>)[]>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<string>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<number>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<(Maybe<string>)[]>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCmsProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<GraphCmsProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCmsCatalogVisibilityEnum>;
}
/** Arguments for filtering the RootQueryToRefundConnection connection */
export interface GraphCmsRootQueryToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsWcConnectionOrderbyInput>)[]>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<(Maybe<number>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<number>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<number>)[]>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<number>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<(Maybe<string>)[]>;
}
/** Arguments for filtering the RootQueryToRevisionConnection connection */
export interface GraphCmsRootQueryToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<number>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<(Maybe<string>)[]>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<string>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<(Maybe<string>)[]>;
  /** Category ID */
  categoryId?: Maybe<number>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<(Maybe<string>)[]>;
  /** Use Category Slug */
  categoryName?: Maybe<string>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<(Maybe<string>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCmsDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsPostObjectsConnectionOrderbyInput>)[]>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<string>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<(Maybe<string>)[]>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<(Maybe<string>)[]>;
  /** Show posts with a specific password. */
  password?: Maybe<string>;
  /** Show Posts based on a keyword search */
  search?: Maybe<string>;
  /** Tag Slug */
  tag?: Maybe<string>;
  /** Use Tag ID */
  tagId?: Maybe<string>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<(Maybe<string>)[]>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<(Maybe<string>)[]>;
  /** Title of the object */
  title?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToShippingClassConnection connection */
export interface GraphCmsRootQueryToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToTagConnection connection */
export interface GraphCmsRootQueryToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToTaxRateConnection connection */
export interface GraphCmsRootQueryToTaxRateConnectionWhereArgs {
  /** Sort by tax class */
  class?: Maybe<string>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<GraphCmsTaxRateConnectionOrderbyInput>)[]>;
}
/** Options for ordering the connection */
export interface GraphCmsTaxRateConnectionOrderbyInput {
  field: GraphCmsTaxRateConnectionOrderbyEnum;

  order?: Maybe<GraphCmsOrderEnum>;
}
/** Arguments for filtering the RootQueryToUserConnection connection */
export interface GraphCmsRootQueryToUserConnectionWhereArgs {
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<(Maybe<GraphCmsPostTypeEnum>)[]>;
  /** Array of comment IDs to include. */
  include?: Maybe<(Maybe<number>)[]>;
  /** The user login. */
  login?: Maybe<string>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<number>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<number>;
  /** The user nicename. */
  nicename?: Maybe<string>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<(Maybe<string>)[]>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<(Maybe<string>)[]>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<GraphCmsUserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<(Maybe<GraphCmsUserRoleEnum>)[]>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<string>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<(Maybe<GraphCmsUsersConnectionSearchColumnEnum>)[]>;
}
/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export interface GraphCmsRootQueryToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<string>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<boolean>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<number>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<string>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<(Maybe<string>)[]>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<(Maybe<string>)[]>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<boolean>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<boolean>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<(Maybe<string>)[]>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<(Maybe<string>)[]>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<string>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<(Maybe<string>)[]>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCmsTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<boolean>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<number>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<string>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<boolean>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<(Maybe<string>)[]>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<(Maybe<string>)[]>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<boolean>;
}
/** Input for the addFee mutation */
export interface GraphCmsAddFeeInput {
  /** Fee amount */
  amount?: Maybe<number>;

  clientMutationId: string;
  /** Unique name for the fee. */
  name: string;
  /** Is the fee taxable? */
  taxable?: Maybe<boolean>;
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<GraphCmsTaxClassEnum>;
}
/** Input for the addToCart mutation */
export interface GraphCmsAddToCartInput {
  clientMutationId: string;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<string>;
  /** Cart item product database ID or global ID */
  productId: number;
  /** Cart item quantity */
  quantity?: Maybe<number>;
  /** Cart item product variation attributes */
  variation?: Maybe<(Maybe<GraphCmsProductAttributeInput>)[]>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<number>;
}
/** Options for ordering the connection */
export interface GraphCmsProductAttributeInput {
  attribute: string;

  attributeTerm: string;
}
/** Input for the applyCoupon mutation */
export interface GraphCmsApplyCouponInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  code: string;
}
/** Input for the createCategory mutation */
export interface GraphCmsCreateCategoryInput {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the category object */
  description?: Maybe<string>;
  /** The name of the category object to mutate */
  name: string;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createComment mutation */
export interface GraphCmsCreateCommentInput {
  /** User agent used to post the comment. */
  agent?: Maybe<string>;
  /** The approval status of the comment. */
  approved?: Maybe<string>;
  /** The name of the comment's author. */
  author?: Maybe<string>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<string>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<string>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<string>;

  clientMutationId: string;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<number>;
  /** Content of the comment. */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** Parent comment of current comment. */
  parent?: Maybe<string>;
  /** Type of comment. */
  type?: Maybe<string>;
  /** The userID of the comment's author. */
  userId?: Maybe<number>;
}
/** Input for the createMediaItem mutation */
export interface GraphCmsCreateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<string>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<string>;
  /** The caption for the mediaItem */
  caption?: Maybe<string>;

  clientMutationId: string;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<string>;
  /** The date of the mediaItem */
  date?: Maybe<string>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<string>;
  /** Description of the mediaItem */
  description?: Maybe<string>;
  /** The file name of the mediaItem */
  filePath?: Maybe<string>;
  /** The file type of the mediaItem */
  fileType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<GraphCmsMediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the createPage mutation */
export interface GraphCmsCreatePageInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;

  clientMutationId: string;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** The comment status for the object */
  commentStatus?: Maybe<string>;
  /** The content of the object */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** The excerpt of the object */
  excerpt?: Maybe<string>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<string>;
  /** The password used to protect the content of the object */
  password?: Maybe<string>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** The ping status for the object */
  pingStatus?: Maybe<string>;
  /** The slug of the object */
  slug?: Maybe<string>;
  /** The status of the object */
  status?: Maybe<GraphCmsPostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the createPaHind mutation */
export interface GraphCmsCreatePaHindInput {
  /** The slug that the pa_hind will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_hind object */
  description?: Maybe<string>;
  /** The name of the pa_hind object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaHulk mutation */
export interface GraphCmsCreatePaHulkInput {
  /** The slug that the pa_hulk will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_hulk object */
  description?: Maybe<string>;
  /** The name of the pa_hulk object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaKasutusaeg mutation */
export interface GraphCmsCreatePaKasutusaegInput {
  /** The slug that the pa_kasutusaeg will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kasutusaeg object */
  description?: Maybe<string>;
  /** The name of the pa_kasutusaeg object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaKogus mutation */
export interface GraphCmsCreatePaKogusInput {
  /** The slug that the pa_kogus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kogus object */
  description?: Maybe<string>;
  /** The name of the pa_kogus object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaKontuur mutation */
export interface GraphCmsCreatePaKontuurInput {
  /** The slug that the pa_kontuur will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kontuur object */
  description?: Maybe<string>;
  /** The name of the pa_kontuur object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaKoostisained mutation */
export interface GraphCmsCreatePaKoostisainedInput {
  /** The slug that the pa_koostisained will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_koostisained object */
  description?: Maybe<string>;
  /** The name of the pa_koostisained object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaLaadimisaeg mutation */
export interface GraphCmsCreatePaLaadimisaegInput {
  /** The slug that the pa_laadimisaeg will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_laadimisaeg object */
  description?: Maybe<string>;
  /** The name of the pa_laadimisaeg object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaMaterjal mutation */
export interface GraphCmsCreatePaMaterjalInput {
  /** The slug that the pa_materjal will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_materjal object */
  description?: Maybe<string>;
  /** The name of the pa_materjal object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaMuratasa mutation */
export interface GraphCmsCreatePaMuratasaInput {
  /** The slug that the pa_muratasa will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_muratasa object */
  description?: Maybe<string>;
  /** The name of the pa_muratasa object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaOhutus mutation */
export interface GraphCmsCreatePaOhutusInput {
  /** The slug that the pa_ohutus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_ohutus object */
  description?: Maybe<string>;
  /** The name of the pa_ohutus object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaPatareid mutation */
export interface GraphCmsCreatePaPatareidInput {
  /** The slug that the pa_patareid will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_patareid object */
  description?: Maybe<string>;
  /** The name of the pa_patareid object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaSuurus mutation */
export interface GraphCmsCreatePaSuurusInput {
  /** The slug that the pa_suurus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_suurus object */
  description?: Maybe<string>;
  /** The name of the pa_suurus object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaVariant mutation */
export interface GraphCmsCreatePaVariantInput {
  /** The slug that the pa_variant will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_variant object */
  description?: Maybe<string>;
  /** The name of the pa_variant object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaVarv mutation */
export interface GraphCmsCreatePaVarvInput {
  /** The slug that the pa_varv will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_varv object */
  description?: Maybe<string>;
  /** The name of the pa_varv object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPaVeekindlus mutation */
export interface GraphCmsCreatePaVeekindlusInput {
  /** The slug that the pa_veekindlus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_veekindlus object */
  description?: Maybe<string>;
  /** The name of the pa_veekindlus object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createPost mutation */
export interface GraphCmsCreatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<GraphCmsPostCategoriesInput>;

  clientMutationId: string;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** The comment status for the object */
  commentStatus?: Maybe<string>;
  /** The content of the object */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** The excerpt of the object */
  excerpt?: Maybe<string>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<string>;
  /** The password used to protect the content of the object */
  password?: Maybe<string>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** The ping status for the object */
  pingStatus?: Maybe<string>;
  /** The slug of the object */
  slug?: Maybe<string>;
  /** The status of the object */
  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<GraphCmsPostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Set relationships between the post to categories */
export interface GraphCmsPostCategoriesInput {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<GraphCmsPostCategoriesNodeInput>)[]>;
}
/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface GraphCmsPostCategoriesNodeInput {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<string>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<string>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<string>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<string>;
}
/** Set relationships between the post to tags */
export interface GraphCmsPostTagsInput {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<GraphCmsPostTagsNodeInput>)[]>;
}
/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface GraphCmsPostTagsNodeInput {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<string>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<string>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<string>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<string>;
}
/** Input for the createProductCategory mutation */
export interface GraphCmsCreateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_cat object */
  description?: Maybe<string>;
  /** The name of the product_cat object to mutate */
  name: string;
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createProductTag mutation */
export interface GraphCmsCreateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_tag object */
  description?: Maybe<string>;
  /** The name of the product_tag object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createProductType mutation */
export interface GraphCmsCreateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_type object */
  description?: Maybe<string>;
  /** The name of the product_type object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createShippingClass mutation */
export interface GraphCmsCreateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_shipping_class object */
  description?: Maybe<string>;
  /** The name of the product_shipping_class object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createTag mutation */
export interface GraphCmsCreateTagInput {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the post_tag object */
  description?: Maybe<string>;
  /** The name of the post_tag object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the createUser mutation */
export interface GraphCmsCreateUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;

  clientMutationId: string;
  /** A string containing content about the user. */
  description?: Maybe<string>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<string>;
  /** A string containing the user's email address. */
  email?: Maybe<string>;
  /** The user's first name. */
  firstName?: Maybe<string>;
  /** User's Jabber account. */
  jabber?: Maybe<string>;
  /** The user's last name. */
  lastName?: Maybe<string>;
  /** User's locale. */
  locale?: Maybe<string>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<string>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<string>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<string>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<string>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<string>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<(Maybe<string>)[]>;
  /** A string that contains the user's username for logging in. */
  username: string;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the createVisibleProduct mutation */
export interface GraphCmsCreateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_visibility object */
  description?: Maybe<string>;
  /** The name of the product_visibility object to mutate */
  name: string;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Customer address information */
export interface GraphCmsCustomerAddressInput {
  /** Address 1 */
  address1?: Maybe<string>;
  /** Address 2 */
  address2?: Maybe<string>;
  /** City */
  city?: Maybe<string>;
  /** Company */
  company?: Maybe<string>;
  /** Country */
  country?: Maybe<GraphCmsCountriesEnum>;
  /** E-mail */
  email?: Maybe<string>;
  /** First name */
  firstName?: Maybe<string>;
  /** Last name */
  lastName?: Maybe<string>;
  /** Clear old address data */
  overwrite?: Maybe<boolean>;
  /** Phone */
  phone?: Maybe<string>;
  /** Zip Postal Code */
  postcode?: Maybe<string>;
  /** State */
  state?: Maybe<string>;
}
/** Input for the deleteCategory mutation */
export interface GraphCmsDeleteCategoryInput {
  clientMutationId: string;
  /** The ID of the category to delete */
  id: string;
}
/** Input for the deleteComment mutation */
export interface GraphCmsDeleteCommentInput {
  clientMutationId: string;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The deleted comment ID */
  id: string;
}
/** Input for the deleteMediaItem mutation */
export interface GraphCmsDeleteMediaItemInput {
  clientMutationId: string;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the mediaItem to delete */
  id: string;
}
/** Input for the deletePage mutation */
export interface GraphCmsDeletePageInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the page to delete */
  id: string;
}
/** Input for the deletePaHind mutation */
export interface GraphCmsDeletePaHindInput {
  clientMutationId: string;
  /** The ID of the paHind to delete */
  id: string;
}
/** Input for the deletePaHulk mutation */
export interface GraphCmsDeletePaHulkInput {
  clientMutationId: string;
  /** The ID of the paHulk to delete */
  id: string;
}
/** Input for the deletePaKasutusaeg mutation */
export interface GraphCmsDeletePaKasutusaegInput {
  clientMutationId: string;
  /** The ID of the paKasutusaeg to delete */
  id: string;
}
/** Input for the deletePaKogus mutation */
export interface GraphCmsDeletePaKogusInput {
  clientMutationId: string;
  /** The ID of the paKogus to delete */
  id: string;
}
/** Input for the deletePaKontuur mutation */
export interface GraphCmsDeletePaKontuurInput {
  clientMutationId: string;
  /** The ID of the paKontuur to delete */
  id: string;
}
/** Input for the deletePaKoostisained mutation */
export interface GraphCmsDeletePaKoostisainedInput {
  clientMutationId: string;
  /** The ID of the paKoostisained to delete */
  id: string;
}
/** Input for the deletePaLaadimisaeg mutation */
export interface GraphCmsDeletePaLaadimisaegInput {
  clientMutationId: string;
  /** The ID of the paLaadimisaeg to delete */
  id: string;
}
/** Input for the deletePaMaterjal mutation */
export interface GraphCmsDeletePaMaterjalInput {
  clientMutationId: string;
  /** The ID of the paMaterjal to delete */
  id: string;
}
/** Input for the deletePaMuratasa mutation */
export interface GraphCmsDeletePaMuratasaInput {
  clientMutationId: string;
  /** The ID of the paMuratasa to delete */
  id: string;
}
/** Input for the deletePaOhutus mutation */
export interface GraphCmsDeletePaOhutusInput {
  clientMutationId: string;
  /** The ID of the paOhutus to delete */
  id: string;
}
/** Input for the deletePaPatareid mutation */
export interface GraphCmsDeletePaPatareidInput {
  clientMutationId: string;
  /** The ID of the paPatareid to delete */
  id: string;
}
/** Input for the deletePaSuurus mutation */
export interface GraphCmsDeletePaSuurusInput {
  clientMutationId: string;
  /** The ID of the paSuurus to delete */
  id: string;
}
/** Input for the deletePaVariant mutation */
export interface GraphCmsDeletePaVariantInput {
  clientMutationId: string;
  /** The ID of the paVariant to delete */
  id: string;
}
/** Input for the deletePaVarv mutation */
export interface GraphCmsDeletePaVarvInput {
  clientMutationId: string;
  /** The ID of the paVarv to delete */
  id: string;
}
/** Input for the deletePaVeekindlus mutation */
export interface GraphCmsDeletePaVeekindlusInput {
  clientMutationId: string;
  /** The ID of the paVeekindlus to delete */
  id: string;
}
/** Input for the deletePost mutation */
export interface GraphCmsDeletePostInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the post to delete */
  id: string;
}
/** Input for the deleteProductCategory mutation */
export interface GraphCmsDeleteProductCategoryInput {
  clientMutationId: string;
  /** The ID of the productCategory to delete */
  id: string;
}
/** Input for the deleteProductTag mutation */
export interface GraphCmsDeleteProductTagInput {
  clientMutationId: string;
  /** The ID of the productTag to delete */
  id: string;
}
/** Input for the deleteProductType mutation */
export interface GraphCmsDeleteProductTypeInput {
  clientMutationId: string;
  /** The ID of the productType to delete */
  id: string;
}
/** Input for the deleteRevision mutation */
export interface GraphCmsDeleteRevisionInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the revision to delete */
  id: string;
}
/** Input for the deleteShippingClass mutation */
export interface GraphCmsDeleteShippingClassInput {
  clientMutationId: string;
  /** The ID of the shippingClass to delete */
  id: string;
}
/** Input for the deleteTag mutation */
export interface GraphCmsDeleteTagInput {
  clientMutationId: string;
  /** The ID of the tag to delete */
  id: string;
}
/** Input for the deleteUser mutation */
export interface GraphCmsDeleteUserInput {
  clientMutationId: string;
  /** The ID of the user you want to delete */
  id: string;
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<string>;
}
/** Input for the deleteVisibleProduct mutation */
export interface GraphCmsDeleteVisibleProductInput {
  clientMutationId: string;
  /** The ID of the visibleProduct to delete */
  id: string;
}
/** Input for the emptyCart mutation */
export interface GraphCmsEmptyCartInput {
  clientMutationId: string;
}
/** Input for the registerCustomer mutation */
export interface GraphCmsRegisterCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<GraphCmsCustomerAddressInput>;

  clientMutationId: string;
  /** A string containing content about the user. */
  description?: Maybe<string>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<string>;
  /** A string containing the user's email address. */
  email?: Maybe<string>;
  /** The user's first name. */
  firstName?: Maybe<string>;
  /** User's Jabber account. */
  jabber?: Maybe<string>;
  /** The user's last name. */
  lastName?: Maybe<string>;
  /** User's locale. */
  locale?: Maybe<string>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<string>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<string>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<string>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<string>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<string>;
  /** Customer shipping address */
  shipping?: Maybe<GraphCmsCustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<boolean>;
  /** A string that contains the user's username. */
  username: string;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the registerUser mutation */
export interface GraphCmsRegisterUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;

  clientMutationId: string;
  /** A string containing content about the user. */
  description?: Maybe<string>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<string>;
  /** A string containing the user's email address. */
  email?: Maybe<string>;
  /** The user's first name. */
  firstName?: Maybe<string>;
  /** User's Jabber account. */
  jabber?: Maybe<string>;
  /** The user's last name. */
  lastName?: Maybe<string>;
  /** User's locale. */
  locale?: Maybe<string>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<string>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<string>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<string>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<string>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<string>;
  /** A string that contains the user's username. */
  username: string;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the removeCoupons mutation */
export interface GraphCmsRemoveCouponsInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  codes?: Maybe<(Maybe<string>)[]>;
}
/** Input for the removeItemsFromCart mutation */
export interface GraphCmsRemoveItemsFromCartInput {
  /** Remove all cart items */
  all?: Maybe<boolean>;

  clientMutationId: string;
  /** Item keys of the items being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the resetUserPassword mutation */
export interface GraphCmsResetUserPasswordInput {
  clientMutationId: string;
  /** Password reset key */
  key?: Maybe<string>;
  /** The user's login (username). */
  login?: Maybe<string>;
  /** The new password. */
  password?: Maybe<string>;
}
/** Input for the restoreCartItems mutation */
export interface GraphCmsRestoreCartItemsInput {
  clientMutationId: string;
  /** Cart item key of the item being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the restoreComment mutation */
export interface GraphCmsRestoreCommentInput {
  clientMutationId: string;
  /** The ID of the comment to be restored */
  id: string;
}
/** Input for the sendPasswordResetEmail mutation */
export interface GraphCmsSendPasswordResetEmailInput {
  clientMutationId: string;
  /** A string that contains the user's username or email address. */
  username: string;
}
/** Input for the UpdateCategory mutation */
export interface GraphCmsUpdateCategoryInput {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the category object */
  description?: Maybe<string>;
  /** The ID of the category object to update */
  id: string;
  /** The name of the category object to mutate */
  name?: Maybe<string>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the updateComment mutation */
export interface GraphCmsUpdateCommentInput {
  /** User agent used to post the comment. */
  agent?: Maybe<string>;
  /** The approval status of the comment. */
  approved?: Maybe<string>;
  /** The name of the comment's author. */
  author?: Maybe<string>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<string>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<string>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<string>;

  clientMutationId: string;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<number>;
  /** Content of the comment. */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** The ID of the comment being updated. */
  id: string;
  /** Parent comment of current comment. */
  parent?: Maybe<string>;
  /** Type of comment. */
  type?: Maybe<string>;
  /** The userID of the comment's author. */
  userId?: Maybe<number>;
}
/** Input for the updateCustomer mutation */
export interface GraphCmsUpdateCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<GraphCmsCustomerAddressInput>;

  clientMutationId: string;
  /** A string containing content about the user. */
  description?: Maybe<string>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<string>;
  /** A string containing the user's email address. */
  email?: Maybe<string>;
  /** The user's first name. */
  firstName?: Maybe<string>;
  /** The ID of the user */
  id: string;
  /** User's Jabber account. */
  jabber?: Maybe<string>;
  /** The user's last name. */
  lastName?: Maybe<string>;
  /** User's locale. */
  locale?: Maybe<string>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<string>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<string>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<string>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<string>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<string>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<(Maybe<string>)[]>;
  /** Customer shipping address */
  shipping?: Maybe<GraphCmsCustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<boolean>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the updateItemQuantity mutation */
export interface GraphCmsUpdateItemQuantityInput {
  clientMutationId: string;
  /** Cart item being updated */
  key: string;
  /** Cart item's new quantity */
  quantity: number;
}
/** Input for the updateMediaItem mutation */
export interface GraphCmsUpdateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<string>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<string>;
  /** The caption for the mediaItem */
  caption?: Maybe<string>;

  clientMutationId: string;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<string>;
  /** The date of the mediaItem */
  date?: Maybe<string>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<string>;
  /** Description of the mediaItem */
  description?: Maybe<string>;
  /** The file name of the mediaItem */
  filePath?: Maybe<string>;
  /** The file type of the mediaItem */
  fileType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: string;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<GraphCmsMediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the updatePage mutation */
export interface GraphCmsUpdatePageInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;

  clientMutationId: string;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** The comment status for the object */
  commentStatus?: Maybe<string>;
  /** The content of the object */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** The excerpt of the object */
  excerpt?: Maybe<string>;
  /** The ID of the page object */
  id: string;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<string>;
  /** The password used to protect the content of the object */
  password?: Maybe<string>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** The ping status for the object */
  pingStatus?: Maybe<string>;
  /** The slug of the object */
  slug?: Maybe<string>;
  /** The status of the object */
  status?: Maybe<GraphCmsPostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the UpdatePaHind mutation */
export interface GraphCmsUpdatePaHindInput {
  /** The slug that the pa_hind will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_hind object */
  description?: Maybe<string>;
  /** The ID of the paHind object to update */
  id: string;
  /** The name of the pa_hind object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaHulk mutation */
export interface GraphCmsUpdatePaHulkInput {
  /** The slug that the pa_hulk will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_hulk object */
  description?: Maybe<string>;
  /** The ID of the paHulk object to update */
  id: string;
  /** The name of the pa_hulk object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaKasutusaeg mutation */
export interface GraphCmsUpdatePaKasutusaegInput {
  /** The slug that the pa_kasutusaeg will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kasutusaeg object */
  description?: Maybe<string>;
  /** The ID of the paKasutusaeg object to update */
  id: string;
  /** The name of the pa_kasutusaeg object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaKogus mutation */
export interface GraphCmsUpdatePaKogusInput {
  /** The slug that the pa_kogus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kogus object */
  description?: Maybe<string>;
  /** The ID of the paKogus object to update */
  id: string;
  /** The name of the pa_kogus object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaKontuur mutation */
export interface GraphCmsUpdatePaKontuurInput {
  /** The slug that the pa_kontuur will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_kontuur object */
  description?: Maybe<string>;
  /** The ID of the paKontuur object to update */
  id: string;
  /** The name of the pa_kontuur object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaKoostisained mutation */
export interface GraphCmsUpdatePaKoostisainedInput {
  /** The slug that the pa_koostisained will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_koostisained object */
  description?: Maybe<string>;
  /** The ID of the paKoostisained object to update */
  id: string;
  /** The name of the pa_koostisained object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaLaadimisaeg mutation */
export interface GraphCmsUpdatePaLaadimisaegInput {
  /** The slug that the pa_laadimisaeg will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_laadimisaeg object */
  description?: Maybe<string>;
  /** The ID of the paLaadimisaeg object to update */
  id: string;
  /** The name of the pa_laadimisaeg object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaMaterjal mutation */
export interface GraphCmsUpdatePaMaterjalInput {
  /** The slug that the pa_materjal will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_materjal object */
  description?: Maybe<string>;
  /** The ID of the paMaterjal object to update */
  id: string;
  /** The name of the pa_materjal object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaMuratasa mutation */
export interface GraphCmsUpdatePaMuratasaInput {
  /** The slug that the pa_muratasa will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_muratasa object */
  description?: Maybe<string>;
  /** The ID of the paMuratasa object to update */
  id: string;
  /** The name of the pa_muratasa object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaOhutus mutation */
export interface GraphCmsUpdatePaOhutusInput {
  /** The slug that the pa_ohutus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_ohutus object */
  description?: Maybe<string>;
  /** The ID of the paOhutus object to update */
  id: string;
  /** The name of the pa_ohutus object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaPatareid mutation */
export interface GraphCmsUpdatePaPatareidInput {
  /** The slug that the pa_patareid will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_patareid object */
  description?: Maybe<string>;
  /** The ID of the paPatareid object to update */
  id: string;
  /** The name of the pa_patareid object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaSuurus mutation */
export interface GraphCmsUpdatePaSuurusInput {
  /** The slug that the pa_suurus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_suurus object */
  description?: Maybe<string>;
  /** The ID of the paSuurus object to update */
  id: string;
  /** The name of the pa_suurus object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaVariant mutation */
export interface GraphCmsUpdatePaVariantInput {
  /** The slug that the pa_variant will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_variant object */
  description?: Maybe<string>;
  /** The ID of the paVariant object to update */
  id: string;
  /** The name of the pa_variant object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaVarv mutation */
export interface GraphCmsUpdatePaVarvInput {
  /** The slug that the pa_varv will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_varv object */
  description?: Maybe<string>;
  /** The ID of the paVarv object to update */
  id: string;
  /** The name of the pa_varv object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdatePaVeekindlus mutation */
export interface GraphCmsUpdatePaVeekindlusInput {
  /** The slug that the pa_veekindlus will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the pa_veekindlus object */
  description?: Maybe<string>;
  /** The ID of the paVeekindlus object to update */
  id: string;
  /** The name of the pa_veekindlus object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the updatePost mutation */
export interface GraphCmsUpdatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<GraphCmsPostCategoriesInput>;

  clientMutationId: string;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** The comment status for the object */
  commentStatus?: Maybe<string>;
  /** The content of the object */
  content?: Maybe<string>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
  date?: Maybe<string>;
  /** The excerpt of the object */
  excerpt?: Maybe<string>;
  /** The ID of the post object */
  id: string;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<GraphCmsMimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<string>;
  /** The password used to protect the content of the object */
  password?: Maybe<string>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** The ping status for the object */
  pingStatus?: Maybe<string>;
  /** The slug of the object */
  slug?: Maybe<string>;
  /** The status of the object */
  status?: Maybe<GraphCmsPostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<GraphCmsPostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the UpdateProductCategory mutation */
export interface GraphCmsUpdateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_cat object */
  description?: Maybe<string>;
  /** The ID of the productCategory object to update */
  id: string;
  /** The name of the product_cat object to mutate */
  name?: Maybe<string>;
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdateProductTag mutation */
export interface GraphCmsUpdateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_tag object */
  description?: Maybe<string>;
  /** The ID of the productTag object to update */
  id: string;
  /** The name of the product_tag object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdateProductType mutation */
export interface GraphCmsUpdateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_type object */
  description?: Maybe<string>;
  /** The ID of the productType object to update */
  id: string;
  /** The name of the product_type object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the updateSettings mutation */
export interface GraphCmsUpdateSettingsInput {
  clientMutationId: string;
  /** Luba uute artiklite kommenteerimist */
  discussionSettingsDefaultCommentStatus?: Maybe<string>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  discussionSettingsDefaultPingStatus?: Maybe<string>;
  /** Kõigi kuupäevade vorming. */
  generalSettingsDateFormat?: Maybe<string>;
  /** Veebisaidi alapealkiri. */
  generalSettingsDescription?: Maybe<string>;
  /** Seda aadressi kasutatakse saidi haldamisel, näiteks uue kasutaja teavitamiseks. */
  generalSettingsEmail?: Maybe<string>;
  /** WordPressi maakood. */
  generalSettingsLanguage?: Maybe<string>;
  /** Nädala alguspäeva number. */
  generalSettingsStartOfWeek?: Maybe<number>;
  /** Kõigi kellaaegade vorming. */
  generalSettingsTimeFormat?: Maybe<string>;
  /** Linn samas ajavööndis. */
  generalSettingsTimezone?: Maybe<string>;
  /** Saidi pealkiri. */
  generalSettingsTitle?: Maybe<string>;
  /** Veebilehe aadress. */
  generalSettingsUrl?: Maybe<string>;
  /** lehekülge korraga. */
  readingSettingsPostsPerPage?: Maybe<number>;
  /** Vaikimisi rubriik. */
  writingSettingsDefaultCategory?: Maybe<number>;
  /** Vaikimisi postitusevorming */
  writingSettingsDefaultPostFormat?: Maybe<string>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  writingSettingsUseSmilies?: Maybe<boolean>;
}
/** Input for the UpdateShippingClass mutation */
export interface GraphCmsUpdateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_shipping_class object */
  description?: Maybe<string>;
  /** The ID of the shippingClass object to update */
  id: string;
  /** The name of the product_shipping_class object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the UpdateTag mutation */
export interface GraphCmsUpdateTagInput {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the post_tag object */
  description?: Maybe<string>;
  /** The ID of the tag object to update */
  id: string;
  /** The name of the post_tag object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}
/** Input for the updateUser mutation */
export interface GraphCmsUpdateUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;

  clientMutationId: string;
  /** A string containing content about the user. */
  description?: Maybe<string>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<string>;
  /** A string containing the user's email address. */
  email?: Maybe<string>;
  /** The user's first name. */
  firstName?: Maybe<string>;
  /** The ID of the user */
  id: string;
  /** User's Jabber account. */
  jabber?: Maybe<string>;
  /** The user's last name. */
  lastName?: Maybe<string>;
  /** User's locale. */
  locale?: Maybe<string>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<string>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<string>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<string>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<string>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<string>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<(Maybe<string>)[]>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the UpdateVisibleProduct mutation */
export interface GraphCmsUpdateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<string>;

  clientMutationId: string;
  /** The description of the product_visibility object */
  description?: Maybe<string>;
  /** The ID of the visibleProduct object to update */
  id: string;
  /** The name of the product_visibility object to mutate */
  name?: Maybe<string>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<string>;
}

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsRefetchInterval = 'pluginCreator___pluginOptions___refetchInterval',
  PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
  PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsRefetchInterval = 'pluginOptions___refetchInterval',
  PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
  PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataSiteName = 'siteMetadata___siteName',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName',
}
/** The column to use when filtering by date */
export enum GraphCmsPostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED',
}
/** The logical relation between each item in the array when there are more than one. */
export enum GraphCmsRelationEnum {
  And = 'AND',
  Or = 'OR',
}
/** Field to order the connection by */
export enum GraphCmsWcConnectionOrderbyEnum {
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Price = 'PRICE',
  RegularPrice = 'REGULAR_PRICE',
  SalePrice = 'SALE_PRICE',
  Slug = 'SLUG',
}
/** The cardinality of the connection order */
export enum GraphCmsOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}
/** Coupon discount type enumeration */
export enum GraphCmsDiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT',
}
/** Options for ordering the connection by */
export enum GraphCmsTermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER',
}
/** Allowed Post Types */
export enum GraphCmsPostTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST',
  Revision = 'REVISION',
}
/** Allowed taxonomies */
export enum GraphCmsTaxonomyEnum {
  Category = 'CATEGORY',
  Pahind = 'PAHIND',
  Pahulk = 'PAHULK',
  Pakasutusaeg = 'PAKASUTUSAEG',
  Pakogus = 'PAKOGUS',
  Pakontuur = 'PAKONTUUR',
  Pakoostisained = 'PAKOOSTISAINED',
  Palaadimisaeg = 'PALAADIMISAEG',
  Pamaterjal = 'PAMATERJAL',
  Pamuratasa = 'PAMURATASA',
  Paohutus = 'PAOHUTUS',
  Papatareid = 'PAPATAREID',
  Pasuurus = 'PASUURUS',
  Pavariant = 'PAVARIANT',
  Pavarv = 'PAVARV',
  Paveekindlus = 'PAVEEKINDLUS',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Tag = 'TAG',
  Visibleproduct = 'VISIBLEPRODUCT',
}
/** Product stock status enumeration */
export enum GraphCmsStockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK',
}
/** Tax class enumeration */
export enum GraphCmsTaxClassEnum {
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE',
}
/** Product type enumeration */
export enum GraphCmsProductTypesEnum {
  External = 'EXTERNAL',
  Grouped = 'GROUPED',
  Simple = 'SIMPLE',
  Variable = 'VARIABLE',
  Variation = 'VARIATION',
}
/** Product catalog visibility enumeration */
export enum GraphCmsCatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE',
}
/** Product backorder enumeration */
export enum GraphCmsBackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES',
}
/** The MimeType of the object */
export enum GraphCmsMimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX',
}
/** Field to order the connection by */
export enum GraphCmsPostObjectsConnectionOrderbyEnum {
  Author = 'AUTHOR',
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Title = 'TITLE',
}
/** The status of the object. */
export enum GraphCmsPostStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Draft = 'DRAFT',
  Failed = 'FAILED',
  Future = 'FUTURE',
  Inherit = 'INHERIT',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  RequestCompleted = 'REQUEST_COMPLETED',
  RequestConfirmed = 'REQUEST_CONFIRMED',
  RequestFailed = 'REQUEST_FAILED',
  RequestPending = 'REQUEST_PENDING',
  Trash = 'TRASH',
  WcCancelled = 'WC_CANCELLED',
  WcCompleted = 'WC_COMPLETED',
  WcFailed = 'WC_FAILED',
  WcOnHold = 'WC_ON_HOLD',
  WcPending = 'WC_PENDING',
  WcProcessing = 'WC_PROCESSING',
  WcRefunded = 'WC_REFUNDED',
}
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum GraphCmsAvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X',
}
/** Options for ordering the connection */
export enum GraphCmsCommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID',
}
/** The format of post field data. */
export enum GraphCmsPostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED',
}
/** Product manage stock enumeration */
export enum GraphCmsManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE',
}
/** Product tax status enumeration */
export enum GraphCmsTaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE',
}
/** The size of the media item object. */
export enum GraphCmsMediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  ShopCatalog = 'SHOP_CATALOG',
  ShopSingle = 'SHOP_SINGLE',
  ShopThumbnail = 'SHOP_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
}
/** Field to order the connection by */
export enum GraphCmsCustomerConnectionOrderbyEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Include = 'INCLUDE',
  Name = 'NAME',
  RegisteredDate = 'REGISTERED_DATE',
  Username = 'USERNAME',
}
/** Names of available user roles */
export enum GraphCmsUserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER',
}
/** Countries enumeration */
export enum GraphCmsCountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
}
/** Order status enumeration */
export enum GraphCmsOrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
}
/** Registered menu locations */
export enum GraphCmsMenuLocationEnum {
  Top = 'TOP',
  TopRight = 'TOP_RIGHT',
}
/** Field to order the connection by */
export enum GraphCmsTaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER',
}
/** Column used for searching for users */
export enum GraphCmsUsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL',
}
/** The status of the media item object. */
export enum GraphCmsMediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

// ====================================================
// Documents
// ====================================================

export type IndexQueryVariables = {};

export type IndexQueryQuery = {
  __typename?: 'Query';

  site: Maybe<IndexQuerySite>;

  cms: Maybe<IndexQueryCms>;
};

export type IndexQuerySite = {
  __typename?: 'Site';

  siteMetadata: Maybe<IndexQuerySiteMetadata>;
};

export type IndexQuerySiteMetadata = {
  __typename?: 'SiteSiteMetadata';

  siteName: Maybe<string>;
};

export type IndexQueryCms = {
  __typename?: 'GraphCMS';

  products: Maybe<IndexQueryProducts>;
};

export type IndexQueryProducts = {
  __typename?: 'GraphCMS_RootQueryToProductConnection';

  edges: Maybe<(Maybe<IndexQueryEdges>)[]>;
};

export type IndexQueryEdges = {
  __typename?: 'GraphCMS_RootQueryToProductConnectionEdge';

  node: Maybe<IndexQueryNode>;
};

export type IndexQueryNode = {
  __typename?: 'GraphCMS_Product';

  name: Maybe<string>;

  slug: Maybe<string>;

  price: Maybe<string>;

  salePrice: Maybe<string>;

  image: Maybe<IndexQueryImage>;

  galleryImages: Maybe<IndexQueryGalleryImages>;
};

export type IndexQueryImage = {
  __typename?: 'GraphCMS_MediaItem';

  mediaDetails: Maybe<IndexQueryMediaDetails>;

  srcSet: Maybe<string>;
};

export type IndexQueryMediaDetails = {
  __typename?: 'GraphCMS_MediaDetails';

  width: Maybe<number>;

  height: Maybe<number>;
};

export type IndexQueryGalleryImages = {
  __typename?: 'GraphCMS_ProductToMediaItemConnection';

  edges: Maybe<(Maybe<IndexQuery_Edges>)[]>;
};

export type IndexQuery_Edges = {
  __typename?: 'GraphCMS_ProductToMediaItemConnectionEdge';

  node: Maybe<IndexQuery_Node>;
};

export type IndexQuery_Node = {
  __typename?: 'GraphCMS_MediaItem';

  srcSet: Maybe<string>;

  mediaDetails: Maybe<IndexQuery_MediaDetails>;
};

export type IndexQuery_MediaDetails = {
  __typename?: 'GraphCMS_MediaDetails';

  width: Maybe<number>;

  height: Maybe<number>;

  sizes: Maybe<(Maybe<IndexQuerySizes>)[]>;
};

export type IndexQuerySizes = {
  __typename?: 'GraphCMS_MediaSize';

  width: Maybe<string>;

  height: Maybe<string>;

  sourceUrl: Maybe<string>;
};

export type ProductTemplateVariables = {
  id: string;
};

export type ProductTemplateQuery = {
  __typename?: 'Query';

  site: Maybe<ProductTemplateSite>;

  cms: Maybe<ProductTemplateCms>;
};

export type ProductTemplateSite = {
  __typename?: 'Site';

  siteMetadata: Maybe<ProductTemplateSiteMetadata>;
};

export type ProductTemplateSiteMetadata = {
  __typename?: 'SiteSiteMetadata';

  siteName: Maybe<string>;
};

export type ProductTemplateCms = {
  __typename?: 'GraphCMS';

  product: Maybe<ProductTemplateProduct>;
};

export type ProductTemplateProduct = {
  __typename?: 'GraphCMS_Product';

  id: string;

  name: Maybe<string>;

  description: Maybe<string>;

  image: Maybe<ProductTemplateImage>;
};

export type ProductTemplateImage = {
  __typename?: 'GraphCMS_MediaItem';

  mediaDetails: Maybe<ProductTemplateMediaDetails>;

  srcSet: Maybe<string>;
};

export type ProductTemplateMediaDetails = {
  __typename?: 'GraphCMS_MediaDetails';

  width: Maybe<number>;

  height: Maybe<number>;
};
