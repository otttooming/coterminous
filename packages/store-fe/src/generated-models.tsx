export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type GraphCms = {
  __typename?: 'GraphCMS';
  /** Entry point to get all settings for the site */
  WP_allSettings?: Maybe<GraphCms_Wp_Settings>;
  /** The cart object */
  WP_cart?: Maybe<GraphCms_Wp_Cart>;
  /** The cart object */
  WP_cartFee?: Maybe<GraphCms_Wp_CartFee>;
  /** The cart object */
  WP_cartItem?: Maybe<GraphCms_Wp_CartItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_categories?: Maybe<GraphCms_Wp_RootQueryToCategoryConnection>;
  /** A 0bject */
  WP_category?: Maybe<GraphCms_Wp_Category>;
  /** Returns a Comment */
  WP_comment?: Maybe<GraphCms_Wp_Comment>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_comments?: Maybe<GraphCms_Wp_RootQueryToCommentConnection>;
  /** A coupon object */
  WP_coupon?: Maybe<GraphCms_Wp_Coupon>;
  /** A coupon object */
  WP_couponBy?: Maybe<GraphCms_Wp_Coupon>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_coupons?: Maybe<GraphCms_Wp_RootQueryToCouponConnection>;
  /** A customer object */
  WP_customer?: Maybe<GraphCms_Wp_Customer>;
  /** A customer object */
  WP_customerBy?: Maybe<GraphCms_Wp_Customer>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_customers?: Maybe<GraphCms_Wp_RootQueryToCustomerConnection>;
  WP_discussionSettings?: Maybe<GraphCms_Wp_DiscussionSettings>;
  WP_generalSettings?: Maybe<GraphCms_Wp_GeneralSettings>;
  /** A 0bject */
  WP_mediaItem?: Maybe<GraphCms_Wp_MediaItem>;
  /** A mediaItem object */
  WP_mediaItemBy?: Maybe<GraphCms_Wp_MediaItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_mediaItems?: Maybe<GraphCms_Wp_RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  WP_menu?: Maybe<GraphCms_Wp_Menu>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_menuItems?: Maybe<GraphCms_Wp_RootQueryToMenuItemConnection>;
  /** A WordPress navigation menu item */
  WP_menuItem?: Maybe<GraphCms_Wp_MenuItem>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_menus?: Maybe<GraphCms_Wp_RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  WP_node?: Maybe<GraphCms_Wp_Node>;
  /** A order object */
  WP_order?: Maybe<GraphCms_Wp_Order>;
  /** A order object */
  WP_orderBy?: Maybe<GraphCms_Wp_Order>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_orders?: Maybe<GraphCms_Wp_RootQueryToOrderConnection>;
  /** A 0bject */
  WP_paHind?: Maybe<GraphCms_Wp_PaHind>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paHinds?: Maybe<GraphCms_Wp_RootQueryToPaHindConnection>;
  /** A 0bject */
  WP_paHulk?: Maybe<GraphCms_Wp_PaHulk>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paHulks?: Maybe<GraphCms_Wp_RootQueryToPaHulkConnection>;
  /** A 0bject */
  WP_paKasutusaeg?: Maybe<GraphCms_Wp_PaKasutusaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKasutusaegs?: Maybe<GraphCms_Wp_RootQueryToPaKasutusaegConnection>;
  /** A 0bject */
  WP_paKogus?: Maybe<GraphCms_Wp_PaKogus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKoguses?: Maybe<GraphCms_Wp_RootQueryToPaKogusConnection>;
  /** A 0bject */
  WP_paKontuur?: Maybe<GraphCms_Wp_PaKontuur>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKontuurs?: Maybe<GraphCms_Wp_RootQueryToPaKontuurConnection>;
  /** A 0bject */
  WP_paKoostisained?: Maybe<GraphCms_Wp_PaKoostisained>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paKoostisaineds?: Maybe<GraphCms_Wp_RootQueryToPaKoostisainedConnection>;
  /** A 0bject */
  WP_paLaadimisaeg?: Maybe<GraphCms_Wp_PaLaadimisaeg>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paLaadimisaegs?: Maybe<GraphCms_Wp_RootQueryToPaLaadimisaegConnection>;
  /** A 0bject */
  WP_paMaterjal?: Maybe<GraphCms_Wp_PaMaterjal>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paMaterjals?: Maybe<GraphCms_Wp_RootQueryToPaMaterjalConnection>;
  /** A 0bject */
  WP_paMuratasa?: Maybe<GraphCms_Wp_PaMuratasa>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paMuratasas?: Maybe<GraphCms_Wp_RootQueryToPaMuratasaConnection>;
  /** A 0bject */
  WP_paOhutus?: Maybe<GraphCms_Wp_PaOhutus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paOhutuses?: Maybe<GraphCms_Wp_RootQueryToPaOhutusConnection>;
  /** A 0bject */
  WP_paPatareid?: Maybe<GraphCms_Wp_PaPatareid>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paPatareids?: Maybe<GraphCms_Wp_RootQueryToPaPatareidConnection>;
  /** A 0bject */
  WP_paSuurus?: Maybe<GraphCms_Wp_PaSuurus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paSuuruses?: Maybe<GraphCms_Wp_RootQueryToPaSuurusConnection>;
  /** A 0bject */
  WP_paVariant?: Maybe<GraphCms_Wp_PaVariant>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVariants?: Maybe<GraphCms_Wp_RootQueryToPaVariantConnection>;
  /** A 0bject */
  WP_paVarv?: Maybe<GraphCms_Wp_PaVarv>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVarvs?: Maybe<GraphCms_Wp_RootQueryToPaVarvConnection>;
  /** A 0bject */
  WP_paVeekindlus?: Maybe<GraphCms_Wp_PaVeekindlus>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_paVeekindluses?: Maybe<GraphCms_Wp_RootQueryToPaVeekindlusConnection>;
  /** A 0bject */
  WP_page?: Maybe<GraphCms_Wp_Page>;
  /** A page object */
  WP_pageBy?: Maybe<GraphCms_Wp_Page>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_pages?: Maybe<GraphCms_Wp_RootQueryToPageConnection>;
  /** A WordPress plugin */
  WP_plugin?: Maybe<GraphCms_Wp_Plugin>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_plugins?: Maybe<GraphCms_Wp_RootQueryToPluginConnection>;
  /** A 0bject */
  WP_post?: Maybe<GraphCms_Wp_Post>;
  /** A post object */
  WP_postBy?: Maybe<GraphCms_Wp_Post>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_posts?: Maybe<GraphCms_Wp_RootQueryToPostConnection>;
  /** A product object */
  WP_product?: Maybe<GraphCms_Wp_Product>;
  /** A product object */
  WP_productBy?: Maybe<GraphCms_Wp_Product>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productCategories?: Maybe<
    GraphCms_Wp_RootQueryToProductCategoryConnection
  >;
  /** A 0bject */
  WP_productCategory?: Maybe<GraphCms_Wp_ProductCategory>;
  /** A 0bject */
  WP_productTag?: Maybe<GraphCms_Wp_ProductTag>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productTags?: Maybe<GraphCms_Wp_RootQueryToProductTagConnection>;
  /** A 0bject */
  WP_productType?: Maybe<GraphCms_Wp_ProductType>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_productTypes?: Maybe<GraphCms_Wp_RootQueryToProductTypeConnection>;
  /** A product variation object */
  WP_productVariation?: Maybe<GraphCms_Wp_ProductVariation>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_products?: Maybe<GraphCms_Wp_RootQueryToProductConnection>;
  WP_readingSettings?: Maybe<GraphCms_Wp_ReadingSettings>;
  /** A refund object */
  WP_refund?: Maybe<GraphCms_Wp_Refund>;
  /** A refund object */
  WP_refundBy?: Maybe<GraphCms_Wp_Refund>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_refunds?: Maybe<GraphCms_Wp_RootQueryToRefundConnection>;
  /** A 0bject */
  WP_revision?: Maybe<GraphCms_Wp_Revision>;
  /** A revision object */
  WP_revisionBy?: Maybe<GraphCms_Wp_Revision>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_revisions?: Maybe<GraphCms_Wp_RootQueryToRevisionConnection>;
  /** A 0bject */
  WP_shippingClass?: Maybe<GraphCms_Wp_ShippingClass>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_shippingClasses?: Maybe<GraphCms_Wp_RootQueryToShippingClassConnection>;
  /** A shipping method object */
  WP_shippingMethod?: Maybe<GraphCms_Wp_ShippingMethod>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_shippingMethods?: Maybe<GraphCms_Wp_RootQueryToShippingMethodConnection>;
  /** A 0bject */
  WP_tag?: Maybe<GraphCms_Wp_Tag>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_tags?: Maybe<GraphCms_Wp_RootQueryToTagConnection>;
  /** A tax rate object */
  WP_taxRate?: Maybe<GraphCms_Wp_TaxRate>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_taxRates?: Maybe<GraphCms_Wp_RootQueryToTaxRateConnection>;
  /** A Theme object */
  WP_theme?: Maybe<GraphCms_Wp_Theme>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_themes?: Maybe<GraphCms_Wp_RootQueryToThemeConnection>;
  /** Returns a user */
  WP_user?: Maybe<GraphCms_Wp_User>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_userRoles?: Maybe<GraphCms_Wp_RootQueryToUserRoleConnection>;
  /** Returns a user role */
  WP_userRole?: Maybe<GraphCms_Wp_UserRole>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_users?: Maybe<GraphCms_Wp_RootQueryToUserConnection>;
  /** Returns the current user */
  WP_viewer?: Maybe<GraphCms_Wp_User>;
  /** A 0bject */
  WP_visibleProduct?: Maybe<GraphCms_Wp_VisibleProduct>;
  /** Connection between the RootQuery type and the RootQuery type */
  WP_visibleProducts?: Maybe<GraphCms_Wp_RootQueryToVisibleProductConnection>;
  WP_writingSettings?: Maybe<GraphCms_Wp_WritingSettings>;
};

export type GraphCmsWp_CartFeeArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_CartItemArgs = {
  key: Scalars['ID'];
};

export type GraphCmsWp_CategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToCategoryConnectionWhereArgs>;
};

export type GraphCmsWp_CategoryArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_CommentArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_CommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToCommentConnectionWhereArgs>;
};

export type GraphCmsWp_CouponArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_CouponByArgs = {
  id?: Maybe<Scalars['ID']>;
  couponId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_CouponsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToCouponConnectionWhereArgs>;
};

export type GraphCmsWp_CustomerArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCmsWp_CustomerByArgs = {
  customerId: Scalars['Int'];
};

export type GraphCmsWp_CustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToCustomerConnectionWhereArgs>;
};

export type GraphCmsWp_MediaItemArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_MediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_MediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToMediaItemConnectionWhereArgs>;
};

export type GraphCmsWp_MenuArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_MenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToMenuItemConnectionWhereArgs>;
};

export type GraphCmsWp_MenuItemArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_MenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToMenuConnectionWhereArgs>;
};

export type GraphCmsWp_NodeArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_OrderArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_OrderByArgs = {
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Int']>;
  orderKey?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_OrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToOrderConnectionWhereArgs>;
};

export type GraphCmsWp_PaHindArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaHindsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaHindConnectionWhereArgs>;
};

export type GraphCmsWp_PaHulkArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaHulksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaHulkConnectionWhereArgs>;
};

export type GraphCmsWp_PaKasutusaegArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaKasutusaegsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaKasutusaegConnectionWhereArgs>;
};

export type GraphCmsWp_PaKogusArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaKogusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaKogusConnectionWhereArgs>;
};

export type GraphCmsWp_PaKontuurArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaKontuursArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaKontuurConnectionWhereArgs>;
};

export type GraphCmsWp_PaKoostisainedArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaKoostisainedsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaKoostisainedConnectionWhereArgs>;
};

export type GraphCmsWp_PaLaadimisaegArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaLaadimisaegsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaLaadimisaegConnectionWhereArgs>;
};

export type GraphCmsWp_PaMaterjalArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaMaterjalsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaMaterjalConnectionWhereArgs>;
};

export type GraphCmsWp_PaMuratasaArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaMuratasasArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaMuratasaConnectionWhereArgs>;
};

export type GraphCmsWp_PaOhutusArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaOhutusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaOhutusConnectionWhereArgs>;
};

export type GraphCmsWp_PaPatareidArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaPatareidsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaPatareidConnectionWhereArgs>;
};

export type GraphCmsWp_PaSuurusArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaSuurusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaSuurusConnectionWhereArgs>;
};

export type GraphCmsWp_PaVariantArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaVariantConnectionWhereArgs>;
};

export type GraphCmsWp_PaVarvArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaVarvsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaVarvConnectionWhereArgs>;
};

export type GraphCmsWp_PaVeekindlusArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PaVeekindlusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPaVeekindlusConnectionWhereArgs>;
};

export type GraphCmsWp_PageArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_PagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPageConnectionWhereArgs>;
};

export type GraphCmsWp_PluginArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_PostArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_PostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_PostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToPostConnectionWhereArgs>;
};

export type GraphCmsWp_ProductArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ProductByArgs = {
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['Int']>;
};

export type GraphCmsWp_ProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToProductCategoryConnectionWhereArgs>;
};

export type GraphCmsWp_ProductCategoryArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ProductTagArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToProductTagConnectionWhereArgs>;
};

export type GraphCmsWp_ProductTypeArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToProductTypeConnectionWhereArgs>;
};

export type GraphCmsWp_ProductVariationArgs = {
  id?: Maybe<Scalars['ID']>;
  variationId?: Maybe<Scalars['Int']>;
};

export type GraphCmsWp_ProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToProductConnectionWhereArgs>;
};

export type GraphCmsWp_RefundArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_RefundByArgs = {
  id?: Maybe<Scalars['ID']>;
  refundId?: Maybe<Scalars['Int']>;
};

export type GraphCmsWp_RefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToRefundConnectionWhereArgs>;
};

export type GraphCmsWp_RevisionArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_RevisionByArgs = {
  id?: Maybe<Scalars['ID']>;
  revisionId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_RevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToRevisionConnectionWhereArgs>;
};

export type GraphCmsWp_ShippingClassArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToShippingClassConnectionWhereArgs>;
};

export type GraphCmsWp_ShippingMethodArgs = {
  id?: Maybe<Scalars['ID']>;
  methodId?: Maybe<Scalars['ID']>;
};

export type GraphCmsWp_ShippingMethodsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_TagArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_TagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToTagConnectionWhereArgs>;
};

export type GraphCmsWp_TaxRateArgs = {
  id?: Maybe<Scalars['ID']>;
  rateId?: Maybe<Scalars['Int']>;
};

export type GraphCmsWp_TaxRatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToTaxRateConnectionWhereArgs>;
};

export type GraphCmsWp_ThemeArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_ThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_UserArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type GraphCmsWp_UserRoleArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_UsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToUserConnectionWhereArgs>;
};

export type GraphCmsWp_VisibleProductArgs = {
  id: Scalars['ID'];
};

export type GraphCmsWp_VisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_RootQueryToVisibleProductConnectionWhereArgs>;
};

/** Input for the addFee mutation */
export type GraphCms_Wp_AddFeeInput = {
  /** Fee amount */
  amount?: Maybe<Scalars['Float']>;
  clientMutationId: Scalars['String'];
  /** Unique name for the fee. */
  name: Scalars['String'];
  /** Is the fee taxable? */
  taxable?: Maybe<Scalars['Boolean']>;
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
};

/** The payload for the addFee mutation */
export type GraphCms_Wp_AddFeePayload = {
  __typename?: 'GraphCMS_WP_AddFeePayload';
  cartFee?: Maybe<GraphCms_Wp_CartFee>;
  clientMutationId: Scalars['String'];
};

/** Input for the addToCart mutation */
export type GraphCms_Wp_AddToCartInput = {
  clientMutationId: Scalars['String'];
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<GraphCms_Wp_ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']>;
};

/** The payload for the addToCart mutation */
export type GraphCms_Wp_AddToCartPayload = {
  __typename?: 'GraphCMS_WP_AddToCartPayload';
  cartItem?: Maybe<GraphCms_Wp_CartItem>;
  clientMutationId: Scalars['String'];
};

/** Input for the applyCoupon mutation */
export type GraphCms_Wp_ApplyCouponInput = {
  clientMutationId: Scalars['String'];
  /** Code of coupon being applied */
  code: Scalars['String'];
};

/** The payload for the applyCoupon mutation */
export type GraphCms_Wp_ApplyCouponPayload = {
  __typename?: 'GraphCMS_WP_ApplyCouponPayload';
  cart?: Maybe<GraphCms_Wp_Cart>;
  clientMutationId: Scalars['String'];
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type GraphCms_Wp_Avatar = {
  __typename?: 'GraphCMS_WP_Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are
 * judged in that order. Default is the value of the 'avatar_rating' option
 */
export enum GraphCms_Wp_AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X',
}

/** Product backorder enumeration */
export enum GraphCms_Wp_BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES',
}

/** The cart object */
export type GraphCms_Wp_Cart = {
  __typename?: 'GraphCMS_WP_Cart';
  /** Connection between the Cart type and the Cart type */
  appliedCoupons?: Maybe<GraphCms_Wp_CartToCouponConnection>;
  /** Connection between the Cart type and the Cart type */
  contents?: Maybe<GraphCms_Wp_CartToCartItemConnection>;
  /** Cart contents tax */
  contentsTax?: Maybe<Scalars['Float']>;
  /** Cart contents total */
  contentsTotal?: Maybe<Scalars['Float']>;
  /** Cart discount tax */
  discountTax?: Maybe<Scalars['Float']>;
  /** Cart discount total */
  discountTotal?: Maybe<Scalars['Float']>;
  /** Do display prices include taxes */
  displayPricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /** Additional fees on the cart. */
  fees?: Maybe<Array<Maybe<GraphCms_Wp_CartFee>>>;
  /** Cart fee tax */
  feeTax?: Maybe<Scalars['Float']>;
  /** Cart fee total */
  feeTotal?: Maybe<Scalars['Float']>;
  /** Is cart empty */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** Is customer shipping address needed */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /** Cart shipping tax */
  shippingTax?: Maybe<Scalars['Float']>;
  /** Cart shipping total */
  shippingTotal?: Maybe<Scalars['Float']>;
  /** Cart subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Cart subtotal tax */
  subtotalTax?: Maybe<Scalars['Float']>;
  /** Cart total after calculation */
  total?: Maybe<Scalars['Float']>;
  /** Cart total tax amount */
  totalTax?: Maybe<Scalars['Float']>;
};

/** The cart object */
export type GraphCms_Wp_CartAppliedCouponsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CartToCouponConnectionWhereArgs>;
};

/** The cart object */
export type GraphCms_Wp_CartContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CartToCartItemConnectionWhereArgs>;
};

/** An additional fee */
export type GraphCms_Wp_CartFee = {
  __typename?: 'GraphCMS_WP_CartFee';
  /** Fee amount */
  amount?: Maybe<Scalars['Float']>;
  /** Fee ID */
  id: Scalars['ID'];
  /** Fee name */
  name: Scalars['String'];
  /** Is fee taxable? */
  taxable?: Maybe<Scalars['Boolean']>;
  /** Fee tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Fee total */
  total?: Maybe<Scalars['Float']>;
};

