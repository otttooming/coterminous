import "isomorphic-unfetch";

import * as api from "../../services/api/Api";
import { getProducts } from "../../services/productApi/productApi";
import { getSingleProduct } from "../../services/productApi/singleProductApi";

import {
  CART_SLUGS,
  CHECKOUT_SLUGS,
  LOCATION_TYPES,
  PRODUCT_SLUGS,
  PRODUCT_LISTING_SLUGS,
  LANDING_SLUGS,
  SITE_NAME,
  CATEGORY_SLUGS,
  VIEW_NAMES,
} from "../../common/products/constants";

import { LocationChangeProps } from "../../common/products/typings";

import { State } from "../../pages/index";

const handleProductsListing = async (
  props: State,
  category?: number
): Promise<State> => {
  const { navRouting } = props;
  const { page } = navRouting;

  const categoryRequest = !!category ? category : "";

  const products = await getProducts(api, page, categoryRequest);

  const nextNavRouting = {
    ...navRouting,
    page: products.page,
    totalPages: products.totalPages,
  };

  return { ...props, products: products.products, navRouting: nextNavRouting };
};

const handleSingleProduct = async (props: State): Promise<State> => {
  const { navRouting } = props;
  const { pathName } = navRouting;

  const name = pathName[0];

  const isProductFetched =
    props.singleProduct && props.singleProduct.product.slug === name;

  if (isProductFetched) {
    return props;
  }

  const singleProduct = await getSingleProduct(api, name);

  return { ...props, singleProduct };
};

const handleCategory = async (props: State): Promise<State> => {
  const { categories, navRouting } = props;

  const category = categories.filter((item: any) => {
    return item.slug === navRouting.pathName[0];
  });

  const id = category[0].id;

  const products = await handleProductsListing(props, id);

  return { ...props, ...products };
};

const handleDefault = async (props: State): Promise<State> => {
  return { ...props };
};

export const handleRouting = async (props: State): Promise<State> => {
  const { navRouting } = props;
  const { view } = navRouting;

  switch (view) {
    case PRODUCT_SLUGS.DEFAULT:
      return handleSingleProduct(props);
    case PRODUCT_LISTING_SLUGS.DEFAULT:
      return handleProductsListing(props);
    case CATEGORY_SLUGS.DEFAULT:
      return handleCategory(props);
    default:
      return handleDefault(props);
  }
};

export const createNavRoutingFromQuery = (request: any) => {
  const requestPathName = request.path.split("/").filter((item: string) => {
    return item !== "";
  });

  const view =
    !!requestPathName.length &&
    VIEW_NAMES.includes(requestPathName[0].toUpperCase())
      ? requestPathName[0].toUpperCase()
      : LANDING_SLUGS.DEFAULT;

  const page =
    !!requestPathName.length &&
    !isNaN(Number(requestPathName[requestPathName.length]))
      ? Number(requestPathName[requestPathName.length])
      : 1;

  const pathName = requestPathName.filter((item: string) => {
    return VIEW_NAMES.includes(item);
  });

  const navRouting: LocationChangeProps = {
    type: LOCATION_TYPES.PAGE,
    view,
    pathName,
    page,
  };

  return navRouting;
};
