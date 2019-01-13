import { getProductListing } from '@coterminous/wp-lib';
import { ProductListing } from '@coterminous/wp-lib/dist/components/getProduct/getProductListing';
import { PageInfo, ProductNode } from '../../codegen/types';

async function getConnection(props) {
  const { cursor = new Date().toISOString() } = props;

  const response = await getProductListing({ parameters: { before: cursor } });

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
    listing,
    meta: { totalPages, options },
  } = response;

  const hasNextPage = listing.length !== 0;

  return {
    hasNextPage: true,
    hasPreviousPage: true,
    totalPages,
  };
}

const Product = {
  Query: {
    productsListing: (channel, props) => getConnection(props),
  },
};

export default Product;
