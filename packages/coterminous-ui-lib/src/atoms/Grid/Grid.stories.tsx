import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import { Heading, Button, ButtonSize, Card } from '../../';
import Grid, { GridItem } from './';

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
    <Heading.H1>Title of the card</Heading.H1>
    <Button size={ButtonSize.SMALL}>Click me</Button>
  </>
);

export const GridStoryDefault = () => {
  return (
    <StorybookWrapper>
      <Heading.H1>Product list</Heading.H1>
      <Grid>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
        <GridItem>
          <Card footer={footer} image={image} />
        </GridItem>
      </Grid>
    </StorybookWrapper>
  );
};

const stories = storiesOf('Grid', module);
stories.add('Default', GridStoryDefault);
