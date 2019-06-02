const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query productList {
      cms {
        WP_products {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    }
  `);

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  data.cms.WP_products.edges.forEach(blog => {
    actions.createPage({
      path: blog.node.slug,
      component: path.resolve(`./src/templates/product/Product.tsx`),
      context: {
        id: blog.node.id,
      },
    });
  });
};
