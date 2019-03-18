import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import {
  Heading,
  Button,
  ButtonSize,
  Card,
  Grid,
  GridItem,
  Section,
  Image,
  theme,
} from '../../';

const image = {
  width: 1200,
  height: 1200,
  aspectRatio: 100,
  sizes: [
    {
      url: 'https://via.placeholder.com/1200',
      width: 1200,
      height: 1200,
    },
  ],
};

const logo = {
  width: 640,
  height: 360,
  aspectRatio: 1,
  sizes: [
    {
      url: 'https://dummyimage.com/640x360/fff/aaa',
      width: 640,
      height: 360,
    },
  ],
};

const footer = (
  <>
    <Heading.H1>Title of the card</Heading.H1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.medium,
      }}
    >
      20$
      <Button size={ButtonSize.SMALL}>Click me</Button>
    </div>
  </>
);

const stories = storiesOf('Product listing', module);

stories.add('Default', () => (
  <StorybookWrapper style={{ margin: 0 }}>
    <Grid areas="sidebar content" columns="16rem 1fr" gap="0">
      <GridItem
        area="sidebar"
        style={{
          padding: theme.spacing.large,
          paddingRight: theme.spacing.huge,
          backgroundColor: '#E6EDF3',
        }}
      >
        <div>
          <Card image={logo} />

          <Heading.H1>Menu</Heading.H1>

          <Section>Menu link</Section>
        </div>
      </GridItem>

      <GridItem
        area="content"
        style={{
          padding: theme.spacing.large,
          paddingLeft: theme.spacing.huge,
        }}
      >
        <div>
          <Card
            footer={<>Search</>}
            style={{ marginBottom: theme.spacing.huge }}
          />
          <Heading.H1>Product list</Heading.H1>

          <Grid as="ul" columns="repeat(auto-fill, minmax(20rem, 1fr))">
            {[...Array(16)].map((item, index) => (
              <GridItem as="li" key={index}>
                <Card footer={footer} image={image} />
              </GridItem>
            ))}
          </Grid>
        </div>
      </GridItem>
    </Grid>
  </StorybookWrapper>
));
