export type Maybe<T> = T | null;

/** Arguments for filtering the CartToCouponConnection connection */
export interface WpCartToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
export interface WpDateQueryInput {
  after?: Maybe<WpDateInput>;

  before?: Maybe<WpDateInput>;
  /** Column to query against */
  column?: Maybe<WpPostObjectsConnectionDateColumnEnum>;
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
  relation?: Maybe<WpRelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<number>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Date values */
export interface WpDateInput {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<number>;
  /** Month number (from 1 to 12) */
  month?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Options for ordering the connection */
export interface WpWcConnectionOrderbyInput {
  field: WpWcConnectionOrderbyEnum;

  order?: Maybe<WpOrderEnum>;
}
/** Arguments for filtering the CouponToProductCategoryConnection connection */
export interface WpCouponToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpProductCategoryToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpProductCategoryToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToProductCategoryConnection connection */
export interface WpProductToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpProductToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToMediaItemConnection connection */
export interface WpProductToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpPostObjectsConnectionOrderbyInput {
  field: WpPostObjectsConnectionOrderbyEnum;

  order?: Maybe<WpOrderEnum>;
}
/** Arguments for filtering the UserToCommentConnection connection */
export interface WpUserToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpCommentToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpUserToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpUserToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpPageToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpPageToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpPageToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpCategoryToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpCategoryToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpTagToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpProductTagToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductConnection connection */
export interface WpPaHindToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductVariationConnection connection */
export interface WpPaHindToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductConnection connection */
export interface WpPaHulkToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductVariationConnection connection */
export interface WpPaHulkToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductConnection connection */
export interface WpPaKasutusaegToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductVariationConnection connection */
export interface WpPaKasutusaegToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductConnection connection */
export interface WpPaKogusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductVariationConnection connection */
export interface WpPaKogusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductConnection connection */
export interface WpPaKontuurToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductVariationConnection connection */
export interface WpPaKontuurToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductConnection connection */
export interface WpPaKoostisainedToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductVariationConnection connection */
export interface WpPaKoostisainedToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductConnection connection */
export interface WpPaLaadimisaegToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductVariationConnection connection */
export interface WpPaLaadimisaegToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductConnection connection */
export interface WpPaMaterjalToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductVariationConnection connection */
export interface WpPaMaterjalToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductConnection connection */
export interface WpPaMuratasaToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductVariationConnection connection */
export interface WpPaMuratasaToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductConnection connection */
export interface WpPaOhutusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductVariationConnection connection */
export interface WpPaOhutusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductConnection connection */
export interface WpPaPatareidToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductVariationConnection connection */
export interface WpPaPatareidToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductConnection connection */
export interface WpPaSuurusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductVariationConnection connection */
export interface WpPaSuurusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductConnection connection */
export interface WpPaVariantToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductVariationConnection connection */
export interface WpPaVariantToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductConnection connection */
export interface WpPaVarvToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductVariationConnection connection */
export interface WpPaVarvToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductConnection connection */
export interface WpPaVeekindlusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductVariationConnection connection */
export interface WpPaVeekindlusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the UserToPostConnection connection */
export interface WpUserToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpUserToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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
export interface WpPostToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpPostToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpPostToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpPostToTagConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpMediaItemToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpProductToProductTagConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpProductToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToProductConnection connection */
export interface WpCouponToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToCustomerConnection connection */
export interface WpCouponToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<WpOrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<WpCustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<WpUserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the OrderToRefundConnection connection */
export interface WpOrderToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
export interface WpCustomerToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  statuses?: Maybe<(Maybe<WpOrderStatusEnum>)[]>;
}
/** Arguments for filtering the CustomerToRefundConnection connection */
export interface WpCustomerToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
export interface WpCartToCartItemConnectionWhereArgs {
  /** Limit results to cart item that require shipping */
  needShipping?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface WpRootQueryToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<WpPostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpOrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpCommentsConnectionOrderbyEnum>;
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
export interface WpRootQueryToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
export interface WpRootQueryToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<WpOrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<WpCustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<WpUserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface WpRootQueryToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpMenuToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpMenuLocationEnum>;
}
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface WpMenuItemToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpMenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface WpRootQueryToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpMenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface WpRootQueryToMenuConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpMenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToOrderConnection connection */
export interface WpRootQueryToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  statuses?: Maybe<(Maybe<WpOrderStatusEnum>)[]>;
}
/** Arguments for filtering the RootQueryToPaHindConnection connection */
export interface WpRootQueryToPaHindConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaHulkConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaKasutusaegConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaKogusConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaKontuurConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaKoostisainedConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaLaadimisaegConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaMaterjalConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaMuratasaConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaOhutusConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaPatareidConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaSuurusConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaVariantConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaVarvConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPaVeekindlusConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpRootQueryToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<WpPostStatusEnum>)[]>;

  status?: Maybe<WpPostStatusEnum>;
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
export interface WpRootQueryToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToProductTagConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToProductTypeConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
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
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<WpStockStatusEnum>)[]>;
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
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<WpProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<WpProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<WpCatalogVisibilityEnum>;
}
/** Arguments for filtering the RootQueryToRefundConnection connection */
export interface WpRootQueryToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpDateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpWcConnectionOrderbyInput>)[]>;
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
export interface WpRootQueryToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<WpDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpMimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpPostObjectsConnectionOrderbyInput>)[]>;
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
export interface WpRootQueryToShippingClassConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToTagConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
export interface WpRootQueryToTaxRateConnectionWhereArgs {
  /** Sort by tax class */
  class?: Maybe<string>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WpTaxRateConnectionOrderbyInput>)[]>;
}
/** Options for ordering the connection */
export interface WpTaxRateConnectionOrderbyInput {
  field: WpTaxRateConnectionOrderbyEnum;

