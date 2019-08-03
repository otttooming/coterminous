export type Maybe<T> = T | null;

/** Arguments for filtering the CartToCouponConnection connection */
export interface CartToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
export interface DateQueryInput {
  after?: Maybe<DateInput>;

  before?: Maybe<DateInput>;
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
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
  relation?: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<number>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Date values */
export interface DateInput {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<number>;
  /** Month number (from 1 to 12) */
  month?: Maybe<number>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<number>;
}
/** Options for ordering the connection */
export interface WcConnectionOrderbyInput {
  field: WcConnectionOrderbyEnum;

  order?: Maybe<OrderEnum>;
}
/** Arguments for filtering the CouponToProductCategoryConnection connection */
export interface CouponToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface ProductCategoryToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface ProductCategoryToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToProductCategoryConnection connection */
export interface ProductToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface ProductToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the ProductToMediaItemConnection connection */
export interface ProductToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface PostObjectsConnectionOrderbyInput {
  field: PostObjectsConnectionOrderbyEnum;

  order?: Maybe<OrderEnum>;
}
/** Arguments for filtering the UserToCommentConnection connection */
export interface UserToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface CommentToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface UserToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface UserToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface PageToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface PageToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface PageToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface CategoryToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface CategoryToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface TagToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface ProductTagToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductConnection connection */
export interface PaHindToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHindToProductVariationConnection connection */
export interface PaHindToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductConnection connection */
export interface PaHulkToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaHulkToProductVariationConnection connection */
export interface PaHulkToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductConnection connection */
export interface PaKasutusaegToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKasutusaegToProductVariationConnection connection */
export interface PaKasutusaegToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductConnection connection */
export interface PaKogusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKogusToProductVariationConnection connection */
export interface PaKogusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductConnection connection */
export interface PaKontuurToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKontuurToProductVariationConnection connection */
export interface PaKontuurToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductConnection connection */
export interface PaKoostisainedToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaKoostisainedToProductVariationConnection connection */
export interface PaKoostisainedToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductConnection connection */
export interface PaLaadimisaegToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaLaadimisaegToProductVariationConnection connection */
export interface PaLaadimisaegToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductConnection connection */
export interface PaMaterjalToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMaterjalToProductVariationConnection connection */
export interface PaMaterjalToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductConnection connection */
export interface PaMuratasaToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaMuratasaToProductVariationConnection connection */
export interface PaMuratasaToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductConnection connection */
export interface PaOhutusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaOhutusToProductVariationConnection connection */
export interface PaOhutusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductConnection connection */
export interface PaPatareidToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaPatareidToProductVariationConnection connection */
export interface PaPatareidToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductConnection connection */
export interface PaSuurusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaSuurusToProductVariationConnection connection */
export interface PaSuurusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductConnection connection */
export interface PaVariantToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVariantToProductVariationConnection connection */
export interface PaVariantToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductConnection connection */
export interface PaVarvToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVarvToProductVariationConnection connection */
export interface PaVarvToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductConnection connection */
export interface PaVeekindlusToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the PaVeekindlusToProductVariationConnection connection */
export interface PaVeekindlusToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the UserToPostConnection connection */
export interface UserToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface UserToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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
export interface PostToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface PostToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface PostToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface PostToTagConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface MediaItemToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface ProductToProductTagConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface ProductToProductVariationConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToProductConnection connection */
export interface CouponToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the CouponToCustomerConnection connection */
export interface CouponToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the OrderToRefundConnection connection */
export interface OrderToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
export interface CustomerToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  statuses?: Maybe<(Maybe<OrderStatusEnum>)[]>;
}
/** Arguments for filtering the CustomerToRefundConnection connection */
export interface CustomerToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
export interface CartToCartItemConnectionWhereArgs {
  /** Limit results to cart item that require shipping */
  needShipping?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface RootQueryToCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToCommentConnectionWhereArgs {
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
  contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<(Maybe<string>)[]>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<number>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
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
export interface RootQueryToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<string>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
export interface RootQueryToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<string>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** Limit results to those matching a string. */
  search?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface RootQueryToMediaItemConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface MenuToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface MenuItemToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface RootQueryToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface RootQueryToMenuConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<number>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToOrderConnection connection */
export interface RootQueryToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<number>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<(Maybe<number>)[]>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  statuses?: Maybe<(Maybe<OrderStatusEnum>)[]>;
}
/** Arguments for filtering the RootQueryToPaHindConnection connection */
export interface RootQueryToPaHindConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaHulkConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaKasutusaegConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaKogusConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaKontuurConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaKoostisainedConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaLaadimisaegConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaMaterjalConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaMuratasaConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaOhutusConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaPatareidConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaSuurusConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaVariantConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaVarvConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPaVeekindlusConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToPageConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface RootQueryToPostConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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

  stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

  status?: Maybe<PostStatusEnum>;
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
export interface RootQueryToProductCategoryConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToProductTagConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToProductTypeConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToProductConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
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
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
  stockStatus?: Maybe<(Maybe<StockStatusEnum>)[]>;
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
  taxClass?: Maybe<TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<(Maybe<ProductTypesEnum>)[]>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}
/** Arguments for filtering the RootQueryToRefundConnection connection */
export interface RootQueryToRefundConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Limit result set to specific ids. */
  include?: Maybe<(Maybe<number>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<WcConnectionOrderbyInput>)[]>;
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
export interface RootQueryToRevisionConnectionWhereArgs {
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
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<boolean>;
  /** Specific ID of the object */
  id?: Maybe<number>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<(Maybe<string>)[]>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<string>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<(Maybe<string>)[]>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<(Maybe<string>)[]>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
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
export interface RootQueryToShippingClassConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToTagConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface RootQueryToTaxRateConnectionWhereArgs {
  /** Sort by tax class */
  class?: Maybe<string>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<(Maybe<TaxRateConnectionOrderbyInput>)[]>;
}
/** Options for ordering the connection */
export interface TaxRateConnectionOrderbyInput {
  field: TaxRateConnectionOrderbyEnum;

