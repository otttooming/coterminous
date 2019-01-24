const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query productsListing {
      cms {
        productsListing {
          edges {
            node {
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
  data.cms.productsListing.edges.forEach(blog => {
    actions.createPage({
      path: blog.node.slug,
      component: path.resolve(`./src/components/BlogPost.tsx`),
      context: {
        blogId: blog.node.name,
      },
    });
  });
};
