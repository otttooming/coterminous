import { getProductListing } from '@coterminous/wp-lib';
import { ProductListing } from '@coterminous/wp-lib/dist/components/getProduct/getProductListing';
import {
  PageInfo,
  ProductNode,
  ProductsListingQueryArgs,
} from '../../codegen/types';

async function getConnection(props: ProductsListingQueryArgs) {
  const { first = 16, before } = props;

  const response = await getProductListing({
    parameters: { before, per_page: first },
  });

  return {
    pageInfo: getPageInfo(response),
    edges: getEdges(props, response),
  };
}

function getEdges(
  props: ProductsListingQueryArgs,
  response: ProductListing,
): ProductNode[] {
  const { before } = props;

  return response.listing.map(({ product }) => {
    return {
      node: {
        name: product.name,
        createdAt: product.date_created_gmt,
      },
      cursor: before ? product.date_created_gmt : undefined,
    };
  });
}

function getPageInfo(response: ProductListing): PageInfo {
  const {
    meta: { totalPages, total, hasNextPage, hasPreviousPage },
  } = response;

  return {
    hasNextPage,
    hasPreviousPage,
    total,
    totalPages,
  };
}

const Product = {
  Query: {
    productsListing: (channel, props) => getConnection(props),
  },
};

export default Product;
