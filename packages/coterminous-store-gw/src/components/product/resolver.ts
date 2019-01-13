import { getProductListing } from '@coterminous/wp-lib';
import { ProductListing } from '@coterminous/wp-lib/dist/components/getProduct/getProductListing';
import {
  PageInfo,
  ProductNode,
  ProductsListingQueryArgs,
} from '../../codegen/types';

async function getConnection(props: ProductsListingQueryArgs) {
  const { cursor = new Date().toISOString(), first = 16 } = props;

  const response = await getProductListing({
    parameters: { before: cursor, per_page: first },
  });

  return {
    cursor,
    pageInfo: getPageInfo(response),
    edges: getEdges(response),
  };
}

function getEdges(response: ProductListing): ProductNode[] {
  return response.listing.map(({ product }) => {
    return {
      node: {
        name: product.name,
        createdAt: product.date_created_gmt,
      },
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
