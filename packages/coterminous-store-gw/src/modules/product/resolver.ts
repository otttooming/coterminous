import * as WPAPI from 'wpapi';

// https://dev-spiceflow.pantheonsite.io/wp-json/wc/v2/products/?consumer_key=ck_a67345603373570cfc213659c53f941e2dc8c64f&consumer_secret=cs_186c4d5992dab11ceb56059bccf0dc31ea77c37b
const wp = new WPAPI({
  endpoint: 'https://dev-spiceflow.pantheonsite.io/wp-json',
});
wp.products = wp.registerRoute('wc/v2', '/products');
// wp.myCustomResource = wp.registerRoute( 'wc/v2', '/ott/(?P<id>)' );

// https://www.prisma.io/blog/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d/

function getConnection(props) {
  const { cursor = new Date().toISOString() } = props;

  return {
    cursor,
    edges: getEdges(props),
  };
}

async function getEdges(props) {
  const { cursor = new Date().toISOString() } = props;

  const anyt = await wp
    .products()
    .param('before', cursor)
    .param('consumer_key', 'ck_a67345603373570cfc213659c53f941e2dc8c64f')
    .param('consumer_secret', 'cs_186c4d5992dab11ceb56059bccf0dc31ea77c37b');

  // console.log(anyt);

  return anyt.map(node => {
    console.log(props.cursor, node.name);

    return {
      node: {
        name: node.name,
        createdAt: node.date_created_gmt,
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
