import { getProductListing } from '@coterminous/wp-lib';

function getConnection(props) {
  const { cursor = new Date().toISOString() } = props;

  return {
    cursor,
    edges: getEdges(props),
  };
}

async function getEdges(props) {
  const { cursor = new Date().toISOString() } = props;

  const response = await getProductListing({ parameters: { before: cursor } });

  return response.listing.map(({ product }) => {
    return {
      node: {
        name: product.name,
        createdAt: product.date_created_gmt,
      },
    };
  });
}

const Product = {
  Query: {
    productsListing: (channel, props) => getConnection(props),
  },
};

export default Product;
