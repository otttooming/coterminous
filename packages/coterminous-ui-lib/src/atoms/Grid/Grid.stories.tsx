import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Heading, Button, ButtonSize, Card } from '../../';
import Grid, { GridItem } from './';
import Image from '../../components/Image';

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

const footer = (
  <>
    <Heading as="h2">Title of the card</Heading>
    <Button size={ButtonSize.SMALL}>Click me</Button>
  </>
);

export const GridStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Heading as="h1">Product list</Heading>
      <Grid as="ul" gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))">
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
        <GridItem as="li">
          <Card content={footer}>
            <Image image={image} />
          </Card>
        </GridItem>
      </Grid>
    </StorybookWrapper>
  );
};

const stories = storiesOf('Grid', module);
stories.add('Default', GridStoryDefault);