  order?: Maybe<OrderEnum>;
}
/** Arguments for filtering the RootQueryToUserConnection connection */
export interface RootQueryToUserConnectionWhereArgs {
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  exclude?: Maybe<(Maybe<number>)[]>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<(Maybe<PostTypeEnum>)[]>;
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
  role?: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<string>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<(Maybe<UsersConnectionSearchColumnEnum>)[]>;
}
/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export interface RootQueryToVisibleProductConnectionWhereArgs {
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
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
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
export interface UpdateCategoryInput {
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
export interface UpdatePaHindInput {
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
export interface UpdatePaHulkInput {
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
export interface UpdatePaKasutusaegInput {
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
export interface UpdatePaKogusInput {
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
export interface UpdatePaKontuurInput {
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
export interface UpdatePaKoostisainedInput {
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
export interface UpdatePaLaadimisaegInput {
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
export interface UpdatePaMaterjalInput {
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
export interface UpdatePaMuratasaInput {
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
export interface UpdatePaOhutusInput {
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
export interface UpdatePaPatareidInput {
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
export interface UpdatePaSuurusInput {
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
export interface UpdatePaVariantInput {
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
export interface UpdatePaVarvInput {
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
export interface UpdatePaVeekindlusInput {
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
export interface UpdateProductCategoryInput {
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
export interface UpdateProductTagInput {
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
export interface UpdateProductTypeInput {
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
export interface UpdateShippingClassInput {
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
export interface UpdateTagInput {
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
export interface UpdateVisibleProductInput {
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
export interface AddFeeInput {
  /** Fee amount */
  amount?: Maybe<number>;

  clientMutationId: string;
  /** Unique name for the fee. */
  name: string;
  /** Is the fee taxable? */
  taxable?: Maybe<boolean>;
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<TaxClassEnum>;
}
/** Input for the addToCart mutation */
export interface AddToCartInput {
  clientMutationId: string;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<string>;
  /** Cart item product database ID or global ID */
  productId: number;
  /** Cart item quantity */
  quantity?: Maybe<number>;
  /** Cart item product variation attributes */
  variation?: Maybe<(Maybe<ProductAttributeInput>)[]>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<number>;
}
/** Options for ordering the connection */
export interface ProductAttributeInput {
  attribute: string;

  attributeTerm: string;
}
/** Input for the applyCoupon mutation */
export interface ApplyCouponInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  code: string;
}
/** Input for the createCategory mutation */
export interface CreateCategoryInput {
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
export interface CreateCommentInput {
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
export interface CreateMediaItemInput {
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
  fileType?: Maybe<MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the createPaHind mutation */
export interface CreatePaHindInput {
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
export interface CreatePaHulkInput {
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
export interface CreatePaKasutusaegInput {
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
export interface CreatePaKogusInput {
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
export interface CreatePaKontuurInput {
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
export interface CreatePaKoostisainedInput {
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
export interface CreatePaLaadimisaegInput {
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
export interface CreatePaMaterjalInput {
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
export interface CreatePaMuratasaInput {
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
export interface CreatePaOhutusInput {
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
export interface CreatePaPatareidInput {
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
export interface CreatePaSuurusInput {
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
export interface CreatePaVariantInput {
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
export interface CreatePaVarvInput {
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
export interface CreatePaVeekindlusInput {
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
export interface CreatePageInput {
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
  mimeType?: Maybe<MimeTypeEnum>;
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
  status?: Maybe<PostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the createPost mutation */
export interface CreatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;

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
  mimeType?: Maybe<MimeTypeEnum>;
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
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Set relationships between the post to categories */
export interface PostCategoriesInput {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<PostCategoriesNodeInput>)[]>;
}
/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostCategoriesNodeInput {
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
export interface PostTagsInput {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<boolean>;

  nodes?: Maybe<(Maybe<PostTagsNodeInput>)[]>;
}
/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostTagsNodeInput {
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
export interface CreateProductCategoryInput {
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
export interface CreateProductTagInput {
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
export interface CreateProductTypeInput {
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
export interface CreateShippingClassInput {
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
export interface CreateTagInput {
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
export interface CreateUserInput {
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
export interface CreateVisibleProductInput {
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
export interface DeleteCategoryInput {
  clientMutationId: string;
  /** The ID of the category to delete */
  id: string;
}
/** Input for the deleteComment mutation */
export interface DeleteCommentInput {
  clientMutationId: string;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The deleted comment ID */
  id: string;
}
/** Input for the deleteMediaItem mutation */
export interface DeleteMediaItemInput {
  clientMutationId: string;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the mediaItem to delete */
  id: string;
}
/** Input for the deletePaHind mutation */
export interface DeletePaHindInput {
  clientMutationId: string;
  /** The ID of the paHind to delete */
  id: string;
}
/** Input for the deletePaHulk mutation */
export interface DeletePaHulkInput {
  clientMutationId: string;
  /** The ID of the paHulk to delete */
  id: string;
}
/** Input for the deletePaKasutusaeg mutation */
export interface DeletePaKasutusaegInput {
  clientMutationId: string;
  /** The ID of the paKasutusaeg to delete */
  id: string;
}
/** Input for the deletePaKogus mutation */
export interface DeletePaKogusInput {
  clientMutationId: string;
  /** The ID of the paKogus to delete */
  id: string;
}
/** Input for the deletePaKontuur mutation */
export interface DeletePaKontuurInput {
  clientMutationId: string;
  /** The ID of the paKontuur to delete */
  id: string;
}
/** Input for the deletePaKoostisained mutation */
export interface DeletePaKoostisainedInput {
  clientMutationId: string;
  /** The ID of the paKoostisained to delete */
  id: string;
}
/** Input for the deletePaLaadimisaeg mutation */
export interface DeletePaLaadimisaegInput {
  clientMutationId: string;
  /** The ID of the paLaadimisaeg to delete */
  id: string;
}
/** Input for the deletePaMaterjal mutation */
export interface DeletePaMaterjalInput {
  clientMutationId: string;
  /** The ID of the paMaterjal to delete */
  id: string;
}
/** Input for the deletePaMuratasa mutation */
export interface DeletePaMuratasaInput {
  clientMutationId: string;
  /** The ID of the paMuratasa to delete */
  id: string;
}
/** Input for the deletePaOhutus mutation */
export interface DeletePaOhutusInput {
  clientMutationId: string;
  /** The ID of the paOhutus to delete */
  id: string;
}
/** Input for the deletePaPatareid mutation */
export interface DeletePaPatareidInput {
  clientMutationId: string;
  /** The ID of the paPatareid to delete */
  id: string;
}
/** Input for the deletePaSuurus mutation */
export interface DeletePaSuurusInput {
  clientMutationId: string;
  /** The ID of the paSuurus to delete */
  id: string;
}
/** Input for the deletePaVariant mutation */
export interface DeletePaVariantInput {
  clientMutationId: string;
  /** The ID of the paVariant to delete */
  id: string;
}
/** Input for the deletePaVarv mutation */
export interface DeletePaVarvInput {
  clientMutationId: string;
  /** The ID of the paVarv to delete */
  id: string;
}
/** Input for the deletePaVeekindlus mutation */
export interface DeletePaVeekindlusInput {
  clientMutationId: string;
  /** The ID of the paVeekindlus to delete */
  id: string;
}
/** Input for the deletePage mutation */
export interface DeletePageInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the page to delete */
  id: string;
}
/** Input for the deletePost mutation */
export interface DeletePostInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the post to delete */
  id: string;
}
/** Input for the deleteProductCategory mutation */
export interface DeleteProductCategoryInput {
  clientMutationId: string;
  /** The ID of the productCategory to delete */
  id: string;
}
/** Input for the deleteProductTag mutation */
export interface DeleteProductTagInput {
  clientMutationId: string;
  /** The ID of the productTag to delete */
  id: string;
}
/** Input for the deleteProductType mutation */
export interface DeleteProductTypeInput {
  clientMutationId: string;
  /** The ID of the productType to delete */
  id: string;
}
/** Input for the deleteRevision mutation */
export interface DeleteRevisionInput {
  clientMutationId: string;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<boolean>;
  /** The ID of the revision to delete */
  id: string;
}
/** Input for the deleteShippingClass mutation */
export interface DeleteShippingClassInput {
  clientMutationId: string;
  /** The ID of the shippingClass to delete */
  id: string;
}
/** Input for the deleteTag mutation */
export interface DeleteTagInput {
  clientMutationId: string;
  /** The ID of the tag to delete */
  id: string;
}
/** Input for the deleteUser mutation */
export interface DeleteUserInput {
  clientMutationId: string;
  /** The ID of the user you want to delete */
  id: string;
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<string>;
}
/** Input for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductInput {
  clientMutationId: string;
  /** The ID of the visibleProduct to delete */
  id: string;
}
/** Input for the emptyCart mutation */
export interface EmptyCartInput {
  clientMutationId: string;
}
/** Input for the registerCustomer mutation */
export interface RegisterCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;

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
  shipping?: Maybe<CustomerAddressInput>;
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
export interface CustomerAddressInput {
  /** Address 1 */
  address1?: Maybe<string>;
  /** Address 2 */
  address2?: Maybe<string>;
  /** City */
  city?: Maybe<string>;
  /** Company */
  company?: Maybe<string>;
  /** Country */
  country?: Maybe<CountriesEnum>;
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
export interface RegisterUserInput {
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
export interface RemoveCouponsInput {
  clientMutationId: string;
  /** Code of coupon being applied */
  codes?: Maybe<(Maybe<string>)[]>;
}
/** Input for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartInput {
  /** Remove all cart items */
  all?: Maybe<boolean>;

  clientMutationId: string;
  /** Item keys of the items being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the resetUserPassword mutation */
export interface ResetUserPasswordInput {
  clientMutationId: string;
  /** Password reset key */
  key?: Maybe<string>;
  /** The user's login (username). */
  login?: Maybe<string>;
  /** The new password. */
  password?: Maybe<string>;
}
/** Input for the restoreCartItems mutation */
export interface RestoreCartItemsInput {
  clientMutationId: string;
  /** Cart item key of the item being removed */
  keys?: Maybe<(Maybe<string>)[]>;
}
/** Input for the restoreComment mutation */
export interface RestoreCommentInput {
  clientMutationId: string;
  /** The ID of the comment to be restored */
  id: string;
}
/** Input for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailInput {
  clientMutationId: string;
  /** A string that contains the user's username or email address. */
  username: string;
}
/** Input for the updateComment mutation */
export interface UpdateCommentInput {
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
export interface UpdateCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<string>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;

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
  shipping?: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<boolean>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<string>;
  /** User's Yahoo IM account. */
  yim?: Maybe<string>;
}
/** Input for the updateItemQuantity mutation */
export interface UpdateItemQuantityInput {
  clientMutationId: string;
  /** Cart item being updated */
  key: string;
  /** Cart item's new quantity */
  quantity: number;
}
/** Input for the updateMediaItem mutation */
export interface UpdateMediaItemInput {
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
  fileType?: Maybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: string;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<string>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<string>;
  /** The slug of the mediaItem */
  slug?: Maybe<string>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<string>;
}
/** Input for the updatePage mutation */
export interface UpdatePageInput {
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
  mimeType?: Maybe<MimeTypeEnum>;
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
  status?: Maybe<PostStatusEnum>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updatePost mutation */
export interface UpdatePostInput {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<string>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;

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
  mimeType?: Maybe<MimeTypeEnum>;
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
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the post */
  title?: Maybe<string>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updateSettings mutation */
export interface UpdateSettingsInput {
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
export interface UpdateUserInput {
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
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED',
}
/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR',
}
/** Field to order the connection by */
export enum WcConnectionOrderbyEnum {
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
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}
/** Coupon discount type enumeration */
export enum DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT',
}
/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER',
}
/** Allowed Post Types */
export enum PostTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST',
  Revision = 'REVISION',
}
/** Allowed taxonomies */
export enum TaxonomyEnum {
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
export enum StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK',
}
/** Tax class enumeration */
export enum TaxClassEnum {
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE',
}
/** Product type enumeration */
export enum ProductTypesEnum {
  External = 'EXTERNAL',
  Grouped = 'GROUPED',
  Simple = 'SIMPLE',
  Variable = 'VARIABLE',
  Variation = 'VARIATION',
}
/** Product catalog visibility enumeration */
export enum CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE',
}
/** Product backorder enumeration */
export enum BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES',
}
/** The MimeType of the object */
export enum MimeTypeEnum {
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
export enum PostObjectsConnectionOrderbyEnum {
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
export enum PostStatusEnum {
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
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X',
}
/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
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
export enum PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED',
}
/** Product manage stock enumeration */
export enum ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE',
}
/** Product tax status enumeration */
export enum TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE',
}
/** The size of the media item object. */
export enum MediaItemSizeEnum {
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
export enum CustomerConnectionOrderbyEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Include = 'INCLUDE',
  Name = 'NAME',
  RegisteredDate = 'REGISTERED_DATE',
  Username = 'USERNAME',
}
/** Names of available user roles */
export enum UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER',
}
/** Countries enumeration */
export enum CountriesEnum {
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
export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
}
/** Registered menu locations */
export enum MenuLocationEnum {
  Empty = 'EMPTY',
}
/** Field to order the connection by */
export enum TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER',
}
/** Column used for searching for users */
export enum UsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL',
}
/** The status of the media item object. */
export enum MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH',
}

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** The cart object */
  cart?: Maybe<Cart>;
  /** The cart object */
  cartFee?: Maybe<CartFee>;
  /** The cart object */
  cartItem?: Maybe<CartItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the RootQuery type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** A coupon object */
  coupon?: Maybe<Coupon>;
  /** A coupon object */
  couponBy?: Maybe<Coupon>;
  /** Connection between the RootQuery type and the RootQuery type */
  coupons?: Maybe<RootQueryToCouponConnection>;
  /** A customer object */
  customer?: Maybe<Customer>;
  /** A customer object */
  customerBy?: Maybe<Customer>;
  /** Connection between the RootQuery type and the RootQuery type */
  customers?: Maybe<RootQueryToCustomerConnection>;

  discussionSettings?: Maybe<DiscussionSettings>;

  generalSettings?: Maybe<GeneralSettings>;
  /** A 0bject */
  mediaItem?: Maybe<MediaItem>;
  /** A mediaItem object */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** Connection between the RootQuery type and the RootQuery type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** A order object */
  order?: Maybe<Order>;
  /** A order object */
  orderBy?: Maybe<Order>;
  /** Connection between the RootQuery type and the RootQuery type */
  orders?: Maybe<RootQueryToOrderConnection>;
  /** A 0bject */
  paHind?: Maybe<PaHind>;
  /** Connection between the RootQuery type and the RootQuery type */
  paHinds?: Maybe<RootQueryToPaHindConnection>;
  /** A 0bject */
  paHulk?: Maybe<PaHulk>;
  /** Connection between the RootQuery type and the RootQuery type */
  paHulks?: Maybe<RootQueryToPaHulkConnection>;
  /** A 0bject */
  paKasutusaeg?: Maybe<PaKasutusaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  paKasutusaegs?: Maybe<RootQueryToPaKasutusaegConnection>;
  /** A 0bject */
  paKogus?: Maybe<PaKogus>;
  /** Connection between the RootQuery type and the RootQuery type */
  paKoguses?: Maybe<RootQueryToPaKogusConnection>;
  /** A 0bject */
  paKontuur?: Maybe<PaKontuur>;
  /** Connection between the RootQuery type and the RootQuery type */
  paKontuurs?: Maybe<RootQueryToPaKontuurConnection>;
  /** A 0bject */
  paKoostisained?: Maybe<PaKoostisained>;
  /** Connection between the RootQuery type and the RootQuery type */
  paKoostisaineds?: Maybe<RootQueryToPaKoostisainedConnection>;
  /** A 0bject */
  paLaadimisaeg?: Maybe<PaLaadimisaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  paLaadimisaegs?: Maybe<RootQueryToPaLaadimisaegConnection>;
  /** A 0bject */
  paMaterjal?: Maybe<PaMaterjal>;
  /** Connection between the RootQuery type and the RootQuery type */
  paMaterjals?: Maybe<RootQueryToPaMaterjalConnection>;
  /** A 0bject */
  paMuratasa?: Maybe<PaMuratasa>;
  /** Connection between the RootQuery type and the RootQuery type */
  paMuratasas?: Maybe<RootQueryToPaMuratasaConnection>;
  /** A 0bject */
  paOhutus?: Maybe<PaOhutus>;
  /** Connection between the RootQuery type and the RootQuery type */
  paOhutuses?: Maybe<RootQueryToPaOhutusConnection>;
  /** A 0bject */
  paPatareid?: Maybe<PaPatareid>;
  /** Connection between the RootQuery type and the RootQuery type */
  paPatareids?: Maybe<RootQueryToPaPatareidConnection>;
  /** A 0bject */
  paSuurus?: Maybe<PaSuurus>;
  /** Connection between the RootQuery type and the RootQuery type */
  paSuuruses?: Maybe<RootQueryToPaSuurusConnection>;
  /** A 0bject */
  paVariant?: Maybe<PaVariant>;
  /** Connection between the RootQuery type and the RootQuery type */
  paVariants?: Maybe<RootQueryToPaVariantConnection>;
  /** A 0bject */
  paVarv?: Maybe<PaVarv>;
  /** Connection between the RootQuery type and the RootQuery type */
  paVarvs?: Maybe<RootQueryToPaVarvConnection>;
  /** A 0bject */
  paVeekindlus?: Maybe<PaVeekindlus>;
  /** Connection between the RootQuery type and the RootQuery type */
  paVeekindluses?: Maybe<RootQueryToPaVeekindlusConnection>;
  /** A 0bject */
  page?: Maybe<Page>;
  /** A page object */
  pageBy?: Maybe<Page>;
  /** Connection between the RootQuery type and the RootQuery type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the RootQuery type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** A 0bject */
  post?: Maybe<Post>;
  /** A post object */
  postBy?: Maybe<Post>;
  /** Connection between the RootQuery type and the RootQuery type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** A product object */
  product?: Maybe<Product>;
  /** A product object */
  productBy?: Maybe<Product>;
  /** Connection between the RootQuery type and the RootQuery type */
  productCategories?: Maybe<RootQueryToProductCategoryConnection>;
  /** A 0bject */
  productCategory?: Maybe<ProductCategory>;
  /** A 0bject */
  productTag?: Maybe<ProductTag>;
  /** Connection between the RootQuery type and the RootQuery type */
  productTags?: Maybe<RootQueryToProductTagConnection>;
  /** A 0bject */
  productType?: Maybe<ProductType>;
  /** Connection between the RootQuery type and the RootQuery type */
  productTypes?: Maybe<RootQueryToProductTypeConnection>;
  /** A product variation object */
  productVariation?: Maybe<ProductVariation>;
  /** Connection between the RootQuery type and the RootQuery type */
  products?: Maybe<RootQueryToProductConnection>;

  readingSettings?: Maybe<ReadingSettings>;
  /** A refund object */
  refund?: Maybe<Refund>;
  /** A refund object */
  refundBy?: Maybe<Refund>;
  /** Connection between the RootQuery type and the RootQuery type */
  refunds?: Maybe<RootQueryToRefundConnection>;
  /** A 0bject */
  revision?: Maybe<Revision>;
  /** A revision object */
  revisionBy?: Maybe<Revision>;
  /** Connection between the RootQuery type and the RootQuery type */
  revisions?: Maybe<RootQueryToRevisionConnection>;
  /** A 0bject */
  shippingClass?: Maybe<ShippingClass>;
  /** Connection between the RootQuery type and the RootQuery type */
  shippingClasses?: Maybe<RootQueryToShippingClassConnection>;
  /** A shipping method object */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Connection between the RootQuery type and the RootQuery type */
  shippingMethods?: Maybe<RootQueryToShippingMethodConnection>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the RootQuery type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** A tax rate object */
  taxRate?: Maybe<TaxRate>;
  /** Connection between the RootQuery type and the RootQuery type */
  taxRates?: Maybe<RootQueryToTaxRateConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the RootQuery type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Connection between the RootQuery type and the RootQuery type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the RootQuery type */
  users?: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** A 0bject */
  visibleProduct?: Maybe<VisibleProduct>;
  /** Connection between the RootQuery type and the RootQuery type */
  visibleProducts?: Maybe<RootQueryToVisibleProductConnection>;

  writingSettings?: Maybe<WritingSettings>;
}

/** All of the registered settings */
export interface Settings {
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
export interface Cart {
  /** Connection between the Cart type and the Cart type */
  appliedCoupons?: Maybe<CartToCouponConnection>;
  /** Connection between the Cart type and the Cart type */
  contents?: Maybe<CartToCartItemConnection>;
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
  fees?: Maybe<(Maybe<CartFee>)[]>;
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
export interface CartToCouponConnection {
  /** Edges for the CartToCouponConnection connection */
  edges?: Maybe<(Maybe<CartToCouponConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Coupon>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CartToCouponConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Coupon>;
}

/** A coupon object */
export interface Coupon extends Node {
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
  discountType?: Maybe<DiscountTypeEnum>;
  /** Only customers with a matching email address can use the coupon */
  emailRestrictions?: Maybe<(Maybe<string>)[]>;
  /** Connection between the Coupon type and the Coupon type */
  excludedProductCategories?: Maybe<CouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Coupon type */
  excludedProducts?: Maybe<CouponToProductConnection>;
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
  productCategories?: Maybe<CouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Coupon type */
  products?: Maybe<CouponToProductConnection>;
  /** How many times the coupon has been used */
  usageCount?: Maybe<number>;
  /** Amount of times this coupon can be used globally */
  usageLimit?: Maybe<number>;
  /** Amount of times this coupon can be used by a customer */
  usageLimitPerUser?: Maybe<number>;
  /** Connection between the Coupon type and the Coupon type */
  usedBy?: Maybe<CouponToCustomerConnection>;
}

/** Connection between the Coupon type and the Coupon type */
export interface CouponToProductCategoryConnection {
  /** Edges for the CouponToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<CouponToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface CouponToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** The productCategory type */
export interface ProductCategory extends Node {
  /** The ancestors of the object */
  ancestors?: Maybe<(Maybe<ProductCategory>)[]>;
  /** Connection between the productCategory type and the productCategory type */
  children?: Maybe<ProductCategoryToProductCategoryConnection>;
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
  parent?: Maybe<ProductCategory>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productCategoryId?: Maybe<number>;
  /** Connection between the ProductCategory type and the ProductCategory type */
  products?: Maybe<ProductCategoryToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToProductCategoryConnection {
  /** Edges for the ProductCategoryToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<ProductCategoryToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface ProductCategoryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Information about pagination in a connection. */
export interface WpPageInfo {
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
export interface Taxonomy extends Node {
  /** A list of Post Types associated with the taxonomy */
  connectedPostTypeNames?: Maybe<(Maybe<string>)[]>;
  /** List of Post Types connected to the Taxonomy */
  connectedPostTypes?: Maybe<(Maybe<PostType>)[]>;
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
export interface PostType extends Node {
  /** Whether this content type should can be exported. */
  canExport?: Maybe<boolean>;
  /** List of Taxonomies connected to the Post Type */
  connectedTaxonomies?: Maybe<(Maybe<Taxonomy>)[]>;
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
  labels?: Maybe<PostTypeLabelDetails>;
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
export interface PostTypeLabelDetails {
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
export interface ProductCategoryToProductConnection {
  /** Edges for the ProductCategoryToProductConnection connection */
  edges?: Maybe<(Maybe<ProductCategoryToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** A product object */
export interface Product extends Node {
  /** Connection between the Product type and the Product type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<number>;
  /** Product backorders status */
  backorders?: Maybe<BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<boolean>;
  /** External product Buy button text */
  buttonText?: Maybe<string>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /** Connection between the Product type and the Product type */
  categories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the Product type */
  crossSell?: Maybe<ProductToProductConnection>;
  /** Date product created */
  date?: Maybe<string>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<string>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<string>;
  /** Connection between the Product type and the Product type */
  defaultAttributes?: Maybe<ProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<string>;
  /** Is downloadable? */
  downloadable?: Maybe<boolean>;
  /** Download expiry */
  downloadExpiry?: Maybe<number>;
  /** Download limit */
  downloadLimit?: Maybe<number>;
  /** Product downloads */
  downloads?: Maybe<(Maybe<ProductDownload>)[]>;
  /** External product url */
  externalUrl?: Maybe<string>;
  /** If the product is featured */
  featured?: Maybe<boolean>;
  /** Connection between the Product type and the Product type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the Product type */
  grouped?: Maybe<ProductToProductConnection>;
  /** Product&#039;s height */
  height?: Maybe<string>;
  /** The globally unique identifier for the product */
  id: string;
  /** Main image */
  image?: Maybe<MediaItem>;
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
  parent?: Maybe<Product>;
  /** Product&#039;s active price */
  price?: Maybe<string>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  productId?: Maybe<number>;
  /** Can product be purchased? */
  purchasable?: Maybe<boolean>;
  /** Purchase note */
  purchaseNote?: Maybe<string>;
  /** Product rating counts */
  ratingCount?: Maybe<RatingCounter>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<string>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
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
  stockStatus?: Maybe<StockStatusEnum>;
  /** Connection between the Product type and the Product type */
  tags?: Maybe<ProductToProductTagConnection>;
  /** Tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Number total of sales */
  totalSales?: Maybe<number>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToProductConnection>;
  /** Connection between the Product type and the Product type */
  variations?: Maybe<ProductToProductVariationConnection>;
  /** Is product virtual? */
  virtual?: Maybe<boolean>;
  /** Product&#039;s weight */
  weight?: Maybe<string>;
  /** Product&#039;s width */
  width?: Maybe<string>;
}

/** Connection between the Product type and the Product type */
export interface ProductToProductAttributeConnection {
  /** Edges for the ProductToProductAttributeConnection connection */
  edges?: Maybe<(Maybe<ProductToProductAttributeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductAttribute>;
}

/** A product attribute object */
export interface ProductAttribute {
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
export interface ProductToProductCategoryConnection {
  /** Edges for the ProductToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<ProductToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface ProductToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Connection between the Product type and the Product type */
export interface ProductToProductConnection {
  /** Edges for the ProductToProductConnection connection */
  edges?: Maybe<(Maybe<ProductToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the Product type and the Product type */
export interface ProductToVariationAttributeConnection {
  /** Edges for the ProductToVariationAttributeConnection connection */
  edges?: Maybe<(Maybe<ProductToVariationAttributeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<VariationAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** A product variation attribute object */
export interface VariationAttribute {
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  id?: Maybe<number>;
  /** Name of attribute */
  name?: Maybe<string>;
  /** Selected value of attribute */
  value?: Maybe<string>;
}

/** A product object */
export interface ProductDownload {
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
export interface ProductToMediaItemConnection {
  /** Edges for the ProductToMediaItemConnection connection */
  edges?: Maybe<(Maybe<ProductToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface ProductToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** The mediaItem type */
export interface MediaItem extends Node {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<string>;
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<PostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<User>;
  /** The caption for the resource */
  caption?: Maybe<string>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the mediaItem type and the mediaItem type */
  comments?: Maybe<MediaItemToCommentConnection>;
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
  editLast?: Maybe<User>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<EditLock>;
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
  mediaDetails?: Maybe<MediaDetails>;
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
  parent?: Maybe<PostObjectUnion>;
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
  terms?: Maybe<(Maybe<TermObjectUnion>)[]>;
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
export interface Post extends Node {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<PostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<User>;
  /** Connection between the post type and the post type */
  categories?: Maybe<PostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the post type and the post type */
  comments?: Maybe<PostToCommentConnection>;
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
  editLast?: Maybe<User>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The featured image for the object */
  featuredImage?: Maybe<MediaItem>;
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
  parent?: Maybe<PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  postId: number;
  /** Connection between the post type and the post type */
  revisions?: Maybe<PostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Connection between the post type and the post type */
  tags?: Maybe<PostToTagConnection>;
  /** Terms connected to the post */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the post */
  terms?: Maybe<(Maybe<TermObjectUnion>)[]>;
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
export interface User extends Node {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** This field is the id of the user. The id of the user matches WP_User-&gt;ID field and the value in the ID column for the &quot;users&quot; table in SQL. */
  capabilities?: Maybe<(Maybe<string>)[]>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<string>;
  /** Connection between the User type and the User type */
  comments?: Maybe<UserToCommentConnection>;
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
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<string>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<string>;
  /** Nickname of the user. */
  nickname?: Maybe<string>;
  /** Connection between the User type and the User type */
  pages?: Maybe<UserToPageConnection>;
  /** Connection between the User type and the User type */
  posts?: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<string>;
  /** Connection between the User type and the User type */
  revisions?: Maybe<UserToRevisionConnection>;
  /** Connection between the User type and the User type */
  roles?: Maybe<UserToUserRoleConnection>;
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
export interface Avatar {
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
export interface UserToCommentConnection {
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<(Maybe<UserToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** A Comment object */
export interface Comment extends Node {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<string>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  approved?: Maybe<boolean>;
  /** The author of the comment */
  author?: Maybe<CommentAuthorUnion>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<string>;
  /** Connection between the Comment type and the Comment type */
  children?: Maybe<CommentToCommentConnection>;
  /** The object the comment was added to */
  commentedOn?: Maybe<PostObjectUnion>;
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
  parent?: Maybe<Comment>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<string>;
}

/** A Comment Author object */
export interface CommentAuthor extends Node {
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
export interface CommentToCommentConnection {
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<(Maybe<CommentToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CommentToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Connection between the User type and the User type */
export interface UserToMediaItemConnection {
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<(Maybe<UserToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface UserToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** Connection between the User type and the User type */
export interface UserToPageConnection {
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<(Maybe<UserToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Page>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface UserToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** The page type */
export interface Page extends Node {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<PostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<User>;
  /** Connection between the page type and the page type */
  childPages?: Maybe<PageToPageConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<number>;
  /** Connection between the page type and the page type */
  comments?: Maybe<PageToCommentConnection>;
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
  editLast?: Maybe<User>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<string>;
  /** The excerpt of the post. */
  excerpt?: Maybe<string>;
  /** The featured image for the object */
  featuredImage?: Maybe<MediaItem>;
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
  parent?: Maybe<PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<(Maybe<string>)[]>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<string>;
  /** Connection between the page type and the page type */
  revisions?: Maybe<PageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<string>;
  /** The current status of the object */
  status?: Maybe<string>;
  /** Terms connected to the page */
  termNames?: Maybe<(Maybe<string>)[]>;
  /** Terms connected to the page */
  terms?: Maybe<(Maybe<TermObjectUnion>)[]>;
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
export interface PageToPageConnection {
  /** Edges for the PageToPageConnection connection */
  edges?: Maybe<(Maybe<PageToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Page>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface PageToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** Connection between the page type and the page type */
export interface PageToCommentConnection {
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<(Maybe<PageToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PageToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Info on whether the object is locked by another user editing it */
export interface EditLock {
  /** The time when the object was last edited */
  editTime?: Maybe<string>;
  /** The user that most recently edited the object */
  user?: Maybe<User>;
}

/** Connection between the page type and the page type */
export interface PageToRevisionConnection {
  /** Edges for the PageToRevisionConnection connection */
  edges?: Maybe<(Maybe<PageToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Revision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface PageToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Revision>;
}

/** The revision type */
export interface Revision extends Node {
  /** Ancestors of the object */
  ancestors?: Maybe<(Maybe<PostObjectUnion>)[]>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<User>;
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
  editLast?: Maybe<User>;
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editLock?: Maybe<EditLock>;
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
  parent?: Maybe<PostObjectUnion>;
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
  terms?: Maybe<(Maybe<TermObjectUnion>)[]>;
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
export interface Category extends Node {
  /** The ancestors of the object */
  ancestors?: Maybe<(Maybe<Category>)[]>;
  /** The id field matches the WP_Post-&gt;ID field. */
  categoryId?: Maybe<number>;
  /** Connection between the category type and the category type */
  children?: Maybe<CategoryToCategoryConnection>;
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
  parent?: Maybe<Category>;
  /** Connection between the category type and the category type */
  posts?: Maybe<CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the category type and the category type */
export interface CategoryToCategoryConnection {
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<(Maybe<CategoryToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Category>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface CategoryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Connection between the category type and the category type */
export interface CategoryToPostConnection {
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<(Maybe<CategoryToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Post>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface CategoryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** The tag type */
export interface Tag extends Node {
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
  posts?: Maybe<TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The id field matches the WP_Post-&gt;ID field. */
  tagId?: Maybe<number>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the tag type and the tag type */
export interface TagToPostConnection {
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<(Maybe<TagToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Post>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface TagToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** The productType type */
export interface ProductType extends Node {
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
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** The visibleProduct type */
export interface VisibleProduct extends Node {
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
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** The id field matches the WP_Post-&gt;ID field. */
  visibleProductId?: Maybe<number>;
}

/** The productTag type */
export interface ProductTag extends Node {
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
  products?: Maybe<ProductTagToProductConnection>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productTagId?: Maybe<number>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** Connection between the ProductTag type and the ProductTag type */
export interface ProductTagToProductConnection {
  /** Edges for the ProductTagToProductConnection connection */
  edges?: Maybe<(Maybe<ProductTagToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTagToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** The shippingClass type */
export interface ShippingClass extends Node {
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
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
}

/** The paHind type */
export interface PaHind extends Node {
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
  products?: Maybe<PaHindToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaHind type and the PaHind type */
  variations?: Maybe<PaHindToProductVariationConnection>;
}

/** Connection between the PaHind type and the PaHind type */
export interface PaHindToProductConnection {
  /** Edges for the PaHindToProductConnection connection */
  edges?: Maybe<(Maybe<PaHindToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaHindToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaHind type and the PaHind type */
export interface PaHindToProductVariationConnection {
  /** Edges for the PaHindToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaHindToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaHindToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** A product variation object */
export interface ProductVariation extends Node {
  /** Connection between the ProductVariation type and the ProductVariation type */
  attributes?: Maybe<ProductVariationToVariationAttributeConnection>;
  /** Product variation backorders */
  backorders?: Maybe<BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<boolean>;
  /** Product variation catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
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
  downloads?: Maybe<(Maybe<ProductDownload>)[]>;
  /** Does product variation have any visible attributes */
  hasAttributes?: Maybe<boolean>;
  /** Product variation height */
  height?: Maybe<string>;
  /** The globally unique identifier for the product variation */
  id: string;
  /** Product variation main image */
  image?: Maybe<MediaItem>;
  /** Product variation length */
  length?: Maybe<string>;
  /** if/how product variation stock is managed */
  manageStock?: Maybe<ManageStockEnum>;
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
  stockStatus?: Maybe<StockStatusEnum>;
  /** Product variation tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
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
export interface ProductVariationToVariationAttributeConnection {
  /** Edges for the ProductVariationToVariationAttributeConnection connection */
  edges?: Maybe<(Maybe<ProductVariationToVariationAttributeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<VariationAttribute>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** The paHulk type */
export interface PaHulk extends Node {
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
  products?: Maybe<PaHulkToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaHulk type and the PaHulk type */
  variations?: Maybe<PaHulkToProductVariationConnection>;
}

/** Connection between the PaHulk type and the PaHulk type */
export interface PaHulkToProductConnection {
  /** Edges for the PaHulkToProductConnection connection */
  edges?: Maybe<(Maybe<PaHulkToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaHulkToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaHulk type and the PaHulk type */
export interface PaHulkToProductVariationConnection {
  /** Edges for the PaHulkToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaHulkToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaHulkToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paKasutusaeg type */
export interface PaKasutusaeg extends Node {
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
  products?: Maybe<PaKasutusaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
  variations?: Maybe<PaKasutusaegToProductVariationConnection>;
}

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export interface PaKasutusaegToProductConnection {
  /** Edges for the PaKasutusaegToProductConnection connection */
  edges?: Maybe<(Maybe<PaKasutusaegToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKasutusaegToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export interface PaKasutusaegToProductVariationConnection {
  /** Edges for the PaKasutusaegToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaKasutusaegToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKasutusaegToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paKogus type */
export interface PaKogus extends Node {
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
  products?: Maybe<PaKogusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKogus type and the PaKogus type */
  variations?: Maybe<PaKogusToProductVariationConnection>;
}

/** Connection between the PaKogus type and the PaKogus type */
export interface PaKogusToProductConnection {
  /** Edges for the PaKogusToProductConnection connection */
  edges?: Maybe<(Maybe<PaKogusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKogusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaKogus type and the PaKogus type */
export interface PaKogusToProductVariationConnection {
  /** Edges for the PaKogusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaKogusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKogusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paKontuur type */
export interface PaKontuur extends Node {
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
  products?: Maybe<PaKontuurToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKontuur type and the PaKontuur type */
  variations?: Maybe<PaKontuurToProductVariationConnection>;
}

/** Connection between the PaKontuur type and the PaKontuur type */
export interface PaKontuurToProductConnection {
  /** Edges for the PaKontuurToProductConnection connection */
  edges?: Maybe<(Maybe<PaKontuurToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKontuurToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaKontuur type and the PaKontuur type */
export interface PaKontuurToProductVariationConnection {
  /** Edges for the PaKontuurToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaKontuurToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKontuurToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paKoostisained type */
export interface PaKoostisained extends Node {
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
  products?: Maybe<PaKoostisainedToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaKoostisained type and the PaKoostisained type */
  variations?: Maybe<PaKoostisainedToProductVariationConnection>;
}

/** Connection between the PaKoostisained type and the PaKoostisained type */
export interface PaKoostisainedToProductConnection {
  /** Edges for the PaKoostisainedToProductConnection connection */
  edges?: Maybe<(Maybe<PaKoostisainedToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKoostisainedToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaKoostisained type and the PaKoostisained type */
export interface PaKoostisainedToProductVariationConnection {
  /** Edges for the PaKoostisainedToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaKoostisainedToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaKoostisainedToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paLaadimisaeg type */
export interface PaLaadimisaeg extends Node {
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
  products?: Maybe<PaLaadimisaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
  variations?: Maybe<PaLaadimisaegToProductVariationConnection>;
}

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export interface PaLaadimisaegToProductConnection {
  /** Edges for the PaLaadimisaegToProductConnection connection */
  edges?: Maybe<(Maybe<PaLaadimisaegToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaLaadimisaegToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export interface PaLaadimisaegToProductVariationConnection {
  /** Edges for the PaLaadimisaegToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaLaadimisaegToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaLaadimisaegToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paMaterjal type */
export interface PaMaterjal extends Node {
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
  products?: Maybe<PaMaterjalToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaMaterjal type and the PaMaterjal type */
  variations?: Maybe<PaMaterjalToProductVariationConnection>;
}

/** Connection between the PaMaterjal type and the PaMaterjal type */
export interface PaMaterjalToProductConnection {
  /** Edges for the PaMaterjalToProductConnection connection */
  edges?: Maybe<(Maybe<PaMaterjalToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaMaterjalToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaMaterjal type and the PaMaterjal type */
export interface PaMaterjalToProductVariationConnection {
  /** Edges for the PaMaterjalToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaMaterjalToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaMaterjalToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paMuratasa type */
export interface PaMuratasa extends Node {
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
  products?: Maybe<PaMuratasaToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaMuratasa type and the PaMuratasa type */
  variations?: Maybe<PaMuratasaToProductVariationConnection>;
}

/** Connection between the PaMuratasa type and the PaMuratasa type */
export interface PaMuratasaToProductConnection {
  /** Edges for the PaMuratasaToProductConnection connection */
  edges?: Maybe<(Maybe<PaMuratasaToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaMuratasaToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaMuratasa type and the PaMuratasa type */
export interface PaMuratasaToProductVariationConnection {
  /** Edges for the PaMuratasaToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaMuratasaToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaMuratasaToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paOhutus type */
export interface PaOhutus extends Node {
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
  products?: Maybe<PaOhutusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaOhutus type and the PaOhutus type */
  variations?: Maybe<PaOhutusToProductVariationConnection>;
}

/** Connection between the PaOhutus type and the PaOhutus type */
export interface PaOhutusToProductConnection {
  /** Edges for the PaOhutusToProductConnection connection */
  edges?: Maybe<(Maybe<PaOhutusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaOhutusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaOhutus type and the PaOhutus type */
export interface PaOhutusToProductVariationConnection {
  /** Edges for the PaOhutusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaOhutusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaOhutusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paPatareid type */
export interface PaPatareid extends Node {
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
  products?: Maybe<PaPatareidToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaPatareid type and the PaPatareid type */
  variations?: Maybe<PaPatareidToProductVariationConnection>;
}

/** Connection between the PaPatareid type and the PaPatareid type */
export interface PaPatareidToProductConnection {
  /** Edges for the PaPatareidToProductConnection connection */
  edges?: Maybe<(Maybe<PaPatareidToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaPatareidToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaPatareid type and the PaPatareid type */
export interface PaPatareidToProductVariationConnection {
  /** Edges for the PaPatareidToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaPatareidToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaPatareidToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paSuurus type */
export interface PaSuurus extends Node {
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
  products?: Maybe<PaSuurusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaSuurus type and the PaSuurus type */
  variations?: Maybe<PaSuurusToProductVariationConnection>;
}

/** Connection between the PaSuurus type and the PaSuurus type */
export interface PaSuurusToProductConnection {
  /** Edges for the PaSuurusToProductConnection connection */
  edges?: Maybe<(Maybe<PaSuurusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaSuurusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaSuurus type and the PaSuurus type */
export interface PaSuurusToProductVariationConnection {
  /** Edges for the PaSuurusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaSuurusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaSuurusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paVariant type */
export interface PaVariant extends Node {
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
  products?: Maybe<PaVariantToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVariant type and the PaVariant type */
  variations?: Maybe<PaVariantToProductVariationConnection>;
}

/** Connection between the PaVariant type and the PaVariant type */
export interface PaVariantToProductConnection {
  /** Edges for the PaVariantToProductConnection connection */
  edges?: Maybe<(Maybe<PaVariantToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVariantToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaVariant type and the PaVariant type */
export interface PaVariantToProductVariationConnection {
  /** Edges for the PaVariantToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaVariantToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVariantToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paVarv type */
export interface PaVarv extends Node {
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
  products?: Maybe<PaVarvToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVarv type and the PaVarv type */
  variations?: Maybe<PaVarvToProductVariationConnection>;
}

/** Connection between the PaVarv type and the PaVarv type */
export interface PaVarvToProductConnection {
  /** Edges for the PaVarvToProductConnection connection */
  edges?: Maybe<(Maybe<PaVarvToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVarvToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaVarv type and the PaVarv type */
export interface PaVarvToProductVariationConnection {
  /** Edges for the PaVarvToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaVarvToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVarvToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** The paVeekindlus type */
export interface PaVeekindlus extends Node {
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
  products?: Maybe<PaVeekindlusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<string>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<number>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<number>;
  /** Connection between the PaVeekindlus type and the PaVeekindlus type */
  variations?: Maybe<PaVeekindlusToProductVariationConnection>;
}

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export interface PaVeekindlusToProductConnection {
  /** Edges for the PaVeekindlusToProductConnection connection */
  edges?: Maybe<(Maybe<PaVeekindlusToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVeekindlusToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export interface PaVeekindlusToProductVariationConnection {
  /** Edges for the PaVeekindlusToProductVariationConnection connection */
  edges?: Maybe<(Maybe<PaVeekindlusToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PaVeekindlusToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** Connection between the User type and the User type */
export interface UserToPostConnection {
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<(Maybe<UserToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Post>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface UserToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Connection between the User type and the User type */
export interface UserToRevisionConnection {
  /** Edges for the UserToRevisionConnection connection */
  edges?: Maybe<(Maybe<UserToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Revision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface UserToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Revision>;
}

/** Connection between the User type and the User type */
export interface UserToUserRoleConnection {
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<(Maybe<UserToUserRoleConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<UserRole>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<UserRole>;
}

/** A user role object */
export interface UserRole {
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
export interface PostToCategoryConnection {
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<(Maybe<PostToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Category>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface PostToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Connection between the post type and the post type */
export interface PostToCommentConnection {
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<(Maybe<PostToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Connection between the post type and the post type */
export interface PostToRevisionConnection {
  /** Edges for the PostToRevisionConnection connection */
  edges?: Maybe<(Maybe<PostToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Revision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface PostToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Revision>;
}

/** Connection between the post type and the post type */
export interface PostToTagConnection {
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<(Maybe<PostToTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Tag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface PostToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Tag>;
}

/** Connection between the mediaItem type and the mediaItem type */
export interface MediaItemToCommentConnection {
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<(Maybe<MediaItemToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MediaItemToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** File details for a Media Item */
export interface MediaDetails {
  /** The height of the mediaItem */
  file?: Maybe<string>;
  /** The height of the mediaItem */
  height?: Maybe<number>;

  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<(Maybe<MediaSize>)[]>;
  /** The width of the mediaItem */
  width?: Maybe<number>;
}

/** Meta connected to a MediaItem */
export interface MediaItemMeta {
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
export interface MediaSize {
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
export interface RatingCounter {
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
export interface ProductToProductTagConnection {
  /** Edges for the ProductToProductTagConnection connection */
  edges?: Maybe<(Maybe<ProductToProductTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface ProductToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductTag>;
}

/** Connection between the Product type and the Product type */
export interface ProductToProductVariationConnection {
  /** Edges for the ProductToProductVariationConnection connection */
  edges?: Maybe<(Maybe<ProductToProductVariationConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductVariation>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** Connection between the Coupon type and the Coupon type */
export interface CouponToProductConnection {
  /** Edges for the CouponToProductConnection connection */
  edges?: Maybe<(Maybe<CouponToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Connection between the Coupon type and the Coupon type */
export interface CouponToCustomerConnection {
  /** Edges for the CouponToCustomerConnection connection */
  edges?: Maybe<(Maybe<CouponToCustomerConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Customer>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Customer>;
}

/** A customer object */
export interface Customer extends Node {
  /** Return the date customer billing address properties */
  billing?: Maybe<CustomerAddress>;
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
  lastOrder?: Maybe<Order>;
  /** Return the date customer was last updated */
  modified?: Maybe<string>;
  /** Return the number of orders this customer has. */
  orderCount?: Maybe<number>;
  /** Connection between the Customer type and the Customer type */
  orders?: Maybe<CustomerToOrderConnection>;
  /** Connection between the Customer type and the Customer type */
  refunds?: Maybe<CustomerToRefundConnection>;
  /** Return the customer&#039;s user role. */
  role?: Maybe<string>;
  /** Return the date customer shipping address properties */
  shipping?: Maybe<CustomerAddress>;
  /** Return how much money this customer has spent. */
  totalSpent?: Maybe<number>;
  /** Return the customer&#039;s username. */
  username?: Maybe<string>;
}

/** A customer address object */
export interface CustomerAddress {
  /** Address 1 */
  address1?: Maybe<string>;
  /** Address 2 */
  address2?: Maybe<string>;
  /** City */
  city?: Maybe<string>;
  /** Company */
  company?: Maybe<string>;
  /** Country */
  country?: Maybe<CountriesEnum>;
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
export interface Order extends Node {
  /** Order billing properties */
  billing?: Maybe<CustomerAddress>;
  /** Cart hash */
  cartHash?: Maybe<string>;
  /** Cart tax amount */
  cartTax?: Maybe<number>;
  /** Connection between the Order type and the Order type */
  couponLines?: Maybe<OrderToCouponLineConnection>;
  /** How order was created */
  createdVia?: Maybe<string>;
  /** Order currency */
  currency?: Maybe<string>;
  /** Order customer */
  customer?: Maybe<Customer>;
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
  downloadableItems?: Maybe<(Maybe<ProductDownload>)[]>;
  /** Connection between the Order type and the Order type */
  feeLines?: Maybe<OrderToFeeLineConnection>;
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
  lineItems?: Maybe<OrderToLineItemConnection>;
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
  parent?: Maybe<Order>;
  /** Payment method */
  paymentMethod?: Maybe<string>;
  /** Payment method title */
  paymentMethodTitle?: Maybe<string>;
  /** Prices include taxes? */
  pricesIncludeTax?: Maybe<boolean>;
  /** Connection between the Order type and the Order type */
  refunds?: Maybe<OrderToRefundConnection>;
  /** Order shipping properties */
  shipping?: Maybe<CustomerAddress>;
  /** Connection between the Order type and the Order type */
  shippingLines?: Maybe<OrderToShippingLineConnection>;
  /** Order customer */
  shippingAddressMapUrl?: Maybe<string>;
  /** Shipping tax amount */
  shippingTax?: Maybe<number>;
  /** Shipping total amount */
  shippingTotal?: Maybe<number>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order subtotal */
  subtotal?: Maybe<number>;
  /** Connection between the Order type and the Order type */
  taxLines?: Maybe<OrderToTaxLineConnection>;
  /** Order grand total */
  total?: Maybe<number>;
  /** Order taxes */
  totalTax?: Maybe<number>;
  /** Transaction ID */
  transactionId?: Maybe<string>;
}

/** Connection between the Order type and the Order type */
export interface OrderToCouponLineConnection {
  /** Edges for the OrderToCouponLineConnection connection */
  edges?: Maybe<(Maybe<OrderToCouponLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<CouponLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToCouponLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<CouponLine>;
}

/** a coupon line object */
export interface CouponLine {
  /** Line&#039;s Coupon code */
  code?: Maybe<string>;
  /** Line&#039;s Coupon */
  coupon?: Maybe<Coupon>;
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
export interface OrderToFeeLineConnection {
  /** Edges for the OrderToFeeLineConnection connection */
  edges?: Maybe<(Maybe<OrderToFeeLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<FeeLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToFeeLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<FeeLine>;
}

/** a fee line object */
export interface FeeLine {
  /** Fee amount */
  amount?: Maybe<string>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** Fee name */
  name?: Maybe<string>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Line tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<(Maybe<OrderItemTax>)[]>;
  /** Tax status of fee */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line total (after discounts) */
  total?: Maybe<string>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<string>;
}

/** Order item tax statement */
export interface OrderItemTax {
  /** Amount taxed */
  amount?: Maybe<number>;
  /** Subtotal */
  subtotal?: Maybe<number>;
  /** Tax line connected to this statement */
  taxLine?: Maybe<TaxLine>;
  /** Order item ID for tax line connected to this statement */
  taxLineId: number;
  /** Total */
  total?: Maybe<number>;
}

/** a tax line object */
export interface TaxLine {
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
  taxRate?: Maybe<TaxRate>;
  /** Tax total (not including shipping taxes) */
  taxTotal?: Maybe<string>;
}

/** A Tax rate object */
export interface TaxRate extends Node {
  /** City name. */
  city?: Maybe<(Maybe<string>)[]>;
  /** Tax class. Default is standard. */
  class?: Maybe<TaxClassEnum>;
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
export interface OrderToLineItemConnection {
  /** Edges for the OrderToLineItemConnection connection */
  edges?: Maybe<(Maybe<OrderToLineItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<LineItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<LineItem>;
}

/** a line item object */
export interface LineItem {
  /** Line item&#039;s taxes */
  itemDownloads?: Maybe<(Maybe<ProductDownload>)[]>;
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Line item&#039;s product object */
  product?: Maybe<Product>;
  /** Line item&#039;s product ID */
  productId?: Maybe<number>;
  /** Line item&#039;s product quantity */
  quantity?: Maybe<number>;
  /** Line item&#039;s subtotal */
  subtotal?: Maybe<string>;
  /** Line item&#039;s subtotal tax */
  subtotalTax?: Maybe<string>;
  /** Line item&#039;s tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line item&#039;s taxes */
  taxes?: Maybe<(Maybe<OrderItemTax>)[]>;
  /** Line item&#039;s taxes */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line item&#039;s total */
  total?: Maybe<string>;
  /** Line item&#039;s total tax */
  totalTax?: Maybe<string>;
  /** Line item&#039;s product variation object */
  variation?: Maybe<ProductVariation>;
  /** Line item&#039;s product variation ID */
  variationId?: Maybe<number>;
}

/** Connection between the Order type and the Order type */
export interface OrderToRefundConnection {
  /** Edges for the OrderToRefundConnection connection */
  edges?: Maybe<(Maybe<OrderToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Refund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** A refund object */
export interface Refund extends Node {
  /** Refunded amount */
  amount?: Maybe<number>;
  /** The globally unique identifier for the refund */
  id: string;
  /** Connection between the Refund type and the Refund type */
  lineItems?: Maybe<RefundToLineItemConnection>;
  /** Reason for refund */
  reason?: Maybe<string>;
  /** User who completed the refund */
  refundedBy?: Maybe<User>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  refundId?: Maybe<number>;
  /** A title for the new post type */
  title?: Maybe<string>;
}

/** Connection between the Refund type and the Refund type */
export interface RefundToLineItemConnection {
  /** Edges for the RefundToLineItemConnection connection */
  edges?: Maybe<(Maybe<RefundToLineItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<LineItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RefundToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<LineItem>;
}

/** Connection between the Order type and the Order type */
export interface OrderToShippingLineConnection {
  /** Edges for the OrderToShippingLineConnection connection */
  edges?: Maybe<(Maybe<OrderToShippingLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ShippingLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToShippingLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingLine>;
}

/** a shipping line object */
export interface ShippingLine {
  /** The Id of the order item. */
  itemId?: Maybe<number>;
  /** Shipping Line&#039;s shipping method name */
  methodTitle?: Maybe<string>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<number>;
  /** Shipping Line&#039;s shipping method */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Line tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<(Maybe<OrderItemTax>)[]>;
  /** Line total (after discounts) */
  total?: Maybe<string>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<string>;
}

/** A shipping method object */
export interface ShippingMethod extends Node {
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
export interface OrderToTaxLineConnection {
  /** Edges for the OrderToTaxLineConnection connection */
  edges?: Maybe<(Maybe<OrderToTaxLineConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<TaxLine>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToTaxLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<TaxLine>;
}

/** Connection between the Customer type and the Customer type */
export interface CustomerToOrderConnection {
  /** Edges for the CustomerToOrderConnection connection */
  edges?: Maybe<(Maybe<CustomerToOrderConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Order>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Order>;
}

/** Connection between the Customer type and the Customer type */
export interface CustomerToRefundConnection {
  /** Edges for the CustomerToRefundConnection connection */
  edges?: Maybe<(Maybe<CustomerToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Refund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** Connection between the Cart type and the Cart type */
export interface CartToCartItemConnection {
  /** Edges for the CartToCartItemConnection connection */
  edges?: Maybe<(Maybe<CartToCartItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<CartItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CartToCartItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<CartItem>;
}

/** A item in the cart */
export interface CartItem {
  /** CartItem ID */
  key: string;
  /** A product in the cart */
  product?: Maybe<Product>;
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
  variation?: Maybe<ProductVariation>;
}

/** An additional fee */
export interface CartFee {
  /** Fee amount */
  amount?: Maybe<number>;
  /** Fee ID */
  id: string;
  /** Fee name */
  name: string;
  /** Is fee taxable? */
  taxable?: Maybe<boolean>;
  /** Fee tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Fee total */
  total?: Maybe<number>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToCategoryConnection {
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<(Maybe<RootQueryToCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Category>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToCommentConnection {
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<(Maybe<RootQueryToCommentConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Comment>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToCouponConnection {
  /** Edges for the RootQueryToCouponConnection connection */
  edges?: Maybe<(Maybe<RootQueryToCouponConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Coupon>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCouponConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Coupon>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToCustomerConnection {
  /** Edges for the RootQueryToCustomerConnection connection */
  edges?: Maybe<(Maybe<RootQueryToCustomerConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Customer>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Customer>;
}

/** The discussion setting type */
export interface DiscussionSettings {
  /** Luba uute artiklite kommenteerimist */
  defaultCommentStatus?: Maybe<string>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  defaultPingStatus?: Maybe<string>;
}

/** The general setting type */
export interface GeneralSettings {
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
export interface RootQueryToMediaItemConnection {
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<(Maybe<RootQueryToMediaItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MediaItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface RootQueryToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface Menu {
  /** The number of items in the menu */
  count?: Maybe<number>;
  /** ID of the nav menu. */
  id: string;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<boolean>;
  /** Connection between the Menu type and the Menu type */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /** WP ID of the nav menu. */
  menuId?: Maybe<number>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<string>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<string>;
}

/** Connection between the Menu type and the Menu type */
export interface MenuToMenuItemConnection {
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<(Maybe<MenuToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItem {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /** The object connected to this menu item. */
  connectedObject?: Maybe<MenuItemObjectUnion>;
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
export interface MenuItemToMenuItemConnection {
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<(Maybe<MenuItemToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuItemToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToMenuItemConnection {
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<(Maybe<RootQueryToMenuItemConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<MenuItem>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToMenuConnection {
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<(Maybe<RootQueryToMenuConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Menu>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Menu>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToOrderConnection {
  /** Edges for the RootQueryToOrderConnection connection */
  edges?: Maybe<(Maybe<RootQueryToOrderConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Order>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Order>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaHindConnection {
  /** Edges for the RootQueryToPaHindConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaHindConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaHind>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaHindConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaHind>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaHulkConnection {
  /** Edges for the RootQueryToPaHulkConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaHulkConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaHulk>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaHulkConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaHulk>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaKasutusaegConnection {
  /** Edges for the RootQueryToPaKasutusaegConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaKasutusaegConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaKasutusaeg>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaKasutusaegConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaKasutusaeg>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaKogusConnection {
  /** Edges for the RootQueryToPaKogusConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaKogusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaKogus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaKogusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaKogus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaKontuurConnection {
  /** Edges for the RootQueryToPaKontuurConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaKontuurConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaKontuur>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaKontuurConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaKontuur>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaKoostisainedConnection {
  /** Edges for the RootQueryToPaKoostisainedConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaKoostisainedConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaKoostisained>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaKoostisainedConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaKoostisained>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaLaadimisaegConnection {
  /** Edges for the RootQueryToPaLaadimisaegConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaLaadimisaegConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaLaadimisaeg>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaLaadimisaegConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaLaadimisaeg>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaMaterjalConnection {
  /** Edges for the RootQueryToPaMaterjalConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaMaterjalConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaMaterjal>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaMaterjalConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaMaterjal>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaMuratasaConnection {
  /** Edges for the RootQueryToPaMuratasaConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaMuratasaConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaMuratasa>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaMuratasaConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaMuratasa>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaOhutusConnection {
  /** Edges for the RootQueryToPaOhutusConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaOhutusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaOhutus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaOhutusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaOhutus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaPatareidConnection {
  /** Edges for the RootQueryToPaPatareidConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaPatareidConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaPatareid>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaPatareidConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaPatareid>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaSuurusConnection {
  /** Edges for the RootQueryToPaSuurusConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaSuurusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaSuurus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaSuurusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaSuurus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaVariantConnection {
  /** Edges for the RootQueryToPaVariantConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaVariantConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaVariant>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaVariantConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaVariant>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaVarvConnection {
  /** Edges for the RootQueryToPaVarvConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaVarvConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaVarv>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaVarvConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaVarv>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPaVeekindlusConnection {
  /** Edges for the RootQueryToPaVeekindlusConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPaVeekindlusConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<PaVeekindlus>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToPaVeekindlusConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<PaVeekindlus>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPageConnection {
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPageConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Page>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface RootQueryToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** An plugin object */
export interface Plugin extends Node {
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
export interface RootQueryToPluginConnection {
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPluginConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Plugin>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPluginConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Plugin>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToPostConnection {
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<(Maybe<RootQueryToPostConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Post>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface RootQueryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToProductCategoryConnection {
  /** Edges for the RootQueryToProductCategoryConnection connection */
  edges?: Maybe<(Maybe<RootQueryToProductCategoryConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductCategory>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToProductTagConnection {
  /** Edges for the RootQueryToProductTagConnection connection */
  edges?: Maybe<(Maybe<RootQueryToProductTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductTag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductTag>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToProductTypeConnection {
  /** Edges for the RootQueryToProductTypeConnection connection */
  edges?: Maybe<(Maybe<RootQueryToProductTypeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ProductType>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToProductTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToProductConnection {
  /** Edges for the RootQueryToProductConnection connection */
  edges?: Maybe<(Maybe<RootQueryToProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Product>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** The reading setting type */
export interface ReadingSettings {
  /** lehekülge korraga. */
  postsPerPage?: Maybe<number>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToRefundConnection {
  /** Edges for the RootQueryToRefundConnection connection */
  edges?: Maybe<(Maybe<RootQueryToRefundConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Refund>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToRevisionConnection {
  /** Edges for the RootQueryToRevisionConnection connection */
  edges?: Maybe<(Maybe<RootQueryToRevisionConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Revision>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<PostType>;
}

/** An edge in a connection */
export interface RootQueryToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Revision>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToShippingClassConnection {
  /** Edges for the RootQueryToShippingClassConnection connection */
  edges?: Maybe<(Maybe<RootQueryToShippingClassConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ShippingClass>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToShippingClassConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingClass>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToShippingMethodConnection {
  /** Edges for the RootQueryToShippingMethodConnection connection */
  edges?: Maybe<(Maybe<RootQueryToShippingMethodConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<ShippingMethod>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToShippingMethodConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingMethod>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToTagConnection {
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<(Maybe<RootQueryToTagConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Tag>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Tag>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToTaxRateConnection {
  /** Edges for the RootQueryToTaxRateConnection connection */
  edges?: Maybe<(Maybe<RootQueryToTaxRateConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<TaxRate>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTaxRateConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<TaxRate>;
}

/** A theme object */
export interface Theme extends Node {
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
export interface RootQueryToThemeConnection {
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<(Maybe<RootQueryToThemeConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<Theme>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToThemeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<Theme>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToUserRoleConnection {
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<(Maybe<RootQueryToUserRoleConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<UserRole>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<UserRole>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToUserConnection {
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<(Maybe<RootQueryToUserConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<User>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<User>;
}

/** Connection between the RootQuery type and the RootQuery type */
export interface RootQueryToVisibleProductConnection {
  /** Edges for the RootQueryToVisibleProductConnection connection */
  edges?: Maybe<(Maybe<RootQueryToVisibleProductConnectionEdge>)[]>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<(Maybe<VisibleProduct>)[]>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<Taxonomy>;
}

/** An edge in a connection */
export interface RootQueryToVisibleProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<string>;
  /** The item at the end of the edge */
  node?: Maybe<VisibleProduct>;
}

/** The writing setting type */
export interface WritingSettings {
  /** Vaikimisi rubriik. */
  defaultCategory?: Maybe<number>;
  /** Vaikimisi postitusevorming */
  defaultPostFormat?: Maybe<string>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  useSmilies?: Maybe<boolean>;
}

export interface Mutation {
  /** The payload for the UpdateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The payload for the UpdatePaHind mutation */
  updatePaHind?: Maybe<UpdatePaHindPayload>;
  /** The payload for the UpdatePaHulk mutation */
  updatePaHulk?: Maybe<UpdatePaHulkPayload>;
  /** The payload for the UpdatePaKasutusaeg mutation */
  updatePaKasutusaeg?: Maybe<UpdatePaKasutusaegPayload>;
  /** The payload for the UpdatePaKogus mutation */
  updatePaKogus?: Maybe<UpdatePaKogusPayload>;
  /** The payload for the UpdatePaKontuur mutation */
  updatePaKontuur?: Maybe<UpdatePaKontuurPayload>;
  /** The payload for the UpdatePaKoostisained mutation */
  updatePaKoostisained?: Maybe<UpdatePaKoostisainedPayload>;
  /** The payload for the UpdatePaLaadimisaeg mutation */
  updatePaLaadimisaeg?: Maybe<UpdatePaLaadimisaegPayload>;
  /** The payload for the UpdatePaMaterjal mutation */
  updatePaMaterjal?: Maybe<UpdatePaMaterjalPayload>;
  /** The payload for the UpdatePaMuratasa mutation */
  updatePaMuratasa?: Maybe<UpdatePaMuratasaPayload>;
  /** The payload for the UpdatePaOhutus mutation */
  updatePaOhutus?: Maybe<UpdatePaOhutusPayload>;
  /** The payload for the UpdatePaPatareid mutation */
  updatePaPatareid?: Maybe<UpdatePaPatareidPayload>;
  /** The payload for the UpdatePaSuurus mutation */
  updatePaSuurus?: Maybe<UpdatePaSuurusPayload>;
  /** The payload for the UpdatePaVariant mutation */
  updatePaVariant?: Maybe<UpdatePaVariantPayload>;
  /** The payload for the UpdatePaVarv mutation */
  updatePaVarv?: Maybe<UpdatePaVarvPayload>;
  /** The payload for the UpdatePaVeekindlus mutation */
  updatePaVeekindlus?: Maybe<UpdatePaVeekindlusPayload>;
  /** The payload for the UpdateProductCategory mutation */
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
  /** The payload for the UpdateProductTag mutation */
  updateProductTag?: Maybe<UpdateProductTagPayload>;
  /** The payload for the UpdateProductType mutation */
  updateProductType?: Maybe<UpdateProductTypePayload>;
  /** The payload for the UpdateShippingClass mutation */
  updateShippingClass?: Maybe<UpdateShippingClassPayload>;
  /** The payload for the UpdateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The payload for the UpdateVisibleProduct mutation */
  updateVisibleProduct?: Maybe<UpdateVisibleProductPayload>;
  /** The payload for the addFee mutation */
  addFee?: Maybe<AddFeePayload>;
  /** The payload for the addToCart mutation */
  addToCart?: Maybe<AddToCartPayload>;
  /** The payload for the applyCoupon mutation */
  applyCoupon?: Maybe<ApplyCouponPayload>;
  /** The payload for the createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The payload for the createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The payload for the createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The payload for the createPaHind mutation */
  createPaHind?: Maybe<CreatePaHindPayload>;
  /** The payload for the createPaHulk mutation */
  createPaHulk?: Maybe<CreatePaHulkPayload>;
  /** The payload for the createPaKasutusaeg mutation */
  createPaKasutusaeg?: Maybe<CreatePaKasutusaegPayload>;
  /** The payload for the createPaKogus mutation */
  createPaKogus?: Maybe<CreatePaKogusPayload>;
  /** The payload for the createPaKontuur mutation */
  createPaKontuur?: Maybe<CreatePaKontuurPayload>;
  /** The payload for the createPaKoostisained mutation */
  createPaKoostisained?: Maybe<CreatePaKoostisainedPayload>;
  /** The payload for the createPaLaadimisaeg mutation */
  createPaLaadimisaeg?: Maybe<CreatePaLaadimisaegPayload>;
  /** The payload for the createPaMaterjal mutation */
  createPaMaterjal?: Maybe<CreatePaMaterjalPayload>;
  /** The payload for the createPaMuratasa mutation */
  createPaMuratasa?: Maybe<CreatePaMuratasaPayload>;
  /** The payload for the createPaOhutus mutation */
  createPaOhutus?: Maybe<CreatePaOhutusPayload>;
  /** The payload for the createPaPatareid mutation */
  createPaPatareid?: Maybe<CreatePaPatareidPayload>;
  /** The payload for the createPaSuurus mutation */
  createPaSuurus?: Maybe<CreatePaSuurusPayload>;
  /** The payload for the createPaVariant mutation */
  createPaVariant?: Maybe<CreatePaVariantPayload>;
  /** The payload for the createPaVarv mutation */
  createPaVarv?: Maybe<CreatePaVarvPayload>;
  /** The payload for the createPaVeekindlus mutation */
  createPaVeekindlus?: Maybe<CreatePaVeekindlusPayload>;
  /** The payload for the createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The payload for the createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The payload for the createProductCategory mutation */
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  /** The payload for the createProductTag mutation */
  createProductTag?: Maybe<CreateProductTagPayload>;
  /** The payload for the createProductType mutation */
  createProductType?: Maybe<CreateProductTypePayload>;
  /** The payload for the createShippingClass mutation */
  createShippingClass?: Maybe<CreateShippingClassPayload>;
  /** The payload for the createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The payload for the createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The payload for the createVisibleProduct mutation */
  createVisibleProduct?: Maybe<CreateVisibleProductPayload>;
  /** The payload for the deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The payload for the deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The payload for the deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The payload for the deletePaHind mutation */
  deletePaHind?: Maybe<DeletePaHindPayload>;
  /** The payload for the deletePaHulk mutation */
  deletePaHulk?: Maybe<DeletePaHulkPayload>;
  /** The payload for the deletePaKasutusaeg mutation */
  deletePaKasutusaeg?: Maybe<DeletePaKasutusaegPayload>;
  /** The payload for the deletePaKogus mutation */
  deletePaKogus?: Maybe<DeletePaKogusPayload>;
  /** The payload for the deletePaKontuur mutation */
  deletePaKontuur?: Maybe<DeletePaKontuurPayload>;
  /** The payload for the deletePaKoostisained mutation */
  deletePaKoostisained?: Maybe<DeletePaKoostisainedPayload>;
  /** The payload for the deletePaLaadimisaeg mutation */
  deletePaLaadimisaeg?: Maybe<DeletePaLaadimisaegPayload>;
  /** The payload for the deletePaMaterjal mutation */
  deletePaMaterjal?: Maybe<DeletePaMaterjalPayload>;
  /** The payload for the deletePaMuratasa mutation */
  deletePaMuratasa?: Maybe<DeletePaMuratasaPayload>;
  /** The payload for the deletePaOhutus mutation */
  deletePaOhutus?: Maybe<DeletePaOhutusPayload>;
  /** The payload for the deletePaPatareid mutation */
  deletePaPatareid?: Maybe<DeletePaPatareidPayload>;
  /** The payload for the deletePaSuurus mutation */
  deletePaSuurus?: Maybe<DeletePaSuurusPayload>;
  /** The payload for the deletePaVariant mutation */
  deletePaVariant?: Maybe<DeletePaVariantPayload>;
  /** The payload for the deletePaVarv mutation */
  deletePaVarv?: Maybe<DeletePaVarvPayload>;
  /** The payload for the deletePaVeekindlus mutation */
  deletePaVeekindlus?: Maybe<DeletePaVeekindlusPayload>;
  /** The payload for the deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The payload for the deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The payload for the deleteProductCategory mutation */
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
  /** The payload for the deleteProductTag mutation */
  deleteProductTag?: Maybe<DeleteProductTagPayload>;
  /** The payload for the deleteProductType mutation */
  deleteProductType?: Maybe<DeleteProductTypePayload>;
  /** The payload for the deleteRevision mutation */
  deleteRevision?: Maybe<DeleteRevisionPayload>;
  /** The payload for the deleteShippingClass mutation */
  deleteShippingClass?: Maybe<DeleteShippingClassPayload>;
  /** The payload for the deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The payload for the deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The payload for the deleteVisibleProduct mutation */
  deleteVisibleProduct?: Maybe<DeleteVisibleProductPayload>;
  /** The payload for the emptyCart mutation */
  emptyCart?: Maybe<EmptyCartPayload>;

  increaseCount?: Maybe<number>;
  /** The payload for the registerCustomer mutation */
  registerCustomer?: Maybe<RegisterCustomerPayload>;
  /** The payload for the registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The payload for the removeCoupons mutation */
  removeCoupons?: Maybe<RemoveCouponsPayload>;
  /** The payload for the removeItemsFromCart mutation */
  removeItemsFromCart?: Maybe<RemoveItemsFromCartPayload>;
  /** The payload for the resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The payload for the restoreCartItems mutation */
  restoreCartItems?: Maybe<RestoreCartItemsPayload>;
  /** The payload for the restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** The payload for the sendPasswordResetEmail mutation */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The payload for the updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The payload for the updateCustomer mutation */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** The payload for the updateItemQuantity mutation */
  updateItemQuantity?: Maybe<UpdateItemQuantityPayload>;
  /** The payload for the updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The payload for the updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The payload for the updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The payload for the updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The payload for the updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
}

/** The payload for the UpdateCategory mutation */
export interface UpdateCategoryPayload {
  /** The created category */
  category?: Maybe<Category>;

  clientMutationId: string;
}

/** The payload for the UpdatePaHind mutation */
export interface UpdatePaHindPayload {
  clientMutationId: string;
  /** The created pa_hind */
  paHind?: Maybe<PaHind>;
}

/** The payload for the UpdatePaHulk mutation */
export interface UpdatePaHulkPayload {
  clientMutationId: string;
  /** The created pa_hulk */
  paHulk?: Maybe<PaHulk>;
}

/** The payload for the UpdatePaKasutusaeg mutation */
export interface UpdatePaKasutusaegPayload {
  clientMutationId: string;
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<PaKasutusaeg>;
}

/** The payload for the UpdatePaKogus mutation */
export interface UpdatePaKogusPayload {
  clientMutationId: string;
  /** The created pa_kogus */
  paKogus?: Maybe<PaKogus>;
}

/** The payload for the UpdatePaKontuur mutation */
export interface UpdatePaKontuurPayload {
  clientMutationId: string;
  /** The created pa_kontuur */
  paKontuur?: Maybe<PaKontuur>;
}

/** The payload for the UpdatePaKoostisained mutation */
export interface UpdatePaKoostisainedPayload {
  clientMutationId: string;
  /** The created pa_koostisained */
  paKoostisained?: Maybe<PaKoostisained>;
}

/** The payload for the UpdatePaLaadimisaeg mutation */
export interface UpdatePaLaadimisaegPayload {
  clientMutationId: string;
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<PaLaadimisaeg>;
}

/** The payload for the UpdatePaMaterjal mutation */
export interface UpdatePaMaterjalPayload {
  clientMutationId: string;
  /** The created pa_materjal */
  paMaterjal?: Maybe<PaMaterjal>;
}

/** The payload for the UpdatePaMuratasa mutation */
export interface UpdatePaMuratasaPayload {
  clientMutationId: string;
  /** The created pa_muratasa */
  paMuratasa?: Maybe<PaMuratasa>;
}

/** The payload for the UpdatePaOhutus mutation */
export interface UpdatePaOhutusPayload {
  clientMutationId: string;
  /** The created pa_ohutus */
  paOhutus?: Maybe<PaOhutus>;
}

/** The payload for the UpdatePaPatareid mutation */
export interface UpdatePaPatareidPayload {
  clientMutationId: string;
  /** The created pa_patareid */
  paPatareid?: Maybe<PaPatareid>;
}

/** The payload for the UpdatePaSuurus mutation */
export interface UpdatePaSuurusPayload {
  clientMutationId: string;
  /** The created pa_suurus */
  paSuurus?: Maybe<PaSuurus>;
}

/** The payload for the UpdatePaVariant mutation */
export interface UpdatePaVariantPayload {
  clientMutationId: string;
  /** The created pa_variant */
  paVariant?: Maybe<PaVariant>;
}

/** The payload for the UpdatePaVarv mutation */
export interface UpdatePaVarvPayload {
  clientMutationId: string;
  /** The created pa_varv */
  paVarv?: Maybe<PaVarv>;
}

/** The payload for the UpdatePaVeekindlus mutation */
export interface UpdatePaVeekindlusPayload {
  clientMutationId: string;
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<PaVeekindlus>;
}

/** The payload for the UpdateProductCategory mutation */
export interface UpdateProductCategoryPayload {
  clientMutationId: string;
  /** The created product_cat */
  productCategory?: Maybe<ProductCategory>;
}

/** The payload for the UpdateProductTag mutation */
export interface UpdateProductTagPayload {
  clientMutationId: string;
  /** The created product_tag */
  productTag?: Maybe<ProductTag>;
}

/** The payload for the UpdateProductType mutation */
export interface UpdateProductTypePayload {
  clientMutationId: string;
  /** The created product_type */
  productType?: Maybe<ProductType>;
}

/** The payload for the UpdateShippingClass mutation */
export interface UpdateShippingClassPayload {
  clientMutationId: string;
  /** The created product_shipping_class */
  shippingClass?: Maybe<ShippingClass>;
}

/** The payload for the UpdateTag mutation */
export interface UpdateTagPayload {
  clientMutationId: string;
  /** The created post_tag */
  tag?: Maybe<Tag>;
}

/** The payload for the UpdateVisibleProduct mutation */
export interface UpdateVisibleProductPayload {
  clientMutationId: string;
  /** The created product_visibility */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** The payload for the addFee mutation */
export interface AddFeePayload {
  cartFee?: Maybe<CartFee>;

  clientMutationId: string;
}

/** The payload for the addToCart mutation */
export interface AddToCartPayload {
  cartItem?: Maybe<CartItem>;

  clientMutationId: string;
}

/** The payload for the applyCoupon mutation */
export interface ApplyCouponPayload {
  cart?: Maybe<Cart>;

  clientMutationId: string;
}

/** The payload for the createCategory mutation */
export interface CreateCategoryPayload {
  /** The created category */
  category?: Maybe<Category>;

  clientMutationId: string;
}

/** The payload for the createComment mutation */
export interface CreateCommentPayload {
  clientMutationId: string;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<boolean>;
}

/** The payload for the createMediaItem mutation */
export interface CreateMediaItemPayload {
  clientMutationId: string;

  mediaItem?: Maybe<MediaItem>;
}

/** The payload for the createPaHind mutation */
export interface CreatePaHindPayload {
  clientMutationId: string;
  /** The created pa_hind */
  paHind?: Maybe<PaHind>;
}

/** The payload for the createPaHulk mutation */
export interface CreatePaHulkPayload {
  clientMutationId: string;
  /** The created pa_hulk */
  paHulk?: Maybe<PaHulk>;
}

/** The payload for the createPaKasutusaeg mutation */
export interface CreatePaKasutusaegPayload {
  clientMutationId: string;
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<PaKasutusaeg>;
}

/** The payload for the createPaKogus mutation */
export interface CreatePaKogusPayload {
  clientMutationId: string;
  /** The created pa_kogus */
  paKogus?: Maybe<PaKogus>;
}

/** The payload for the createPaKontuur mutation */
export interface CreatePaKontuurPayload {
  clientMutationId: string;
  /** The created pa_kontuur */
  paKontuur?: Maybe<PaKontuur>;
}

/** The payload for the createPaKoostisained mutation */
export interface CreatePaKoostisainedPayload {
  clientMutationId: string;
  /** The created pa_koostisained */
  paKoostisained?: Maybe<PaKoostisained>;
}

/** The payload for the createPaLaadimisaeg mutation */
export interface CreatePaLaadimisaegPayload {
  clientMutationId: string;
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<PaLaadimisaeg>;
}

/** The payload for the createPaMaterjal mutation */
export interface CreatePaMaterjalPayload {
  clientMutationId: string;
  /** The created pa_materjal */
  paMaterjal?: Maybe<PaMaterjal>;
}

/** The payload for the createPaMuratasa mutation */
export interface CreatePaMuratasaPayload {
  clientMutationId: string;
  /** The created pa_muratasa */
  paMuratasa?: Maybe<PaMuratasa>;
}

/** The payload for the createPaOhutus mutation */
export interface CreatePaOhutusPayload {
  clientMutationId: string;
  /** The created pa_ohutus */
  paOhutus?: Maybe<PaOhutus>;
}

/** The payload for the createPaPatareid mutation */
export interface CreatePaPatareidPayload {
  clientMutationId: string;
  /** The created pa_patareid */
  paPatareid?: Maybe<PaPatareid>;
}

/** The payload for the createPaSuurus mutation */
export interface CreatePaSuurusPayload {
  clientMutationId: string;
  /** The created pa_suurus */
  paSuurus?: Maybe<PaSuurus>;
}

/** The payload for the createPaVariant mutation */
export interface CreatePaVariantPayload {
  clientMutationId: string;
  /** The created pa_variant */
  paVariant?: Maybe<PaVariant>;
}

/** The payload for the createPaVarv mutation */
export interface CreatePaVarvPayload {
  clientMutationId: string;
  /** The created pa_varv */
  paVarv?: Maybe<PaVarv>;
}

/** The payload for the createPaVeekindlus mutation */
export interface CreatePaVeekindlusPayload {
  clientMutationId: string;
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<PaVeekindlus>;
}

/** The payload for the createPage mutation */
export interface CreatePagePayload {
  clientMutationId: string;

  page?: Maybe<Page>;
}

/** The payload for the createPost mutation */
export interface CreatePostPayload {
  clientMutationId: string;

  post?: Maybe<Post>;
}

/** The payload for the createProductCategory mutation */
export interface CreateProductCategoryPayload {
  clientMutationId: string;
  /** The created product_cat */
  productCategory?: Maybe<ProductCategory>;
}

/** The payload for the createProductTag mutation */
export interface CreateProductTagPayload {
  clientMutationId: string;
  /** The created product_tag */
  productTag?: Maybe<ProductTag>;
}

/** The payload for the createProductType mutation */
export interface CreateProductTypePayload {
  clientMutationId: string;
  /** The created product_type */
  productType?: Maybe<ProductType>;
}

/** The payload for the createShippingClass mutation */
export interface CreateShippingClassPayload {
  clientMutationId: string;
  /** The created product_shipping_class */
  shippingClass?: Maybe<ShippingClass>;
}

/** The payload for the createTag mutation */
export interface CreateTagPayload {
  clientMutationId: string;
  /** The created post_tag */
  tag?: Maybe<Tag>;
}

/** The payload for the createUser mutation */
export interface CreateUserPayload {
  clientMutationId: string;

  user?: Maybe<User>;
}

/** The payload for the createVisibleProduct mutation */
export interface CreateVisibleProductPayload {
  clientMutationId: string;
  /** The created product_visibility */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** The payload for the deleteCategory mutation */
export interface DeleteCategoryPayload {
  /** The deteted term object */
  category?: Maybe<Category>;

  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
}

/** The payload for the deleteComment mutation */
export interface DeleteCommentPayload {
  clientMutationId: string;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<string>;
}

/** The payload for the deleteMediaItem mutation */
export interface DeleteMediaItemPayload {
  clientMutationId: string;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<string>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
}

/** The payload for the deletePaHind mutation */
export interface DeletePaHindPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paHind?: Maybe<PaHind>;
}

/** The payload for the deletePaHulk mutation */
export interface DeletePaHulkPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paHulk?: Maybe<PaHulk>;
}

/** The payload for the deletePaKasutusaeg mutation */
export interface DeletePaKasutusaegPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKasutusaeg?: Maybe<PaKasutusaeg>;
}

/** The payload for the deletePaKogus mutation */
export interface DeletePaKogusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKogus?: Maybe<PaKogus>;
}

/** The payload for the deletePaKontuur mutation */
export interface DeletePaKontuurPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKontuur?: Maybe<PaKontuur>;
}

/** The payload for the deletePaKoostisained mutation */
export interface DeletePaKoostisainedPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paKoostisained?: Maybe<PaKoostisained>;
}

/** The payload for the deletePaLaadimisaeg mutation */
export interface DeletePaLaadimisaegPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paLaadimisaeg?: Maybe<PaLaadimisaeg>;
}

/** The payload for the deletePaMaterjal mutation */
export interface DeletePaMaterjalPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paMaterjal?: Maybe<PaMaterjal>;
}

/** The payload for the deletePaMuratasa mutation */
export interface DeletePaMuratasaPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paMuratasa?: Maybe<PaMuratasa>;
}

/** The payload for the deletePaOhutus mutation */
export interface DeletePaOhutusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paOhutus?: Maybe<PaOhutus>;
}

/** The payload for the deletePaPatareid mutation */
export interface DeletePaPatareidPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paPatareid?: Maybe<PaPatareid>;
}

/** The payload for the deletePaSuurus mutation */
export interface DeletePaSuurusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paSuurus?: Maybe<PaSuurus>;
}

/** The payload for the deletePaVariant mutation */
export interface DeletePaVariantPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVariant?: Maybe<PaVariant>;
}

/** The payload for the deletePaVarv mutation */
export interface DeletePaVarvPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVarv?: Maybe<PaVarv>;
}

/** The payload for the deletePaVeekindlus mutation */
export interface DeletePaVeekindlusPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  paVeekindlus?: Maybe<PaVeekindlus>;
}

/** The payload for the deletePage mutation */
export interface DeletePagePayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
}

/** The payload for the deletePost mutation */
export interface DeletePostPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
}

/** The payload for the deleteProductCategory mutation */
export interface DeleteProductCategoryPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productCategory?: Maybe<ProductCategory>;
}

/** The payload for the deleteProductTag mutation */
export interface DeleteProductTagPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productTag?: Maybe<ProductTag>;
}

/** The payload for the deleteProductType mutation */
export interface DeleteProductTypePayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  productType?: Maybe<ProductType>;
}

/** The payload for the deleteRevision mutation */
export interface DeleteRevisionPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The object before it was deleted */
  revision?: Maybe<Revision>;
}

/** The payload for the deleteShippingClass mutation */
export interface DeleteShippingClassPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  shippingClass?: Maybe<ShippingClass>;
}

/** The payload for the deleteTag mutation */
export interface DeleteTagPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  tag?: Maybe<Tag>;
}

/** The payload for the deleteUser mutation */
export interface DeleteUserPayload {
  clientMutationId: string;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<string>;
  /** The deleted user object */
  user?: Maybe<User>;
}

/** The payload for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductPayload {
  clientMutationId: string;
  /** The ID of the deleted object */
  deletedId?: Maybe<string>;
  /** The deteted term object */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** The payload for the emptyCart mutation */
export interface EmptyCartPayload {
  cart?: Maybe<Cart>;

  clientMutationId: string;
}

/** The payload for the registerCustomer mutation */
export interface RegisterCustomerPayload {
  clientMutationId: string;

  customer?: Maybe<Customer>;

  viewer?: Maybe<User>;
}

/** The payload for the registerUser mutation */
export interface RegisterUserPayload {
  clientMutationId: string;

  user?: Maybe<User>;
}

/** The payload for the removeCoupons mutation */
export interface RemoveCouponsPayload {
  cart?: Maybe<Cart>;

  clientMutationId: string;
}

/** The payload for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartPayload {
  cartItems?: Maybe<(Maybe<CartItem>)[]>;

  clientMutationId: string;
}

/** The payload for the resetUserPassword mutation */
export interface ResetUserPasswordPayload {
  clientMutationId: string;

  user?: Maybe<User>;
}

/** The payload for the restoreCartItems mutation */
export interface RestoreCartItemsPayload {
  cartItems?: Maybe<(Maybe<CartItem>)[]>;

  clientMutationId: string;
}

/** The payload for the restoreComment mutation */
export interface RestoreCommentPayload {
  clientMutationId: string;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<string>;
}

/** The payload for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailPayload {
  clientMutationId: string;
  /** The user that the password reset email was sent to */
  user?: Maybe<User>;
}

/** The payload for the updateComment mutation */
export interface UpdateCommentPayload {
  clientMutationId: string;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<boolean>;
}

/** The payload for the updateCustomer mutation */
export interface UpdateCustomerPayload {
  clientMutationId: string;

  customer?: Maybe<Customer>;
}

/** The payload for the updateItemQuantity mutation */
export interface UpdateItemQuantityPayload {
  cartItem?: Maybe<CartItem>;

  clientMutationId: string;
}

/** The payload for the updateMediaItem mutation */
export interface UpdateMediaItemPayload {
  clientMutationId: string;

  mediaItem?: Maybe<MediaItem>;
}

/** The payload for the updatePage mutation */
export interface UpdatePagePayload {
  clientMutationId: string;

  page?: Maybe<Page>;
}

/** The payload for the updatePost mutation */
export interface UpdatePostPayload {
  clientMutationId: string;

  post?: Maybe<Post>;
}

/** The payload for the updateSettings mutation */
export interface UpdateSettingsPayload {
  allSettings?: Maybe<Settings>;

  clientMutationId: string;

  discussionSettings?: Maybe<DiscussionSettings>;

  generalSettings?: Maybe<GeneralSettings>;

  readingSettings?: Maybe<ReadingSettings>;

  writingSettings?: Maybe<WritingSettings>;
}

/** The payload for the updateUser mutation */
export interface UpdateUserPayload {
  clientMutationId: string;

  user?: Maybe<User>;
}

// ====================================================
// Arguments
// ====================================================

export interface CartFeeQueryArgs {
  id: string;
}
export interface CartItemQueryArgs {
  key: string;
}
export interface CategoriesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
}
export interface CategoryQueryArgs {
  id: string;
}
export interface CommentQueryArgs {
  id: string;
}
export interface CommentsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
}
export interface CouponQueryArgs {
  id: string;
}
export interface CouponByQueryArgs {
  /** Get the coupon by its global ID */
  id?: Maybe<string>;
  /** Get the coupon by its database ID */
  couponId?: Maybe<number>;
  /** Get the coupon by its code */
  code?: Maybe<string>;
}
export interface CouponsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToCouponConnectionWhereArgs>;
}
export interface CustomerQueryArgs {
  id?: Maybe<string>;
}
export interface CustomerByQueryArgs {
  /** Get the customer by their database ID */
  customerId: number;
}
export interface CustomersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToCustomerConnectionWhereArgs>;
}
export interface MediaItemQueryArgs {
  id: string;
}
export interface MediaItemByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the mediaItem by its database ID */
  mediaItemId?: Maybe<number>;
  /** Get the mediaItem by its uri */
  uri?: Maybe<string>;
  /** Get the mediaItem by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface MediaItemsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
}
export interface MenuQueryArgs {
  id: string;
}
export interface MenuItemsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
}
export interface MenuItemQueryArgs {
  id: string;
}
export interface MenusQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
}
export interface NodeQueryArgs {
  /** The ID of an object */
  id: string;
}
export interface OrderQueryArgs {
  id: string;
}
export interface OrderByQueryArgs {
  /** Get the order by its global ID */
  id?: Maybe<string>;
  /** Get the order by its database ID */
  orderId?: Maybe<number>;
  /** Get the order by its order number */
  orderKey?: Maybe<string>;
}
export interface OrdersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToOrderConnectionWhereArgs>;
}
export interface PaHindQueryArgs {
  id: string;
}
export interface PaHindsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaHindConnectionWhereArgs>;
}
export interface PaHulkQueryArgs {
  id: string;
}
export interface PaHulksQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaHulkConnectionWhereArgs>;
}
export interface PaKasutusaegQueryArgs {
  id: string;
}
export interface PaKasutusaegsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaKasutusaegConnectionWhereArgs>;
}
export interface PaKogusQueryArgs {
  id: string;
}
export interface PaKogusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaKogusConnectionWhereArgs>;
}
export interface PaKontuurQueryArgs {
  id: string;
}
export interface PaKontuursQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaKontuurConnectionWhereArgs>;
}
export interface PaKoostisainedQueryArgs {
  id: string;
}
export interface PaKoostisainedsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaKoostisainedConnectionWhereArgs>;
}
export interface PaLaadimisaegQueryArgs {
  id: string;
}
export interface PaLaadimisaegsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaLaadimisaegConnectionWhereArgs>;
}
export interface PaMaterjalQueryArgs {
  id: string;
}
export interface PaMaterjalsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaMaterjalConnectionWhereArgs>;
}
export interface PaMuratasaQueryArgs {
  id: string;
}
export interface PaMuratasasQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaMuratasaConnectionWhereArgs>;
}
export interface PaOhutusQueryArgs {
  id: string;
}
export interface PaOhutusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaOhutusConnectionWhereArgs>;
}
export interface PaPatareidQueryArgs {
  id: string;
}
export interface PaPatareidsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaPatareidConnectionWhereArgs>;
}
export interface PaSuurusQueryArgs {
  id: string;
}
export interface PaSuurusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaSuurusConnectionWhereArgs>;
}
export interface PaVariantQueryArgs {
  id: string;
}
export interface PaVariantsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaVariantConnectionWhereArgs>;
}
export interface PaVarvQueryArgs {
  id: string;
}
export interface PaVarvsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaVarvConnectionWhereArgs>;
}
export interface PaVeekindlusQueryArgs {
  id: string;
}
export interface PaVeekindlusesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPaVeekindlusConnectionWhereArgs>;
}
export interface PageQueryArgs {
  id: string;
}
export interface PageByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the page by its database ID */
  pageId?: Maybe<number>;
  /** Get the page by its uri */
  uri?: Maybe<string>;
}
export interface PagesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
}
export interface PluginQueryArgs {
  id: string;
}
export interface PluginsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface PostQueryArgs {
  id: string;
}
export interface PostByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the post by its database ID */
  postId?: Maybe<number>;
  /** Get the post by its uri */
  uri?: Maybe<string>;
  /** Get the post by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface PostsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
}
export interface ProductQueryArgs {
  id: string;
}
export interface ProductByQueryArgs {
  /** Get the product by its global ID */
  id?: Maybe<string>;
  /** Get the product by its database ID */
  productId?: Maybe<number>;
}
export interface ProductCategoriesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToProductCategoryConnectionWhereArgs>;
}
export interface ProductCategoryQueryArgs {
  id: string;
}
export interface ProductTagQueryArgs {
  id: string;
}
export interface ProductTagsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToProductTagConnectionWhereArgs>;
}
export interface ProductTypeQueryArgs {
  id: string;
}
export interface ProductTypesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToProductTypeConnectionWhereArgs>;
}
export interface ProductVariationQueryArgs {
  /** Get the product variation by its global ID */
  id?: Maybe<string>;
  /** Get the product variation by its database ID */
  variationId?: Maybe<number>;
}
export interface ProductsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
}
export interface RefundQueryArgs {
  id: string;
}
export interface RefundByQueryArgs {
  /** Get the refund by its global ID */
  id?: Maybe<string>;
  /** Get the refund by its database ID */
  refundId?: Maybe<number>;
}
export interface RefundsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToRefundConnectionWhereArgs>;
}
export interface RevisionQueryArgs {
  id: string;
}
export interface RevisionByQueryArgs {
  /** Get the object by its global ID */
  id?: Maybe<string>;
  /** Get the revision by its database ID */
  revisionId?: Maybe<number>;
  /** Get the revision by its uri */
  uri?: Maybe<string>;
  /** Get the revision by its slug (only available for non-hierarchical types) */
  slug?: Maybe<string>;
}
export interface RevisionsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToRevisionConnectionWhereArgs>;
}
export interface ShippingClassQueryArgs {
  id: string;
}
export interface ShippingClassesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToShippingClassConnectionWhereArgs>;
}
export interface ShippingMethodQueryArgs {
  /** Get the shipping method by its global ID */
  id?: Maybe<string>;
  /** Get the shipping method by its database ID */
  methodId?: Maybe<string>;
}
export interface ShippingMethodsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface TagQueryArgs {
  id: string;
}
export interface TagsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
}
export interface TaxRateQueryArgs {
  /** Get the tax rate by its global ID */
  id?: Maybe<string>;
  /** Get the tax rate by its database ID */
  rateId?: Maybe<number>;
}
export interface TaxRatesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToTaxRateConnectionWhereArgs>;
}
export interface ThemeQueryArgs {
  id: string;
}
export interface ThemesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface UserQueryArgs {
  id: string;
}
export interface UserRolesQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface UserRoleQueryArgs {
  id: string;
}
export interface UsersQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
}
export interface VisibleProductQueryArgs {
  id: string;
}
export interface VisibleProductsQueryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<RootQueryToVisibleProductConnectionWhereArgs>;
}
export interface AppliedCouponsCartArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CartToCouponConnectionWhereArgs>;
}
export interface ContentsCartArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CartToCartItemConnectionWhereArgs>;
}
export interface ExcludedProductCategoriesCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CouponToProductCategoryConnectionWhereArgs>;
}
export interface ExcludedProductsCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CouponToProductConnectionWhereArgs>;
}
export interface ProductCategoriesCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CouponToProductCategoryConnectionWhereArgs>;
}
export interface ProductsCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CouponToProductConnectionWhereArgs>;
}
export interface UsedByCouponArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CouponToCustomerConnectionWhereArgs>;
}
export interface ChildrenProductCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductCategoryToProductCategoryConnectionWhereArgs>;
}
export interface ProductsProductCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductCategoryToProductConnectionWhereArgs>;
}
export interface ConnectedPostTypeNamesTaxonomyArgs {
  /** Select which post types to limit the results to */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface ConnectedPostTypesTaxonomyArgs {
  /** Select which post types to limit the results to */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface ConnectedTaxonomiesPostTypeArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface ConnectedTaxonomyNamesPostTypeArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface AttributesProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface CategoriesProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}
export interface CrossSellProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}
export interface DefaultAttributesProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface GalleryImagesProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}
export interface GroupedProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}
export interface PriceProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface RegularPriceProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface RelatedProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}
export interface SalePriceProductArgs {
  /** Show maximum price (Variable type product) */
  max?: Maybe<boolean>;
}
export interface TagsProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}
export interface UpsellProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}
export interface VariationsProductArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductToProductVariationConnectionWhereArgs>;
}
export interface AncestorsMediaItemArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface CaptionMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface CommentsMediaItemArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
}
export interface ContentMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface DescriptionMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface ExcerptMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface SourceUrlMediaItemArgs {
  /** Size of the MediaItem to return */
  size?: Maybe<MediaItemSizeEnum>;
}
export interface TermNamesMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermsMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermSlugsMediaItemArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TitleMediaItemArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface AncestorsPostArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface CategoriesPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
}
export interface CommentsPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PostToCommentConnectionWhereArgs>;
}
export interface ContentPostArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface ExcerptPostArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface RevisionsPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PostToRevisionConnectionWhereArgs>;
}
export interface TagsPostArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PostToTagConnectionWhereArgs>;
}
export interface TermNamesPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermsPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermSlugsPostArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TitlePostArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface AvatarUserArgs {
  /** The size attribute of the avatar field can be used to fetch avatars of different sizes. The value corresponds to the dimension in pixels to fetch. The default is 96 pixels. */
  size?: number;
  /** Whether to always show the default image, never the Gravatar. Default false */
  forceDefault?: Maybe<boolean>;

  rating?: Maybe<AvatarRatingEnum>;
}
export interface CommentsUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<UserToCommentConnectionWhereArgs>;
}
export interface MediaItemsUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
}
export interface PagesUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<UserToPageConnectionWhereArgs>;
}
export interface PostsUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<UserToPostConnectionWhereArgs>;
}
export interface RevisionsUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<UserToRevisionConnectionWhereArgs>;
}
export interface RolesUserArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface ChildrenCommentArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
}
export interface ContentCommentArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface AncestorsPageArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface ChildPagesPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PageToPageConnectionWhereArgs>;
}
export interface CommentsPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PageToCommentConnectionWhereArgs>;
}
export interface ContentPageArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface ExcerptPageArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface RevisionsPageArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PageToRevisionConnectionWhereArgs>;
}
export interface TermNamesPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermsPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermSlugsPageArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TitlePageArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface AncestorsRevisionArgs {
  /** The types of ancestors to check for. Defaults to the same type as the current object */
  types?: Maybe<(Maybe<PostTypeEnum>)[]>;
}
export interface ContentRevisionArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface ExcerptRevisionArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface TermNamesRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermsRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TermSlugsRevisionArgs {
  /** Select which taxonomies to limit the results to */
  taxonomies?: Maybe<(Maybe<TaxonomyEnum>)[]>;
}
export interface TitleRevisionArgs {
  /** Format of the field output */
  format?: Maybe<PostObjectFieldFormatEnum>;
}
export interface ChildrenCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
}
export interface PostsCategoryArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
}
export interface PostsTagArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<TagToPostConnectionWhereArgs>;
}
export interface ProductsProductTagArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<ProductTagToProductConnectionWhereArgs>;
}
export interface ProductsPaHindArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaHindToProductConnectionWhereArgs>;
}
export interface VariationsPaHindArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaHindToProductVariationConnectionWhereArgs>;
}
export interface AttributesProductVariationArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface ProductsPaHulkArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaHulkToProductConnectionWhereArgs>;
}
export interface VariationsPaHulkArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaHulkToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaKasutusaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKasutusaegToProductConnectionWhereArgs>;
}
export interface VariationsPaKasutusaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKasutusaegToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaKogusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKogusToProductConnectionWhereArgs>;
}
export interface VariationsPaKogusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKogusToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaKontuurArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKontuurToProductConnectionWhereArgs>;
}
export interface VariationsPaKontuurArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKontuurToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaKoostisainedArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKoostisainedToProductConnectionWhereArgs>;
}
export interface VariationsPaKoostisainedArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaKoostisainedToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaLaadimisaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaLaadimisaegToProductConnectionWhereArgs>;
}
export interface VariationsPaLaadimisaegArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaLaadimisaegToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaMaterjalArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaMaterjalToProductConnectionWhereArgs>;
}
export interface VariationsPaMaterjalArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaMaterjalToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaMuratasaArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaMuratasaToProductConnectionWhereArgs>;
}
export interface VariationsPaMuratasaArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaMuratasaToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaOhutusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaOhutusToProductConnectionWhereArgs>;
}
export interface VariationsPaOhutusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaOhutusToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaPatareidArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaPatareidToProductConnectionWhereArgs>;
}
export interface VariationsPaPatareidArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaPatareidToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaSuurusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaSuurusToProductConnectionWhereArgs>;
}
export interface VariationsPaSuurusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaSuurusToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaVariantArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVariantToProductConnectionWhereArgs>;
}
export interface VariationsPaVariantArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVariantToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaVarvArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVarvToProductConnectionWhereArgs>;
}
export interface VariationsPaVarvArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVarvToProductVariationConnectionWhereArgs>;
}
export interface ProductsPaVeekindlusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVeekindlusToProductConnectionWhereArgs>;
}
export interface VariationsPaVeekindlusArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<PaVeekindlusToProductVariationConnectionWhereArgs>;
}
export interface OrdersCustomerArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CustomerToOrderConnectionWhereArgs>;
}
export interface RefundsCustomerArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<CustomerToRefundConnectionWhereArgs>;
}
export interface CouponLinesOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface FeeLinesOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface LineItemsOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface RefundsOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<OrderToRefundConnectionWhereArgs>;
}
export interface ShippingLinesOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface TaxLinesOrderArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface LineItemsRefundArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
}
export interface MenuItemsMenuArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
}
export interface ChildItemsMenuItemArgs {
  /** The number of items to return after the referenced "after" cursor */
  first?: Maybe<number>;

  last?: Maybe<number>;
  /** Cursor used along with the "first" argument to reference where in the dataset to get data */
  after?: Maybe<string>;
  /** Cursor used along with the "last" argument to reference where in the dataset to get data */
  before?: Maybe<string>;
  /** Arguments for filtering the connection */
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
}
export interface UpdateCategoryMutationArgs {
  /** Input for the UpdateCategory mutation */
  input: UpdateCategoryInput;
}
export interface UpdatePaHindMutationArgs {
  /** Input for the UpdatePaHind mutation */
  input: UpdatePaHindInput;
}
export interface UpdatePaHulkMutationArgs {
  /** Input for the UpdatePaHulk mutation */
  input: UpdatePaHulkInput;
}
export interface UpdatePaKasutusaegMutationArgs {
  /** Input for the UpdatePaKasutusaeg mutation */
  input: UpdatePaKasutusaegInput;
}
export interface UpdatePaKogusMutationArgs {
  /** Input for the UpdatePaKogus mutation */
  input: UpdatePaKogusInput;
}
export interface UpdatePaKontuurMutationArgs {
  /** Input for the UpdatePaKontuur mutation */
  input: UpdatePaKontuurInput;
}
export interface UpdatePaKoostisainedMutationArgs {
  /** Input for the UpdatePaKoostisained mutation */
  input: UpdatePaKoostisainedInput;
}
export interface UpdatePaLaadimisaegMutationArgs {
  /** Input for the UpdatePaLaadimisaeg mutation */
  input: UpdatePaLaadimisaegInput;
}
export interface UpdatePaMaterjalMutationArgs {
  /** Input for the UpdatePaMaterjal mutation */
  input: UpdatePaMaterjalInput;
}
export interface UpdatePaMuratasaMutationArgs {
  /** Input for the UpdatePaMuratasa mutation */
  input: UpdatePaMuratasaInput;
}
export interface UpdatePaOhutusMutationArgs {
  /** Input for the UpdatePaOhutus mutation */
  input: UpdatePaOhutusInput;
}
export interface UpdatePaPatareidMutationArgs {
  /** Input for the UpdatePaPatareid mutation */
  input: UpdatePaPatareidInput;
}
export interface UpdatePaSuurusMutationArgs {
  /** Input for the UpdatePaSuurus mutation */
  input: UpdatePaSuurusInput;
}
export interface UpdatePaVariantMutationArgs {
  /** Input for the UpdatePaVariant mutation */
  input: UpdatePaVariantInput;
}
export interface UpdatePaVarvMutationArgs {
  /** Input for the UpdatePaVarv mutation */
  input: UpdatePaVarvInput;
}
export interface UpdatePaVeekindlusMutationArgs {
  /** Input for the UpdatePaVeekindlus mutation */
  input: UpdatePaVeekindlusInput;
}
export interface UpdateProductCategoryMutationArgs {
  /** Input for the UpdateProductCategory mutation */
  input: UpdateProductCategoryInput;
}
export interface UpdateProductTagMutationArgs {
  /** Input for the UpdateProductTag mutation */
  input: UpdateProductTagInput;
}
export interface UpdateProductTypeMutationArgs {
  /** Input for the UpdateProductType mutation */
  input: UpdateProductTypeInput;
}
export interface UpdateShippingClassMutationArgs {
  /** Input for the UpdateShippingClass mutation */
  input: UpdateShippingClassInput;
}
export interface UpdateTagMutationArgs {
  /** Input for the UpdateTag mutation */
  input: UpdateTagInput;
}
export interface UpdateVisibleProductMutationArgs {
  /** Input for the UpdateVisibleProduct mutation */
  input: UpdateVisibleProductInput;
}
export interface AddFeeMutationArgs {
  /** Input for the addFee mutation */
  input: AddFeeInput;
}
export interface AddToCartMutationArgs {
  /** Input for the addToCart mutation */
  input: AddToCartInput;
}
export interface ApplyCouponMutationArgs {
  /** Input for the applyCoupon mutation */
  input: ApplyCouponInput;
}
export interface CreateCategoryMutationArgs {
  /** Input for the createCategory mutation */
  input: CreateCategoryInput;
}
export interface CreateCommentMutationArgs {
  /** Input for the createComment mutation */
  input: CreateCommentInput;
}
export interface CreateMediaItemMutationArgs {
  /** Input for the createMediaItem mutation */
  input: CreateMediaItemInput;
}
export interface CreatePaHindMutationArgs {
  /** Input for the createPaHind mutation */
  input: CreatePaHindInput;
}
export interface CreatePaHulkMutationArgs {
  /** Input for the createPaHulk mutation */
  input: CreatePaHulkInput;
}
export interface CreatePaKasutusaegMutationArgs {
  /** Input for the createPaKasutusaeg mutation */
  input: CreatePaKasutusaegInput;
}
export interface CreatePaKogusMutationArgs {
  /** Input for the createPaKogus mutation */
  input: CreatePaKogusInput;
}
export interface CreatePaKontuurMutationArgs {
  /** Input for the createPaKontuur mutation */
  input: CreatePaKontuurInput;
}
export interface CreatePaKoostisainedMutationArgs {
  /** Input for the createPaKoostisained mutation */
  input: CreatePaKoostisainedInput;
}
export interface CreatePaLaadimisaegMutationArgs {
  /** Input for the createPaLaadimisaeg mutation */
  input: CreatePaLaadimisaegInput;
}
export interface CreatePaMaterjalMutationArgs {
  /** Input for the createPaMaterjal mutation */
  input: CreatePaMaterjalInput;
}
export interface CreatePaMuratasaMutationArgs {
  /** Input for the createPaMuratasa mutation */
  input: CreatePaMuratasaInput;
}
export interface CreatePaOhutusMutationArgs {
  /** Input for the createPaOhutus mutation */
  input: CreatePaOhutusInput;
}
export interface CreatePaPatareidMutationArgs {
  /** Input for the createPaPatareid mutation */
  input: CreatePaPatareidInput;
}
export interface CreatePaSuurusMutationArgs {
  /** Input for the createPaSuurus mutation */
  input: CreatePaSuurusInput;
}
export interface CreatePaVariantMutationArgs {
  /** Input for the createPaVariant mutation */
  input: CreatePaVariantInput;
}
export interface CreatePaVarvMutationArgs {
  /** Input for the createPaVarv mutation */
  input: CreatePaVarvInput;
}
export interface CreatePaVeekindlusMutationArgs {
  /** Input for the createPaVeekindlus mutation */
  input: CreatePaVeekindlusInput;
}
export interface CreatePageMutationArgs {
  /** Input for the createPage mutation */
  input: CreatePageInput;
}
export interface CreatePostMutationArgs {
  /** Input for the createPost mutation */
  input: CreatePostInput;
}
export interface CreateProductCategoryMutationArgs {
  /** Input for the createProductCategory mutation */
  input: CreateProductCategoryInput;
}
export interface CreateProductTagMutationArgs {
  /** Input for the createProductTag mutation */
  input: CreateProductTagInput;
}
export interface CreateProductTypeMutationArgs {
  /** Input for the createProductType mutation */
  input: CreateProductTypeInput;
}
export interface CreateShippingClassMutationArgs {
  /** Input for the createShippingClass mutation */
  input: CreateShippingClassInput;
}
export interface CreateTagMutationArgs {
  /** Input for the createTag mutation */
  input: CreateTagInput;
}
export interface CreateUserMutationArgs {
  /** Input for the createUser mutation */
  input: CreateUserInput;
}
export interface CreateVisibleProductMutationArgs {
  /** Input for the createVisibleProduct mutation */
  input: CreateVisibleProductInput;
}
export interface DeleteCategoryMutationArgs {
  /** Input for the deleteCategory mutation */
  input: DeleteCategoryInput;
}
export interface DeleteCommentMutationArgs {
  /** Input for the deleteComment mutation */
  input: DeleteCommentInput;
}
export interface DeleteMediaItemMutationArgs {
  /** Input for the deleteMediaItem mutation */
  input: DeleteMediaItemInput;
}
export interface DeletePaHindMutationArgs {
  /** Input for the deletePaHind mutation */
  input: DeletePaHindInput;
}
export interface DeletePaHulkMutationArgs {
  /** Input for the deletePaHulk mutation */
  input: DeletePaHulkInput;
}
export interface DeletePaKasutusaegMutationArgs {
  /** Input for the deletePaKasutusaeg mutation */
  input: DeletePaKasutusaegInput;
}
export interface DeletePaKogusMutationArgs {
  /** Input for the deletePaKogus mutation */
  input: DeletePaKogusInput;
}
export interface DeletePaKontuurMutationArgs {
  /** Input for the deletePaKontuur mutation */
  input: DeletePaKontuurInput;
}
export interface DeletePaKoostisainedMutationArgs {
  /** Input for the deletePaKoostisained mutation */
  input: DeletePaKoostisainedInput;
}
export interface DeletePaLaadimisaegMutationArgs {
  /** Input for the deletePaLaadimisaeg mutation */
  input: DeletePaLaadimisaegInput;
}
export interface DeletePaMaterjalMutationArgs {
  /** Input for the deletePaMaterjal mutation */
  input: DeletePaMaterjalInput;
}
export interface DeletePaMuratasaMutationArgs {
  /** Input for the deletePaMuratasa mutation */
  input: DeletePaMuratasaInput;
}
export interface DeletePaOhutusMutationArgs {
  /** Input for the deletePaOhutus mutation */
  input: DeletePaOhutusInput;
}
export interface DeletePaPatareidMutationArgs {
  /** Input for the deletePaPatareid mutation */
  input: DeletePaPatareidInput;
}
export interface DeletePaSuurusMutationArgs {
  /** Input for the deletePaSuurus mutation */
  input: DeletePaSuurusInput;
}
export interface DeletePaVariantMutationArgs {
  /** Input for the deletePaVariant mutation */
  input: DeletePaVariantInput;
}
export interface DeletePaVarvMutationArgs {
  /** Input for the deletePaVarv mutation */
  input: DeletePaVarvInput;
}
export interface DeletePaVeekindlusMutationArgs {
  /** Input for the deletePaVeekindlus mutation */
  input: DeletePaVeekindlusInput;
}
export interface DeletePageMutationArgs {
  /** Input for the deletePage mutation */
  input: DeletePageInput;
}
export interface DeletePostMutationArgs {
  /** Input for the deletePost mutation */
  input: DeletePostInput;
}
export interface DeleteProductCategoryMutationArgs {
  /** Input for the deleteProductCategory mutation */
  input: DeleteProductCategoryInput;
}
export interface DeleteProductTagMutationArgs {
  /** Input for the deleteProductTag mutation */
  input: DeleteProductTagInput;
}
export interface DeleteProductTypeMutationArgs {
  /** Input for the deleteProductType mutation */
  input: DeleteProductTypeInput;
}
export interface DeleteRevisionMutationArgs {
  /** Input for the deleteRevision mutation */
  input: DeleteRevisionInput;
}
export interface DeleteShippingClassMutationArgs {
  /** Input for the deleteShippingClass mutation */
  input: DeleteShippingClassInput;
}
export interface DeleteTagMutationArgs {
  /** Input for the deleteTag mutation */
  input: DeleteTagInput;
}
export interface DeleteUserMutationArgs {
  /** Input for the deleteUser mutation */
  input: DeleteUserInput;
}
export interface DeleteVisibleProductMutationArgs {
  /** Input for the deleteVisibleProduct mutation */
  input: DeleteVisibleProductInput;
}
export interface EmptyCartMutationArgs {
  /** Input for the emptyCart mutation */
  input: EmptyCartInput;
}
export interface IncreaseCountMutationArgs {
  /** The count to increase */
  count?: Maybe<number>;
}
export interface RegisterCustomerMutationArgs {
  /** Input for the registerCustomer mutation */
  input: RegisterCustomerInput;
}
export interface RegisterUserMutationArgs {
  /** Input for the registerUser mutation */
  input: RegisterUserInput;
}
export interface RemoveCouponsMutationArgs {
  /** Input for the removeCoupons mutation */
  input: RemoveCouponsInput;
}
export interface RemoveItemsFromCartMutationArgs {
  /** Input for the removeItemsFromCart mutation */
  input: RemoveItemsFromCartInput;
}
export interface ResetUserPasswordMutationArgs {
  /** Input for the resetUserPassword mutation */
  input: ResetUserPasswordInput;
}
export interface RestoreCartItemsMutationArgs {
  /** Input for the restoreCartItems mutation */
  input: RestoreCartItemsInput;
}
export interface RestoreCommentMutationArgs {
  /** Input for the restoreComment mutation */
  input: RestoreCommentInput;
}
export interface SendPasswordResetEmailMutationArgs {
  /** Input for the sendPasswordResetEmail mutation */
  input: SendPasswordResetEmailInput;
}
export interface UpdateCommentMutationArgs {
  /** Input for the updateComment mutation */
  input: UpdateCommentInput;
}
export interface UpdateCustomerMutationArgs {
  /** Input for the updateCustomer mutation */
  input: UpdateCustomerInput;
}
export interface UpdateItemQuantityMutationArgs {
  /** Input for the updateItemQuantity mutation */
  input: UpdateItemQuantityInput;
}
export interface UpdateMediaItemMutationArgs {
  /** Input for the updateMediaItem mutation */
  input: UpdateMediaItemInput;
}
export interface UpdatePageMutationArgs {
  /** Input for the updatePage mutation */
  input: UpdatePageInput;
}
export interface UpdatePostMutationArgs {
  /** Input for the updatePost mutation */
  input: UpdatePostInput;
}
export interface UpdateSettingsMutationArgs {
  /** Input for the updateSettings mutation */
  input: UpdateSettingsInput;
}
export interface UpdateUserMutationArgs {
  /** Input for the updateUser mutation */
  input: UpdateUserInput;
}

// ====================================================
// Unions
// ====================================================

export type PostObjectUnion = Post | Page | MediaItem | Revision;

export type CommentAuthorUnion = User | CommentAuthor;

export type TermObjectUnion =
  | Category
  | Tag
  | ProductType
  | VisibleProduct
  | ProductCategory
  | ProductTag
  | ShippingClass
  | PaHind
  | PaHulk
  | PaKasutusaeg
  | PaKogus
  | PaKontuur
  | PaKoostisained
  | PaLaadimisaeg
  | PaMaterjal
  | PaMuratasa
  | PaOhutus
  | PaPatareid
  | PaSuurus
  | PaVariant
  | PaVarv
  | PaVeekindlus;

export type MenuItemObjectUnion =
  | Post
  | Page
  | Category
  | Tag
  | ProductCategory
  | ProductTag
  | MenuItem;