  order?: Maybe<WpOrderEnum>;
}
/** Arguments for filtering the RootQueryToUserConnection connection */
export interface WpRootQueryToUserConnectionWhereArgs {
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
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
  role?: Maybe<WpUserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<(Maybe<WpUserRoleEnum>)[]>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<string>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<(Maybe<WpUsersConnectionSearchColumnEnum>)[]>;
}
/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export interface WpRootQueryToVisibleProductConnectionWhereArgs {
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
  orderby?: Maybe<WpTermObjectsConnectionOrderbyEnum>;
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
/** Input for the UpdateCategory mutation */
export interface WpUpdateCategoryInput {
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
/** Input for the UpdatePaHind mutation */
export interface WpUpdatePaHindInput {
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
export interface WpUpdatePaHulkInput {
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
export interface WpUpdatePaKasutusaegInput {
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
export interface WpUpdatePaKogusInput {
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
export interface WpUpdatePaKontuurInput {
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
export interface WpUpdatePaKoostisainedInput {
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
export interface WpUpdatePaLaadimisaegInput {
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
export interface WpUpdatePaMaterjalInput {
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
export interface WpUpdatePaMuratasaInput {
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
export interface WpUpdatePaOhutusInput {
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
export interface WpUpdatePaPatareidInput {
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
export interface WpUpdatePaSuurusInput {
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
export interface WpUpdatePaVariantInput {
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
export interface WpUpdatePaVarvInput {
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
export interface WpUpdatePaVeekindlusInput {
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
/** Input for the UpdateProductCategory mutation */
export interface WpUpdateProductCategoryInput {
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
export interface WpUpdateProductTagInput {
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
export interface WpUpdateProductTypeInput {
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
/** Input for the UpdateShippingClass mutation */
export interface WpUpdateShippingClassInput {
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
export interface WpUpdateTagInput {
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
/** Input for the UpdateVisibleProduct mutation */
export interface WpUpdateVisibleProductInput {
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
/** Input for the addFee mutation */
export interface WpAddFeeInput {
  /** Fee amount */
  amount?: Maybe<number>;

  clientMutationId: string;
  /** Unique name for the fee. */
  name: string;
  /** Is the fee taxable? */
  taxable?: Maybe<boolean>;
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<WpTaxClassEnum>;
}
/** Input for the addToCart mutation */
export interface WpAddToCartInput {
  clientMutationId: string;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<string>;
  /** Cart item product database ID or global ID */
  productId: number;
  /** Cart item quantity */
  quantity?: Maybe<number>;
  /** Cart item product variation attributes */
  variation?: Maybe<(Maybe<WpProductAttributeInput>)[]>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<number>;
}
/** Options for ordering the connection */
export interface WpProductAttributeInput {
  attribute: string;

  attributeTerm: string;
}
/** Input for the applyCoupon mutation */
export interface WpApplyCouponInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  code: string;
}
/** Input for the createCategory mutation */
export interface WpCreateCategoryInput {
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
export interface WpCreateCommentInput {
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
export interface WpCreateMediaItemInput {
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
  fileType?: Maybe<WpMimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<WpMediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the createPaHind mutation */
export interface WpCreatePaHindInput {
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
export interface WpCreatePaHulkInput {
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
export interface WpCreatePaKasutusaegInput {
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
export interface WpCreatePaKogusInput {
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
export interface WpCreatePaKontuurInput {
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
export interface WpCreatePaKoostisainedInput {
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
export interface WpCreatePaLaadimisaegInput {
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
export interface WpCreatePaMaterjalInput {
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
export interface WpCreatePaMuratasaInput {
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
export interface WpCreatePaOhutusInput {
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
export interface WpCreatePaPatareidInput {
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
export interface WpCreatePaSuurusInput {
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
export interface WpCreatePaVariantInput {
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
export interface WpCreatePaVarvInput {
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
export interface WpCreatePaVeekindlusInput {
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
/** Input for the createPage mutation */
export interface WpCreatePageInput {
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
  mimeType?: Maybe<WpMimeTypeEnum>;
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
  status?: Maybe<WpPostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the createPost mutation */
export interface WpCreatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<WpPostCategoriesInput>;

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
  mimeType?: Maybe<WpMimeTypeEnum>;
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
  status?: Maybe<WpPostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<WpPostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Set relationships between the post to categories */
export interface WpPostCategoriesInput {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<WpPostCategoriesNodeInput>)[]>;
}
/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface WpPostCategoriesNodeInput {
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
export interface WpPostTagsInput {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<WpPostTagsNodeInput>)[]>;
}
/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface WpPostTagsNodeInput {
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
export interface WpCreateProductCategoryInput {
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
export interface WpCreateProductTagInput {
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
export interface WpCreateProductTypeInput {
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
export interface WpCreateShippingClassInput {
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
export interface WpCreateTagInput {
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
export interface WpCreateUserInput {
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
export interface WpCreateVisibleProductInput {
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
/** Input for the deleteCategory mutation */
export interface WpDeleteCategoryInput {
  clientMutationId: string;
  /** The ID of the category to delete */
  id: string;
}
/** Input for the deleteComment mutation */
export interface WpDeleteCommentInput {
  clientMutationId: string;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The deleted comment ID */
  id: string;
}
/** Input for the deleteMediaItem mutation */
export interface WpDeleteMediaItemInput {
  clientMutationId: string;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the mediaItem to delete */
  id: string;
}
/** Input for the deletePaHind mutation */
export interface WpDeletePaHindInput {
  clientMutationId: string;
  /** The ID of the paHind to delete */
  id: string;
}
/** Input for the deletePaHulk mutation */
export interface WpDeletePaHulkInput {
  clientMutationId: string;
  /** The ID of the paHulk to delete */
  id: string;
}
/** Input for the deletePaKasutusaeg mutation */
export interface WpDeletePaKasutusaegInput {
  clientMutationId: string;
  /** The ID of the paKasutusaeg to delete */
  id: string;
}
/** Input for the deletePaKogus mutation */
export interface WpDeletePaKogusInput {
  clientMutationId: string;
  /** The ID of the paKogus to delete */
  id: string;
}
/** Input for the deletePaKontuur mutation */
export interface WpDeletePaKontuurInput {
  clientMutationId: string;
  /** The ID of the paKontuur to delete */
  id: string;
}
/** Input for the deletePaKoostisained mutation */
export interface WpDeletePaKoostisainedInput {
  clientMutationId: string;
  /** The ID of the paKoostisained to delete */
  id: string;
}
/** Input for the deletePaLaadimisaeg mutation */
export interface WpDeletePaLaadimisaegInput {
  clientMutationId: string;
  /** The ID of the paLaadimisaeg to delete */
  id: string;
}
/** Input for the deletePaMaterjal mutation */
export interface WpDeletePaMaterjalInput {
  clientMutationId: string;
  /** The ID of the paMaterjal to delete */
  id: string;
}
/** Input for the deletePaMuratasa mutation */
export interface WpDeletePaMuratasaInput {
  clientMutationId: string;
  /** The ID of the paMuratasa to delete */
  id: string;
}
/** Input for the deletePaOhutus mutation */
export interface WpDeletePaOhutusInput {
  clientMutationId: string;
  /** The ID of the paOhutus to delete */
  id: string;
}
/** Input for the deletePaPatareid mutation */
export interface WpDeletePaPatareidInput {
  clientMutationId: string;
  /** The ID of the paPatareid to delete */
  id: string;
}
/** Input for the deletePaSuurus mutation */
export interface WpDeletePaSuurusInput {
  clientMutationId: string;
  /** The ID of the paSuurus to delete */
  id: string;
}
/** Input for the deletePaVariant mutation */
export interface WpDeletePaVariantInput {
  clientMutationId: string;
  /** The ID of the paVariant to delete */
  id: string;
}
/** Input for the deletePaVarv mutation */
export interface WpDeletePaVarvInput {
  clientMutationId: string;
  /** The ID of the paVarv to delete */
  id: string;
}
/** Input for the deletePaVeekindlus mutation */
export interface WpDeletePaVeekindlusInput {
  clientMutationId: string;
  /** The ID of the paVeekindlus to delete */
  id: string;
}
/** Input for the deletePage mutation */
export interface WpDeletePageInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the page to delete */
  id: string;
}
/** Input for the deletePost mutation */
export interface WpDeletePostInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the post to delete */
  id: string;
}
/** Input for the deleteProductCategory mutation */
export interface WpDeleteProductCategoryInput {
  clientMutationId: string;
  /** The ID of the productCategory to delete */
  id: string;
}
/** Input for the deleteProductTag mutation */
export interface WpDeleteProductTagInput {
  clientMutationId: string;
  /** The ID of the productTag to delete */
  id: string;
}
/** Input for the deleteProductType mutation */
export interface WpDeleteProductTypeInput {
  clientMutationId: string;
  /** The ID of the productType to delete */
  id: string;
}
/** Input for the deleteRevision mutation */
export interface WpDeleteRevisionInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the revision to delete */
  id: string;
}
/** Input for the deleteShippingClass mutation */
export interface WpDeleteShippingClassInput {
  clientMutationId: string;
  /** The ID of the shippingClass to delete */
  id: string;
}
/** Input for the deleteTag mutation */
export interface WpDeleteTagInput {
  clientMutationId: string;
  /** The ID of the tag to delete */
  id: string;
}
/** Input for the deleteUser mutation */
export interface WpDeleteUserInput {
  clientMutationId: string;
  /** The ID of the user you want to delete */
  id: string;
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<string>;
}
/** Input for the deleteVisibleProduct mutation */
export interface WpDeleteVisibleProductInput {
  clientMutationId: string;
  /** The ID of the visibleProduct to delete */
  id: string;
}
/** Input for the emptyCart mutation */
export interface WpEmptyCartInput {
  clientMutationId: string;
}
/** Input for the registerCustomer mutation */
export interface WpRegisterCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<WpCustomerAddressInput>;

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
  shipping?: Maybe<WpCustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<boolean>;
  /** A string that contains the user's username. */
  username: string;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Customer address information */
export interface WpCustomerAddressInput {
  /** Address 1 */
  address1?: Maybe<string>;
  /** Address 2 */
  address2?: Maybe<string>;
  /** City */
  city?: Maybe<string>;
  /** Company */
  company?: Maybe<string>;
  /** Country */
  country?: Maybe<WpCountriesEnum>;
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
/** Input for the registerUser mutation */
export interface WpRegisterUserInput {
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
export interface WpRemoveCouponsInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  codes?: Maybe<(Maybe<string>)[]>;
}
/** Input for the removeItemsFromCart mutation */
export interface WpRemoveItemsFromCartInput {
  /** Remove all cart items */
  all?: Maybe<boolean>;

  clientMutationId: string;
  /** Item keys of the items being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the resetUserPassword mutation */
export interface WpResetUserPasswordInput {
  clientMutationId: string;
  /** Password reset key */
  key?: Maybe<string>;
  /** The user's login (username). */
  login?: Maybe<string>;
  /** The new password. */
  password?: Maybe<string>;
}
/** Input for the restoreCartItems mutation */
export interface WpRestoreCartItemsInput {
  clientMutationId: string;
  /** Cart item key of the item being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the restoreComment mutation */
export interface WpRestoreCommentInput {
  clientMutationId: string;
  /** The ID of the comment to be restored */
  id: string;
}
/** Input for the sendPasswordResetEmail mutation */
export interface WpSendPasswordResetEmailInput {
  clientMutationId: string;
  /** A string that contains the user's username or email address. */
  username: string;
}
/** Input for the updateComment mutation */
export interface WpUpdateCommentInput {
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
export interface WpUpdateCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<WpCustomerAddressInput>;

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
  shipping?: Maybe<WpCustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<boolean>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the updateItemQuantity mutation */
export interface WpUpdateItemQuantityInput {
  clientMutationId: string;
  /** Cart item being updated */
  key: string;
  /** Cart item's new quantity */
  quantity: number;
}
/** Input for the updateMediaItem mutation */
export interface WpUpdateMediaItemInput {
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
  fileType?: Maybe<WpMimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: string;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<WpMediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the updatePage mutation */
export interface WpUpdatePageInput {
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
  mimeType?: Maybe<WpMimeTypeEnum>;
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
  status?: Maybe<WpPostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updatePost mutation */
export interface WpUpdatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<WpPostCategoriesInput>;

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
  mimeType?: Maybe<WpMimeTypeEnum>;
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
  status?: Maybe<WpPostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<WpPostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updateSettings mutation */
export interface WpUpdateSettingsInput {
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
/** Input for the updateUser mutation */
export interface WpUpdateUserInput {
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
/** The column to use when filtering by date */
export enum WpPostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED',
}
/** The logical relation between each item in the array when there are more than one. */
export enum WpRelationEnum {
  And = 'AND',
  Or = 'OR',
}
/** Field to order the connection by */
export enum WpWcConnectionOrderbyEnum {
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
export enum WpOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}
/** Coupon discount type enumeration */
export enum WpDiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT',
}
/** Options for ordering the connection by */
export enum WpTermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER',
}
/** Allowed Post Types */
export enum WpPostTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST',
  Revision = 'REVISION',
}
/** Allowed taxonomies */
export enum WpTaxonomyEnum {
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
export enum WpStockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK',
}
/** Tax class enumeration */
export enum WpTaxClassEnum {
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE',
}
/** Product type enumeration */
export enum WpProductTypesEnum {
  External = 'EXTERNAL',
  Grouped = 'GROUPED',
  Simple = 'SIMPLE',
  Variable = 'VARIABLE',
  Variation = 'VARIATION',
}
/** Product catalog visibility enumeration */
export enum WpCatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE',
}
/** Product backorder enumeration */
export enum WpBackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES',
}
/** The MimeType of the object */
export enum WpMimeTypeEnum {
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
export enum WpPostObjectsConnectionOrderbyEnum {
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
export enum WpPostStatusEnum {
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
export enum WpAvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X',
}
/** Options for ordering the connection */
export enum WpCommentsConnectionOrderbyEnum {
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
export enum WpPostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED',
}
/** Product manage stock enumeration */
export enum WpManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE',
}
/** Product tax status enumeration */
export enum WpTaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE',
}
/** The size of the media item object. */
export enum WpMediaItemSizeEnum {
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
export enum WpCustomerConnectionOrderbyEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Include = 'INCLUDE',
  Name = 'NAME',
  RegisteredDate = 'REGISTERED_DATE',
  Username = 'USERNAME',
}
/** Names of available user roles */
export enum WpUserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER',
}
/** Countries enumeration */
export enum WpCountriesEnum {
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
export enum WpOrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
}
/** Registered menu locations */
export enum WpMenuLocationEnum {
  Empty = 'EMPTY',
}
/** Field to order the connection by */
export enum WpTaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER',
}
/** Column used for searching for users */
export enum WpUsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL',
}
/** The status of the media item object. */
export enum WpMediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH',
}

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface WpNode {
  /** The id of the object */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Entry point to get all settings for the site */
  WP_allSettings?: Maybe<WpSettings>;
  /** The cart object */
  WP_cart?: Maybe<WpCart>;
  /** The cart object */
  WP_cartFee?: Maybe<WpCartFee>;
  /** The cart object */
  WP_cartItem?: Maybe<WpCartItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_categories?: Maybe<WpRootQueryToCategoryConnection>;
  /** A 0bject */
  WP_category?: Maybe<WpCategory>;
  /** Returns a Comment */
  WP_comment?: Maybe<WpComment>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_comments?: Maybe<WpRootQueryToCommentConnection>;
  /** A coupon object */
  WP_coupon?: Maybe<WpCoupon>;
  /** A coupon object */
  WP_couponBy?: Maybe<WpCoupon>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_coupons?: Maybe<WpRootQueryToCouponConnection>;
  /** A customer object */
  WP_customer?: Maybe<WpCustomer>;
  /** A customer object */
  WP_customerBy?: Maybe<WpCustomer>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_customers?: Maybe<WpRootQueryToCustomerConnection>;

  WP_discussionSettings?: Maybe<WpDiscussionSettings>;

  WP_generalSettings?: Maybe<WpGeneralSettings>;
  /** A 0bject */
  WP_mediaItem?: Maybe<WpMediaItem>;
  /** A mediaItem object */
  WP_mediaItemBy?: Maybe<WpMediaItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_mediaItems?: Maybe<WpRootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  WP_menu?: Maybe<WpMenu>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_menuItems?: Maybe<WpRootQueryToMenuItemConnection>;
  /** A WordPress navigation menu item */
  WP_menuItem?: Maybe<WpMenuItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_menus?: Maybe<WpRootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  WP_node?: Maybe<WpNode>;
  /** A order object */
  WP_order?: Maybe<WpOrder>;
  /** A order object */
  WP_orderBy?: Maybe<WpOrder>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_orders?: Maybe<WpRootQueryToOrderConnection>;
  /** A 0bject */
  WP_paHind?: Maybe<WpPaHind>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paHinds?: Maybe<WpRootQueryToPaHindConnection>;
  /** A 0bject */
  WP_paHulk?: Maybe<WpPaHulk>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paHulks?: Maybe<WpRootQueryToPaHulkConnection>;
  /** A 0bject */
  WP_paKasutusaeg?: Maybe<WpPaKasutusaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKasutusaegs?: Maybe<WpRootQueryToPaKasutusaegConnection>;
  /** A 0bject */
  WP_paKogus?: Maybe<WpPaKogus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKoguses?: Maybe<WpRootQueryToPaKogusConnection>;
  /** A 0bject */
  WP_paKontuur?: Maybe<WpPaKontuur>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKontuurs?: Maybe<WpRootQueryToPaKontuurConnection>;
  /** A 0bject */
  WP_paKoostisained?: Maybe<WpPaKoostisained>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKoostisaineds?: Maybe<WpRootQueryToPaKoostisainedConnection>;
  /** A 0bject */
  WP_paLaadimisaeg?: Maybe<WpPaLaadimisaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paLaadimisaegs?: Maybe<WpRootQueryToPaLaadimisaegConnection>;
  /** A 0bject */
  WP_paMaterjal?: Maybe<WpPaMaterjal>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paMaterjals?: Maybe<WpRootQueryToPaMaterjalConnection>;
  /** A 0bject */
  WP_paMuratasa?: Maybe<WpPaMuratasa>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paMuratasas?: Maybe<WpRootQueryToPaMuratasaConnection>;
  /** A 0bject */
  WP_paOhutus?: Maybe<WpPaOhutus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paOhutuses?: Maybe<WpRootQueryToPaOhutusConnection>;
  /** A 0bject */
  WP_paPatareid?: Maybe<WpPaPatareid>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paPatareids?: Maybe<WpRootQueryToPaPatareidConnection>;
  /** A 0bject */
  WP_paSuurus?: Maybe<WpPaSuurus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paSuuruses?: Maybe<WpRootQueryToPaSuurusConnection>;
  /** A 0bject */
  WP_paVariant?: Maybe<WpPaVariant>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVariants?: Maybe<WpRootQueryToPaVariantConnection>;
  /** A 0bject */
  WP_paVarv?: Maybe<WpPaVarv>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVarvs?: Maybe<WpRootQueryToPaVarvConnection>;
  /** A 0bject */
  WP_paVeekindlus?: Maybe<WpPaVeekindlus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVeekindluses?: Maybe<WpRootQueryToPaVeekindlusConnection>;
  /** A 0bject */
  WP_page?: Maybe<WpPage>;
  /** A page object */
  WP_pageBy?: Maybe<WpPage>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_pages?: Maybe<WpRootQueryToPageConnection>;
  /** A WordPress plugin */
  WP_plugin?: Maybe<WpPlugin>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_plugins?: Maybe<WpRootQueryToPluginConnection>;
  /** A 0bject */
  WP_post?: Maybe<WpPost>;
  /** A post object */
  WP_postBy?: Maybe<WpPost>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_posts?: Maybe<WpRootQueryToPostConnection>;
  /** A product object */
  WP_product?: Maybe<WpProduct>;
  /** A product object */
  WP_productBy?: Maybe<WpProduct>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productCategories?: Maybe<WpRootQueryToProductCategoryConnection>;
  /** A 0bject */
  WP_productCategory?: Maybe<WpProductCategory>;
  /** A 0bject */
  WP_productTag?: Maybe<WpProductTag>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productTags?: Maybe<WpRootQueryToProductTagConnection>;
  /** A 0bject */
  WP_productType?: Maybe<WpProductType>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productTypes?: Maybe<WpRootQueryToProductTypeConnection>;
  /** A product variation object */
  WP_productVariation?: Maybe<WpProductVariation>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_products?: Maybe<WpRootQueryToProductConnection>;

  WP_readingSettings?: Maybe<WpReadingSettings>;
  /** A refund object */
  WP_refund?: Maybe<WpRefund>;
  /** A refund object */
  WP_refundBy?: Maybe<WpRefund>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_refunds?: Maybe<WpRootQueryToRefundConnection>;
  /** A 0bject */
  WP_revision?: Maybe<WpRevision>;
  /** A revision object */
  WP_revisionBy?: Maybe<WpRevision>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_revisions?: Maybe<WpRootQueryToRevisionConnection>;
  /** A 0bject */
  WP_shippingClass?: Maybe<WpShippingClass>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_shippingClasses?: Maybe<WpRootQueryToShippingClassConnection>;
  /** A shipping method object */
  WP_shippingMethod?: Maybe<WpShippingMethod>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_shippingMethods?: Maybe<WpRootQueryToShippingMethodConnection>;
  /** A 0bject */
  WP_tag?: Maybe<WpTag>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_tags?: Maybe<WpRootQueryToTagConnection>;
  /** A tax rate object */
  WP_taxRate?: Maybe<WpTaxRate>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_taxRates?: Maybe<WpRootQueryToTaxRateConnection>;
  /** A Theme object */
  WP_theme?: Maybe<WpTheme>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_themes?: Maybe<WpRootQueryToThemeConnection>;
  /** Returns a user */
  WP_user?: Maybe<WpUser>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_userRoles?: Maybe<WpRootQueryToUserRoleConnection>;
  /** Returns a user role */
  WP_userRole?: Maybe<WpUserRole>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_users?: Maybe<WpRootQueryToUserConnection>;
  /** Returns the current user */
  WP_viewer?: Maybe<WpUser>;
  /** A 0bject */
  WP_visibleProduct?: Maybe<WpVisibleProduct>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_visibleProducts?: Maybe<WpRootQueryToVisibleProductConnection>;

  WP_writingSettings?: Maybe<WpWritingSettings>;
}

/** All of the registered settings */
export interface WpSettings {
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

/** The cart object */
export interface WpCart {
  /** Connection between the Cart type and the Cart type */
  appliedCoupons?: Maybe<WpCartToCouponConnection>;
  /** Connection between the Cart type and the Cart type */
  contents?: Maybe<WpCartToCartItemConnection>;
  /** Cart contents tax */
  contentsTax?: Maybe<number>;
  /** Cart contents total */
  contentsTotal?: Maybe<number>;
  /** Cart discount tax */
  discountTax?: Maybe<number>;
  /** Cart discount total */
  discountTotal?: Maybe<number>;
  /** Do display prices include taxes */
  displayPricesIncludeTax?: Maybe<boolean>;
  /** Additional fees on the cart. */
  fees?: Maybe<(Maybe<WpCartFee>)[]>;
  /** Cart fee tax */
  feeTax?: Maybe<number>;
  /** Cart fee total */
  feeTotal?: Maybe<number>;
  /** Is cart empty */
  isEmpty?: Maybe<boolean>;
  /** Is customer shipping address needed */
  needsShippingAddress?: Maybe<boolean>;
  /** Cart shipping tax */
  shippingTax?: Maybe<number>;
  /** Cart shipping total */
  shippingTotal?: Maybe<number>;
  /** Cart subtotal */
  subtotal?: Maybe<number>;
  /** Cart subtotal tax */
  subtotalTax?: Maybe<number>;
  /** Cart total after calculation */
  total?: Maybe<number>;
  /** Cart total tax amount */
  totalTax?: Maybe<number>;
}

/** Connection between the Cart type and the Cart type */
export interface WpCartToCouponConnection {
  /** Edges for the CartToCouponConnection connection */
  edges?: Maybe<(Maybe<WpCartToCouponConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCoupon>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCartToCouponConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCoupon>;
}

/** A coupon object */
export interface WpCoupon extends WpNode {
  /** Amount off provided by the coupon */
  amount?: Maybe<number>;
  /** Coupon code */
  code?: Maybe<string>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  couponId?: Maybe<number>;
  /** Date coupon created */
  date?: Maybe<string>;
  /** Date coupon expires */
  dateExpiry?: Maybe<string>;
  /** Explanation of what the coupon does */
  description?: Maybe<string>;
  /** Type of discount */
  discountType?: Maybe<WpDiscountTypeEnum>;
  /** Only customers with a matching email address can use the coupon */
  emailRestrictions?: Maybe<(Maybe<string>)[]>;
  /** Connection between the Coupon type and the Coupon type */
  excludedProductCategories?: Maybe<WpCouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Coupon type */
  excludedProducts?: Maybe<WpCouponToProductConnection>;
  /** Excluding sale items mean this coupon cannot be used on items that are on sale (or carts that contain on sale items) */
  excludeSaleItems?: Maybe<boolean>;
  /** Does this coupon grant free shipping? */
  freeShipping?: Maybe<boolean>;
  /** The globally unique identifier for the coupon */
  id: string;
  /** Individual use means this coupon cannot be used in conjunction with other coupons */
  individualUse?: Maybe<boolean>;
  /** The number of products in your cart this coupon can apply to (for product discounts) */
  limitUsageToXItems?: Maybe<number>;
  /** Maximum spend amount that must be met before this coupon can be used */
  maximumAmount?: Maybe<number>;
  /** Minimum spend amount that must be met before this coupon can be used */
  minimumAmount?: Maybe<number>;
  /** Date coupon modified */
  modified?: Maybe<string>;
  /** Connection between the Coupon type and the Coupon type */
  productCategories?: Maybe<WpCouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Coupon type */
  products?: Maybe<WpCouponToProductConnection>;
  /** How many times the coupon has been used */
  usageCount?: Maybe<number>;
  /** Amount of times this coupon can be used globally */
  usageLimit?: Maybe<number>;
  /** Amount of times this coupon can be used by a customer */
  usageLimitPerUser?: Maybe<number>;
  /** Connection between the Coupon type and the Coupon type */
  usedBy?: Maybe<WpCouponToCustomerConnection>;
}

/** Connection between the Coupon type and the Coupon type */
export interface WpCouponToProductCategoryConnection {
  /** Edges for the CouponToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<WpCouponToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpCouponToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductCategory>;
}

/** The productCategory type */
export interface WpProductCategory extends WpNode {
  /** The ancestors of the object */
  ancestors?: Maybe<(Maybe<WpProductCategory>)[]>;
  /** Connection between the productCategory type and the productCategory type */
  children?: Maybe<WpProductCategoryToProductCategoryConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the product_cat */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The parent object */
  parent?: Maybe<WpProductCategory>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productCategoryId?: Maybe<number>;
  /** Connection between the ProductCategory type and the ProductCategory type */
  products?: Maybe<WpProductCategoryToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the productCategory type and the productCategory type */
export interface WpProductCategoryToProductCategoryConnection {
  /** Edges for the ProductCategoryToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<WpProductCategoryToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpProductCategoryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductCategory>;
}

/** Information about pagination in a connection. */
export interface WpWpPageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<string>;
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<string>;
}

/** A taxonomy object */
export interface WpTaxonomy extends WpNode {
  /** A list of Post Types associated with the taxonomy */
  connectedPostTypeNames?: Maybe<(Maybe<string>)[]>;
  /** List of Post Types connected to the Taxonomy */
  connectedPostTypes?: Maybe<(Maybe<WpPostType>)[]>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<string>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<string>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<string>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<boolean>;

  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<string>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<string>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<boolean>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<string>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<string>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<boolean>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<boolean>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<boolean>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<boolean>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<boolean>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<boolean>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<boolean>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<boolean>;
}

/** An Post Type object */
export interface WpPostType extends WpNode {
  /** Whether this content type should can be exported. */
  canExport?: Maybe<boolean>;
  /** List of Taxonomies connected to the Post Type */
  connectedTaxonomies?: Maybe<(Maybe<WpTaxonomy>)[]>;
  /** A list of Taxonomies associated with the post type */
  connectedTaxonomyNames?: Maybe<(Maybe<string>)[]>;
  /** Whether delete this type of content when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<boolean>;
  /** Description of the content type. */
  description?: Maybe<string>;
  /** Whether to exclude posts with this post type from front end search results. */
  excludeFromSearch?: Maybe<boolean>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<string>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<string>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<boolean>;
  /** Whether the post type is hierarchical, for example pages. */
  hierarchical?: Maybe<boolean>;

  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Display name of the content type. */
  label?: Maybe<string>;
  /** Details about the post type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<string>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<number>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<string>;
  /** Whether a post type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<boolean>;
  /** Whether queries can be performed on the front end for the post type as part of parse_request(). */
  publiclyQueryable?: Maybe<boolean>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<string>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<string>;
  /** Makes this post type available via the admin bar. */
  showInAdminBar?: Maybe<boolean>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<boolean>;
  /** Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<boolean>;
  /** Makes this post type available for selection in navigation menus. */
  showInNavMenus?: Maybe<boolean>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<boolean>;
  /** Whether to generate and allow a UI for managing this post type in the admin. */
  showUi?: Maybe<boolean>;
}

/** Details for labels of the PostType */
export interface WpPostTypeLabelDetails {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<string>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<string>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<string>;
  /** Label for archives in nav menus */
  archives?: Maybe<string>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<string>;
  /** Label for editing a singular item. */
  editItem?: Maybe<string>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<string>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<string>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<string>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<string>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<string>;
  /** Label for the menu name. */
  menuName?: Maybe<string>;
  /** General name for the post type, usually plural. */
  name?: Maybe<string>;
  /** Label for the new item page title. */
  newItem?: Maybe<string>;
  /** Label used when no items are found. */
  notFound?: Maybe<string>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<string>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<string>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<string>;
  /** Label for searching plural items. */
  searchItems?: Maybe<string>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<string>;
  /** Name for one object of this post type. */
  singularName?: Maybe<string>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<string>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<string>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<string>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<string>;
}

/** Connection between the ProductCategory type and the ProductCategory type */
export interface WpProductCategoryToProductConnection {
  /** Edges for the ProductCategoryToProductConnection connection */
  edges?: Maybe<(Maybe<WpProductCategoryToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductCategoryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** A product object */
export interface WpProduct extends WpNode {
  /** Connection between the Product type and the Product type */
  attributes?: Maybe<WpProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<number>;
  /** Product backorders status */
  backorders?: Maybe<WpBackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<boolean>;
  /** External product Buy button text */
  buttonText?: Maybe<string>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<WpCatalogVisibilityEnum>;
  /** Connection between the Product type and the Product type */
  categories?: Maybe<WpProductToProductCategoryConnection>;
  /** Connection between the Product type and the Product type */
  crossSell?: Maybe<WpProductToProductConnection>;
  /** Date product created */
  date?: Maybe<string>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<string>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<string>;
  /** Connection between the Product type and the Product type */
  defaultAttributes?: Maybe<WpProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<string>;
  /** Is downloadable? */
  downloadable?: Maybe<boolean>;
  /** Download expiry */
  downloadExpiry?: Maybe<number>;
  /** Download limit */
  downloadLimit?: Maybe<number>;
  /** Product downloads */
  downloads?: Maybe<(Maybe<WpProductDownload>)[]>;
  /** External product url */
  externalUrl?: Maybe<string>;
  /** If the product is featured */
  featured?: Maybe<boolean>;
  /** Connection between the Product type and the Product type */
  galleryImages?: Maybe<WpProductToMediaItemConnection>;
  /** Connection between the Product type and the Product type */
  grouped?: Maybe<WpProductToProductConnection>;
  /** Product&#039;s height */
  height?: Maybe<string>;
  /** The globally unique identifier for the product */
  id: string;
  /** Main image */
  image?: Maybe<WpMediaItem>;
  /** Product&#039;s length */
  length?: Maybe<string>;
  /** If product manage stock */
  manageStock?: Maybe<boolean>;
  /** Menu order */
  menuOrder?: Maybe<number>;
  /** Date product last updated */
  modified?: Maybe<string>;
  /** Product name */
  name?: Maybe<string>;
  /** Is product on sale? */
  onSale?: Maybe<boolean>;
  /** Parent product */
  parent?: Maybe<WpProduct>;
  /** Product&#039;s active price */
  price?: Maybe<string>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  productId?: Maybe<number>;
  /** Can product be purchased? */
  purchasable?: Maybe<boolean>;
  /** Purchase note */
  purchaseNote?: Maybe<string>;
  /** Product rating counts */
  ratingCount?: Maybe<WpRatingCounter>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<string>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<WpProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<number>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<boolean>;
  /** Product&#039;s sale price */
  salePrice?: Maybe<string>;
  /** shipping class ID */
  shippingClassId?: Maybe<number>;
  /** Does product need to be shipped? */
  shippingRequired?: Maybe<boolean>;
  /** Is product shipping taxable? */
  shippingTaxable?: Maybe<boolean>;
  /** Product short description */
  shortDescription?: Maybe<string>;
  /** Product SKU */
  sku?: Maybe<string>;
  /** Product slug */
  slug?: Maybe<string>;
  /** If should be sold individually */
  soldIndividually?: Maybe<boolean>;
  /** Product status */
  status?: Maybe<string>;
  /** Number of items available for sale */
  stockQuantity?: Maybe<number>;
  /** Product stock status */
  stockStatus?: Maybe<WpStockStatusEnum>;
  /** Connection between the Product type and the Product type */
  tags?: Maybe<WpProductToProductTagConnection>;
  /** Tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<WpTaxStatusEnum>;
  /** Number total of sales */
  totalSales?: Maybe<number>;
  /** Product type */
  type?: Maybe<WpProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<WpProductToProductConnection>;
  /** Connection between the Product type and the Product type */
  variations?: Maybe<WpProductToProductVariationConnection>;
  /** Is product virtual? */
  virtual?: Maybe<boolean>;
  /** Product&#039;s weight */
  weight?: Maybe<string>;
  /** Product&#039;s width */
  width?: Maybe<string>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToProductAttributeConnection {
  /** Edges for the ProductToProductAttributeConnection connection */
  edges?: Maybe<(Maybe<WpProductToProductAttributeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductToProductAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductAttribute>;
}

/** A product attribute object */
export interface WpProductAttribute {
  /** Attribute ID */
  attributeId: number;
  /** Attribute name */
  name: string;
  /** Attribute options */
  options?: Maybe<(Maybe<string>)[]>;
  /** Attribute position */
  position: number;
  /** Is attribute on product variation */
  variation: boolean;
  /** Is attribute visible */
  visible: boolean;
}

/** Connection between the Product type and the Product type */
export interface WpProductToProductCategoryConnection {
  /** Edges for the ProductToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<WpProductToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpProductToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductCategory>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToProductConnection {
  /** Edges for the ProductToProductConnection connection */
  edges?: Maybe<(Maybe<WpProductToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToVariationAttributeConnection {
  /** Edges for the ProductToVariationAttributeConnection connection */
  edges?: Maybe<(Maybe<WpProductToVariationAttributeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpVariationAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpVariationAttribute>;
}

/** A product variation attribute object */
export interface WpVariationAttribute {
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  id?: Maybe<number>;
  /** Name of attribute */
  name?: Maybe<string>;
  /** Selected value of attribute */
  value?: Maybe<string>;
}

/** A product object */
export interface WpProductDownload {
  /** Is file allowed */
  allowedFileType?: Maybe<boolean>;
  /** Product download ID */
  downloadId: number;
  /** Download file */
  file?: Maybe<string>;
  /** Validate file exists */
  fileExists?: Maybe<boolean>;
  /** File extension */
  fileExt?: Maybe<string>;
  /** Type of file path set */
  filePathType?: Maybe<string>;
  /** File type */
  fileType?: Maybe<string>;
  /** Product download name */
  name?: Maybe<string>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToMediaItemConnection {
  /** Edges for the ProductToMediaItemConnection connection */
  edges?: Maybe<(Maybe<WpProductToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpProductToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMediaItem>;
}

/** The mediaItem type */
export interface WpMediaItem extends WpNode {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<string>;
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<WpPostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpUser>;
  /** The caption for the resource */
  caption?: Maybe<string>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the mediaItem type and the mediaItem type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<string>;
  /** The content of the post. */
  content?: Maybe<string>;
  /** Post publishing date. */
  date?: Maybe<string>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<string>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<string>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<string>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpUser>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<WpEditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<string>;
  /** The globally unique ID for the object */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The permalink of the post */
  link?: Maybe<string>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Type of resource */
  mediaType?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  mediaItemId: number;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<string>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<string>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<string>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpPostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<string>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Terms connected to the mediaItem */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the mediaItem */
  terms?: Maybe<(Maybe<WpTermObjectUnion>)[]>;
  /** Terms connected to the mediaItem */
  termSlugs?: Maybe<(Maybe<string>)[]>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
  /** URI path for the resource */
  uri?: Maybe<string>;
}

/** The post type */
export interface WpPost extends WpNode {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<WpPostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpUser>;
  /** Connection between the post type and the post type */
  categories?: Maybe<WpPostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the post type and the post type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<string>;
  /** The content of the post. */
  content?: Maybe<string>;
  /** Post publishing date. */
  date?: Maybe<string>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<string>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<string>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpUser>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<WpEditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The featured image for the object */
  featuredImage?: Maybe<WpMediaItem>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<string>;
  /** The globally unique ID for the object */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The permalink of the post */
  link?: Maybe<string>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<string>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<string>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpPostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  postId: number;
  /** Connection between the post type and the post type */
  revisions?: Maybe<WpPostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Connection between the post type and the post type */
  tags?: Maybe<WpPostToTagConnection>;
  /** Terms connected to the post */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the post */
  terms?: Maybe<(Maybe<WpTermObjectUnion>)[]>;
  /** Terms connected to the post */
  termSlugs?: Maybe<(Maybe<string>)[]>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
  /** URI path for the resource */
  uri?: Maybe<string>;
}

/** A User object */
export interface WpUser extends WpNode {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** This field is the id of the user. The id of the user matches WP_User-&gt;ID field and the value in the ID column for the &quot;users&quot; table in SQL. */
  capabilities?: Maybe<(Maybe<string>)[]>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<string>;
  /** Connection between the User type and the User type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Description of the user. */
  description?: Maybe<string>;
  /** Email of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<string>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<(Maybe<string>)[]>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<string>;
  /** The globally unique identifier for the user */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<string>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<string>;
  /** Connection between the User type and the User type */
  mediaItems?: Maybe<WpUserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<string>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<string>;
  /** Nickname of the user. */
  nickname?: Maybe<string>;
  /** Connection between the User type and the User type */
  pages?: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the User type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<string>;
  /** Connection between the User type and the User type */
  revisions?: Maybe<WpUserToRevisionConnection>;
  /** Connection between the User type and the User type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<string>;
  /** A website url that is associated with the user. */
  url?: Maybe<string>;
  /** The Id of the user. Equivalent to WP_User-&gt;ID */
  userId?: Maybe<number>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<string>;
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export interface WpAvatar {
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<string>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<string>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<boolean>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<boolean>;
  /** Height of the avatar image. */
  height?: Maybe<number>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<string>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<string>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<number>;
  /** URL for the gravatar image source. */
  url?: Maybe<string>;
  /** Width of the avatar image. */
  width?: Maybe<number>;
}

/** Connection between the User type and the User type */
export interface WpUserToCommentConnection {
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<(Maybe<WpUserToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpUserToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** A Comment object */
export interface WpComment extends WpNode {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<string>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  approved?: Maybe<boolean>;
  /** The author of the comment */
  author?: Maybe<WpCommentAuthorUnion>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<string>;
  /** Connection between the Comment type and the Comment type */
  children?: Maybe<WpCommentToCommentConnection>;
  /** The object the comment was added to */
  commentedOn?: Maybe<WpPostObjectUnion>;
  /** ID for the comment, unique among comments. */
  commentId?: Maybe<number>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<string>;
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<string>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<string>;
  /** The globally unique identifier for the user */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<number>;
  /** Parent comment of current comment. This field is equivalent to the WP_Comment instance matching the WP_Comment-&gt;comment_parent ID. */
  parent?: Maybe<WpComment>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<string>;
}

/** A Comment Author object */
export interface WpCommentAuthor extends WpNode {
  /** The email for the comment author */
  email?: Maybe<string>;
  /** The globally unique identifier for the Comment Author user */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The name for the comment author. */
  name?: Maybe<string>;
  /** The url the comment author. */
  url?: Maybe<string>;
}

/** Connection between the Comment type and the Comment type */
export interface WpCommentToCommentConnection {
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<(Maybe<WpCommentToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCommentToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** Connection between the User type and the User type */
export interface WpUserToMediaItemConnection {
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<(Maybe<WpUserToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpUserToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMediaItem>;
}

/** Connection between the User type and the User type */
export interface WpUserToPageConnection {
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<(Maybe<WpUserToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPage>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpUserToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPage>;
}

/** The page type */
export interface WpPage extends WpNode {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<WpPostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpUser>;
  /** Connection between the page type and the page type */
  childPages?: Maybe<WpPageToPageConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the page type and the page type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<string>;
  /** The content of the post. */
  content?: Maybe<string>;
  /** Post publishing date. */
  date?: Maybe<string>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<string>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<string>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpUser>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<WpEditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The featured image for the object */
  featuredImage?: Maybe<WpMediaItem>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<string>;
  /** The globally unique ID for the object */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The permalink of the post */
  link?: Maybe<string>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<string>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  pageId: number;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpPostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** Connection between the page type and the page type */
  revisions?: Maybe<WpPageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Terms connected to the page */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the page */
  terms?: Maybe<(Maybe<WpTermObjectUnion>)[]>;
  /** Terms connected to the page */
  termSlugs?: Maybe<(Maybe<string>)[]>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
  /** URI path for the resource */
  uri?: Maybe<string>;
}

/** Connection between the page type and the page type */
export interface WpPageToPageConnection {
  /** Edges for the PageToPageConnection connection */
  edges?: Maybe<(Maybe<WpPageToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPage>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpPageToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPage>;
}

/** Connection between the page type and the page type */
export interface WpPageToCommentConnection {
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<(Maybe<WpPageToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPageToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** Info on whether the object is locked by another user editing it */
export interface WpEditLock {
  /** The time when the object was last edited */
  editTime?: Maybe<string>;
  /** The user that most recently edited the object */
  user?: Maybe<WpUser>;
}

/** Connection between the page type and the page type */
export interface WpPageToRevisionConnection {
  /** Edges for the PageToRevisionConnection connection */
  edges?: Maybe<(Maybe<WpPageToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRevision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpPageToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRevision>;
}

/** The revision type */
export interface WpRevision extends WpNode {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<WpPostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpUser>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<string>;
  /** The content of the post. */
  content?: Maybe<string>;
  /** Post publishing date. */
  date?: Maybe<string>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<string>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<string>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpUser>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<WpEditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<string>;
  /** The globally unique ID for the object */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The permalink of the post */
  link?: Maybe<string>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<number>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<string>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<string>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpPostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  revisionId: number;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Terms connected to the revision */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the revision */
  terms?: Maybe<(Maybe<WpTermObjectUnion>)[]>;
  /** Terms connected to the revision */
  termSlugs?: Maybe<(Maybe<string>)[]>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
  /** URI path for the resource */
  uri?: Maybe<string>;
}

/** The category type */
export interface WpCategory extends WpNode {
  /** The ancestors of the object */
  ancestors?: Maybe<(Maybe<WpCategory>)[]>;
  /** The id field matches the WP_Post-&gt;ID field. */
  categoryId?: Maybe<number>;
  /** Connection between the category type and the category type */
  children?: Maybe<WpCategoryToCategoryConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the category */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The parent object */
  parent?: Maybe<WpCategory>;
  /** Connection between the category type and the category type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the category type and the category type */
export interface WpCategoryToCategoryConnection {
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<(Maybe<WpCategoryToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpCategoryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCategory>;
}

/** Connection between the category type and the category type */
export interface WpCategoryToPostConnection {
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<(Maybe<WpCategoryToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPost>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpCategoryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPost>;
}

/** The tag type */
export interface WpTag extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the post_tag */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** Connection between the tag type and the tag type */
  posts?: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  tagId?: Maybe<number>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the tag type and the tag type */
export interface WpTagToPostConnection {
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<(Maybe<WpTagToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPost>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpTagToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPost>;
}

/** The productType type */
export interface WpProductType extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the product_type */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productTypeId?: Maybe<number>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** The visibleProduct type */
export interface WpVisibleProduct extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the product_visibility */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** The id field matches the WP_Post-&gt;ID field. */
  visibleProductId?: Maybe<number>;
}

/** The productTag type */
export interface WpProductTag extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the product_tag */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** Connection between the ProductTag type and the ProductTag type */
  products?: Maybe<WpProductTagToProductConnection>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productTagId?: Maybe<number>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the ProductTag type and the ProductTag type */
export interface WpProductTagToProductConnection {
  /** Edges for the ProductTagToProductConnection connection */
  edges?: Maybe<(Maybe<WpProductTagToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductTagToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** The shippingClass type */
export interface WpShippingClass extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the product_shipping_class */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  shippingClassId?: Maybe<number>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** The paHind type */
export interface WpPaHind extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_hind */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paHindId?: Maybe<number>;
  /** Connection between the PaHind type and the PaHind type */
  products?: Maybe<WpPaHindToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaHind type and the PaHind type */
  variations?: Maybe<WpPaHindToProductVariationConnection>;
}

/** Connection between the PaHind type and the PaHind type */
export interface WpPaHindToProductConnection {
  /** Edges for the PaHindToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaHindToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaHindToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaHind type and the PaHind type */
export interface WpPaHindToProductVariationConnection {
  /** Edges for the PaHindToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaHindToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaHindToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** A product variation object */
export interface WpProductVariation extends WpNode {
  /** Connection between the ProductVariation type and the ProductVariation type */
  attributes?: Maybe<WpProductVariationToVariationAttributeConnection>;
  /** Product variation backorders */
  backorders?: Maybe<WpBackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<boolean>;
  /** Product variation catalog visibility */
  catalogVisibility?: Maybe<WpCatalogVisibilityEnum>;
  /** Date variation created */
  date?: Maybe<string>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<string>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<string>;
  /** Product description */
  description?: Maybe<string>;
  /** Is downloadable? */
  downloadable?: Maybe<boolean>;
  /** Download expiry */
  downloadExpiry?: Maybe<number>;
  /** Download limit */
  downloadLimit?: Maybe<number>;
  /** Product downloads */
  downloads?: Maybe<(Maybe<WpProductDownload>)[]>;
  /** Does product variation have any visible attributes */
  hasAttributes?: Maybe<boolean>;
  /** Product variation height */
  height?: Maybe<string>;
  /** The globally unique identifier for the product variation */
  id: string;
  /** Product variation main image */
  image?: Maybe<WpMediaItem>;
  /** Product variation length */
  length?: Maybe<string>;
  /** if/how product variation stock is managed */
  manageStock?: Maybe<WpManageStockEnum>;
  /** Menu order */
  menuOrder?: Maybe<number>;
  /** Date variation last updated */
  modified?: Maybe<string>;
  /** Product name */
  name?: Maybe<string>;
  /** Is variation on sale? */
  onSale?: Maybe<boolean>;
  /** Product variation&#039;s active price */
  price?: Maybe<string>;
  /** If product variation can be bought */
  purchasable?: Maybe<boolean>;
  /** Product variation purchase_note */
  purchaseNote?: Maybe<string>;
  /** Product variation&#039;s regular price */
  regularPrice?: Maybe<string>;
  /** Product variation&#039;s sale price */
  salePrice?: Maybe<string>;
  /** Product variation shipping class */
  shippingClass?: Maybe<string>;
  /** Product variation SKU (Stock-keeping unit) */
  sku?: Maybe<string>;
  /** Variation status */
  status?: Maybe<string>;
  /** Product variation stock quantity */
  stockQuantity?: Maybe<number>;
  /** Product stock status */
  stockStatus?: Maybe<WpStockStatusEnum>;
  /** Product variation tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<WpTaxStatusEnum>;
  /** Product type */
  type?: Maybe<WpProductTypesEnum>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  variationId?: Maybe<number>;
  /** Is product virtual? */
  virtual?: Maybe<boolean>;
  /** Product variation weight */
  weight?: Maybe<string>;
  /** Product variation width */
  width?: Maybe<string>;
}

/** Connection between the ProductVariation type and the ProductVariation type */
export interface WpProductVariationToVariationAttributeConnection {
  /** Edges for the ProductVariationToVariationAttributeConnection connection */
  edges?: Maybe<
    (Maybe<WpProductVariationToVariationAttributeConnectionEdge>)[]
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpVariationAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductVariationToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpVariationAttribute>;
}

/** The paHulk type */
export interface WpPaHulk extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_hulk */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paHulkId?: Maybe<number>;
  /** Connection between the PaHulk type and the PaHulk type */
  products?: Maybe<WpPaHulkToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaHulk type and the PaHulk type */
  variations?: Maybe<WpPaHulkToProductVariationConnection>;
}

/** Connection between the PaHulk type and the PaHulk type */
export interface WpPaHulkToProductConnection {
  /** Edges for the PaHulkToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaHulkToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaHulkToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaHulk type and the PaHulk type */
export interface WpPaHulkToProductVariationConnection {
  /** Edges for the PaHulkToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaHulkToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaHulkToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paKasutusaeg type */
export interface WpPaKasutusaeg extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_kasutusaeg */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKasutusaegId?: Maybe<number>;
  /** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
  products?: Maybe<WpPaKasutusaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
  variations?: Maybe<WpPaKasutusaegToProductVariationConnection>;
}

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export interface WpPaKasutusaegToProductConnection {
  /** Edges for the PaKasutusaegToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaKasutusaegToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKasutusaegToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export interface WpPaKasutusaegToProductVariationConnection {
  /** Edges for the PaKasutusaegToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaKasutusaegToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKasutusaegToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paKogus type */
export interface WpPaKogus extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_kogus */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKogusId?: Maybe<number>;
  /** Connection between the PaKogus type and the PaKogus type */
  products?: Maybe<WpPaKogusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKogus type and the PaKogus type */
  variations?: Maybe<WpPaKogusToProductVariationConnection>;
}

/** Connection between the PaKogus type and the PaKogus type */
export interface WpPaKogusToProductConnection {
  /** Edges for the PaKogusToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaKogusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKogusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaKogus type and the PaKogus type */
export interface WpPaKogusToProductVariationConnection {
  /** Edges for the PaKogusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaKogusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKogusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paKontuur type */
export interface WpPaKontuur extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_kontuur */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKontuurId?: Maybe<number>;
  /** Connection between the PaKontuur type and the PaKontuur type */
  products?: Maybe<WpPaKontuurToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKontuur type and the PaKontuur type */
  variations?: Maybe<WpPaKontuurToProductVariationConnection>;
}

/** Connection between the PaKontuur type and the PaKontuur type */
export interface WpPaKontuurToProductConnection {
  /** Edges for the PaKontuurToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaKontuurToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKontuurToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaKontuur type and the PaKontuur type */
export interface WpPaKontuurToProductVariationConnection {
  /** Edges for the PaKontuurToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaKontuurToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKontuurToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paKoostisained type */
export interface WpPaKoostisained extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_koostisained */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKoostisainedId?: Maybe<number>;
  /** Connection between the PaKoostisained type and the PaKoostisained type */
  products?: Maybe<WpPaKoostisainedToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKoostisained type and the PaKoostisained type */
  variations?: Maybe<WpPaKoostisainedToProductVariationConnection>;
}

/** Connection between the PaKoostisained type and the PaKoostisained type */
export interface WpPaKoostisainedToProductConnection {
  /** Edges for the PaKoostisainedToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaKoostisainedToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKoostisainedToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaKoostisained type and the PaKoostisained type */
export interface WpPaKoostisainedToProductVariationConnection {
  /** Edges for the PaKoostisainedToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaKoostisainedToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaKoostisainedToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paLaadimisaeg type */
export interface WpPaLaadimisaeg extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_laadimisaeg */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paLaadimisaegId?: Maybe<number>;
  /** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
  products?: Maybe<WpPaLaadimisaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
  variations?: Maybe<WpPaLaadimisaegToProductVariationConnection>;
}

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export interface WpPaLaadimisaegToProductConnection {
  /** Edges for the PaLaadimisaegToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaLaadimisaegToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaLaadimisaegToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export interface WpPaLaadimisaegToProductVariationConnection {
  /** Edges for the PaLaadimisaegToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaLaadimisaegToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaLaadimisaegToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paMaterjal type */
export interface WpPaMaterjal extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_materjal */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paMaterjalId?: Maybe<number>;
  /** Connection between the PaMaterjal type and the PaMaterjal type */
  products?: Maybe<WpPaMaterjalToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaMaterjal type and the PaMaterjal type */
  variations?: Maybe<WpPaMaterjalToProductVariationConnection>;
}

/** Connection between the PaMaterjal type and the PaMaterjal type */
export interface WpPaMaterjalToProductConnection {
  /** Edges for the PaMaterjalToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaMaterjalToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaMaterjalToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaMaterjal type and the PaMaterjal type */
export interface WpPaMaterjalToProductVariationConnection {
  /** Edges for the PaMaterjalToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaMaterjalToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaMaterjalToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paMuratasa type */
export interface WpPaMuratasa extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_muratasa */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paMuratasaId?: Maybe<number>;
  /** Connection between the PaMuratasa type and the PaMuratasa type */
  products?: Maybe<WpPaMuratasaToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaMuratasa type and the PaMuratasa type */
  variations?: Maybe<WpPaMuratasaToProductVariationConnection>;
}

/** Connection between the PaMuratasa type and the PaMuratasa type */
export interface WpPaMuratasaToProductConnection {
  /** Edges for the PaMuratasaToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaMuratasaToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaMuratasaToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaMuratasa type and the PaMuratasa type */
export interface WpPaMuratasaToProductVariationConnection {
  /** Edges for the PaMuratasaToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaMuratasaToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaMuratasaToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paOhutus type */
export interface WpPaOhutus extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_ohutus */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paOhutusId?: Maybe<number>;
  /** Connection between the PaOhutus type and the PaOhutus type */
  products?: Maybe<WpPaOhutusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaOhutus type and the PaOhutus type */
  variations?: Maybe<WpPaOhutusToProductVariationConnection>;
}

/** Connection between the PaOhutus type and the PaOhutus type */
export interface WpPaOhutusToProductConnection {
  /** Edges for the PaOhutusToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaOhutusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaOhutusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaOhutus type and the PaOhutus type */
export interface WpPaOhutusToProductVariationConnection {
  /** Edges for the PaOhutusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaOhutusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaOhutusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paPatareid type */
export interface WpPaPatareid extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_patareid */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paPatareidId?: Maybe<number>;
  /** Connection between the PaPatareid type and the PaPatareid type */
  products?: Maybe<WpPaPatareidToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaPatareid type and the PaPatareid type */
  variations?: Maybe<WpPaPatareidToProductVariationConnection>;
}

/** Connection between the PaPatareid type and the PaPatareid type */
export interface WpPaPatareidToProductConnection {
  /** Edges for the PaPatareidToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaPatareidToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaPatareidToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaPatareid type and the PaPatareid type */
export interface WpPaPatareidToProductVariationConnection {
  /** Edges for the PaPatareidToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaPatareidToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaPatareidToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paSuurus type */
export interface WpPaSuurus extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_suurus */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paSuurusId?: Maybe<number>;
  /** Connection between the PaSuurus type and the PaSuurus type */
  products?: Maybe<WpPaSuurusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaSuurus type and the PaSuurus type */
  variations?: Maybe<WpPaSuurusToProductVariationConnection>;
}

/** Connection between the PaSuurus type and the PaSuurus type */
export interface WpPaSuurusToProductConnection {
  /** Edges for the PaSuurusToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaSuurusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaSuurusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaSuurus type and the PaSuurus type */
export interface WpPaSuurusToProductVariationConnection {
  /** Edges for the PaSuurusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaSuurusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaSuurusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paVariant type */
export interface WpPaVariant extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_variant */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVariantId?: Maybe<number>;
  /** Connection between the PaVariant type and the PaVariant type */
  products?: Maybe<WpPaVariantToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVariant type and the PaVariant type */
  variations?: Maybe<WpPaVariantToProductVariationConnection>;
}

/** Connection between the PaVariant type and the PaVariant type */
export interface WpPaVariantToProductConnection {
  /** Edges for the PaVariantToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaVariantToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVariantToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaVariant type and the PaVariant type */
export interface WpPaVariantToProductVariationConnection {
  /** Edges for the PaVariantToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaVariantToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVariantToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paVarv type */
export interface WpPaVarv extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_varv */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVarvId?: Maybe<number>;
  /** Connection between the PaVarv type and the PaVarv type */
  products?: Maybe<WpPaVarvToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVarv type and the PaVarv type */
  variations?: Maybe<WpPaVarvToProductVariationConnection>;
}

/** Connection between the PaVarv type and the PaVarv type */
export interface WpPaVarvToProductConnection {
  /** Edges for the PaVarvToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaVarvToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVarvToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaVarv type and the PaVarv type */
export interface WpPaVarvToProductVariationConnection {
  /** Edges for the PaVarvToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaVarvToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVarvToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** The paVeekindlus type */
export interface WpPaVeekindlus extends WpNode {
  /** The number of objects connected to the object */
  count?: Maybe<number>;
  /** The description of the object */
  description?: Maybe<string>;
  /** The global ID for the pa_veekindlus */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The link to the term */
  link?: Maybe<string>;
  /** The human friendly name of the object. */
  name?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVeekindlusId?: Maybe<number>;
  /** Connection between the PaVeekindlus type and the PaVeekindlus type */
  products?: Maybe<WpPaVeekindlusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<WpTaxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVeekindlus type and the PaVeekindlus type */
  variations?: Maybe<WpPaVeekindlusToProductVariationConnection>;
}

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export interface WpPaVeekindlusToProductConnection {
  /** Edges for the PaVeekindlusToProductConnection connection */
  edges?: Maybe<(Maybe<WpPaVeekindlusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVeekindlusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export interface WpPaVeekindlusToProductVariationConnection {
  /** Edges for the PaVeekindlusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpPaVeekindlusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPaVeekindlusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** Connection between the User type and the User type */
export interface WpUserToPostConnection {
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<(Maybe<WpUserToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPost>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpUserToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPost>;
}

/** Connection between the User type and the User type */
export interface WpUserToRevisionConnection {
  /** Edges for the UserToRevisionConnection connection */
  edges?: Maybe<(Maybe<WpUserToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRevision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpUserToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRevision>;
}

/** Connection between the User type and the User type */
export interface WpUserToUserRoleConnection {
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<(Maybe<WpUserToUserRoleConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpUserRole>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpUserToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpUserRole>;
}

/** A user role object */
export interface WpUserRole {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<(Maybe<string>)[]>;
  /** The globally unique identifier for the role */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** The UI friendly name of the role */
  name?: Maybe<string>;
}

/** Connection between the post type and the post type */
export interface WpPostToCategoryConnection {
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<(Maybe<WpPostToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpPostToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCategory>;
}

/** Connection between the post type and the post type */
export interface WpPostToCommentConnection {
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<(Maybe<WpPostToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpPostToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** Connection between the post type and the post type */
export interface WpPostToRevisionConnection {
  /** Edges for the PostToRevisionConnection connection */
  edges?: Maybe<(Maybe<WpPostToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRevision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpPostToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRevision>;
}

/** Connection between the post type and the post type */
export interface WpPostToTagConnection {
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<(Maybe<WpPostToTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpPostToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpTag>;
}

/** Connection between the mediaItem type and the mediaItem type */
export interface WpMediaItemToCommentConnection {
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<(Maybe<WpMediaItemToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpMediaItemToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** File details for a Media Item */
export interface WpMediaDetails {
  /** The height of the mediaItem */
  file?: Maybe<string>;
  /** The height of the mediaItem */
  height?: Maybe<number>;

  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<(Maybe<WpMediaSize>)[]>;
  /** The width of the mediaItem */
  width?: Maybe<number>;
}

/** Meta connected to a MediaItem */
export interface WpMediaItemMeta {
  aperture?: Maybe<number>;

  camera?: Maybe<string>;

  caption?: Maybe<string>;

  copyright?: Maybe<string>;

  createdTimestamp?: Maybe<number>;

  credit?: Maybe<string>;

  focalLength?: Maybe<number>;

  iso?: Maybe<number>;

  keywords?: Maybe<(Maybe<string>)[]>;

  orientation?: Maybe<string>;

  shutterSpeed?: Maybe<number>;

  title?: Maybe<string>;
}

/** Details of an available size for a media item */
export interface WpMediaSize {
  /** The file of the for the referenced size */
  file?: Maybe<string>;
  /** The height of the for the referenced size */
  height?: Maybe<string>;
  /** The mime type of the resource */
  mimeType?: Maybe<string>;
  /** The referenced size name */
  name?: Maybe<string>;
  /** The url of the for the referenced size */
  sourceUrl?: Maybe<string>;
  /** The width of the for the referenced size */
  width?: Maybe<string>;
}

/** A product rating counter */
export interface WpRatingCounter {
  /** Product&#039;s rating average */
  average?: Maybe<number>;
  /** Product&#039;s number of 5-star ratings */
  fiveStars?: Maybe<number>;
  /** Product&#039;s number of 4-star ratings */
  fourStars?: Maybe<number>;
  /** Product&#039;s number of 1-star ratings */
  oneStars?: Maybe<number>;
  /** Product&#039;s number of 3-star ratings */
  threeStars?: Maybe<number>;
  /** Product&#039;s number of 2-star ratings */
  twoStars?: Maybe<number>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToProductTagConnection {
  /** Edges for the ProductToProductTagConnection connection */
  edges?: Maybe<(Maybe<WpProductToProductTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpProductToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductTag>;
}

/** Connection between the Product type and the Product type */
export interface WpProductToProductVariationConnection {
  /** Edges for the ProductToProductVariationConnection connection */
  edges?: Maybe<(Maybe<WpProductToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpProductToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductVariation>;
}

/** Connection between the Coupon type and the Coupon type */
export interface WpCouponToProductConnection {
  /** Edges for the CouponToProductConnection connection */
  edges?: Maybe<(Maybe<WpCouponToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCouponToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** Connection between the Coupon type and the Coupon type */
export interface WpCouponToCustomerConnection {
  /** Edges for the CouponToCustomerConnection connection */
  edges?: Maybe<(Maybe<WpCouponToCustomerConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCustomer>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCouponToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCustomer>;
}

/** A customer object */
export interface WpCustomer extends WpNode {
  /** Return the date customer billing address properties */
  billing?: Maybe<WpCustomerAddress>;
  /** Has customer calculated shipping? */
  calculatedShipping?: Maybe<boolean>;
  /** The Id of the user. Equivalent to WP_User-&gt;ID */
  customerId?: Maybe<number>;
  /** Return the date customer was created */
  date?: Maybe<string>;
  /** Return the customer&#039;s display name. */
  displayName?: Maybe<string>;
  /** Return the customer&#039;s email. */
  email?: Maybe<string>;
  /** Return the customer&#039;s first name. */
  firstName?: Maybe<string>;
  /** Has calculated shipping? */
  hasCalculatedShipping?: Maybe<boolean>;
  /** The globally unique identifier for the customer */
  id: string;
  /** Return the date customer was last updated */
  isPayingCustomer?: Maybe<boolean>;
  /** Is customer VAT exempt? */
  isVatExempt?: Maybe<boolean>;
  /** Return the customer&#039;s last name. */
  lastName?: Maybe<string>;
  /** Gets the customers last order. */
  lastOrder?: Maybe<WpOrder>;
  /** Return the date customer was last updated */
  modified?: Maybe<string>;
  /** Return the number of orders this customer has. */
  orderCount?: Maybe<number>;
  /** Connection between the Customer type and the Customer type */
  orders?: Maybe<WpCustomerToOrderConnection>;
  /** Connection between the Customer type and the Customer type */
  refunds?: Maybe<WpCustomerToRefundConnection>;
  /** Return the customer&#039;s user role. */
  role?: Maybe<string>;
  /** Return the date customer shipping address properties */
  shipping?: Maybe<WpCustomerAddress>;
  /** Return how much money this customer has spent. */
  totalSpent?: Maybe<number>;
  /** Return the customer&#039;s username. */
  username?: Maybe<string>;
}

/** A customer address object */
export interface WpCustomerAddress {
  /** Address 1 */
  address1?: Maybe<string>;
  /** Address 2 */
  address2?: Maybe<string>;
  /** City */
  city?: Maybe<string>;
  /** Company */
  company?: Maybe<string>;
  /** Country */
  country?: Maybe<WpCountriesEnum>;
  /** E-mail */
  email?: Maybe<string>;
  /** First name */
  firstName?: Maybe<string>;
  /** Last name */
  lastName?: Maybe<string>;
  /** Phone */
  phone?: Maybe<string>;
  /** Zip Postal Code */
  postcode?: Maybe<string>;
  /** State */
  state?: Maybe<string>;
}

/** A order object */
export interface WpOrder extends WpNode {
  /** Order billing properties */
  billing?: Maybe<WpCustomerAddress>;
  /** Cart hash */
  cartHash?: Maybe<string>;
  /** Cart tax amount */
  cartTax?: Maybe<number>;
  /** Connection between the Order type and the Order type */
  couponLines?: Maybe<WpOrderToCouponLineConnection>;
  /** How order was created */
  createdVia?: Maybe<string>;
  /** Order currency */
  currency?: Maybe<string>;
  /** Order customer */
  customer?: Maybe<WpCustomer>;
  /** Customer IP Address */
  customerIpAddress?: Maybe<string>;
  /** Customer note */
  customerNote?: Maybe<string>;
  /** Customer User Agent */
  customerUserAgent?: Maybe<string>;
  /** Date order was created */
  date?: Maybe<string>;
  /** Date order was completed */
  dateCompleted?: Maybe<string>;
  /** Date order was paid */
  datePaid?: Maybe<string>;
  /** Discount tax amount */
  discountTax?: Maybe<number>;
  /** Discount total amount */
  discountTotal?: Maybe<number>;
  /** Product downloads */
  downloadableItems?: Maybe<(Maybe<WpProductDownload>)[]>;
  /** Connection between the Order type and the Order type */
  feeLines?: Maybe<WpOrderToFeeLineConnection>;
  /** Order has a billing address? */
  hasBillingAddress?: Maybe<boolean>;
  /** If order contains a downloadable product */
  hasDownloadableItem?: Maybe<boolean>;
  /** Order has a shipping address? */
  hasShippingAddress?: Maybe<boolean>;
  /** The globally unique identifier for the order */
  id: string;
  /** Is product download is permitted */
  isDownloadPermitted?: Maybe<boolean>;
  /** Connection between the Order type and the Order type */
  lineItems?: Maybe<WpOrderToLineItemConnection>;
  /** Date order was last updated */
  modified?: Maybe<string>;
  /** If order needs payment */
  needsPayment?: Maybe<boolean>;
  /** If order needs processing before it can be completed */
  needsProcessing?: Maybe<boolean>;
  /** If order needs shipping address */
  needsShippingAddress?: Maybe<boolean>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  orderId?: Maybe<number>;
  /** Order key */
  orderKey?: Maybe<string>;
  /** Order number */
  orderNumber?: Maybe<string>;
  /** Order version */
  orderVersion?: Maybe<string>;
  /** Parent order */
  parent?: Maybe<WpOrder>;
  /** Payment method */
  paymentMethod?: Maybe<string>;
  /** Payment method title */
  paymentMethodTitle?: Maybe<string>;
  /** Prices include taxes? */
  pricesIncludeTax?: Maybe<boolean>;
  /** Connection between the Order type and the Order type */
  refunds?: Maybe<WpOrderToRefundConnection>;
  /** Order shipping properties */
  shipping?: Maybe<WpCustomerAddress>;
  /** Connection between the Order type and the Order type */
  shippingLines?: Maybe<WpOrderToShippingLineConnection>;
  /** Order customer */
  shippingAddressMapUrl?: Maybe<string>;
  /** Shipping tax amount */
  shippingTax?: Maybe<number>;
  /** Shipping total amount */
  shippingTotal?: Maybe<number>;
  /** Order status */
  status?: Maybe<WpOrderStatusEnum>;
  /** Order subtotal */
  subtotal?: Maybe<number>;
  /** Connection between the Order type and the Order type */
  taxLines?: Maybe<WpOrderToTaxLineConnection>;
  /** Order grand total */
  total?: Maybe<number>;
  /** Order taxes */
  totalTax?: Maybe<number>;
  /** Transaction ID */
  transactionId?: Maybe<string>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToCouponLineConnection {
  /** Edges for the OrderToCouponLineConnection connection */
  edges?: Maybe<(Maybe<WpOrderToCouponLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCouponLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToCouponLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCouponLine>;
}

/** a coupon line object */
export interface WpCouponLine {
  /** Line&#039;s Coupon code */
  code?: Maybe<string>;
  /** Line&#039;s Coupon */
  coupon?: Maybe<WpCoupon>;
  /** Line&#039;s Discount total */
  discount?: Maybe<string>;
  /** Line&#039;s Discount total tax */
  discountTax?: Maybe<string>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToFeeLineConnection {
  /** Edges for the OrderToFeeLineConnection connection */
  edges?: Maybe<(Maybe<WpOrderToFeeLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpFeeLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToFeeLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpFeeLine>;
}

/** a fee line object */
export interface WpFeeLine {
  /** Fee amount */
  amount?: Maybe<string>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** Fee name */
  name?: Maybe<string>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Line tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<(Maybe<WpOrderItemTax>)[]>;
  /** Tax status of fee */
  taxStatus?: Maybe<WpTaxStatusEnum>;
  /** Line total (after discounts) */
  total?: Maybe<string>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<string>;
}

/** Order item tax statement */
export interface WpOrderItemTax {
  /** Amount taxed */
  amount?: Maybe<number>;
  /** Subtotal */
  subtotal?: Maybe<number>;
  /** Tax line connected to this statement */
  taxLine?: Maybe<WpTaxLine>;
  /** Order item ID for tax line connected to this statement */
  taxLineId: number;
  /** Total */
  total?: Maybe<number>;
}

/** a tax line object */
export interface WpTaxLine {
  /** Is this a compound tax rate? */
  isCompound?: Maybe<boolean>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** Tax rate label */
  label?: Maybe<string>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Tax rate code/name */
  rateCode?: Maybe<string>;
  /** Tax line&#039;s shipping tax total */
  shippingTaxTotal?: Maybe<string>;
  /** Tax line&#039;s tax rate */
  taxRate?: Maybe<WpTaxRate>;
  /** Tax total (not including shipping taxes) */
  taxTotal?: Maybe<string>;
}

/** A Tax rate object */
export interface WpTaxRate extends WpNode {
  /** City name. */
  city?: Maybe<(Maybe<string>)[]>;
  /** Tax class. Default is standard. */
  class?: Maybe<WpTaxClassEnum>;
  /** Whether or not this is a compound rate. */
  compound?: Maybe<boolean>;
  /** Country ISO 3166 code. */
  country?: Maybe<string>;
  /** The globally unique identifier for the tax rate. */
  id: string;
  /** Tax rate name. */
  name?: Maybe<string>;
  /** Indicates the order that will appear in queries. */
  order?: Maybe<number>;
  /** Postcode/ZIP. */
  postcode?: Maybe<(Maybe<string>)[]>;
  /** Tax priority. */
  priority?: Maybe<number>;
  /** Tax rate. */
  rate?: Maybe<string>;
  /** The ID of the tax rate. */
  rateId?: Maybe<number>;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: Maybe<boolean>;
  /** State code. */
  state?: Maybe<string>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToLineItemConnection {
  /** Edges for the OrderToLineItemConnection connection */
  edges?: Maybe<(Maybe<WpOrderToLineItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpLineItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpLineItem>;
}

/** a line item object */
export interface WpLineItem {
  /** Line item&#039;s taxes */
  itemDownloads?: Maybe<(Maybe<WpProductDownload>)[]>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Line item&#039;s product object */
  product?: Maybe<WpProduct>;
  /** Line item&#039;s product ID */
  productId?: Maybe<number>;
  /** Line item&#039;s product quantity */
  quantity?: Maybe<number>;
  /** Line item&#039;s subtotal */
  subtotal?: Maybe<string>;
  /** Line item&#039;s subtotal tax */
  subtotalTax?: Maybe<string>;
  /** Line item&#039;s tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Line item&#039;s taxes */
  taxes?: Maybe<(Maybe<WpOrderItemTax>)[]>;
  /** Line item&#039;s taxes */
  taxStatus?: Maybe<WpTaxStatusEnum>;
  /** Line item&#039;s total */
  total?: Maybe<string>;
  /** Line item&#039;s total tax */
  totalTax?: Maybe<string>;
  /** Line item&#039;s product variation object */
  variation?: Maybe<WpProductVariation>;
  /** Line item&#039;s product variation ID */
  variationId?: Maybe<number>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToRefundConnection {
  /** Edges for the OrderToRefundConnection connection */
  edges?: Maybe<(Maybe<WpOrderToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRefund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRefund>;
}

/** A refund object */
export interface WpRefund extends WpNode {
  /** Refunded amount */
  amount?: Maybe<number>;
  /** The globally unique identifier for the refund */
  id: string;
  /** Connection between the Refund type and the Refund type */
  lineItems?: Maybe<WpRefundToLineItemConnection>;
  /** Reason for refund */
  reason?: Maybe<string>;
  /** User who completed the refund */
  refundedBy?: Maybe<WpUser>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  refundId?: Maybe<number>;
  /** A title for the new post type */
  title?: Maybe<string>;
}

/** Connection between the Refund type and the Refund type */
export interface WpRefundToLineItemConnection {
  /** Edges for the RefundToLineItemConnection connection */
  edges?: Maybe<(Maybe<WpRefundToLineItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpLineItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRefundToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpLineItem>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToShippingLineConnection {
  /** Edges for the OrderToShippingLineConnection connection */
  edges?: Maybe<(Maybe<WpOrderToShippingLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpShippingLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToShippingLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpShippingLine>;
}

/** a shipping line object */
export interface WpShippingLine {
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** Shipping Line&#039;s shipping method name */
  methodTitle?: Maybe<string>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Shipping Line&#039;s shipping method */
  shippingMethod?: Maybe<WpShippingMethod>;
  /** Line tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<(Maybe<WpOrderItemTax>)[]>;
  /** Line total (after discounts) */
  total?: Maybe<string>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<string>;
}

/** A shipping method object */
export interface WpShippingMethod extends WpNode {
  /** Shipping method description. */
  description?: Maybe<string>;
  /** The globally unique identifier for the tax rate. */
  id: string;
  /** The ID of the shipping method. */
  methodId: string;
  /** Shipping method title. */
  title?: Maybe<string>;
}

/** Connection between the Order type and the Order type */
export interface WpOrderToTaxLineConnection {
  /** Edges for the OrderToTaxLineConnection connection */
  edges?: Maybe<(Maybe<WpOrderToTaxLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpTaxLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpOrderToTaxLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpTaxLine>;
}

/** Connection between the Customer type and the Customer type */
export interface WpCustomerToOrderConnection {
  /** Edges for the CustomerToOrderConnection connection */
  edges?: Maybe<(Maybe<WpCustomerToOrderConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpOrder>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCustomerToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpOrder>;
}

/** Connection between the Customer type and the Customer type */
export interface WpCustomerToRefundConnection {
  /** Edges for the CustomerToRefundConnection connection */
  edges?: Maybe<(Maybe<WpCustomerToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRefund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCustomerToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRefund>;
}

/** Connection between the Cart type and the Cart type */
export interface WpCartToCartItemConnection {
  /** Edges for the CartToCartItemConnection connection */
  edges?: Maybe<(Maybe<WpCartToCartItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCartItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpCartToCartItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCartItem>;
}

/** A item in the cart */
export interface WpCartItem {
  /** CartItem ID */
  key: string;
  /** A product in the cart */
  product?: Maybe<WpProduct>;
  /** Quantity of the product */
  quantity?: Maybe<number>;
  /** Item&#039;s subtotal */
  subtotal?: Maybe<number>;
  /** Item&#039;s subtotal tax */
  subtotalTax?: Maybe<number>;
  /** Item&#039;s tax */
  tax?: Maybe<number>;
  /** Item&#039;s total */
  total?: Maybe<number>;
  /** Selected variation of the product */
  variation?: Maybe<WpProductVariation>;
}

/** An additional fee */
export interface WpCartFee {
  /** Fee amount */
  amount?: Maybe<number>;
  /** Fee ID */
  id: string;
  /** Fee name */
  name: string;
  /** Is fee taxable? */
  taxable?: Maybe<boolean>;
  /** Fee tax class */
  taxClass?: Maybe<WpTaxClassEnum>;
  /** Fee total */
  total?: Maybe<number>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToCategoryConnection {
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCategory>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToCommentConnection {
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpComment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpComment>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToCouponConnection {
  /** Edges for the RootQueryToCouponConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToCouponConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCoupon>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToCouponConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCoupon>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToCustomerConnection {
  /** Edges for the RootQueryToCustomerConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToCustomerConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpCustomer>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpCustomer>;
}

/** The discussion setting type */
export interface WpDiscussionSettings {
  /** Luba uute artiklite kommenteerimist */
  defaultCommentStatus?: Maybe<string>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  defaultPingStatus?: Maybe<string>;
}

/** The general setting type */
export interface WpGeneralSettings {
  /** Kõigi kuupäevade vorming. */
  dateFormat?: Maybe<string>;
  /** Veebisaidi alapealkiri. */
  description?: Maybe<string>;
  /** Seda aadressi kasutatakse saidi haldamisel, näiteks uue kasutaja teavitamiseks. */
  email?: Maybe<string>;
  /** WordPressi maakood. */
  language?: Maybe<string>;
  /** Nädala alguspäeva number. */
  startOfWeek?: Maybe<number>;
  /** Kõigi kellaaegade vorming. */
  timeFormat?: Maybe<string>;
  /** Linn samas ajavööndis. */
  timezone?: Maybe<string>;
  /** Saidi pealkiri. */
  title?: Maybe<string>;
  /** Veebilehe aadress. */
  url?: Maybe<string>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToMediaItemConnection {
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpRootQueryToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMediaItem>;
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface WpMenu {
  /** The number of items in the menu */
  count?: Maybe<number>;
  /** ID of the nav menu. */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Connection between the Menu type and the Menu type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** WP ID of the nav menu. */
  menuId?: Maybe<number>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<string>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<string>;
}

/** Connection between the Menu type and the Menu type */
export interface WpMenuToMenuItemConnection {
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<(Maybe<WpMenuToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpMenuToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMenuItem>;
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface WpMenuItem {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  /** The object connected to this menu item. */
  connectedObject?: Maybe<WpMenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<(Maybe<string>)[]>;
  /** Description of the menu item. */
  description?: Maybe<string>;
  /** Relay ID of the menu item. */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Label or title of the menu item. */
  label?: Maybe<string>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<string>;
  /** WP ID of the menu item. */
  menuItemId?: Maybe<number>;
  /** Target attribute for the menu item link. */
  target?: Maybe<string>;
  /** Title attribute for the menu item link */
  title?: Maybe<string>;
  /** URL or destination of the menu item. */
  url?: Maybe<string>;
}

/** Connection between the MenuItem type and the MenuItem type */
export interface WpMenuItemToMenuItemConnection {
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<(Maybe<WpMenuItemToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpMenuItemToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMenuItem>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToMenuItemConnection {
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMenuItem>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToMenuConnection {
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToMenuConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpMenu>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToMenuConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpMenu>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToOrderConnection {
  /** Edges for the RootQueryToOrderConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToOrderConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpOrder>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpOrder>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaHindConnection {
  /** Edges for the RootQueryToPaHindConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaHindConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaHind>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaHindConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaHind>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaHulkConnection {
  /** Edges for the RootQueryToPaHulkConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaHulkConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaHulk>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaHulkConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaHulk>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaKasutusaegConnection {
  /** Edges for the RootQueryToPaKasutusaegConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaKasutusaegConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaKasutusaeg>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaKasutusaegConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaKasutusaeg>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaKogusConnection {
  /** Edges for the RootQueryToPaKogusConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaKogusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaKogus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaKogusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaKogus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaKontuurConnection {
  /** Edges for the RootQueryToPaKontuurConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaKontuurConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaKontuur>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaKontuurConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaKontuur>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaKoostisainedConnection {
  /** Edges for the RootQueryToPaKoostisainedConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaKoostisainedConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaKoostisained>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaKoostisainedConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaKoostisained>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaLaadimisaegConnection {
  /** Edges for the RootQueryToPaLaadimisaegConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaLaadimisaegConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaLaadimisaeg>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaLaadimisaegConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaLaadimisaeg>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaMaterjalConnection {
  /** Edges for the RootQueryToPaMaterjalConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaMaterjalConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaMaterjal>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaMaterjalConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaMaterjal>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaMuratasaConnection {
  /** Edges for the RootQueryToPaMuratasaConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaMuratasaConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaMuratasa>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaMuratasaConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaMuratasa>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaOhutusConnection {
  /** Edges for the RootQueryToPaOhutusConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaOhutusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaOhutus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaOhutusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaOhutus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaPatareidConnection {
  /** Edges for the RootQueryToPaPatareidConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaPatareidConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaPatareid>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaPatareidConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaPatareid>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaSuurusConnection {
  /** Edges for the RootQueryToPaSuurusConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaSuurusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaSuurus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaSuurusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaSuurus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaVariantConnection {
  /** Edges for the RootQueryToPaVariantConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaVariantConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaVariant>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaVariantConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaVariant>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaVarvConnection {
  /** Edges for the RootQueryToPaVarvConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaVarvConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaVarv>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaVarvConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaVarv>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPaVeekindlusConnection {
  /** Edges for the RootQueryToPaVeekindlusConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPaVeekindlusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPaVeekindlus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToPaVeekindlusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPaVeekindlus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPageConnection {
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPage>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpRootQueryToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPage>;
}

/** An plugin object */
export interface WpPlugin extends WpNode {
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<string>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<string>;
  /** Description of the plugin. */
  description?: Maybe<string>;

  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Display name of the plugin. */
  name?: Maybe<string>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<string>;
  /** Current version of the plugin. */
  version?: Maybe<string>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPluginConnection {
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPluginConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPlugin>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToPluginConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPlugin>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToPostConnection {
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpPost>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpRootQueryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpPost>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToProductCategoryConnection {
  /** Edges for the RootQueryToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductCategory>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToProductTagConnection {
  /** Edges for the RootQueryToProductTagConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToProductTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductTag>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToProductTypeConnection {
  /** Edges for the RootQueryToProductTypeConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToProductTypeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProductType>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToProductTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProductType>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToProductConnection {
  /** Edges for the RootQueryToProductConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpProduct>;
}

/** The reading setting type */
export interface WpReadingSettings {
  /** lehekülge korraga. */
  postsPerPage?: Maybe<number>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToRefundConnection {
  /** Edges for the RootQueryToRefundConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRefund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRefund>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToRevisionConnection {
  /** Edges for the RootQueryToRevisionConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpRevision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<WpPostType>;
}

/** An edge in a connection */
export interface WpRootQueryToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpRevision>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToShippingClassConnection {
  /** Edges for the RootQueryToShippingClassConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToShippingClassConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpShippingClass>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToShippingClassConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpShippingClass>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToShippingMethodConnection {
  /** Edges for the RootQueryToShippingMethodConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToShippingMethodConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpShippingMethod>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToShippingMethodConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpShippingMethod>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToTagConnection {
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpTag>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToTaxRateConnection {
  /** Edges for the RootQueryToTaxRateConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToTaxRateConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpTaxRate>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToTaxRateConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpTaxRate>;
}

/** A theme object */
export interface WpTheme extends WpNode {
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<string>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<string>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<string>;

  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<string>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<string>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<string>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<(Maybe<string>)[]>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<string>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<number>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToThemeConnection {
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToThemeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpTheme>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToThemeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpTheme>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToUserRoleConnection {
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToUserRoleConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpUserRole>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpUserRole>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToUserConnection {
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToUserConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpUser>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
}

/** An edge in a connection */
export interface WpRootQueryToUserConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpUser>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface WpRootQueryToVisibleProductConnection {
  /** Edges for the RootQueryToVisibleProductConnection connection */
  edges?: Maybe<(Maybe<WpRootQueryToVisibleProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<WpVisibleProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpWpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<WpTaxonomy>;
}

/** An edge in a connection */
export interface WpRootQueryToVisibleProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<WpVisibleProduct>;
}

/** The writing setting type */
export interface WpWritingSettings {
  /** Vaikimisi rubriik. */
  defaultCategory?: Maybe<number>;
  /** Vaikimisi postitusevorming */
  defaultPostFormat?: Maybe<string>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  useSmilies?: Maybe<boolean>;
}

export interface Mutation {
  /** The payload for the UpdateCategory mutation */
  WP_updateCategory?: Maybe<WpUpdateCategoryPayload>;
  /** The payload for the UpdatePaHind mutation */
  WP_updatePaHind?: Maybe<WpUpdatePaHindPayload>;
  /** The payload for the UpdatePaHulk mutation */
  WP_updatePaHulk?: Maybe<WpUpdatePaHulkPayload>;
  /** The payload for the UpdatePaKasutusaeg mutation */
  WP_updatePaKasutusaeg?: Maybe<WpUpdatePaKasutusaegPayload>;
  /** The payload for the UpdatePaKogus mutation */
  WP_updatePaKogus?: Maybe<WpUpdatePaKogusPayload>;
  /** The payload for the UpdatePaKontuur mutation */
  WP_updatePaKontuur?: Maybe<WpUpdatePaKontuurPayload>;
  /** The payload for the UpdatePaKoostisained mutation */
  WP_updatePaKoostisained?: Maybe<WpUpdatePaKoostisainedPayload>;
  /** The payload for the UpdatePaLaadimisaeg mutation */
  WP_updatePaLaadimisaeg?: Maybe<WpUpdatePaLaadimisaegPayload>;
  /** The payload for the UpdatePaMaterjal mutation */
  WP_updatePaMaterjal?: Maybe<WpUpdatePaMaterjalPayload>;
  /** The payload for the UpdatePaMuratasa mutation */
  WP_updatePaMuratasa?: Maybe<WpUpdatePaMuratasaPayload>;
  /** The payload for the UpdatePaOhutus mutation */
  WP_updatePaOhutus?: Maybe<WpUpdatePaOhutusPayload>;
  /** The payload for the UpdatePaPatareid mutation */
  WP_updatePaPatareid?: Maybe<WpUpdatePaPatareidPayload>;
  /** The payload for the UpdatePaSuurus mutation */
  WP_updatePaSuurus?: Maybe<WpUpdatePaSuurusPayload>;
  /** The payload for the UpdatePaVariant mutation */
  WP_updatePaVariant?: Maybe<WpUpdatePaVariantPayload>;
  /** The payload for the UpdatePaVarv mutation */
  WP_updatePaVarv?: Maybe<WpUpdatePaVarvPayload>;
  /** The payload for the UpdatePaVeekindlus mutation */
  WP_updatePaVeekindlus?: Maybe<WpUpdatePaVeekindlusPayload>;
  /** The payload for the UpdateProductCategory mutation */
  WP_updateProductCategory?: Maybe<WpUpdateProductCategoryPayload>;
  /** The payload for the UpdateProductTag mutation */
  WP_updateProductTag?: Maybe<WpUpdateProductTagPayload>;
  /** The payload for the UpdateProductType mutation */
  WP_updateProductType?: Maybe<WpUpdateProductTypePayload>;
  /** The payload for the UpdateShippingClass mutation */
  WP_updateShippingClass?: Maybe<WpUpdateShippingClassPayload>;
  /** The payload for the UpdateTag mutation */
  WP_updateTag?: Maybe<WpUpdateTagPayload>;
  /** The payload for the UpdateVisibleProduct mutation */
  WP_updateVisibleProduct?: Maybe<WpUpdateVisibleProductPayload>;
  /** The payload for the addFee mutation */
  WP_addFee?: Maybe<WpAddFeePayload>;
  /** The payload for the addToCart mutation */
  WP_addToCart?: Maybe<WpAddToCartPayload>;
  /** The payload for the applyCoupon mutation */
  WP_applyCoupon?: Maybe<WpApplyCouponPayload>;
  /** The payload for the createCategory mutation */
  WP_createCategory?: Maybe<WpCreateCategoryPayload>;
  /** The payload for the createComment mutation */
  WP_createComment?: Maybe<WpCreateCommentPayload>;
  /** The payload for the createMediaItem mutation */
  WP_createMediaItem?: Maybe<WpCreateMediaItemPayload>;
  /** The payload for the createPaHind mutation */
  WP_createPaHind?: Maybe<WpCreatePaHindPayload>;
  /** The payload for the createPaHulk mutation */
  WP_createPaHulk?: Maybe<WpCreatePaHulkPayload>;
  /** The payload for the createPaKasutusaeg mutation */
  WP_createPaKasutusaeg?: Maybe<WpCreatePaKasutusaegPayload>;
  /** The payload for the createPaKogus mutation */
  WP_createPaKogus?: Maybe<WpCreatePaKogusPayload>;
  /** The payload for the createPaKontuur mutation */
  WP_createPaKontuur?: Maybe<WpCreatePaKontuurPayload>;
  /** The payload for the createPaKoostisained mutation */
  WP_createPaKoostisained?: Maybe<WpCreatePaKoostisainedPayload>;
  /** The payload for the createPaLaadimisaeg mutation */
  WP_createPaLaadimisaeg?: Maybe<WpCreatePaLaadimisaegPayload>;
  /** The payload for the createPaMaterjal mutation */
  WP_createPaMaterjal?: Maybe<WpCreatePaMaterjalPayload>;
  /** The payload for the createPaMuratasa mutation */
  WP_createPaMuratasa?: Maybe<WpCreatePaMuratasaPayload>;
  /** The payload for the createPaOhutus mutation */
  WP_createPaOhutus?: Maybe<WpCreatePaOhutusPayload>;
  /** The payload for the createPaPatareid mutation */
  WP_createPaPatareid?: Maybe<WpCreatePaPatareidPayload>;
  /** The payload for the createPaSuurus mutation */
  WP_createPaSuurus?: Maybe<WpCreatePaSuurusPayload>;
  /** The payload for the createPaVariant mutation */
  WP_createPaVariant?: Maybe<WpCreatePaVariantPayload>;
  /** The payload for the createPaVarv mutation */
  WP_createPaVarv?: Maybe<WpCreatePaVarvPayload>;
  /** The payload for the createPaVeekindlus mutation */
  WP_createPaVeekindlus?: Maybe<WpCreatePaVeekindlusPayload>;
  /** The payload for the createPage mutation */
  WP_createPage?: Maybe<WpCreatePagePayload>;
  /** The payload for the createPost mutation */
  WP_createPost?: Maybe<WpCreatePostPayload>;
  /** The payload for the createProductCategory mutation */
  WP_createProductCategory?: Maybe<WpCreateProductCategoryPayload>;
  /** The payload for the createProductTag mutation */
  WP_createProductTag?: Maybe<WpCreateProductTagPayload>;
  /** The payload for the createProductType mutation */
  WP_createProductType?: Maybe<WpCreateProductTypePayload>;
  /** The payload for the createShippingClass mutation */
  WP_createShippingClass?: Maybe<WpCreateShippingClassPayload>;
  /** The payload for the createTag mutation */
  WP_createTag?: Maybe<WpCreateTagPayload>;
  /** The payload for the createUser mutation */
  WP_createUser?: Maybe<WpCreateUserPayload>;
  /** The payload for the createVisibleProduct mutation */
  WP_createVisibleProduct?: Maybe<WpCreateVisibleProductPayload>;
  /** The payload for the deleteCategory mutation */
  WP_deleteCategory?: Maybe<WpDeleteCategoryPayload>;
  /** The payload for the deleteComment mutation */
  WP_deleteComment?: Maybe<WpDeleteCommentPayload>;
  /** The payload for the deleteMediaItem mutation */
  WP_deleteMediaItem?: Maybe<WpDeleteMediaItemPayload>;
  /** The payload for the deletePaHind mutation */
  WP_deletePaHind?: Maybe<WpDeletePaHindPayload>;
  /** The payload for the deletePaHulk mutation */
  WP_deletePaHulk?: Maybe<WpDeletePaHulkPayload>;
  /** The payload for the deletePaKasutusaeg mutation */
  WP_deletePaKasutusaeg?: Maybe<WpDeletePaKasutusaegPayload>;
  /** The payload for the deletePaKogus mutation */
  WP_deletePaKogus?: Maybe<WpDeletePaKogusPayload>;
  /** The payload for the deletePaKontuur mutation */
  WP_deletePaKontuur?: Maybe<WpDeletePaKontuurPayload>;
  /** The payload for the deletePaKoostisained mutation */
  WP_deletePaKoostisained?: Maybe<WpDeletePaKoostisainedPayload>;
  /** The payload for the deletePaLaadimisaeg mutation */
  WP_deletePaLaadimisaeg?: Maybe<WpDeletePaLaadimisaegPayload>;
  /** The payload for the deletePaMaterjal mutation */
  WP_deletePaMaterjal?: Maybe<WpDeletePaMaterjalPayload>;
  /** The payload for the deletePaMuratasa mutation */
  WP_deletePaMuratasa?: Maybe<WpDeletePaMuratasaPayload>;
  /** The payload for the deletePaOhutus mutation */
  WP_deletePaOhutus?: Maybe<WpDeletePaOhutusPayload>;
  /** The payload for the deletePaPatareid mutation */
  WP_deletePaPatareid?: Maybe<WpDeletePaPatareidPayload>;
  /** The payload for the deletePaSuurus mutation */
  WP_deletePaSuurus?: Maybe<WpDeletePaSuurusPayload>;
  /** The payload for the deletePaVariant mutation */
  WP_deletePaVariant?: Maybe<WpDeletePaVariantPayload>;
  /** The payload for the deletePaVarv mutation */
  WP_deletePaVarv?: Maybe<WpDeletePaVarvPayload>;
  /** The payload for the deletePaVeekindlus mutation */
  WP_deletePaVeekindlus?: Maybe<WpDeletePaVeekindlusPayload>;
  /** The payload for the deletePage mutation */
  WP_deletePage?: Maybe<WpDeletePagePayload>;
  /** The payload for the deletePost mutation */
  WP_deletePost?: Maybe<WpDeletePostPayload>;
  /** The payload for the deleteProductCategory mutation */
  WP_deleteProductCategory?: Maybe<WpDeleteProductCategoryPayload>;
  /** The payload for the deleteProductTag mutation */
  WP_deleteProductTag?: Maybe<WpDeleteProductTagPayload>;
  /** The payload for the deleteProductType mutation */
  WP_deleteProductType?: Maybe<WpDeleteProductTypePayload>;
  /** The payload for the deleteRevision mutation */
  WP_deleteRevision?: Maybe<WpDeleteRevisionPayload>;
  /** The payload for the deleteShippingClass mutation */
  WP_deleteShippingClass?: Maybe<WpDeleteShippingClassPayload>;
  /** The payload for the deleteTag mutation */
  WP_deleteTag?: Maybe<WpDeleteTagPayload>;
  /** The payload for the deleteUser mutation */
  WP_deleteUser?: Maybe<WpDeleteUserPayload>;
  /** The payload for the deleteVisibleProduct mutation */
  WP_deleteVisibleProduct?: Maybe<WpDeleteVisibleProductPayload>;
  /** The payload for the emptyCart mutation */
  WP_emptyCart?: Maybe<WpEmptyCartPayload>;

  WP_increaseCount?: Maybe<number>;
  /** The payload for the registerCustomer mutation */
  WP_registerCustomer?: Maybe<WpRegisterCustomerPayload>;
  /** The payload for the registerUser mutation */
  WP_registerUser?: Maybe<WpRegisterUserPayload>;
  /** The payload for the removeCoupons mutation */
  WP_removeCoupons?: Maybe<WpRemoveCouponsPayload>;
  /** The payload for the removeItemsFromCart mutation */
  WP_removeItemsFromCart?: Maybe<WpRemoveItemsFromCartPayload>;
  /** The payload for the resetUserPassword mutation */
  WP_resetUserPassword?: Maybe<WpResetUserPasswordPayload>;
  /** The payload for the restoreCartItems mutation */
  WP_restoreCartItems?: Maybe<WpRestoreCartItemsPayload>;
  /** The payload for the restoreComment mutation */
  WP_restoreComment?: Maybe<WpRestoreCommentPayload>;
  /** The payload for the sendPasswordResetEmail mutation */
  WP_sendPasswordResetEmail?: Maybe<WpSendPasswordResetEmailPayload>;
  /** The payload for the updateComment mutation */
  WP_updateComment?: Maybe<WpUpdateCommentPayload>;
  /** The payload for the updateCustomer mutation */
  WP_updateCustomer?: Maybe<WpUpdateCustomerPayload>;
  /** The payload for the updateItemQuantity mutation */
  WP_updateItemQuantity?: Maybe<WpUpdateItemQuantityPayload>;
  /** The payload for the updateMediaItem mutation */
  WP_updateMediaItem?: Maybe<WpUpdateMediaItemPayload>;
  /** The payload for the updatePage mutation */
  WP_updatePage?: Maybe<WpUpdatePagePayload>;
  /** The payload for the updatePost mutation */
  WP_updatePost?: Maybe<WpUpdatePostPayload>;
  /** The payload for the updateSettings mutation */
  WP_updateSettings?: Maybe<WpUpdateSettingsPayload>;
  /** The payload for the updateUser mutation */
  WP_updateUser?: Maybe<WpUpdateUserPayload>;
}

/** The payload for the UpdateCategory mutation */
export interface WpUpdateCategoryPayload {
  /** The created category */
  category?: Maybe<WpCategory>;

  clientMutationId: string;
}

/** The payload for the UpdatePaHind mutation */
export interface WpUpdatePaHindPayload {
  clientMutationId: string;
  /** The created pa_hind */
  paHind?: Maybe<WpPaHind>;
}

/** The payload for the UpdatePaHulk mutation */
export interface WpUpdatePaHulkPayload {
  clientMutationId: string;
  /** The created pa_hulk */
  paHulk?: Maybe<WpPaHulk>;
}

/** The payload for the UpdatePaKasutusaeg mutation */
export interface WpUpdatePaKasutusaegPayload {
  clientMutationId: string;
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<WpPaKasutusaeg>;
}

/** The payload for the UpdatePaKogus mutation */
export interface WpUpdatePaKogusPayload {
  clientMutationId: string;
  /** The created pa_kogus */
  paKogus?: Maybe<WpPaKogus>;
}

/** The payload for the UpdatePaKontuur mutation */
export interface WpUpdatePaKontuurPayload {
  clientMutationId: string;
  /** The created pa_kontuur */
  paKontuur?: Maybe<WpPaKontuur>;
}

/** The payload for the UpdatePaKoostisained mutation */
export interface WpUpdatePaKoostisainedPayload {
  clientMutationId: string;
  /** The created pa_koostisained */
  paKoostisained?: Maybe<WpPaKoostisained>;
}

/** The payload for the UpdatePaLaadimisaeg mutation */
export interface WpUpdatePaLaadimisaegPayload {
  clientMutationId: string;
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<WpPaLaadimisaeg>;
}

/** The payload for the UpdatePaMaterjal mutation */
export interface WpUpdatePaMaterjalPayload {
  clientMutationId: string;
  /** The created pa_materjal */
  paMaterjal?: Maybe<WpPaMaterjal>;
}

/** The payload for the UpdatePaMuratasa mutation */
export interface WpUpdatePaMuratasaPayload {
  clientMutationId: string;
  /** The created pa_muratasa */
  paMuratasa?: Maybe<WpPaMuratasa>;
}

/** The payload for the UpdatePaOhutus mutation */
export interface WpUpdatePaOhutusPayload {
  clientMutationId: string;
  /** The created pa_ohutus */
  paOhutus?: Maybe<WpPaOhutus>;
}

/** The payload for the UpdatePaPatareid mutation */
export interface WpUpdatePaPatareidPayload {
  clientMutationId: string;
  /** The created pa_patareid */
  paPatareid?: Maybe<WpPaPatareid>;
}

/** The payload for the UpdatePaSuurus mutation */
export interface WpUpdatePaSuurusPayload {
  clientMutationId: string;
  /** The created pa_suurus */
  paSuurus?: Maybe<WpPaSuurus>;
}

/** The payload for the UpdatePaVariant mutation */
export interface WpUpdatePaVariantPayload {
  clientMutationId: string;
  /** The created pa_variant */
  paVariant?: Maybe<WpPaVariant>;
}

/** The payload for the UpdatePaVarv mutation */
export interface WpUpdatePaVarvPayload {
  clientMutationId: string;
  /** The created pa_varv */
  paVarv?: Maybe<WpPaVarv>;
}

/** The payload for the UpdatePaVeekindlus mutation */
export interface WpUpdatePaVeekindlusPayload {
  clientMutationId: string;
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<WpPaVeekindlus>;
}

/** The payload for the UpdateProductCategory mutation */
export interface WpUpdateProductCategoryPayload {
  clientMutationId: string;
  /** The created product_cat */
  productCategory?: Maybe<WpProductCategory>;
}

/** The payload for the UpdateProductTag mutation */
export interface WpUpdateProductTagPayload {
  clientMutationId: string;
  /** The created product_tag */
  productTag?: Maybe<WpProductTag>;
}

/** The payload for the UpdateProductType mutation */
export interface WpUpdateProductTypePayload {
  clientMutationId: string;
  /** The created product_type */
  productType?: Maybe<WpProductType>;
}

/** The payload for the UpdateShippingClass mutation */
export interface WpUpdateShippingClassPayload {
  clientMutationId: string;
  /** The created product_shipping_class */
  shippingClass?: Maybe<WpShippingClass>;
}

/** The payload for the UpdateTag mutation */
export interface WpUpdateTagPayload {
  clientMutationId: string;
  /** The created post_tag */
  tag?: Maybe<WpTag>;
}

/** The payload for the UpdateVisibleProduct mutation */
export interface WpUpdateVisibleProductPayload {
  clientMutationId: string;
  /** The created product_visibility */
  visibleProduct?: Maybe<WpVisibleProduct>;
}

/** The payload for the addFee mutation */
export interface WpAddFeePayload {
  cartFee?: Maybe<WpCartFee>;

  clientMutationId: string;
}

/** The payload for the addToCart mutation */
export interface WpAddToCartPayload {
  cartItem?: Maybe<WpCartItem>;

  clientMutationId: string;
}

/** The payload for the applyCoupon mutation */
export interface WpApplyCouponPayload {
  cart?: Maybe<WpCart>;

  clientMutationId: string;
}

/** The payload for the createCategory mutation */
export interface WpCreateCategoryPayload {
  /** The created category */
  category?: Maybe<WpCategory>;

  clientMutationId: string;
}

/** The payload for the createComment mutation */
export interface WpCreateCommentPayload {
  clientMutationId: string;
  /** The comment that was created */
  comment?: Maybe<WpComment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<boolean>;
}

/** The payload for the createMediaItem mutation */
export interface WpCreateMediaItemPayload {
  clientMutationId: string;

  mediaItem?: Maybe<WpMediaItem>;
}

/** The payload for the createPaHind mutation */
export interface WpCreatePaHindPayload {
  clientMutationId: string;
  /** The created pa_hind */
  paHind?: Maybe<WpPaHind>;
}

/** The payload for the createPaHulk mutation */
export interface WpCreatePaHulkPayload {
  clientMutationId: string;
  /** The created pa_hulk */
  paHulk?: Maybe<WpPaHulk>;
}

/** The payload for the createPaKasutusaeg mutation */
export interface WpCreatePaKasutusaegPayload {
  clientMutationId: string;
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<WpPaKasutusaeg>;
}

/** The payload for the createPaKogus mutation */
export interface WpCreatePaKogusPayload {
  clientMutationId: string;
  /** The created pa_kogus */
  paKogus?: Maybe<WpPaKogus>;
}

/** The payload for the createPaKontuur mutation */
export interface WpCreatePaKontuurPayload {
  clientMutationId: string;
  /** The created pa_kontuur */
  paKontuur?: Maybe<WpPaKontuur>;
}

/** The payload for the createPaKoostisained mutation */
export interface WpCreatePaKoostisainedPayload {
  clientMutationId: string;
  /** The created pa_koostisained */
  paKoostisained?: Maybe<WpPaKoostisained>;
}

/** The payload for the createPaLaadimisaeg mutation */
export interface WpCreatePaLaadimisaegPayload {
  clientMutationId: string;
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<WpPaLaadimisaeg>;
}

/** The payload for the createPaMaterjal mutation */
export interface WpCreatePaMaterjalPayload {
  clientMutationId: string;
  /** The created pa_materjal */
  paMaterjal?: Maybe<WpPaMaterjal>;
}

/** The payload for the createPaMuratasa mutation */
export interface WpCreatePaMuratasaPayload {
  clientMutationId: string;
  /** The created pa_muratasa */
  paMuratasa?: Maybe<WpPaMuratasa>;
}

/** The payload for the createPaOhutus mutation */
export interface WpCreatePaOhutusPayload {
  clientMutationId: string;
  /** The created pa_ohutus */
  paOhutus?: Maybe<WpPaOhutus>;
}

/** The payload for the createPaPatareid mutation */
export interface WpCreatePaPatareidPayload {
  clientMutationId: string;
  /** The created pa_patareid */
  paPatareid?: Maybe<WpPaPatareid>;
}

/** The payload for the createPaSuurus mutation */
export interface WpCreatePaSuurusPayload {
  clientMutationId: string;
  /** The created pa_suurus */
  paSuurus?: Maybe<WpPaSuurus>;
}

/** The payload for the createPaVariant mutation */
export interface WpCreatePaVariantPayload {
  clientMutationId: string;
  /** The created pa_variant */
  paVariant?: Maybe<WpPaVariant>;
}

/** The payload for the createPaVarv mutation */
export interface WpCreatePaVarvPayload {
  clientMutationId: string;
  /** The created pa_varv */
  paVarv?: Maybe<WpPaVarv>;
}

/** The payload for the createPaVeekindlus mutation */
export interface WpCreatePaVeekindlusPayload {
  clientMutationId: string;
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<WpPaVeekindlus>;
}

/** The payload for the createPage mutation */
export interface WpCreatePagePayload {
  clientMutationId: string;

  page?: Maybe<WpPage>;
}

/** The payload for the createPost mutation */
export interface WpCreatePostPayload {
  clientMutationId: string;

  post?: Maybe<WpPost>;
}

/** The payload for the createProductCategory mutation */
export interface WpCreateProductCategoryPayload {
  clientMutationId: string;
  /** The created product_cat */
  productCategory?: Maybe<WpProductCategory>;
}

/** The payload for the createProductTag mutation */
export interface WpCreateProductTagPayload {
  clientMutationId: string;
  /** The created product_tag */
  productTag?: Maybe<WpProductTag>;
}

/** The payload for the createProductType mutation */
export interface WpCreateProductTypePayload {
  clientMutationId: string;
  /** The created product_type */
  productType?: Maybe<WpProductType>;
}

/** The payload for the createShippingClass mutation */
export interface WpCreateShippingClassPayload {
  clientMutationId: string;
  /** The created product_shipping_class */
  shippingClass?: Maybe<WpShippingClass>;
}

/** The payload for the createTag mutation */
export interface WpCreateTagPayload {
  clientMutationId: string;
  /** The created post_tag */
  tag?: Maybe<WpTag>;
}

/** The payload for the createUser mutation */
export interface WpCreateUserPayload {
  clientMutationId: string;

  user?: Maybe<WpUser>;
}

/** The payload for the createVisibleProduct mutation */
export interface WpCreateVisibleProductPayload {
  clientMutationId: string;
  /** The created product_visibility */
  visibleProduct?: Maybe<WpVisibleProduct>;
}

/** The payload for the deleteCategory mutation */
export interface WpDeleteCategoryPayload {
  /** The deteted term object */
  category?: Maybe<WpCategory>;

  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
}

/** The payload for the deleteComment mutation */
export interface WpDeleteCommentPayload {
  clientMutationId: string;
  /** The deleted comment object */
  comment?: Maybe<WpComment>;
  /** The deleted comment ID */
  deletedId?: Maybe<string>;
}

/** The payload for the deleteMediaItem mutation */
export interface WpDeleteMediaItemPayload {
  clientMutationId: string;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<string>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<WpMediaItem>;
}

/** The payload for the deletePaHind mutation */
export interface WpDeletePaHindPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paHind?: Maybe<WpPaHind>;
}

/** The payload for the deletePaHulk mutation */
export interface WpDeletePaHulkPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paHulk?: Maybe<WpPaHulk>;
}

/** The payload for the deletePaKasutusaeg mutation */
export interface WpDeletePaKasutusaegPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKasutusaeg?: Maybe<WpPaKasutusaeg>;
}

/** The payload for the deletePaKogus mutation */
export interface WpDeletePaKogusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKogus?: Maybe<WpPaKogus>;
}

/** The payload for the deletePaKontuur mutation */
export interface WpDeletePaKontuurPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKontuur?: Maybe<WpPaKontuur>;
}

/** The payload for the deletePaKoostisained mutation */
export interface WpDeletePaKoostisainedPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKoostisained?: Maybe<WpPaKoostisained>;
}

/** The payload for the deletePaLaadimisaeg mutation */
export interface WpDeletePaLaadimisaegPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paLaadimisaeg?: Maybe<WpPaLaadimisaeg>;
}

/** The payload for the deletePaMaterjal mutation */
export interface WpDeletePaMaterjalPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paMaterjal?: Maybe<WpPaMaterjal>;
}

/** The payload for the deletePaMuratasa mutation */
export interface WpDeletePaMuratasaPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paMuratasa?: Maybe<WpPaMuratasa>;
}

/** The payload for the deletePaOhutus mutation */
export interface WpDeletePaOhutusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paOhutus?: Maybe<WpPaOhutus>;
}

/** The payload for the deletePaPatareid mutation */
export interface WpDeletePaPatareidPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paPatareid?: Maybe<WpPaPatareid>;
}

/** The payload for the deletePaSuurus mutation */
export interface WpDeletePaSuurusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paSuurus?: Maybe<WpPaSuurus>;
}

/** The payload for the deletePaVariant mutation */
export interface WpDeletePaVariantPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVariant?: Maybe<WpPaVariant>;
}

/** The payload for the deletePaVarv mutation */
export interface WpDeletePaVarvPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVarv?: Maybe<WpPaVarv>;
}

/** The payload for the deletePaVeekindlus mutation */
export interface WpDeletePaVeekindlusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVeekindlus?: Maybe<WpPaVeekindlus>;
}

/** The payload for the deletePage mutation */
export interface WpDeletePagePayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  page?: Maybe<WpPage>;
}

/** The payload for the deletePost mutation */
export interface WpDeletePostPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  post?: Maybe<WpPost>;
}

/** The payload for the deleteProductCategory mutation */
export interface WpDeleteProductCategoryPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productCategory?: Maybe<WpProductCategory>;
}

/** The payload for the deleteProductTag mutation */
export interface WpDeleteProductTagPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productTag?: Maybe<WpProductTag>;
}

/** The payload for the deleteProductType mutation */
export interface WpDeleteProductTypePayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productType?: Maybe<WpProductType>;
}

/** The payload for the deleteRevision mutation */
export interface WpDeleteRevisionPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  revision?: Maybe<WpRevision>;
}

/** The payload for the deleteShippingClass mutation */
export interface WpDeleteShippingClassPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  shippingClass?: Maybe<WpShippingClass>;
}

/** The payload for the deleteTag mutation */
export interface WpDeleteTagPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  tag?: Maybe<WpTag>;
}

/** The payload for the deleteUser mutation */
export interface WpDeleteUserPayload {
  clientMutationId: string;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<string>;
  /** The deleted user object */
  user?: Maybe<WpUser>;
}

/** The payload for the deleteVisibleProduct mutation */
export interface WpDeleteVisibleProductPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  visibleProduct?: Maybe<WpVisibleProduct>;
}

/** The payload for the emptyCart mutation */
export interface WpEmptyCartPayload {
  cart?: Maybe<WpCart>;

  clientMutationId: string;
}

/** The payload for the registerCustomer mutation */
export interface WpRegisterCustomerPayload {
  clientMutationId: string;

  customer?: Maybe<WpCustomer>;

  viewer?: Maybe<WpUser>;
}

/** The payload for the registerUser mutation */
export interface WpRegisterUserPayload {
  clientMutationId: string;

  user?: Maybe<WpUser>;
}

/** The payload for the removeCoupons mutation */
export interface WpRemoveCouponsPayload {
  cart?: Maybe<WpCart>;

  clientMutationId: string;
}

/** The payload for the removeItemsFromCart mutation */
export interface WpRemoveItemsFromCartPayload {
  cartItems?: Maybe<(Maybe<WpCartItem>)[]>;

  clientMutationId: string;
}

/** The payload for the resetUserPassword mutation */
export interface WpResetUserPasswordPayload {
  clientMutationId: string;

  user?: Maybe<WpUser>;
}

/** The payload for the restoreCartItems mutation */
export interface WpRestoreCartItemsPayload {
  cartItems?: Maybe<(Maybe<WpCartItem>)[]>;

  clientMutationId: string;
}

/** The payload for the restoreComment mutation */
export interface WpRestoreCommentPayload {
  clientMutationId: string;
  /** The restored comment object */
  comment?: Maybe<WpComment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<string>;
}

/** The payload for the sendPasswordResetEmail mutation */
export interface WpSendPasswordResetEmailPayload {
  clientMutationId: string;
  /** The user that the password reset email was sent to */
  user?: Maybe<WpUser>;
}

/** The payload for the updateComment mutation */
export interface WpUpdateCommentPayload {
  clientMutationId: string;
  /** The comment that was created */
  comment?: Maybe<WpComment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<boolean>;
}

/** The payload for the updateCustomer mutation */
export interface WpUpdateCustomerPayload {
  clientMutationId: string;

  customer?: Maybe<WpCustomer>;
}

/** The payload for the updateItemQuantity mutation */
export interface WpUpdateItemQuantityPayload {
  cartItem?: Maybe<WpCartItem>;

  clientMutationId: string;
}

/** The payload for the updateMediaItem mutation */
export interface WpUpdateMediaItemPayload {
  clientMutationId: string;

  mediaItem?: Maybe<WpMediaItem>;
}

/** The payload for the updatePage mutation */
export interface WpUpdatePagePayload {
  clientMutationId: string;

  page?: Maybe<WpPage>;
}

/** The payload for the updatePost mutation */
export interface WpUpdatePostPayload {
  clientMutationId: string;

  post?: Maybe<WpPost>;
}

/** The payload for the updateSettings mutation */
export interface WpUpdateSettingsPayload {
  allSettings?: Maybe<WpSettings>;

  clientMutationId: string;

  discussionSettings?: Maybe<WpDiscussionSettings>;

  generalSettings?: Maybe<WpGeneralSettings>;

  readingSettings?: Maybe<WpReadingSettings>;

  writingSettings?: Maybe<WpWritingSettings>;
}

/** The payload for the updateUser mutation */
export interface WpUpdateUserPayload {
  clientMutationId: string;

  user?: Maybe<WpUser>;
}

// ====================================================
// Arguments
// ====================================================

export interface WpCartFeeQueryArgs {
  id: string;
}
export interface WpCartItemQueryArgs {
  key: string;
}
export interface WpCategoriesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToCategoryConnectionWhereArgs>;
}
export interface WpCategoryQueryArgs {
  id: string;
}
export interface WpCommentQueryArgs {
  id: string;
}
export interface WpCommentsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToCommentConnectionWhereArgs>;
}
export interface WpCouponQueryArgs {
  id: string;
}
export interface WpCouponByQueryArgs {
  /** Get the coupon by its global ID */
  id?: Maybe<string>;
  /** Get the coupon by its database ID */
  couponId?: Maybe<number>;
  /** Get the coupon by its code */
  code?: Maybe<string>;
}
export interface WpCouponsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToCouponConnectionWhereArgs>;
}
export interface WpCustomerQueryArgs {
  id?: Maybe<string>;
}
export interface WpCustomerByQueryArgs {
  /** Get the customer by their database ID */
  customerId: number;
}
export interface WpCustomersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToCustomerConnectionWhereArgs>;
}
export interface WpMediaItemQueryArgs {
  id: string;
}
export interface WpMediaItemByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the mediaItem by its database ID */
  mediaItemId?: Maybe<number>;
  /** Get the mediaItem by its uri */
  uri?: Maybe<string>;
  /** Get the mediaItem by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface WpMediaItemsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToMediaItemConnectionWhereArgs>;
}
export interface WpMenuQueryArgs {
  id: string;
}
export interface WpMenuItemsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToMenuItemConnectionWhereArgs>;
}
export interface WpMenuItemQueryArgs {
  id: string;
}
export interface WpMenusQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToMenuConnectionWhereArgs>;
}
export interface WpNodeQueryArgs {
  /** The ID of an object */
  id: string;
}
export interface WpOrderQueryArgs {
  id: string;
}
export interface WpOrderByQueryArgs {
  /** Get the order by its global ID */
  id?: Maybe<string>;
  /** Get the order by its database ID */
  orderId?: Maybe<number>;
  /** Get the order by its order number */
  orderKey?: Maybe<string>;
}
export interface WpOrdersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToOrderConnectionWhereArgs>;
}
export interface WpPaHindQueryArgs {
  id: string;
}
export interface WpPaHindsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaHindConnectionWhereArgs>;
}
export interface WpPaHulkQueryArgs {
  id: string;
}
export interface WpPaHulksQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaHulkConnectionWhereArgs>;
}
export interface WpPaKasutusaegQueryArgs {
  id: string;
}
export interface WpPaKasutusaegsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaKasutusaegConnectionWhereArgs>;
}
export interface WpPaKogusQueryArgs {
  id: string;
}
export interface WpPaKogusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaKogusConnectionWhereArgs>;
}
export interface WpPaKontuurQueryArgs {
  id: string;
}
export interface WpPaKontuursQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaKontuurConnectionWhereArgs>;
}
export interface WpPaKoostisainedQueryArgs {
  id: string;
}
export interface WpPaKoostisainedsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaKoostisainedConnectionWhereArgs>;
}
export interface WpPaLaadimisaegQueryArgs {
  id: string;
}
export interface WpPaLaadimisaegsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaLaadimisaegConnectionWhereArgs>;
}
export interface WpPaMaterjalQueryArgs {
  id: string;
}
export interface WpPaMaterjalsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaMaterjalConnectionWhereArgs>;
}
export interface WpPaMuratasaQueryArgs {
  id: string;
}
export interface WpPaMuratasasQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaMuratasaConnectionWhereArgs>;
}
export interface WpPaOhutusQueryArgs {
  id: string;
}
export interface WpPaOhutusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaOhutusConnectionWhereArgs>;
}
export interface WpPaPatareidQueryArgs {
  id: string;
}
export interface WpPaPatareidsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaPatareidConnectionWhereArgs>;
}
export interface WpPaSuurusQueryArgs {
  id: string;
}
export interface WpPaSuurusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaSuurusConnectionWhereArgs>;
}
export interface WpPaVariantQueryArgs {
  id: string;
}
export interface WpPaVariantsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaVariantConnectionWhereArgs>;
}
export interface WpPaVarvQueryArgs {
  id: string;
}
export interface WpPaVarvsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaVarvConnectionWhereArgs>;
}
export interface WpPaVeekindlusQueryArgs {
  id: string;
}
export interface WpPaVeekindlusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPaVeekindlusConnectionWhereArgs>;
}
export interface WpPageQueryArgs {
  id: string;
}
export interface WpPageByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the page by its database ID */
  pageId?: Maybe<number>;
  /** Get the page by its uri */
  uri?: Maybe<string>;
}
export interface WpPagesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPageConnectionWhereArgs>;
}
export interface WpPluginQueryArgs {
  id: string;
}
export interface WpPluginsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface WpPostQueryArgs {
  id: string;
}
export interface WpPostByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the post by its database ID */
  postId?: Maybe<number>;
  /** Get the post by its uri */
  uri?: Maybe<string>;
  /** Get the post by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface WpPostsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToPostConnectionWhereArgs>;
}
export interface WpProductQueryArgs {
  id: string;
}
export interface WpProductByQueryArgs {
  /** Get the product by its global ID */
  id?: Maybe<string>;
  /** Get the product by its database ID */
  productId?: Maybe<number>;
}
export interface WpProductCategoriesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToProductCategoryConnectionWhereArgs>;
}
export interface WpProductCategoryQueryArgs {
  id: string;
}
export interface WpProductTagQueryArgs {
  id: string;
}
export interface WpProductTagsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToProductTagConnectionWhereArgs>;
}
export interface WpProductTypeQueryArgs {
  id: string;
}
export interface WpProductTypesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToProductTypeConnectionWhereArgs>;
}
export interface WpProductVariationQueryArgs {
  /** Get the product variation by its global ID */
  id?: Maybe<string>;
  /** Get the product variation by its database ID */
  variationId?: Maybe<number>;
}
export interface WpProductsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToProductConnectionWhereArgs>;
}
export interface WpRefundQueryArgs {
  id: string;
}
export interface WpRefundByQueryArgs {
  /** Get the refund by its global ID */
  id?: Maybe<string>;
  /** Get the refund by its database ID */
  refundId?: Maybe<number>;
}
export interface WpRefundsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToRefundConnectionWhereArgs>;
}
export interface WpRevisionQueryArgs {
  id: string;
}
export interface WpRevisionByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the revision by its database ID */
  revisionId?: Maybe<number>;
  /** Get the revision by its uri */
  uri?: Maybe<string>;
  /** Get the revision by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface WpRevisionsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToRevisionConnectionWhereArgs>;
}
export interface WpShippingClassQueryArgs {
  id: string;
}
export interface WpShippingClassesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToShippingClassConnectionWhereArgs>;
}
export interface WpShippingMethodQueryArgs {
  /** Get the shipping method by its global ID */
  id?: Maybe<string>;
  /** Get the shipping method by its database ID */
  methodId?: Maybe<string>;
}
export interface WpShippingMethodsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface WpTagQueryArgs {
  id: string;
}
export interface WpTagsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToTagConnectionWhereArgs>;
}
export interface WpTaxRateQueryArgs {
  /** Get the tax rate by its global ID */
  id?: Maybe<string>;
  /** Get the tax rate by its database ID */
  rateId?: Maybe<number>;
}
export interface WpTaxRatesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToTaxRateConnectionWhereArgs>;
}
export interface WpThemeQueryArgs {
  id: string;
}
export interface WpThemesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface WpUserQueryArgs {
  id: string;
}
export interface WpUserRolesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface WpUserRoleQueryArgs {
  id: string;
}
export interface WpUsersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToUserConnectionWhereArgs>;
}
export interface WpVisibleProductQueryArgs {
  id: string;
}
export interface WpVisibleProductsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpRootQueryToVisibleProductConnectionWhereArgs>;
}
export interface AppliedCouponsWpCartArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCartToCouponConnectionWhereArgs>;
}
export interface ContentsWpCartArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCartToCartItemConnectionWhereArgs>;
}
export interface ExcludedProductCategoriesWpCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCouponToProductCategoryConnectionWhereArgs>;
}
export interface ExcludedProductsWpCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCouponToProductConnectionWhereArgs>;
}
export interface ProductCategoriesWpCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCouponToProductCategoryConnectionWhereArgs>;
}
export interface ProductsWpCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCouponToProductConnectionWhereArgs>;
}
export interface UsedByWpCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCouponToCustomerConnectionWhereArgs>;
}
export interface ChildrenWpProductCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductCategoryToProductCategoryConnectionWhereArgs>;
}
export interface ProductsWpProductCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductCategoryToProductConnectionWhereArgs>;
}
export interface ConnectedPostTypeNamesWpTaxonomyArgs {
  /** Select which post types to limit the results to */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface ConnectedPostTypesWpTaxonomyArgs {
  /** Select which post types to limit the results to */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface ConnectedTaxonomiesWpPostTypeArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface ConnectedTaxonomyNamesWpPostTypeArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface AttributesWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface CategoriesWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductCategoryConnectionWhereArgs>;
}
export interface CrossSellWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductConnectionWhereArgs>;
}
export interface DefaultAttributesWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface GalleryImagesWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToMediaItemConnectionWhereArgs>;
}
export interface GroupedWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductConnectionWhereArgs>;
}
export interface PriceWpProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface RegularPriceWpProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface RelatedWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductConnectionWhereArgs>;
}
export interface SalePriceWpProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface TagsWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductTagConnectionWhereArgs>;
}
export interface UpsellWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductConnectionWhereArgs>;
}
export interface VariationsWpProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductToProductVariationConnectionWhereArgs>;
}
export interface AncestorsWpMediaItemArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface CaptionWpMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface CommentsWpMediaItemArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpMediaItemToCommentConnectionWhereArgs>;
}
export interface ContentWpMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface DescriptionWpMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface ExcerptWpMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface SourceUrlWpMediaItemArgs {
  /** Size of the MediaItem to return */
  size?: Maybe<WpMediaItemSizeEnum>;
}
export interface TermNamesWpMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermsWpMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermSlugsWpMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TitleWpMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface AncestorsWpPostArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface CategoriesWpPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPostToCategoryConnectionWhereArgs>;
}
export interface CommentsWpPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPostToCommentConnectionWhereArgs>;
}
export interface ContentWpPostArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface ExcerptWpPostArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface RevisionsWpPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPostToRevisionConnectionWhereArgs>;
}
export interface TagsWpPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPostToTagConnectionWhereArgs>;
}
export interface TermNamesWpPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermsWpPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermSlugsWpPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TitleWpPostArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface AvatarWpUserArgs {
  /** The size attribute of the avatar field can be used to fetch avatars of different sizes. The value corresponds to the dimension in pixels to fetch. The default is 96 pixels. */
  size?: number;
  /** Whether to always show the default image, never the Gravatar. Default false */
  forceDefault?: Maybe<boolean>;

  rating?: Maybe<WpAvatarRatingEnum>;
}
export interface CommentsWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpUserToCommentConnectionWhereArgs>;
}
export interface MediaItemsWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpUserToMediaItemConnectionWhereArgs>;
}
export interface PagesWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpUserToPageConnectionWhereArgs>;
}
export interface PostsWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpUserToPostConnectionWhereArgs>;
}
export interface RevisionsWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpUserToRevisionConnectionWhereArgs>;
}
export interface RolesWpUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface ChildrenWpCommentArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCommentToCommentConnectionWhereArgs>;
}
export interface ContentWpCommentArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface AncestorsWpPageArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface ChildPagesWpPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPageToPageConnectionWhereArgs>;
}
export interface CommentsWpPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPageToCommentConnectionWhereArgs>;
}
export interface ContentWpPageArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface ExcerptWpPageArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface RevisionsWpPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPageToRevisionConnectionWhereArgs>;
}
export interface TermNamesWpPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermsWpPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermSlugsWpPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TitleWpPageArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface AncestorsWpRevisionArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<WpPostTypeEnum>)[]>;
}
export interface ContentWpRevisionArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface ExcerptWpRevisionArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface TermNamesWpRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermsWpRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TermSlugsWpRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<WpTaxonomyEnum>)[]>;
}
export interface TitleWpRevisionArgs {
  /** Format of the field output */
  format?: Maybe<WpPostObjectFieldFormatEnum>;
}
export interface ChildrenWpCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCategoryToCategoryConnectionWhereArgs>;
}
export interface PostsWpCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCategoryToPostConnectionWhereArgs>;
}
export interface PostsWpTagArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpTagToPostConnectionWhereArgs>;
}
export interface ProductsWpProductTagArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpProductTagToProductConnectionWhereArgs>;
}
export interface ProductsWpPaHindArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaHindToProductConnectionWhereArgs>;
}
export interface VariationsWpPaHindArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaHindToProductVariationConnectionWhereArgs>;
}
export interface AttributesWpProductVariationArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface ProductsWpPaHulkArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaHulkToProductConnectionWhereArgs>;
}
export interface VariationsWpPaHulkArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaHulkToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaKasutusaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKasutusaegToProductConnectionWhereArgs>;
}
export interface VariationsWpPaKasutusaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKasutusaegToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaKogusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKogusToProductConnectionWhereArgs>;
}
export interface VariationsWpPaKogusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKogusToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaKontuurArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKontuurToProductConnectionWhereArgs>;
}
export interface VariationsWpPaKontuurArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKontuurToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaKoostisainedArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKoostisainedToProductConnectionWhereArgs>;
}
export interface VariationsWpPaKoostisainedArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaKoostisainedToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaLaadimisaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaLaadimisaegToProductConnectionWhereArgs>;
}
export interface VariationsWpPaLaadimisaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaLaadimisaegToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaMaterjalArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaMaterjalToProductConnectionWhereArgs>;
}
export interface VariationsWpPaMaterjalArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaMaterjalToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaMuratasaArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaMuratasaToProductConnectionWhereArgs>;
}
export interface VariationsWpPaMuratasaArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaMuratasaToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaOhutusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaOhutusToProductConnectionWhereArgs>;
}
export interface VariationsWpPaOhutusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaOhutusToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaPatareidArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaPatareidToProductConnectionWhereArgs>;
}
export interface VariationsWpPaPatareidArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaPatareidToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaSuurusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaSuurusToProductConnectionWhereArgs>;
}
export interface VariationsWpPaSuurusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaSuurusToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaVariantArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVariantToProductConnectionWhereArgs>;
}
export interface VariationsWpPaVariantArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVariantToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaVarvArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVarvToProductConnectionWhereArgs>;
}
export interface VariationsWpPaVarvArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVarvToProductVariationConnectionWhereArgs>;
}
export interface ProductsWpPaVeekindlusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVeekindlusToProductConnectionWhereArgs>;
}
export interface VariationsWpPaVeekindlusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpPaVeekindlusToProductVariationConnectionWhereArgs>;
}
export interface OrdersWpCustomerArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCustomerToOrderConnectionWhereArgs>;
}
export interface RefundsWpCustomerArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpCustomerToRefundConnectionWhereArgs>;
}
export interface CouponLinesWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface FeeLinesWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface LineItemsWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface RefundsWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpOrderToRefundConnectionWhereArgs>;
}
export interface ShippingLinesWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface TaxLinesWpOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface LineItemsWpRefundArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface MenuItemsWpMenuArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpMenuToMenuItemConnectionWhereArgs>;
}
export interface ChildItemsWpMenuItemArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<WpMenuItemToMenuItemConnectionWhereArgs>;
}
export interface WpUpdateCategoryMutationArgs {
  /** Input for the UpdateCategory mutation */
  input: WpUpdateCategoryInput;
}
export interface WpUpdatePaHindMutationArgs {
  /** Input for the UpdatePaHind mutation */
  input: WpUpdatePaHindInput;
}
export interface WpUpdatePaHulkMutationArgs {
  /** Input for the UpdatePaHulk mutation */
  input: WpUpdatePaHulkInput;
}
export interface WpUpdatePaKasutusaegMutationArgs {
  /** Input for the UpdatePaKasutusaeg mutation */
  input: WpUpdatePaKasutusaegInput;
}
export interface WpUpdatePaKogusMutationArgs {
  /** Input for the UpdatePaKogus mutation */
  input: WpUpdatePaKogusInput;
}
export interface WpUpdatePaKontuurMutationArgs {
  /** Input for the UpdatePaKontuur mutation */
  input: WpUpdatePaKontuurInput;
}
export interface WpUpdatePaKoostisainedMutationArgs {
  /** Input for the UpdatePaKoostisained mutation */
  input: WpUpdatePaKoostisainedInput;
}
export interface WpUpdatePaLaadimisaegMutationArgs {
  /** Input for the UpdatePaLaadimisaeg mutation */
  input: WpUpdatePaLaadimisaegInput;
}
export interface WpUpdatePaMaterjalMutationArgs {
  /** Input for the UpdatePaMaterjal mutation */
  input: WpUpdatePaMaterjalInput;
}
export interface WpUpdatePaMuratasaMutationArgs {
  /** Input for the UpdatePaMuratasa mutation */
  input: WpUpdatePaMuratasaInput;
}
export interface WpUpdatePaOhutusMutationArgs {
  /** Input for the UpdatePaOhutus mutation */
  input: WpUpdatePaOhutusInput;
}
export interface WpUpdatePaPatareidMutationArgs {
  /** Input for the UpdatePaPatareid mutation */
  input: WpUpdatePaPatareidInput;
}
export interface WpUpdatePaSuurusMutationArgs {
  /** Input for the UpdatePaSuurus mutation */
  input: WpUpdatePaSuurusInput;
}
export interface WpUpdatePaVariantMutationArgs {
  /** Input for the UpdatePaVariant mutation */
  input: WpUpdatePaVariantInput;
}
export interface WpUpdatePaVarvMutationArgs {
  /** Input for the UpdatePaVarv mutation */
  input: WpUpdatePaVarvInput;
}
export interface WpUpdatePaVeekindlusMutationArgs {
  /** Input for the UpdatePaVeekindlus mutation */
  input: WpUpdatePaVeekindlusInput;
}
export interface WpUpdateProductCategoryMutationArgs {
  /** Input for the UpdateProductCategory mutation */
  input: WpUpdateProductCategoryInput;
}
export interface WpUpdateProductTagMutationArgs {
  /** Input for the UpdateProductTag mutation */
  input: WpUpdateProductTagInput;
}
export interface WpUpdateProductTypeMutationArgs {
  /** Input for the UpdateProductType mutation */
  input: WpUpdateProductTypeInput;
}
export interface WpUpdateShippingClassMutationArgs {
  /** Input for the UpdateShippingClass mutation */
  input: WpUpdateShippingClassInput;
}
export interface WpUpdateTagMutationArgs {
  /** Input for the UpdateTag mutation */
  input: WpUpdateTagInput;
}
export interface WpUpdateVisibleProductMutationArgs {
  /** Input for the UpdateVisibleProduct mutation */
  input: WpUpdateVisibleProductInput;
}
export interface WpAddFeeMutationArgs {
  /** Input for the addFee mutation */
  input: WpAddFeeInput;
}
export interface WpAddToCartMutationArgs {
  /** Input for the addToCart mutation */
  input: WpAddToCartInput;
}
export interface WpApplyCouponMutationArgs {
  /** Input for the applyCoupon mutation */
  input: WpApplyCouponInput;
}
export interface WpCreateCategoryMutationArgs {
  /** Input for the createCategory mutation */
  input: WpCreateCategoryInput;
}
export interface WpCreateCommentMutationArgs {
  /** Input for the createComment mutation */
  input: WpCreateCommentInput;
}
export interface WpCreateMediaItemMutationArgs {
  /** Input for the createMediaItem mutation */
  input: WpCreateMediaItemInput;
}
export interface WpCreatePaHindMutationArgs {
  /** Input for the createPaHind mutation */
  input: WpCreatePaHindInput;
}
export interface WpCreatePaHulkMutationArgs {
  /** Input for the createPaHulk mutation */
  input: WpCreatePaHulkInput;
}
export interface WpCreatePaKasutusaegMutationArgs {
  /** Input for the createPaKasutusaeg mutation */
  input: WpCreatePaKasutusaegInput;
}
export interface WpCreatePaKogusMutationArgs {
  /** Input for the createPaKogus mutation */
  input: WpCreatePaKogusInput;
}
export interface WpCreatePaKontuurMutationArgs {
  /** Input for the createPaKontuur mutation */
  input: WpCreatePaKontuurInput;
}
export interface WpCreatePaKoostisainedMutationArgs {
  /** Input for the createPaKoostisained mutation */
  input: WpCreatePaKoostisainedInput;
}
export interface WpCreatePaLaadimisaegMutationArgs {
  /** Input for the createPaLaadimisaeg mutation */
  input: WpCreatePaLaadimisaegInput;
}
export interface WpCreatePaMaterjalMutationArgs {
  /** Input for the createPaMaterjal mutation */
  input: WpCreatePaMaterjalInput;
}
export interface WpCreatePaMuratasaMutationArgs {
  /** Input for the createPaMuratasa mutation */
  input: WpCreatePaMuratasaInput;
}
export interface WpCreatePaOhutusMutationArgs {
  /** Input for the createPaOhutus mutation */
  input: WpCreatePaOhutusInput;
}
export interface WpCreatePaPatareidMutationArgs {
  /** Input for the createPaPatareid mutation */
  input: WpCreatePaPatareidInput;
}
export interface WpCreatePaSuurusMutationArgs {
  /** Input for the createPaSuurus mutation */
  input: WpCreatePaSuurusInput;
}
export interface WpCreatePaVariantMutationArgs {
  /** Input for the createPaVariant mutation */
  input: WpCreatePaVariantInput;
}
export interface WpCreatePaVarvMutationArgs {
  /** Input for the createPaVarv mutation */
  input: WpCreatePaVarvInput;
}
export interface WpCreatePaVeekindlusMutationArgs {
  /** Input for the createPaVeekindlus mutation */
  input: WpCreatePaVeekindlusInput;
}
export interface WpCreatePageMutationArgs {
  /** Input for the createPage mutation */
  input: WpCreatePageInput;
}
export interface WpCreatePostMutationArgs {
  /** Input for the createPost mutation */
  input: WpCreatePostInput;
}
export interface WpCreateProductCategoryMutationArgs {
  /** Input for the createProductCategory mutation */
  input: WpCreateProductCategoryInput;
}
export interface WpCreateProductTagMutationArgs {
  /** Input for the createProductTag mutation */
  input: WpCreateProductTagInput;
}
export interface WpCreateProductTypeMutationArgs {
  /** Input for the createProductType mutation */
  input: WpCreateProductTypeInput;
}
export interface WpCreateShippingClassMutationArgs {
  /** Input for the createShippingClass mutation */
  input: WpCreateShippingClassInput;
}
export interface WpCreateTagMutationArgs {
  /** Input for the createTag mutation */
  input: WpCreateTagInput;
}
export interface WpCreateUserMutationArgs {
  /** Input for the createUser mutation */
  input: WpCreateUserInput;
}
export interface WpCreateVisibleProductMutationArgs {
  /** Input for the createVisibleProduct mutation */
  input: WpCreateVisibleProductInput;
}
export interface WpDeleteCategoryMutationArgs {
  /** Input for the deleteCategory mutation */
  input: WpDeleteCategoryInput;
}
export interface WpDeleteCommentMutationArgs {
  /** Input for the deleteComment mutation */
  input: WpDeleteCommentInput;
}
export interface WpDeleteMediaItemMutationArgs {
  /** Input for the deleteMediaItem mutation */
  input: WpDeleteMediaItemInput;
}
export interface WpDeletePaHindMutationArgs {
  /** Input for the deletePaHind mutation */
  input: WpDeletePaHindInput;
}
export interface WpDeletePaHulkMutationArgs {
  /** Input for the deletePaHulk mutation */
  input: WpDeletePaHulkInput;
}
export interface WpDeletePaKasutusaegMutationArgs {
  /** Input for the deletePaKasutusaeg mutation */
  input: WpDeletePaKasutusaegInput;
}
export interface WpDeletePaKogusMutationArgs {
  /** Input for the deletePaKogus mutation */
  input: WpDeletePaKogusInput;
}
export interface WpDeletePaKontuurMutationArgs {
  /** Input for the deletePaKontuur mutation */
  input: WpDeletePaKontuurInput;
}
export interface WpDeletePaKoostisainedMutationArgs {
  /** Input for the deletePaKoostisained mutation */
  input: WpDeletePaKoostisainedInput;
}
export interface WpDeletePaLaadimisaegMutationArgs {
  /** Input for the deletePaLaadimisaeg mutation */
  input: WpDeletePaLaadimisaegInput;
}
export interface WpDeletePaMaterjalMutationArgs {
  /** Input for the deletePaMaterjal mutation */
  input: WpDeletePaMaterjalInput;
}
export interface WpDeletePaMuratasaMutationArgs {
  /** Input for the deletePaMuratasa mutation */
  input: WpDeletePaMuratasaInput;
}
export interface WpDeletePaOhutusMutationArgs {
  /** Input for the deletePaOhutus mutation */
  input: WpDeletePaOhutusInput;
}
export interface WpDeletePaPatareidMutationArgs {
  /** Input for the deletePaPatareid mutation */
  input: WpDeletePaPatareidInput;
}
export interface WpDeletePaSuurusMutationArgs {
  /** Input for the deletePaSuurus mutation */
  input: WpDeletePaSuurusInput;
}
export interface WpDeletePaVariantMutationArgs {
  /** Input for the deletePaVariant mutation */
  input: WpDeletePaVariantInput;
}
export interface WpDeletePaVarvMutationArgs {
  /** Input for the deletePaVarv mutation */
  input: WpDeletePaVarvInput;
}
export interface WpDeletePaVeekindlusMutationArgs {
  /** Input for the deletePaVeekindlus mutation */
  input: WpDeletePaVeekindlusInput;
}
export interface WpDeletePageMutationArgs {
  /** Input for the deletePage mutation */
  input: WpDeletePageInput;
}
export interface WpDeletePostMutationArgs {
  /** Input for the deletePost mutation */
  input: WpDeletePostInput;
}
export interface WpDeleteProductCategoryMutationArgs {
  /** Input for the deleteProductCategory mutation */
  input: WpDeleteProductCategoryInput;
}
export interface WpDeleteProductTagMutationArgs {
  /** Input for the deleteProductTag mutation */
  input: WpDeleteProductTagInput;
}
export interface WpDeleteProductTypeMutationArgs {
  /** Input for the deleteProductType mutation */
  input: WpDeleteProductTypeInput;
}
export interface WpDeleteRevisionMutationArgs {
  /** Input for the deleteRevision mutation */
  input: WpDeleteRevisionInput;
}
export interface WpDeleteShippingClassMutationArgs {
  /** Input for the deleteShippingClass mutation */
  input: WpDeleteShippingClassInput;
}
export interface WpDeleteTagMutationArgs {
  /** Input for the deleteTag mutation */
  input: WpDeleteTagInput;
}
export interface WpDeleteUserMutationArgs {
  /** Input for the deleteUser mutation */
  input: WpDeleteUserInput;
}
export interface WpDeleteVisibleProductMutationArgs {
  /** Input for the deleteVisibleProduct mutation */
  input: WpDeleteVisibleProductInput;
}
export interface WpEmptyCartMutationArgs {
  /** Input for the emptyCart mutation */
  input: WpEmptyCartInput;
}
export interface WpIncreaseCountMutationArgs {
  /** The count to increase */
  count?: Maybe<number>;
}
export interface WpRegisterCustomerMutationArgs {
  /** Input for the registerCustomer mutation */
  input: WpRegisterCustomerInput;
}
export interface WpRegisterUserMutationArgs {
  /** Input for the registerUser mutation */
  input: WpRegisterUserInput;
}
export interface WpRemoveCouponsMutationArgs {
  /** Input for the removeCoupons mutation */
  input: WpRemoveCouponsInput;
}
export interface WpRemoveItemsFromCartMutationArgs {
  /** Input for the removeItemsFromCart mutation */
  input: WpRemoveItemsFromCartInput;
}
export interface WpResetUserPasswordMutationArgs {
  /** Input for the resetUserPassword mutation */
  input: WpResetUserPasswordInput;
}
export interface WpRestoreCartItemsMutationArgs {
  /** Input for the restoreCartItems mutation */
  input: WpRestoreCartItemsInput;
}
export interface WpRestoreCommentMutationArgs {
  /** Input for the restoreComment mutation */
  input: WpRestoreCommentInput;
}
export interface WpSendPasswordResetEmailMutationArgs {
  /** Input for the sendPasswordResetEmail mutation */
  input: WpSendPasswordResetEmailInput;
}
export interface WpUpdateCommentMutationArgs {
  /** Input for the updateComment mutation */
  input: WpUpdateCommentInput;
}
export interface WpUpdateCustomerMutationArgs {
  /** Input for the updateCustomer mutation */
  input: WpUpdateCustomerInput;
}
export interface WpUpdateItemQuantityMutationArgs {
  /** Input for the updateItemQuantity mutation */
  input: WpUpdateItemQuantityInput;
}
export interface WpUpdateMediaItemMutationArgs {
  /** Input for the updateMediaItem mutation */
  input: WpUpdateMediaItemInput;
}
export interface WpUpdatePageMutationArgs {
  /** Input for the updatePage mutation */
  input: WpUpdatePageInput;
}
export interface WpUpdatePostMutationArgs {
  /** Input for the updatePost mutation */
  input: WpUpdatePostInput;
}
export interface WpUpdateSettingsMutationArgs {
  /** Input for the updateSettings mutation */
  input: WpUpdateSettingsInput;
}
export interface WpUpdateUserMutationArgs {
  /** Input for the updateUser mutation */
  input: WpUpdateUserInput;
}

// ====================================================
// Unions
// ====================================================

export type WpPostObjectUnion = WpPost | WpPage | WpMediaItem | WpRevision;

export type WpCommentAuthorUnion = WpUser | WpCommentAuthor;

export type WpTermObjectUnion =
  | WpCategory
  | WpTag
  | WpProductType
  | WpVisibleProduct
  | WpProductCategory
  | WpProductTag
  | WpShippingClass
  | WpPaHind
  | WpPaHulk
  | WpPaKasutusaeg
  | WpPaKogus
  | WpPaKontuur
  | WpPaKoostisained
  | WpPaLaadimisaeg
  | WpPaMaterjal
  | WpPaMuratasa
  | WpPaOhutus
  | WpPaPatareid
  | WpPaSuurus
  | WpPaVariant
  | WpPaVarv
  | WpPaVeekindlus;

export type WpMenuItemObjectUnion =
  | WpPost
  | WpPage
  | WpCategory
  | WpTag
  | WpProductCategory
  | WpProductTag
  | WpMenuItem;
