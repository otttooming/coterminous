const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const QUERY_PRODUCT_LIST = `
    query productList($after: String) {
      cms {
        WP_products(first: 100 after: $after) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
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

  const { data: initialResponse } = await graphql(QUERY_PRODUCT_LIST);
  let data = initialResponse;

  const productList = [data.cms.WP_products.edges];

  while (data.cms.WP_products.pageInfo.hasNextPage) {
    const { data: newResponse } = await graphql(QUERY_PRODUCT_LIST, {
      after: data.cms.WP_products.pageInfo.endCursor,
    });

    data = newResponse;

    productList.push(data.cms.WP_products.edges);
  }

  productList.forEach(chunk => {
    chunk.forEach(blog => {
      actions.createPage({
        path: blog.node.slug,
        component: path.resolve(`./src/templates/product/Product.tsx`),
        context: {
          id: blog.node.id,
        },
      });
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
