const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query productList {
      cms {
        productList {
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
  data.cms.productList.edges.forEach(blog => {
    actions.createPage({
      path: blog.node.slug,
      component: path.resolve(`./src/components/BlogPost.tsx`),
      context: {
        id: blog.node.id,
      },
    });
  });
};
