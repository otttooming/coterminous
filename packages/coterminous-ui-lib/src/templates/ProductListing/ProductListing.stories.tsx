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
    <Button size={ButtonSize.SMALL}>Click me</Button>
  </>
);

const stories = storiesOf('Product listing', module);

stories.add('Default', () => (
  <StorybookWrapper>
    <Grid areas="sidebar content" columns="20rem 1fr">
      <GridItem area="sidebar">
        <div>
          <Card image={logo} />

          <Heading.H1>Menu</Heading.H1>

          <Section>Menu link</Section>
        </div>
      </GridItem>

      <GridItem area="content">
        <div>
          {/* <Heading.H1>Product list</Heading.H1> */}

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
