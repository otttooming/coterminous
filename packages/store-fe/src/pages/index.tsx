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
  List,
  ListItem,
} from '@coterminous/ui-lib';
import { IndexQueryQuery } from '../generated-models';

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
            ...ProductForListing
          }
        }
      }
      WP_productCategories {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  }
`;

class Index extends React.Component<IndexPageProps, {}> {
  public render() {
    const { data } = this.props;

    return (
      <Main
        renderSidebar={
          <>
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
            <List>
              {data.cms.WP_productCategories.edges.map(
                ({ node: { name, slug } }) => (
                  <ListItem>
                    <Link to={slug}>{name}</Link>
                  </ListItem>
                ),
              )}
            </List>
          </>
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

export default Index;