/** A item in the cart */
export type GraphCms_Wp_CartItem = {
  __typename?: 'GraphCMS_WP_CartItem';
  /** CartItem ID */
  key: Scalars['ID'];
  /** A product in the cart */
  product?: Maybe<GraphCms_Wp_Product>;
  /** Quantity of the product */
  quantity?: Maybe<Scalars['Int']>;
  /** Item&#039;s subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Item&#039;s subtotal tax */
  subtotalTax?: Maybe<Scalars['Float']>;
  /** Item&#039;s tax */
  tax?: Maybe<Scalars['Float']>;
  /** Item&#039;s total */
  total?: Maybe<Scalars['Float']>;
  /** Selected variation of the product */
  variation?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Connection between the Cart type and the Cart type */
export type GraphCms_Wp_CartToCartItemConnection = {
  __typename?: 'GraphCMS_WP_CartToCartItemConnection';
  /** Edges for the CartToCartItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CartToCartItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_CartItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CartToCartItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_CartToCartItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_CartItem>;
};

/** Arguments for filtering the CartToCartItemConnection connection */
export type GraphCms_Wp_CartToCartItemConnectionWhereArgs = {
  /** Limit results to cart item that require shipping */
  needShipping?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Cart type and the Cart type */
export type GraphCms_Wp_CartToCouponConnection = {
  __typename?: 'GraphCMS_WP_CartToCouponConnection';
  /** Edges for the CartToCouponConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CartToCouponConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Coupon>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CartToCouponConnectionEdge = {
  __typename?: 'GraphCMS_WP_CartToCouponConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Coupon>;
};

/** Arguments for filtering the CartToCouponConnection connection */
export type GraphCms_Wp_CartToCouponConnectionWhereArgs = {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Product catalog visibility enumeration */
export enum GraphCms_Wp_CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE',
}

/** The category type */
export type GraphCms_Wp_Category = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Category';
  /** The ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_Category>>>;
  /** The id field matches the WP_Post-&gt;ID field. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and the category type */
  children?: Maybe<GraphCms_Wp_CategoryToCategoryConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the category */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The parent object */
  parent?: Maybe<GraphCms_Wp_Category>;
  /** Connection between the category type and the category type */
  posts?: Maybe<GraphCms_Wp_CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** The category type */
export type GraphCms_Wp_CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type GraphCms_Wp_CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CategoryToPostConnectionWhereArgs>;
};

/** Connection between the category type and the category type */
export type GraphCms_Wp_CategoryToCategoryConnection = {
  __typename?: 'GraphCMS_WP_CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CategoryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_CategoryToCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type GraphCms_Wp_CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type GraphCms_Wp_CategoryToPostConnection = {
  __typename?: 'GraphCMS_WP_CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CategoryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_CategoryToPostConnectionEdge = {
  __typename?: 'GraphCMS_WP_CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Post>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type GraphCms_Wp_CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** A Comment object */
export type GraphCms_Wp_Comment = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Comment';
  /** User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<GraphCms_Wp_CommentAuthorUnion>;
  /** IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the Comment type */
  children?: Maybe<GraphCms_Wp_CommentToCommentConnection>;
  /** The object the comment was added to */
  commentedOn?: Maybe<GraphCms_Wp_PostObjectUnion>;
  /** ID for the comment, unique among comments. */
  commentId?: Maybe<Scalars['Int']>;
  /** Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  content?: Maybe<Scalars['String']>;
  /** Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  date?: Maybe<Scalars['String']>;
  /** Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  karma?: Maybe<Scalars['Int']>;
  /** Parent comment of current comment. This field is equivalent to the WP_Comment
   * instance matching the WP_Comment-&gt;comment_parent ID.
   */
  parent?: Maybe<GraphCms_Wp_Comment>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
  type?: Maybe<Scalars['String']>;
};

/** A Comment object */
export type GraphCms_Wp_CommentChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CommentToCommentConnectionWhereArgs>;
};

/** A Comment object */
export type GraphCms_Wp_CommentContentArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** A Comment Author object */
export type GraphCms_Wp_CommentAuthor = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_CommentAuthor';
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the Comment Author user */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};

export type GraphCms_Wp_CommentAuthorUnion =
  | GraphCms_Wp_User
  | GraphCms_Wp_CommentAuthor;

/** Options for ordering the connection */
export enum GraphCms_Wp_CommentsConnectionOrderbyEnum {
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

/** Connection between the Comment type and the Comment type */
export type GraphCms_Wp_CommentToCommentConnection = {
  __typename?: 'GraphCMS_WP_CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CommentToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CommentToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type GraphCms_Wp_CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Countries enumeration */
export enum GraphCms_Wp_CountriesEnum {
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

/** A coupon object */
export type GraphCms_Wp_Coupon = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Coupon';
  /** Amount off provided by the coupon */
  amount?: Maybe<Scalars['Float']>;
  /** Coupon code */
  code?: Maybe<Scalars['String']>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  couponId?: Maybe<Scalars['Int']>;
  /** Date coupon created */
  date?: Maybe<Scalars['String']>;
  /** Date coupon expires */
  dateExpiry?: Maybe<Scalars['String']>;
  /** Explanation of what the coupon does */
  description?: Maybe<Scalars['String']>;
  /** Type of discount */
  discountType?: Maybe<GraphCms_Wp_DiscountTypeEnum>;
  /** Only customers with a matching email address can use the coupon */
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Coupon type and the Coupon type */
  excludedProductCategories?: Maybe<
    GraphCms_Wp_CouponToProductCategoryConnection
  >;
  /** Connection between the Coupon type and the Coupon type */
  excludedProducts?: Maybe<GraphCms_Wp_CouponToProductConnection>;
  /** Excluding sale items mean this coupon cannot be used on items that are on sale (or carts that contain on sale items) */
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  /** Does this coupon grant free shipping? */
  freeShipping?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the coupon */
  id: Scalars['ID'];
  /** Individual use means this coupon cannot be used in conjunction with other coupons */
  individualUse?: Maybe<Scalars['Boolean']>;
  /** The number of products in your cart this coupon can apply to (for product discounts) */
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  /** Maximum spend amount that must be met before this coupon can be used  */
  maximumAmount?: Maybe<Scalars['Float']>;
  /** Minimum spend amount that must be met before this coupon can be used */
  minimumAmount?: Maybe<Scalars['Float']>;
  /** Date coupon modified */
  modified?: Maybe<Scalars['String']>;
  /** Connection between the Coupon type and the Coupon type */
  productCategories?: Maybe<GraphCms_Wp_CouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Coupon type */
  products?: Maybe<GraphCms_Wp_CouponToProductConnection>;
  /** How many times the coupon has been used */
  usageCount?: Maybe<Scalars['Int']>;
  /** Amount of times this coupon can be used globally */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Amount of times this coupon can be used by a customer */
  usageLimitPerUser?: Maybe<Scalars['Int']>;
  /** Connection between the Coupon type and the Coupon type */
  usedBy?: Maybe<GraphCms_Wp_CouponToCustomerConnection>;
};

/** A coupon object */
export type GraphCms_Wp_CouponExcludedProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CouponToProductCategoryConnectionWhereArgs>;
};

/** A coupon object */
export type GraphCms_Wp_CouponExcludedProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CouponToProductConnectionWhereArgs>;
};

/** A coupon object */
export type GraphCms_Wp_CouponProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CouponToProductCategoryConnectionWhereArgs>;
};

/** A coupon object */
export type GraphCms_Wp_CouponProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CouponToProductConnectionWhereArgs>;
};

/** A coupon object */
export type GraphCms_Wp_CouponUsedByArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CouponToCustomerConnectionWhereArgs>;
};

/** a coupon line object */
export type GraphCms_Wp_CouponLine = {
  __typename?: 'GraphCMS_WP_CouponLine';
  /** Line&#039;s Coupon code */
  code?: Maybe<Scalars['String']>;
  /** Line&#039;s Coupon */
  coupon?: Maybe<GraphCms_Wp_Coupon>;
  /** Line&#039;s Discount total */
  discount?: Maybe<Scalars['String']>;
  /** Line&#039;s Discount total tax */
  discountTax?: Maybe<Scalars['String']>;
  /** The Id of the order item. */
  itemId?: Maybe<Scalars['Int']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
};

