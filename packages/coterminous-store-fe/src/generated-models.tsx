export interface SitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[];

  order?: SitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null;

  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null;

  path?: SitePageConnectionPathQueryString_2 | null;

  component?: SitePageConnectionComponentQueryString | null;

  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null;

  context?: SitePageConnectionContextInputObject | null;

  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null;

  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null;

  componentPath?: SitePageConnectionComponentPathQueryString | null;

  id?: SitePageConnectionIdQueryString_2 | null;

  internal?: SitePageConnectionInternalInputObject_2 | null;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionContextInputObject {
  id?: SitePageConnectionContextIdQueryInteger | null;
}

export interface SitePageConnectionContextIdQueryInteger {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null;

  id?: SitePageConnectionPluginCreatorIdQueryString | null;

  name?: SitePageConnectionPluginCreatorNameQueryString | null;

  version?: SitePageConnectionPluginCreatorVersionQueryString | null;

  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null;

  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null;

  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null;

  internal?: SitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  fieldName?: SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString | null;

  url?: SitePageConnectionPluginCreatorPluginOptionsUrlQueryString | null;

  typeName?: SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString | null;

  refetchInterval?: SitePageConnectionPluginCreatorPluginOptionsRefetchIntervalQueryInteger | null;

  options?: SitePageConnectionPluginCreatorPluginOptionsOptionsInputObject | null;

  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;

  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsUrlQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsRefetchIntervalQueryInteger {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOptionsInputObject {
  emitWarning?: SitePageConnectionPluginCreatorPluginOptionsOptionsEmitWarningQueryBoolean | null;

  failOnError?: SitePageConnectionPluginCreatorPluginOptionsOptionsFailOnErrorQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOptionsEmitWarningQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOptionsFailOnErrorQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null;

  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null;

  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null;

  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null;

  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null;

  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null;

  description?: SitePageConnectionInternalDescriptionQueryString | null;

  owner?: SitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[];

  order?: SitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null;

  id?: SitePluginConnectionIdQueryString_2 | null;

  name?: SitePluginConnectionNameQueryString_2 | null;

  version?: SitePluginConnectionVersionQueryString_2 | null;

  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null;

  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null;

  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null;

  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null;

  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null;

  internal?: SitePluginConnectionInternalInputObject_2 | null;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  fieldName?: SitePluginConnectionPluginOptionsFieldNameQueryString_2 | null;

  url?: SitePluginConnectionPluginOptionsUrlQueryString_2 | null;

  typeName?: SitePluginConnectionPluginOptionsTypeNameQueryString_2 | null;

  refetchInterval?: SitePluginConnectionPluginOptionsRefetchIntervalQueryInteger_2 | null;

  options?: SitePluginConnectionPluginOptionsOptionsInputObject_2 | null;

  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null;

  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsFieldNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginOptionsUrlQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginOptionsTypeNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginOptionsRefetchIntervalQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePluginConnectionPluginOptionsOptionsInputObject_2 {
  emitWarning?: SitePluginConnectionPluginOptionsOptionsEmitWarningQueryBoolean_2 | null;

  failOnError?: SitePluginConnectionPluginOptionsOptionsFailOnErrorQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsOptionsEmitWarningQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginConnectionPluginOptionsOptionsFailOnErrorQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null;

  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null;

  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null;

  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null;

  type?: SitePluginConnectionInternalTypeQueryString_2 | null;

  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageContextInputObject {
  id?: SitePageContextIdQueryInteger | null;
}

export interface SitePageContextIdQueryInteger {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null;

  id?: SitePagePluginCreatorIdQueryString | null;

  name?: SitePagePluginCreatorNameQueryString | null;

  version?: SitePagePluginCreatorVersionQueryString | null;

  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null;

  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null;

  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null;

  internal?: SitePagePluginCreatorInternalInputObject | null;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  fieldName?: SitePagePluginCreatorPluginOptionsFieldNameQueryString | null;

  url?: SitePagePluginCreatorPluginOptionsUrlQueryString | null;

  typeName?: SitePagePluginCreatorPluginOptionsTypeNameQueryString | null;

  refetchInterval?: SitePagePluginCreatorPluginOptionsRefetchIntervalQueryInteger | null;

  options?: SitePagePluginCreatorPluginOptionsOptionsInputObject | null;

  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null;

  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsFieldNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginOptionsUrlQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginOptionsTypeNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginOptionsRefetchIntervalQueryInteger {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePagePluginCreatorPluginOptionsOptionsInputObject {
  emitWarning?: SitePagePluginCreatorPluginOptionsOptionsEmitWarningQueryBoolean | null;

  failOnError?: SitePagePluginCreatorPluginOptionsOptionsFailOnErrorQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsOptionsEmitWarningQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePagePluginCreatorPluginOptionsOptionsFailOnErrorQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null;

  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePagePluginCreatorPackageJsonMainQueryString | null;

  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null;

  type?: SitePagePluginCreatorInternalTypeQueryString | null;

  owner?: SitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null;

  contentDigest?: SitePageInternalContentDigestQueryString_2 | null;

  description?: SitePageInternalDescriptionQueryString | null;

  owner?: SitePageInternalOwnerQueryString_2 | null;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginOptionsInputObject_2 {
  fieldName?: SitePluginPluginOptionsFieldNameQueryString_2 | null;

  url?: SitePluginPluginOptionsUrlQueryString_2 | null;

  typeName?: SitePluginPluginOptionsTypeNameQueryString_2 | null;

  refetchInterval?: SitePluginPluginOptionsRefetchIntervalQueryInteger_2 | null;

  options?: SitePluginPluginOptionsOptionsInputObject_2 | null;

  path?: SitePluginPluginOptionsPathQueryString_2 | null;

  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsFieldNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginOptionsUrlQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginOptionsTypeNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginOptionsRefetchIntervalQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: number[] | null;

  nin?: number[] | null;
}

export interface SitePluginPluginOptionsOptionsInputObject_2 {
  emitWarning?: SitePluginPluginOptionsOptionsEmitWarningQueryBoolean_2 | null;

  failOnError?: SitePluginPluginOptionsOptionsFailOnErrorQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsOptionsEmitWarningQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginPluginOptionsOptionsFailOnErrorQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null;

  description?: SitePluginPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginPackageJsonVersionQueryString_2 | null;

  main?: SitePluginPackageJsonMainQueryString_2 | null;

  license?: SitePluginPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null;

  type?: SitePluginInternalTypeQueryString_2 | null;

  owner?: SitePluginInternalOwnerQueryString_2 | null;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteSiteMetadataInputObject_2 {
  siteName?: SiteSiteMetadataSiteNameQueryString_2 | null;
}

export interface SiteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePortQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteHostQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: boolean[] | null;

  nin?: boolean[] | null;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null;

  type?: SiteInternalTypeQueryString_2 | null;

  owner?: SiteInternalOwnerQueryString_2 | null;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: string[] | null;

  nin?: string[] | null;
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___id = 'context___id',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___id = 'context___id',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___id = 'context___id',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___refetchInterval = 'pluginOptions___refetchInterval',
  pluginOptions___options___emitWarning = 'pluginOptions___options___emitWarning',
  pluginOptions___options___failOnError = 'pluginOptions___options___failOnError',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___refetchInterval = 'pluginOptions___refetchInterval',
  pluginOptions___options___emitWarning = 'pluginOptions___options___emitWarning',
  pluginOptions___options___failOnError = 'pluginOptions___options___failOnError',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___url = 'pluginOptions___url',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___refetchInterval = 'pluginOptions___refetchInterval',
  pluginOptions___options___emitWarning = 'pluginOptions___options___emitWarning',
  pluginOptions___options___failOnError = 'pluginOptions___options___failOnError',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum GraphCmsCacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

export type GraphCmsUpload = any;

// ====================================================
// Documents
// ====================================================

export type IndexQueryVariables = {};

export type IndexQueryQuery = {
  __typename?: 'Query';

  site: IndexQuerySite | null;

  cms: IndexQueryCms | null;
};

export type IndexQuerySite = {
  __typename?: 'Site';

  siteMetadata: IndexQuerySiteMetadata | null;
};

export type IndexQuerySiteMetadata = {
  __typename?: 'siteMetadata_2';

  siteName: string | null;
};

export type IndexQueryCms = {
  __typename?: 'GraphCMS';

  productList: IndexQueryProductList | null;
};

export type IndexQueryProductList = {
  __typename?: 'GraphCMS_ProductList';

  edges: IndexQueryEdges[] | null;
};

export type IndexQueryEdges = {
  __typename?: 'GraphCMS_ProductNode';

  node: IndexQueryNode | null;
};

export type IndexQueryNode = {
  __typename?: 'GraphCMS_Product';

  name: string | null;

  slug: string | null;
};

export type ProductTemplateVariables = {
  id: number;
};

export type ProductTemplateQuery = {
  __typename?: 'Query';

  site: ProductTemplateSite | null;

  cms: ProductTemplateCms | null;
};

export type ProductTemplateSite = {
  __typename?: 'Site';

  siteMetadata: ProductTemplateSiteMetadata | null;
};

export type ProductTemplateSiteMetadata = {
  __typename?: 'siteMetadata_2';

  siteName: string | null;
};

export type ProductTemplateCms = {
  __typename?: 'GraphCMS';

  product: ProductTemplateProduct | null;
};

export type ProductTemplateProduct = {
  __typename?: 'GraphCMS_Product';

  id: number | null;

  name: string | null;

  images: ProductTemplateImages[] | null;
};

export type ProductTemplateImages = {
  __typename?: 'GraphCMS_ProductImages';

  aspectRatio: number | null;

  width: number | null;

  height: number | null;

  sizes: ProductTemplateSizes[] | null;
};

export type ProductTemplateSizes = {
  __typename?: 'GraphCMS_ProductImageSizes';

  url: string | null;

  width: number | null;

  height: number | null;
};
