const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const QUERY_PRODUCT_LIST = `
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
  `;

  const { data: productList } = await graphql(QUERY_PRODUCT_LIST);

  productList.cms.WP_products.edges.forEach(blog => {
    actions.createPage({
      path: blog.node.slug,
      component: path.resolve(`./src/templates/product/Product.tsx`),
      context: {
        id: blog.node.id,
      },
    });
  });

  const QUERY_PRODUCT_CATEGORIES = `
    query productCategories {
      cms {
        WP_productCategories {
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
  `;

  const { data: productCategories } = await graphql(QUERY_PRODUCT_CATEGORIES);

  productCategories.cms.WP_productCategories.edges.forEach(category => {
    actions.createPage({
      path: category.node.slug,
      component: path.resolve(`./src/templates/category/Category.tsx`),
      context: {
        id: category.node.id,
      },
    });
  });
};