/** Connection between the Coupon type and the Coupon type */
export type GraphCms_Wp_CouponToCustomerConnection = {
  __typename?: 'GraphCMS_WP_CouponToCustomerConnection';
  /** Edges for the CouponToCustomerConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CouponToCustomerConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Customer>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CouponToCustomerConnectionEdge = {
  __typename?: 'GraphCMS_WP_CouponToCustomerConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Customer>;
};

/** Arguments for filtering the CouponToCustomerConnection connection */
export type GraphCms_Wp_CouponToCustomerConnectionWhereArgs = {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<GraphCms_Wp_CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<GraphCms_Wp_UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the Coupon type and the Coupon type */
export type GraphCms_Wp_CouponToProductCategoryConnection = {
  __typename?: 'GraphCMS_WP_CouponToProductCategoryConnection';
  /** Edges for the CouponToProductCategoryConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_CouponToProductCategoryConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_CouponToProductCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_CouponToProductCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Arguments for filtering the CouponToProductCategoryConnection connection */
export type GraphCms_Wp_CouponToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Coupon type and the Coupon type */
export type GraphCms_Wp_CouponToProductConnection = {
  __typename?: 'GraphCMS_WP_CouponToProductConnection';
  /** Edges for the CouponToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CouponToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CouponToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_CouponToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the CouponToProductConnection connection */
export type GraphCms_Wp_CouponToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Input for the createCategory mutation */
export type GraphCms_Wp_CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type GraphCms_Wp_CreateCategoryPayload = {
  __typename?: 'GraphCMS_WP_CreateCategoryPayload';
  /** The created category */
  category?: Maybe<GraphCms_Wp_Category>;
  clientMutationId: Scalars['String'];
};

/** Input for the createComment mutation */
export type GraphCms_Wp_CreateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>;
};

/** The payload for the createComment mutation */
export type GraphCms_Wp_CreateCommentPayload = {
  __typename?: 'GraphCMS_WP_CreateCommentPayload';
  clientMutationId: Scalars['String'];
  /** The comment that was created */
  comment?: Maybe<GraphCms_Wp_Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation */
export type GraphCms_Wp_CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<GraphCms_Wp_MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation */
export type GraphCms_Wp_CreateMediaItemPayload = {
  __typename?: 'GraphCMS_WP_CreateMediaItemPayload';
  clientMutationId: Scalars['String'];
  mediaItem?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Input for the createPage mutation */
export type GraphCms_Wp_CreatePageInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId: Scalars['String'];
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** If the post is an attachment or a media file, this field will carry the
   * corresponding MIME type. This field is equivalent to the value of
   * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
   * database table.
   */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** The title of the post */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the createPage mutation */
export type GraphCms_Wp_CreatePagePayload = {
  __typename?: 'GraphCMS_WP_CreatePagePayload';
  clientMutationId: Scalars['String'];
  page?: Maybe<GraphCms_Wp_Page>;
};

/** Input for the createPaHind mutation */
export type GraphCms_Wp_CreatePaHindInput = {
  /** The slug that the pa_hind will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_hind object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_hind object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaHind mutation */
export type GraphCms_Wp_CreatePaHindPayload = {
  __typename?: 'GraphCMS_WP_CreatePaHindPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_hind */
  paHind?: Maybe<GraphCms_Wp_PaHind>;
};

/** Input for the createPaHulk mutation */
export type GraphCms_Wp_CreatePaHulkInput = {
  /** The slug that the pa_hulk will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_hulk object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_hulk object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaHulk mutation */
export type GraphCms_Wp_CreatePaHulkPayload = {
  __typename?: 'GraphCMS_WP_CreatePaHulkPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_hulk */
  paHulk?: Maybe<GraphCms_Wp_PaHulk>;
};

/** Input for the createPaKasutusaeg mutation */
export type GraphCms_Wp_CreatePaKasutusaegInput = {
  /** The slug that the pa_kasutusaeg will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kasutusaeg object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_kasutusaeg object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaKasutusaeg mutation */
export type GraphCms_Wp_CreatePaKasutusaegPayload = {
  __typename?: 'GraphCMS_WP_CreatePaKasutusaegPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<GraphCms_Wp_PaKasutusaeg>;
};

/** Input for the createPaKogus mutation */
export type GraphCms_Wp_CreatePaKogusInput = {
  /** The slug that the pa_kogus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kogus object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_kogus object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaKogus mutation */
export type GraphCms_Wp_CreatePaKogusPayload = {
  __typename?: 'GraphCMS_WP_CreatePaKogusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kogus */
  paKogus?: Maybe<GraphCms_Wp_PaKogus>;
};

/** Input for the createPaKontuur mutation */
export type GraphCms_Wp_CreatePaKontuurInput = {
  /** The slug that the pa_kontuur will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kontuur object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_kontuur object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaKontuur mutation */
export type GraphCms_Wp_CreatePaKontuurPayload = {
  __typename?: 'GraphCMS_WP_CreatePaKontuurPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kontuur */
  paKontuur?: Maybe<GraphCms_Wp_PaKontuur>;
};

/** Input for the createPaKoostisained mutation */
export type GraphCms_Wp_CreatePaKoostisainedInput = {
  /** The slug that the pa_koostisained will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_koostisained object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_koostisained object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaKoostisained mutation */
export type GraphCms_Wp_CreatePaKoostisainedPayload = {
  __typename?: 'GraphCMS_WP_CreatePaKoostisainedPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_koostisained */
  paKoostisained?: Maybe<GraphCms_Wp_PaKoostisained>;
};

/** Input for the createPaLaadimisaeg mutation */
export type GraphCms_Wp_CreatePaLaadimisaegInput = {
  /** The slug that the pa_laadimisaeg will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_laadimisaeg object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_laadimisaeg object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaLaadimisaeg mutation */
export type GraphCms_Wp_CreatePaLaadimisaegPayload = {
  __typename?: 'GraphCMS_WP_CreatePaLaadimisaegPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<GraphCms_Wp_PaLaadimisaeg>;
};

/** Input for the createPaMaterjal mutation */
export type GraphCms_Wp_CreatePaMaterjalInput = {
  /** The slug that the pa_materjal will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_materjal object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_materjal object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaMaterjal mutation */
export type GraphCms_Wp_CreatePaMaterjalPayload = {
  __typename?: 'GraphCMS_WP_CreatePaMaterjalPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_materjal */
  paMaterjal?: Maybe<GraphCms_Wp_PaMaterjal>;
};

/** Input for the createPaMuratasa mutation */
export type GraphCms_Wp_CreatePaMuratasaInput = {
  /** The slug that the pa_muratasa will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_muratasa object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_muratasa object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaMuratasa mutation */
export type GraphCms_Wp_CreatePaMuratasaPayload = {
  __typename?: 'GraphCMS_WP_CreatePaMuratasaPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_muratasa */
  paMuratasa?: Maybe<GraphCms_Wp_PaMuratasa>;
};

/** Input for the createPaOhutus mutation */
export type GraphCms_Wp_CreatePaOhutusInput = {
  /** The slug that the pa_ohutus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_ohutus object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_ohutus object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaOhutus mutation */
export type GraphCms_Wp_CreatePaOhutusPayload = {
  __typename?: 'GraphCMS_WP_CreatePaOhutusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_ohutus */
  paOhutus?: Maybe<GraphCms_Wp_PaOhutus>;
};

/** Input for the createPaPatareid mutation */
export type GraphCms_Wp_CreatePaPatareidInput = {
  /** The slug that the pa_patareid will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_patareid object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_patareid object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaPatareid mutation */
export type GraphCms_Wp_CreatePaPatareidPayload = {
  __typename?: 'GraphCMS_WP_CreatePaPatareidPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_patareid */
  paPatareid?: Maybe<GraphCms_Wp_PaPatareid>;
};

/** Input for the createPaSuurus mutation */
export type GraphCms_Wp_CreatePaSuurusInput = {
  /** The slug that the pa_suurus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_suurus object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_suurus object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaSuurus mutation */
export type GraphCms_Wp_CreatePaSuurusPayload = {
  __typename?: 'GraphCMS_WP_CreatePaSuurusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_suurus */
  paSuurus?: Maybe<GraphCms_Wp_PaSuurus>;
};

/** Input for the createPaVariant mutation */
export type GraphCms_Wp_CreatePaVariantInput = {
  /** The slug that the pa_variant will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_variant object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_variant object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaVariant mutation */
export type GraphCms_Wp_CreatePaVariantPayload = {
  __typename?: 'GraphCMS_WP_CreatePaVariantPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_variant */
  paVariant?: Maybe<GraphCms_Wp_PaVariant>;
};

/** Input for the createPaVarv mutation */
export type GraphCms_Wp_CreatePaVarvInput = {
  /** The slug that the pa_varv will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_varv object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_varv object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaVarv mutation */
export type GraphCms_Wp_CreatePaVarvPayload = {
  __typename?: 'GraphCMS_WP_CreatePaVarvPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_varv */
  paVarv?: Maybe<GraphCms_Wp_PaVarv>;
};

/** Input for the createPaVeekindlus mutation */
export type GraphCms_Wp_CreatePaVeekindlusInput = {
  /** The slug that the pa_veekindlus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_veekindlus object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_veekindlus object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaVeekindlus mutation */
export type GraphCms_Wp_CreatePaVeekindlusPayload = {
  __typename?: 'GraphCMS_WP_CreatePaVeekindlusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<GraphCms_Wp_PaVeekindlus>;
};

/** Input for the createPost mutation */
export type GraphCms_Wp_CreatePostInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<GraphCms_Wp_PostCategoriesInput>;
  clientMutationId: Scalars['String'];
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** If the post is an attachment or a media file, this field will carry the
   * corresponding MIME type. This field is equivalent to the value of
   * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
   * database table.
   */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<GraphCms_Wp_PostTagsInput>;
  /** The title of the post */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the createPost mutation */
export type GraphCms_Wp_CreatePostPayload = {
  __typename?: 'GraphCMS_WP_CreatePostPayload';
  clientMutationId: Scalars['String'];
  post?: Maybe<GraphCms_Wp_Post>;
};

/** Input for the createProductCategory mutation */
export type GraphCms_Wp_CreateProductCategoryInput = {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_cat object to mutate */
  name: Scalars['String'];
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductCategory mutation */
export type GraphCms_Wp_CreateProductCategoryPayload = {
  __typename?: 'GraphCMS_WP_CreateProductCategoryPayload';
  clientMutationId: Scalars['String'];
  /** The created product_cat */
  productCategory?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Input for the createProductTag mutation */
export type GraphCms_Wp_CreateProductTagInput = {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductTag mutation */
export type GraphCms_Wp_CreateProductTagPayload = {
  __typename?: 'GraphCMS_WP_CreateProductTagPayload';
  clientMutationId: Scalars['String'];
  /** The created product_tag */
  productTag?: Maybe<GraphCms_Wp_ProductTag>;
};

/** Input for the createProductType mutation */
export type GraphCms_Wp_CreateProductTypeInput = {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_type object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductType mutation */
export type GraphCms_Wp_CreateProductTypePayload = {
  __typename?: 'GraphCMS_WP_CreateProductTypePayload';
  clientMutationId: Scalars['String'];
  /** The created product_type */
  productType?: Maybe<GraphCms_Wp_ProductType>;
};

/** Input for the createShippingClass mutation */
export type GraphCms_Wp_CreateShippingClassInput = {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_shipping_class object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createShippingClass mutation */
export type GraphCms_Wp_CreateShippingClassPayload = {
  __typename?: 'GraphCMS_WP_CreateShippingClassPayload';
  clientMutationId: Scalars['String'];
  /** The created product_shipping_class */
  shippingClass?: Maybe<GraphCms_Wp_ShippingClass>;
};

/** Input for the createTag mutation */
export type GraphCms_Wp_CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type GraphCms_Wp_CreateTagPayload = {
  __typename?: 'GraphCMS_WP_CreateTagPayload';
  clientMutationId: Scalars['String'];
  /** The created post_tag */
  tag?: Maybe<GraphCms_Wp_Tag>;
};

/** Input for the createUser mutation */
export type GraphCms_Wp_CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type GraphCms_Wp_CreateUserPayload = {
  __typename?: 'GraphCMS_WP_CreateUserPayload';
  clientMutationId: Scalars['String'];
  user?: Maybe<GraphCms_Wp_User>;
};

/** Input for the createVisibleProduct mutation */
export type GraphCms_Wp_CreateVisibleProductInput = {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_visibility object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createVisibleProduct mutation */
export type GraphCms_Wp_CreateVisibleProductPayload = {
  __typename?: 'GraphCMS_WP_CreateVisibleProductPayload';
  clientMutationId: Scalars['String'];
  /** The created product_visibility */
  visibleProduct?: Maybe<GraphCms_Wp_VisibleProduct>;
};

/** A customer object */
export type GraphCms_Wp_Customer = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Customer';
  /** Return the date customer billing address properties */
  billing?: Maybe<GraphCms_Wp_CustomerAddress>;
  /** Has customer calculated shipping? */
  calculatedShipping?: Maybe<Scalars['Boolean']>;
  /** The Id of the user. Equivalent to WP_User-&gt;ID */
  customerId?: Maybe<Scalars['Int']>;
  /** Return the date customer was created */
  date?: Maybe<Scalars['String']>;
  /** Return the customer&#039;s display name. */
  displayName?: Maybe<Scalars['String']>;
  /** Return the customer&#039;s email. */
  email?: Maybe<Scalars['String']>;
  /** Return the customer&#039;s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Has calculated shipping? */
  hasCalculatedShipping?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the customer */
  id: Scalars['ID'];
  /** Return the date customer was last updated */
  isPayingCustomer?: Maybe<Scalars['Boolean']>;
  /** Is customer VAT exempt? */
  isVatExempt?: Maybe<Scalars['Boolean']>;
  /** Return the customer&#039;s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Gets the customers last order. */
  lastOrder?: Maybe<GraphCms_Wp_Order>;
  /** Return the date customer was last updated */
  modified?: Maybe<Scalars['String']>;
  /** Return the number of orders this customer has. */
  orderCount?: Maybe<Scalars['Int']>;
  /** Connection between the Customer type and the Customer type */
  orders?: Maybe<GraphCms_Wp_CustomerToOrderConnection>;
  /** Connection between the Customer type and the Customer type */
  refunds?: Maybe<GraphCms_Wp_CustomerToRefundConnection>;
  /** Return the customer&#039;s user role. */
  role?: Maybe<Scalars['String']>;
  /** Return the date customer shipping address properties */
  shipping?: Maybe<GraphCms_Wp_CustomerAddress>;
  /** Return how much money this customer has spent. */
  totalSpent?: Maybe<Scalars['Float']>;
  /** Return the customer&#039;s username. */
  username?: Maybe<Scalars['String']>;
};

/** A customer object */
export type GraphCms_Wp_CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CustomerToOrderConnectionWhereArgs>;
};

/** A customer object */
export type GraphCms_Wp_CustomerRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_CustomerToRefundConnectionWhereArgs>;
};

/** A customer address object */
export type GraphCms_Wp_CustomerAddress = {
  __typename?: 'GraphCMS_WP_CustomerAddress';
  /** Address 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address 2 */
  address2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<GraphCms_Wp_CountriesEnum>;
  /** E-mail */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
};

/** Customer address information */
export type GraphCms_Wp_CustomerAddressInput = {
  /** Address 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address 2 */
  address2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<GraphCms_Wp_CountriesEnum>;
  /** E-mail */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Clear old address data */
  overwrite?: Maybe<Scalars['Boolean']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
};

/** Field to order the connection by */
export enum GraphCms_Wp_CustomerConnectionOrderbyEnum {
  /** Order by customer email */
  Email = 'EMAIL',
  /** Order by customer ID */
  Id = 'ID',
  /** Order by include field */
  Include = 'INCLUDE',
  /** Order by customer display name */
  Name = 'NAME',
  /** Order by customer registration date */
  RegisteredDate = 'REGISTERED_DATE',
  /** Order by customer username */
  Username = 'USERNAME',
}

/** Connection between the Customer type and the Customer type */
export type GraphCms_Wp_CustomerToOrderConnection = {
  __typename?: 'GraphCMS_WP_CustomerToOrderConnection';
  /** Edges for the CustomerToOrderConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CustomerToOrderConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Order>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CustomerToOrderConnectionEdge = {
  __typename?: 'GraphCMS_WP_CustomerToOrderConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Order>;
};

/** Arguments for filtering the CustomerToOrderConnection connection */
export type GraphCms_Wp_CustomerToOrderConnectionWhereArgs = {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<Scalars['Int']>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<GraphCms_Wp_OrderStatusEnum>>>;
};

/** Connection between the Customer type and the Customer type */
export type GraphCms_Wp_CustomerToRefundConnection = {
  __typename?: 'GraphCMS_WP_CustomerToRefundConnection';
  /** Edges for the CustomerToRefundConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_CustomerToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_CustomerToRefundConnectionEdge = {
  __typename?: 'GraphCMS_WP_CustomerToRefundConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Refund>;
};

/** Arguments for filtering the CustomerToRefundConnection connection */
export type GraphCms_Wp_CustomerToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Date values */
export type GraphCms_Wp_DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type GraphCms_Wp_DateQueryInput = {
  after?: Maybe<GraphCms_Wp_DateInput>;
  before?: Maybe<GraphCms_Wp_DateInput>;
  /** Column to query against */
  column?: Maybe<GraphCms_Wp_PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<GraphCms_Wp_RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Input for the deleteCategory mutation */
export type GraphCms_Wp_DeleteCategoryInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type GraphCms_Wp_DeleteCategoryPayload = {
  __typename?: 'GraphCMS_WP_DeleteCategoryPayload';
  /** The deteted term object */
  category?: Maybe<GraphCms_Wp_Category>;
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type GraphCms_Wp_DeleteCommentInput = {
  clientMutationId: Scalars['String'];
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type GraphCms_Wp_DeleteCommentPayload = {
  __typename?: 'GraphCMS_WP_DeleteCommentPayload';
  clientMutationId: Scalars['String'];
  /** The deleted comment object */
  comment?: Maybe<GraphCms_Wp_Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type GraphCms_Wp_DeleteMediaItemInput = {
  clientMutationId: Scalars['String'];
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type GraphCms_Wp_DeleteMediaItemPayload = {
  __typename?: 'GraphCMS_WP_DeleteMediaItemPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Input for the deletePage mutation */
export type GraphCms_Wp_DeletePageInput = {
  clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type GraphCms_Wp_DeletePagePayload = {
  __typename?: 'GraphCMS_WP_DeletePagePayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<GraphCms_Wp_Page>;
};

/** Input for the deletePaHind mutation */
export type GraphCms_Wp_DeletePaHindInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paHind to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaHind mutation */
export type GraphCms_Wp_DeletePaHindPayload = {
  __typename?: 'GraphCMS_WP_DeletePaHindPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paHind?: Maybe<GraphCms_Wp_PaHind>;
};

/** Input for the deletePaHulk mutation */
export type GraphCms_Wp_DeletePaHulkInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paHulk to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaHulk mutation */
export type GraphCms_Wp_DeletePaHulkPayload = {
  __typename?: 'GraphCMS_WP_DeletePaHulkPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paHulk?: Maybe<GraphCms_Wp_PaHulk>;
};

/** Input for the deletePaKasutusaeg mutation */
export type GraphCms_Wp_DeletePaKasutusaegInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paKasutusaeg to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaKasutusaeg mutation */
export type GraphCms_Wp_DeletePaKasutusaegPayload = {
  __typename?: 'GraphCMS_WP_DeletePaKasutusaegPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paKasutusaeg?: Maybe<GraphCms_Wp_PaKasutusaeg>;
};

/** Input for the deletePaKogus mutation */
export type GraphCms_Wp_DeletePaKogusInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paKogus to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaKogus mutation */
export type GraphCms_Wp_DeletePaKogusPayload = {
  __typename?: 'GraphCMS_WP_DeletePaKogusPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paKogus?: Maybe<GraphCms_Wp_PaKogus>;
};

/** Input for the deletePaKontuur mutation */
export type GraphCms_Wp_DeletePaKontuurInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paKontuur to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaKontuur mutation */
export type GraphCms_Wp_DeletePaKontuurPayload = {
  __typename?: 'GraphCMS_WP_DeletePaKontuurPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paKontuur?: Maybe<GraphCms_Wp_PaKontuur>;
};

/** Input for the deletePaKoostisained mutation */
export type GraphCms_Wp_DeletePaKoostisainedInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paKoostisained to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaKoostisained mutation */
export type GraphCms_Wp_DeletePaKoostisainedPayload = {
  __typename?: 'GraphCMS_WP_DeletePaKoostisainedPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paKoostisained?: Maybe<GraphCms_Wp_PaKoostisained>;
};

/** Input for the deletePaLaadimisaeg mutation */
export type GraphCms_Wp_DeletePaLaadimisaegInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paLaadimisaeg to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaLaadimisaeg mutation */
export type GraphCms_Wp_DeletePaLaadimisaegPayload = {
  __typename?: 'GraphCMS_WP_DeletePaLaadimisaegPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paLaadimisaeg?: Maybe<GraphCms_Wp_PaLaadimisaeg>;
};

/** Input for the deletePaMaterjal mutation */
export type GraphCms_Wp_DeletePaMaterjalInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paMaterjal to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaMaterjal mutation */
export type GraphCms_Wp_DeletePaMaterjalPayload = {
  __typename?: 'GraphCMS_WP_DeletePaMaterjalPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paMaterjal?: Maybe<GraphCms_Wp_PaMaterjal>;
};

/** Input for the deletePaMuratasa mutation */
export type GraphCms_Wp_DeletePaMuratasaInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paMuratasa to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaMuratasa mutation */
export type GraphCms_Wp_DeletePaMuratasaPayload = {
  __typename?: 'GraphCMS_WP_DeletePaMuratasaPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paMuratasa?: Maybe<GraphCms_Wp_PaMuratasa>;
};

/** Input for the deletePaOhutus mutation */
export type GraphCms_Wp_DeletePaOhutusInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paOhutus to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaOhutus mutation */
export type GraphCms_Wp_DeletePaOhutusPayload = {
  __typename?: 'GraphCMS_WP_DeletePaOhutusPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paOhutus?: Maybe<GraphCms_Wp_PaOhutus>;
};

/** Input for the deletePaPatareid mutation */
export type GraphCms_Wp_DeletePaPatareidInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paPatareid to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaPatareid mutation */
export type GraphCms_Wp_DeletePaPatareidPayload = {
  __typename?: 'GraphCMS_WP_DeletePaPatareidPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paPatareid?: Maybe<GraphCms_Wp_PaPatareid>;
};

/** Input for the deletePaSuurus mutation */
export type GraphCms_Wp_DeletePaSuurusInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paSuurus to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaSuurus mutation */
export type GraphCms_Wp_DeletePaSuurusPayload = {
  __typename?: 'GraphCMS_WP_DeletePaSuurusPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paSuurus?: Maybe<GraphCms_Wp_PaSuurus>;
};

/** Input for the deletePaVariant mutation */
export type GraphCms_Wp_DeletePaVariantInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paVariant to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaVariant mutation */
export type GraphCms_Wp_DeletePaVariantPayload = {
  __typename?: 'GraphCMS_WP_DeletePaVariantPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paVariant?: Maybe<GraphCms_Wp_PaVariant>;
};

/** Input for the deletePaVarv mutation */
export type GraphCms_Wp_DeletePaVarvInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paVarv to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaVarv mutation */
export type GraphCms_Wp_DeletePaVarvPayload = {
  __typename?: 'GraphCMS_WP_DeletePaVarvPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paVarv?: Maybe<GraphCms_Wp_PaVarv>;
};

/** Input for the deletePaVeekindlus mutation */
export type GraphCms_Wp_DeletePaVeekindlusInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the paVeekindlus to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaVeekindlus mutation */
export type GraphCms_Wp_DeletePaVeekindlusPayload = {
  __typename?: 'GraphCMS_WP_DeletePaVeekindlusPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  paVeekindlus?: Maybe<GraphCms_Wp_PaVeekindlus>;
};

/** Input for the deletePost mutation */
export type GraphCms_Wp_DeletePostInput = {
  clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type GraphCms_Wp_DeletePostPayload = {
  __typename?: 'GraphCMS_WP_DeletePostPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<GraphCms_Wp_Post>;
};

/** Input for the deleteProductCategory mutation */
export type GraphCms_Wp_DeleteProductCategoryInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the productCategory to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductCategory mutation */
export type GraphCms_Wp_DeleteProductCategoryPayload = {
  __typename?: 'GraphCMS_WP_DeleteProductCategoryPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productCategory?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Input for the deleteProductTag mutation */
export type GraphCms_Wp_DeleteProductTagInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the productTag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductTag mutation */
export type GraphCms_Wp_DeleteProductTagPayload = {
  __typename?: 'GraphCMS_WP_DeleteProductTagPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productTag?: Maybe<GraphCms_Wp_ProductTag>;
};

/** Input for the deleteProductType mutation */
export type GraphCms_Wp_DeleteProductTypeInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the productType to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductType mutation */
export type GraphCms_Wp_DeleteProductTypePayload = {
  __typename?: 'GraphCMS_WP_DeleteProductTypePayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productType?: Maybe<GraphCms_Wp_ProductType>;
};

/** Input for the deleteRevision mutation */
export type GraphCms_Wp_DeleteRevisionInput = {
  clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the revision to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteRevision mutation */
export type GraphCms_Wp_DeleteRevisionPayload = {
  __typename?: 'GraphCMS_WP_DeleteRevisionPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  revision?: Maybe<GraphCms_Wp_Revision>;
};

/** Input for the deleteShippingClass mutation */
export type GraphCms_Wp_DeleteShippingClassInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the shippingClass to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteShippingClass mutation */
export type GraphCms_Wp_DeleteShippingClassPayload = {
  __typename?: 'GraphCMS_WP_DeleteShippingClassPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  shippingClass?: Maybe<GraphCms_Wp_ShippingClass>;
};

/** Input for the deleteTag mutation */
export type GraphCms_Wp_DeleteTagInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type GraphCms_Wp_DeleteTagPayload = {
  __typename?: 'GraphCMS_WP_DeleteTagPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<GraphCms_Wp_Tag>;
};

/** Input for the deleteUser mutation */
export type GraphCms_Wp_DeleteUserInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type GraphCms_Wp_DeleteUserPayload = {
  __typename?: 'GraphCMS_WP_DeleteUserPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<GraphCms_Wp_User>;
};

/** Input for the deleteVisibleProduct mutation */
export type GraphCms_Wp_DeleteVisibleProductInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the visibleProduct to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteVisibleProduct mutation */
export type GraphCms_Wp_DeleteVisibleProductPayload = {
  __typename?: 'GraphCMS_WP_DeleteVisibleProductPayload';
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  visibleProduct?: Maybe<GraphCms_Wp_VisibleProduct>;
};

/** Coupon discount type enumeration */
export enum GraphCms_Wp_DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT',
}

/** The discussion setting type */
export type GraphCms_Wp_DiscussionSettings = {
  __typename?: 'GraphCMS_WP_DiscussionSettings';
  /** Luba uute artiklite kommenteerimist */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** Info on whether the object is locked by another user editing it */
export type GraphCms_Wp_EditLock = {
  __typename?: 'GraphCMS_WP_EditLock';
  /** The time when the object was last edited */
  editTime?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  user?: Maybe<GraphCms_Wp_User>;
};

/** Input for the emptyCart mutation */
export type GraphCms_Wp_EmptyCartInput = {
  clientMutationId: Scalars['String'];
};

/** The payload for the emptyCart mutation */
export type GraphCms_Wp_EmptyCartPayload = {
  __typename?: 'GraphCMS_WP_EmptyCartPayload';
  cart?: Maybe<GraphCms_Wp_Cart>;
  clientMutationId: Scalars['String'];
};

/** a fee line object */
export type GraphCms_Wp_FeeLine = {
  __typename?: 'GraphCMS_WP_FeeLine';
  /** Fee amount */
  amount?: Maybe<Scalars['String']>;
  /** The Id of the order item. */
  itemId?: Maybe<Scalars['Int']>;
  /** Fee name */
  name?: Maybe<Scalars['String']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Line tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<Array<Maybe<GraphCms_Wp_OrderItemTax>>>;
  /** Tax status of fee */
  taxStatus?: Maybe<GraphCms_Wp_TaxStatusEnum>;
  /** Line total (after discounts) */
  total?: Maybe<Scalars['String']>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GraphCms_Wp_GeneralSettings = {
  __typename?: 'GraphCMS_WP_GeneralSettings';
  /** Kõigi kuupäevade vorming. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Veebisaidi alapealkiri. */
  description?: Maybe<Scalars['String']>;
  /** Seda aadressi kasutatakse saidi haldamisel, näiteks uue kasutaja teavitamiseks. */
  email?: Maybe<Scalars['String']>;
  /** WordPressi maakood. */
  language?: Maybe<Scalars['String']>;
  /** Nädala alguspäeva number. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** Kõigi kellaaegade vorming. */
  timeFormat?: Maybe<Scalars['String']>;
  /** Linn samas ajavööndis. */
  timezone?: Maybe<Scalars['String']>;
  /** Saidi pealkiri. */
  title?: Maybe<Scalars['String']>;
  /** Veebilehe aadress. */
  url?: Maybe<Scalars['String']>;
};

/** a line item object */
export type GraphCms_Wp_LineItem = {
  __typename?: 'GraphCMS_WP_LineItem';
  /** Line item&#039;s taxes */
  itemDownloads?: Maybe<Array<Maybe<GraphCms_Wp_ProductDownload>>>;
  /** The Id of the order item. */
  itemId?: Maybe<Scalars['Int']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Line item&#039;s product object */
  product?: Maybe<GraphCms_Wp_Product>;
  /** Line item&#039;s product ID */
  productId?: Maybe<Scalars['Int']>;
  /** Line item&#039;s product quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Line item&#039;s subtotal */
  subtotal?: Maybe<Scalars['String']>;
  /** Line item&#039;s subtotal tax */
  subtotalTax?: Maybe<Scalars['String']>;
  /** Line item&#039;s tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Line item&#039;s taxes */
  taxes?: Maybe<Array<Maybe<GraphCms_Wp_OrderItemTax>>>;
  /** Line item&#039;s taxes */
  taxStatus?: Maybe<GraphCms_Wp_TaxStatusEnum>;
  /** Line item&#039;s total */
  total?: Maybe<Scalars['String']>;
  /** Line item&#039;s total tax */
  totalTax?: Maybe<Scalars['String']>;
  /** Line item&#039;s product variation object */
  variation?: Maybe<GraphCms_Wp_ProductVariation>;
  /** Line item&#039;s product variation ID */
  variationId?: Maybe<Scalars['Int']>;
};

/** Product manage stock enumeration */
export enum GraphCms_Wp_ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE',
}

/** File details for a Media Item */
export type GraphCms_Wp_MediaDetails = {
  __typename?: 'GraphCMS_WP_MediaDetails';
  /** The height of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<GraphCms_Wp_MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<GraphCms_Wp_MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItem = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_MediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectUnion>>>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<GraphCms_Wp_User>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Connection between the mediaItem type and the mediaItem type */
  comments?: Maybe<GraphCms_Wp_MediaItemToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<GraphCms_Wp_User>;
  /** If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<GraphCms_Wp_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<GraphCms_Wp_MediaDetails>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  mediaItemId: Scalars['Int'];
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<GraphCms_Wp_PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Terms connected to the mediaItem */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the mediaItem */
  terms?: Maybe<Array<Maybe<GraphCms_Wp_TermObjectUnion>>>;
  /** Terms connected to the mediaItem */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemCaptionArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemContentArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemDescriptionArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemExcerptArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemSourceUrlArgs = {
  size?: Maybe<GraphCms_Wp_MediaItemSizeEnum>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The mediaItem type */
export type GraphCms_Wp_MediaItemTitleArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** Meta connected to a MediaItem */
export type GraphCms_Wp_MediaItemMeta = {
  __typename?: 'GraphCMS_WP_MediaItemMeta';
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Int']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export enum GraphCms_Wp_MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the shop_catalog size */
  ShopCatalog = 'SHOP_CATALOG',
  /** MediaItem with the shop_single size */
  ShopSingle = 'SHOP_SINGLE',
  /** MediaItem with the shop_thumbnail size */
  ShopThumbnail = 'SHOP_THUMBNAIL',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the woocommerce_gallery_thumbnail size */
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  /** MediaItem with the woocommerce_single size */
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  /** MediaItem with the woocommerce_thumbnail size */
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
}

/** The status of the media item object. */
export enum GraphCms_Wp_MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Connection between the mediaItem type and the mediaItem type */
export type GraphCms_Wp_MediaItemToCommentConnection = {
  __typename?: 'GraphCMS_WP_MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_MediaItemToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_MediaItemToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type GraphCms_Wp_MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Details of an available size for a media item */
export type GraphCms_Wp_MediaSize = {
  __typename?: 'GraphCMS_WP_MediaSize';
  /** The file of the for the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The height of the for the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the resource */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the for the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the for the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type GraphCms_Wp_Menu = {
  __typename?: 'GraphCMS_WP_Menu';
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** ID of the nav menu. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Connection between the Menu type and the Menu type */
  menuItems?: Maybe<GraphCms_Wp_MenuToMenuItemConnection>;
  /** WP ID of the nav menu. */
  menuId?: Maybe<Scalars['Int']>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type GraphCms_Wp_MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_MenuToMenuItemConnectionWhereArgs>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type GraphCms_Wp_MenuItem = {
  __typename?: 'GraphCMS_WP_MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<GraphCms_Wp_MenuItemToMenuItemConnection>;
  /** The object connected to this menu item. */
  connectedObject?: Maybe<GraphCms_Wp_MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** Relay ID of the menu item. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** WP ID of the menu item. */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type GraphCms_Wp_MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_MenuItemToMenuItemConnectionWhereArgs>;
};

export type GraphCms_Wp_MenuItemObjectUnion =
  | GraphCms_Wp_Post
  | GraphCms_Wp_Page
  | GraphCms_Wp_Category
  | GraphCms_Wp_Tag
  | GraphCms_Wp_ProductCategory
  | GraphCms_Wp_ProductTag
  | GraphCms_Wp_MenuItem;

/** Connection between the MenuItem type and the MenuItem type */
export type GraphCms_Wp_MenuItemToMenuItemConnection = {
  __typename?: 'GraphCMS_WP_MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_MenuItemToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_MenuItemToMenuItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MenuItem>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type GraphCms_Wp_MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCms_Wp_MenuLocationEnum>;
};

/** Registered menu locations */
export enum GraphCms_Wp_MenuLocationEnum {
  Empty = 'EMPTY',
}

/** Connection between the Menu type and the Menu type */
export type GraphCms_Wp_MenuToMenuItemConnection = {
  __typename?: 'GraphCMS_WP_MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_MenuToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_MenuToMenuItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MenuItem>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type GraphCms_Wp_MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCms_Wp_MenuLocationEnum>;
};

/** The MimeType of the object */
export enum GraphCms_Wp_MimeTypeEnum {
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

/** An object with an ID */
export type GraphCms_Wp_Node = {
  __typename?: 'GraphCMS_WP_Node';
  /** The id of the object */
  id: Scalars['ID'];
};

/** A order object */
export type GraphCms_Wp_Order = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Order';
  /** Order billing properties */
  billing?: Maybe<GraphCms_Wp_CustomerAddress>;
  /** Cart hash */
  cartHash?: Maybe<Scalars['String']>;
  /** Cart tax amount */
  cartTax?: Maybe<Scalars['Float']>;
  /** Connection between the Order type and the Order type */
  couponLines?: Maybe<GraphCms_Wp_OrderToCouponLineConnection>;
  /** How order was created */
  createdVia?: Maybe<Scalars['String']>;
  /** Order currency */
  currency?: Maybe<Scalars['String']>;
  /** Order customer */
  customer?: Maybe<GraphCms_Wp_Customer>;
  /** Customer IP Address */
  customerIpAddress?: Maybe<Scalars['String']>;
  /** Customer note */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer User Agent */
  customerUserAgent?: Maybe<Scalars['String']>;
  /** Date order was created */
  date?: Maybe<Scalars['String']>;
  /** Date order was completed */
  dateCompleted?: Maybe<Scalars['String']>;
  /** Date order was paid */
  datePaid?: Maybe<Scalars['String']>;
  /** Discount tax amount */
  discountTax?: Maybe<Scalars['Float']>;
  /** Discount total amount */
  discountTotal?: Maybe<Scalars['Float']>;
  /** Product downloads */
  downloadableItems?: Maybe<Array<Maybe<GraphCms_Wp_ProductDownload>>>;
  /** Connection between the Order type and the Order type */
  feeLines?: Maybe<GraphCms_Wp_OrderToFeeLineConnection>;
  /** Order has a billing address? */
  hasBillingAddress?: Maybe<Scalars['Boolean']>;
  /** If order contains a downloadable product */
  hasDownloadableItem?: Maybe<Scalars['Boolean']>;
  /** Order has a shipping address? */
  hasShippingAddress?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the order */
  id: Scalars['ID'];
  /** Is product download is permitted */
  isDownloadPermitted?: Maybe<Scalars['Boolean']>;
  /** Connection between the Order type and the Order type */
  lineItems?: Maybe<GraphCms_Wp_OrderToLineItemConnection>;
  /** Date order was last updated */
  modified?: Maybe<Scalars['String']>;
  /** If order needs payment */
  needsPayment?: Maybe<Scalars['Boolean']>;
  /** If order needs processing before it can be completed */
  needsProcessing?: Maybe<Scalars['Boolean']>;
  /** If order needs shipping address */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  orderId?: Maybe<Scalars['Int']>;
  /** Order key */
  orderKey?: Maybe<Scalars['String']>;
  /** Order number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Order version */
  orderVersion?: Maybe<Scalars['String']>;
  /** Parent order */
  parent?: Maybe<GraphCms_Wp_Order>;
  /** Payment method */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Prices include taxes? */
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /** Connection between the Order type and the Order type */
  refunds?: Maybe<GraphCms_Wp_OrderToRefundConnection>;
  /** Order shipping properties */
  shipping?: Maybe<GraphCms_Wp_CustomerAddress>;
  /** Connection between the Order type and the Order type */
  shippingLines?: Maybe<GraphCms_Wp_OrderToShippingLineConnection>;
  /** Order customer */
  shippingAddressMapUrl?: Maybe<Scalars['String']>;
  /** Shipping tax amount */
  shippingTax?: Maybe<Scalars['Float']>;
  /** Shipping total amount */
  shippingTotal?: Maybe<Scalars['Float']>;
  /** Order status */
  status?: Maybe<GraphCms_Wp_OrderStatusEnum>;
  /** Order subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Connection between the Order type and the Order type */
  taxLines?: Maybe<GraphCms_Wp_OrderToTaxLineConnection>;
  /** Order grand total */
  total?: Maybe<Scalars['Float']>;
  /** Order taxes */
  totalTax?: Maybe<Scalars['Float']>;
  /** Transaction ID */
  transactionId?: Maybe<Scalars['String']>;
};

/** A order object */
export type GraphCms_Wp_OrderCouponLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A order object */
export type GraphCms_Wp_OrderFeeLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A order object */
export type GraphCms_Wp_OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A order object */
export type GraphCms_Wp_OrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_OrderToRefundConnectionWhereArgs>;
};

/** A order object */
export type GraphCms_Wp_OrderShippingLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A order object */
export type GraphCms_Wp_OrderTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** The cardinality of the connection order */
export enum GraphCms_Wp_OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Order item tax statement */
export type GraphCms_Wp_OrderItemTax = {
  __typename?: 'GraphCMS_WP_OrderItemTax';
  /** Amount taxed */
  amount?: Maybe<Scalars['Float']>;
  /** Subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Tax line connected to this statement */
  taxLine?: Maybe<GraphCms_Wp_TaxLine>;
  /** Order item ID for tax line connected to this statement */
  taxLineId: Scalars['Int'];
  /** Total */
  total?: Maybe<Scalars['Float']>;
};

/** Order status enumeration */
export enum GraphCms_Wp_OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
}

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToCouponLineConnection = {
  __typename?: 'GraphCMS_WP_OrderToCouponLineConnection';
  /** Edges for the OrderToCouponLineConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToCouponLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_CouponLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToCouponLineConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToCouponLineConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_CouponLine>;
};

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToFeeLineConnection = {
  __typename?: 'GraphCMS_WP_OrderToFeeLineConnection';
  /** Edges for the OrderToFeeLineConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToFeeLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_FeeLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToFeeLineConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToFeeLineConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_FeeLine>;
};

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToLineItemConnection = {
  __typename?: 'GraphCMS_WP_OrderToLineItemConnection';
  /** Edges for the OrderToLineItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToLineItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_LineItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToLineItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToLineItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_LineItem>;
};

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToRefundConnection = {
  __typename?: 'GraphCMS_WP_OrderToRefundConnection';
  /** Edges for the OrderToRefundConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToRefundConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToRefundConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Refund>;
};

/** Arguments for filtering the OrderToRefundConnection connection */
export type GraphCms_Wp_OrderToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToShippingLineConnection = {
  __typename?: 'GraphCMS_WP_OrderToShippingLineConnection';
  /** Edges for the OrderToShippingLineConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToShippingLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ShippingLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToShippingLineConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToShippingLineConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ShippingLine>;
};

/** Connection between the Order type and the Order type */
export type GraphCms_Wp_OrderToTaxLineConnection = {
  __typename?: 'GraphCMS_WP_OrderToTaxLineConnection';
  /** Edges for the OrderToTaxLineConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_OrderToTaxLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_TaxLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_OrderToTaxLineConnectionEdge = {
  __typename?: 'GraphCMS_WP_OrderToTaxLineConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_TaxLine>;
};

/** The page type */
export type GraphCms_Wp_Page = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Page';
  /** Ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectUnion>>>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<GraphCms_Wp_User>;
  /** Connection between the page type and the page type */
  childPages?: Maybe<GraphCms_Wp_PageToPageConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Connection between the page type and the page type */
  comments?: Maybe<GraphCms_Wp_PageToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<GraphCms_Wp_User>;
  /** If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<GraphCms_Wp_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The featured image for the object */
  featuredImage?: Maybe<GraphCms_Wp_MediaItem>;
  /** The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  pageId: Scalars['Int'];
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<GraphCms_Wp_PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the page type */
  revisions?: Maybe<GraphCms_Wp_PageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Terms connected to the page */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the page */
  terms?: Maybe<Array<Maybe<GraphCms_Wp_TermObjectUnion>>>;
  /** Terms connected to the page */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri?: Maybe<Scalars['String']>;
};

/** The page type */
export type GraphCms_Wp_PageAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** The page type */
export type GraphCms_Wp_PageChildPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PageToPageConnectionWhereArgs>;
};

/** The page type */
export type GraphCms_Wp_PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type GraphCms_Wp_PageContentArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The page type */
export type GraphCms_Wp_PageExcerptArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The page type */
export type GraphCms_Wp_PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type GraphCms_Wp_PageTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The page type */
export type GraphCms_Wp_PageTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The page type */
export type GraphCms_Wp_PageTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The page type */
export type GraphCms_Wp_PageTitleArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** Connection between the page type and the page type */
export type GraphCms_Wp_PageToCommentConnection = {
  __typename?: 'GraphCMS_WP_PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PageToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PageToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type GraphCms_Wp_PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the page type */
export type GraphCms_Wp_PageToPageConnection = {
  __typename?: 'GraphCMS_WP_PageToPageConnection';
  /** Edges for the PageToPageConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PageToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_PageToPageConnectionEdge = {
  __typename?: 'GraphCMS_WP_PageToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Page>;
};

/** Arguments for filtering the PageToPageConnection connection */
export type GraphCms_Wp_PageToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type GraphCms_Wp_PageToRevisionConnection = {
  __typename?: 'GraphCMS_WP_PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PageToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Revision>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_PageToRevisionConnectionEdge = {
  __typename?: 'GraphCMS_WP_PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Revision>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type GraphCms_Wp_PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The paHind type */
export type GraphCms_Wp_PaHind = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaHind';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_hind */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paHindId?: Maybe<Scalars['Int']>;
  /** Connection between the PaHind type and the PaHind type */
  products?: Maybe<GraphCms_Wp_PaHindToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaHind type and the PaHind type */
  variations?: Maybe<GraphCms_Wp_PaHindToProductVariationConnection>;
};

/** The paHind type */
export type GraphCms_Wp_PaHindProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaHindToProductConnectionWhereArgs>;
};

/** The paHind type */
export type GraphCms_Wp_PaHindVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaHindToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaHind type and the PaHind type */
export type GraphCms_Wp_PaHindToProductConnection = {
  __typename?: 'GraphCMS_WP_PaHindToProductConnection';
  /** Edges for the PaHindToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaHindToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaHindToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaHindToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaHindToProductConnection connection */
export type GraphCms_Wp_PaHindToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaHind type and the PaHind type */
export type GraphCms_Wp_PaHindToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaHindToProductVariationConnection';
  /** Edges for the PaHindToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaHindToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaHindToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaHindToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaHindToProductVariationConnection connection */
export type GraphCms_Wp_PaHindToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paHulk type */
export type GraphCms_Wp_PaHulk = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaHulk';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_hulk */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paHulkId?: Maybe<Scalars['Int']>;
  /** Connection between the PaHulk type and the PaHulk type */
  products?: Maybe<GraphCms_Wp_PaHulkToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaHulk type and the PaHulk type */
  variations?: Maybe<GraphCms_Wp_PaHulkToProductVariationConnection>;
};

/** The paHulk type */
export type GraphCms_Wp_PaHulkProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaHulkToProductConnectionWhereArgs>;
};

/** The paHulk type */
export type GraphCms_Wp_PaHulkVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaHulkToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaHulk type and the PaHulk type */
export type GraphCms_Wp_PaHulkToProductConnection = {
  __typename?: 'GraphCMS_WP_PaHulkToProductConnection';
  /** Edges for the PaHulkToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaHulkToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaHulkToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaHulkToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaHulkToProductConnection connection */
export type GraphCms_Wp_PaHulkToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaHulk type and the PaHulk type */
export type GraphCms_Wp_PaHulkToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaHulkToProductVariationConnection';
  /** Edges for the PaHulkToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaHulkToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaHulkToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaHulkToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaHulkToProductVariationConnection connection */
export type GraphCms_Wp_PaHulkToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paKasutusaeg type */
export type GraphCms_Wp_PaKasutusaeg = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaKasutusaeg';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_kasutusaeg */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKasutusaegId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
  products?: Maybe<GraphCms_Wp_PaKasutusaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
  variations?: Maybe<GraphCms_Wp_PaKasutusaegToProductVariationConnection>;
};

/** The paKasutusaeg type */
export type GraphCms_Wp_PaKasutusaegProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKasutusaegToProductConnectionWhereArgs>;
};

/** The paKasutusaeg type */
export type GraphCms_Wp_PaKasutusaegVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKasutusaegToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export type GraphCms_Wp_PaKasutusaegToProductConnection = {
  __typename?: 'GraphCMS_WP_PaKasutusaegToProductConnection';
  /** Edges for the PaKasutusaegToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaKasutusaegToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKasutusaegToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKasutusaegToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaKasutusaegToProductConnection connection */
export type GraphCms_Wp_PaKasutusaegToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaKasutusaeg type and the PaKasutusaeg type */
export type GraphCms_Wp_PaKasutusaegToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaKasutusaegToProductVariationConnection';
  /** Edges for the PaKasutusaegToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaKasutusaegToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKasutusaegToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKasutusaegToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaKasutusaegToProductVariationConnection connection */
export type GraphCms_Wp_PaKasutusaegToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paKogus type */
export type GraphCms_Wp_PaKogus = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaKogus';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_kogus */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKogusId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKogus type and the PaKogus type */
  products?: Maybe<GraphCms_Wp_PaKogusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKogus type and the PaKogus type */
  variations?: Maybe<GraphCms_Wp_PaKogusToProductVariationConnection>;
};

/** The paKogus type */
export type GraphCms_Wp_PaKogusProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKogusToProductConnectionWhereArgs>;
};

/** The paKogus type */
export type GraphCms_Wp_PaKogusVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKogusToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaKogus type and the PaKogus type */
export type GraphCms_Wp_PaKogusToProductConnection = {
  __typename?: 'GraphCMS_WP_PaKogusToProductConnection';
  /** Edges for the PaKogusToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaKogusToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKogusToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKogusToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaKogusToProductConnection connection */
export type GraphCms_Wp_PaKogusToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaKogus type and the PaKogus type */
export type GraphCms_Wp_PaKogusToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaKogusToProductVariationConnection';
  /** Edges for the PaKogusToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaKogusToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKogusToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKogusToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaKogusToProductVariationConnection connection */
export type GraphCms_Wp_PaKogusToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paKontuur type */
export type GraphCms_Wp_PaKontuur = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaKontuur';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_kontuur */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKontuurId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKontuur type and the PaKontuur type */
  products?: Maybe<GraphCms_Wp_PaKontuurToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKontuur type and the PaKontuur type */
  variations?: Maybe<GraphCms_Wp_PaKontuurToProductVariationConnection>;
};

/** The paKontuur type */
export type GraphCms_Wp_PaKontuurProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKontuurToProductConnectionWhereArgs>;
};

/** The paKontuur type */
export type GraphCms_Wp_PaKontuurVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKontuurToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaKontuur type and the PaKontuur type */
export type GraphCms_Wp_PaKontuurToProductConnection = {
  __typename?: 'GraphCMS_WP_PaKontuurToProductConnection';
  /** Edges for the PaKontuurToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaKontuurToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKontuurToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKontuurToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaKontuurToProductConnection connection */
export type GraphCms_Wp_PaKontuurToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaKontuur type and the PaKontuur type */
export type GraphCms_Wp_PaKontuurToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaKontuurToProductVariationConnection';
  /** Edges for the PaKontuurToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaKontuurToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKontuurToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKontuurToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaKontuurToProductVariationConnection connection */
export type GraphCms_Wp_PaKontuurToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paKoostisained type */
export type GraphCms_Wp_PaKoostisained = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaKoostisained';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_koostisained */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paKoostisainedId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKoostisained type and the PaKoostisained type */
  products?: Maybe<GraphCms_Wp_PaKoostisainedToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaKoostisained type and the PaKoostisained type */
  variations?: Maybe<GraphCms_Wp_PaKoostisainedToProductVariationConnection>;
};

/** The paKoostisained type */
export type GraphCms_Wp_PaKoostisainedProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaKoostisainedToProductConnectionWhereArgs>;
};

/** The paKoostisained type */
export type GraphCms_Wp_PaKoostisainedVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<
    GraphCms_Wp_PaKoostisainedToProductVariationConnectionWhereArgs
  >;
};

/** Connection between the PaKoostisained type and the PaKoostisained type */
export type GraphCms_Wp_PaKoostisainedToProductConnection = {
  __typename?: 'GraphCMS_WP_PaKoostisainedToProductConnection';
  /** Edges for the PaKoostisainedToProductConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaKoostisainedToProductConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKoostisainedToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKoostisainedToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaKoostisainedToProductConnection connection */
export type GraphCms_Wp_PaKoostisainedToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaKoostisained type and the PaKoostisained type */
export type GraphCms_Wp_PaKoostisainedToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaKoostisainedToProductVariationConnection';
  /** Edges for the PaKoostisainedToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaKoostisainedToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaKoostisainedToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaKoostisainedToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaKoostisainedToProductVariationConnection connection */
export type GraphCms_Wp_PaKoostisainedToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paLaadimisaeg type */
export type GraphCms_Wp_PaLaadimisaeg = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaLaadimisaeg';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_laadimisaeg */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paLaadimisaegId?: Maybe<Scalars['Int']>;
  /** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
  products?: Maybe<GraphCms_Wp_PaLaadimisaegToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
  variations?: Maybe<GraphCms_Wp_PaLaadimisaegToProductVariationConnection>;
};

/** The paLaadimisaeg type */
export type GraphCms_Wp_PaLaadimisaegProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaLaadimisaegToProductConnectionWhereArgs>;
};

/** The paLaadimisaeg type */
export type GraphCms_Wp_PaLaadimisaegVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaLaadimisaegToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export type GraphCms_Wp_PaLaadimisaegToProductConnection = {
  __typename?: 'GraphCMS_WP_PaLaadimisaegToProductConnection';
  /** Edges for the PaLaadimisaegToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaLaadimisaegToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaLaadimisaegToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaLaadimisaegToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaLaadimisaegToProductConnection connection */
export type GraphCms_Wp_PaLaadimisaegToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaLaadimisaeg type and the PaLaadimisaeg type */
export type GraphCms_Wp_PaLaadimisaegToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaLaadimisaegToProductVariationConnection';
  /** Edges for the PaLaadimisaegToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaLaadimisaegToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaLaadimisaegToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaLaadimisaegToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaLaadimisaegToProductVariationConnection connection */
export type GraphCms_Wp_PaLaadimisaegToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paMaterjal type */
export type GraphCms_Wp_PaMaterjal = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaMaterjal';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_materjal */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paMaterjalId?: Maybe<Scalars['Int']>;
  /** Connection between the PaMaterjal type and the PaMaterjal type */
  products?: Maybe<GraphCms_Wp_PaMaterjalToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaMaterjal type and the PaMaterjal type */
  variations?: Maybe<GraphCms_Wp_PaMaterjalToProductVariationConnection>;
};

/** The paMaterjal type */
export type GraphCms_Wp_PaMaterjalProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaMaterjalToProductConnectionWhereArgs>;
};

/** The paMaterjal type */
export type GraphCms_Wp_PaMaterjalVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaMaterjalToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaMaterjal type and the PaMaterjal type */
export type GraphCms_Wp_PaMaterjalToProductConnection = {
  __typename?: 'GraphCMS_WP_PaMaterjalToProductConnection';
  /** Edges for the PaMaterjalToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaMaterjalToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaMaterjalToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaMaterjalToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaMaterjalToProductConnection connection */
export type GraphCms_Wp_PaMaterjalToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaMaterjal type and the PaMaterjal type */
export type GraphCms_Wp_PaMaterjalToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaMaterjalToProductVariationConnection';
  /** Edges for the PaMaterjalToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaMaterjalToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaMaterjalToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaMaterjalToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaMaterjalToProductVariationConnection connection */
export type GraphCms_Wp_PaMaterjalToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paMuratasa type */
export type GraphCms_Wp_PaMuratasa = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaMuratasa';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_muratasa */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paMuratasaId?: Maybe<Scalars['Int']>;
  /** Connection between the PaMuratasa type and the PaMuratasa type */
  products?: Maybe<GraphCms_Wp_PaMuratasaToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaMuratasa type and the PaMuratasa type */
  variations?: Maybe<GraphCms_Wp_PaMuratasaToProductVariationConnection>;
};

/** The paMuratasa type */
export type GraphCms_Wp_PaMuratasaProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaMuratasaToProductConnectionWhereArgs>;
};

/** The paMuratasa type */
export type GraphCms_Wp_PaMuratasaVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaMuratasaToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaMuratasa type and the PaMuratasa type */
export type GraphCms_Wp_PaMuratasaToProductConnection = {
  __typename?: 'GraphCMS_WP_PaMuratasaToProductConnection';
  /** Edges for the PaMuratasaToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaMuratasaToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaMuratasaToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaMuratasaToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaMuratasaToProductConnection connection */
export type GraphCms_Wp_PaMuratasaToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaMuratasa type and the PaMuratasa type */
export type GraphCms_Wp_PaMuratasaToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaMuratasaToProductVariationConnection';
  /** Edges for the PaMuratasaToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaMuratasaToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaMuratasaToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaMuratasaToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaMuratasaToProductVariationConnection connection */
export type GraphCms_Wp_PaMuratasaToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paOhutus type */
export type GraphCms_Wp_PaOhutus = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaOhutus';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_ohutus */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paOhutusId?: Maybe<Scalars['Int']>;
  /** Connection between the PaOhutus type and the PaOhutus type */
  products?: Maybe<GraphCms_Wp_PaOhutusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaOhutus type and the PaOhutus type */
  variations?: Maybe<GraphCms_Wp_PaOhutusToProductVariationConnection>;
};

/** The paOhutus type */
export type GraphCms_Wp_PaOhutusProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaOhutusToProductConnectionWhereArgs>;
};

/** The paOhutus type */
export type GraphCms_Wp_PaOhutusVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaOhutusToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaOhutus type and the PaOhutus type */
export type GraphCms_Wp_PaOhutusToProductConnection = {
  __typename?: 'GraphCMS_WP_PaOhutusToProductConnection';
  /** Edges for the PaOhutusToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaOhutusToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaOhutusToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaOhutusToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaOhutusToProductConnection connection */
export type GraphCms_Wp_PaOhutusToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaOhutus type and the PaOhutus type */
export type GraphCms_Wp_PaOhutusToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaOhutusToProductVariationConnection';
  /** Edges for the PaOhutusToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaOhutusToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaOhutusToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaOhutusToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaOhutusToProductVariationConnection connection */
export type GraphCms_Wp_PaOhutusToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paPatareid type */
export type GraphCms_Wp_PaPatareid = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaPatareid';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_patareid */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paPatareidId?: Maybe<Scalars['Int']>;
  /** Connection between the PaPatareid type and the PaPatareid type */
  products?: Maybe<GraphCms_Wp_PaPatareidToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaPatareid type and the PaPatareid type */
  variations?: Maybe<GraphCms_Wp_PaPatareidToProductVariationConnection>;
};

/** The paPatareid type */
export type GraphCms_Wp_PaPatareidProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaPatareidToProductConnectionWhereArgs>;
};

/** The paPatareid type */
export type GraphCms_Wp_PaPatareidVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaPatareidToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaPatareid type and the PaPatareid type */
export type GraphCms_Wp_PaPatareidToProductConnection = {
  __typename?: 'GraphCMS_WP_PaPatareidToProductConnection';
  /** Edges for the PaPatareidToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaPatareidToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaPatareidToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaPatareidToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaPatareidToProductConnection connection */
export type GraphCms_Wp_PaPatareidToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaPatareid type and the PaPatareid type */
export type GraphCms_Wp_PaPatareidToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaPatareidToProductVariationConnection';
  /** Edges for the PaPatareidToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaPatareidToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaPatareidToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaPatareidToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaPatareidToProductVariationConnection connection */
export type GraphCms_Wp_PaPatareidToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paSuurus type */
export type GraphCms_Wp_PaSuurus = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaSuurus';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_suurus */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paSuurusId?: Maybe<Scalars['Int']>;
  /** Connection between the PaSuurus type and the PaSuurus type */
  products?: Maybe<GraphCms_Wp_PaSuurusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaSuurus type and the PaSuurus type */
  variations?: Maybe<GraphCms_Wp_PaSuurusToProductVariationConnection>;
};

/** The paSuurus type */
export type GraphCms_Wp_PaSuurusProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaSuurusToProductConnectionWhereArgs>;
};

/** The paSuurus type */
export type GraphCms_Wp_PaSuurusVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaSuurusToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaSuurus type and the PaSuurus type */
export type GraphCms_Wp_PaSuurusToProductConnection = {
  __typename?: 'GraphCMS_WP_PaSuurusToProductConnection';
  /** Edges for the PaSuurusToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaSuurusToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaSuurusToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaSuurusToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaSuurusToProductConnection connection */
export type GraphCms_Wp_PaSuurusToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaSuurus type and the PaSuurus type */
export type GraphCms_Wp_PaSuurusToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaSuurusToProductVariationConnection';
  /** Edges for the PaSuurusToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaSuurusToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaSuurusToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaSuurusToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaSuurusToProductVariationConnection connection */
export type GraphCms_Wp_PaSuurusToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paVariant type */
export type GraphCms_Wp_PaVariant = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaVariant';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_variant */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVariantId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVariant type and the PaVariant type */
  products?: Maybe<GraphCms_Wp_PaVariantToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVariant type and the PaVariant type */
  variations?: Maybe<GraphCms_Wp_PaVariantToProductVariationConnection>;
};

/** The paVariant type */
export type GraphCms_Wp_PaVariantProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVariantToProductConnectionWhereArgs>;
};

/** The paVariant type */
export type GraphCms_Wp_PaVariantVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVariantToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaVariant type and the PaVariant type */
export type GraphCms_Wp_PaVariantToProductConnection = {
  __typename?: 'GraphCMS_WP_PaVariantToProductConnection';
  /** Edges for the PaVariantToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaVariantToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVariantToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVariantToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaVariantToProductConnection connection */
export type GraphCms_Wp_PaVariantToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaVariant type and the PaVariant type */
export type GraphCms_Wp_PaVariantToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaVariantToProductVariationConnection';
  /** Edges for the PaVariantToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaVariantToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVariantToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVariantToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaVariantToProductVariationConnection connection */
export type GraphCms_Wp_PaVariantToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paVarv type */
export type GraphCms_Wp_PaVarv = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaVarv';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_varv */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVarvId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVarv type and the PaVarv type */
  products?: Maybe<GraphCms_Wp_PaVarvToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVarv type and the PaVarv type */
  variations?: Maybe<GraphCms_Wp_PaVarvToProductVariationConnection>;
};

/** The paVarv type */
export type GraphCms_Wp_PaVarvProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVarvToProductConnectionWhereArgs>;
};

/** The paVarv type */
export type GraphCms_Wp_PaVarvVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVarvToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaVarv type and the PaVarv type */
export type GraphCms_Wp_PaVarvToProductConnection = {
  __typename?: 'GraphCMS_WP_PaVarvToProductConnection';
  /** Edges for the PaVarvToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaVarvToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVarvToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVarvToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaVarvToProductConnection connection */
export type GraphCms_Wp_PaVarvToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaVarv type and the PaVarv type */
export type GraphCms_Wp_PaVarvToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaVarvToProductVariationConnection';
  /** Edges for the PaVarvToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaVarvToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVarvToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVarvToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaVarvToProductVariationConnection connection */
export type GraphCms_Wp_PaVarvToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** The paVeekindlus type */
export type GraphCms_Wp_PaVeekindlus = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PaVeekindlus';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the pa_veekindlus */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  paVeekindlusId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVeekindlus type and the PaVeekindlus type */
  products?: Maybe<GraphCms_Wp_PaVeekindlusToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** Connection between the PaVeekindlus type and the PaVeekindlus type */
  variations?: Maybe<GraphCms_Wp_PaVeekindlusToProductVariationConnection>;
};

/** The paVeekindlus type */
export type GraphCms_Wp_PaVeekindlusProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVeekindlusToProductConnectionWhereArgs>;
};

/** The paVeekindlus type */
export type GraphCms_Wp_PaVeekindlusVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PaVeekindlusToProductVariationConnectionWhereArgs>;
};

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export type GraphCms_Wp_PaVeekindlusToProductConnection = {
  __typename?: 'GraphCMS_WP_PaVeekindlusToProductConnection';
  /** Edges for the PaVeekindlusToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PaVeekindlusToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVeekindlusToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVeekindlusToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the PaVeekindlusToProductConnection connection */
export type GraphCms_Wp_PaVeekindlusToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the PaVeekindlus type and the PaVeekindlus type */
export type GraphCms_Wp_PaVeekindlusToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_PaVeekindlusToProductVariationConnection';
  /** Edges for the PaVeekindlusToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_PaVeekindlusToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PaVeekindlusToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_PaVeekindlusToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the PaVeekindlusToProductVariationConnection connection */
export type GraphCms_Wp_PaVeekindlusToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** An plugin object */
export type GraphCms_Wp_Plugin = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** The post type */
export type GraphCms_Wp_Post = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Post';
  /** Ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectUnion>>>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<GraphCms_Wp_User>;
  /** Connection between the post type and the post type */
  categories?: Maybe<GraphCms_Wp_PostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Connection between the post type and the post type */
  comments?: Maybe<GraphCms_Wp_PostToCommentConnection>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<GraphCms_Wp_User>;
  /** If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<GraphCms_Wp_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The featured image for the object */
  featuredImage?: Maybe<GraphCms_Wp_MediaItem>;
  /** The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<GraphCms_Wp_PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  postId: Scalars['Int'];
  /** Connection between the post type and the post type */
  revisions?: Maybe<GraphCms_Wp_PostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the post type */
  tags?: Maybe<GraphCms_Wp_PostToTagConnection>;
  /** Terms connected to the post */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the post */
  terms?: Maybe<Array<Maybe<GraphCms_Wp_TermObjectUnion>>>;
  /** Terms connected to the post */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri?: Maybe<Scalars['String']>;
};

/** The post type */
export type GraphCms_Wp_PostAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** The post type */
export type GraphCms_Wp_PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type GraphCms_Wp_PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type GraphCms_Wp_PostContentArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The post type */
export type GraphCms_Wp_PostExcerptArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The post type */
export type GraphCms_Wp_PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type GraphCms_Wp_PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_PostToTagConnectionWhereArgs>;
};

/** The post type */
export type GraphCms_Wp_PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The post type */
export type GraphCms_Wp_PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The post type */
export type GraphCms_Wp_PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The post type */
export type GraphCms_Wp_PostTitleArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type GraphCms_Wp_PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If
   * false, this will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export type GraphCms_Wp_PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of
   * the category if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post.
   * If no existing category exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term
   * creation is enabled in nested mutations, and if one does not already exist
   * with the provided slug or ID or if a slug or ID is not provided. If no name is
   * included and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make
   * a connection. If no existing term exists with this slug, this field will be
   * used as a fallback to the Name field when creating a new term to connect to,
   * if term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The format of post field data. */
export enum GraphCms_Wp_PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED',
}

/** The column to use when filtering by date */
export enum GraphCms_Wp_PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED',
}

/** Field to order the connection by */
export enum GraphCms_Wp_PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE',
}

/** Options for ordering the connection */
export type GraphCms_Wp_PostObjectsConnectionOrderbyInput = {
  field: GraphCms_Wp_PostObjectsConnectionOrderbyEnum;
  order?: Maybe<GraphCms_Wp_OrderEnum>;
};

export type GraphCms_Wp_PostObjectUnion =
  | GraphCms_Wp_Post
  | GraphCms_Wp_Page
  | GraphCms_Wp_MediaItem
  | GraphCms_Wp_Revision;

/** The status of the object. */
export enum GraphCms_Wp_PostStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the failed status */
  Failed = 'FAILED',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the in-progress status */
  InProgress = 'IN_PROGRESS',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wc-cancelled status */
  WcCancelled = 'WC_CANCELLED',
  /** Objects with the wc-completed status */
  WcCompleted = 'WC_COMPLETED',
  /** Objects with the wc-failed status */
  WcFailed = 'WC_FAILED',
  /** Objects with the wc-on-hold status */
  WcOnHold = 'WC_ON_HOLD',
  /** Objects with the wc-pending status */
  WcPending = 'WC_PENDING',
  /** Objects with the wc-processing status */
  WcProcessing = 'WC_PROCESSING',
  /** Objects with the wc-refunded status */
  WcRefunded = 'WC_REFUNDED',
}

/** Set relationships between the post to tags */
export type GraphCms_Wp_PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this
   * will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create
 * the connection. If not, it will look for a slug. If neither are valid existing
 * terms, and the site is configured to allow terms to be created during post
 * mutations, a term will be created using the Name if it exists in the input, then
 * fallback to the slug if it exists.
 */
export type GraphCms_Wp_PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag
   * if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no
   * existing tag exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation
   * is enabled in nested mutations, and if one does not already exist with the
   * provided slug or ID or if a slug or ID is not provided. If no name is included
   * and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a
   * connection. If no existing term exists with this slug, this field will be used
   * as a fallback to the Name field when creating a new term to connect to, if
   * term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type GraphCms_Wp_PostToCategoryConnection = {
  __typename?: 'GraphCMS_WP_PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PostToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_PostToCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Category>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type GraphCms_Wp_PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type GraphCms_Wp_PostToCommentConnection = {
  __typename?: 'GraphCMS_WP_PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PostToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_PostToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type GraphCms_Wp_PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the post type */
export type GraphCms_Wp_PostToRevisionConnection = {
  __typename?: 'GraphCMS_WP_PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PostToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Revision>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_PostToRevisionConnectionEdge = {
  __typename?: 'GraphCMS_WP_PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Revision>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type GraphCms_Wp_PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type GraphCms_Wp_PostToTagConnection = {
  __typename?: 'GraphCMS_WP_PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_PostToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_PostToTagConnectionEdge = {
  __typename?: 'GraphCMS_WP_PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Tag>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type GraphCms_Wp_PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** An Post Type object */
export type GraphCms_Wp_PostType = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_PostType';
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** List of Taxonomies connected to the Post Type */
  connectedTaxonomies?: Maybe<Array<Maybe<GraphCms_Wp_Taxonomy>>>;
  /** A list of Taxonomies associated with the post type */
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether delete this type of content when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude posts with this post type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the post type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the post type labels. */
  labels?: Maybe<GraphCms_Wp_PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a post type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the post type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this post type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the post type in the admin menu. To work, $show_ui must be true.
   * If true, the post type is shown in its own top level menu. If false, no menu
   * is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot;
   * or &quot;edit.php?post_type=page&quot;), the post type will be placed as a
   * sub-menu of that.
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this post type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this post type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
};

/** An Post Type object */
export type GraphCms_Wp_PostTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** An Post Type object */
export type GraphCms_Wp_PostTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** Allowed Post Types */
export enum GraphCms_Wp_PostTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST',
  Revision = 'REVISION',
}

/** Details for labels of the PostType */
export type GraphCms_Wp_PostTypeLabelDetails = {
  __typename?: 'GraphCMS_WP_PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** A product object */
export type GraphCms_Wp_Product = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Product';
  /** Connection between the Product type and the Product type */
  attributes?: Maybe<GraphCms_Wp_ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Product backorders status */
  backorders?: Maybe<GraphCms_Wp_BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /** External product Buy button text */
  buttonText?: Maybe<Scalars['String']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
  /** Connection between the Product type and the Product type */
  categories?: Maybe<GraphCms_Wp_ProductToProductCategoryConnection>;
  /** Connection between the Product type and the Product type */
  crossSell?: Maybe<GraphCms_Wp_ProductToProductConnection>;
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  defaultAttributes?: Maybe<GraphCms_Wp_ProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Is downloadable? */
  downloadable?: Maybe<Scalars['Boolean']>;
  /** Download expiry */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /** Download limit */
  downloadLimit?: Maybe<Scalars['Int']>;
  /** Product downloads */
  downloads?: Maybe<Array<Maybe<GraphCms_Wp_ProductDownload>>>;
  /** External product url */
  externalUrl?: Maybe<Scalars['String']>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the Product type */
  galleryImages?: Maybe<GraphCms_Wp_ProductToMediaItemConnection>;
  /** Connection between the Product type and the Product type */
  grouped?: Maybe<GraphCms_Wp_ProductToProductConnection>;
  /** Product&#039;s height */
  height?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<GraphCms_Wp_MediaItem>;
  /** Product&#039;s length */
  length?: Maybe<Scalars['String']>;
  /** If product manage stock */
  manageStock?: Maybe<Scalars['Boolean']>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<GraphCms_Wp_Product>;
  /** Product&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  productId?: Maybe<Scalars['Int']>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product rating counts */
  ratingCount?: Maybe<GraphCms_Wp_RatingCounter>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<GraphCms_Wp_ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Product&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** shipping class ID */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Does product need to be shipped? */
  shippingRequired?: Maybe<Scalars['Boolean']>;
  /** Is product shipping taxable? */
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** If should be sold individually */
  soldIndividually?: Maybe<Scalars['Boolean']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Number of items available for sale */
  stockQuantity?: Maybe<Scalars['Int']>;
  /** Product stock status */
  stockStatus?: Maybe<GraphCms_Wp_StockStatusEnum>;
  /** Connection between the Product type and the Product type */
  tags?: Maybe<GraphCms_Wp_ProductToProductTagConnection>;
  /** Tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<GraphCms_Wp_TaxStatusEnum>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<GraphCms_Wp_ProductToProductConnection>;
  /** Connection between the Product type and the Product type */
  variations?: Maybe<GraphCms_Wp_ProductToProductVariationConnection>;
  /** Is product virtual? */
  virtual?: Maybe<Scalars['Boolean']>;
  /** Product&#039;s weight */
  weight?: Maybe<Scalars['String']>;
  /** Product&#039;s width */
  width?: Maybe<Scalars['String']>;
};

/** A product object */
export type GraphCms_Wp_ProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A product object */
export type GraphCms_Wp_ProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductCategoryConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A product object */
export type GraphCms_Wp_ProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToMediaItemConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductGroupedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductPriceArgs = {
  max?: Maybe<Scalars['Boolean']>;
};

/** A product object */
export type GraphCms_Wp_ProductRegularPriceArgs = {
  max?: Maybe<Scalars['Boolean']>;
};

/** A product object */
export type GraphCms_Wp_ProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductSalePriceArgs = {
  max?: Maybe<Scalars['Boolean']>;
};

/** A product object */
export type GraphCms_Wp_ProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductTagConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductConnectionWhereArgs>;
};

/** A product object */
export type GraphCms_Wp_ProductVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductToProductVariationConnectionWhereArgs>;
};

/** A product attribute object */
export type GraphCms_Wp_ProductAttribute = {
  __typename?: 'GraphCMS_WP_ProductAttribute';
  /** Attribute ID */
  attributeId: Scalars['Int'];
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Attribute position */
  position: Scalars['Int'];
  /** Is attribute on product variation */
  variation: Scalars['Boolean'];
  /** Is attribute visible */
  visible: Scalars['Boolean'];
};

/** Options for ordering the connection */
export type GraphCms_Wp_ProductAttributeInput = {
  attribute: Scalars['String'];
  attributeTerm: Scalars['String'];
};

/** The productCategory type */
export type GraphCms_Wp_ProductCategory = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ProductCategory';
  /** The ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_ProductCategory>>>;
  /** Connection between the productCategory type and the productCategory type */
  children?: Maybe<GraphCms_Wp_ProductCategoryToProductCategoryConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the product_cat */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The parent object */
  parent?: Maybe<GraphCms_Wp_ProductCategory>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productCategoryId?: Maybe<Scalars['Int']>;
  /** Connection between the ProductCategory type and the ProductCategory type */
  products?: Maybe<GraphCms_Wp_ProductCategoryToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** The productCategory type */
export type GraphCms_Wp_ProductCategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<
    GraphCms_Wp_ProductCategoryToProductCategoryConnectionWhereArgs
  >;
};

/** The productCategory type */
export type GraphCms_Wp_ProductCategoryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductCategoryToProductConnectionWhereArgs>;
};

/** Connection between the productCategory type and the productCategory type */
export type GraphCms_Wp_ProductCategoryToProductCategoryConnection = {
  __typename?: 'GraphCMS_WP_ProductCategoryToProductCategoryConnection';
  /** Edges for the ProductCategoryToProductCategoryConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductCategoryToProductCategoryConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductCategoryToProductCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductCategoryToProductCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Arguments for filtering the ProductCategoryToProductCategoryConnection connection */
export type GraphCms_Wp_ProductCategoryToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the ProductCategory type and the ProductCategory type */
export type GraphCms_Wp_ProductCategoryToProductConnection = {
  __typename?: 'GraphCMS_WP_ProductCategoryToProductConnection';
  /** Edges for the ProductCategoryToProductConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductCategoryToProductConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductCategoryToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductCategoryToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the ProductCategoryToProductConnection connection */
export type GraphCms_Wp_ProductCategoryToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** A product object */
export type GraphCms_Wp_ProductDownload = {
  __typename?: 'GraphCMS_WP_ProductDownload';
  /** Is file allowed */
  allowedFileType?: Maybe<Scalars['Boolean']>;
  /** Product download ID */
  downloadId: Scalars['Int'];
  /** Download file */
  file?: Maybe<Scalars['String']>;
  /** Validate file exists */
  fileExists?: Maybe<Scalars['Boolean']>;
  /** File extension */
  fileExt?: Maybe<Scalars['String']>;
  /** Type of file path set */
  filePathType?: Maybe<Scalars['String']>;
  /** File type */
  fileType?: Maybe<Scalars['String']>;
  /** Product download name */
  name?: Maybe<Scalars['String']>;
};

/** The productTag type */
export type GraphCms_Wp_ProductTag = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ProductTag';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the product_tag */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the ProductTag type and the ProductTag type */
  products?: Maybe<GraphCms_Wp_ProductTagToProductConnection>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productTagId?: Maybe<Scalars['Int']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** The productTag type */
export type GraphCms_Wp_ProductTagProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_ProductTagToProductConnectionWhereArgs>;
};

/** Connection between the ProductTag type and the ProductTag type */
export type GraphCms_Wp_ProductTagToProductConnection = {
  __typename?: 'GraphCMS_WP_ProductTagToProductConnection';
  /** Edges for the ProductTagToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_ProductTagToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductTagToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductTagToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the ProductTagToProductConnection connection */
export type GraphCms_Wp_ProductTagToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToMediaItemConnection = {
  __typename?: 'GraphCMS_WP_ProductToMediaItemConnection';
  /** Edges for the ProductToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_ProductToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToMediaItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Arguments for filtering the ProductToMediaItemConnection connection */
export type GraphCms_Wp_ProductToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToProductAttributeConnection = {
  __typename?: 'GraphCMS_WP_ProductToProductAttributeConnection';
  /** Edges for the ProductToProductAttributeConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductToProductAttributeConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToProductAttributeConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToProductAttributeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductAttribute>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToProductCategoryConnection = {
  __typename?: 'GraphCMS_WP_ProductToProductCategoryConnection';
  /** Edges for the ProductToProductCategoryConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductToProductCategoryConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToProductCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToProductCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Arguments for filtering the ProductToProductCategoryConnection connection */
export type GraphCms_Wp_ProductToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToProductConnection = {
  __typename?: 'GraphCMS_WP_ProductToProductConnection';
  /** Edges for the ProductToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_ProductToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the ProductToProductConnection connection */
export type GraphCms_Wp_ProductToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToProductTagConnection = {
  __typename?: 'GraphCMS_WP_ProductToProductTagConnection';
  /** Edges for the ProductToProductTagConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_ProductToProductTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductTag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToProductTagConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToProductTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductTag>;
};

/** Arguments for filtering the ProductToProductTagConnection connection */
export type GraphCms_Wp_ProductToProductTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToProductVariationConnection = {
  __typename?: 'GraphCMS_WP_ProductToProductVariationConnection';
  /** Edges for the ProductToProductVariationConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductToProductVariationConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToProductVariationConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToProductVariationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductVariation>;
};

/** Arguments for filtering the ProductToProductVariationConnection connection */
export type GraphCms_Wp_ProductToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the Product type and the Product type */
export type GraphCms_Wp_ProductToVariationAttributeConnection = {
  __typename?: 'GraphCMS_WP_ProductToVariationAttributeConnection';
  /** Edges for the ProductToVariationAttributeConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductToVariationAttributeConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductToVariationAttributeConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductToVariationAttributeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_VariationAttribute>;
};

/** The productType type */
export type GraphCms_Wp_ProductType = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ProductType';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the product_type */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  productTypeId?: Maybe<Scalars['Int']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** Product type enumeration */
export enum GraphCms_Wp_ProductTypesEnum {
  /** An external product */
  External = 'EXTERNAL',
  /** A product group */
  Grouped = 'GROUPED',
  /** A simple product */
  Simple = 'SIMPLE',
  /** A variable product */
  Variable = 'VARIABLE',
  /** A product variation */
  Variation = 'VARIATION',
}

/** A product variation object */
export type GraphCms_Wp_ProductVariation = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ProductVariation';
  /** Connection between the ProductVariation type and the ProductVariation type */
  attributes?: Maybe<
    GraphCms_Wp_ProductVariationToVariationAttributeConnection
  >;
  /** Product variation backorders */
  backorders?: Maybe<GraphCms_Wp_BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /** Product variation catalog visibility */
  catalogVisibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
  /** Date variation created */
  date?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Is downloadable? */
  downloadable?: Maybe<Scalars['Boolean']>;
  /** Download expiry */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /** Download limit */
  downloadLimit?: Maybe<Scalars['Int']>;
  /** Product downloads */
  downloads?: Maybe<Array<Maybe<GraphCms_Wp_ProductDownload>>>;
  /** Does product variation have any visible attributes */
  hasAttributes?: Maybe<Scalars['Boolean']>;
  /** Product variation height */
  height?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product variation */
  id: Scalars['ID'];
  /** Product variation main image */
  image?: Maybe<GraphCms_Wp_MediaItem>;
  /** Product variation length */
  length?: Maybe<Scalars['String']>;
  /** if/how product variation stock is managed */
  manageStock?: Maybe<GraphCms_Wp_ManageStockEnum>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Date variation last updated */
  modified?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is variation on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Product variation&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** If product variation can be bought */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Product variation purchase_note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product variation&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Product variation&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** Product variation shipping class */
  shippingClass?: Maybe<Scalars['String']>;
  /** Product variation SKU (Stock-keeping unit) */
  sku?: Maybe<Scalars['String']>;
  /** Variation status */
  status?: Maybe<Scalars['String']>;
  /** Product variation stock quantity */
  stockQuantity?: Maybe<Scalars['Int']>;
  /** Product stock status */
  stockStatus?: Maybe<GraphCms_Wp_StockStatusEnum>;
  /** Product variation tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<GraphCms_Wp_TaxStatusEnum>;
  /** Product type */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  variationId?: Maybe<Scalars['Int']>;
  /** Is product virtual? */
  virtual?: Maybe<Scalars['Boolean']>;
  /** Product variation weight */
  weight?: Maybe<Scalars['String']>;
  /** Product variation width */
  width?: Maybe<Scalars['String']>;
};

/** A product variation object */
export type GraphCms_Wp_ProductVariationAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the ProductVariation type and the ProductVariation type */
export type GraphCms_Wp_ProductVariationToVariationAttributeConnection = {
  __typename?: 'GraphCMS_WP_ProductVariationToVariationAttributeConnection';
  /** Edges for the ProductVariationToVariationAttributeConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_ProductVariationToVariationAttributeConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_ProductVariationToVariationAttributeConnectionEdge = {
  __typename?: 'GraphCMS_WP_ProductVariationToVariationAttributeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_VariationAttribute>;
};

/** A product rating counter */
export type GraphCms_Wp_RatingCounter = {
  __typename?: 'GraphCMS_WP_RatingCounter';
  /** Product&#039;s rating average */
  average?: Maybe<Scalars['Float']>;
  /** Product&#039;s number of 5-star ratings */
  fiveStars?: Maybe<Scalars['Int']>;
  /** Product&#039;s number of 4-star ratings */
  fourStars?: Maybe<Scalars['Int']>;
  /** Product&#039;s number of 1-star ratings */
  oneStars?: Maybe<Scalars['Int']>;
  /** Product&#039;s number of 3-star ratings */
  threeStars?: Maybe<Scalars['Int']>;
  /** Product&#039;s number of 2-star ratings */
  twoStars?: Maybe<Scalars['Int']>;
};

/** The reading setting type */
export type GraphCms_Wp_ReadingSettings = {
  __typename?: 'GraphCMS_WP_ReadingSettings';
  /** lehekülge korraga. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** A refund object */
export type GraphCms_Wp_Refund = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Refund';
  /** Refunded amount */
  amount?: Maybe<Scalars['Float']>;
  /** The globally unique identifier for the refund */
  id: Scalars['ID'];
  /** Connection between the Refund type and the Refund type */
  lineItems?: Maybe<GraphCms_Wp_RefundToLineItemConnection>;
  /** Reason for refund */
  reason?: Maybe<Scalars['String']>;
  /** User who completed the refund */
  refundedBy?: Maybe<GraphCms_Wp_User>;
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  refundId?: Maybe<Scalars['Int']>;
  /** A title for the new post type */
  title?: Maybe<Scalars['String']>;
};

/** A refund object */
export type GraphCms_Wp_RefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the Refund type and the Refund type */
export type GraphCms_Wp_RefundToLineItemConnection = {
  __typename?: 'GraphCMS_WP_RefundToLineItemConnection';
  /** Edges for the RefundToLineItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RefundToLineItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_LineItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RefundToLineItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_RefundToLineItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_LineItem>;
};

/** Input for the registerCustomer mutation */
export type GraphCms_Wp_RegisterCustomerInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<GraphCms_Wp_CustomerAddressInput>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** Customer shipping address */
  shipping?: Maybe<GraphCms_Wp_CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerCustomer mutation */
export type GraphCms_Wp_RegisterCustomerPayload = {
  __typename?: 'GraphCMS_WP_RegisterCustomerPayload';
  clientMutationId: Scalars['String'];
  customer?: Maybe<GraphCms_Wp_Customer>;
  viewer?: Maybe<GraphCms_Wp_User>;
};

/** Input for the registerUser mutation */
export type GraphCms_Wp_RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type GraphCms_Wp_RegisterUserPayload = {
  __typename?: 'GraphCMS_WP_RegisterUserPayload';
  clientMutationId: Scalars['String'];
  user?: Maybe<GraphCms_Wp_User>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum GraphCms_Wp_RelationEnum {
  And = 'AND',
  Or = 'OR',
}

/** Input for the removeCoupons mutation */
export type GraphCms_Wp_RemoveCouponsInput = {
  clientMutationId: Scalars['String'];
  /** Code of coupon being applied */
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the removeCoupons mutation */
export type GraphCms_Wp_RemoveCouponsPayload = {
  __typename?: 'GraphCMS_WP_RemoveCouponsPayload';
  cart?: Maybe<GraphCms_Wp_Cart>;
  clientMutationId: Scalars['String'];
};

/** Input for the removeItemsFromCart mutation */
export type GraphCms_Wp_RemoveItemsFromCartInput = {
  /** Remove all cart items */
  all?: Maybe<Scalars['Boolean']>;
  clientMutationId: Scalars['String'];
  /** Item keys of the items being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** The payload for the removeItemsFromCart mutation */
export type GraphCms_Wp_RemoveItemsFromCartPayload = {
  __typename?: 'GraphCMS_WP_RemoveItemsFromCartPayload';
  cartItems?: Maybe<Array<Maybe<GraphCms_Wp_CartItem>>>;
  clientMutationId: Scalars['String'];
};

/** Input for the resetUserPassword mutation */
export type GraphCms_Wp_ResetUserPasswordInput = {
  clientMutationId: Scalars['String'];
  /** Password reset key */
  key?: Maybe<Scalars['String']>;
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>;
  /** The new password. */
  password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type GraphCms_Wp_ResetUserPasswordPayload = {
  __typename?: 'GraphCMS_WP_ResetUserPasswordPayload';
  clientMutationId: Scalars['String'];
  user?: Maybe<GraphCms_Wp_User>;
};

/** Input for the restoreCartItems mutation */
export type GraphCms_Wp_RestoreCartItemsInput = {
  clientMutationId: Scalars['String'];
  /** Cart item key of the item being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** The payload for the restoreCartItems mutation */
export type GraphCms_Wp_RestoreCartItemsPayload = {
  __typename?: 'GraphCMS_WP_RestoreCartItemsPayload';
  cartItems?: Maybe<Array<Maybe<GraphCms_Wp_CartItem>>>;
  clientMutationId: Scalars['String'];
};

/** Input for the restoreComment mutation */
export type GraphCms_Wp_RestoreCommentInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type GraphCms_Wp_RestoreCommentPayload = {
  __typename?: 'GraphCMS_WP_RestoreCommentPayload';
  clientMutationId: Scalars['String'];
  /** The restored comment object */
  comment?: Maybe<GraphCms_Wp_Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** The revision type */
export type GraphCms_Wp_Revision = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Revision';
  /** Ancestors of the object */
  ancestors?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectUnion>>>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<GraphCms_Wp_User>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<GraphCms_Wp_User>;
  /** If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<GraphCms_Wp_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<GraphCms_Wp_PostObjectUnion>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  revisionId: Scalars['Int'];
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Terms connected to the revision */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the revision */
  terms?: Maybe<Array<Maybe<GraphCms_Wp_TermObjectUnion>>>;
  /** Terms connected to the revision */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri?: Maybe<Scalars['String']>;
};

/** The revision type */
export type GraphCms_Wp_RevisionAncestorsArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** The revision type */
export type GraphCms_Wp_RevisionContentArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The revision type */
export type GraphCms_Wp_RevisionExcerptArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** The revision type */
export type GraphCms_Wp_RevisionTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The revision type */
export type GraphCms_Wp_RevisionTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The revision type */
export type GraphCms_Wp_RevisionTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<GraphCms_Wp_TaxonomyEnum>>>;
};

/** The revision type */
export type GraphCms_Wp_RevisionTitleArgs = {
  format?: Maybe<GraphCms_Wp_PostObjectFieldFormatEnum>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToCategoryConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Category>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type GraphCms_Wp_RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToCommentConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type GraphCms_Wp_RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToCouponConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToCouponConnection';
  /** Edges for the RootQueryToCouponConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToCouponConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Coupon>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToCouponConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToCouponConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Coupon>;
};

/** Arguments for filtering the RootQueryToCouponConnection connection */
export type GraphCms_Wp_RootQueryToCouponConnectionWhereArgs = {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToCustomerConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToCustomerConnection';
  /** Edges for the RootQueryToCustomerConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToCustomerConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Customer>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToCustomerConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToCustomerConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Customer>;
};

/** Arguments for filtering the RootQueryToCustomerConnection connection */
export type GraphCms_Wp_RootQueryToCustomerConnectionWhereArgs = {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<GraphCms_Wp_CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<GraphCms_Wp_UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToMediaItemConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToMediaItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type GraphCms_Wp_RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToMenuConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToMenuConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Menu>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToMenuConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Menu>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type GraphCms_Wp_RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCms_Wp_MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToMenuItemConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToMenuItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type GraphCms_Wp_RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<GraphCms_Wp_MenuLocationEnum>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToOrderConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToOrderConnection';
  /** Edges for the RootQueryToOrderConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToOrderConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Order>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToOrderConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToOrderConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Order>;
};

/** Arguments for filtering the RootQueryToOrderConnection connection */
export type GraphCms_Wp_RootQueryToOrderConnectionWhereArgs = {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<Scalars['Int']>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<GraphCms_Wp_OrderStatusEnum>>>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPageConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPageConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Page>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type GraphCms_Wp_RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaHindConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaHindConnection';
  /** Edges for the RootQueryToPaHindConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaHindConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaHind>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaHindConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaHindConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaHind>;
};

/** Arguments for filtering the RootQueryToPaHindConnection connection */
export type GraphCms_Wp_RootQueryToPaHindConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaHulkConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaHulkConnection';
  /** Edges for the RootQueryToPaHulkConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaHulkConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaHulk>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaHulkConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaHulkConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaHulk>;
};

/** Arguments for filtering the RootQueryToPaHulkConnection connection */
export type GraphCms_Wp_RootQueryToPaHulkConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaKasutusaegConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKasutusaegConnection';
  /** Edges for the RootQueryToPaKasutusaegConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToPaKasutusaegConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaKasutusaeg>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaKasutusaegConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKasutusaegConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaKasutusaeg>;
};

/** Arguments for filtering the RootQueryToPaKasutusaegConnection connection */
export type GraphCms_Wp_RootQueryToPaKasutusaegConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaKogusConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKogusConnection';
  /** Edges for the RootQueryToPaKogusConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaKogusConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaKogus>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaKogusConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKogusConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaKogus>;
};

/** Arguments for filtering the RootQueryToPaKogusConnection connection */
export type GraphCms_Wp_RootQueryToPaKogusConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaKontuurConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKontuurConnection';
  /** Edges for the RootQueryToPaKontuurConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaKontuurConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaKontuur>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaKontuurConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKontuurConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaKontuur>;
};

/** Arguments for filtering the RootQueryToPaKontuurConnection connection */
export type GraphCms_Wp_RootQueryToPaKontuurConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaKoostisainedConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKoostisainedConnection';
  /** Edges for the RootQueryToPaKoostisainedConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToPaKoostisainedConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaKoostisained>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaKoostisainedConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaKoostisainedConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaKoostisained>;
};

/** Arguments for filtering the RootQueryToPaKoostisainedConnection connection */
export type GraphCms_Wp_RootQueryToPaKoostisainedConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaLaadimisaegConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaLaadimisaegConnection';
  /** Edges for the RootQueryToPaLaadimisaegConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToPaLaadimisaegConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaLaadimisaeg>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaLaadimisaegConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaLaadimisaegConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaLaadimisaeg>;
};

/** Arguments for filtering the RootQueryToPaLaadimisaegConnection connection */
export type GraphCms_Wp_RootQueryToPaLaadimisaegConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaMaterjalConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaMaterjalConnection';
  /** Edges for the RootQueryToPaMaterjalConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaMaterjalConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaMaterjal>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaMaterjalConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaMaterjalConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaMaterjal>;
};

/** Arguments for filtering the RootQueryToPaMaterjalConnection connection */
export type GraphCms_Wp_RootQueryToPaMaterjalConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaMuratasaConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaMuratasaConnection';
  /** Edges for the RootQueryToPaMuratasaConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaMuratasaConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaMuratasa>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaMuratasaConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaMuratasaConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaMuratasa>;
};

/** Arguments for filtering the RootQueryToPaMuratasaConnection connection */
export type GraphCms_Wp_RootQueryToPaMuratasaConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaOhutusConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaOhutusConnection';
  /** Edges for the RootQueryToPaOhutusConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaOhutusConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaOhutus>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaOhutusConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaOhutusConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaOhutus>;
};

/** Arguments for filtering the RootQueryToPaOhutusConnection connection */
export type GraphCms_Wp_RootQueryToPaOhutusConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaPatareidConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaPatareidConnection';
  /** Edges for the RootQueryToPaPatareidConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaPatareidConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaPatareid>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaPatareidConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaPatareidConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaPatareid>;
};

/** Arguments for filtering the RootQueryToPaPatareidConnection connection */
export type GraphCms_Wp_RootQueryToPaPatareidConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaSuurusConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaSuurusConnection';
  /** Edges for the RootQueryToPaSuurusConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaSuurusConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaSuurus>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaSuurusConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaSuurusConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaSuurus>;
};

/** Arguments for filtering the RootQueryToPaSuurusConnection connection */
export type GraphCms_Wp_RootQueryToPaSuurusConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaVariantConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVariantConnection';
  /** Edges for the RootQueryToPaVariantConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaVariantConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaVariant>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaVariantConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVariantConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaVariant>;
};

/** Arguments for filtering the RootQueryToPaVariantConnection connection */
export type GraphCms_Wp_RootQueryToPaVariantConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaVarvConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVarvConnection';
  /** Edges for the RootQueryToPaVarvConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPaVarvConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaVarv>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaVarvConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVarvConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaVarv>;
};

/** Arguments for filtering the RootQueryToPaVarvConnection connection */
export type GraphCms_Wp_RootQueryToPaVarvConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPaVeekindlusConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVeekindlusConnection';
  /** Edges for the RootQueryToPaVeekindlusConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToPaVeekindlusConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_PaVeekindlus>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPaVeekindlusConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPaVeekindlusConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_PaVeekindlus>;
};

/** Arguments for filtering the RootQueryToPaVeekindlusConnection connection */
export type GraphCms_Wp_RootQueryToPaVeekindlusConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPluginConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPluginConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Plugin>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPluginConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Plugin>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToPostConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToPostConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Post>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type GraphCms_Wp_RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToProductCategoryConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToProductCategoryConnection';
  /** Edges for the RootQueryToProductCategoryConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToProductCategoryConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToProductCategoryConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToProductCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Arguments for filtering the RootQueryToProductCategoryConnection connection */
export type GraphCms_Wp_RootQueryToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToProductConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToProductConnection';
  /** Edges for the RootQueryToProductConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Product>;
};

/** Arguments for filtering the RootQueryToProductConnection connection */
export type GraphCms_Wp_RootQueryToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned a specific category name. */
  categoryName?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryNameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<GraphCms_Wp_StockStatusEnum>>>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagSlugNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products with a specific tax class. */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<GraphCms_Wp_ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<GraphCms_Wp_ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<GraphCms_Wp_CatalogVisibilityEnum>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToProductTagConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToProductTagConnection';
  /** Edges for the RootQueryToProductTagConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToProductTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductTag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToProductTagConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToProductTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductTag>;
};

/** Arguments for filtering the RootQueryToProductTagConnection connection */
export type GraphCms_Wp_RootQueryToProductTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToProductTypeConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToProductTypeConnection';
  /** Edges for the RootQueryToProductTypeConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToProductTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ProductType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToProductTypeConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToProductTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ProductType>;
};

/** Arguments for filtering the RootQueryToProductTypeConnection connection */
export type GraphCms_Wp_RootQueryToProductTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToRefundConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToRefundConnection';
  /** Edges for the RootQueryToRefundConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToRefundConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToRefundConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Refund>;
};

/** Arguments for filtering the RootQueryToRefundConnection connection */
export type GraphCms_Wp_RootQueryToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_WcConnectionOrderbyInput>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToRevisionConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToRevisionConnection';
  /** Edges for the RootQueryToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Revision>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToRevisionConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Revision>;
};

/** Arguments for filtering the RootQueryToRevisionConnection connection */
export type GraphCms_Wp_RootQueryToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToShippingClassConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToShippingClassConnection';
  /** Edges for the RootQueryToShippingClassConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToShippingClassConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ShippingClass>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToShippingClassConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToShippingClassConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ShippingClass>;
};

/** Arguments for filtering the RootQueryToShippingClassConnection connection */
export type GraphCms_Wp_RootQueryToShippingClassConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToShippingMethodConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToShippingMethodConnection';
  /** Edges for the RootQueryToShippingMethodConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToShippingMethodConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_ShippingMethod>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToShippingMethodConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToShippingMethodConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_ShippingMethod>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToTagConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToTagConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Tag>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type GraphCms_Wp_RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToTaxRateConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToTaxRateConnection';
  /** Edges for the RootQueryToTaxRateConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToTaxRateConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_TaxRate>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToTaxRateConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToTaxRateConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_TaxRate>;
};

/** Arguments for filtering the RootQueryToTaxRateConnection connection */
export type GraphCms_Wp_RootQueryToTaxRateConnectionWhereArgs = {
  /** Sort by tax class */
  class?: Maybe<Scalars['String']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_TaxRateConnectionOrderbyInput>>>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToThemeConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToThemeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Theme>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToThemeConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Theme>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToUserConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToUserConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_User>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToUserConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_User>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type GraphCms_Wp_RootQueryToUserConnectionWhereArgs = {
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
  /** Array of comment IDs to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Scalars['Int']>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Scalars['Int']>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of role names that users must match to be included in results. Note
   * that this is an inclusive list: users must match *each* role.
   */
  role?: Maybe<GraphCms_Wp_UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<GraphCms_Wp_UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When
   * "searchColumns" is left empty, it tries to determine which column to search in
   * based on search string.
   */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<
    Array<Maybe<GraphCms_Wp_UsersConnectionSearchColumnEnum>>
  >;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToUserRoleConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_RootQueryToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToUserRoleConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_UserRole>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type GraphCms_Wp_RootQueryToVisibleProductConnection = {
  __typename?: 'GraphCMS_WP_RootQueryToVisibleProductConnection';
  /** Edges for the RootQueryToVisibleProductConnection connection */
  edges?: Maybe<
    Array<Maybe<GraphCms_Wp_RootQueryToVisibleProductConnectionEdge>>
  >;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_VisibleProduct>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  taxonomyInfo?: Maybe<GraphCms_Wp_Taxonomy>;
};

/** An edge in a connection */
export type GraphCms_Wp_RootQueryToVisibleProductConnectionEdge = {
  __typename?: 'GraphCMS_WP_RootQueryToVisibleProductConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_VisibleProduct>;
};

/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export type GraphCms_Wp_RootQueryToVisibleProductConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<GraphCms_Wp_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type GraphCms_Wp_SendPasswordResetEmailInput = {
  clientMutationId: Scalars['String'];
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type GraphCms_Wp_SendPasswordResetEmailPayload = {
  __typename?: 'GraphCMS_WP_SendPasswordResetEmailPayload';
  clientMutationId: Scalars['String'];
  /** The user that the password reset email was sent to */
  user?: Maybe<GraphCms_Wp_User>;
};

/** All of the registered settings */
export type GraphCms_Wp_Settings = {
  __typename?: 'GraphCMS_WP_Settings';
  /** Luba uute artiklite kommenteerimist */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Kõigi kuupäevade vorming. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Veebisaidi alapealkiri. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Seda aadressi kasutatakse saidi haldamisel, näiteks uue kasutaja teavitamiseks. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPressi maakood. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Nädala alguspäeva number. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Kõigi kellaaegade vorming. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Linn samas ajavööndis. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Saidi pealkiri. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Veebilehe aadress. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** lehekülge korraga. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Vaikimisi rubriik. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Vaikimisi postitusevorming */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The shippingClass type */
export type GraphCms_Wp_ShippingClass = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ShippingClass';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the product_shipping_class */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** a shipping line object */
export type GraphCms_Wp_ShippingLine = {
  __typename?: 'GraphCMS_WP_ShippingLine';
  /** The Id of the order item. */
  itemId?: Maybe<Scalars['Int']>;
  /** Shipping Line&#039;s shipping method name */
  methodTitle?: Maybe<Scalars['String']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Shipping Line&#039;s shipping method */
  shippingMethod?: Maybe<GraphCms_Wp_ShippingMethod>;
  /** Line tax class */
  taxClass?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<Array<Maybe<GraphCms_Wp_OrderItemTax>>>;
  /** Line total (after discounts) */
  total?: Maybe<Scalars['String']>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<Scalars['String']>;
};

/** A shipping method object */
export type GraphCms_Wp_ShippingMethod = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_ShippingMethod';
  /** Shipping method description. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the tax rate. */
  id: Scalars['ID'];
  /** The ID of the shipping method. */
  methodId: Scalars['ID'];
  /** Shipping method title. */
  title?: Maybe<Scalars['String']>;
};

/** Product stock status enumeration */
export enum GraphCms_Wp_StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK',
}

/** The tag type */
export type GraphCms_Wp_Tag = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Tag';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the post_tag */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the tag type */
  posts?: Maybe<GraphCms_Wp_TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  tagId?: Maybe<Scalars['Int']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};

/** The tag type */
export type GraphCms_Wp_TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_TagToPostConnectionWhereArgs>;
};

/** Connection between the tag type and the tag type */
export type GraphCms_Wp_TagToPostConnection = {
  __typename?: 'GraphCMS_WP_TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_TagToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_TagToPostConnectionEdge = {
  __typename?: 'GraphCMS_WP_TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Post>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type GraphCms_Wp_TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Tax class enumeration */
export enum GraphCms_Wp_TaxClassEnum {
  /** Inherits Tax class from cart */
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  /** Standard Tax rate */
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE',
}

/** a tax line object */
export type GraphCms_Wp_TaxLine = {
  __typename?: 'GraphCMS_WP_TaxLine';
  /** Is this a compound tax rate? */
  isCompound?: Maybe<Scalars['Boolean']>;
  /** The Id of the order item. */
  itemId?: Maybe<Scalars['Int']>;
  /** Tax rate label */
  label?: Maybe<Scalars['String']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Tax rate code/name */
  rateCode?: Maybe<Scalars['String']>;
  /** Tax line&#039;s shipping tax total */
  shippingTaxTotal?: Maybe<Scalars['String']>;
  /** Tax line&#039;s tax rate */
  taxRate?: Maybe<GraphCms_Wp_TaxRate>;
  /** Tax total (not including shipping taxes) */
  taxTotal?: Maybe<Scalars['String']>;
};

/** A taxonomy object */
export type GraphCms_Wp_Taxonomy = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Taxonomy';
  /** A list of Post Types associated with the taxonomy */
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of Post Types connected to the Taxonomy */
  connectedPostTypes?: Maybe<Array<Maybe<GraphCms_Wp_PostType>>>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};

/** A taxonomy object */
export type GraphCms_Wp_TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** A taxonomy object */
export type GraphCms_Wp_TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<GraphCms_Wp_PostTypeEnum>>>;
};

/** Allowed taxonomies */
export enum GraphCms_Wp_TaxonomyEnum {
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

/** A Tax rate object */
export type GraphCms_Wp_TaxRate = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_TaxRate';
  /** City name. */
  city?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tax class. Default is standard. */
  class?: Maybe<GraphCms_Wp_TaxClassEnum>;
  /** Whether or not this is a compound rate. */
  compound?: Maybe<Scalars['Boolean']>;
  /** Country ISO 3166 code. */
  country?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the tax rate. */
  id: Scalars['ID'];
  /** Tax rate name. */
  name?: Maybe<Scalars['String']>;
  /** Indicates the order that will appear in queries. */
  order?: Maybe<Scalars['Int']>;
  /** Postcode/ZIP. */
  postcode?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tax priority. */
  priority?: Maybe<Scalars['Int']>;
  /** Tax rate. */
  rate?: Maybe<Scalars['String']>;
  /** The ID of the tax rate. */
  rateId?: Maybe<Scalars['Int']>;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: Maybe<Scalars['Boolean']>;
  /** State code. */
  state?: Maybe<Scalars['String']>;
};

/** Field to order the connection by */
export enum GraphCms_Wp_TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER',
}

/** Options for ordering the connection */
export type GraphCms_Wp_TaxRateConnectionOrderbyInput = {
  field: GraphCms_Wp_TaxRateConnectionOrderbyEnum;
  order?: Maybe<GraphCms_Wp_OrderEnum>;
};

/** Product tax status enumeration */
export enum GraphCms_Wp_TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE',
}

/** Options for ordering the connection by */
export enum GraphCms_Wp_TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER',
}

export type GraphCms_Wp_TermObjectUnion =
  | GraphCms_Wp_Category
  | GraphCms_Wp_Tag
  | GraphCms_Wp_ProductType
  | GraphCms_Wp_VisibleProduct
  | GraphCms_Wp_ProductCategory
  | GraphCms_Wp_ProductTag
  | GraphCms_Wp_ShippingClass
  | GraphCms_Wp_PaHind
  | GraphCms_Wp_PaHulk
  | GraphCms_Wp_PaKasutusaeg
  | GraphCms_Wp_PaKogus
  | GraphCms_Wp_PaKontuur
  | GraphCms_Wp_PaKoostisained
  | GraphCms_Wp_PaLaadimisaeg
  | GraphCms_Wp_PaMaterjal
  | GraphCms_Wp_PaMuratasa
  | GraphCms_Wp_PaOhutus
  | GraphCms_Wp_PaPatareid
  | GraphCms_Wp_PaSuurus
  | GraphCms_Wp_PaVariant
  | GraphCms_Wp_PaVarv
  | GraphCms_Wp_PaVeekindlus;

/** A theme object */
export type GraphCms_Wp_Theme = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_Theme';
  /** Name of the theme author(s), could also be a company name. This field is
   * equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an
   * overview of what the theme looks like. This field is equivalent to
   * WP_Theme-&gt;get_screenshot().
   */
  screenshot?: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have
   * subdirectories like: my-theme/sub-theme. This field is equivalent to
   * WP_Theme-&gt;get_stylesheet().
   */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy
   * for directing users to a theme site for support etc. This field is equivalent
   * to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['Float']>;
};

/** Input for the UpdateCategory mutation */
export type GraphCms_Wp_UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type GraphCms_Wp_UpdateCategoryPayload = {
  __typename?: 'GraphCMS_WP_UpdateCategoryPayload';
  /** The created category */
  category?: Maybe<GraphCms_Wp_Category>;
  clientMutationId: Scalars['String'];
};

/** Input for the updateComment mutation */
export type GraphCms_Wp_UpdateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>;
};

/** The payload for the updateComment mutation */
export type GraphCms_Wp_UpdateCommentPayload = {
  __typename?: 'GraphCMS_WP_UpdateCommentPayload';
  clientMutationId: Scalars['String'];
  /** The comment that was created */
  comment?: Maybe<GraphCms_Wp_Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateCustomer mutation */
export type GraphCms_Wp_UpdateCustomerInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<GraphCms_Wp_CustomerAddressInput>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Customer shipping address */
  shipping?: Maybe<GraphCms_Wp_CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateCustomer mutation */
export type GraphCms_Wp_UpdateCustomerPayload = {
  __typename?: 'GraphCMS_WP_UpdateCustomerPayload';
  clientMutationId: Scalars['String'];
  customer?: Maybe<GraphCms_Wp_Customer>;
};

/** Input for the updateItemQuantity mutation */
export type GraphCms_Wp_UpdateItemQuantityInput = {
  clientMutationId: Scalars['String'];
  /** Cart item being updated */
  key: Scalars['ID'];
  /** Cart item's new quantity */
  quantity: Scalars['Int'];
};

/** The payload for the updateItemQuantity mutation */
export type GraphCms_Wp_UpdateItemQuantityPayload = {
  __typename?: 'GraphCMS_WP_UpdateItemQuantityPayload';
  cartItem?: Maybe<GraphCms_Wp_CartItem>;
  clientMutationId: Scalars['String'];
};

/** Input for the updateMediaItem mutation */
export type GraphCms_Wp_UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<GraphCms_Wp_MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type GraphCms_Wp_UpdateMediaItemPayload = {
  __typename?: 'GraphCMS_WP_UpdateMediaItemPayload';
  clientMutationId: Scalars['String'];
  mediaItem?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Input for the updatePage mutation */
export type GraphCms_Wp_UpdatePageInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId: Scalars['String'];
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** If the post is an attachment or a media file, this field will carry the
   * corresponding MIME type. This field is equivalent to the value of
   * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
   * database table.
   */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** The title of the post */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePage mutation */
export type GraphCms_Wp_UpdatePagePayload = {
  __typename?: 'GraphCMS_WP_UpdatePagePayload';
  clientMutationId: Scalars['String'];
  page?: Maybe<GraphCms_Wp_Page>;
};

/** Input for the UpdatePaHind mutation */
export type GraphCms_Wp_UpdatePaHindInput = {
  /** The slug that the pa_hind will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_hind object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paHind object to update */
  id: Scalars['ID'];
  /** The name of the pa_hind object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaHind mutation */
export type GraphCms_Wp_UpdatePaHindPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaHindPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_hind */
  paHind?: Maybe<GraphCms_Wp_PaHind>;
};

/** Input for the UpdatePaHulk mutation */
export type GraphCms_Wp_UpdatePaHulkInput = {
  /** The slug that the pa_hulk will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_hulk object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paHulk object to update */
  id: Scalars['ID'];
  /** The name of the pa_hulk object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaHulk mutation */
export type GraphCms_Wp_UpdatePaHulkPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaHulkPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_hulk */
  paHulk?: Maybe<GraphCms_Wp_PaHulk>;
};

/** Input for the UpdatePaKasutusaeg mutation */
export type GraphCms_Wp_UpdatePaKasutusaegInput = {
  /** The slug that the pa_kasutusaeg will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kasutusaeg object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paKasutusaeg object to update */
  id: Scalars['ID'];
  /** The name of the pa_kasutusaeg object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaKasutusaeg mutation */
export type GraphCms_Wp_UpdatePaKasutusaegPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaKasutusaegPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kasutusaeg */
  paKasutusaeg?: Maybe<GraphCms_Wp_PaKasutusaeg>;
};

/** Input for the UpdatePaKogus mutation */
export type GraphCms_Wp_UpdatePaKogusInput = {
  /** The slug that the pa_kogus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kogus object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paKogus object to update */
  id: Scalars['ID'];
  /** The name of the pa_kogus object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaKogus mutation */
export type GraphCms_Wp_UpdatePaKogusPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaKogusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kogus */
  paKogus?: Maybe<GraphCms_Wp_PaKogus>;
};

/** Input for the UpdatePaKontuur mutation */
export type GraphCms_Wp_UpdatePaKontuurInput = {
  /** The slug that the pa_kontuur will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_kontuur object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paKontuur object to update */
  id: Scalars['ID'];
  /** The name of the pa_kontuur object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaKontuur mutation */
export type GraphCms_Wp_UpdatePaKontuurPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaKontuurPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_kontuur */
  paKontuur?: Maybe<GraphCms_Wp_PaKontuur>;
};

/** Input for the UpdatePaKoostisained mutation */
export type GraphCms_Wp_UpdatePaKoostisainedInput = {
  /** The slug that the pa_koostisained will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_koostisained object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paKoostisained object to update */
  id: Scalars['ID'];
  /** The name of the pa_koostisained object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaKoostisained mutation */
export type GraphCms_Wp_UpdatePaKoostisainedPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaKoostisainedPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_koostisained */
  paKoostisained?: Maybe<GraphCms_Wp_PaKoostisained>;
};

/** Input for the UpdatePaLaadimisaeg mutation */
export type GraphCms_Wp_UpdatePaLaadimisaegInput = {
  /** The slug that the pa_laadimisaeg will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_laadimisaeg object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paLaadimisaeg object to update */
  id: Scalars['ID'];
  /** The name of the pa_laadimisaeg object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaLaadimisaeg mutation */
export type GraphCms_Wp_UpdatePaLaadimisaegPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaLaadimisaegPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_laadimisaeg */
  paLaadimisaeg?: Maybe<GraphCms_Wp_PaLaadimisaeg>;
};

/** Input for the UpdatePaMaterjal mutation */
export type GraphCms_Wp_UpdatePaMaterjalInput = {
  /** The slug that the pa_materjal will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_materjal object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paMaterjal object to update */
  id: Scalars['ID'];
  /** The name of the pa_materjal object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaMaterjal mutation */
export type GraphCms_Wp_UpdatePaMaterjalPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaMaterjalPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_materjal */
  paMaterjal?: Maybe<GraphCms_Wp_PaMaterjal>;
};

/** Input for the UpdatePaMuratasa mutation */
export type GraphCms_Wp_UpdatePaMuratasaInput = {
  /** The slug that the pa_muratasa will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_muratasa object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paMuratasa object to update */
  id: Scalars['ID'];
  /** The name of the pa_muratasa object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaMuratasa mutation */
export type GraphCms_Wp_UpdatePaMuratasaPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaMuratasaPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_muratasa */
  paMuratasa?: Maybe<GraphCms_Wp_PaMuratasa>;
};

/** Input for the UpdatePaOhutus mutation */
export type GraphCms_Wp_UpdatePaOhutusInput = {
  /** The slug that the pa_ohutus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_ohutus object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paOhutus object to update */
  id: Scalars['ID'];
  /** The name of the pa_ohutus object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaOhutus mutation */
export type GraphCms_Wp_UpdatePaOhutusPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaOhutusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_ohutus */
  paOhutus?: Maybe<GraphCms_Wp_PaOhutus>;
};

/** Input for the UpdatePaPatareid mutation */
export type GraphCms_Wp_UpdatePaPatareidInput = {
  /** The slug that the pa_patareid will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_patareid object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paPatareid object to update */
  id: Scalars['ID'];
  /** The name of the pa_patareid object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaPatareid mutation */
export type GraphCms_Wp_UpdatePaPatareidPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaPatareidPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_patareid */
  paPatareid?: Maybe<GraphCms_Wp_PaPatareid>;
};

/** Input for the UpdatePaSuurus mutation */
export type GraphCms_Wp_UpdatePaSuurusInput = {
  /** The slug that the pa_suurus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_suurus object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paSuurus object to update */
  id: Scalars['ID'];
  /** The name of the pa_suurus object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaSuurus mutation */
export type GraphCms_Wp_UpdatePaSuurusPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaSuurusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_suurus */
  paSuurus?: Maybe<GraphCms_Wp_PaSuurus>;
};

/** Input for the UpdatePaVariant mutation */
export type GraphCms_Wp_UpdatePaVariantInput = {
  /** The slug that the pa_variant will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_variant object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paVariant object to update */
  id: Scalars['ID'];
  /** The name of the pa_variant object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaVariant mutation */
export type GraphCms_Wp_UpdatePaVariantPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaVariantPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_variant */
  paVariant?: Maybe<GraphCms_Wp_PaVariant>;
};

/** Input for the UpdatePaVarv mutation */
export type GraphCms_Wp_UpdatePaVarvInput = {
  /** The slug that the pa_varv will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_varv object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paVarv object to update */
  id: Scalars['ID'];
  /** The name of the pa_varv object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaVarv mutation */
export type GraphCms_Wp_UpdatePaVarvPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaVarvPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_varv */
  paVarv?: Maybe<GraphCms_Wp_PaVarv>;
};

/** Input for the UpdatePaVeekindlus mutation */
export type GraphCms_Wp_UpdatePaVeekindlusInput = {
  /** The slug that the pa_veekindlus will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the pa_veekindlus object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paVeekindlus object to update */
  id: Scalars['ID'];
  /** The name of the pa_veekindlus object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaVeekindlus mutation */
export type GraphCms_Wp_UpdatePaVeekindlusPayload = {
  __typename?: 'GraphCMS_WP_UpdatePaVeekindlusPayload';
  clientMutationId: Scalars['String'];
  /** The created pa_veekindlus */
  paVeekindlus?: Maybe<GraphCms_Wp_PaVeekindlus>;
};

/** Input for the updatePost mutation */
export type GraphCms_Wp_UpdatePostInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<GraphCms_Wp_PostCategoriesInput>;
  clientMutationId: Scalars['String'];
  /** The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** If the post is an attachment or a media file, this field will carry the
   * corresponding MIME type. This field is equivalent to the value of
   * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
   * database table.
   */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<GraphCms_Wp_PostTagsInput>;
  /** The title of the post */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type GraphCms_Wp_UpdatePostPayload = {
  __typename?: 'GraphCMS_WP_UpdatePostPayload';
  clientMutationId: Scalars['String'];
  post?: Maybe<GraphCms_Wp_Post>;
};

/** Input for the UpdateProductCategory mutation */
export type GraphCms_Wp_UpdateProductCategoryInput = {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productCategory object to update */
  id: Scalars['ID'];
  /** The name of the product_cat object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductCategory mutation */
export type GraphCms_Wp_UpdateProductCategoryPayload = {
  __typename?: 'GraphCMS_WP_UpdateProductCategoryPayload';
  clientMutationId: Scalars['String'];
  /** The created product_cat */
  productCategory?: Maybe<GraphCms_Wp_ProductCategory>;
};

/** Input for the UpdateProductTag mutation */
export type GraphCms_Wp_UpdateProductTagInput = {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productTag object to update */
  id: Scalars['ID'];
  /** The name of the product_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductTag mutation */
export type GraphCms_Wp_UpdateProductTagPayload = {
  __typename?: 'GraphCMS_WP_UpdateProductTagPayload';
  clientMutationId: Scalars['String'];
  /** The created product_tag */
  productTag?: Maybe<GraphCms_Wp_ProductTag>;
};

/** Input for the UpdateProductType mutation */
export type GraphCms_Wp_UpdateProductTypeInput = {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productType object to update */
  id: Scalars['ID'];
  /** The name of the product_type object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductType mutation */
export type GraphCms_Wp_UpdateProductTypePayload = {
  __typename?: 'GraphCMS_WP_UpdateProductTypePayload';
  clientMutationId: Scalars['String'];
  /** The created product_type */
  productType?: Maybe<GraphCms_Wp_ProductType>;
};

/** Input for the updateSettings mutation */
export type GraphCms_Wp_UpdateSettingsInput = {
  clientMutationId: Scalars['String'];
  /** Luba uute artiklite kommenteerimist */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Luba uute artiklite juures teiste ajaveebide märguandeid (pingback- ja trackback-viited). */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Kõigi kuupäevade vorming. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Veebisaidi alapealkiri. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Seda aadressi kasutatakse saidi haldamisel, näiteks uue kasutaja teavitamiseks. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPressi maakood. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Nädala alguspäeva number. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Kõigi kellaaegade vorming. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Linn samas ajavööndis. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Saidi pealkiri. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Veebilehe aadress. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** lehekülge korraga. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Vaikimisi rubriik. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Vaikimisi postitusevorming */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type GraphCms_Wp_UpdateSettingsPayload = {
  __typename?: 'GraphCMS_WP_UpdateSettingsPayload';
  allSettings?: Maybe<GraphCms_Wp_Settings>;
  clientMutationId: Scalars['String'];
  discussionSettings?: Maybe<GraphCms_Wp_DiscussionSettings>;
  generalSettings?: Maybe<GraphCms_Wp_GeneralSettings>;
  readingSettings?: Maybe<GraphCms_Wp_ReadingSettings>;
  writingSettings?: Maybe<GraphCms_Wp_WritingSettings>;
};

/** Input for the UpdateShippingClass mutation */
export type GraphCms_Wp_UpdateShippingClassInput = {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the shippingClass object to update */
  id: Scalars['ID'];
  /** The name of the product_shipping_class object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateShippingClass mutation */
export type GraphCms_Wp_UpdateShippingClassPayload = {
  __typename?: 'GraphCMS_WP_UpdateShippingClassPayload';
  clientMutationId: Scalars['String'];
  /** The created product_shipping_class */
  shippingClass?: Maybe<GraphCms_Wp_ShippingClass>;
};

/** Input for the UpdateTag mutation */
export type GraphCms_Wp_UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type GraphCms_Wp_UpdateTagPayload = {
  __typename?: 'GraphCMS_WP_UpdateTagPayload';
  clientMutationId: Scalars['String'];
  /** The created post_tag */
  tag?: Maybe<GraphCms_Wp_Tag>;
};

/** Input for the updateUser mutation */
export type GraphCms_Wp_UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type GraphCms_Wp_UpdateUserPayload = {
  __typename?: 'GraphCMS_WP_UpdateUserPayload';
  clientMutationId: Scalars['String'];
  user?: Maybe<GraphCms_Wp_User>;
};

/** Input for the UpdateVisibleProduct mutation */
export type GraphCms_Wp_UpdateVisibleProductInput = {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct object to update */
  id: Scalars['ID'];
  /** The name of the product_visibility object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateVisibleProduct mutation */
export type GraphCms_Wp_UpdateVisibleProductPayload = {
  __typename?: 'GraphCMS_WP_UpdateVisibleProductPayload';
  clientMutationId: Scalars['String'];
  /** The created product_visibility */
  visibleProduct?: Maybe<GraphCms_Wp_VisibleProduct>;
};

/** A User object */
export type GraphCms_Wp_User = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_User';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<GraphCms_Wp_Avatar>;
  /** This field is the id of the user. The id of the user matches WP_User-&gt;ID
   * field and the value in the ID column for the &quot;users&quot; table in SQL.
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** Connection between the User type and the User type */
  comments?: Maybe<GraphCms_Wp_UserToCommentConnection>;
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the User type */
  mediaItems?: Maybe<GraphCms_Wp_UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the User type */
  pages?: Maybe<GraphCms_Wp_UserToPageConnection>;
  /** Connection between the User type and the User type */
  posts?: Maybe<GraphCms_Wp_UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the User type */
  revisions?: Maybe<GraphCms_Wp_UserToRevisionConnection>;
  /** Connection between the User type and the User type */
  roles?: Maybe<GraphCms_Wp_UserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** The Id of the user. Equivalent to WP_User-&gt;ID */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
};

/** A User object */
export type GraphCms_Wp_UserAvatarArgs = {
  size: Scalars['Int'];
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<GraphCms_Wp_AvatarRatingEnum>;
};

/** A User object */
export type GraphCms_Wp_UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type GraphCms_Wp_UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type GraphCms_Wp_UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_UserToPageConnectionWhereArgs>;
};

/** A User object */
export type GraphCms_Wp_UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_UserToPostConnectionWhereArgs>;
};

/** A User object */
export type GraphCms_Wp_UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GraphCms_Wp_UserToRevisionConnectionWhereArgs>;
};

/** A User object */
export type GraphCms_Wp_UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** A user role object */
export type GraphCms_Wp_UserRole = {
  __typename?: 'GraphCMS_WP_UserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The globally unique identifier for the role */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The UI friendly name of the role */
  name?: Maybe<Scalars['String']>;
};

/** Names of available user roles */
export enum GraphCms_Wp_UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER',
}

/** Column used for searching for users */
export enum GraphCms_Wp_UsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL',
}

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToCommentConnection = {
  __typename?: 'GraphCMS_WP_UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToCommentConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Comment>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type GraphCms_Wp_UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<GraphCms_Wp_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<GraphCms_Wp_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToMediaItemConnection = {
  __typename?: 'GraphCMS_WP_UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToMediaItemConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_MediaItem>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type GraphCms_Wp_UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToPageConnection = {
  __typename?: 'GraphCMS_WP_UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToPageConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Page>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type GraphCms_Wp_UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToPostConnection = {
  __typename?: 'GraphCMS_WP_UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToPostConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Post>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type GraphCms_Wp_UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<GraphCms_Wp_PostStatusEnum>>>;
  status?: Maybe<GraphCms_Wp_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToRevisionConnection = {
  __typename?: 'GraphCMS_WP_UserToRevisionConnection';
  /** Edges for the UserToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_Revision>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
  /** Information about the type of content being queried */
  postTypeInfo?: Maybe<GraphCms_Wp_PostType>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToRevisionConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_Revision>;
};

/** Arguments for filtering the UserToRevisionConnection connection */
export type GraphCms_Wp_UserToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<GraphCms_Wp_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<GraphCms_Wp_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<GraphCms_Wp_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type GraphCms_Wp_UserToUserRoleConnection = {
  __typename?: 'GraphCMS_WP_UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<GraphCms_Wp_UserToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GraphCms_Wp_UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<GraphCms_Wp_WpPageInfo>;
};

/** An edge in a connection */
export type GraphCms_Wp_UserToUserRoleConnectionEdge = {
  __typename?: 'GraphCMS_WP_UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GraphCms_Wp_UserRole>;
};

/** A product variation attribute object */
export type GraphCms_Wp_VariationAttribute = {
  __typename?: 'GraphCMS_WP_VariationAttribute';
  /** The Id of the order. Equivalent to WP_Post-&gt;ID */
  id?: Maybe<Scalars['Int']>;
  /** Name of attribute */
  name?: Maybe<Scalars['String']>;
  /** Selected value of attribute */
  value?: Maybe<Scalars['String']>;
};

/** The visibleProduct type */
export type GraphCms_Wp_VisibleProduct = GraphCms_Wp_Node & {
  __typename?: 'GraphCMS_WP_VisibleProduct';
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The global ID for the product_visibility */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy this term belongs to */
  taxonomy?: Maybe<GraphCms_Wp_Taxonomy>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The id field matches the WP_Post-&gt;ID field. */
  visibleProductId?: Maybe<Scalars['Int']>;
};

/** Field to order the connection by */
export enum GraphCms_Wp_WcConnectionOrderbyEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by the menu order value */
  Price = 'PRICE',
  /** Order by the menu order value */
  RegularPrice = 'REGULAR_PRICE',
  /** Order by the menu order value */
  SalePrice = 'SALE_PRICE',
  /** Order by slug */
  Slug = 'SLUG',
}

/** Options for ordering the connection */
export type GraphCms_Wp_WcConnectionOrderbyInput = {
  field: GraphCms_Wp_WcConnectionOrderbyEnum;
  order?: Maybe<GraphCms_Wp_OrderEnum>;
};

/** Information about pagination in a connection. */
export type GraphCms_Wp_WpPageInfo = {
  __typename?: 'GraphCMS_WP_WPPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type GraphCms_Wp_WritingSettings = {
  __typename?: 'GraphCMS_WP_WritingSettings';
  /** Vaikimisi rubriik. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Vaikimisi postitusevorming */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Teisenda emootikonid nagu :-) ja :-P graafilisteks. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type GraphQlSource = Node & {
  __typename?: 'GraphQLSource';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge';
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

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

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Node Interface */
export type Node = {
  __typename?: 'Node';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  sitePage?: Maybe<SitePage>;
  allSitePage?: Maybe<SitePageConnection>;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin?: Maybe<SitePluginConnection>;
  site?: Maybe<Site>;
  allSite?: Maybe<SiteConnection>;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource?: Maybe<GraphQlSourceConnection>;
  cms?: Maybe<GraphCms>;
};

export type QuerySitePageArgs = {
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
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
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
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
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
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

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

export type SiteFilterInput = {
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
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  jsonName?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

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

export type SitePageFilterInput = {
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
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

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

export type SitePluginFilterInput = {
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
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
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
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  refetchInterval?: Maybe<Scalars['Int']>;
  options?: Maybe<SitePluginPluginOptionsOptions>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  refetchInterval?: Maybe<IntQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
  __typename?: 'SitePluginPluginOptionsOptions';
  emitWarning?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  siteName?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
export type ProductForListingFragment = {
  __typename?: 'GraphCMS_WP_Product';
} & Pick<GraphCms_Wp_Product, 'name' | 'slug' | 'price' | 'salePrice'> & {
    image: Maybe<
      { __typename?: 'GraphCMS_WP_MediaItem' } & Pick<
        GraphCms_Wp_MediaItem,
        'srcSet'
      > & {
          mediaDetails: Maybe<
            { __typename?: 'GraphCMS_WP_MediaDetails' } & Pick<
              GraphCms_Wp_MediaDetails,
              'width' | 'height'
            >
          >;
        }
    >;
    galleryImages: Maybe<
      { __typename?: 'GraphCMS_WP_ProductToMediaItemConnection' } & {
        edges: Maybe<
          Array<
            Maybe<
              {
                __typename?: 'GraphCMS_WP_ProductToMediaItemConnectionEdge';
              } & {
                node: Maybe<
                  { __typename?: 'GraphCMS_WP_MediaItem' } & Pick<
                    GraphCms_Wp_MediaItem,
                    'srcSet'
                  > & {
                      mediaDetails: Maybe<
                        { __typename?: 'GraphCMS_WP_MediaDetails' } & Pick<
                          GraphCms_Wp_MediaDetails,
                          'width' | 'height'
                        > & {
                            sizes: Maybe<
                              Array<
                                Maybe<
                                  {
                                    __typename?: 'GraphCMS_WP_MediaSize';
                                  } & Pick<
                                    GraphCms_Wp_MediaSize,
                                    'width' | 'height' | 'sourceUrl'
                                  >
                                >
                              >
                            >;
                          }
                      >;
                    }
                >;
              }
            >
          >
        >;
      }
    >;
  };

export type MainLayoutQueryVariables = {};

export type MainLayoutQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'siteName'>
      >;
    }
  >;
  cms: Maybe<
    { __typename?: 'GraphCMS' } & {
      WP_productCategories: Maybe<
        { __typename?: 'GraphCMS_WP_RootQueryToProductCategoryConnection' } & {
          edges: Maybe<
            Array<
              Maybe<
                {
                  __typename?: 'GraphCMS_WP_RootQueryToProductCategoryConnectionEdge';
                } & {
                  node: Maybe<
                    { __typename?: 'GraphCMS_WP_ProductCategory' } & Pick<
                      GraphCms_Wp_ProductCategory,
                      'name' | 'slug'
                    >
                  >;
                }
              >
            >
          >;
        }
      >;
    }
  >;
};

export type IndexQueryQueryVariables = {};

export type IndexQueryQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'siteName'>
      >;
    }
  >;
  cms: Maybe<
    { __typename?: 'GraphCMS' } & {
      WP_products: Maybe<
        { __typename?: 'GraphCMS_WP_RootQueryToProductConnection' } & {
          edges: Maybe<
            Array<
              Maybe<
                {
                  __typename?: 'GraphCMS_WP_RootQueryToProductConnectionEdge';
                } & {
                  node: Maybe<
                    {
                      __typename?: 'GraphCMS_WP_Product';
                    } & ProductForListingFragment
                  >;
                }
              >
            >
          >;
        }
      >;
    }
  >;
};

export type CategoryTemplateQueryVariables = {
  id: Scalars['ID'];
};

export type CategoryTemplateQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'siteName'>
      >;
    }
  >;
  cms: Maybe<
    { __typename?: 'GraphCMS' } & {
      WP_productCategory: Maybe<
        { __typename?: 'GraphCMS_WP_ProductCategory' } & Pick<
          GraphCms_Wp_ProductCategory,
          'name'
        > & {
            products: Maybe<
              {
                __typename?: 'GraphCMS_WP_ProductCategoryToProductConnection';
              } & {
                edges: Maybe<
                  Array<
                    Maybe<
                      {
                        __typename?: 'GraphCMS_WP_ProductCategoryToProductConnectionEdge';
                      } & {
                        node: Maybe<
                          {
                            __typename?: 'GraphCMS_WP_Product';
                          } & ProductForListingFragment
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export type ProductTemplateQueryVariables = {
  id: Scalars['ID'];
};

export type ProductTemplateQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'siteName'>
      >;
    }
  >;
  cms: Maybe<
    { __typename?: 'GraphCMS' } & {
      WP_product: Maybe<
        { __typename?: 'GraphCMS_WP_Product' } & Pick<
          GraphCms_Wp_Product,
          'id' | 'name' | 'description'
        > & {
            image: Maybe<
              { __typename?: 'GraphCMS_WP_MediaItem' } & Pick<
                GraphCms_Wp_MediaItem,
                'srcSet'
              > & {
                  mediaDetails: Maybe<
                    { __typename?: 'GraphCMS_WP_MediaDetails' } & Pick<
                      GraphCms_Wp_MediaDetails,
                      'width' | 'height'
                    >
                  >;
                }
            >;
          }
      >;
    }
  >;
};
