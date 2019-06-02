import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Main from '../layouts/Main';
import {
  Image,
  GridItem,
  Heading,
  Grid,
  theme,
  Card,
} from '@coterminous/ui-lib';
import { IndexQueryQuery } from '../generated-models';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexQueryQuery;
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      WP_products {
        edges {
          node {
            name
            slug
            price
            salePrice
            image {
              mediaDetails {
                width
                height
              }
              srcSet
            }
            galleryImages {
              edges {
                node {
                  srcSet
                  mediaDetails {
                    width
                    height
                    sizes {
                      width
                      height
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  readonly hello = `Hello`;
  public render() {
    const { data } = this.props;
    const { siteName } = this.props.data.site.siteMetadata;
    return (
      <Main
        renderSidebar={
          <Image
            width={430}
            height={160}
            srcSet={[
              {
                url:
                  'https://www.aadliaare.ee/wp-content/uploads/2017/05/aadli_aare_logo.png',
                width: 430,
                height: 160,
              },
            ]}
          />
        }
      >
        <Heading as="h2">Product list</Heading>
        <Grid
          as="ul"
          gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))"
          gridGap={theme.space.xl}
        >
          {data.cms.WP_products.edges.map(
            (
              {
                node: {
                  slug,
                  name,
                  image: {
                    srcSet,
                    mediaDetails: { width, height },
                  },
                },
              },
              index,
            ) => (
              <GridItem key={index}>
                <Link
                  to={`/${slug}/`}
                  activeStyle={{
                    color: 'red',
                  }}
                  state={{
                    pleasant: 'reasonably',
                  }}
                >
                  <Card
                    content={
                      <Image width={width} height={height} srcSet={srcSet} />
                    }
                  >
                    {name}
                  </Card>
                </Link>
              </GridItem>
            ),
          )}
        </Grid>
      </Main>
    );
  }
}
