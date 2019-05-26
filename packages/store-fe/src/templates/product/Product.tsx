import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Main from '../../layouts/Main';
import Header from '../../components/header/Header';
import ProductItem from '../../components/productItem/ProductItem';
import { ProductTemplateQuery } from '../../generated-models';
import {
  Heading,
  Grid,
  GridItem,
  Card,
  Image,
  theme,
} from '@coterminous/ui-lib';

interface Props {
  data: ProductTemplateQuery;
}

const ProductTemplate: React.FC<Props> = ({
  data: {
    cms: {
      product: {
        name,
        description,
        image: {
          mediaDetails: { width, height },
          srcSet,
        },
      },
    },
  },
}) => {
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
      <Heading as="h2">{name}</Heading>
      <Grid
        gridTemplateAreas={`"left right"`}
        gridTemplateColumns="480px 1fr"
        gridGap={theme.space.xl}
      >
        <GridItem area="left">
          <Card
            content={<Image width={width} height={height} srcSet={srcSet} />}
          />
        </GridItem>
        <GridItem
          area="right"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Grid>
    </Main>
  );
};

export const query = graphql`
  query ProductTemplate($id: ID!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      product(id: $id) {
        id
        name
        description
        image {
          mediaDetails {
            width
            height
          }
          srcSet
        }
      }
    }
  }
`;

export default ProductTemplate;
